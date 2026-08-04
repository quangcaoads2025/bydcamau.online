'use strict';

(function () {
  const ID = 'GTM-5NWJC98F';

  if (window.__bydGtmLoaded) return;
  window.__bydGtmLoaded = true;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'gtm.start': Date.now(),
    event: 'gtm.js'
  });

  const script = document.createElement('script');
  script.async = true;
  script.src =
    'https://www.googletagmanager.com/gtm.js?id=' +
    encodeURIComponent(ID);

  script.onerror = function () {
    console.warn('[BYD] Không tải được Google Tag Manager.');
  };

  document.head.appendChild(script);
})();
