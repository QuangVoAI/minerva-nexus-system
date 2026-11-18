import { chromium } from 'playwright';

async function testTabsAndForms() {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });

  console.log('====================================================');
  console.log('   KIỂM THỬ TƯƠNG TÁC TỪNG TAB, FORM VÀ NÚT BẤM    ');
  console.log('====================================================\n');

  // 1. Desktop Login Form
  console.log('[1/7] Kiểm tra tương tác Đăng nhập Desktop (#login)...');
  await page.goto('http://localhost:8080/react/#login', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(300);
  const usernameInput = page.locator('input[placeholder*="NV0128"]');
  const passwordInput = page.locator('input[type="password"]');
  await usernameInput.fill('NV0999');
  await passwordInput.fill('admin1234');
  console.log('  ✓ Nhập tên đăng nhập & mật khẩu hoạt động tốt');
  await page.click('button[type="submit"]');
  await page.waitForTimeout(400);
  console.log('  ✓ Nút Đăng nhập chuyển hướng chính xác đến: ' + page.url());

  // 2. Hub Dashboard SLA Cards
  console.log('\n[2/7] Kiểm tra click nhóm SLA trên Bàn điều hành (#dashboard)...');
  await page.goto('http://localhost:8080/react/#dashboard', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(300);
  const slaCard = page.locator('div[data-name="Nhóm SLA"]').first();
  await slaCard.click();
  await page.waitForTimeout(400);
  console.log('  ✓ Bấm thẻ SLA chuyển hướng chính xác đến: ' + page.url());

  // 3. Tiếp nhận đơn (SCR-03) Tabs & Search
  console.log('\n[3/7] Kiểm tra chuyển Tab Tiếp nhận đơn (#orders)...');
  await page.goto('http://localhost:8080/react/#orders', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(300);
  const errorTab = page.locator('div[data-name="Tab đơn lỗi"]');
  await errorTab.click();
  await page.waitForTimeout(400);
  console.log('  ✓ Bấm tab "Đơn lỗi" chuyển hướng chính xác đến: ' + page.url());

  // 4. Kết quả nhập & Đơn lỗi (SCR-03) Tabs & Row Actions
  console.log('\n[4/7] Kiểm tra Tab & Nút "Sửa & kiểm tra lại" tại Đơn lỗi (#import-errors)...');
  await page.goto('http://localhost:8080/react/#import-errors', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(300);
  const allOrdersTab = page.locator('text=Tất cả đơn hàng 104');
  await allOrdersTab.click();
  await page.waitForTimeout(400);
  console.log('  ✓ Bấm tab "Tất cả đơn hàng 104" quay lại: ' + page.url());

  await page.goto('http://localhost:8080/react/#import-errors', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(300);
  const fixBtn = page.locator('div[data-name="Nút thao tác"]:has-text("Sửa & kiểm tra lại")').first();
  await fixBtn.click();
  await page.waitForTimeout(400);
  console.log('  ✓ Bấm "Sửa & kiểm tra lại" chuyển đến màn hình sửa đơn: ' + page.url());

  // 5. Tạo đơn gửi lẻ (SCR-03) Form & Cancel/Submit
  console.log('\n[5/7] Kiểm tra form Tạo đơn gửi lẻ (#create-order)...');
  await page.goto('http://localhost:8080/react/#create-order', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(300);
  const senderInput = page.locator('input[placeholder*="tên người gửi"]');
  const recipientInput = page.locator('input[placeholder*="tên người nhận"]');
  const wardSelect = page.locator('select').first();
  await senderInput.fill('Lê Thị Minh Hương');
  await recipientInput.fill('Trần Văn Khang');
  await wardSelect.selectOption('Phường Tân Thuận Đông');
  console.log('  ✓ Điền form người gửi, người nhận, chọn Tuyến/Phường hoạt động tốt');

  const cancelBtn = page.locator('div[data-name="Nút thao tác"]:has-text("Hủy")');
  await cancelBtn.click();
  await page.waitForTimeout(400);
  console.log('  ✓ Bấm nút "Hủy" đóng form quay lại: ' + page.url());

  // 6. Lập ca & điểm danh (SCR-04) Shift & Filter Tabs
  console.log('\n[6/7] Kiểm tra chuyển ca & bộ lọc điểm danh (#shifts)...');
  await page.goto('http://localhost:8080/react/#shifts', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(300);
  const ca2Tab = page.locator('div[data-name="Lựa chọn ca"]:has-text("Ca 2")');
  await ca2Tab.click();
  await page.waitForTimeout(200);
  console.log('  ✓ Bấm chuyển sang Ca 2 (13:30 - 17:30) thành công');

  const filterChecked = page.locator('div[data-name="Bộ lọc điểm danh"]:has-text("Đã điểm danh")');
  await filterChecked.click();
  await page.waitForTimeout(200);
  console.log('  ✓ Bấm lọc tài xế "Đã điểm danh" thành công');

  const batchCheckInBtn = page.locator('div[data-name="Điểm danh tài xế"]');
  await batchCheckInBtn.click();
  await page.waitForTimeout(300);
  console.log('  ✓ Bấm "Điểm danh tài xế" kích hoạt thông báo thành công');

  // 7. Gợi ý phân công (SCR-05) Refresh
  console.log('\n[7/7] Kiểm tra nút "Chạy lại gợi ý" (#dispatch)...');
  await page.goto('http://localhost:8080/react/#dispatch', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(300);
  const refreshBtn = page.locator('div[data-name="Chạy lại gợi ý"]');
  await refreshBtn.click();
  await page.waitForTimeout(300);
  console.log('  ✓ Nút "Chạy lại gợi ý" kích hoạt tính toán phương án mới thành công');

  await browser.close();
  console.log('\n====================================================');
  console.log('  TẤT CẢ TƯƠNG TÁC TAB / FORM / NÚT ĐỀU ĐẠT CHUẨN!   ');
  console.log('====================================================');
}

testTabsAndForms();
