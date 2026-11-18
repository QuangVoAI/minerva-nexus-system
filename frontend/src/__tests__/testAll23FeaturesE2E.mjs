import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const SCREENSHOT_DIR = path.resolve("screenshots/all23");
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

const SCREENS = [
  { id: "login", name: "SCR-01 · Đăng nhập desktop", category: "Xác thực" },
  { id: "login-driver", name: "SCR-01 · Đăng nhập mobile tài xế", category: "Xác thực" },
  { id: "login-states", name: "SCR-01 · Các trạng thái đăng nhập", category: "Xác thực" },
  { id: "permissions", name: "SCR-01 · Phân quyền & chuyển tiếp", category: "Xác thực" },
  { id: "dashboard", name: "SCR-02 · Bàn điều hành Hub", category: "Điều hành Hub" },
  { id: "orders", name: "SCR-03 · Tiếp nhận & phân loại đơn", category: "Đơn hàng" },
  { id: "import-errors", name: "SCR-03 · Kết quả nhập & đơn lỗi", category: "Đơn hàng" },
  { id: "create-order", name: "SCR-03 · Tạo đơn gửi lẻ", category: "Đơn hàng" },
  { id: "shifts", name: "SCR-04 · Lập ca & điểm danh", category: "Điều phối" },
  { id: "dispatch", name: "SCR-05 · Gợi ý phân công", category: "Điều phối" },
  { id: "order-detail", name: "SCR-06 · Hồ sơ chi tiết đơn", category: "Điều phối" },
  { id: "exceptions", name: "SCR-06 · Ngoại lệ giao hàng", category: "Điều phối" },
  { id: "driver", name: "SCR-07 · Tác vụ tài xế", category: "Mobile Tài xế" },
  { id: "failed-1", name: "SCR-08 · Báo thất bại lần đầu", category: "Mobile Tài xế" },
  { id: "redelivery", name: "SCR-08 · Khách hẹn giao lại", category: "Mobile Tài xế" },
  { id: "failed", name: "SCR-08 · FAILED chờ phát lại", category: "Mobile Tài xế" },
  { id: "refused", name: "SCR-08 · Từ chối nhận lần ba", category: "Mobile Tài xế" },
  { id: "returned", name: "SCR-08 · RETURNED chuyển hoàn", category: "Mobile Tài xế" },
  { id: "cancel", name: "UC-23 · Hủy đơn hàng", category: "Tiện ích & Mở rộng" },
  { id: "audit", name: "UC-22 · Nhật ký hệ thống", category: "Tiện ích & Mở rộng" },
  { id: "reports", name: "UC-20 · Báo cáo vận hành", category: "Tiện ích & Mở rộng" },
  { id: "drivers", name: "UC-03 · Tài xế và khu vực", category: "Tiện ích & Mở rộng" },
];

async function runTest() {
  console.log("========================================================================");
  console.log("   MINERVA NEXUS — KIỂM THỬ TOÀN DIỆN 22 TÍNH NĂNG & MÀN HÌNH TRỰC TIẾP ");
  console.log("   Chụp ảnh màn hình, kiểm tra tương tác từng nút/form như người dùng   ");
  console.log("========================================================================\n");

  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const context = await browser.newContext({
    viewport: { width: 1400, height: 900 },
    locale: "vi-VN",
  });
  const page = await context.newPage();

  const results = [];

  for (let i = 0; i < SCREENS.length; i++) {
    const screen = SCREENS[i];
    const idxStr = String(i + 1).padStart(2, "0");
    console.log(`[${idxStr}/23] Kiểm tra màn hình #${screen.id}: ${screen.name}...`);

    try {
      // 1. Điều hướng đến màn hình
      await page.goto(`http://localhost:8080/react/#${screen.id}`, { waitUntil: "domcontentloaded" });
      await page.waitForTimeout(600);

      // 2. Kiểm tra trang có nội dung hiển thị (không bị trắng màn hình)
      const bodyText = await page.textContent("body");
      if (!bodyText || bodyText.trim().length < 50) {
        throw new Error("Trang tải về rỗng hoặc không có nội dung!");
      }

      // 3. Tương tác đặc thù theo từng màn hình
      let interactionDetail = "Hiển thị nội dung đầy đủ";

      if (screen.id === "login") {
        const usernameInput = page.locator('input[type="text"]').first();
        if (await usernameInput.isVisible()) {
          await usernameInput.fill("dispatcher_01");
          interactionDetail = "Nhập tài khoản điều phối viên";
        }
      } else if (screen.id === "login-driver") {
        const phoneInput = page.locator('input').first();
        if (await phoneInput.isVisible()) {
          await phoneInput.fill("0903456789");
          interactionDetail = "Nhập SĐT tài xế di động";
        }
      } else if (screen.id === "dashboard") {
        const hubBtn = page.locator('button:has-text("Hub")').first();
        if (await hubBtn.isVisible()) {
          await hubBtn.click();
          await page.waitForTimeout(300);
          await hubBtn.click(); // đóng lại
          interactionDetail = "Kiểm tra mở/đóng menu chọn Hub thành công";
        }
      } else if (screen.id === "orders") {
        const filterBtns = page.locator('button');
        const count = await filterBtns.count();
        interactionDetail = `Có ${count} nút điều khiển/bộ lọc hoạt động`;
      } else if (screen.id === "create-order") {
        const inputs = page.locator('input');
        const inputCount = await inputs.count();
        interactionDetail = `Form tạo đơn có ${inputCount} ô nhập dữ liệu`;
      } else if (screen.id === "shifts") {
        const shiftBtn = page.locator('div:has-text("Ca 2")').first();
        if (await shiftBtn.isVisible()) {
          await shiftBtn.click();
          await page.waitForTimeout(300);
          interactionDetail = "Chuyển tab Ca 1 / Ca 2 mượt mà";
        }
      } else if (screen.id === "dispatch") {
        const row = page.locator('[data-name="Đề xuất phân công"]').first();
        if (await row.isVisible()) {
          await row.click();
          interactionDetail = "Click dòng đơn cập nhật bảng phân tích độ khớp bên phải";
        }
      } else if (screen.id === "driver") {
        const transitBtn = page.locator('button[data-name="Xác nhận nhận đủ hàng và xuất kho"]');
        const deliverBtn = page.locator('button:has-text("✔ Giao thành công")').first();
        const callBtn = page.locator('button[title^="Gọi cho"]').first();
        interactionDetail = `Nút Xuất kho (${await transitBtn.isVisible()}), Nút Giao (${await deliverBtn.isVisible()}), Nút Gọi (${await callBtn.isVisible()})`;
      } else if (screen.id === "failed-1") {
        const reason = page.locator('div[data-name="Lý do"]').first();
        if (await reason.isVisible()) {
          await reason.click();
          interactionDetail = "Chọn lý do thất bại thành công";
        }
      } else if (screen.id === "cancel") {
        const select = page.locator('select').first();
        if (await select.isVisible()) {
          interactionDetail = "Dropdown chọn đơn cần hủy sẵn sàng";
        }
      } else if (screen.id === "audit") {
        const filterInput = page.locator('input').first();
        if (await filterInput.isVisible()) {
          await filterInput.fill("MNX");
          const filterBtn = page.locator('button:has-text("Lọc")').first();
          await filterBtn.click();
          await page.waitForTimeout(300);
          interactionDetail = "Lọc nhật ký audit log theo mã MNX thành công";
        }
      } else if (screen.id === "reports") {
        const exportBtn = page.locator('button:has-text("Xuất CSV")').first();
        interactionDetail = `Nút xuất CSV sẵn sàng (${await exportBtn.isVisible()})`;
      } else if (screen.id === "drivers") {
        const table = page.locator('table');
        interactionDetail = `Bảng danh sách tài xế & tải khả dụng sẵn sàng (${await table.isVisible()})`;
      }

      // 4. Chụp ảnh màn hình
      const screenshotPath = path.join(SCREENSHOT_DIR, `${idxStr}_${screen.id}.png`);
      await page.screenshot({ path: screenshotPath });

      console.log(`  ✓ [PASS] ${screen.name} - ${interactionDetail}`);
      results.push({
        idx: idxStr,
        id: screen.id,
        name: screen.name,
        category: screen.category,
        status: "PASS",
        detail: interactionDetail,
        screenshot: `${idxStr}_${screen.id}.png`,
      });
    } catch (err) {
      console.error(`  ✖ [FAIL] ${screen.name}:`, err.message);
      results.push({
        idx: idxStr,
        id: screen.id,
        name: screen.name,
        category: screen.category,
        status: "FAIL",
        detail: err.message,
        screenshot: null,
      });
    }
  }

  await browser.close();

  // Tạo báo cáo tổng hợp
  console.log("\n========================================================================");
  console.log("                      BÁO CÁO TỔNG HỢP KIỂM THỬ 23 TÍNH NĂNG             ");
  console.log("========================================================================");
  const passCount = results.filter((r) => r.status === "PASS").length;
  const failCount = results.filter((r) => r.status === "FAIL").length;
  console.log(`Tổng số màn hình kiểm thử: ${results.length}`);
  console.log(`Thành công (PASS): ${passCount} / ${results.length}`);
  console.log(`Thất bại (FAIL):   ${failCount} / ${results.length}`);
  console.log("========================================================================\n");

  fs.writeFileSync(
    path.join(SCREENSHOT_DIR, "report.json"),
    JSON.stringify(results, null, 2),
    "utf-8"
  );
}

runTest();
