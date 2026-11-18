import { chromium } from "playwright";

async function testTrackingUI() {
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 800 } });

  try {
    console.log("Navigating to #tracking...");
    await page.goto("http://localhost:8080/react/#tracking", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(600);

    const input = page.locator('input[placeholder*="MNX"]').first();
    await input.fill("MNX000001");
    const searchBtn = page.locator('button:has-text("Tra cứu")').first();
    await searchBtn.click();
    await page.waitForTimeout(600);

    const bodyText = await page.textContent("body");
    console.log("Search result includes 'Mã vận đơn':", bodyText.includes("Mã vận đơn"));
    console.log("Search result includes 'MNX000001':", bodyText.includes("MNX000001"));
    console.log("Search result includes 'Trạng thái':", bodyText.includes("Trạng thái"));

    if (!bodyText.includes("MNX000001")) {
      throw new Error("Tracking UI did not display result!");
    }
    console.log("Tracking UI successfully rendered!");
  } finally {
    await browser.close();
  }
}

testTrackingUI();
