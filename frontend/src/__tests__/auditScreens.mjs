import { chromium } from 'playwright';

const screens = [
  { id: 'login', name: 'SCR-01 Đăng nhập desktop' },
  { id: 'login-driver', name: 'SCR-01 Đăng nhập mobile' },
  { id: 'login-states', name: 'SCR-01 Trạng thái đăng nhập' },
  { id: 'permissions', name: 'SCR-01 Chú giải phân quyền' },
  { id: 'dashboard', name: 'SCR-02 Bàn điều hành Hub' },
  { id: 'orders', name: 'SCR-03 Tiếp nhận & phân loại đơn' },
  { id: 'import-errors', name: 'SCR-03 Kết quả nhập & đơn lỗi' },
  { id: 'create-order', name: 'SCR-03 Tạo đơn gửi lẻ' },
  { id: 'shifts', name: 'SCR-04 Lập ca & điểm danh' },
  { id: 'dispatch', name: 'SCR-05 Gợi ý phân công' },
  { id: 'order-detail', name: 'SCR-06 Hồ sơ chi tiết đơn' },
  { id: 'exceptions', name: 'SCR-06 Ngoại lệ giao hàng' },
  { id: 'driver', name: 'SCR-07 Tác vụ tài xế' },
  { id: 'failed-1', name: 'SCR-08 Báo thất bại lần đầu' },
  { id: 'redelivery', name: 'SCR-08 Khách hẹn giao lại' },
  { id: 'failed', name: 'SCR-08 FAILED chờ phát lại' },
  { id: 'refused', name: 'SCR-08 Từ chối nhận lần 3' },
  { id: 'returned', name: 'SCR-08 RETURNED chuyển hoàn' },
  { id: 'tracking', name: 'UC-24 Tra cứu công khai' },
  { id: 'cancel', name: 'UC-23 Hủy đơn hàng' },
  { id: 'audit', name: 'UC-22 Nhật ký hệ thống' },
  { id: 'reports', name: 'UC-20 Báo cáo vận hành' },
  { id: 'drivers', name: 'UC-03 Quản lý tài xế & khu vực' },
];

async function audit() {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage();
  page.on('console', msg => {
    if (msg.type() === 'error') console.log('PAGE ERROR:', msg.text());
  });
  page.on('pageerror', err => console.log('PAGE CRASH:', err.message));
  
  console.log('====================================================');
  console.log('       KIỂM TRA TOÀN DIỆN TỪNG TAB / MÀN HÌNH       ');
  console.log('====================================================\n');

  for (const s of screens) {
    await page.goto(`http://localhost:8080/react/#${s.id}`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(400);

    const clickableDivs = await page.evaluate(() => {
      const els = Array.from(document.querySelectorAll('*'));
      return els.filter(el => {
        const style = window.getComputedStyle(el);
        return style.cursor === 'pointer' && el.offsetParent !== null;
      }).length;
    });

    const buttons = await page.locator('button').count();
    const inputs = await page.locator('input, select, textarea').count();

    console.log(`[#${s.id.padEnd(14)}] ${s.name.padEnd(35)} | Pointer: ${clickableDivs} | Buttons: ${buttons} | Inputs: ${inputs}`);
  }

  await browser.close();
}

audit();
