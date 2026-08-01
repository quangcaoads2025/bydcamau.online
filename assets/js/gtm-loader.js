'use strict';
(function () {
  const ID = 'GTM-5NWJC98F';
  let loaded = false;
  function loadGtm() {
    if (loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({'gtm.start': Date.now(), event: 'gtm.js'});
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtm.js?id=' + encodeURIComponent(ID);
    document.head.appendChild(script);
    cleanup();
  }
  function cleanup() {
    ['pointerdown','keydown','touchstart','scroll'].forEach(type => window.removeEventListener(type, loadGtm));
  }
  ['pointerdown','keydown','touchstart','scroll'].forEach(type => window.addEventListener(type, loadGtm, {once:true, passive:true}));
  window.setTimeout(loadGtm, 5000);
})();
