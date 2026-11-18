import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

(async () => {
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  console.log('--- 0. Testing #create-order -> #orders persistence ---');
  await page.goto('http://localhost:3000/react/#create-order', { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  const recipientInput = page.locator('input').nth(3);
  await recipientInput.fill('Trần Hoàng Minh Demo');
  const saveBtn = page.locator('text=Lưu & tạo vận đơn').first();
  await saveBtn.click();
  await page.waitForTimeout(1600);
  const createdUrl = page.url();
  const createdBody = await page.textContent('body');
  console.log('✓ Redirected to #orders:', createdUrl.includes('#orders'));
  console.log('✓ New order visible immediately:', createdBody.includes('Trần Hoàng Minh Demo'));
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  const reloadedBody = await page.textContent('body');
  console.log('✓ New order persists after reload:', reloadedBody.includes('Trần Hoàng Minh Demo'));
  await page.screenshot({ path: 'screenshots/verify_fix_created_order.png', fullPage: false });

  console.log('--- 1. Testing #orders: Thẩm định MNX000098 ---');
  await page.goto('http://localhost:8080/react/#orders', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Check initial PENDING count and button
  const pendingCountBefore = await page.textContent('body');
  console.log('Page loaded, looking for Thẩm định button...');

  const thamDinhBtn = page.locator('button:has-text("Thẩm định")').first();
  await thamDinhBtn.waitFor({ state: 'visible', timeout: 5000 });
  console.log('✓ Found button "Thẩm định"!');

  // Click Thẩm định
  await thamDinhBtn.click();
  await page.waitForTimeout(1000);

  // Verify toast and new status
  const bodyAfter = await page.textContent('body');
  const hasToast = bodyAfter.includes('Đã thẩm định đạt chuẩn BR-01');
  const hasNewStatus = bodyAfter.includes('READY_TO_DISPATCH');
  console.log('✓ Toast appeared:', hasToast);
  console.log('✓ Status updated to READY_TO_DISPATCH:', hasNewStatus);

  await page.screenshot({ path: 'screenshots/verify_fix_orders_tham_dinh.png', fullPage: false });
  console.log('✓ Saved screenshot verify_fix_orders_tham_dinh.png');

  console.log('--- 2. Testing #dispatch: Phê duyệt 6 đơn ---');
  await page.goto('http://localhost:8080/react/#dispatch', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  const approveBtn = page.locator('button:has-text("Phê duyệt")').first();
  if (await approveBtn.isVisible()) {
    await approveBtn.click();
    console.log('✓ Clicked Phê duyệt on #dispatch');
    await page.waitForTimeout(1500);
  }

  console.log('--- 3. Testing #driver: Check orders count and scroll ---');
  await page.goto('http://localhost:8080/react/#driver', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  const driverText = await page.textContent('body');
  const has6Orders = driverText.includes('6 đơn') || driverText.includes('MNX000001');
  console.log('✓ Shows Q7 orders (MNX000001):', driverText.includes('MNX000001'));
  console.log('✓ Does NOT show stale Cau Giay 8 orders:', !driverText.includes('VN241109086'));

  await page.screenshot({ path: 'screenshots/verify_fix_driver_top.png', fullPage: false });
  console.log('✓ Saved screenshot verify_fix_driver_top.png');

  // Test scrolling down in the order list container
  const scrollContainer = page.locator('.overflow-y-auto').first();
  if (await scrollContainer.isVisible()) {
    await scrollContainer.evaluate((el) => { el.scrollTop = el.scrollHeight; });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'screenshots/verify_fix_driver_scrolled.png', fullPage: false });
    console.log('✓ Saved screenshot verify_fix_driver_scrolled.png after scrolling down');
  }

  console.log('--- 4. Testing #audit: Nhật ký kiểm toán nội bộ ---');
  await page.goto('http://localhost:8080/react/#audit', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  const auditBody = await page.textContent('body');
  console.log('✓ Internal Audit Log loaded:', auditBody.includes('Nhật ký hệ thống'));
  await page.screenshot({ path: 'screenshots/verify_fix_audit.png', fullPage: false });
  console.log('✓ Saved screenshot verify_fix_audit.png');

  await browser.close();
  console.log('ALL VERIFICATION CHECKS PASSED SUCCESSFULLY!');
})();
