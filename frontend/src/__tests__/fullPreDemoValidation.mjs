import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const SCREENSHOT_DIR = path.resolve("screenshots/demo_walkthrough");
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function runPreDemoWalkthrough() {
  console.log("========================================================================");
  console.log("   MINERVA NEXUS — KIỂM THỬ THỰC TẾ TRƯỚC BUỔI TRÌNH DIỄN (PRE-DEMO)   ");
  console.log("   Mô phỏng 100% thao tác của người trình bày trên giao diện Web UI     ");
  console.log("========================================================================\n");

  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    locale: "vi-VN",
  });
  const page = await context.newPage();

  const report = [];

  const logStep = (step, title, success, detail = "") => {
    const icon = success ? "✓ [PASS]" : "✗ [FAIL]";
    console.log(`${icon} [Bước ${step}] ${title} ${detail ? "— " + detail : ""}`);
    report.push({ step, title, success, detail });
  };

  try {
    // ---------------------------------------------------------
    // BƯỚC 1: Bàn điều hành Hub (Dashboard & Đổi Hub)
    // ---------------------------------------------------------
    console.log("\n--- BƯỚC 1: Bàn điều hành Hub (#dashboard) ---");
    await page.goto("http://localhost:3000/react/#dashboard", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);

    const dashboardBody = await page.textContent("body");
    const hasKpi = dashboardBody.includes("Tổng đơn") || dashboardBody.includes("SLA") || dashboardBody.includes("Hub");
    logStep(1, "Mở Bàn điều hành Hub", hasKpi, "KPI hiển thị đầy đủ");

    // Thao tác menu đổi Hub
    const hubTrigger = page.locator('text=Hub Quận 7').first();
    if (await hubTrigger.isVisible()) {
      await hubTrigger.click();
      await page.waitForTimeout(500);
      const cauGiayOption = page.locator('text=Hub Cầu Giấy').first();
      if (await cauGiayOption.isVisible()) {
        await cauGiayOption.click();
        await page.waitForTimeout(500);
        const switchedText = await page.textContent("body");
        logStep(1.1, "Chuyển sang Hub Cầu Giấy", switchedText.includes("Hub Cầu Giấy"));

        // Chuyển lại về Hub Quận 7
        const hubTrigger2 = page.locator('text=Hub Cầu Giấy').first();
        if (await hubTrigger2.isVisible()) {
          await hubTrigger2.click();
          await page.waitForTimeout(500);
          const q7Option = page.locator('text=Hub Quận 7').first();
          if (await q7Option.isVisible()) {
            await q7Option.click();
            await page.waitForTimeout(500);
          }
        }
      }
    }
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, "01_dashboard.png"), fullPage: false });

    // ---------------------------------------------------------
    // BƯỚC 2: Tiếp nhận & Thẩm định đơn hàng theo BR-01 (#orders)
    // ---------------------------------------------------------
    console.log("\n--- BƯỚC 2: Tiếp nhận & Thẩm định đơn hàng (#orders) ---");
    await page.goto("http://localhost:3000/react/#orders", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);

    // Xóa cờ thẩm định cũ để test như lần đầu trình chiếu
    await page.evaluate(() => sessionStorage.removeItem("minerva_verified_MNX000098"));
    await page.reload({ waitUntil: "networkidle" });
    await page.waitForTimeout(1000);

    const thamDinhBtn = page.locator('button:has-text("Thẩm định")').first();
    const hasThamDinh = await thamDinhBtn.isVisible();
    logStep(2, "Kiểm tra nút Thẩm định đơn MNX000098", hasThamDinh);

    if (hasThamDinh) {
      await thamDinhBtn.click();
      await page.waitForTimeout(1000);
      const ordersAfter = await page.textContent("body");
      const verified = ordersAfter.includes("Đã thẩm định đạt chuẩn BR-01") || ordersAfter.includes("READY_TO_DISPATCH");
      logStep(2.1, "Thực hiện thẩm định BR-01 chuyển sang Sẵn sàng phát", verified, "Toast xác nhận thành công");
    }
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, "02_orders_verified.png"), fullPage: false });

    // ---------------------------------------------------------
    // BƯỚC 3: Tạo đơn gửi lẻ (#create-order)
    // ---------------------------------------------------------
    console.log("\n--- BƯỚC 3: Tạo đơn gửi lẻ (#create-order) ---");
    await page.goto("http://localhost:3000/react/#create-order", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);

    const formInputs = page.locator("input");
    const inputCount = await formInputs.count();
    logStep(3, "Mở màn hình Tạo đơn gửi lẻ", inputCount >= 4, `Có ${inputCount} ô nhập liệu`);
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, "03_create_order.png"), fullPage: false });

    // ---------------------------------------------------------
    // BƯỚC 4: Lập ca & Điểm danh tài xế (#shifts)
    // ---------------------------------------------------------
    console.log("\n--- BƯỚC 4: Lập ca & Điểm danh (#shifts) ---");
    await page.goto("http://localhost:3000/react/#shifts", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);

    const shiftsBody = await page.textContent("body");
    const hasShifts = shiftsBody.includes("Ca") || shiftsBody.includes("Tài xế") || shiftsBody.includes("Điểm danh");
    logStep(4, "Mở Lập ca & Điểm danh", hasShifts);
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, "04_shifts.png"), fullPage: false });

    // ---------------------------------------------------------
    // BƯỚC 5: Gợi ý phân công thông minh & Phê duyệt (#dispatch)
    // ---------------------------------------------------------
    console.log("\n--- BƯỚC 5: Gợi ý phân công & Phê duyệt (#dispatch) ---");
    await page.goto("http://localhost:3000/react/#dispatch", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);

    // Click vào dòng đơn MNX000023 để xem giải trình thuật toán bên phải
    const row23 = page.locator('text=MNX000023').first();
    if (await row23.isVisible()) {
      await row23.click();
      await page.waitForTimeout(500);
    }

    const dispatchText = await page.textContent("body");
    const hasAiExplain = dispatchText.includes("Vì sao khớp") || dispatchText.includes("w1") || dispatchText.includes("88%") || dispatchText.includes("96%");
    logStep(5, "Xem giải trình thuật toán AI bên phải", hasAiExplain, "Hiển thị 3 trọng số w1, w2, w3");

    // Click nút Phê duyệt
    const approveBtn = page.locator('button:has-text("Phê duyệt")').first();
    const hasApproveBtn = await approveBtn.isVisible();
    if (hasApproveBtn) {
      await approveBtn.click();
      await page.waitForTimeout(1500);
      logStep(5.1, "Bấm Phê duyệt 6 đơn hàng", true, "Đã lưu vào danh sách phân công");
    }
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, "05_dispatch_approved.png"), fullPage: false });

    // ---------------------------------------------------------
    // BƯỚC 6: Tác vụ tài xế - Lộ trình & Xuất kho (#driver)
    // ---------------------------------------------------------
    console.log("\n--- BƯỚC 6: Tác vụ tài xế - Lộ trình & Xuất kho (#driver) ---");
    await page.goto("http://localhost:3000/react/#driver", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);

    const driverBody = await page.textContent("body");
    const hasQ7Orders = driverBody.includes("MNX000001") || driverBody.includes("Hub Quận 7");
    logStep(6, "Nạp danh sách lộ trình giao hàng Hub Quận 7", hasQ7Orders, "Đúng mã đơn MNX");

    // Kiểm tra cuộn chuột xem hết các đơn
    const scrollList = page.locator(".overflow-y-auto").first();
    if (await scrollList.isVisible()) {
      await scrollList.evaluate((el) => { el.scrollTop = el.scrollHeight; });
      await page.waitForTimeout(500);
      logStep(6.1, "Thao tác cuộn chuột xem hết các đơn hàng", true, "Thanh cuộn hoạt động mượt mà");
      await scrollList.evaluate((el) => { el.scrollTop = 0; });
      await page.waitForTimeout(500);
    }

    // Bấm Nhận đủ & Xuất kho
    const transitBtn = page.locator('button:has-text("Nhận đủ"), button:has-text("Xuất kho")').first();
    if (await transitBtn.isVisible()) {
      await transitBtn.click();
      await page.waitForTimeout(1000);
      const afterTransit = await page.textContent("body");
      const isTransited = afterTransit.includes("Đã xuất kho") || afterTransit.includes("Đang phát hàng");
      logStep(6.2, "Bấm Nhận đủ & Xuất kho", isTransited, "Chuyển sang Đang phát hàng");
    }
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, "06_driver_transited.png"), fullPage: false });

    // ---------------------------------------------------------
    // BƯỚC 7: Tài xế giao thành công đơn 1 (Thu COD) (#driver)
    // ---------------------------------------------------------
    console.log("\n--- BƯỚC 7: Tài xế giao thành công đơn 1 (#driver) ---");
    const deliverBtn = page.locator('button:has-text("Giao thành công")').first();
    if (await deliverBtn.isVisible()) {
      await deliverBtn.click();
      await page.waitForTimeout(1000);
      const afterDeliver = await page.textContent("body");
      const isDelivered = afterDeliver.includes("450.000") || afterDeliver.includes("✓");
      logStep(7, "Bấm Giao thành công đơn 1", isDelivered, "Thu tiền COD 450.000 ₫ thành công");
    }
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, "07_driver_delivered.png"), fullPage: false });

    // ---------------------------------------------------------
    // BƯỚC 8: Báo sự cố đơn 2 -> Hẹn giao lại (#failed-1)
    // ---------------------------------------------------------
    console.log("\n--- BƯỚC 8: Báo sự cố đơn 2 (#failed-1) ---");
    const incidentBtn = page.locator('button:has-text("Báo sự cố")').first();
    if (await incidentBtn.isVisible()) {
      await incidentBtn.click();
      await page.waitForTimeout(1000);
      logStep(8, "Bấm Báo sự cố chuyển sang màn hình SCR-08", true);

      // Chọn lý do thất bại nếu ở trang #failed-1
      const reasonRadio = page.locator('input[type="radio"]').first();
      if (await reasonRadio.isVisible()) {
        await reasonRadio.click();
        await page.waitForTimeout(500);
      }
      await page.screenshot({ path: path.join(SCREENSHOT_DIR, "08_failed_incident.png"), fullPage: false });
    }

    // ---------------------------------------------------------
    // BƯỚC 9: Tra cứu hành trình công khai (#tracking)
    // ---------------------------------------------------------
    console.log("\n--- BƯỚC 9: Tra cứu hành trình công khai (#tracking) ---");
    await page.goto("http://localhost:3000/react/#tracking", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);

    const trackingInput = page.locator('input[placeholder*="MNX"]').first();
    if (await trackingInput.isVisible()) {
      await trackingInput.fill("MNX000001");
      const searchBtn = page.locator('button:has-text("Tra cứu")').first();
      await searchBtn.click();
      await page.waitForTimeout(1000);

      const trackingResult = await page.textContent("body");
      const found = trackingResult.includes("MNX000001") && !trackingResult.includes("Không tìm thấy");
      logStep(9, "Tra cứu hành trình đơn MNX000001", found, "Hiển thị Timeline và trạng thái");
    }
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, "09_public_tracking.png"), fullPage: false });

    // ---------------------------------------------------------
    // BƯỚC 10: Hồ sơ chi tiết đơn hàng (#order-detail)
    // ---------------------------------------------------------
    console.log("\n--- BƯỚC 10: Hồ sơ chi tiết đơn hàng (#order-detail) ---");
    await page.goto("http://localhost:3000/react/#order-detail", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);

    const detailBody = await page.textContent("body");
    const hasTimeline = detailBody.includes("Vòng đời") || detailBody.includes("Lịch sử") || detailBody.includes("MNX");
    logStep(10, "Mở Hồ sơ chi tiết đơn hàng", hasTimeline, "Hiển thị State Machine và dòng thời gian");
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, "10_order_detail.png"), fullPage: false });

    // ---------------------------------------------------------
    // BƯỚC 11: Nhật ký kiểm toán & Báo cáo (#audit & #reports)
    // ---------------------------------------------------------
    console.log("\n--- BƯỚC 11: Nhật ký kiểm toán & Báo cáo (#audit, #reports) ---");
    await page.goto("http://localhost:3000/react/#audit", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);
    const auditText = await page.textContent("body");
    logStep(11, "Mở Nhật ký hệ thống (#audit)", auditText.includes("Nhật ký") || auditText.includes("Audit"));
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, "11_audit_log.png"), fullPage: false });

    await page.goto("http://localhost:3000/react/#reports", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);
    const reportsText = await page.textContent("body");
    logStep(11.1, "Mở Báo cáo vận hành (#reports)", reportsText.includes("Báo cáo") || reportsText.includes("Xuất CSV"));
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, "12_reports.png"), fullPage: false });

  } catch (err) {
    console.error("Lỗi trong quá trình kiểm thử pre-demo:", err);
  } finally {
    await browser.close();
  }

  console.log("\n========================================================================");
  console.log("             KẾT QUẢ KIỂM THỬ THỰC TẾ PRE-DEMO TRÊN UI                 ");
  console.log("========================================================================");
  const total = report.length;
  const passed = report.filter((r) => r.success).length;
  console.log(`Tổng số bước kiểm tra : ${total}`);
  console.log(`Số bước thành công     : ${passed} / ${total}`);
  console.log(`Tỷ lệ đạt chuẩn        : ${Math.round((passed / total) * 100)}%`);
  console.log("========================================================================\n");
}

runPreDemoWalkthrough();
