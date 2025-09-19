# ChatGPT Simple Bookmarklets

To install, drag one of the buttons from the hosted HTML page (via GitHub Pages) to your bookmarks bar, or right-click → “Bookmark this link.”
Once saved, clicking the bookmark on the target site will remove the unwanted `<ul>` and keep it gone.

---

## Manual Install (Copy–Paste)

Create a new bookmark in your browser and paste one of the following into the **URL/location** field.

### ChatGPT Simple

```javascript
javascript:(function(){const removeUl=()=>{document.querySelectorAll('ul.w-full.flex-col.p-2\\.5.max-sm\\:px-0.flex').forEach(el=>el.remove());};removeUl();new MutationObserver(removeUl).observe(document.body,{childList:true,subtree:true});})();
```

### ChatGPT Modified

```javascript
javascript:(function(){const removeUl=()=>{document.querySelectorAll('ul.w-full.flex-col').forEach(el=>el.remove());};removeUl();new MutationObserver(removeUl).observe(document.body,{childList:true,subtree:true});})();
```

---

## Which One to Use?

* **ChatGPT Simple**: Only removes `<ul>` elements with the full class list.
* **ChatGPT Modified**: Removes any `<ul>` with `w-full flex-col` (more robust, but broader).

---
