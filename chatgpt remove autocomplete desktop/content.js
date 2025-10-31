// content.js

// autocomplete list
const AUTOCOMPLETE_SEL = 'ul.w-full.flex-col.p-2\\.5.max-sm\\:px-0.flex';

// hero text (just the text div, not the whole container)
const HERO_TEXT_SEL =
  '#thread > div > div.relative.basis-auto.flex-col.shrink.flex.flex-col.justify-end.max-sm\\:grow.max-sm\\:justify-center.sm\\:min-h-\\[42svh\\] > div > div.mb-7.hidden.text-center.sm\\:block';

// inject css early
(function injectCSS() {
  const style = document.createElement('style');
  style.textContent = `
    ${AUTOCOMPLETE_SEL},
    ${HERO_TEXT_SEL} {
      display: none !important;
    }
  `;
  (document.head || document.documentElement).appendChild(style);
})();

// fallback JS cleanup
function hideStuff() {
  document.querySelectorAll(AUTOCOMPLETE_SEL).forEach(el => el.remove());
  document.querySelectorAll(HERO_TEXT_SEL).forEach(el => el.remove());
}

hideStuff();

new MutationObserver(hideStuff).observe(document.documentElement, {
  childList: true,
  subtree: true
});
