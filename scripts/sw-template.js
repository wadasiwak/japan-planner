// Service worker 模板:vite.config.ts 的 pwaServiceWorker plugin 在 build 時
// 把 VERSION/PRECACHE 兩個佔位符換成該次 build 的內容雜湊與檔案清單,寫到 dist/sw.js。
// 策略:app shell 全部 precache(含 lazy 載入的 en/ja 字典與 DayMap chunk),
// 版本更新走 SKIP_WAITING 訊息(前端 toast 觸發)。
// 跨網域請求(OpenFreeMap 地圖磚、GoatCounter)一律不攔不快取——地圖磚體積會失控。
const CACHE = "jp-__VERSION__";
const PRECACHE = __PRECACHE__;

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    (async () => {
      for (const key of await caches.keys()) {
        if (key !== CACHE) await caches.delete(key);
      }
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("message", (e) => {
  if (e.data && e.data.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  if (new URL(req.url).origin !== self.location.origin) return;
  // ignoreVary:伺服器常對 assets 回 Vary(如 vite preview/CDN 的 Vary: Origin),
  // module script 與 addAll 存入時的請求標頭不同,不忽略會 cache miss、離線就 ERR_FAILED
  const OPTS = { ignoreSearch: true, ignoreVary: true };
  e.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      // SPA:所有導航都回 app shell(離線 reload 也開得起來)
      if (req.mode === "navigate") {
        const shell = await cache.match("./index.html", OPTS);
        if (shell) return shell;
      }
      const hit = await cache.match(req, OPTS);
      return hit ?? fetch(req);
    })(),
  );
});
