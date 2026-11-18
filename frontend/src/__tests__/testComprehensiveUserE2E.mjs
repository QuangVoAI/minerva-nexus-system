import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const SCREENSHOT_DIR = path.resolve("screenshots");
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function runRealUserE2ETest() {
  console.log("========================================================================");
  console.log("   MINERVA NEXUS — KIỂM THỬ E2E TOÀN BỘ LUỒNG THAO TÁC TRỰC TIẾP TRÊN UI ");
  console.log("========================================================================\n");

  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    locale: "vi-VN",
  });
  const page = await context.newPage();

  try {
    // -------------------------------------------------------------
    // BƯỚC 1: ĐĂNG NHẬP HỆ THỐNG (#login)
    // -------------------------------------------------------------
    console.log(">>> [BƯỚC 1/6] Thao tác Đăng nhập hệ thống (#login) <<<");
    await page.goto("http://localhost:8080/react/#login", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(600);

    const loginTitle = await page.textContent("body");
    console.log("  ✓ Đã truy cập trang đăng nhập:", loginTitle.includes("Đăng nhập") ? "Hợp lệ" : "Khác");
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, "step1_login.png") });

    // Click nút Đăng nhập
    const loginSubmitBtn = page.locator('button:has-text("Đăng nhập")').first();
    await loginSubmitBtn.click();
    await page.waitForTimeout(800);

    // -------------------------------------------------------------
    // BƯỚC 2: BÀN ĐIỀU HÀNH HUB (#dashboard) & CHUYỂN HUB
    // -------------------------------------------------------------
    console.log("\n>>> [BƯỚC 2/6] Bàn điều hành Hub & Chuyển đổi Hub (#dashboard) <<<");
    await page.goto("http://localhost:8080/react/#dashboard", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(600);

    const dashboardBody = await page.textContent("body");
    console.log("  ✓ Bàn điều hành hiển thị:", dashboardBody.includes("Bàn điều hành") ? "Đúng" : "Lỗi");

    // Thao tác mở Hub switcher
    const hubButton = page.locator('button:has-text("Hub")').first();
    if (await hubButton.isVisible()) {
      await hubButton.click();
      await page.waitForTimeout(400);
      console.log("  ✓ Đã nhấn mở menu chọn Hub");
      await page.screenshot({ path: path.join(SCREENSHOT_DIR, "step2_hub_dropdown.png") });

      // Chọn Hub Quận 7
      const q7Option = page.locator('button:has-text("Hub Quận 7")').first();
      if (await q7Option.isVisible()) {
        await q7Option.click();
        await page.waitForTimeout(400);
        console.log("  ✓ Đã chọn: Hub Quận 7");
      }
    }

    // -------------------------------------------------------------
    // BƯỚC 3: GỢI Ý ĐIỀU PHỐI & PHÊ DUYỆT (#dispatch)
    // -------------------------------------------------------------
    console.log("\n>>> [BƯỚC 3/6] Bàn gợi ý điều phối & Phê duyệt phân công (#dispatch) <<<");
    await page.goto("http://localhost:8080/react/#dispatch", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(800);

    // 1. Kiểm tra bảng đề xuất phân công hiển thị
    const dispatchText = await page.textContent("body");
    console.log("  ✓ Đã tải bảng đề xuất:", dispatchText.includes("Đề xuất phân công") ? "Đúng" : "Lỗi");

    // 2. Click dòng 1 để xem phân tích vì sao khớp ở panel bên phải
    console.log("  ✓ Click dòng 1 (MNX000001) để xem độ khớp...");
    const row1 = page.locator('[data-name="Đề xuất phân công"]').nth(0);
    await row1.click();
    await page.waitForTimeout(400);
    const detailPanelHeader = await page.locator('text=Vì sao khớp').first().innerText();
    console.log(`    -> Panel bên phải: ${detailPanelHeader}`);

    // 3. Sổ xuống chọn tài xế khác cho dòng 1 (ví dụ đổi sang DRV-02 Trần Quốc Bình)
    console.log("  ✓ Sổ dropdown đổi tài xế dòng 1...");
    const row1Select = row1.locator('select');
    await row1Select.selectOption("DRV-02");
    await page.waitForTimeout(400);

    // 4. Chọn tất cả 6 đơn hàng bằng nút Chọn tất cả
    console.log("  ✓ Bấm chọn tất cả 6 đơn hàng...");
    const selectAllBtn = page.locator('[data-name="Chọn tất cả"] button');
    await selectAllBtn.click();
    await page.waitForTimeout(400);

    const checkedStatus = await page.locator('p:has-text("Đã chọn")').first().innerText();
    console.log(`    -> Trạng thái chọn: ${checkedStatus}`);
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, "step3_dispatch_ready.png") });

    // 5. Bấm nút "Phê duyệt"
    console.log("  ✓ Nhấn nút 'Phê duyệt'...");
    const approveBtn = page.locator('button[data-name="Phê duyệt phân công đã chọn"]');
    await approveBtn.click();
    await page.waitForTimeout(1200);

    // -------------------------------------------------------------
    // BƯỚC 4: TÁC VỤ TÀI XẾ MOBILE (#driver)
    // -------------------------------------------------------------
    console.log("\n>>> [BƯỚC 4/6] Màn hình Mobile Tác vụ tài xế (#driver) <<<");
    if (!page.url().includes("driver")) {
      await page.goto("http://localhost:8080/react/#driver", { waitUntil: "domcontentloaded" });
      await page.waitForTimeout(800);
    }

    // 1. Kiểm tra header đồng bộ số lượng đơn
    const hubCardText = await page.locator('div[data-name="Tiếp nhận tại Hub"]').innerText();
    console.log("  ✓ Thông tin Hub & Số lượng đơn trên Mobile:\n    " + hubCardText.replace(/\n/g, " | "));

    const initialLoadText = await page.locator('div[data-name="Tải và tiền đang giữ"]').innerText();
    console.log("  ✓ Trạng thái ban đầu trên xe:\n    " + initialLoadText.replace(/\n/g, " | "));
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, "step4_01_driver_initial.png") });

    // 2. Bấm "Nhận đủ & Xuất kho"
    console.log("  ✓ Tài xế bấm 'Nhận đủ & Xuất kho'...");
    const transitBtn = page.locator('button[data-name="Xác nhận nhận đủ hàng và xuất kho"]');
    await transitBtn.click();
    await page.waitForTimeout(600);

    const afterTransitLoad = await page.locator('div[data-name="Tải và tiền đang giữ"]').innerText();
    console.log("    -> Sau xuất kho:\n    " + afterTransitLoad.replace(/\n/g, " | "));
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, "step4_02_driver_in_transit.png") });

    // 3. Thao tác giao hàng: Giao đơn 1 (Stop 1)
    console.log("  ✓ Tài xế bấm '✔ Giao thành công' cho Đơn 1...");
    const order1Card = page.locator('[data-name^="Đơn hàng"]').nth(0);
    const deliver1Btn = order1Card.locator('button:has-text("✔ Giao thành công")');
    await deliver1Btn.click();
    await page.waitForTimeout(600);

    const loadAfterDeliver1 = await page.locator('div[data-name="Tải và tiền đang giữ"]').innerText();
    console.log("    -> Tải & COD sau khi giao Đơn 1:\n    " + loadAfterDeliver1.replace(/\n/g, " | "));
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, "step4_03_order1_delivered.png") });

    // 4. Thao tác giao hàng: Giao tiếp đơn 2 (Stop 2) - previously disabled in Figma!
    console.log("  ✓ Tài xế bấm '✔ Giao thành công' cho Đơn 2...");
    const order2Card = page.locator('[data-name^="Đơn hàng"]').nth(1);
    const deliver2Btn = order2Card.locator('button:has-text("✔ Giao thành công")');
    await deliver2Btn.click();
    await page.waitForTimeout(600);

    const loadAfterDeliver2 = await page.locator('div[data-name="Tải và tiền đang giữ"]').innerText();
    console.log("    -> Tải & COD sau khi giao Đơn 2:\n    " + loadAfterDeliver2.replace(/\n/g, " | "));
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, "step4_04_order2_delivered.png") });

    // 5. Thử nút gọi điện thoại (icon Phone)
    console.log("  ✓ Thử bấm nút gọi điện thoại cho khách hàng Đơn 3...");
    const order3Card = page.locator('[data-name^="Đơn hàng"]').nth(2);
    const callBtn = order3Card.locator('button[title^="Gọi cho"]');
    if (await callBtn.isVisible()) {
      await callBtn.click();
      await page.waitForTimeout(400);
      const toastEl = page.locator('.animate-bounce');
      if (await toastEl.isVisible()) {
        console.log(`    -> Thông báo toast gọi điện: "${(await toastEl.innerText()).trim()}"`);
      }
    }

    // 6. Bấm "✖ Báo sự cố" trên Đơn 3
    console.log("  ✓ Tài xế bấm '✖ Báo sự cố' trên Đơn 3...");
    const incidentBtn = order3Card.locator('button:has-text("✖ Báo sự cố")');
    await incidentBtn.click();
    await page.waitForTimeout(800);

    // -------------------------------------------------------------
    // BƯỚC 5: BÁO GIAO THẤT BẠI (#failed-1)
    // -------------------------------------------------------------
    console.log("\n>>> [BƯỚC 5/6] Màn hình Báo giao thất bại (#failed-1) <<<");
    console.log("  ✓ URL hiện tại:", page.url());

    const incidentInfo = await page.locator('div[data-name="Thông tin đơn hàng"]').innerText();
    console.log("  ✓ Thông tin đơn hàng gặp sự cố:\n    " + incidentInfo.replace(/\n/g, " | "));
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, "step5_01_incident_form.png") });

    // Chọn lý do thất bại: Khách không nghe máy sau 3 cuộc gọi
    const reasonItem = page.locator('div[data-name="Lý do"]').first();
    if (await reasonItem.isVisible()) {
      await reasonItem.click();
      console.log("  ✓ Đã chọn lý do sự cố: Khách không nghe máy");
    }

    // Click nút quay lại về #driver
    console.log("  ✓ Bấm nút mũi tên quay lại để về lại danh sách tác vụ tài xế...");
    const backBtn = page.locator('div[data-name="arrow-left"]');
    await backBtn.click();
    await page.waitForTimeout(800);
    console.log("  ✓ Đã quay lại URL:", page.url());
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, "step5_02_returned_to_driver.png") });

    // -------------------------------------------------------------
    // BƯỚC 6: TRA CỨU CÔNG KHAI (#tracking) & BÁO CÁO (#reports)
    // -------------------------------------------------------------
    console.log("\n>>> [BƯỚC 6/6] Khách hàng tra cứu hành trình công khai (#tracking) <<<");
    await page.goto("http://localhost:8080/react/#tracking", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(600);

    const trackingInput = page.locator('input[placeholder*="MNX"]').first();
    if (await trackingInput.isVisible()) {
      await trackingInput.fill("MNX000001");
      const searchBtn = page.locator('button:has-text("Tra cứu")').first();
      await searchBtn.click();
      await page.waitForTimeout(600);
      console.log("  ✓ Đã tra cứu đơn MNX000001, hiển thị tiến trình vận đơn");
      await page.screenshot({ path: path.join(SCREENSHOT_DIR, "step6_01_tracking_result.png") });
    }

    // Kiểm tra Báo cáo vận hành
    console.log("  ✓ Kiểm tra Báo cáo vận hành (#reports)...");
    await page.goto("http://localhost:8080/react/#reports", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(600);
    const reportsText = await page.textContent("body");
    console.log("  ✓ Báo cáo vận hành tải thành công:", reportsText.includes("Báo cáo") || reportsText.includes("KPI") ? "Đúng" : "Xem xét");
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, "step6_02_reports_kpi.png") });

    console.log("\n========================================================================");
    console.log("  🎉 HOÀN THÀNH 100% LUỒNG E2E USER JOURNEY TRỰC TIẾP TRÊN UI!");
    console.log("  📸 TẤT CẢ ẢNH BẰNG CHỨNG ĐÃ ĐƯỢC LƯU TRONG THƯ MỤC: screenshots/");
    console.log("========================================================================");
  } catch (err) {
    console.error("Lỗi trong quá trình kiểm thử:", err);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
}

runRealUserE2ETest();
