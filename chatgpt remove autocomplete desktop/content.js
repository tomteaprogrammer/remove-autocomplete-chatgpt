// content.js

// selectors
const AUTOCOMPLETE_SEL = 'ul.w-full.flex-col.p-2\\.5.max-sm\\:px-0.flex';
const HERO_CONTAINER_SEL =
  '#thread > div > div.relative.basis-auto.flex-col.shrink.flex.flex-col.justify-end.max-sm\\:grow.max-sm\\:justify-center.sm\\:min-h-\\[42svh\\] > div';

// inject CSS immediately to prevent flash
(function injectCSS() {
  const css = `
    ${AUTOCOMPLETE_SEL},
    ${HERO_CONTAINER_SEL} {
      display: none !important;
    }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  // put in head or documentElement
  (document.head || document.documentElement).appendChild(style);
})();

// JS removal in case DOM changes
function removeThings() {
  document.querySelectorAll(AUTOCOMPLETE_SEL).forEach(el => el.remove());
  document.querySelectorAll(HERO_CONTAINER_SEL).forEach(el => el.remove());
}

// initial (in case some nodes are already present)
removeThings();

// observe for re-renders
new MutationObserver(removeThings).observe(document.documentElement, {
  childList: true,
  subtree: true
});
