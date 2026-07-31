'use strict';
(() => {
  const path = location.pathname;
  if (/\/index\.html$/i.test(path)) {
    location.replace('/' + location.search + location.hash);
    return;
  }
  const target = document.body?.dataset.redirectTarget;
  if (target) location.replace(target + location.search + location.hash);
})();
