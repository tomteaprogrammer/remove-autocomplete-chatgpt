<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>ChatGPT Simple Bookmarklets</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body style="font-family: sans-serif; padding: 20px; line-height: 1.5;">
  <h2>ChatGPT Simple Bookmarklets</h2>

  <h3>How to install</h3>
  <p>
    Drag a button below to your bookmarks bar, or right-click a button and choose “Bookmark this link.”
    After it is saved, click the bookmark on the target site to remove the suggestion list and keep it removed.
  </p>

  <div style="margin: 12px 0;">
    <!-- ChatGPT Simple (exact selector) -->
    <a href="javascript:(function(){const removeUl=()=>{document.querySelectorAll('ul.w-full.flex-col.p-2\\\.5.max-sm\\\:px-0.flex').forEach(el=>el.remove());};removeUl();new MutationObserver(removeUl).observe(document.body,{childList:true,subtree:true});})();"
       style="display:inline-block;margin:8px;padding:10px 16px;background:#007bff;color:#fff;border-radius:6px;text-decoration:none;">
       ChatGPT Simple
    </a>

    <!-- ChatGPT Modified (looser selector) -->
    <a href="javascript:(function(){const removeUl=()=>{document.querySelectorAll('ul.w-full.flex-col').forEach(el=>el.remove());};removeUl();new MutationObserver(removeUl).observe(document.body,{childList:true,subtree:true});})();"
       style="display:inline-block;margin:8px;padding:10px 16px;background:#28a745;color:#fff;border-radius:6px;text-decoration:none;">
       ChatGPT Modified
    </a>
  </div>

  <h3>Which button to use</h3>
  <p>
    <strong>ChatGPT Simple</strong>: Use this first. It targets the exact list.<br>
    <strong>ChatGPT Modified</strong>: Use this if the site changes class names and the first button stops working.
  </p>

  <details style="margin-top: 16px;">
    <summary><strong>Technical details</strong></summary>
    <p>
      <strong>ChatGPT Simple</strong> selector:
      <code>ul.w-full.flex-col.p-2\\.5.max-sm\\:px-0.flex</code>.
      Dots and colons are escaped for valid CSS selection in JS.
    </p>
    <p>
      <strong>ChatGPT Modified</strong> selector:
      <code>ul.w-full.flex-col</code>. More tolerant, may match other lists using utility classes.
    </p>
    <p>
      Both add a <code>MutationObserver</code> to keep removing matches while the page is open.
      Re-run after a full page reload, or use a userscript manager if you want it fully automatic.
    </p>
  </details>
</body>
</html>
