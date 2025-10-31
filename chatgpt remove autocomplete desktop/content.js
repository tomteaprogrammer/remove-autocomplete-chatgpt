// content.js

// autocomplete list
const AUTOCOMPLETE_SEL = 'ul.w-full.flex-col.p-2\\.5.max-sm\\:px-0.flex';

// the exact line you saw
const TARGET_TEXT_1 = 'What’s on the agenda today?';
const TARGET_TEXT_2 = "What's on the agenda today?"; // fallback with straight quote

(function injectCSS() {
  const style = document.createElement('style');
  style.textContent = `
    ${AUTOCOMPLETE_SEL} {
      display: none !important;
    }
    .px-1.text-pretty.whitespace-pre-wrap {
      /* we will filter in JS, this stops the flash */
      display: none !important;
    }
  `;
  (document.head || document.documentElement).appendChild(style);
})();

function hideStuff() {
  // remove autocomplete
  document.querySelectorAll(AUTOCOMPLETE_SEL).forEach(el => el.remove());

  // remove only the matching prompt text
  document.querySelectorAll('.px-1.text-pretty.whitespace-pre-wrap').forEach(el => {
    const t = (el.textContent || '').trim();
    if (t === TARGET_TEXT_1 || t === TARGET_TEXT_2) {
      el.remove();
    }
  });
}

hideStuff();

new MutationObserver(hideStuff).observe(document.documentElement, {
  childList: true,
  subtree: true
});
