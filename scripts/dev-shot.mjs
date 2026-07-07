// 開發用截圖:J 結果頁(含地圖)與 P 建議頁(含地圖)。
import { chromium } from "playwright";

const OUT = process.env.OUT ?? "/tmp/shots";
const base = "http://localhost:5220";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 420, height: 900 } });

await page.goto(base, { waitUntil: "networkidle" });

// J flow
await page.getByText("J人規劃").click();
await page.getByText("東京・關東近郊").click();
await page.getByText("排出我的行程").click();
await page.waitForTimeout(2500); // 等地圖 tiles
await page.screenshot({ path: `${OUT}/j-map.png` });

// P flow
await page.getByText("←").click();
await page.getByText("P人隨走").click();
await page.getByRole("button", { name: /東京/ }).first().click();
await page.getByText("澀谷車站").click();
await page.waitForTimeout(2500);
await page.screenshot({ path: `${OUT}/p-map.png` });

await browser.close();
console.log("done");
