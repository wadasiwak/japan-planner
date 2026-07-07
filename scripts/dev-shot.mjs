import { chromium } from "playwright";

const OUT = process.env.OUT ?? "/tmp/shots";
const base = "http://localhost:5220";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 420, height: 900 } });

await page.goto(base, { waitUntil: "networkidle" });
await page.screenshot({ path: `${OUT}/1-home.png` });

// J flow
await page.getByText("J人規劃").click();
await page.getByText("東京・關東近郊").click();
await page.getByText("行軍").click();
await page.getByText("排出我的行程").click();
await page.waitForTimeout(300);
await page.screenshot({ path: `${OUT}/2-j-result.png`, fullPage: true });

// P flow
await page.getByText("←").click();
await page.getByText("P人隨走").click();
await page.getByRole("button", { name: /東京/ }).first().click();
await page.getByText("澀谷車站").click();
await page.waitForTimeout(300);
await page.screenshot({ path: `${OUT}/3-p-suggest.png`, fullPage: true });

await browser.close();
console.log("done");
