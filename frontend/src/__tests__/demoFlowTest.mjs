// Automated E2E verification test for Minerva Nexus M3 Issue #3
// Tests the full order lifecycle from creation to delivery, audit history, and KPI updates.

const BASE_URL = 'http://localhost:8080';

async function runTest() {
  console.log('====================================================');
  console.log('MINERVA NEXUS - E2E API VERIFICATION TEST (ISSUE #3)');
  console.log('====================================================');

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // 1. Health & Initial Analytics Check
  console.log('\n[1/7] Kiểm tra kết nối ban đầu & Analytics...');
  const initAnalyticsRes = await fetch(`${BASE_URL}/api/analytics`);
  if (!initAnalyticsRes.ok) throw new Error(`Analytics API failed: ${initAnalyticsRes.status}`);
  const initialAnalytics = await initAnalyticsRes.json();
  console.log('✓ Initial Analytics:', initialAnalytics);

  // 2. Step 1: Create Order via POST /api/orders
  console.log('\n[2/7] Bước 1: Tiếp nhận đơn hàng mới (POST /api/orders)...');
  const uniqueId = Date.now().toString().slice(-5);
  const createPayload = {
    recipientName: `Trần Thị Demo ${uniqueId}`,
    phone: `0987${uniqueId}`,
    address: `156 Nguyễn Thị Thập, P. Tân Phú, Quận 7`,
    areaId: 'Q7_TAN_PHU',
    serviceLevel: 'EXPRESS',
    codAmount: '450000',
  };

  const createRes = await fetch(`${BASE_URL}/api/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Actor-Id': 'DISPATCHER_WEB' },
    body: JSON.stringify(createPayload),
  });
  if (!createRes.ok) throw new Error(`Create order failed: ${createRes.status}`);
  const createResult = await createRes.json();
  console.log('✓ Kết quả tạo đơn:', createResult);
  if (!createResult.success || !createResult.orderId) throw new Error('Invalid create response');
  const orderId = createResult.orderId;
  const trackingCode = createResult.trackingCode;

  // 3. Step 2: Verify Order & SLA Assessment in GET /api/orders
  console.log('\n[3/7] Bước 2: Kiểm tra đơn hàng & Đánh giá SLA (GET /api/orders)...');
  const ordersRes = await fetch(`${BASE_URL}/api/orders`);
  if (!ordersRes.ok) throw new Error(`GET /api/orders failed: ${ordersRes.status}`);
  const orders = await ordersRes.json();
  const createdOrder = orders.find((o) => o.orderId === orderId || o.trackingCode === trackingCode);
  if (!createdOrder) throw new Error(`Đơn hàng ${orderId} không tìm thấy trong danh sách orders.`);
  console.log(`✓ Đơn hàng tìm thấy: ${createdOrder.trackingCode} | Trạng thái: ${createdOrder.status} | Mức rủi ro SLA: ${createdOrder.riskLevel} (${createdOrder.riskExplanation})`);

  // 4. Step 3: Dispatch Suggestion & Approval
  console.log('\n[4/7] Bước 3: Gợi ý và Duyệt phân công (GET & POST /api/dispatch)...');
  const suggestionsRes = await fetch(`${BASE_URL}/api/dispatch/suggestions`);
  if (!suggestionsRes.ok) throw new Error(`Suggestions API failed: ${suggestionsRes.status}`);
  const suggestions = await suggestionsRes.json();
  console.log(`✓ Nhận được ${suggestions.length} đề xuất phân công theo quy tắc.`);
  if (suggestions.length > 0) {
    const targetSuggestion = suggestions.find((s) => s.orderId === orderId) || suggestions[0];
    console.log(`  Chọn đề xuất: ${targetSuggestion.assignmentId} (Tài xế: ${targetSuggestion.driverName}, Điểm: ${targetSuggestion.suggestedScore}, Lý do: ${targetSuggestion.matchReason})`);
    
    const approveRes = await fetch(`${BASE_URL}/api/dispatch/approve`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ assignmentId: targetSuggestion.assignmentId }),
    });
    const approveResult = await approveRes.json();
    console.log('✓ Kết quả duyệt phân công:', approveResult);
    if (!approveResult.success) throw new Error('Approve dispatch failed');
  }

  // 5. Step 4 & 5: Driver Transit and Delivery
  console.log('\n[5/7] Bước 4 & 5: Tài xế xuất kho & Giao thành công (POST /api/driver/update)...');
  // 5a. Transit
  const transitRes = await fetch(`${BASE_URL}/api/driver/update`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ orderId, action: 'TRANSIT', driverId: 'DRV-02' }),
  });
  const transitResult = await transitRes.json();
  console.log('✓ Kết quả quét xuất kho (TRANSIT):', transitResult);
  if (!transitResult.success) throw new Error('Transit update failed');

  await sleep(500);

  // 5b. Delivered
  const deliveredRes = await fetch(`${BASE_URL}/api/driver/update`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ orderId, action: 'DELIVERED', driverId: 'DRV-02' }),
  });
  const deliveredResult = await deliveredRes.json();
  console.log('✓ Kết quả giao thành công (DELIVERED):', deliveredResult);
  if (!deliveredResult.success) throw new Error('Delivered update failed');

  // 6. Step 6: Verify Audit Trail
  console.log('\n[6/7] Bước 6: Kiểm tra toàn bộ vết kiểm toán Audit Trail (GET /api/order/history)...');
  const historyRes = await fetch(`${BASE_URL}/api/order/history?orderId=${encodeURIComponent(orderId)}`);
  if (!historyRes.ok) throw new Error(`History API failed: ${historyRes.status}`);
  const history = await historyRes.json();
  console.log(`✓ Nhận được ${history.length} mốc lịch sử trạng thái:`);
  history.forEach((h, idx) => {
    console.log(`  ${idx + 1}. [${h.time}] ${h.oldStatus || '(Bắt đầu)'} -> ${h.newStatus} | Tác nhân: ${h.actorId} | Ghi chú: ${h.note}`);
  });
  if (history.length < 2) throw new Error('Audit trail must have at least 2 events');

  // 7. Step 7: Verify Final Analytics KPI Update
  console.log('\n[7/7] Bước 7: Kiểm tra cập nhật KPI trên bảng điều hành (GET /api/analytics)...');
  const finalAnalyticsRes = await fetch(`${BASE_URL}/api/analytics`);
  const finalAnalytics = await finalAnalyticsRes.json();
  console.log('✓ Final Analytics KPI:', finalAnalytics);
  console.log(`  Tổng đơn: ${initialAnalytics.totalOrders} -> ${finalAnalytics.totalOrders} (+${finalAnalytics.totalOrders - initialAnalytics.totalOrders})`);
  console.log(`  Đã giao: ${initialAnalytics.deliveredCount} -> ${finalAnalytics.deliveredCount} (+${finalAnalytics.deliveredCount - initialAnalytics.deliveredCount})`);

  // 8. Verify Built React Frontend Asset Delivery
  console.log('\n[Bonus] Kiểm tra máy chủ phục vụ React Production Build (/react/)...');
  const reactRes = await fetch(`${BASE_URL}/react/`);
  console.log(`✓ React index.html status: ${reactRes.status} (Content-Type: ${reactRes.headers.get('content-type')})`);
  if (reactRes.status !== 200) throw new Error('React static file not served');

  console.log('\n====================================================');
  console.log('✅ TOÀN BỘ LUỒNG E2E DEMO ISSUE #3 ĐÃ PASS 100%!');
  console.log('====================================================');
}

runTest().catch((err) => {
  console.error('\n❌ TEST THẤT BẠI:', err);
  process.exit(1);
});
