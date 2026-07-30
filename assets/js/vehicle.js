'use strict';

(function () {
  const CONFIG = window.BYD_CONFIG;
  const DATA = window.BYD_DATA;
  const COMPONENTS = window.BYD_COMPONENTS;
  const APP = window.BYD_APP;

  const qs = (selector, scope = document) => scope.querySelector(selector);
  const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  function getVehicle() {
    const slug = new URLSearchParams(location.search).get('slug');
    return DATA.vehicles.find(vehicle => vehicle.slug === slug) || DATA.vehicles[0];
  }

  function updateSeo(vehicle) {
    document.title = `${vehicle.name} | BYD Cà Mau`;
    const description = `${vehicle.name}: ${vehicle.shortDescription} Đăng ký lái thử và nhận báo giá tại BYD Thành Công Cà Mau.`;
    const metaDescription = qs('meta[name="description"]');
    const canonical = qs('link[rel="canonical"]');
    const ogTitle = qs('meta[property="og:title"]');
    const ogDescription = qs('meta[property="og:description"]');
    if (metaDescription) metaDescription.content = description;
    if (canonical) canonical.href = `${CONFIG.domain}/vehicle.html?slug=${vehicle.slug}`;
    if (ogTitle) ogTitle.content = `${vehicle.name} | BYD Cà Mau`;
    if (ogDescription) ogDescription.content = description;
    qs('meta[property="og:url"]')?.setAttribute('content', `${CONFIG.domain}/vehicle.html?slug=${vehicle.slug}`);
    qs('meta[name="twitter:title"]')?.setAttribute('content', `${vehicle.name} | BYD Cà Mau`);
    qs('meta[name="twitter:description"]')?.setAttribute('content', description);
  }

  function renderGallery(vehicle) {
    const primaryImage = vehicle.heroImage || vehicle.imageRemote || vehicle.image;
    const gallery = [...new Set([primaryImage, ...(vehicle.gallery || [vehicle.image])])];
    return `
      <div class="vehicle-gallery" data-vehicle-gallery>
        <div class="vehicle-gallery__main">
          <img src="${primaryImage}" data-fallback="${vehicle.image}" alt="${vehicle.name} - ảnh ngoại thất" width="1000" height="700" loading="eager" fetchpriority="high">
        </div>
        <div class="vehicle-gallery__thumbs">
          ${gallery.map((image, index) => `<button type="button" class="vehicle-gallery__thumb ${index === 0 ? 'is-active' : ''}" data-gallery-image="${image}" data-gallery-fallback="${index === 0 ? vehicle.image : image}" aria-label="Xem ảnh ${index + 1} của ${vehicle.name}"><img src="${index === 0 ? vehicle.image : image}" alt="Ảnh ${index + 1} ${vehicle.name}" width="180" height="120" loading="lazy"></button>`).join('')}
        </div>
      </div>`;
  }

  function renderVehiclePage(vehicle) {
    const target = qs('[data-vehicle-page]');
    if (!target) return;
    const specList = vehicle.specs.map(spec => `<div class="vehicle-summary__spec"><span>${spec.label}</span><strong>${spec.value}</strong></div>`).join('');
    const tabs = [
      ['overview', 'Tổng quan'],
      ['exterior', 'Ngoại thất'],
      ['interior', 'Nội thất'],
      ['performance', 'Vận hành'],
      ['safety', 'An toàn'],
      ['specifications', 'Thông số'],
      ['offers', 'Ưu đãi']
    ];

    target.innerHTML = `
      <section class="vehicle-breadcrumb container" aria-label="Breadcrumb">
        <a href="index.html">Trang chủ</a><span>/</span><a href="index.html#vehicles">Dòng xe</a><span>/</span><strong>${vehicle.name}</strong>
      </section>

      <section class="vehicle-hero-section">
        <div class="container vehicle-hero-grid">
          ${renderGallery(vehicle)}
          <div class="vehicle-summary">
            <span class="eyebrow">${vehicle.segment} · ${vehicle.powertrain === 'EV' ? 'Thuần điện' : 'DM-i Super Hybrid'}</span>
            <h1>${vehicle.name}</h1>
            <p class="vehicle-summary__price">${vehicle.priceLabel}</p>
            <p class="vehicle-summary__description">${vehicle.shortDescription}</p>
            <div class="vehicle-summary__colors">
              <span>Màu xe tham khảo</span>
              <div>${vehicle.colors.map((color, index) => `<button type="button" class="color-swatch color-swatch--${index + 1}" aria-label="Màu ${color}" title="${color}"></button>`).join('')}</div>
              <small>Màu thực tế tùy phiên bản và tình trạng xe.</small>
            </div>
            <div class="vehicle-summary__specs">${specList}</div>
            <div class="vehicle-summary__actions">
              <button class="button button--primary" data-open-modal="lead" data-vehicle="${vehicle.name}" data-intent="Đăng ký lái thử ${vehicle.name}">Đăng ký lái thử</button>
              <button class="button button--dark" data-open-modal="lead" data-vehicle="${vehicle.name}" data-intent="Nhận báo giá ${vehicle.name}">Nhận báo giá</button>
            </div>
            <a class="vehicle-summary__hotline" href="tel:${CONFIG.hotlineSales}">${COMPONENTS.icon('phone')}<span><small>Hotline tư vấn</small><strong>${COMPONENTS.formatPhone(CONFIG.hotlineSales)}</strong></span></a>
          </div>
        </div>
      </section>

      <nav class="vehicle-tabs" aria-label="Nội dung chi tiết xe">
        <div class="container vehicle-tabs__inner">
          ${tabs.map(([id, label], index) => `<button type="button" class="vehicle-tab ${index === 0 ? 'is-active' : ''}" data-tab-target="${id}">${label}</button>`).join('')}
        </div>
      </nav>

      <main class="vehicle-content container">
        ${['overview', 'exterior', 'interior', 'performance', 'safety'].map((key, index) => {
          const section = vehicle.sections[key];
          return `
            <section id="${key}" class="vehicle-story ${index % 2 ? 'vehicle-story--reverse' : ''}" data-reveal>
              <div class="vehicle-story__image"><img src="${section.image}" alt="${section.title} - ${vehicle.name}" width="1000" height="680" loading="lazy"></div>
              <div class="vehicle-story__content">
                <span class="eyebrow">${tabs.find(item => item[0] === key)?.[1]}</span>
                <h2>${section.title}</h2>
                <p>${section.text}</p>
                <button class="text-link text-link--button" data-open-modal="lead" data-vehicle="${vehicle.name}" data-intent="Tư vấn ${section.title}">Nhận tư vấn ${COMPONENTS.icon('chevronRight')}</button>
              </div>
            </section>`;
        }).join('')}

        <section id="specifications" class="vehicle-specifications" data-reveal>
          <div class="section-heading section-heading--center">
            <span class="eyebrow">Thông tin tóm tắt</span>
            <h2>Thông số nổi bật</h2>
            <p>Thông số đầy đủ phụ thuộc phiên bản và tài liệu phân phối chính thức tại thời điểm mua xe.</p>
          </div>
          <div class="vehicle-specifications__grid">
            ${vehicle.specs.map(spec => `<div><span>${spec.label}</span><strong>${spec.value}</strong></div>`).join('')}
            <div><span>Năng lượng</span><strong>${vehicle.powertrain === 'EV' ? 'Thuần điện' : 'Plug-in Hybrid'}</strong></div>
            <div><span>Thương hiệu</span><strong>BYD</strong></div>
            <div><span>Giá bán</span><strong>${vehicle.priceLabel}</strong></div>
          </div>
          <button class="button button--outline" data-open-modal="lead" data-vehicle="${vehicle.name}" data-intent="Nhận bảng thông số ${vehicle.name}">Nhận bảng thông số</button>
        </section>

        <section id="offers" class="vehicle-offer" data-reveal>
          <div>
            <span class="eyebrow">Ưu đãi theo thời điểm</span>
            <h2>Nhận chương trình dành riêng cho ${vehicle.name}</h2>
            <p>Đại lý sẽ xác nhận giá, quà tặng, hỗ trợ ngân hàng và thời gian giao xe đang áp dụng.</p>
          </div>
          <div class="vehicle-offer__actions">
            <button class="button button--primary" data-open-modal="lead" data-vehicle="${vehicle.name}" data-intent="Nhận ưu đãi ${vehicle.name}">Nhận ưu đãi</button>
            <a class="button button--light" href="${CONFIG.zaloUrl}" target="_blank" rel="noopener">Chat Zalo</a>
          </div>
        </section>

        <section class="related-vehicles" data-reveal>
          <div class="section-heading">
            <span class="eyebrow">Gợi ý khác</span>
            <h2>Khám phá thêm dòng xe BYD</h2>
          </div>
          <div class="vehicle-grid vehicle-grid--related">
            ${DATA.vehicles.filter(item => item.slug !== vehicle.slug).slice(0, 3).map(COMPONENTS.renderVehicleCard).join('')}
          </div>
        </section>
      </main>`;
  }

  function initGallery() {
    const main = qs('.vehicle-gallery__main img');
    qsa('[data-gallery-image]').forEach(button => {
      button.addEventListener('click', () => {
        qsa('[data-gallery-image]').forEach(item => item.classList.remove('is-active'));
        button.classList.add('is-active');
        main.src = button.dataset.galleryImage;
        main.dataset.fallback = button.dataset.galleryFallback;
      });
    });
  }

  function initTabs() {
    qsa('[data-tab-target]').forEach(button => {
      button.addEventListener('click', () => {
        const id = button.dataset.tabTarget;
        const target = qs(`#${id}`);
        if (!target) return;
        qsa('[data-tab-target]').forEach(item => item.classList.remove('is-active'));
        button.classList.add('is-active');
        const headerOffset = (qs('.site-header')?.offsetHeight || 80) + (qs('.vehicle-tabs')?.offsetHeight || 60) + 12;
        const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  function createVehicleSchema(vehicle) {
    const schemas = [
      {
        '@context': 'https://schema.org',
        '@type': ['Product', 'Vehicle'],
        name: vehicle.name,
        image: [`${CONFIG.domain}/${vehicle.heroImage || vehicle.image}`],
        description: vehicle.shortDescription,
        brand: { '@type': 'Brand', name: 'BYD' },
        manufacturer: { '@type': 'Organization', name: 'BYD' },
        fuelType: vehicle.powertrain === 'EV' ? 'Electric' : 'Plug-in Hybrid',
        vehicleConfiguration: vehicle.segment,
        url: `${CONFIG.domain}/vehicle.html?slug=${vehicle.slug}`,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: CONFIG.domain },
          { '@type': 'ListItem', position: 2, name: 'Dòng xe', item: `${CONFIG.domain}/#vehicles` },
          { '@type': 'ListItem', position: 3, name: vehicle.name, item: `${CONFIG.domain}/vehicle.html?slug=${vehicle.slug}` }
        ]
      }
    ];
    schemas.forEach(data => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    });
  }

  function initVehiclePage() {
    const vehicle = getVehicle();
    COMPONENTS.renderSiteShell('vehicles');
    updateSeo(vehicle);
    renderVehiclePage(vehicle);
    APP.initHeader();
    APP.initModals();
    APP.initLeadForms();
    APP.initCalculators();
    APP.initReveal();
    APP.setImageFallbacks();
    initGallery();
    initTabs();
    createVehicleSchema(vehicle);
  }

  document.addEventListener('DOMContentLoaded', initVehiclePage);
})();
