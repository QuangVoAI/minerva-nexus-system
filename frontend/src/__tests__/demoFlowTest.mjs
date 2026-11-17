// Live acceptance check. Start Spring Boot and connect it to a demo MongoDB first.
// Run: npm run test:e2e
const baseUrl = process.env.MINERVA_API_URL || 'http://localhost:8081';
const hubId = 'HUB01';
const operator = 'DISPATCHER_WEB';
const stamp = `${Date.now()}`.slice(-8);

async function request(path, options = {}) {
  const response = await fetch(`${baseUrl}${path}`, {
    ...options,
    headers: {'Content-Type': 'application/json', 'X-Hub-Id': hubId, ...(options.headers || {})},
  });
  const body = response.status === 204 ? null : await response.json().catch(() => null);
  if (!response.ok) throw new Error(`${options.method || 'GET'} ${path}: ${response.status} ${JSON.stringify(body)}`);
  return body;
}
function assert(ok, message) { if (!ok) throw new Error(message); }

async function run() {
  console.log('MINERVA NEXUS — LIVE ACCEPTANCE CHECK');
  console.log('✓ API health:', await request('/api/health'));
  // Isolated support data: the check does not rely on a Figma screen's sample records.
  const area = `DEMO-${stamp}`;
  const driver = await request('/api/drivers', {method: 'POST', headers: {'X-Actor-Id': operator}, body: JSON.stringify({name: `Tài xế demo ${stamp}`, area, capacity: 15, active: true, services: ['EXPRESS', 'STANDARD']})});
  const shift = await request('/api/shifts', {method: 'POST', headers: {'X-Actor-Id': operator}, body: JSON.stringify({name: `Ca nghiệm thu ${stamp}`, area, start: new Date(Date.now() - 60_000).toISOString(), end: new Date(Date.now() + 7_200_000).toISOString()})});
  await request(`/api/shifts/${encodeURIComponent(shift.id)}/attendance`, {method: 'POST', headers: {'X-Actor-Id': operator}, body: JSON.stringify({driverId: driver.id, present: true})});

  const trackingCode = `MN-${stamp}ACCEPT`;
  const created = await request('/api/orders', {method: 'POST', headers: {'X-Actor-Id': operator}, body: JSON.stringify({orderCode: `DEMO-${stamp}`, trackingCode, hubId, areaId: area, sender: {name: 'Người gửi Demo', phone: '0901234567', address: 'Hub demo'}, recipient: {name: 'Người nhận Demo', phone: '0907654321', address: 'Địa chỉ demo'}, serviceLevel: 'EXPRESS', slaDeadline: new Date(Date.now() + 3_600_000).toISOString()})});
  const orderId = created.id;
  assert(orderId && created.status === 'PENDING', 'Tạo đơn phải trả về PENDING và id.');
  const ready = await request(`/api/orders/${orderId}/receive`, {method: 'POST', headers: {'X-Actor-Id': operator}});
  assert(ready.status === 'READY_TO_DISPATCH', 'Tiếp nhận phải chuyển READY_TO_DISPATCH.');
  await request(`/api/orders/${orderId}/shift`, {method: 'PUT', headers: {'X-Actor-Id': operator}, body: JSON.stringify({shiftId: shift.id})});
  const proposals = await request('/api/dispatch/proposals', {method: 'POST', headers: {'X-Actor-Id': operator}, body: JSON.stringify({shiftId: shift.id})});
  const proposal = proposals.find((row) => row.orderId === orderId)?.proposal;
  assert(proposal?.id, 'Phải tạo được đề xuất cho đơn và tài xế hợp lệ.');
  await request(`/api/dispatch/proposals/${proposal.id}/approve`, {method: 'POST', headers: {'X-Actor-Id': operator}, body: JSON.stringify({driverId: driver.id, reason: ''})});
  await request(`/api/me/orders/${orderId}/accept`, {method: 'POST', headers: {'X-Actor-Id': driver.id}, body: JSON.stringify({reason: ''})});
  const inTransit = await request(`/api/orders/${orderId}/status?target=IN_TRANSIT`, {method: 'PATCH', headers: {'X-Actor-Id': driver.id}, body: JSON.stringify({})});
  assert(inTransit.status === 'IN_TRANSIT', 'Tài xế phải bắt đầu giao được.');
  const delivered = await request(`/api/orders/${orderId}/status?target=DELIVERED`, {method: 'PATCH', headers: {'X-Actor-Id': driver.id}, body: JSON.stringify({})});
  assert(delivered.status === 'DELIVERED', 'Đơn phải giao thành công được.');
  const timeline = await request(`/api/orders/${orderId}/timeline`);
  assert(timeline.length >= 5 && timeline.at(-1).toStatus === 'DELIVERED', 'Timeline nội bộ phải kết thúc DELIVERED.');
  const metrics = await request('/api/analytics');
  assert(metrics.deliveredCount >= 1, 'KPI phải phản ánh đơn đã giao.');
  const audit = await request(`/api/audit?q=${encodeURIComponent(trackingCode)}`);
  assert(audit.length >= 1, 'Audit nội bộ phải truy vết được đơn đã hoàn tất.');
  console.log(`✓ PASS: ${trackingCode}; ${timeline.length} mốc; ${audit.length} audit record; KPI delivered=${metrics.deliveredCount}.`);
}
run().catch((error) => { console.error(`✗ LIVE CHECK FAILED: ${error.message}`); process.exit(1); });
