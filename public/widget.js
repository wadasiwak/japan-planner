/*! © 2026 wadasiwak. All rights reserved. */
// 姊妹作導流小工具:在頁尾附上「作者的其他作品」。
// 用法:<script src="https://wadasiwak.github.io/japan-planner/widget.js" data-site="<自己的 id>" defer></script>
// 清單來自 sites.json,加新作品只要改那一個檔,全部站台同步更新。
(function () {
  var script = document.currentScript;
  var current = (script && script.dataset.site) || "";
  fetch("https://wadasiwak.github.io/japan-planner/sites.json")
    .then(function (r) {
      return r.json();
    })
    .then(function (data) {
      var sites = (data.sites || []).filter(function (s) {
        return s.id !== current;
      });
      if (!sites.length) return;
      var wrap = document.createElement("nav");
      wrap.setAttribute("aria-label", "More sites by the author");
      wrap.style.cssText =
        "max-width:640px;margin:8px auto 0;padding:14px 16px 30px;text-align:center;" +
        "font-size:12.5px;line-height:2.1;opacity:.9;font-family:inherit;";
      var label = document.createElement("div");
      label.textContent = data.label || "🧰 更多作品";
      label.style.cssText =
        "margin-bottom:6px;opacity:.65;font-weight:700;letter-spacing:.05em;";
      wrap.appendChild(label);
      sites.forEach(function (s) {
        var a = document.createElement("a");
        a.href = s.url;
        a.title = s.desc || "";
        a.textContent = s.emoji + " " + s.name;
        a.style.cssText =
          "display:inline-block;margin:2px 4px;padding:2px 12px;border-radius:99px;" +
          "border:1px solid rgba(128,136,150,.4);color:inherit;text-decoration:none;" +
          "opacity:.85;white-space:nowrap;";
        wrap.appendChild(a);
      });
      document.body.appendChild(wrap);
    })
    .catch(function () {
      /* 清單抓不到就安靜地不顯示 */
    });
})();
