'use strict';

/*
 * FORM SUBMIT FINAL 2026-07-30
 * Gửi trực tiếp tới Google Forms bằng native POST + iframe ẩn.
 * Không dùng fetch/CORS và chỉ báo thành công sau khi iframe nhận phản hồi tải trang.
 */
(() => {
  window.BYD_FORM_FINAL_ACTIVE = true;

  const FORM_SELECTOR = '.lead-form';
  const PHONE_PATTERN = /^(0)(3|5|7|8|9)[0-9]{8}$/;
  const q = (selector, root = document) => root.querySelector(selector);

  function config() {
    return window.BYD_CONFIG || {};
  }

  function setError(field, message) {
    if (!field) return;
    const holder = field.closest('.form-field');
    const error = holder ? q('.form-error', holder) : null;
    field.classList.toggle('is-invalid', Boolean(message));
    field.setAttribute('aria-invalid', message ? 'true' : 'false');
    if (error) error.textContent = message || '';
  }

  function validate(form) {
    const name = q('[name="name"]', form);
    const phone = q('[name="phone"]', form);
    const vehicle = q('[name="vehicle"]', form);
    const area = q('[name="area"]', form);
    const consent = q('[name="consent"]', form);

    const nameValue = String(name?.value || '').trim();
    const phoneValue = String(phone?.value || '').replace(/\D/g, '').slice(0, 10);
    const vehicleValue = String(vehicle?.value || '').trim();
    const areaValue = String(area?.value || '').trim();
    if (phone) phone.value = phoneValue;

    const checks = [
      [name, nameValue.length >= 2 ? '' : 'Vui lòng nhập họ và tên.'],
      [phone, PHONE_PATTERN.test(phoneValue) ? '' : 'Số điện thoại Việt Nam phải đủ 10 chữ số.'],
      [vehicle, vehicleValue ? '' : 'Vui lòng chọn dòng xe quan tâm.'],
      [area, areaValue ? '' : 'Vui lòng nhập khu vực.']
    ];

    let firstInvalid = null;
    checks.forEach(([field, message]) => {
      setError(field, message);
      if (message && !firstInvalid) firstInvalid = field;
    });

    const consentInvalid = Boolean(consent && !consent.checked);
    consent?.closest('.form-consent')?.classList.toggle('is-invalid', consentInvalid);
    if (consentInvalid && !firstInvalid) firstInvalid = consent;

    if (firstInvalid) {
      firstInvalid.focus?.();
      return false;
    }
    return true;
  }

  function payload(form) {
    return {
      name: String(q('[name="name"]', form)?.value || '').trim(),
      phone: String(q('[name="phone"]', form)?.value || '').replace(/\D/g, '').slice(0, 10),
      vehicle: String(q('[name="vehicle"]', form)?.value || '').trim(),
      area: String(q('[name="area"]', form)?.value || '').trim()
    };
  }

  function hidden(form, name, value) {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = String(value ?? '');
    form.appendChild(input);
  }

  function postGoogleForm(data) {
    const cfg = config();
    const endpoint = String(cfg.formEndpoint || '').trim();
    const fields = cfg.googleFormFields || {};

    if (!/^https:\/\/docs\.google\.com\/forms\/d\/e\/[^/]+\/formResponse$/.test(endpoint)) {
      return Promise.reject(new Error('URL Google Form không hợp lệ.'));
    }
    if (!fields.name || !fields.phone || !fields.vehicle || !fields.area) {
      return Promise.reject(new Error('Thiếu Entry ID của Google Form.'));
    }

    return new Promise((resolve, reject) => {
      const target = `byd-google-form-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const frame = document.createElement('iframe');
      const transport = document.createElement('form');
      let phase = 'initial';
      let settled = false;
      let timer = 0;

      const cleanup = () => {
        window.clearTimeout(timer);
        window.setTimeout(() => { transport.remove(); frame.remove(); }, 800);
      };
      const finish = () => {
        if (settled) return;
        settled = true;
        cleanup();
        resolve();
      };
      const fail = (error) => {
        if (settled) return;
        settled = true;
        cleanup();
        reject(error instanceof Error ? error : new Error('Không nhận được phản hồi từ Google Form.'));
      };

      frame.name = target;
      frame.title = 'Kết quả gửi biểu mẫu';
      frame.tabIndex = -1;
      frame.referrerPolicy = 'no-referrer';
      frame.src = 'about:blank';
      frame.setAttribute('aria-hidden', 'true');
      frame.style.cssText = 'position:fixed!important;width:1px!important;height:1px!important;opacity:0!important;pointer-events:none!important;left:-9999px!important;bottom:0!important;border:0!important;';

      transport.method = 'POST';
      transport.action = endpoint;
      transport.target = target;
      transport.acceptCharset = 'UTF-8';
      transport.enctype = 'application/x-www-form-urlencoded';
      transport.style.display = 'none';
      transport.setAttribute('aria-hidden', 'true');
      hidden(transport, fields.name, data.name);
      hidden(transport, fields.phone, data.phone);
      hidden(transport, fields.vehicle, data.vehicle);
      hidden(transport, fields.area, data.area);
      hidden(transport, 'fvv', '1');
      hidden(transport, 'draftResponse', '[]');
      hidden(transport, 'pageHistory', '0');
      hidden(transport, 'submit', 'Submit');

      frame.addEventListener('load', () => {
        if (phase === 'initial') {
          phase = 'submitted';
          try {
            HTMLFormElement.prototype.submit.call(transport);
          } catch (error) {
            fail(error);
          }
          return;
        }
        if (phase === 'submitted') window.setTimeout(finish, 250);
      });

      timer = window.setTimeout(() => fail(new Error('Chưa thể xác nhận biểu mẫu đã được tiếp nhận. Vui lòng thử lại hoặc gọi hotline.')), 20000);
      try {
        document.body.append(frame, transport);
      } catch (error) {
        fail(error);
      }
    });
  }

  function showSuccess(form) {
    const modal = form.closest('#lead-modal');
    if (!modal) return;
    const dialog = q('.modal__dialog--form', modal);
    const success = q('[data-lead-success]', modal);
    const intro = q('.modal__intro', modal);
    if (!dialog || !success) return;
    form.hidden = true;
    if (intro) intro.hidden = true;
    success.hidden = false;
    dialog.classList.add('is-success');
    q('.lead-success__call', success)?.focus?.();
  }

  async function submit(form) {
    if (!form || form.dataset.finalSubmitting === 'true') return;
    const button = q('button[type="submit"]', form);
    const status = q('.form-status', form);
    if (!button) return;

    if (!validate(form)) {
      if (status) {
        status.textContent = 'Vui lòng kiểm tra lại các trường bắt buộc.';
        status.className = 'form-status is-error';
      }
      return;
    }
    if (q('[name="website"]', form)?.value) return;

    form.dataset.finalSubmitting = 'true';
    button.disabled = true;
    button.classList.add('is-loading');
    button.setAttribute('aria-busy', 'true');
    if (status) {
      status.textContent = 'Đang gửi thông tin…';
      status.className = 'form-status is-loading';
    }

    const data = payload(form);
    try {
      await postGoogleForm(data);
      if (status) {
        status.textContent = 'Đã gửi thông tin thành công.';
        status.className = 'form-status is-success';
      }
      try {
        window.dataLayer?.push({ event: 'generate_lead', vehicle: data.vehicle, area: data.area });
        if (typeof window.fbq === 'function') window.fbq('track', 'Lead');
      } catch (_) {}

      form.reset();
      const area = q('[name="area"]', form);
      if (area) area.value = config().defaultArea || 'Cà Mau';
      showSuccess(form);
    } catch (error) {
      console.error('Google Form submit failed:', error);
      if (status) {
        status.textContent = 'Chưa gửi được dữ liệu. Vui lòng kiểm tra kết nối rồi thử lại.';
        status.className = 'form-status is-error';
      }
    } finally {
      form.dataset.finalSubmitting = 'false';
      button.disabled = false;
      button.classList.remove('is-loading');
      button.removeAttribute('aria-busy');
    }
  }

  document.addEventListener('submit', (event) => {
    const form = event.target?.matches?.(FORM_SELECTOR) ? event.target : null;
    if (!form) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    submit(form);
  }, true);

  document.addEventListener('click', (event) => {
    const button = event.target.closest?.(`${FORM_SELECTOR} button[type="submit"]`);
    if (!button) return;
    const form = button.form || button.closest(FORM_SELECTOR);
    if (!form) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    submit(form);
  }, true);

  document.addEventListener('input', (event) => {
    const phone = event.target?.matches?.(`${FORM_SELECTOR} [name="phone"]`) ? event.target : null;
    if (phone) phone.value = phone.value.replace(/\D/g, '').slice(0, 10);
  }, true);
})();
