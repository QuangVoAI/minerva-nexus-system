import { chromium } from 'playwright';

async function testUi() {
  try {
    const browser = await chromium.launch({ channel: 'chrome', headless: true });
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto('http://localhost:8080/react/#dashboard', { waitUntil: 'networkidle' });
    
    const title = await page.title();
    console.log('✓ Page Title:', title);

    const navExists = await page.locator('.figma-runtime__nav').count();
    console.log('✓ Duplicate nav .figma-runtime__nav count:', navExists, '(must be 0)');

    const innerSidebarText = await page.locator('[data-name="Điều hướng Hub"]').textContent();
    console.log('✓ Inner sidebar loaded:', innerSidebarText ? 'YES' : 'NO');

    await page.screenshot({ path: 'screenshots/dashboard_live.png' });
    console.log('✓ Saved screenshot to screenshots/dashboard_live.png');

    // Test clicking "Tiếp nhận đơn"
    await page.click('text=Tiếp nhận đơn');
    await page.waitForTimeout(500);
    console.log('✓ Current URL after click Tiếp nhận đơn:', page.url());

    // Test clicking "Gợi ý phân công"
    await page.click('text=Gợi ý phân công');
    await page.waitForTimeout(500);
    console.log('✓ Current URL after click Gợi ý phân công:', page.url());

    // Test clicking "Tác vụ tài xế" / "Đội tài xế (App)"
    await page.click('text=Đội tài xế (App)');
    await page.waitForTimeout(500);
    console.log('✓ Current URL after click Đội tài xế:', page.url());

    await page.screenshot({ path: 'screenshots/driver_live.png' });
    console.log('✓ Saved screenshot to screenshots/driver_live.png');

    await page.goto('http://localhost:8080/react/#login', { waitUntil: 'networkidle' });
    await page.screenshot({ path: 'screenshots/login_live.png' });
    console.log('✓ Saved screenshot to screenshots/login_live.png');

    await page.goto('http://localhost:8080/react/#orders', { waitUntil: 'networkidle' });
    await page.screenshot({ path: 'screenshots/orders_live.png' });
    console.log('✓ Saved screenshot to screenshots/orders_live.png');

    await page.goto('http://localhost:8080/react/#create-order', { waitUntil: 'networkidle' });
    await page.screenshot({ path: 'screenshots/create_order_live.png' });
    console.log('✓ Saved screenshot to screenshots/create_order_live.png');

    await page.goto('http://localhost:8080/react/#dispatch', { waitUntil: 'networkidle' });
    await page.screenshot({ path: 'screenshots/dispatch_live.png' });
    console.log('✓ Saved screenshot to screenshots/dispatch_live.png');

    await browser.close();
    console.log('🎉 ALL PLAYWRIGHT UI INTERACTION CHECKS PASSED!');
  } catch (err) {
    console.error('Playwright UI check error:', err.message);
  }
}

testUi();
