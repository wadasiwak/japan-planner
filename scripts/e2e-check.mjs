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
