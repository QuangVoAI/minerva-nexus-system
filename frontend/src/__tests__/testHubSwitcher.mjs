import { chromium } from 'playwright';

async function runHubSwitcherTest() {
  console.log("====================================================");
  console.log("   KIỂM THỬ CHỨC NĂNG CHUYỂN ĐỔI HUB (HUB SWITCHER)  ");
  console.log("====================================================\n");

  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({ viewport: { width: 1600, height: 1000 } });
  const page = await context.newPage();

  try {
    // 1. Vào #dashboard
    console.log("[1/4] Kiểm tra Hub mặc định trên Bàn điều hành (#dashboard)...");
    await page.goto("http://localhost:8080/react/#dashboard", { waitUntil: "networkidle" });
    await page.waitForTimeout(500);

    const hubButton = page.locator('button[title*="đổi điểm vận hành"]');
    await hubButton.waitFor({ state: "visible" });
    const currentText = await hubButton.innerText();
    console.log(`  ✓ Điểm vận hành ban đầu: "${currentText.trim()}"`);

    // 2. Mở Dropdown Hub Switcher
    console.log("\n[2/4] Nhấn vào Điểm vận hành để mở danh sách Hub...");
    await hubButton.click();
    await page.waitForTimeout(300);

    const dropdownHeader = page.locator('text=CHỌN ĐIỂM VẬN HÀNH');
    await dropdownHeader.waitFor({ state: "visible" });
    console.log("  ✓ Dropdown mở thành công, hiển thị danh mục các Hub");

    // 3. Chọn Hub Cầu Giấy
    console.log("\n[3/4] Chọn Hub Cầu Giấy từ danh sách...");
    const cauGiayOption = page.locator('button:has-text("Hub Cầu Giấy")');
    await cauGiayOption.click();
    await page.waitForTimeout(500);

    const updatedText = await hubButton.innerText();
    console.log(`  ✓ Điểm vận hành sau khi chọn: "${updatedText.trim()}"`);
    if (!updatedText.includes("Hub Cầu Giấy")) {
      throw new Error("Lỗi: Hub chưa cập nhật sang Hub Cầu Giấy!");
    }

    // 4. Kiểm tra màn hình tài xế (#driver) cũng đồng bộ Hub Cầu Giấy
    console.log("\n[4/4] Điều hướng sang #driver để kiểm tra đồng bộ Hub...");
    await page.goto("http://localhost:8080/react/#driver", { waitUntil: "networkidle" });
    await page.waitForTimeout(500);

    const driverHubText = await page.locator('[data-name="Điểm nhận"] p').first().innerText();
    console.log(`  ✓ Màn hình tài xế hiển thị điểm nhận: "${driverHubText.trim()}"`);
    if (!driverHubText.includes("Hub Cầu Giấy")) {
      throw new Error("Lỗi: Màn hình tài xế không đồng bộ sang Hub Cầu Giấy!");
    }

    console.log("\n====================================================");
    console.log("  CHỨC NĂNG CHUYỂN ĐỔI HUB HOẠT ĐỘNG HOÀN TOÀN TỐT!   ");
    console.log("====================================================");
  } finally {
    await browser.close();
  }
}

runHubSwitcherTest().catch((err) => {
  console.error("Test thất bại:", err);
  process.exit(1);
});
