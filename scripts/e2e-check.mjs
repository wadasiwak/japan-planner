// E2E 冒煙測試:起 preview server,walk 過 J 人與 P 人兩條完整流程。
// 用法:npm run build && npm run e2e
import { spawn } from "node:child_process";
import { chromium } from "playwright";

const PORT = 5220;
const base = `http://localhost:${PORT}`;

const server = spawn("npx", ["vite", "preview", "--port", String(PORT)], {
  stdio: "ignore",
  detached: true,
});
const kill = () => {
  try {
    process.kill(-server.pid, "SIGTERM");
  } catch {}
};
process.on("exit", kill);

// 等 server 起來
for (let i = 0; i < 40; i++) {
  try {
    const res = await fetch(base);
    if (res.ok) break;
  } catch {}
  await new Promise((r) => setTimeout(r, 250));
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 420, height: 900 } });
let failed = 0;

const check = (name, cond) => {
  console.log(`${cond ? "✅" : "❌"} ${name}`);
  if (!cond) failed++;
};

try {
  await page.goto(base, { waitUntil: "networkidle" });
  check("首頁載入", (await page.getByText("J人規劃").count()) > 0);

  // --- 全站搜尋 + ⭐收藏 ---
  await page.locator(".search-input").fill("淺草寺");
  await page.waitForTimeout(300);
  check("搜尋:找到淺草寺", (await page.locator(".poi-card").count()) >= 1);
  await page.locator(".poi-card").first().getByText("收藏").click();
  check("搜尋:加入收藏", (await page.getByText("已收藏").count()) >= 1);
  await page.locator(".search-input").fill("");
  await page.waitForTimeout(200);

  // --- J 人流程:選第一個地區、5 天、行軍 ---
  await page.getByText("J人規劃").click();
  const regionBtns = page.locator(".choice-grid button");
  await regionBtns.first().click();
  for (let i = 0; i < 1; i++) await page.getByRole("button", { name: "＋" }).click(); // 4→5 天
  await page.getByText("行軍").click();
  await page.getByText("排出我的行程").click();
  await page.waitForTimeout(500);

  const dayTabs = await page.locator(".day-tabs button").count();
  check(`J:行程排出(${dayTabs} 天 tab)`, dayTabs >= 1);
  const poiCards = await page.locator(".poi-card").count();
  check(`J:Day 1 有內容(${poiCards} 張卡)`, poiCards >= 3);

  // 重骰要出不同結果(至少不炸)
  await page.getByText("重骰").click();
  await page.waitForTimeout(300);
  check("J:重骰後仍有內容", (await page.locator(".poi-card").count()) >= 1);

  // 存檔
  await page.getByText("存起來").click();
  check("J:存檔成功", (await page.getByText("已存").count()) > 0);

  // .ics 行事曆匯出
  const dlPromise = page.waitForEvent("download", { timeout: 10000 });
  await page.getByText("行事曆").click();
  const dl = await dlPromise;
  check("J:.ics 匯出", dl.suggestedFilename() === "japan-planner.ics");

  // 進行中狀態持久化:reload 後回到行程畫面、行程還原
  await page.reload({ waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  check(
    "持久化:reload 後回到行程",
    (await page.locator(".day-tabs button").count()) >= 1,
  );

  // --- 行程手動編輯 ---
  // 沒設出發日:不該有天氣列
  check("天氣:未設出發日不顯示", (await page.locator(".wx-chip").count()) === 0);

  const dayNames = () =>
    page.locator(".timeline .poi-card .poi-name").allTextContents();

  // 1) 當日內下移:找兩張相鄰的 poi 卡(中間沒有移動/自由覓食列)交換
  const adjIdx = await page.evaluate(() => {
    const slots = [...document.querySelectorAll(".timeline > .slot")];
    for (let i = 0; i + 1 < slots.length; i++) {
      if (slots[i].querySelector(".poi-card") && slots[i + 1].querySelector(".poi-card"))
        return i;
    }
    return -1;
  });
  check("編輯:找得到相鄰兩張 poi 卡", adjIdx >= 0);
  const beforeNames = await dayNames();
  await page
    .locator(".timeline > .slot")
    .nth(adjIdx)
    .locator('.slot-actions button[title*="下移"]')
    .click();
  await page.waitForTimeout(300);
  const afterNames = await dayNames();
  const swapAt = beforeNames.findIndex((n, i) => n !== afterNames[i]);
  check(
    "編輯:下移改變順序",
    swapAt >= 0 &&
      beforeNames[swapAt] === afterNames[swapAt + 1] &&
      beforeNames[swapAt + 1] === afterNames[swapAt],
  );
  check("編輯:已手動調整標示出現", (await page.getByText("已手動調整").count()) >= 1);

  // 2) 跨天移動:第一張 poi 卡移到 Day 2,去 Day 2 找得到
  const movedName = await page
    .locator(".timeline .poi-card .poi-name")
    .first()
    .textContent();
  await page.locator(".slot-move-select").first().selectOption({ label: "Day 2" });
  await page.waitForTimeout(300);
  check(
    "編輯:跨天移動後原天已不見",
    !(await dayNames()).includes(movedName),
  );
  await page.locator(".day-tabs button").nth(1).click();
  await page.waitForTimeout(300);
  check("編輯:跨天移動出現在 Day 2", (await dayNames()).includes(movedName));

  // 3) 手動加點:搜一個別的地區的點加進 Day 2(北海道點,不會撞關東行程)
  await page.getByText("加入景點").click();
  await page.locator(".search-input").fill("小樽運河");
  await page.waitForTimeout(400);
  await page.getByText("加到 Day 2").first().click();
  await page.waitForTimeout(300);
  check(
    "編輯:手動加點插入 Day 2",
    (await dayNames()).some((n) => n.includes("小樽運河")),
  );

  // 4) 手調過的天重骰前要確認;確認後編輯標示清掉
  let rerollConfirmed = false;
  page.once("dialog", (d) => {
    rerollConfirmed = true;
    d.accept();
  });
  await page.getByText("重骰").click();
  await page.waitForTimeout(500);
  check("編輯:重骰前跳確認", rerollConfirmed);
  check(
    "編輯:重骰後編輯標示清除",
    (await page.getByText("已手動調整").count()) === 0,
  );
  check("編輯:重骰後仍有內容", (await page.locator(".poi-card").count()) >= 1);

  // --- P 人流程 ---
  await page.getByText("←").click();
  await page.getByText("P人隨走").click();
  await page.locator(".choice-grid button").first().click(); // 第一個城市
  await page.waitForTimeout(200);
  // 城市選定後收合,剩下唯一的 choice-grid 就是 hub 清單
  await page.locator(".choice-grid").last().locator("button").first().click();
  await page.waitForTimeout(500);

  const sugCards = await page.locator(".poi-card").count();
  check(`P:有建議卡(${sugCards} 張)`, sugCards >= 2);

  const firstName = await page.locator(".poi-card .poi-name").first().textContent();
  await page.getByText("換一批").click();
  await page.waitForTimeout(300);
  const newFirstName = await page.locator(".poi-card .poi-name").first().textContent();
  check(`P:換一批出新內容(${firstName} → ${newFirstName})`, firstName !== newFirstName);

  // 打卡進足跡
  await page.locator(".poi-card button").first().click();
  await page.getByText("←").click();
  await page.getByText("我的收藏").click();
  check("收藏:有存檔行程", (await page.getByText("打開").count()) >= 1);
  check(
    "收藏:打卡足跡出現",
    (await page.locator(".poi-card").count()) >= 1,
  );
  check("收藏:wishlist 清單出現", (await page.getByText("收藏清單").count()) >= 1);
  check("收藏:wishlist 有星點", (await page.getByText("⭐ 已收藏").count()) >= 1);

  // 圖鑑瀏覽器:選第一個地區,列出 POI
  await page.getByText("景點圖鑑").scrollIntoViewIfNeeded();
  const beforeBrowse = await page.locator(".poi-card").count();
  const browseGrid = page.locator(".choice-grid").first();
  await browseGrid.locator("button").first().click();
  await page.waitForTimeout(300);
  check(
    "圖鑑:選地區後列出 POI",
    (await page.locator(".poi-card").count()) > beforeBrowse,
  );

  // --- PWA:manifest + SW 註冊 + 離線可用 ---
  const manifestOk = await page.evaluate(async () => {
    const link = document.querySelector('link[rel="manifest"]');
    if (!link) return false;
    const m = await fetch(link.href).then((r) => r.json());
    return m.display === "standalone" && m.icons.length >= 3 && m.start_url === "./";
  });
  check("PWA:manifest 存在且合規", manifestOk);

  const swActive = await page.evaluate(async () => {
    if (!("serviceWorker" in navigator)) return false;
    const reg = await navigator.serviceWorker.ready;
    return !!reg.active;
  });
  check("PWA:service worker 已啟用", swActive);

  await page.getByText("←").click(); // 回首頁再斷網,reload 才落在首頁
  await page.context().setOffline(true);
  await page.reload({ waitUntil: "load" });
  await page.waitForTimeout(500);
  check("PWA:離線 reload 後 app 可開", (await page.getByText("J人規劃").count()) > 0);

  // 離線切英文:lazy 字典 chunk 已 precache
  await page.getByRole("button", { name: "EN" }).click();
  await page.waitForTimeout(800);
  check(
    "PWA:離線切英文(lazy 字典)",
    (await page.getByText("J-mode Planner").count()) > 0,
  );
  await page.getByRole("button", { name: "中", exact: true }).click();
  await page.waitForTimeout(400);

  // 離線開存檔行程 → 行程可看、地圖顯示降級文案
  await page.getByText("我的收藏").click();
  await page.getByText("打開").first().click();
  await page.waitForTimeout(800);
  check(
    "PWA:離線開存檔行程",
    (await page.locator(".day-tabs button").count()) >= 1,
  );
  check(
    "PWA:離線地圖降級文案",
    (await page.getByText("地圖暫不可用").count()) >= 1,
  );
  await page.context().setOffline(false);

  // --- 天氣預報(Open-Meteo 全程 mock,不打真網路;開新 context 擋 SW 讓 route 生效) ---
  const fmtD = (d) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
      d.getDate(),
    ).padStart(2, "0")}`;
  const wxCtx = await browser.newContext({
    viewport: { width: 420, height: 900 },
    serviceWorkers: "block",
  });
  const wp = await wxCtx.newPage();
  let wxCalls = 0;
  await wp.route("**/api.open-meteo.com/**", (route) => {
    wxCalls++;
    const u = new URL(route.request().url());
    const end = u.searchParams.get("end_date");
    const dates = [];
    const cur = new Date(`${u.searchParams.get("start_date")}T00:00:00`);
    for (let g = 0; g < 20; g++) {
      dates.push(fmtD(cur));
      if (fmtD(cur) === end) break;
      cur.setDate(cur.getDate() + 1);
    }
    route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({
        daily: {
          time: dates,
          weather_code: dates.map(() => 61), // 雨
          temperature_2m_max: dates.map(() => 26.4),
          temperature_2m_min: dates.map(() => 18.2),
          precipitation_probability_max: dates.map(() => 80),
        },
      }),
    });
  });
  await wp.goto(base, { waitUntil: "networkidle" });
  await wp.getByText("J人規劃").click();
  await wp.locator(".choice-grid button").first().click();
  await wp.locator('input[type="date"]').fill(fmtD(new Date())); // 今天出發 → 16 天內
  await wp.getByText("排出我的行程").click();
  await wp.waitForTimeout(800);
  check("天氣:mock API 有被打到", wxCalls > 0);
  const chipText = (await wp.locator(".wx-chip").first().textContent()) ?? "";
  check(
    `天氣:日標題顯示 emoji+高低溫(${chipText.trim()})`,
    (await wp.locator(".wx-chip").count()) >= 1 && /26°\/18°/.test(chipText),
  );
  check("天氣:雨天提示出現", (await wp.getByText("可能下雨").count()) >= 1);

  // 同座標同日快取:reload 後照樣顯示,且不再打 API(sessionStorage 命中)
  const callsBefore = wxCalls;
  await wp.reload({ waitUntil: "networkidle" });
  await wp.waitForTimeout(600);
  check(
    "天氣:sessionStorage 快取生效(reload 不重打)",
    wxCalls === callsBefore && (await wp.locator(".wx-chip").count()) >= 1,
  );

  // fetch 失敗:整段安靜隱藏、行程不破版
  await wp.unroute("**/api.open-meteo.com/**");
  await wp.route("**/api.open-meteo.com/**", (route) => route.abort());
  await wp.evaluate(() => sessionStorage.clear());
  await wp.reload({ waitUntil: "networkidle" });
  await wp.waitForTimeout(600);
  check(
    "天氣:抓不到時安靜隱藏不破版",
    (await wp.locator(".day-tabs button").count()) >= 1 &&
      (await wp.locator(".wx-chip").count()) === 0,
  );
  await wxCtx.close();
} catch (e) {
  console.error("❌ e2e 例外:", e.message);
  failed++;
} finally {
  await browser.close();
  kill();
}

if (failed) {
  console.error(`\n❌ ${failed} 項失敗`);
  process.exit(1);
}
console.log("\n✅ e2e 全過");
