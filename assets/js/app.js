'use strict';

(function () {
  const CONFIG = window.BYD_CONFIG;
  const DATA = window.BYD_DATA;
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
      img.addEventListener('error', () => {
        const fallback = img.dataset.fallback;
        if (fallback && img.src.indexOf(fallback) === -1) img.src = fallback;
      }, { once: true });
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

    const updateHeader = () => {
      header?.classList.toggle('is-scrolled', window.scrollY > 24);
      qs('[data-scroll-top]')?.classList.toggle('is-visible', window.scrollY > 420);
    };
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

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
    grid.innerHTML = DATA.vehicles.map(COMPONENTS.renderVehicleCard).join('');
    setImageFallbacks();

    qsa('[data-vehicle-filter]').forEach(button => {
      button.addEventListener('click', () => {
        qsa('[data-vehicle-filter]').forEach(btn => btn.classList.remove('is-active'));
        button.classList.add('is-active');
        const filter = button.dataset.vehicleFilter;
        qsa('.vehicle-card', grid).forEach(card => {
          const match = filter === 'all' || card.dataset.segment === filter || card.dataset.powertrain === filter;
          card.hidden = !match;
        });
      });
    });
  }

  function initTechnologyCards() {
    const target = qs('[data-technology-grid]');
    if (!target) return;
    const iconNames = ['battery', 'spark', 'wallet', 'shield'];
    target.innerHTML = DATA.technology.map((item, index) => `
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
    target.innerHTML = DATA.services.map((service, index) => `
      <article class="service-card">
        <div class="service-card__icon">${COMPONENTS.icon(iconNames[index])}</div>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      </article>`).join('');
  }

  function initNews() {
    const target = qs('[data-news-grid]');
    if (!target) return;
    const [featured, ...others] = DATA.news;
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

  function createHiddenGoogleField(form, name, value) {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = String(value ?? '');
    form.appendChild(input);
  }

  function postGoogleForm(payload) {
    const fields = CONFIG.googleFormFields;
    if (!CONFIG.formEndpoint || !fields) {
      return Promise.reject(new Error('Thiếu cấu hình Google Form.'));
    }

    return new Promise((resolve, reject) => {
      let settled = false;
      let started = false;
      let transportForm;
      let iframe;
      const targetName = `byd-google-form-${Date.now()}-${Math.random().toString(36).slice(2)}`;

      const cleanupLater = () => {
        window.setTimeout(() => {
          transportForm?.remove();
          iframe?.remove();
        }, 20000);
      };

      const finish = () => {
        if (settled) return;
        settled = true;
        cleanupLater();
        resolve();
      };

      const startSubmit = () => {
        if (started) return;
        started = true;
        try {
          transportForm = document.createElement('form');
          transportForm.method = 'POST';
          transportForm.action = CONFIG.formEndpoint;
          transportForm.target = targetName;
          transportForm.acceptCharset = 'UTF-8';
          transportForm.enctype = 'application/x-www-form-urlencoded';
          transportForm.style.display = 'none';
          transportForm.setAttribute('aria-hidden', 'true');

          createHiddenGoogleField(transportForm, fields.name, String(payload.name || '').trim());
          createHiddenGoogleField(transportForm, fields.phone, String(payload.phone || '').trim());
          createHiddenGoogleField(transportForm, fields.vehicle, String(payload.vehicle || '').trim());
          createHiddenGoogleField(transportForm, fields.area, String(payload.area || '').trim());
          createHiddenGoogleField(transportForm, 'fvv', '1');
          createHiddenGoogleField(transportForm, 'draftResponse', '[]');
          createHiddenGoogleField(transportForm, 'pageHistory', '0');
          createHiddenGoogleField(transportForm, 'submit', 'Submit');

          iframe.onload = () => {
            if (started) window.setTimeout(finish, 180);
          };

          document.body.appendChild(transportForm);
          HTMLFormElement.prototype.submit.call(transportForm);

          /* Google Forms là cross-origin nên không thể đọc nội dung phản hồi.
             Sự kiện load của iframe xác nhận trình duyệt đã hoàn tất lượt POST.
             Timeout chỉ là phương án dự phòng khi trình duyệt chặn sự kiện load. */
          window.setTimeout(finish, 5000);
        } catch (error) {
          if (!settled) {
            settled = true;
            transportForm?.remove();
            iframe?.remove();
            reject(error instanceof Error ? error : new Error('Không thể gửi Google Form.'));
          }
        }
      };

      try {
        iframe = document.createElement('iframe');
        iframe.name = targetName;
        iframe.title = 'Google Form submission target';
        iframe.tabIndex = -1;
        iframe.setAttribute('aria-hidden', 'true');
        iframe.style.cssText = 'position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;left:-9999px;bottom:0;border:0;';
        iframe.onload = startSubmit;
        iframe.src = 'about:blank';
        document.body.appendChild(iframe);
        window.setTimeout(startSubmit, 120);
      } catch (error) {
        reject(error instanceof Error ? error : new Error('Không thể khởi tạo kết nối Google Form.'));
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
    const status = qs('.form-status', form);
    const button = qs('button[type="submit"]', form);
    if (!status || !button || form.dataset.submitting === 'true') return;

    if (!validateLeadForm(form)) {
      status.textContent = 'Vui lòng kiểm tra lại các trường bắt buộc.';
      status.className = 'form-status is-error';
      qs('.is-invalid', form)?.focus();
      return;
    }

    const honeypot = qs('input[name="website"]', form);
    if (honeypot?.value) return;

    const lastSubmitted = Number(localStorage.getItem('byd-last-lead-submit') || 0);
    const cooldown = CONFIG.formCooldownSeconds * 1000;
    if (Date.now() - lastSubmitted < cooldown) {
      const seconds = Math.ceil((cooldown - (Date.now() - lastSubmitted)) / 1000);
      status.textContent = `Vui lòng chờ ${seconds} giây trước khi gửi lại.`;
      status.className = 'form-status is-error';
      return;
    }

    const payload = Object.fromEntries(new FormData(form).entries());
    form.dataset.submitting = 'true';
    button.disabled = true;
    button.classList.add('is-loading');
    status.textContent = 'Đang gửi thông tin…';
    status.className = 'form-status is-loading';

    try {
      await postGoogleForm(payload);
      localStorage.setItem('byd-last-lead-submit', String(Date.now()));
      status.textContent = 'Đã gửi thông tin thành công.';
      status.className = 'form-status is-success';

      try {
        window.dataLayer?.push({ event: 'generate_lead', vehicle: payload.vehicle || '', area: payload.area || '' });
        if (typeof window.fbq === 'function') window.fbq('track', 'Lead');
      } catch (_) {}

      if (form.id === 'modal-lead-form') {
        form.reset();
        const areaInput = qs('input[name="area"]', form);
        if (areaInput) areaInput.value = CONFIG.defaultArea;
        showLeadSuccess(form);
      } else {
        form.reset();
        const areaInput = qs('input[name="area"]', form);
        if (areaInput) areaInput.value = CONFIG.defaultArea;
      }
    } catch (error) {
      console.error('Google Form submit error:', error);
      status.innerHTML = `Gửi chưa thành công. Vui lòng thử lại hoặc <a href="${CONFIG.zaloUrl}" target="_blank" rel="noopener">liên hệ Zalo</a>.`;
      status.className = 'form-status is-error';
    } finally {
      form.dataset.submitting = 'false';
      button.disabled = false;
      button.classList.remove('is-loading');
    }
  }

  function initLeadForms() {
    qsa('.lead-form').forEach(form => {
      form.noValidate = true;
      const phone = qs('input[name="phone"]', form);
      const button = qs('button[type="submit"]', form);
      phone?.addEventListener('input', () => { phone.value = phone.value.replace(/\D/g, '').slice(0, 10); });

      form.addEventListener('submit', event => {
        event.preventDefault();
        event.stopPropagation();
        submitLead(form);
      }, true);

      button?.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        submitLead(form);
      });
    });
  }

  function syncVehiclePrice(select, input) {
    const vehicle = DATA.vehicles.find(item => item.name === select.value);
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
    if (!items.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach(item => item.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
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
      itemListElement: DATA.vehicles.map((vehicle, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': ['Product', 'Vehicle'],
          name: vehicle.name,
          image: `${CONFIG.domain}/${vehicle.image}`,
          description: vehicle.shortDescription,
          url: `${CONFIG.domain}/vehicle.html?slug=${vehicle.slug}`,
          brand: { '@type': 'Brand', name: 'BYD' },
          vehicleConfiguration: vehicle.segment,
          fuelType: vehicle.powertrain === 'EV' ? 'Electric' : 'Plug-in Hybrid'
        }
      }))
    };
    const faq = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: DATA.faqs.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } }))
    };
    const articles = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: DATA.news.map((article, index) => ({
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
    COMPONENTS.renderSiteShell('home');
    initHeader();
    initHeroSlider();
    initVehicleGrid();
    initTechnologyCards();
    initServiceCards();
    initNews();
    initMapTabs();
    initFaq();
    initModals();
    initLeadForms();
    initCalculators();
    initReveal();
    setImageFallbacks();
    createSchemas();
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
