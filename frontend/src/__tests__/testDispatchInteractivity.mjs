import { chromium } from 'playwright';

async function testDispatchInteractivity() {
  console.log('====================================================');
  console.log('   KIỂM THỬ TƯƠNG TÁC GỢI Ý PHÂN CÔNG (#dispatch)   ');
  console.log('====================================================\n');

  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });

  try {
    console.log('[1/7] Điều hướng đến #dispatch...');
    await page.goto('http://localhost:8080/react/#dispatch', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(600);

    // 1. Kiểm tra trạng thái ban đầu
    const initialSelectedText = await page.locator('text=Đã chọn 4 / 6').first().innerText();
    console.log(`  ✓ Đếm ban đầu: ${initialSelectedText}`);

    const rightPanelHeader = await page.locator('text=Vì sao khớp 96%?').first().innerText();
    console.log(`  ✓ Chi tiết bên phải ban đầu: ${rightPanelHeader}`);

    // 2. Check vào dòng 5 (MNX000023)
    console.log('\n[2/7] Check vào đơn MNX000023...');
    const row5Checkbox = page.locator('[data-name="Đề xuất phân công"]').nth(4).locator('button').first();
    await row5Checkbox.click();
    await page.waitForTimeout(300);

    const updatedCountText = await page.locator('p:has-text("Đã chọn")').first().innerText();
    console.log(`  ✓ Đếm sau khi check dòng 5: ${updatedCountText}`);
    if (!updatedCountText.includes('5 / 6')) {
      throw new Error(`Kỳ vọng 'Đã chọn 5 / 6' nhưng nhận được '${updatedCountText}'`);
    }

    // 3. Uncheck dòng 1 (MNX000001)
    console.log('\n[3/7] Uncheck đơn MNX000001...');
    const row1Checkbox = page.locator('[data-name="Đề xuất phân công"]').nth(0).locator('button').first();
    await row1Checkbox.click();
    await page.waitForTimeout(300);

    const afterUncheckText = await page.locator('p:has-text("Đã chọn")').first().innerText();
    console.log(`  ✓ Đếm sau khi uncheck dòng 1: ${afterUncheckText}`);
    if (!afterUncheckText.includes('4 / 6')) {
      throw new Error(`Kỳ vọng 'Đã chọn 4 / 6' nhưng nhận được '${afterUncheckText}'`);
    }

    // 4. Bấm "Bỏ chọn"
    console.log('\n[4/7] Bấm "Bỏ chọn" ở thanh dưới...');
    const uncheckAllBtn = page.locator('button:has-text("Bỏ chọn")');
    await uncheckAllBtn.click();
    await page.waitForTimeout(300);

    const zeroCountText = await page.locator('p:has-text("Đã chọn")').first().innerText();
    console.log(`  ✓ Đếm sau khi Bỏ chọn: ${zeroCountText}`);
    if (!zeroCountText.includes('0 / 6')) {
      throw new Error(`Kỳ vọng 'Đã chọn 0 / 6' nhưng nhận được '${zeroCountText}'`);
    }

    // 5. Bấm Header Checkbox để chọn tất cả
    console.log('\n[5/7] Bấm Header Checkbox để chọn tất cả 6 đơn...');
    const headerCheckbox = page.locator('[data-name="Chọn tất cả"] button');
    await headerCheckbox.click();
    await page.waitForTimeout(300);

    const allCheckedText = await page.locator('p:has-text("Đã chọn")').first().innerText();
    console.log(`  ✓ Đếm sau khi chọn tất cả: ${allCheckedText}`);
    if (!allCheckedText.includes('6 / 6')) {
      throw new Error(`Kỳ vọng 'Đã chọn 6 / 6' nhưng nhận được '${allCheckedText}'`);
    }

    // 6. Sổ xuống chọn tài xế trên dòng 1
    console.log('\n[6/7] Sổ xuống đổi tài xế đơn 1 sang DRV-02 (Trần Quốc Bình)...');
    const row1DriverSelect = page.locator('[data-name="Đề xuất phân công"]').nth(0).locator('select');
    await row1DriverSelect.selectOption('DRV-02');
    await page.waitForTimeout(500);

    const toastNotice = await page.locator('text=Đã đổi tài xế đơn MNX000001').first().innerText();
    console.log(`  ✓ Thông báo xác nhận: ${toastNotice}`);

    // 7. Bấm dòng 2 để xem chi tiết bên phải & đổi tài xế bên phải
    console.log('\n[7/7] Bấm dòng 2 (MNX000006) để chuyển chi tiết độ khớp bên phải...');
    const row2 = page.locator('[data-name="Đề xuất phân công"]').nth(1);
    await row2.click();
    await page.waitForTimeout(300);

    const newRightHeader = await page.locator('text=Vì sao khớp 91%?').first().innerText();
    console.log(`  ✓ Bảng bên phải đã cập nhật: ${newRightHeader}`);

    const rightPanelDriverSelect = page.locator('[data-name="Điều chỉnh tài xế"] select');
    await rightPanelDriverSelect.selectOption('DRV-04');
    await page.waitForTimeout(500);

    const rightToast = await page.locator('text=Đã đổi tài xế đơn MNX000006').first().innerText();
    console.log(`  ✓ Đổi tài xế từ bảng bên phải thành công: ${rightToast}`);

    console.log('\n====================================================');
    console.log('   TẤT CẢ TÍNH NĂNG CHECK/UNCHECK/SỔ TÀI XẾ ĐỀU PASS!  ');
    console.log('====================================================');
  } finally {
    await browser.close();
  }
}

testDispatchInteractivity().catch((err) => {
  console.error('Lỗi kiểm thử:', err);
  process.exit(1);
});
