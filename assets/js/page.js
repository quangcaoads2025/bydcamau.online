'use strict';

(function () {
  function initLanguageTabs() {
    const tabs = Array.from(document.querySelectorAll('[data-language-tab]'));
    const panels = Array.from(document.querySelectorAll('[data-language-panel]'));
    if (!tabs.length || !panels.length) return;

    const activate = language => {
      tabs.forEach(tab => {
        const active = tab.dataset.languageTab === language;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', String(active));
      });
      panels.forEach(panel => {
        const active = panel.dataset.languagePanel === language;
        panel.hidden = !active;
      });
      document.querySelectorAll('[data-lang-vi][data-lang-en]').forEach(element => {
        const localizedText = language === 'en' ? element.dataset.langEn : element.dataset.langVi;
        if (localizedText) element.textContent = localizedText;
      });
      document.documentElement.lang = language === 'en' ? 'en' : 'vi';
    };

    tabs.forEach(tab => tab.addEventListener('click', () => activate(tab.dataset.languageTab)));
    activate('vi');
  }

  function initStaticPage() {
    const page = document.body.dataset.page || 'home';
    window.BYD_COMPONENTS.renderSiteShell(page);
    window.BYD_APP.initHeader();
    window.BYD_APP.initModals();
    window.BYD_APP.initLeadForms();
    window.BYD_APP.initCalculators();
    window.BYD_APP.initReveal();
    window.BYD_APP.setImageFallbacks();
    initLanguageTabs();
  }

  document.addEventListener('DOMContentLoaded', initStaticPage);
})();
