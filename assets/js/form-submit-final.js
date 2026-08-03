'use strict';

/**
 * Lead form controller
 * Native POST to Google Forms through a hidden iframe to avoid CORS issues.
 */
(() => {
  const CORE = window.BYD_CORE;
  const CONFIG = window.BYD_CONFIG || {};
  if (!CORE) throw new Error('BYD_CORE must be loaded before form-submit-final.js');

  const { query: $, queryAll: $$, on, safeStorage } = CORE;
  const FORM_SELECTOR = '.lead-form';
  const PHONE_PATTERN = /^(0)(3|5|7|8|9)[0-9]{8}$/;
  const cooldownKey = 'byd:last-lead-submit';

  const fields = Object.freeze([
    { name: 'name', message: 'Vui lòng nhập họ và tên.', valid: value => value.length >= 2 },
    { name: 'phone', message: 'Số điện thoại Việt Nam phải đủ 10 chữ số.', valid: value => PHONE_PATTERN.test(value) },
    { name: 'vehicle', message: 'Vui lòng chọn dòng xe quan tâm.', valid: Boolean },
    { name: 'area', message: 'Vui lòng nhập khu vực.', valid: Boolean }
  ]);

  function cleanPhone(value) {
    return String(value || '').replace(/\D/g, '').slice(0, 10);
  }

  function valueOf(form, name) {
    const field = $(`[name="${name}"]`, form);
    const value = name === 'phone' ? cleanPhone(field?.value) : String(field?.value || '').trim();
    if (field && name === 'phone') field.value = value;
    return value;
  }

  function setFieldError(field, message = '') {
    if (!field) return;
    const wrapper = field.closest('.form-field');
    const error = $('.form-error', wrapper || field.parentElement);
    field.classList.toggle('is-invalid', Boolean(message));
    field.setAttribute('aria-invalid', String(Boolean(message)));
    if (error) error.textContent = message;
  }

  function validate(form) {
    let firstInvalid = null;
    const data = {};

    fields.forEach((rule) => {
      const field = $(`[name="${rule.name}"]`, form);
      const value = valueOf(form, rule.name);
      data[rule.name] = value;
      const message = rule.valid(value) ? '' : rule.message;
      setFieldError(field, message);
      if (message && !firstInvalid) firstInvalid = field;
    });

    const consent = $('[name="consent"]', form);
    if (consent) {
      const invalid = !consent.checked;
      consent.closest('.form-consent')?.classList.toggle('is-invalid', invalid);
      consent.setAttribute('aria-invalid', String(invalid));
      if (invalid && !firstInvalid) firstInvalid = consent;
    }

    if (firstInvalid) {
      firstInvalid.focus({ preventScroll: true });
      firstInvalid.scrollIntoView({ behavior: CORE.reducedMotion.matches ? 'auto' : 'smooth', block: 'center' });
      return { valid: false, data };
    }
    return { valid: true, data };
  }

  function setStatus(form, type, message) {
    const status = $('.form-status', form);
    if (!status) return;
    status.className = `form-status${type ? ` is-${type}` : ''}`;
    status.textContent = message;
  }

  function appendHidden(form, name, value) {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = String(value ?? '');
    form.appendChild(input);
  }

  function verifyConfiguration() {
    const endpoint = String(CONFIG.formEndpoint || '').trim();
    const map = CONFIG.googleFormFields || {};
    const validEndpoint = /^https:\/\/docs\.google\.com\/forms\/d\/e\/[^/]+\/formResponse$/i.test(endpoint);
    const validFields = ['name', 'phone', 'vehicle', 'area'].every(key => Boolean(map[key]));
    if (!validEndpoint || !validFields) throw new Error('Cấu hình Google Forms chưa hợp lệ.');
    return { endpoint, map };
  }

  function postToGoogleForms(payload) {
    const { endpoint, map } = verifyConfiguration();

    return new Promise((resolve, reject) => {
      const id = `byd-form-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const frame = document.createElement('iframe');
      const transport = document.createElement('form');
      let submitted = false;
      let completed = false;
      let timeout;

      const cleanup = () => {
        window.clearTimeout(timeout);
        window.setTimeout(() => {
          frame.remove();
          transport.remove();
        }, 500);
      };

      const finish = (error) => {
        if (completed) return;
        completed = true;
        cleanup();
        error ? reject(error) : resolve();
      };

      frame.name = id;
      frame.title = 'Kết quả gửi yêu cầu';
      frame.src = 'about:blank';
      frame.tabIndex = -1;
      frame.setAttribute('aria-hidden', 'true');
      frame.style.cssText = 'position:fixed;width:1px;height:1px;left:-9999px;bottom:0;border:0;opacity:0;pointer-events:none';

      transport.method = 'POST';
      transport.action = endpoint;
      transport.target = id;
      transport.acceptCharset = 'UTF-8';
      transport.enctype = 'application/x-www-form-urlencoded';
      transport.hidden = true;

      Object.entries(payload).forEach(([key, value]) => appendHidden(transport, map[key], value));
      appendHidden(transport, 'fvv', '1');
      appendHidden(transport, 'draftResponse', '[]');
      appendHidden(transport, 'pageHistory', '0');
      appendHidden(transport, 'submit', 'Submit');

      frame.addEventListener('load', () => {
        if (!submitted) {
          submitted = true;
          try {
            HTMLFormElement.prototype.submit.call(transport);
          } catch (error) {
            finish(error);
          }
          return;
        }
        window.setTimeout(() => finish(), 180);
      });

      timeout = window.setTimeout(() => finish(new Error('Không nhận được xác nhận từ Google Forms.')), 20000);
      document.body.append(frame, transport);
    });
  }

  function withinCooldown() {
    const last = Number(safeStorage.get(cooldownKey) || 0);
    const seconds = Number(CONFIG.formCooldownSeconds || 5);
    return Date.now() - last < seconds * 1000;
  }

  function showSuccess(form) {
    const modal = form.closest('#lead-modal');
    if (!modal) return;
    const dialog = $('.modal__dialog--form', modal);
    const intro = $('.modal__intro', modal);
    const success = $('[data-lead-success]', modal);
    form.hidden = true;
    if (intro) intro.hidden = true;
    if (success) success.hidden = false;
    dialog?.classList.add('is-success');
    $('.lead-success__call', success || modal)?.focus({ preventScroll: true });
  }

  function resetForm(form) {
    form.reset();
    const area = $('[name="area"]', form);
    if (area) area.value = CONFIG.defaultArea || 'Cà Mau';
    $$('[aria-invalid="true"]', form).forEach(field => setFieldError(field));
    $('.form-consent', form)?.classList.remove('is-invalid');
  }

  async function submit(form) {
    if (!form || form.dataset.submitting === 'true') return;
    if ($('[name="website"]', form)?.value) return;

    const result = validate(form);
    if (!result.valid) {
      setStatus(form, 'error', 'Vui lòng kiểm tra lại các trường bắt buộc.');
      return;
    }

    if (withinCooldown()) {
      setStatus(form, 'error', 'Yêu cầu vừa được gửi. Vui lòng chờ vài giây trước khi gửi lại.');
      return;
    }

    const button = $('button[type="submit"]', form);
    form.dataset.submitting = 'true';
    button?.setAttribute('aria-busy', 'true');
    if (button) button.disabled = true;
    setStatus(form, 'loading', 'Đang gửi thông tin…');

    try {
      await postToGoogleForms(result.data);
      safeStorage.set(cooldownKey, String(Date.now()));
      setStatus(form, 'success', 'Đã gửi thông tin thành công.');
      try {
        window.dataLayer?.push({ event: 'generate_lead', vehicle: result.data.vehicle, area: result.data.area });
        if (typeof window.fbq === 'function') window.fbq('track', 'Lead');
      } catch (_) {}
      resetForm(form);
      showSuccess(form);
    } catch (error) {
      console.error('[BYD] Lead submission failed:', error);
      setStatus(form, 'error', 'Chưa gửi được dữ liệu. Vui lòng kiểm tra kết nối hoặc gọi hotline.');
    } finally {
      form.dataset.submitting = 'false';
      button?.removeAttribute('aria-busy');
      if (button) button.disabled = false;
    }
  }

  on(document, 'submit', FORM_SELECTOR, (event, form) => {
    event.preventDefault();
    submit(form);
  }, true);

  on(document, 'input', `${FORM_SELECTOR} [name="phone"]`, (_event, input) => {
    input.value = cleanPhone(input.value);
    if (input.classList.contains('is-invalid')) setFieldError(input);
  }, true);

  on(document, 'change', `${FORM_SELECTOR} input, ${FORM_SELECTOR} select`, (_event, field) => {
    if (field.name === 'consent') field.closest('.form-consent')?.classList.remove('is-invalid');
    else if (field.classList.contains('is-invalid')) setFieldError(field);
  }, true);

  window.BYD_FORM = Object.freeze({ submit, validate });
})();
