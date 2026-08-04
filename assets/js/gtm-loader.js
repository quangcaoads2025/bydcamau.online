'use strict';

(() => {
  const containerId = 'GTM-5NWJC98F';

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
    `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(containerId)}`;

  script.onerror = () => {
    console.warn('[BYD] Google Tag Manager could not be loaded.');
  };

  document.head.appendChild(script);
})();
