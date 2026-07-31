'use strict';

(function () {
  const CONFIG = window.BYD_CONFIG;
  const DATA = window.BYD_DATA;
  const COMPONENTS = window.BYD_COMPONENTS;
  const APP = window.BYD_APP;

  const qs = (selector, scope = document) => scope.querySelector(selector);
  const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  }[char]));

  const kindLabels = {
    hero: 'Tổng quan',
    color: 'Màu xe',
    exterior: 'Ngoại thất',
    interior: 'Nội thất',
    technology: 'Công nghệ & vận hành',
    safety: 'An toàn',
    charging: 'Sạc & V2L',
    detail: 'Chi tiết khác'
  };

  function getVehicle() {
    const slug = new URLSearchParams(location.search).get('slug');
    return DATA.vehicles.find(vehicle => vehicle.slug === slug) || DATA.vehicles[0];
  }

  function mediaAttrs(media, fallback = '') {
    if (!media) return { src: fallback, remote: fallback };
    if (typeof media === 'string') return { src: media, remote: fallback || media };
    return { src: media.src || fallback, remote: fallback || media.src };
  }

  function imageTag(media, alt, options = {}) {
    const attrs = mediaAttrs(media, options.fallback || 'assets/images/hero-vehicle.webp');
    const loading = options.eager ? 'eager' : 'lazy';
    const priority = options.eager ? ' fetchpriority="high"' : '';
    const cls = options.className ? ` class="${escapeHtml(options.className)}"` : '';
    return `<img${cls} src="${escapeHtml(attrs.src)}" data-fallback="assets/images/hero-vehicle.webp" alt="${escapeHtml(alt)}" width="${options.width || 1200}" height="${options.height || 800}" loading="${loading}" decoding="async"${priority}>`;
  }

  function updateSeo(vehicle) {
    document.title = `${vehicle.name} - Hình ảnh, giá và thông số | BYD Cà Mau`;
    const description = `${vehicle.name}: ${vehicle.tagline || vehicle.shortDescription}. Xem toàn bộ hình ảnh, giá tham khảo, màu xe, phiên bản và đăng ký lái thử tại BYD Thành Công Cà Mau.`;
    const imageUrl = vehicle.heroRemote || `${CONFIG.domain}/${vehicle.heroImage || vehicle.image}`;
    const pageUrl = `${CONFIG.domain}/san-pham/?slug=${vehicle.slug}`;
    qs('meta[name="description"]')?.setAttribute('content', description);
    qs('link[rel="canonical"]')?.setAttribute('href', pageUrl);
    qs('meta[property="og:title"]')?.setAttribute('content', `${vehicle.name} | BYD Cà Mau`);
    qs('meta[property="og:description"]')?.setAttribute('content', description);
    qs('meta[property="og:url"]')?.setAttribute('content', pageUrl);
    qs('meta[property="og:image"]')?.setAttribute('content', imageUrl);
    qs('meta[property="og:image:secure_url"]')?.setAttribute('content', imageUrl);
    qs('meta[name="twitter:title"]')?.setAttribute('content', `${vehicle.name} | BYD Cà Mau`);
    qs('meta[name="twitter:description"]')?.setAttribute('content', description);
    qs('meta[name="twitter:image"]')?.setAttribute('content', imageUrl);
  }

  function renderGallery(vehicle) {
    const media = vehicle.media || [];
    const primary = vehicle.heroMedia || media[0] || { src: vehicle.heroImage || vehicle.image, remote: vehicle.heroRemote || vehicle.image };
    const thumbs = media.slice(0, 10);
    return `
      <div class="vehicle-gallery vehicle-gallery--source" data-vehicle-gallery>
        <div class="vehicle-gallery__topline">
          <span class="vehicle-gallery__status"><i></i>${escapeHtml(vehicle.availability || 'Đang nhận tư vấn')}</span>
          <span>${media.length} hình sản phẩm</span>
        </div>
        <button class="vehicle-gallery__main vehicle-gallery__main--source" type="button" data-open-lightbox data-lightbox-index="0" aria-label="Mở ảnh lớn ${escapeHtml(vehicle.name)}">
          ${imageTag(primary, `${vehicle.name} - hình tổng quan`, { eager: true, width: 1500, height: 900 })}
          <div class="vehicle-gallery__caption">
            <strong>${escapeHtml(vehicle.name)}</strong>
            <span data-selected-color-label>${escapeHtml(vehicle.colorOptions?.[0]?.name || 'Hình ảnh sản phẩm')}</span>
          </div>
          <span class="vehicle-gallery__zoom">${COMPONENTS.icon('search')} Xem ảnh lớn</span>
        </button>
        <div class="vehicle-gallery__thumbs vehicle-gallery__thumbs--scroll">
          ${thumbs.map((item, index) => `<button type="button" class="vehicle-gallery__thumb ${index === 0 ? 'is-active' : ''}" data-gallery-image="${escapeHtml(item.src)}" data-gallery-fallback="assets/images/hero-vehicle.webp" data-gallery-index="${index}" aria-label="Xem ảnh ${index + 1} của ${escapeHtml(vehicle.name)}">${imageTag(item, `Ảnh ${index + 1} ${vehicle.name}`, { width: 220, height: 140 })}</button>`).join('')}
          ${media.length > 10 ? `<button class="vehicle-gallery__more" type="button" data-scroll-gallery>+${media.length - 10}<span>Xem tất cả</span></button>` : ''}
        </div>
      </div>`;
  }

  function renderVariants(vehicle) {
    const variants = vehicle.variants || [];
    if (!variants.length) return '';
    return `
      <div class="vehicle-variant-picker">
        <div class="vehicle-option-heading">
          <span>Chọn phiên bản</span>
          <small>Giá được xác nhận lại tại thời điểm tư vấn</small>
        </div>
        <div class="vehicle-variant-list">
          ${variants.map((variant, index) => `
            <button type="button" class="vehicle-variant ${index === 0 ? 'is-active' : ''}" data-vehicle-variant="${escapeHtml(variant.name)}" data-variant-price="${escapeHtml(variant.priceLabel)}">
              <span>${escapeHtml(variant.name)}</span>
              <strong>${escapeHtml(variant.priceLabel)}</strong>
              <small>${escapeHtml(variant.note || '')}</small>
              <em>${(variant.highlights || []).map(item => `<b>${escapeHtml(item)}</b>`).join('')}</em>
            </button>`).join('')}
        </div>
      </div>`;
  }

  function renderColors(vehicle) {
    const colors = vehicle.colorOptions || [];
    if (!colors.length) return '';
    return `
      <div class="vehicle-summary__colors vehicle-summary__colors--catalog">
        <div class="vehicle-option-heading">
          <span>Màu ngoại thất</span>
          <strong data-selected-color-name>${escapeHtml(colors[0]?.name || '')}</strong>
        </div>
        <div class="vehicle-color-list">
          ${colors.map((color, index) => {
            const image = mediaAttrs(color.image, '');
            return `<button type="button" class="color-swatch-catalog ${index === 0 ? 'is-active' : ''}" style="--swatch:${escapeHtml(color.hex)}" data-vehicle-color="${escapeHtml(color.name)}" data-vehicle-color-hex="${escapeHtml(color.hex)}" data-color-image="${escapeHtml(image.src)}" data-color-fallback="assets/images/hero-vehicle.webp" aria-label="Chọn màu ${escapeHtml(color.name)}" title="${escapeHtml(color.name)}"><i></i><span>${escapeHtml(color.name)}</span></button>`;
          }).join('')}
        </div>
        <small>Màu sắc trên màn hình chỉ mang tính minh họa; màu xe thực tế tùy phiên bản và lô xe.</small>
      </div>`;
  }

  function renderMetrics(vehicle) {
    return `<section class="vehicle-metric-strip" aria-label="Thông số nổi bật ${escapeHtml(vehicle.name)}">
      ${(vehicle.specs || []).slice(0, 4).map((item, index) => `<div><span>0${index + 1}</span><strong>${escapeHtml(item.value)}</strong><small>${escapeHtml(item.label)}</small></div>`).join('')}
    </section>`;
  }

  function renderFeatureStories(vehicle) {
    const stories = (vehicle.storyBlocks || []).slice(0, 8);
    if (!stories.length) return '';
    return `<section id="stories" class="source-story-section">
      <div class="section-heading section-heading--center" data-reveal>
        <span class="eyebrow">Khám phá ${escapeHtml(vehicle.name)}</span>
        <h2>Thiết kế, tiện nghi và công nghệ qua từng chi tiết</h2>
        <p>Thông tin được sắp xếp lại từ dữ liệu sản phẩm để dễ xem trên cả máy tính và điện thoại.</p>
      </div>
      <div class="source-story-list">
        ${stories.map((story, index) => `<article class="source-story ${index % 2 ? 'source-story--reverse' : ''}" data-reveal>
          <button class="source-story__media" type="button" data-open-lightbox data-media-src="${escapeHtml(story.image?.src || '')}" data-media-fallback="assets/images/hero-vehicle.webp" aria-label="Xem ảnh ${escapeHtml(story.title)}">
            ${imageTag(story.image, `${story.title} - ${vehicle.name}`, { width: 1400, height: 900, fallback: vehicle.heroRemote || vehicle.image })}
            <span>${escapeHtml(kindLabels[story.category] || 'Chi tiết')}</span>
          </button>
          <div class="source-story__content">
            <span class="eyebrow">${escapeHtml(kindLabels[story.category] || 'Điểm nổi bật')}</span>
            <h3>${escapeHtml(story.title)}</h3>
            <p>${escapeHtml(story.text)}</p>
            <button class="text-link text-link--button" data-open-modal="lead" data-vehicle="${escapeHtml(vehicle.name)}" data-intent="Tư vấn ${escapeHtml(story.title)}">Nhận tư vấn ${COMPONENTS.icon('chevronRight')}</button>
          </div>
        </article>`).join('')}
      </div>
    </section>`;
  }

  function renderFullGallery(vehicle) {
    const groups = {};
    (vehicle.media || []).forEach((item, index) => {
      const kind = item.kind || 'detail';
      (groups[kind] ||= []).push({ ...item, globalIndex: index });
    });
    const order = ['hero', 'color', 'exterior', 'interior', 'technology', 'safety', 'charging', 'detail'];
    return `<section id="gallery-all" class="source-gallery-section">
      <div class="section-heading" data-reveal>
        <span class="eyebrow">Thư viện hình ảnh</span>
        <h2>Toàn bộ ${vehicle.galleryCount || vehicle.media?.length || 0} hình của ${escapeHtml(vehicle.name)}</h2>
        <p>Ảnh được phân nhóm theo màu xe, ngoại thất, nội thất, công nghệ, vận hành và an toàn để dễ theo dõi.</p>
      </div>
      ${order.filter(kind => groups[kind]?.length).map(kind => `<div class="source-gallery-group" data-reveal>
        <div class="source-gallery-group__head"><h3>${escapeHtml(kindLabels[kind])}</h3><span>${groups[kind].length} hình</span></div>
        <div class="source-gallery-grid">
          ${groups[kind].map((item, localIndex) => `<button type="button" class="source-gallery-item source-gallery-item--${escapeHtml(kind)}" data-open-lightbox data-lightbox-index="${item.globalIndex}" aria-label="Mở ảnh ${item.globalIndex + 1} ${escapeHtml(vehicle.name)}">
            ${imageTag(item, `${vehicle.name} - ${kindLabels[kind]} ${localIndex + 1}`, { width: 900, height: 640 })}
            <span>${String(item.globalIndex + 1).padStart(2, '0')}</span>
          </button>`).join('')}
        </div>
      </div>`).join('')}
    </section>`;
  }

  function renderAllDetails(vehicle) {
    const details = (vehicle.allContentBlocks || []).slice(8);
    if (!details.length) return '';
    return `<section id="details" class="source-details-section" data-reveal>
      <div class="section-heading">
        <span class="eyebrow">Thông tin chi tiết</span>
        <h2>Tìm hiểu thêm về ${escapeHtml(vehicle.name)}</h2>
      </div>
      <div class="source-details-grid">
        ${details.map((item, index) => `<details class="source-detail-item" ${index === 0 ? 'open' : ''}>
          <summary><span>${escapeHtml(item.title)}</span>${COMPONENTS.icon('chevronDown')}</summary>
          <p>${escapeHtml(item.text)}</p>
        </details>`).join('')}
      </div>
    </section>`;
  }

  function renderSpecGroups(vehicle) {
    const groups = vehicle.specGroups || [{ title: 'Thông số nổi bật', items: vehicle.specs || [] }];
    return `<div class="vehicle-spec-groups">
      ${groups.map((group, index) => `<details class="vehicle-spec-group" ${index === 0 ? 'open' : ''}>
        <summary><span>${escapeHtml(group.title)}</span>${COMPONENTS.icon('chevronDown')}</summary>
        <div class="vehicle-spec-group__content">${(group.items || []).map(item => `<div><span>${escapeHtml(item.label)}</span><strong>${escapeHtml(item.value)}</strong></div>`).join('')}</div>
      </details>`).join('')}
    </div>`;
  }

  function renderLightbox(vehicle) {
    return `<div class="media-lightbox" data-media-lightbox aria-hidden="true" role="dialog" aria-modal="true" aria-label="Thư viện ảnh ${escapeHtml(vehicle.name)}">
      <button class="media-lightbox__backdrop" type="button" data-close-lightbox aria-label="Đóng"></button>
      <div class="media-lightbox__dialog">
        <div class="media-lightbox__top"><strong data-lightbox-title>${escapeHtml(vehicle.name)}</strong><span data-lightbox-counter></span><button type="button" data-close-lightbox aria-label="Đóng">${COMPONENTS.icon('close')}</button></div>
        <div class="media-lightbox__stage"><button type="button" class="media-lightbox__nav media-lightbox__nav--prev" data-lightbox-prev aria-label="Ảnh trước">‹</button><img data-lightbox-image alt="${escapeHtml(vehicle.name)}"><button type="button" class="media-lightbox__nav media-lightbox__nav--next" data-lightbox-next aria-label="Ảnh sau">›</button></div>
      </div>
    </div>`;
  }

  function renderVehiclePage(vehicle) {
    const target = qs('[data-vehicle-page]');
    if (!target) return;
    const selectedVariant = vehicle.variants?.[0]?.name || '';
    const selectedPrice = vehicle.variants?.[0]?.priceLabel || vehicle.priceLabel;
    const officialLink = vehicle.officialUrl ? `<a class="button button--outline" href="${escapeHtml(vehicle.officialUrl)}" target="_blank" rel="noopener">Thông tin chính thức ${COMPONENTS.icon('external')}</a>` : '';
    const brochureLink = vehicle.brochureUrl ? `<a class="button button--light vehicle-document-link" href="${escapeHtml(vehicle.brochureUrl)}" target="_blank" rel="noopener">Xem catalog ${COMPONENTS.icon('document')}</a>` : '';
    const tabs = [['stories', 'Tổng quan'], ['gallery-all', 'Hình ảnh'], ['details', 'Chi tiết'], ['specifications', 'Thông số'], ['offers', 'Ưu đãi']];

    target.innerHTML = `
      <section class="vehicle-breadcrumb container" aria-label="Breadcrumb"><a href="/">Trang chủ</a><span>/</span><a href="/#vehicles">Dòng xe</a><span>/</span><strong>${escapeHtml(vehicle.name)}</strong></section>
      <section class="vehicle-hero-section vehicle-hero-section--source">
        <div class="container vehicle-hero-grid">${renderGallery(vehicle)}
          <div class="vehicle-summary vehicle-summary--catalog">
            <div class="vehicle-summary__topline"><span class="eyebrow">${escapeHtml(vehicle.segment)} · ${vehicle.powertrain === 'EV' ? 'Thuần điện' : 'DM-i Super Hybrid'}</span><span class="vehicle-summary__availability">${escapeHtml(vehicle.availability || '')}</span></div>
            <h1>${escapeHtml(vehicle.name)}</h1>
            <p class="vehicle-summary__tagline">${escapeHtml(vehicle.tagline || '')}</p>
            <div class="vehicle-summary__price-box"><div><small>Giá tham khảo</small><p class="vehicle-summary__price" data-selected-variant-price>${escapeHtml(selectedPrice)}</p></div><span data-selected-variant-name>${escapeHtml(selectedVariant)}</span></div>
            <p class="vehicle-summary__description">${escapeHtml(vehicle.shortDescription)}</p>
            ${renderVariants(vehicle)}${renderColors(vehicle)}
            <div class="vehicle-summary__actions vehicle-summary__actions--catalog"><button class="button button--primary" data-open-modal="lead" data-vehicle="${escapeHtml(vehicle.name)}" data-intent="Nhận báo giá ${escapeHtml(vehicle.name)}" data-vehicle-lead>Nhận báo giá</button><button class="button button--dark" data-open-modal="lead" data-vehicle="${escapeHtml(vehicle.name)}" data-intent="Đăng ký lái thử ${escapeHtml(vehicle.name)}" data-vehicle-lead>Đăng ký lái thử</button>${brochureLink}</div>
            <div class="vehicle-summary__reference-actions">${officialLink}<button class="text-link text-link--button" data-open-modal="calculator" data-price="${vehicle.price || ''}">Tính giá lăn bánh ${COMPONENTS.icon('chevronRight')}</button></div>
            <a class="vehicle-summary__hotline" href="tel:${CONFIG.hotlineSales}">${COMPONENTS.icon('phone')}<span><small>Hotline tư vấn</small><strong>${COMPONENTS.formatPhone(CONFIG.hotlineSales)}</strong></span></a>
          </div>
        </div>
      </section>
      <div class="container">${renderMetrics(vehicle)}</div>
      <nav class="vehicle-tabs" aria-label="Nội dung chi tiết xe"><div class="container vehicle-tabs__inner">${tabs.map(([id, label], index) => `<button type="button" class="vehicle-tab ${index === 0 ? 'is-active' : ''}" data-tab-target="${id}">${label}</button>`).join('')}</div></nav>
      <main class="vehicle-content container">
        ${renderFeatureStories(vehicle)}
        ${renderFullGallery(vehicle)}
        ${renderAllDetails(vehicle)}
        <section id="specifications" class="vehicle-specifications vehicle-specifications--catalog" data-reveal><div class="section-heading section-heading--center"><span class="eyebrow">Thông tin sản phẩm</span><h2>Thông số và trang bị nổi bật</h2><p>Dữ liệu được tổng hợp từ hồ sơ sản phẩm đã cung cấp. Trang bị thực tế có thể thay đổi theo phiên bản và thời điểm phân phối.</p></div>${renderSpecGroups(vehicle)}<div class="vehicle-specifications__actions"><button class="button button--primary" data-open-modal="lead" data-vehicle="${escapeHtml(vehicle.name)}" data-intent="Nhận bảng thông số ${escapeHtml(vehicle.name)}">Nhận bảng thông số</button>${officialLink}</div></section>
        <section id="offers" class="vehicle-offer vehicle-offer--catalog" data-reveal><div><span class="eyebrow">Ưu đãi theo thời điểm</span><h2>Nhận giá và quà tặng dành riêng cho ${escapeHtml(vehicle.name)}</h2><p>Tư vấn viên sẽ xác nhận giá xe, màu đang có, hỗ trợ ngân hàng, quà tặng và thời gian giao xe tại BYD Thành Công Cà Mau.</p></div><div class="vehicle-offer__actions"><button class="button button--primary" data-open-modal="lead" data-vehicle="${escapeHtml(vehicle.name)}" data-intent="Nhận ưu đãi ${escapeHtml(vehicle.name)}">Nhận ưu đãi</button><a class="button button--light" href="${CONFIG.zaloUrl}" target="_blank" rel="noopener">Chat Zalo</a></div></section>
        <section class="related-vehicles" data-reveal><div class="section-heading"><span class="eyebrow">Gợi ý khác</span><h2>Khám phá thêm dòng xe BYD</h2></div><div class="vehicle-grid vehicle-grid--related">${[...DATA.vehicles].filter(item => item.slug !== vehicle.slug).sort((a, b) => Number(b.segment === vehicle.segment) - Number(a.segment === vehicle.segment)).slice(0, 3).map(COMPONENTS.renderVehicleCard).join('')}</div></section>
      </main>${renderLightbox(vehicle)}`;
  }

  function initGallery(vehicle) {
    const main = qs('.vehicle-gallery__main img');
    const mainButton = qs('.vehicle-gallery__main');
    qsa('[data-gallery-image]').forEach(button => button.addEventListener('click', () => {
      qsa('[data-gallery-image]').forEach(item => item.classList.remove('is-active'));
      button.classList.add('is-active');
      if (!main) return;
      main.src = button.dataset.galleryImage;
      main.dataset.fallback = button.dataset.galleryFallback;
      mainButton?.setAttribute('data-lightbox-index', button.dataset.galleryIndex || '0');
    }));
    qs('[data-scroll-gallery]')?.addEventListener('click', () => qs('#gallery-all')?.scrollIntoView({ behavior: 'smooth' }));
  }

  function initVariants(vehicle) {
    qsa('[data-vehicle-variant]').forEach(button => button.addEventListener('click', () => {
      qsa('[data-vehicle-variant]').forEach(item => item.classList.remove('is-active'));
      button.classList.add('is-active');
      const variantName = button.dataset.vehicleVariant || '';
      const price = button.dataset.variantPrice || vehicle.priceLabel;
      if (qs('[data-selected-variant-price]')) qs('[data-selected-variant-price]').textContent = price;
      if (qs('[data-selected-variant-name]')) qs('[data-selected-variant-name]').textContent = variantName;
      qsa('[data-vehicle-lead]').forEach(item => item.dataset.intent = `${item.textContent.trim()} ${vehicle.name} - ${variantName}`);
    }));
  }

  function initColors() {
    const gallery = qs('[data-vehicle-gallery]');
    const main = qs('.vehicle-gallery__main img');
    qsa('[data-vehicle-color]').forEach(button => button.addEventListener('click', () => {
      qsa('[data-vehicle-color]').forEach(item => item.classList.remove('is-active'));
      button.classList.add('is-active');
      const name = button.dataset.vehicleColor || '';
      if (qs('[data-selected-color-name]')) qs('[data-selected-color-name]').textContent = name;
      if (qs('[data-selected-color-label]')) qs('[data-selected-color-label]').textContent = name;
      gallery?.style.setProperty('--active-vehicle-color', button.dataset.vehicleColorHex || '#e60012');
      if (main && button.dataset.colorImage) {
        main.src = button.dataset.colorImage;
        main.dataset.fallback = button.dataset.colorFallback || button.dataset.colorImage;
      }
    }));
  }

  function initTabs() {
    qsa('[data-tab-target]').forEach(button => button.addEventListener('click', () => {
      const target = qs(`#${button.dataset.tabTarget}`);
      if (!target) return;
      qsa('[data-tab-target]').forEach(item => item.classList.remove('is-active'));
      button.classList.add('is-active');
      const offset = (qs('.site-header')?.offsetHeight || 80) + (qs('.vehicle-tabs')?.offsetHeight || 60) + 12;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    }));
  }

  function initLightbox(vehicle) {
    const box = qs('[data-media-lightbox]');
    const image = qs('[data-lightbox-image]');
    const counter = qs('[data-lightbox-counter]');
    const media = vehicle.media || [];
    let index = 0;
    if (!box || !image) return;
    const show = nextIndex => {
      if (!media.length) return;
      index = (nextIndex + media.length) % media.length;
      const item = media[index];
      image.src = item.src;
      image.dataset.fallback = 'assets/images/hero-vehicle.webp';
      image.alt = `${vehicle.name} - hình ${index + 1}`;
      if (counter) counter.textContent = `${index + 1} / ${media.length}`;
    };
    const open = nextIndex => {
      show(nextIndex);
      box.classList.add('is-open');
      box.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lightbox-open');
    };
    const close = () => {
      box.classList.remove('is-open');
      box.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lightbox-open');
    };
    qsa('[data-open-lightbox]').forEach(button => button.addEventListener('click', () => {
      if (button.dataset.mediaSrc) {
        const found = media.findIndex(item => item.src === button.dataset.mediaSrc || false);
        open(found >= 0 ? found : 0);
      } else open(Number(button.dataset.lightboxIndex || 0));
    }));
    qsa('[data-close-lightbox]').forEach(button => button.addEventListener('click', close));
    qs('[data-lightbox-prev]')?.addEventListener('click', () => show(index - 1));
    qs('[data-lightbox-next]')?.addEventListener('click', () => show(index + 1));
    document.addEventListener('keydown', event => {
      if (!box.classList.contains('is-open')) return;
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') show(index - 1);
      if (event.key === 'ArrowRight') show(index + 1);
    });
  }

  function createVehicleSchema(vehicle) {
    const image = vehicle.heroRemote || `${CONFIG.domain}/${vehicle.heroImage || vehicle.image}`;
    const productSchema = {'@context':'https://schema.org','@type':['Product','Vehicle'],name:vehicle.name,image:[image],description:vehicle.shortDescription,brand:{'@type':'Brand',name:'BYD'},manufacturer:{'@type':'Organization',name:'BYD'},fuelType:vehicle.powertrain === 'EV' ? 'Electric' : 'Plug-in Hybrid',vehicleConfiguration:vehicle.segment,url:`${CONFIG.domain}/san-pham/?slug=${vehicle.slug}`,offers:vehicle.price ? {'@type':'Offer',priceCurrency:'VND',price:vehicle.price,availability:'https://schema.org/InStock',url:`${CONFIG.domain}/san-pham/?slug=${vehicle.slug}`} : undefined};
    const breadcrumbSchema = {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Trang chủ',item:CONFIG.domain},{'@type':'ListItem',position:2,name:'Dòng xe',item:`${CONFIG.domain}/#vehicles`},{'@type':'ListItem',position:3,name:vehicle.name,item:`${CONFIG.domain}/san-pham/?slug=${vehicle.slug}`}]};
    [productSchema, breadcrumbSchema].forEach(data => { const script=document.createElement('script'); script.type='application/ld+json'; script.textContent=JSON.stringify(data); document.head.appendChild(script); });
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
    initGallery(vehicle);
    initVariants(vehicle);
    initColors();
    initTabs();
    initLightbox(vehicle);
    createVehicleSchema(vehicle);
  }

  document.addEventListener('DOMContentLoaded', initVehiclePage);
})();
