
'use strict';
(function(){document.addEventListener('DOMContentLoaded',()=>{const C=window.BYD_COMPONENTS,A=window.BYD_APP;C.renderSiteShell('news');A.initHeader();A.initModals();A.initLeadForms();A.initCalculators();A.initReveal();A.setImageFallbacks();document.querySelectorAll('.article-toc a').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}}));});})();
