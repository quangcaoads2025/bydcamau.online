'use strict';

(function () {
  const CONFIG = window.BYD_CONFIG;
  const DATA = window.BYD_DATA || {};
  const COMPONENTS = window.BYD_COMPONENTS;

  const qs = (selector, scope = document) => scope.querySelector(selector);
  const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const money = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 });

  function parseMoney(value) {
    const clean = String(value ?? '').replace(/[^0-9]/g, '');
    return clean ? Number(clean) : 0;
  }

  function formatMoneyInput(input) {
    const number = parseMoney(input.value);
    input.value = number ? number.toLocaleString('vi-VN') : '';
  }

  function setImageFallbacks() {
    qsa('img[data-fallback]').forEach(img => {
      if (img.dataset.fallbackReady === 'true') return;
      img.dataset.fallbackReady = 'true';

      const applyFallback = () => {
        const fallback = String(img.dataset.fallback || '').trim();
        if (!fallback) return;
        const fallbackUrl = new URL(fallback, document.baseURI).href;
        if (img.src !== fallbackUrl) img.src = fallbackUrl;
      };

      img.addEventListener('error', applyFallback, { once: true });
      if (img.complete && img.naturalWidth === 0) applyFallback();
    });
  }

  function initHeader() {
    const header = qs('.site-header');
    const toggle = qs('.menu-toggle');
    const menu = qs('.mobile-menu');
    const close = qs('.mobile-menu__close');
    const backdrop = qs('[data-close-mobile-menu]');
    const megaButton = qs('.nav-link--button');
    const megaItem = qs('.nav-item--mega');

    const scrollTopButton = qs('[data-scroll-top]');
    let scrollTicking = false;
    const updateHeader = () => {
      const y = window.scrollY;
      header?.classList.toggle('is-scrolled', y > 24);
      scrollTopButton?.classList.toggle('is-visible', y > 420);
      scrollTicking = false;
    };
    const requestHeaderUpdate = () => {
      if (scrollTicking) return;
      scrollTicking = true;
      window.requestAnimationFrame(updateHeader);
    };
    updateHeader();
    window.addEventListener('scroll', requestHeaderUpdate, { passive: true });

    const closeMobileMenu = () => {
      toggle?.setAttribute('aria-expanded', 'false');
      menu?.setAttribute('aria-hidden', 'true');
      menu?.classList.remove('is-open');
      document.body.classList.remove('menu-open');
    };

    toggle?.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      menu?.setAttribute('aria-hidden', String(open));
      menu?.classList.toggle('is-open', !open);
      document.body.classList.toggle('menu-open', !open);
    });
    close?.addEventListener('click', closeMobileMenu);
    backdrop?.addEventListener('click', closeMobileMenu);
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && document.body.classList.contains('menu-open')) closeMobileMenu();
    });
    qsa('.mobile-menu a, .mobile-menu button[data-open-modal]').forEach(item => item.addEventListener('click', closeMobileMenu));

    megaButton?.addEventListener('click', event => {
      event.stopPropagation();
      const isOpen = megaItem?.classList.toggle('is-open');
      megaButton.setAttribute('aria-expanded', String(Boolean(isOpen)));
    });
    document.addEventListener('click', event => {
      if (megaItem && !megaItem.contains(event.target)) {
        megaItem.classList.remove('is-open');
        megaButton?.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function initHeroSlider() {
    const hero = qs('[data-hero-slider]');
    if (!hero) return;
    const slides = qsa('.hero-slide', hero);
    const dots = qsa('.hero-dot', hero);
    const prev = qs('[data-hero-prev]', hero);
    const next = qs('[data-hero-next]', hero);
    let active = 0;
    let timer;

    const show = index => {
      active = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => slide.classList.toggle('is-active', i === active));
      dots.forEach((dot, i) => {
        dot.classList.toggle('is-active', i === active);
        dot.setAttribute('aria-current', i === active ? 'true' : 'false');
      });
    };
    const restart = () => {
      clearInterval(timer);
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        timer = setInterval(() => show(active + 1), 7000);
      }
    };
    prev?.addEventListener('click', () => { show(active - 1); restart(); });
    next?.addEventListener('click', () => { show(active + 1); restart(); });
    dots.forEach((dot, i) => dot.addEventListener('click', () => { show(i); restart(); }));
    hero.addEventListener('mouseenter', () => clearInterval(timer));
    hero.addEventListener('mouseleave', restart);
    show(0);
    restart();
  }

  function initVehicleGrid() {
    const grid = qs('[data-vehicle-grid]');
    if (!grid) return;

    const orderedVehicles = [...(Array.isArray(DATA.vehicles) ? DATA.vehicles : [])];
    const pagination = qs('[data-vehicle-pagination]');
    const previousButton = qs('[data-vehicle-prev]');
    const nextButton = qs('[data-vehicle-next]');
    const status = qs('[data-vehicle-page-status]');
    const searchInput = qs('[data-vehicle-search-input]');
    const resultCount = qs('[data-vehicle-result-count]');
    const pageSize = 6;
    let activeFilter = 'all';
    let searchTerm = '';
    let currentPage = 0;

    const normalize = value => String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();

    const filteredVehicles = () => orderedVehicles.filter(vehicle => {
      const segment = normalize(vehicle.segment);
      const powertrain = normalize(vehicle.powertrain);
      const filterMatch = activeFilter === 'all' || segment === activeFilter || powertrain === activeFilter;
      const searchable = normalize([
        vehicle.name,
        vehicle.segment,
        vehicle.powertrain,
        vehicle.tagline,
        vehicle.shortDescription,
        ...(vehicle.badges || []),
        ...(vehicle.highlights || []),
        ...(vehicle.variants || []).map(item => item.name)
      ].join(' '));
      const searchMatch = !searchTerm || searchable.includes(searchTerm);
      return filterMatch && searchMatch;
    });

    const renderEmpty = () => {
      grid.innerHTML = `
        <div class="vehicle-empty-state">
          <strong>Chưa tìm thấy mẫu xe phù hợp</strong>
          <p>Thử đổi từ khóa hoặc chọn lại bộ lọc “Tất cả”.</p>
          <button class="button button--outline button--small" type="button" data-reset-vehicle-search>Đặt lại tìm kiếm</button>
        </div>`;
      qs('[data-reset-vehicle-search]')?.addEventListener('click', () => {
        activeFilter = 'all';
        searchTerm = '';
        if (searchInput) searchInput.value = '';
        qsa('[data-vehicle-filter]').forEach(btn => btn.classList.toggle('is-active', btn.dataset.vehicleFilter === 'all'));
        currentPage = 0;
        renderPage();
      });
    };

    const renderPage = () => {
      const vehicles = filteredVehicles();
      const pageCount = Math.max(1, Math.ceil(vehicles.length / pageSize));
      currentPage = Math.min(Math.max(currentPage, 0), pageCount - 1);
      const start = currentPage * pageSize;

      if (vehicles.length) {
        grid.innerHTML = vehicles.slice(start, start + pageSize).map(COMPONENTS.renderVehicleCard).join('');
        setImageFallbacks();
      } else {
        renderEmpty();
      }

      if (pagination) pagination.hidden = vehicles.length === 0 || pageCount <= 1;
      if (previousButton) previousButton.disabled = currentPage === 0;
      if (nextButton) nextButton.disabled = currentPage >= pageCount - 1;
      if (status) status.textContent = `Trang ${currentPage + 1} / ${pageCount}`;
      if (resultCount) resultCount.textContent = `${vehicles.length} mẫu xe`;
    };

    previousButton?.addEventListener('click', () => {
      if (currentPage <= 0) return;
      currentPage -= 1;
      renderPage();
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    nextButton?.addEventListener('click', () => {
      const pageCount = Math.max(1, Math.ceil(filteredVehicles().length / pageSize));
      if (currentPage >= pageCount - 1) return;
      currentPage += 1;
      renderPage();
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    qsa('[data-vehicle-filter]').forEach(button => {
      button.addEventListener('click', () => {
        qsa('[data-vehicle-filter]').forEach(btn => btn.classList.remove('is-active'));
        button.classList.add('is-active');
        activeFilter = normalize(button.dataset.vehicleFilter);
        currentPage = 0;
        renderPage();
      });
    });

    searchInput?.addEventListener('input', event => {
      searchTerm = normalize(event.target.value);
      currentPage = 0;
      renderPage();
    });

    renderPage();
  }

  function initTechnologyCards() {
    const target = qs('[data-technology-grid]');
    if (!target) return;
    const iconNames = ['battery', 'spark', 'wallet', 'shield'];
    const items = Array.isArray(DATA.technology) ? DATA.technology : [];
    target.innerHTML = items.map((item, index) => `
      <article class="technology-card">
        <div class="technology-card__icon">${COMPONENTS.icon(iconNames[index])}</div>
        <span class="technology-card__eyebrow">${item.eyebrow}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <strong>${item.metric}</strong>
      </article>`).join('');
  }

  function initServiceCards() {
    const target = qs('[data-service-grid]');
    if (!target) return;
    const iconNames = ['message', 'tag', 'spark', 'steering', 'wrench', 'bank'];
    const items = Array.isArray(DATA.services) ? DATA.services : [];
    target.innerHTML = items.map((service, index) => `
      <article class="service-card">
        <div class="service-card__icon">${COMPONENTS.icon(iconNames[index])}</div>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      </article>`).join('');
  }

  function initNews() {
    const target = qs('[data-news-grid]');
    if (!target) return;
    const items = Array.isArray(DATA.news) ? DATA.news : [];
    if (!items.length) { target.innerHTML = '<p class="content-empty-state">Tin tức đang được cập nhật.</p>'; return; }
    const [featured, ...others] = items;
    const renderDate = date => new Intl.DateTimeFormat('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(`${date}T00:00:00`));
    target.innerHTML = `
      <article class="news-featured">
        <a href="${featured.url}" ${featured.url.startsWith('http') ? 'target="_blank" rel="noopener"' : ''} class="news-featured__image"><img src="${featured.image}" alt="${featured.title}" width="960" height="720" loading="lazy"></a>
        <div class="news-featured__shade"></div>
        <div class="news-featured__body">
          <div class="news-meta"><span class="news-category">${featured.category}</span><time datetime="${featured.date}">${renderDate(featured.date)}</time></div>
          <h3><a href="${featured.url}" ${featured.url.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>${featured.title}</a></h3>
          <p>${featured.excerpt}</p>
          <a class="news-read-more" href="${featured.url}" ${featured.url.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>Đọc bài viết ${COMPONENTS.icon('chevronRight')}</a>
        </div>
      </article>
      <div class="news-list">
        ${others.map(item => `
          <article class="news-card">
            <a href="${item.url}" class="news-card__image"><img src="${item.image}" alt="${item.title}" width="480" height="320" loading="lazy"></a>
            <div class="news-card__body">
              <div class="news-meta"><span class="news-category">${item.category}</span><time datetime="${item.date}">${renderDate(item.date)}</time></div>
              <h3><a href="${item.url}">${item.title}</a></h3>
              <p>${item.excerpt}</p>
              <a class="news-card__arrow" href="${item.url}" aria-label="Đọc bài: ${item.title}">${COMPONENTS.icon('chevronRight')}</a>
            </div>
          </article>`).join('')}
      </div>`;
  }

  function initMapTabs() {
    const tabs = qsa('[data-map-tab]');
    const frame = qs('[data-map-frame]');
    const name = qs('[data-map-name]');
    const address = qs('[data-map-address]');
    const directions = qs('[data-map-directions]');
    if (!frame) return;

    const load = id => {
      const showroom = CONFIG.showrooms[id];
      if (!showroom) return;
      tabs.forEach(tab => {
        const active = tab.dataset.mapTab === id;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', String(active));
      });
      name.textContent = showroom.name;
      address.textContent = showroom.address;
      directions.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(showroom.mapQuery)}`;
      frame.src = `https://www.google.com/maps?q=${encodeURIComponent(showroom.mapQuery)}&output=embed`;
      frame.title = `Bản đồ ${showroom.name}`;
    };
    tabs.forEach(tab => tab.addEventListener('click', () => load(tab.dataset.mapTab)));
    load('showroom4s');
  }

  function initFaq() {
    const target = qs('[data-faq-list]');
    if (!target) return;
    target.innerHTML = DATA.faqs.map((faq, index) => `
      <details class="faq-item" ${index === 0 ? 'open' : ''}>
        <summary><span>${faq.question}</span>${COMPONENTS.icon('chevronDown')}</summary>
        <p>${faq.answer}</p>
      </details>`).join('');
  }

  function openModal(type, trigger) {
    const modal = qs(`#${type}-modal`);
    if (!modal) return;
    qsa('.modal.is-open').forEach(item => closeModal(item));
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    modal.dataset.returnFocus = trigger ? 'true' : 'false';
    modal._returnFocus = trigger || null;

    if (type === 'lead') {
      resetLeadSuccess(modal);
    }

    if (type === 'lead' && trigger) {
      const intent = trigger.dataset.intent || 'Nhận báo giá';
      const vehicle = trigger.dataset.vehicle || '';
      const title = qs('#lead-modal-title', modal);
      const introTitles = qsa('[data-lead-intro-title]', modal);
      const intentInput = qs('input[name="intent"]', modal);
      const vehicleSelect = qs('select[name="vehicle"]', modal);
      title.textContent = intent;
      introTitles.forEach(item => { item.textContent = intent; });
      intentInput.value = intent;
      if (vehicle) vehicleSelect.value = vehicle;
    }
    setTimeout(() => qs('input, select, button', modal)?.focus(), 30);
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    modal._returnFocus?.focus?.();
  }

  function initModals() {
    document.addEventListener('click', event => {
      const openTrigger = event.target.closest('[data-open-modal]');
      if (openTrigger) {
        event.preventDefault();
        openModal(openTrigger.dataset.openModal, openTrigger);
        return;
      }
      if (event.target.closest('[data-close-modal]')) {
        closeModal(event.target.closest('.modal'));
      }
      if (event.target.closest('[data-scroll-top]')) window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') qsa('.modal.is-open').forEach(closeModal);
    });
  }

  function validateLeadForm(form) {
    let valid = true;
    const fields = qsa('input[required], select[required]', form);
    fields.forEach(field => {
      const holder = field.closest('.form-field');
      const error = qs('.form-error', holder);
      field.classList.remove('is-invalid');
      if (error) error.textContent = '';
      let message = '';
      if (!field.value.trim()) message = 'Vui lòng nhập thông tin này.';
      if (field.name === 'phone' && field.value && !/^(0)(3|5|7|8|9)[0-9]{8}$/.test(field.value)) message = 'Số điện thoại Việt Nam phải đủ 10 chữ số.';
      if (message) {
        valid = false;
        field.classList.add('is-invalid');
        if (error) error.textContent = message;
      }
    });
    const consent = qs('input[name="consent"]', form);
    if (consent && !consent.checked) {
      valid = false;
      consent.closest('.form-consent')?.classList.add('is-invalid');
    } else {
      consent?.closest('.form-consent')?.classList.remove('is-invalid');
    }
    return valid;
  }

  function safeStorageGet(key) {
    try {
      return window.localStorage ? window.localStorage.getItem(key) : null;
    } catch (_) {
      return null;
    }
  }

  function safeStorageSet(key, value) {
    try {
      if (window.localStorage) window.localStorage.setItem(key, value);
    } catch (_) {
      /* Trình duyệt có thể chặn localStorage khi mở bằng file:// hoặc chế độ riêng tư.
         Việc này không được phép làm gián đoạn thao tác gửi biểu mẫu. */
    }
  }

  function ensureHiddenField(form, name) {
    let input = Array.from(form.querySelectorAll('input[type="hidden"]')).find(item => item.name === name);
    if (!input) {
      input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.dataset.googleFormField = 'true';
      form.appendChild(input);
    }
    return input;
  }

  function mapGoogleFormFields(form, payload) {
    const fields = CONFIG.googleFormFields;
    if (!CONFIG.formEndpoint || !fields?.name || !fields?.phone || !fields?.vehicle || !fields?.area) {
      throw new Error('Thiếu cấu hình Google Form hoặc Entry ID.');
    }

    ensureHiddenField(form, fields.name).value = String(payload.name || '').trim();
    ensureHiddenField(form, fields.phone).value = String(payload.phone || '').trim();
    ensureHiddenField(form, fields.vehicle).value = String(payload.vehicle || '').trim();
    ensureHiddenField(form, fields.area).value = String(payload.area || '').trim();
    ensureHiddenField(form, 'fvv').value = '1';
    ensureHiddenField(form, 'draftResponse').value = '[]';
    ensureHiddenField(form, 'pageHistory').value = '0';
  }

  function postGoogleForm(form, payload) {
    return new Promise((resolve, reject) => {
      let iframe = null;
      let submitted = false;
      let settled = false;
      let fallbackTimer = 0;
      const targetName = `byd-google-form-${Date.now()}-${Math.random().toString(36).slice(2)}`;

      const cleanup = () => {
        window.clearTimeout(fallbackTimer);
        window.setTimeout(() => iframe?.remove(), 1200);
      };

      const finish = () => {
        if (settled) return;
        settled = true;
        cleanup();
        resolve();
      };

      const fail = error => {
        if (settled) return;
        settled = true;
        cleanup();
        reject(error instanceof Error ? error : new Error('Không thể gửi Google Form.'));
      };

      const submitNativeForm = () => {
        if (submitted || settled) return;
        submitted = true;
        try {
          mapGoogleFormFields(form, payload);
          form.method = 'POST';
          form.action = CONFIG.formEndpoint;
          form.target = targetName;
          form.acceptCharset = 'UTF-8';
          form.enctype = 'application/x-www-form-urlencoded';

          /* Gọi phương thức submit gốc để POST trực tiếp đến Google Forms.
             Cách này không phụ thuộc CORS, fetch hoặc quyền localStorage. */
          HTMLFormElement.prototype.submit.call(form);

          /* Google Forms trả kết quả trong iframe khác miền nên trang không thể đọc nội dung.
             Sự kiện load xác nhận trình duyệt đã hoàn tất lượt POST; timeout là dự phòng
             cho Safari/iOS hoặc trình duyệt chặn sự kiện load của iframe khác miền. */
          fallbackTimer = window.setTimeout(finish, 6500);
        } catch (error) {
          fail(error);
        }
      };

      try {
        iframe = document.createElement('iframe');
        iframe.name = targetName;
        iframe.title = 'Google Form submission target';
        iframe.tabIndex = -1;
        iframe.setAttribute('aria-hidden', 'true');
        iframe.style.cssText = 'position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;left:-9999px;bottom:0;border:0;';
        iframe.addEventListener('load', () => {
          if (!submitted) {
            submitNativeForm();
          } else {
            window.setTimeout(finish, 180);
          }
        });
        iframe.src = 'about:blank';
        document.body.appendChild(iframe);

        /* Dự phòng nếu about:blank không phát sự kiện load trên một số trình duyệt. */
        window.setTimeout(submitNativeForm, 120);
      } catch (error) {
        fail(error);
      }
    });
  }

  function showLeadSuccess(form) {
    const modal = form.closest('#lead-modal');
    if (!modal) return;
    const dialog = qs('.modal__dialog--form', modal);
    const success = qs('[data-lead-success]', modal);
    const intro = qs('.modal__intro', modal);
    if (!dialog || !success) return;

    form.hidden = true;
    if (intro) intro.hidden = true;
    success.hidden = false;
    dialog.classList.add('is-success');
    qs('.lead-success__call', success)?.focus();
  }

  function resetLeadSuccess(modal) {
    if (!modal) return;
    const dialog = qs('.modal__dialog--form', modal);
    const success = qs('[data-lead-success]', modal);
    const form = qs('#modal-lead-form', modal);
    const intro = qs('.modal__intro', modal);
    dialog?.classList.remove('is-success');
    if (success) success.hidden = true;
    if (form) form.hidden = false;
    if (intro) intro.hidden = false;
  }

  async function submitLead(form) {
    if (!form || form.dataset.submitting === 'true') return;

    const status = qs('.form-status', form);
    const button = qs('button[type="submit"]', form);
    if (!status || !button) return;

    if (!validateLeadForm(form)) {
      status.textContent = 'Vui lòng kiểm tra lại các trường bắt buộc.';
      status.className = 'form-status is-error';
      qs('.is-invalid', form)?.focus();
      return;
    }

    const honeypot = qs('input[name="website"]', form);
    if (honeypot?.value) return;

    const lastSubmitted = Number(safeStorageGet('byd-last-lead-submit') || 0);
    const cooldown = Math.max(0, Number(CONFIG.formCooldownSeconds || 0)) * 1000;
    if (cooldown && Date.now() - lastSubmitted < cooldown) {
      const seconds = Math.ceil((cooldown - (Date.now() - lastSubmitted)) / 1000);
      status.textContent = `Vui lòng chờ ${seconds} giây trước khi gửi lại.`;
      status.className = 'form-status is-error';
      return;
    }

    const payload = Object.fromEntries(new FormData(form).entries());
    form.dataset.submitting = 'true';
    button.disabled = true;
    button.classList.add('is-loading');
    button.setAttribute('aria-busy', 'true');
    status.textContent = 'Đang gửi thông tin…';
    status.className = 'form-status is-loading';

    try {
      await postGoogleForm(form, payload);
      safeStorageSet('byd-last-lead-submit', String(Date.now()));
      status.textContent = 'Đã gửi thông tin thành công.';
      status.className = 'form-status is-success';

      try {
        window.dataLayer?.push({ event: 'generate_lead', vehicle: payload.vehicle || '', area: payload.area || '' });
        if (typeof window.fbq === 'function') window.fbq('track', 'Lead');
      } catch (_) {}

      form.reset();
      const areaInput = qs('input[name="area"]', form);
      if (areaInput) areaInput.value = CONFIG.defaultArea;

      if (form.id === 'modal-lead-form') {
        showLeadSuccess(form);
      }
    } catch (error) {
      console.error('Google Form submit error:', error);
      status.innerHTML = `Gửi chưa thành công. Vui lòng thử lại hoặc <a href="${CONFIG.zaloUrl}" target="_blank" rel="noopener">liên hệ Zalo</a>.`;
      status.className = 'form-status is-error';
    } finally {
      form.dataset.submitting = 'false';
      button.disabled = false;
      button.classList.remove('is-loading');
      button.removeAttribute('aria-busy');
    }
  }

  function initLeadForms() {
    if (window.BYD_FORM_FINAL_ACTIVE) return;
    qsa('.lead-form').forEach(form => {
      if (form.dataset.leadFormReady === 'true') return;
      form.dataset.leadFormReady = 'true';
      form.noValidate = true;

      const phone = qs('input[name="phone"]', form);
      phone?.addEventListener('input', () => {
        phone.value = phone.value.replace(/\D/g, '').slice(0, 10);
      });

      form.addEventListener('submit', event => {
        event.preventDefault();
        submitLead(form);
      });
    });

    /* Bắt thao tác bấm ở pha capture để nút luôn phản hồi ngay cả khi một thành phần
       giao diện khác vô tình chặn sự kiện bubble. Việc preventDefault ngăn submit kép. */
    if (document.documentElement.dataset.leadClickReady !== 'true') {
      document.documentElement.dataset.leadClickReady = 'true';
      document.addEventListener('click', event => {
        const button = event.target.closest?.('.lead-form button[type="submit"]');
        if (!button) return;
        const form = button.form || button.closest('.lead-form');
        if (!form) return;
        event.preventDefault();
        submitLead(form);
      }, true);
    }
  }

  function syncVehiclePrice(select, input) {
    const vehicle = (Array.isArray(DATA.vehicles) ? DATA.vehicles : []).find(item => item.name === select.value);
    if (vehicle?.price) input.value = vehicle.price.toLocaleString('vi-VN');
  }

  function initCalculators() {
    qsa('input[inputmode="numeric"]').forEach(input => {
      if (input.type === 'text') input.addEventListener('blur', () => formatMoneyInput(input));
    });

    const regForm = qs('#registration-calculator');
    const regVehicle = qs('#reg-vehicle');
    const regPrice = qs('#reg-price');
    regVehicle?.addEventListener('change', () => syncVehiclePrice(regVehicle, regPrice));
    regForm?.addEventListener('submit', event => {
      event.preventDefault();
      const form = new FormData(regForm);
      const price = parseMoney(form.get('price'));
      if (!price) { regPrice.classList.add('is-invalid'); regPrice.focus(); return; }
      regPrice.classList.remove('is-invalid');
      const rate = Number(form.get('registrationFeePercent') || 0);
      const registrationFee = price * rate / 100;
      const fees = {
        'Giá xe dự kiến': price,
        'Lệ phí trước bạ': registrationFee,
        'Phí biển số': parseMoney(form.get('plateFee')),
        'Phí đường bộ': parseMoney(form.get('roadMaintenanceFee')),
        'Bảo hiểm TNDS': parseMoney(form.get('civilLiabilityInsurance')),
        'Phí kiểm định': parseMoney(form.get('inspectionFee')),
        'Phí dịch vụ khác': parseMoney(form.get('serviceFee'))
      };
      const total = Object.values(fees).reduce((sum, value) => sum + value, 0);
      qs('#registration-result').innerHTML = `
        <span class="calculator-result__eyebrow">Tổng chi phí dự kiến</span>
        <strong class="calculator-result__total">${money.format(total)}</strong>
        <ul>${Object.entries(fees).map(([label, value]) => `<li><span>${label}</span><strong>${money.format(value)}</strong></li>`).join('')}</ul>
        <p class="calculator-result__note">Kết quả chỉ mang tính tham khảo. Phí thực tế phụ thuộc chính sách và thời điểm đăng ký.</p>
        <button class="button button--primary button--block" data-open-modal="lead" data-intent="Nhận báo giá lăn bánh">Nhận báo giá chính xác</button>`;
    });

    const finForm = qs('#finance-calculator');
    const finVehicle = qs('#fin-vehicle');
    const finPrice = qs('#fin-price');
    finVehicle?.addEventListener('change', () => syncVehiclePrice(finVehicle, finPrice));
    finForm?.addEventListener('submit', event => {
      event.preventDefault();
      const form = new FormData(finForm);
      const price = parseMoney(form.get('price'));
      if (!price) { finPrice.classList.add('is-invalid'); finPrice.focus(); return; }
      finPrice.classList.remove('is-invalid');
      const downPercent = Number(form.get('downPaymentPercent') || 0);
      const termMonths = Number(form.get('termMonths') || 0);
      const annualRate = Number(form.get('annualRatePercent') || 0);
      const downPayment = price * downPercent / 100;
      const loan = price - downPayment;
      const principalPerMonth = loan / termMonths;
      const monthlyRate = annualRate / 100 / 12;
      const firstMonthInterest = loan * monthlyRate;
      const firstMonthPayment = principalPerMonth + firstMonthInterest;
      const lastMonthInterest = principalPerMonth * monthlyRate;
      const lastMonthPayment = principalPerMonth + lastMonthInterest;
      const totalInterest = monthlyRate * principalPerMonth * termMonths * (termMonths + 1) / 2;
      qs('#finance-result').innerHTML = `
        <span class="calculator-result__eyebrow">Thanh toán tháng đầu dự kiến</span>
        <strong class="calculator-result__total">${money.format(firstMonthPayment)}</strong>
        <ul>
          <li><span>Giá xe dự kiến</span><strong>${money.format(price)}</strong></li>
          <li><span>Khoản trả trước (${downPercent}%)</span><strong>${money.format(downPayment)}</strong></li>
          <li><span>Khoản vay dự kiến</span><strong>${money.format(loan)}</strong></li>
          <li><span>Thanh toán tháng cuối</span><strong>${money.format(lastMonthPayment)}</strong></li>
          <li><span>Tổng lãi ước tính</span><strong>${money.format(totalInterest)}</strong></li>
        </ul>
        <p class="calculator-result__note">Dư nợ giảm dần, chưa gồm bảo hiểm khoản vay và các điều kiện riêng của ngân hàng.</p>
        <button class="button button--primary button--block" data-open-modal="lead" data-intent="Tư vấn trả góp">Nhận tư vấn ngân hàng</button>`;
    });
  }

  function initReveal() {
    const items = qsa('[data-reveal]');
    if (!items.length || typeof IntersectionObserver === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach(item => item.classList.add('is-visible'));
      return;
    }
    document.documentElement.classList.add('reveal-ready');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.02, rootMargin: '0px 0px -6% 0px' });
    items.forEach(item => observer.observe(item));
  }

  function createSchemas() {
    const website = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'BYD Cà Mau',
      alternateName: 'BYD Thành Công Cà Mau',
      url: CONFIG.domain,
      inLanguage: 'vi-VN',
      description: CONFIG.seo.homeDescription,
      publisher: { '@type': 'Organization', name: CONFIG.legalName, logo: { '@type': 'ImageObject', url: `${CONFIG.domain}/assets/images/logo-byd-thanh-cong.webp` } }
    };
    const dealer = {
      '@context': 'https://schema.org',
      '@type': 'AutoDealer',
      name: CONFIG.siteName,
      url: CONFIG.domain,
      logo: `${CONFIG.domain}/assets/images/logo-byd-thanh-cong.webp`,
      image: `${CONFIG.domain}/assets/images/showroom-hero.webp`,
      telephone: CONFIG.hotlineSales,
      email: CONFIG.email,
      priceRange: 'Liên hệ',
      openingHours: ['Mo-Su 07:30-17:30'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '109 Đường Lý Thường Kiệt, Phường Tân Thành',
        addressLocality: 'Cà Mau',
        addressCountry: 'VN'
      },
      department: Object.values(CONFIG.showrooms).map(showroom => ({
        '@type': 'AutoDealer',
        name: showroom.name,
        address: { '@type': 'PostalAddress', streetAddress: showroom.address, addressLocality: 'Cà Mau', addressCountry: 'VN' }
      })),
      sameAs: [CONFIG.facebookUrl, CONFIG.youtubeUrl, CONFIG.tiktokUrl].filter(Boolean)
    };
    const vehicles = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: (Array.isArray(DATA.vehicles) ? DATA.vehicles : []).map((vehicle, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Vehicle',
          name: vehicle.name,
          image: `${CONFIG.domain}/${vehicle.image}`,
          description: vehicle.shortDescription,
          url: `${CONFIG.domain}/san-pham/${vehicle.slug}/`,
          brand: { '@type': 'Brand', name: 'BYD' },
          vehicleConfiguration: vehicle.segment,
          fuelType: vehicle.powertrain === 'EV' ? 'Electric' : 'Plug-in Hybrid'
        }
      }))
    };
    const faq = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: (Array.isArray(DATA.faqs) ? DATA.faqs : []).map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } }))
    };
    const articles = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: (Array.isArray(DATA.news) ? DATA.news : []).map((article, index) => ({
        '@type': 'ListItem', position: index + 1,
        item: { '@type': 'Article', headline: article.title, datePublished: article.date, image: `${CONFIG.domain}/${article.image}`, description: article.excerpt, url: article.url.startsWith('http') ? article.url : `${CONFIG.domain}/${article.url}` }
      }))
    };
    [website, dealer, vehicles, faq, articles].forEach(data => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    });
  }

  function initHomePage() {
    const safeInit = (name, initializer) => {
      try {
        initializer();
      } catch (error) {
        console.error(`[BYD] Không thể khởi tạo ${name}:`, error);
      }
    };

    safeInit('khung giao diện', () => COMPONENTS.renderSiteShell('home'));
    safeInit('header', initHeader);
    safeInit('hero', initHeroSlider);
    safeInit('dải sản phẩm', initVehicleGrid);
    safeInit('công nghệ', initTechnologyCards);
    safeInit('dịch vụ', initServiceCards);
    safeInit('tin tức', initNews);
    safeInit('bản đồ', initMapTabs);
    safeInit('FAQ', initFaq);
    safeInit('cửa sổ tư vấn', initModals);
    safeInit('biểu mẫu', initLeadForms);
    safeInit('công cụ tính', initCalculators);
    safeInit('hiệu ứng hiển thị', initReveal);
    safeInit('ảnh dự phòng', setImageFallbacks);
    if (!document.documentElement.hasAttribute('data-static-schema')) safeInit('dữ liệu SEO', createSchemas);
  }

  window.BYD_APP = {
    parseMoney,
    formatMoneyInput,
    openModal,
    closeModal,
    initHeader,
    initModals,
    initLeadForms,
    initCalculators,
    initReveal,
    setImageFallbacks,
    money
  };

  if (document.body.dataset.page === 'home') {
    document.addEventListener('DOMContentLoaded', initHomePage);
  }
})();
