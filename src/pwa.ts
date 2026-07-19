// PWA:service worker 註冊與「有新版本」通知。
// - 只在 production build 註冊(dev 沒有 sw.js)。
// - dev 模式主動註銷+清 cache:preview 和 dev server 共用 5220,
//   preview 留下的 SW 會劫持 dev server 送出舊快取。
let waitingSW: ServiceWorker | null = null;
let onReady: (() => void) | null = null;

/** App 掛 callback:新版 SW 裝好待命時通知(掛的當下已有待命版也立即觸發)。 */
export function onUpdateReady(fn: () => void): void {
  onReady = fn;
  if (waitingSW) fn();
}

/** 使用者按下更新 toast:叫待命的 SW 接手,controllerchange 後整頁 reload。 */
export function applyUpdate(): void {
  waitingSW?.postMessage({ type: "SKIP_WAITING" });
}

export function setupPWA(): void {
  if (!("serviceWorker" in navigator)) return;

  if (import.meta.env.DEV) {
    navigator.serviceWorker
      .getRegistrations()
      .then((regs) => regs.forEach((r) => r.unregister()));
    if ("caches" in window)
      caches.keys().then((keys) => keys.forEach((k) => caches.delete(k)));
    return;
  }

  let refreshing = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });

  const notify = (sw: ServiceWorker) => {
    waitingSW = sw;
    onReady?.();
  };

  // 相對路徑:GH Pages 子路徑下解析成 /japan-planner/sw.js
  navigator.serviceWorker
    .register("sw.js")
    .then((reg) => {
      // 首次載入就發現有待命新版(上次沒按更新就關掉)
      if (reg.waiting && navigator.serviceWorker.controller) notify(reg.waiting);
      reg.addEventListener("updatefound", () => {
        const sw = reg.installing;
        if (!sw) return;
        sw.addEventListener("statechange", () => {
          // controller 存在才算「更新」;首次安裝不用 toast
          if (sw.state === "installed" && navigator.serviceWorker.controller)
            notify(sw);
        });
      });
    })
    .catch(() => {
      /* SW 註冊失敗不影響線上使用 */
    });
}
