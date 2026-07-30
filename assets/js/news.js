'use strict';

(function () {
  const CONFIG = window.BYD_CONFIG;
  const DATA = window.BYD_DATA;
  const COMPONENTS = window.BYD_COMPONENTS;
  const APP = window.BYD_APP;

  const qs = (selector, scope = document) => scope.querySelector(selector);

  function getArticle() {
    const slug = new URLSearchParams(location.search).get('slug');
    return DATA.news.find(article => article.slug === slug) || DATA.news[0];
  }

  function formatDate(date) {
    return new Intl.DateTimeFormat('vi-VN', {
      day: '2-digit', month: '2-digit', year: 'numeric'
    }).format(new Date(`${date}T00:00:00`));
  }

  function updateSeo(article) {
    const description = article.excerpt;
    document.title = `${article.title} | BYD Cà Mau`;
    qs('meta[name="description"]')?.setAttribute('content', description);
    qs('link[rel="canonical"]')?.setAttribute('href', `${CONFIG.domain}/news.html?slug=${article.slug}`);
    qs('meta[property="og:title"]')?.setAttribute('content', article.title);
    qs('meta[property="og:description"]')?.setAttribute('content', description);
    qs('meta[property="og:url"]')?.setAttribute('content', `${CONFIG.domain}/news.html?slug=${article.slug}`);
    qs('meta[name="twitter:title"]')?.setAttribute('content', article.title);
    qs('meta[name="twitter:description"]')?.setAttribute('content', description);
  }

  function renderArticle(article) {
    const target = qs('[data-news-page]');
    if (!target) return;
    const related = DATA.news.filter(item => item.slug !== article.slug).slice(0, 3);
    target.innerHTML = `
      <div class="article-breadcrumb container" aria-label="Breadcrumb">
        <a href="index.html">Trang chủ</a><span>/</span><a href="index.html#news">Tin tức</a><span>/</span><strong>${article.title}</strong>
      </div>
      <article class="article-page">
        <header class="article-hero">
          <div class="container article-hero__inner">
            <span class="eyebrow">${article.category}</span>
            <h1>${article.title}</h1>
            <div class="article-meta"><time datetime="${article.date}">${formatDate(article.date)}</time><span>BYD Thành Công Cà Mau</span></div>
          </div>
        </header>
        <div class="container article-cover">
          <img src="${article.image}" alt="${article.title}" width="1400" height="850" fetchpriority="high" decoding="async">
        </div>
        <div class="container article-layout">
          <div class="article-body">
            <p class="article-lead">${article.excerpt}</p>
            ${article.content.map((paragraph, index) => `${index === 1 ? '<h2>Thông tin nổi bật</h2>' : ''}<p>${paragraph}</p>`).join('')}
            <div class="article-note">
              <strong>Lưu ý</strong>
              <p>Thông tin sản phẩm, trang bị, giá và chương trình ưu đãi cần được xác nhận theo tài liệu phân phối và thời điểm tư vấn.</p>
            </div>
          </div>
          <aside class="article-sidebar">
            <div class="article-contact-card">
              <span class="eyebrow">Hỗ trợ nhanh</span>
              <h2>Quan tâm xe BYD?</h2>
              <p>Đăng ký để nhận thông tin phiên bản, lịch lái thử và chương trình đang áp dụng.</p>
              <button class="button button--primary button--block" data-open-modal="lead" data-intent="Tư vấn từ bài viết: ${article.title}">Nhận tư vấn</button>
              <a class="button button--outline button--block" href="tel:${CONFIG.hotlineSales}">Gọi ${COMPONENTS.formatPhone(CONFIG.hotlineSales)}</a>
            </div>
          </aside>
        </div>
      </article>
      <section class="section section--gray article-related">
        <div class="container">
          <div class="section-heading">
            <span class="eyebrow">Bài viết khác</span>
            <h2>Tiếp tục khám phá</h2>
          </div>
          <div class="article-related__grid">
            ${related.map(item => `
              <article class="article-related__card">
                <a href="${item.url}" class="article-related__image"><img src="${item.image}" alt="${item.title}" width="560" height="360" loading="lazy"></a>
                <div><time datetime="${item.date}">${formatDate(item.date)}</time><h3><a href="${item.url}">${item.title}</a></h3><p>${item.excerpt}</p></div>
              </article>`).join('')}
          </div>
        </div>
      </section>`;
  }

  function createSchema(article) {
    const schemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.excerpt,
        datePublished: article.date,
        dateModified: article.date,
        image: [`${CONFIG.domain}/${article.image}`],
        author: { '@type': 'Organization', name: CONFIG.siteName },
        publisher: {
          '@type': 'Organization',
          name: CONFIG.siteName,
          logo: { '@type': 'ImageObject', url: `${CONFIG.domain}/assets/images/logo-byd-thanh-cong.webp` }
        },
        mainEntityOfPage: `${CONFIG.domain}/news.html?slug=${article.slug}`
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: CONFIG.domain },
          { '@type': 'ListItem', position: 2, name: 'Tin tức', item: `${CONFIG.domain}/#news` },
          { '@type': 'ListItem', position: 3, name: article.title, item: `${CONFIG.domain}/news.html?slug=${article.slug}` }
        ]
      }
    ];
    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }

  function init() {
    const article = getArticle();
    COMPONENTS.renderSiteShell('news');
    updateSeo(article);
    renderArticle(article);
    APP.initHeader();
    APP.initModals();
    APP.initLeadForms();
    APP.initCalculators();
    APP.initReveal();
    APP.setImageFallbacks();
    createSchema(article);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
