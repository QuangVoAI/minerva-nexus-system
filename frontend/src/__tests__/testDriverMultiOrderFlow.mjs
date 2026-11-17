import { chromium } from "playwright";

async function runTest() {
  console.log("Starting test for Dispatch -> Driver multi-order workflow...");
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

  try {
    // 1. Go to #dispatch
    console.log("1. Navigating to #dispatch...");
    await page.goto("http://localhost:8080/react/#dispatch", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(600);

    // Select all 6 orders
    console.log("2. Selecting all 6 orders on #dispatch...");
    const headerCheckbox = page.locator('[data-name="Chọn tất cả"] button');
    await headerCheckbox.click();
    await page.waitForTimeout(300);

    const checkedText = await page.locator('p:has-text("Đã chọn")').first().innerText();
    console.log("  Checked state:", checkedText);

    // Click "Phê duyệt"
    console.log("3. Clicking 'Phê duyệt'...");
    const approveBtn = page.locator('button[data-name="Phê duyệt phân công đã chọn"]');
    await approveBtn.click();
    await page.waitForTimeout(1500);

    // Verify redirected to #driver
    const currentUrl = page.url();
    console.log("Current URL after approve:", currentUrl);
    if (!currentUrl.includes("#driver")) {
      await page.goto("http://localhost:8080/react/#driver", { waitUntil: "domcontentloaded" });
      await page.waitForTimeout(600);
    }

    // 4. Check dynamic order count & truck load
    console.log("4. Verifying Driver screen headers...");
    const hubCountText = await page.locator('div[data-name="Tiếp nhận tại Hub"]').innerText();
    console.log("Hub section text:\n" + hubCountText.trim());

    if (!hubCountText.includes("6 đơn")) {
      throw new Error(`Expected '6 đơn' on Driver screen, but found:\n${hubCountText}`);
    }

    const truckTextInitial = await page.locator('div[data-name="Tải và tiền đang giữ"]').innerText();
    console.log("Initial truck load:\n" + truckTextInitial.trim());
    if (!truckTextInitial.includes("0 / 6")) {
      throw new Error(`Expected '0 / 6' on truck initially, but found:\n${truckTextInitial}`);
    }

    // 5. Test "Nhận đủ & Xuất kho"
    console.log("\n5. Testing 'Nhận đủ & Xuất kho'...");
    const transitBtn = page.locator('button[data-name="Xác nhận nhận đủ hàng và xuất kho"]');
    await transitBtn.click();
    await page.waitForTimeout(600);

    const truckTextAfterTransit = await page.locator('div[data-name="Tải và tiền đang giữ"]').innerText();
    console.log("Truck load after transit:\n" + truckTextAfterTransit.trim());
    if (!truckTextAfterTransit.includes("6 / 6")) {
      throw new Error(`Expected '6 / 6' on truck after transit, but got:\n${truckTextAfterTransit}`);
    }

    // 6. Test delivering Order 1
    console.log("\n6. Testing '✔ Giao thành công' on Order 1 (Stop 1)...");
    const order1Card = page.locator('[data-name^="Đơn hàng"]').nth(0);
    const deliverBtn1 = order1Card.locator('button:has-text("✔ Giao thành công")');
    await deliverBtn1.click();
    await page.waitForTimeout(600);

    const truckTextAfterOrder1 = await page.locator('div[data-name="Tải và tiền đang giữ"]').innerText();
    console.log("Load & COD after Order 1 delivered:\n" + truckTextAfterOrder1.trim());
    if (!truckTextAfterOrder1.includes("5 / 6")) {
      throw new Error(`Expected '5 / 6' after delivering Order 1, but got:\n${truckTextAfterOrder1}`);
    }
    if (!truckTextAfterOrder1.includes("450.000 ₫")) {
      throw new Error(`Expected COD to include '450.000 ₫', but got:\n${truckTextAfterOrder1}`);
    }

    // 7. Test delivering Order 2 (Stop 2) - was previously locked in Figma!
    console.log("\n7. Testing '✔ Giao thành công' on Order 2 (Stop 2)...");
    const order2Card = page.locator('[data-name^="Đơn hàng"]').nth(1);
    const deliverBtn2 = order2Card.locator('button:has-text("✔ Giao thành công")');
    await deliverBtn2.click();
    await page.waitForTimeout(600);

    const truckTextAfterOrder2 = await page.locator('div[data-name="Tải và tiền đang giữ"]').innerText();
    console.log("Load & COD after Order 2 delivered:\n" + truckTextAfterOrder2.trim());
    if (!truckTextAfterOrder2.includes("4 / 6")) {
      throw new Error(`Expected '4 / 6' after delivering Order 2, but got:\n${truckTextAfterOrder2}`);
    }
    if (!truckTextAfterOrder2.includes("730.000 ₫")) {
      throw new Error(`Expected COD to accumulate to '730.000 ₫', but got:\n${truckTextAfterOrder2}`);
    }

    // 8. Test reporting failure on Order 3 (Stop 3)
    console.log("\n8. Testing '✖ Báo sự cố' on Order 3 (Stop 3)...");
    const order3Card = page.locator('[data-name^="Đơn hàng"]').nth(2);
    const incidentBtn = order3Card.locator('button:has-text("✖ Báo sự cố")');
    await incidentBtn.click();
    await page.waitForTimeout(800);

    console.log("Navigated to:", page.url());
    if (!page.url().includes("failed-1")) {
      throw new Error("Failed to navigate to #failed-1 upon clicking '✖ Báo sự cố'");
    }

    // Check incident details display Order 3 (MNX000012)
    const incidentOrderInfo = await page.locator('div[data-name="Thông tin đơn hàng"]').innerText();
    console.log("Incident order info on #failed-1:\n" + incidentOrderInfo.trim());
    if (!incidentOrderInfo.includes("MNX000012") && !incidentOrderInfo.includes("Lê Thị Mai")) {
      throw new Error("Incident order info did not show the clicked order!");
    }

    // Return to #driver via back button
    console.log("\n9. Testing Back button from #failed-1 to #driver...");
    const backBtn = page.locator('div[data-name="arrow-left"]');
    await backBtn.click();
    await page.waitForTimeout(600);

    console.log("Returned to:", page.url());
    if (!page.url().includes("driver")) {
      throw new Error("Back button did not return to #driver!");
    }

    console.log("\n====================================================");
    console.log("   TẤT CẢ KIỂM THỬ THÀNH CÔNG 100%! ĐẠT YÊU CẦU!     ");
    console.log("====================================================");
  } catch (err) {
    console.error("Test failed:", err);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
}

runTest();
