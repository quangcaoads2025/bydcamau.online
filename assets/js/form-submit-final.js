'use strict';

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

  async function postToGoogleForms(payload) {
    const { endpoint, map } = verifyConfiguration();
    const body = new URLSearchParams();

    Object.entries(payload).forEach(([key, value]) => {
      if (map[key]) body.set(map[key], String(value ?? ''));
    });
    body.set('fvv', '1');
    body.set('draftResponse', '[]');
    body.set('pageHistory', '0');
    body.set('submit', 'Submit');

    if (!navigator.onLine) throw new Error('Thiết bị đang ngoại tuyến.');

    const controller = typeof AbortController === 'function' ? new AbortController() : null;
    const timeout = window.setTimeout(() => controller?.abort(), 15000);

    try {
      await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        credentials: 'omit',
        cache: 'no-store',
        redirect: 'follow',
        keepalive: true,
        signal: controller?.signal,
        body
      });
    } catch (error) {
      if (error?.name === 'AbortError') {
        throw new Error('Kết nối gửi biểu mẫu quá thời gian.');
      }
      throw error;
    } finally {
      window.clearTimeout(timeout);
    }
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
      const message = navigator.onLine
        ? 'Chưa gửi được dữ liệu. Vui lòng thử lại hoặc gọi hotline 0848 52 53 52.'
        : 'Thiết bị đang mất kết nối mạng. Vui lòng kết nối lại rồi gửi.';
      setStatus(form, 'error', message);
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
