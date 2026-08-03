'use strict';
(function () {
  if (window.trustedTypes) {
    try {
      window.trustedTypes.createPolicy('default', {
        createHTML: value => String(value),
        createScript: value => String(value),
        createScriptURL: value => String(value)
      });
    } catch (_) {
      /* The default policy may already exist when a browser extension injects one. */
    }
  }
  document.documentElement.classList.add('js');
})();
