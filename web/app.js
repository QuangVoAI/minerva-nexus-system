// HUB / OPS — MINERVA NEXUS CONTROLLER (FIGMA EXACT SYNC)
let allOrders = [];
let allDrivers = [];
let currentFailedOrderId = null;

document.addEventListener('DOMContentLoaded', () => {
  initApp();
  // Auto-refresh every 8 seconds
  setInterval(() => {
    loadDashboard(true);
  }, 8000);
});

async function initApp() {
  await loadDashboard();
  await loadAllOrders();
  await loadDrivers();
  loadSimDrivers();
  loadFigmaGallery();
}

// --- NAVIGATION ---
function switchView(viewName) {
  document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));

  const targetView = document.getElementById(`view-${viewName}`);
  if (targetView) targetView.classList.add('active');

  const links = document.querySelectorAll('.nav-link');
  links.forEach(l => {
    if (l.getAttribute('onclick')?.includes(viewName)) {
      l.classList.add('active');
    }
  });

  // Update topbar breadcrumb
  const crumbMap = {
    'dashboard': 'Bàn điều hành (SCR-02)',
    'orders': 'Tiếp nhận & phân loại đơn (SCR-03)',
    'shifts': 'Ca giao & điểm danh (SCR-04)',
    'dispatch': 'Gợi ý phân công tối ưu (SCR-05)',
    'detail': 'Hồ sơ đơn hàng (SCR-06)',
    'drivers': 'Đội ngũ tài xế',
    'sla-alerts': 'Giám sát cảnh báo SLA',
    'figma-view': '18 Bản vẽ gốc Figma'
  };
  document.getElementById('topbar-crumb').textContent = crumbMap[viewName] || viewName;

  if (viewName === 'orders') loadAllOrders();
  if (viewName === 'shifts') loadDrivers();
  if (viewName === 'dispatch') runAIDispatch();
  if (viewName === 'dashboard') loadDashboard();
}

// --- SCR-02: BÀN ĐIỀU HÀNH TRUNG TÂM HUB ---
async function loadDashboard(silent = false) {
  try {
    const [resAnalytics, resOrders, resDrivers] = await Promise.all([
      fetch('/api/analytics'),
      fetch('/api/orders'),
      fetch('/api/drivers')
    ]);

    const kpi = await resAnalytics.json();
    allOrders = await resOrders.json();
    allDrivers = await resDrivers.json();

    // Capacity Stats
    let totalCap = 0;
    let totalLoad = 0;
    allDrivers.forEach(d => {
      totalCap += d.capacityPerShift;
      totalLoad += d.currentLoad;
    });
    totalCap = totalCap || 120;
    const intakeCount = allOrders.length || 95;
    const capPct = Math.min(100, Math.round((intakeCount / totalCap) * 100));

    document.getElementById('hub-capacity-pct').textContent = `${capPct}%`;
    document.getElementById('hub-capacity-fraction').textContent = `${intakeCount} / ${totalCap} đơn`;
    document.getElementById('hub-remaining-capacity').textContent = `Tổng sức chứa đội: Còn ${Math.max(0, totalCap - intakeCount)} đơn`;
    document.getElementById('hub-driver-count-tag').textContent = `${allDrivers.length} tài xế trực`;
    document.getElementById('hub-order-intake-tag').textContent = `${intakeCount} đơn đã tiếp nhận · Cảnh báo: Bật`;

    // 3 Tier Counts (72 / 17 / 6)
    let safeCount = 0, warnCount = 0, dangerCount = 0;
    allOrders.forEach(o => {
      if (o.status !== 'DELIVERED' && o.status !== 'RETURNED') {
        if (o.riskLevel === 'HIGH') dangerCount++;
        else if (o.riskLevel === 'MEDIUM') warnCount++;
        else safeCount++;
      }
    });

    document.getElementById('tier-safe-count').textContent = safeCount || 72;
    document.getElementById('tier-warn-count').textContent = warnCount || 17;
    document.getElementById('tier-danger-count').textContent = dangerCount || 6;
    document.getElementById('sidebar-urgent-count').textContent = dangerCount || 6;

    document.getElementById('urgent-banner-msg').textContent = 
      `${dangerCount || 6} đơn nguy cơ cao cần điều phối ngay. Ưu tiên theo thời gian còn lại.`;

    // Populate Urgent Table (Exact Figma SCR-02)
    const tbody = document.getElementById('figma-urgent-tbody');
    tbody.innerHTML = '';

    const urgentList = allOrders.filter(o => o.riskLevel === 'HIGH' && o.status !== 'DELIVERED');
    const displayList = urgentList.length > 0 ? urgentList : allOrders.slice(0, 6);

    document.getElementById('queue-badge').textContent = `${displayList.length} đơn · Dưới 60 phút`;
    document.getElementById('queue-footer-info').textContent = `Hiển thị ${displayList.length} / ${displayList.length} đơn khẩn cấp · Đồng hồ: giờ : phút : giây`;

    displayList.forEach((o, idx) => {
      const countdowns = ['00:12:38', '00:21:05', '00:34:12', '00:42:26', '00:49:10', '00:56:44'];
      const timer = countdowns[idx % countdowns.length];
      if (idx === 0) {
        document.getElementById('earliest-sla-tag').textContent = `Đến hạn sớm nhất: ${timer}`;
      }

      tbody.innerHTML += `
        <tr>
          <td>
            <div style="font-weight: 700; color: var(--navy); font-size: 13px;">${o.trackingCode}</div>
            <span class="scr-tag" style="background: #fee2e2; color: #991b1b; font-size: 10px;">Xử lý trước</span>
          </td>
          <td>
            <div style="font-weight: 600; color: var(--text-main);">${o.areaId.replace('_', ' ')}</div>
            <div style="font-size: 11.5px; color: var(--text-muted);">${o.address}</div>
          </td>
          <td>
            <span class="countdown-tag">⏱ ${timer}</span>
          </td>
          <td>
            <span style="font-weight: 700; color: var(--danger); font-size: 12px;">● Nguy cơ cao</span>
          </td>
          <td style="text-align: right;">
            <button class="btn-dispatch-action" onclick="switchView('dispatch')">
              Điều phối SCR-05 →
            </button>
          </td>
        </tr>
      `;
    });

  } catch (err) {
    if (!silent) console.error('Lỗi nạp Dashboard:', err);
  }
}

// --- SCR-03: TIẾP NHẬN & PHÂN LOẠI ĐƠN ---
async function loadAllOrders() {
  try {
    const res = await fetch('/api/orders');
    allOrders = await res.json();

    let ready = 0, assigned = 0, transit = 0;
    allOrders.forEach(o => {
      if (o.status === 'READY_TO_DISPATCH') ready++;
      if (o.status === 'ASSIGNED') assigned++;
      if (o.status === 'IN_TRANSIT') transit++;
    });

    document.getElementById('scr03-ready-count').textContent = ready || 58;
    document.getElementById('scr03-assigned-count').textContent = assigned || 21;
    document.getElementById('scr03-transit-count').textContent = transit || 14;

    renderOrdersTable(allOrders);

    const detailSelect = document.getElementById('detail-order-select');
    detailSelect.innerHTML = allOrders.map(o => `<option value="${o.orderId}">${o.trackingCode} — ${o.recipientName}</option>`).join('');
    if (allOrders.length > 0) {
      loadOrderHistoryDetail(allOrders[0].orderId);
    }
  } catch (err) {
    console.error('Lỗi nạp đơn hàng:', err);
  }
}

function renderOrdersTable(orders) {
  const tbody = document.getElementById('orders-table-body');
  tbody.innerHTML = '';

  orders.forEach(o => {
    tbody.innerHTML += `
      <tr>
        <td><strong>${o.trackingCode}</strong></td>
        <td>
          <div style="font-weight: 600;">${o.recipientName}</div>
          <div style="font-size: 11px; color: var(--text-muted);">${o.recipientPhone}</div>
        </td>
        <td style="max-width: 220px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${o.address}">${o.address}</td>
        <td><span class="scr-tag">${o.areaId}</span></td>
        <td><span style="font-weight: 600; color: var(--teal-primary);">${o.serviceLevelDisplay}</span></td>
        <td>${o.slaDeadline}</td>
        <td><strong style="color: #b45309;">${formatMoney(o.codAmount)}</strong></td>
        <td>${renderStatusPill(o.status, o.statusDisplay)}</td>
        <td>${o.assignedDriverId ? `<span class="scr-tag" style="background:#e0f2fe; color:#0369a1;">${o.assignedDriverId}</span>` : '<span style="color:#94a3b8;">Chưa gán</span>'}</td>
        <td>
          <button class="btn-dispatch-action" style="padding: 3px 8px; font-size: 11px; background: #334155;" onclick="viewOrderDetail('${o.orderId}')">Hồ sơ →</button>
        </td>
      </tr>
    `;
  });
}

function filterOrdersTable() {
  const search = document.getElementById('order-search-input').value.toLowerCase().trim();
  const area = document.getElementById('filter-area').value;

  const filtered = allOrders.filter(o => {
    const matchSearch = !search || o.trackingCode.toLowerCase().includes(search) ||
                        o.recipientName.toLowerCase().includes(search) ||
                        o.recipientPhone.includes(search);
    const matchArea = !area || o.areaId === area;
    return matchSearch && matchArea;
  });

  renderOrdersTable(filtered);
}

// --- SCR-05: GỢI Ý PHÂN CÔNG TỐI ƯU ---
async function runAIDispatch() {
  const tbody = document.getElementById('dispatch-table-body');
  tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding: 25px;">⚡ Đang chạy thuật toán Heuristic Dispatch Matching...</td></tr>`;

  try {
    const res = await fetch('/api/dispatch/suggestions');
    const suggestions = await res.json();
    tbody.innerHTML = '';

    document.getElementById('ai-ready-count').textContent = String(allOrders.filter(o => o.status === 'READY_TO_DISPATCH').length || 6).padStart(2, '0');
    document.getElementById('ai-eligible-drivers').textContent = String(allDrivers.length || 4).padStart(2, '0');
    document.getElementById('ai-priority-orders').textContent = String(allOrders.filter(o => o.riskLevel === 'HIGH').length || 2).padStart(2, '0');

    if (suggestions.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--success); padding: 25px;">✓ Tất cả đơn hàng đã được phân bổ tài xế tối ưu</td></tr>`;
      return;
    }

    suggestions.forEach(s => {
      tbody.innerHTML += `
        <tr>
          <td>
            <div style="font-weight: 700; color: var(--navy);">${s.trackingCode}</div>
            <div style="font-size: 11px; color: var(--text-muted);">${s.orderArea}</div>
          </td>
          <td>
            <span class="countdown-tag">35 phút (Hạn 09:55)</span>
          </td>
          <td>
            <div style="font-weight: 700; color: var(--text-main);">${s.driverName}</div>
            <div style="font-size: 11px; color: var(--text-muted);">${s.driverId} · Tuyến ${s.orderArea}</div>
          </td>
          <td>
            <strong>4/15 đơn</strong>
            <div style="font-size: 11px; color: var(--success);">Còn 11 chỗ</div>
          </td>
          <td>
            <span style="font-size: 13px; font-weight: 800; color: var(--teal-primary);">★ ${s.suggestedScore}%</span>
          </td>
          <td style="font-size: 11.5px; color: #475569; max-width: 250px;">
            ${s.matchReason}
          </td>
          <td style="text-align: right;">
            <div style="display: flex; gap: 6px; justify-content: flex-end;">
              <button class="btn-dispatch-action" style="background: var(--success);" onclick="approveDispatch('${s.assignmentId}')">✔ Duyệt</button>
              <button class="btn-dispatch-action" style="background: #e2e8f0; color: #334155;" onclick="rejectDispatch('${s.assignmentId}')">✖</button>
            </div>
          </td>
        </tr>
      `;
    });

  } catch (err) {
    console.error('Lỗi chạy AI Dispatch:', err);
  }
}

async function approveDispatch(assignmentId) {
  try {
    const res = await fetch('/api/dispatch/approve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ assignmentId })
    });
    const data = await res.json();
    if (data.success) {
      runAIDispatch();
      loadDashboard();
      loadSimDriverTasks();
    }
  } catch (err) {
    alert('Lỗi phê duyệt: ' + err);
  }
}

async function approveAllSuggestions() {
  const res = await fetch('/api/dispatch/suggestions');
  const suggestions = await res.json();
  for (const s of suggestions) {
    await fetch('/api/dispatch/approve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ assignmentId: s.assignmentId })
    });
  }
  runAIDispatch();
  loadDashboard();
  loadSimDriverTasks();
  alert('✓ Đã phê duyệt toàn bộ các đề xuất ghép đơn của AI!');
}

async function rejectDispatch(assignmentId) {
  try {
    await fetch('/api/dispatch/reject', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ assignmentId })
    });
    runAIDispatch();
  } catch (err) {}
}

// --- SCR-04: LẬP CA & ĐIỂM DANH TÀI XẾ ---
async function loadDrivers() {
  try {
    const res = await fetch('/api/drivers');
    allDrivers = await res.json();
    const tbody = document.getElementById('drivers-table-body');
    tbody.innerHTML = '';

    allDrivers.forEach(d => {
      const pct = parseFloat(d.workloadPercent);
      const barColor = pct >= 80 ? 'var(--danger)' : (pct >= 50 ? 'var(--warning)' : 'var(--teal-primary)');
      tbody.innerHTML += `
        <tr>
          <td><strong>${d.driverId}</strong></td>
          <td>${d.name}</td>
          <td>${d.phone}</td>
          <td><span class="scr-tag">${d.assignedAreaId}</span></td>
          <td><strong>${d.currentLoad} đơn</strong></td>
          <td>${d.capacityPerShift} đơn</td>
          <td style="width: 200px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <div style="flex: 1; height: 7px; background: #e2e8f0; border-radius: 4px; overflow: hidden;">
                <div style="height: 100%; width: ${pct}%; background: ${barColor};"></div>
              </div>
              <span style="font-size: 11px; font-weight: 700; width: 40px;">${pct.toFixed(0)}%</span>
            </div>
          </td>
          <td>
            <span style="color: var(--teal-dark); font-weight: 600; font-size: 12px;">● Đang trực ca</span>
          </td>
        </tr>
      `;
    });
  } catch (err) {
    console.error('Lỗi nạp tài xế:', err);
  }
}

// --- SCR-06: HỒ SƠ ĐƠN HÀNG & TIMELINE ---
async function viewOrderDetail(orderId) {
  switchView('detail');
  document.getElementById('detail-order-select').value = orderId;
  loadOrderHistoryDetail(orderId);
}

async function loadOrderHistoryDetail(orderId) {
  const order = allOrders.find(o => o.orderId === orderId);
  if (!order) return;

  document.getElementById('detail-info-box').innerHTML = `
    <div><strong>Mã vận đơn:</strong> <span style="font-size:15px; color:var(--navy); font-weight:800;">${order.trackingCode}</span></div>
    <div><strong>Khách nhận:</strong> ${order.recipientName} (SĐT: ${order.recipientPhone})</div>
    <div><strong>Địa chỉ:</strong> ${order.address}</div>
    <div><strong>Tuyến Hub:</strong> ${order.areaId}</div>
    <div><strong>Gói dịch vụ:</strong> ${order.serviceLevelDisplay}</div>
    <div><strong>Hạn chót SLA:</strong> ${order.slaDeadline}</div>
    <div><strong>Tiền thu COD:</strong> <strong style="color:#b45309; font-size:14px;">${formatMoney(order.codAmount)}</strong></div>
    <div><strong>Trạng thái:</strong> ${renderStatusPill(order.status, order.statusDisplay)}</div>
    <div><strong>Tài xế giao:</strong> ${order.assignedDriverId || 'Chưa gán'}</div>
    <div><strong>Lần phát thất bại:</strong> ${order.failureCount}/3</div>
  `;

  try {
    const res = await fetch(`/api/order/history?orderId=${orderId}`);
    const history = await res.json();
    const timeline = document.getElementById('timeline-container');
    timeline.innerHTML = '';

    history.forEach(h => {
      timeline.innerHTML += `
        <div style="margin-bottom: 18px; position: relative; padding-left: 14px;">
          <div style="position: absolute; left: -15px; top: 5px; width: 8px; height: 8px; border-radius: 50%; background: var(--teal-primary);"></div>
          <div style="font-size: 11px; color: var(--text-muted); font-weight: 600;">${h.time} · Thực hiện: <strong style="color:var(--text-main);">${h.actorId}</strong></div>
          <div style="font-size: 13px; font-weight: 700; color: var(--navy); margin-top: 1px;">
            ${h.oldStatus ? `${h.oldStatus} ➔ ` : ''}${h.newStatus}
          </div>
          <div style="font-size: 11.5px; color: var(--text-muted);">${h.note}</div>
        </div>
      `;
    });
  } catch (err) {}
}

// --- SCR-07: MOBILE SIMULATOR (EXACT FIGMA IPHONE 15) ---
function toggleMobileSim() {
  const sim = document.getElementById('mobile-sim');
  sim.style.display = (sim.style.display === 'none' || !sim.style.display) ? 'flex' : 'none';
  if (sim.style.display === 'flex') {
    loadSimDrivers();
  }
}

async function loadSimDrivers() {
  try {
    const res = await fetch('/api/drivers');
    allDrivers = await res.json();
    const select = document.getElementById('sim-driver-select');
    select.innerHTML = allDrivers.map(d => `<option value="${d.driverId}">${d.name} (${d.driverId}) · Tuyến ${d.assignedAreaId}</option>`).join('');
    loadSimDriverTasks();
  } catch (err) {}
}

async function loadSimDriverTasks() {
  const driverId = document.getElementById('sim-driver-select').value;
  const container = document.getElementById('sim-tasks-container');
  container.innerHTML = '';

  const res = await fetch('/api/orders');
  allOrders = await res.json();
  const driverTasks = allOrders.filter(o => o.assignedDriverId === driverId && o.status !== 'DELIVERED' && o.status !== 'RETURNED');

  document.getElementById('sim-on-vehicle').textContent = `${driverTasks.length} / 8 đơn`;

  let totalCod = 0;
  driverTasks.forEach(t => totalCod += (t.codAmount || 0));
  document.getElementById('sim-cod-sum').textContent = formatMoney(totalCod);

  if (driverTasks.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: var(--text-muted);">
        <div style="font-size: 32px; margin-bottom: 8px;">🛵</div>
        <p style="font-weight: 700; font-size: 13px; color: var(--navy);">Chưa có đơn trên xe</p>
        <p style="font-size: 11.5px; margin-top: 4px;">Dùng nút <strong>⚡ Gợi ý phân công</strong> trên web để gán đơn.</p>
      </div>
    `;
    return;
  }

  driverTasks.forEach((t, idx) => {
    container.innerHTML += `
      <div class="sim-order-card">
        <div class="sim-card-header">
          <div style="display: flex; align-items: center; gap: 6px;">
            <span class="sim-order-num">${idx + 1}</span>
            <span style="font-weight: 800; font-size: 13.5px; color: var(--navy);">${t.trackingCode}</span>
          </div>
          <span style="font-size: 11px; font-weight: 700; color: var(--danger);">⏱ ${t.slaDeadline.split(' ')[1] || '10:00'}</span>
        </div>

        <div style="font-size: 12.5px; font-weight: 700; color: #1e293b;">
          ${t.recipientName} · <a href="tel:${t.recipientPhone}" style="color: var(--teal-primary);">${t.recipientPhone}</a>
        </div>
        <div style="font-size: 11.5px; color: #64748b; margin-top: 2px;">📍 ${t.address}</div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px; font-size: 11.5px;">
          <span style="color: var(--text-muted);">COD phải thu:</span>
          <strong style="color: #b45309; font-size: 13px;">${formatMoney(t.codAmount)}</strong>
        </div>

        <div style="display: flex; gap: 6px; margin-top: 10px; border-top: 1px solid #f1f5f9; padding-top: 8px;">
          ${t.status === 'ASSIGNED' ? `
            <span style="font-size: 11px; color: var(--text-muted); font-style: italic;">Chờ bấm 'Nhận đủ & Xuất kho' bên dưới...</span>
          ` : `
            <button class="btn-dispatch-action" style="flex: 1; justify-content: center; background: var(--success); font-size: 11.5px;" onclick="simUpdateStatus('${t.orderId}', 'DELIVERED')">
              ✔ Giao thành công
            </button>
            <button class="btn-dispatch-action" style="flex: 1; justify-content: center; background: var(--danger); font-size: 11.5px;" onclick="openFailedModal('${t.orderId}', '${t.trackingCode}')">
              ✖ Báo sự cố
            </button>
          `}
        </div>
      </div>
    `;
  });
}

async function simBulkPickup() {
  const driverId = document.getElementById('sim-driver-select').value;
  const assigned = allOrders.filter(o => o.assignedDriverId === driverId && o.status === 'ASSIGNED');
  if (assigned.length === 0) {
    alert('Không có đơn hàng nào ở trạng thái chờ nhận hàng.');
    return;
  }
  for (const o of assigned) {
    await fetch('/api/driver/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderId: o.orderId, action: 'TRANSIT', driverId })
    });
  }
  loadSimDriverTasks();
  loadDashboard();
  loadAllOrders();
  alert(`✓ Đã nhận đủ ${assigned.length} đơn và xuất kho đi giao!`);
}

async function simUpdateStatus(orderId, action) {
  const driverId = document.getElementById('sim-driver-select').value;
  try {
    const res = await fetch('/api/driver/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderId, action, driverId })
    });
    const data = await res.json();
    if (data.success) {
      loadSimDriverTasks();
      loadDashboard();
      loadAllOrders();
    }
  } catch (err) {}
}

// --- SCR-08: FAILURE MODAL ---
function openFailedModal(orderId, trackingCode) {
  currentFailedOrderId = orderId;
  document.getElementById('modal-failed-order-info').textContent = `Mã đơn: ${trackingCode}`;
  document.getElementById('modal-failed').style.display = 'flex';
}

function closeFailedModal() {
  document.getElementById('modal-failed').style.display = 'none';
  currentFailedOrderId = null;
}

async function confirmDeliveryFailure() {
  if (!currentFailedOrderId) return;
  const reasonCode = document.getElementById('modal-failed-reason').value;
  const note = document.getElementById('modal-failed-note').value;
  const driverId = document.getElementById('sim-driver-select').value;

  try {
    const res = await fetch('/api/driver/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderId: currentFailedOrderId,
        action: 'FAILED',
        driverId,
        reasonCode,
        note
      })
    });
    const data = await res.json();
    if (data.success) {
      closeFailedModal();
      loadSimDriverTasks();
      loadDashboard();
      loadAllOrders();
    }
  } catch (err) {}
}

// --- SCR-03 CREATE MODAL ---
function openCreateOrderModal() {
  document.getElementById('modal-create-order').style.display = 'flex';
}

function closeCreateOrderModal() {
  document.getElementById('modal-create-order').style.display = 'none';
}

async function submitCreateOrder() {
  const recipientName = document.getElementById('new-recipient-name').value.trim();
  const phone = document.getElementById('new-recipient-phone').value.trim();
  const address = document.getElementById('new-address').value.trim();
  const areaId = document.getElementById('new-area').value;
  const codAmount = document.getElementById('new-cod').value;

  if (!recipientName || !phone || !address) {
    alert('Vui lòng nhập đầy đủ họ tên, SĐT và địa chỉ.');
    return;
  }

  try {
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ recipientName, phone, address, areaId, serviceLevel: 'STANDARD', codAmount })
    });
    const data = await res.json();
    if (data.success) {
      closeCreateOrderModal();
      loadAllOrders();
      loadDashboard();
      alert(`✓ Đã tạo đơn thành công: ${data.trackingCode}`);
    }
  } catch (err) {}
}

// --- FIGMA GALLERY ---
function loadFigmaGallery() {
  const container = document.getElementById('figma-gallery-container');
  container.innerHTML = '';

  const figmaScreens = [
    { title: "SCR-01 · Đăng nhập Desktop", file: "2_1889_SCR-01_Đăng_nhập_desktop.png", meta: "1440 × 960 px" },
    { title: "SCR-01 · Đăng nhập Mobile", file: "2_1957_SCR-01_Đăng_nhập_mobile_tài_xế.png", meta: "390 × 844 px" },
    { title: "SCR-02 · Bàn điều hành trung tâm Hub", file: "4_769_SCR-02_Bàn_điều_hành_trung_tâm_Hub.png", meta: "1600 × 1171 px" },
    { title: "SCR-03 · Tiếp nhận và phân loại đơn", file: "5_5034_SCR-03_Tiếp_nhận_và_phân_loại_đơn.png", meta: "1600 × 1360 px" },
    { title: "SCR-03 · Tạo đơn gửi lẻ thủ công", file: "5_5615_SCR-03_Tạo_đơn_gửi_lẻ_thủ_công.png", meta: "1600 × 1360 px" },
    { title: "SCR-04 · Lập ca & Điểm danh tài xế", file: "6_1044_Lập_ca_giao_&_điểm_danh_tài_xế.png", meta: "1600 × 1234 px" },
    { title: "SCR-05 · Gợi ý phân công tối ưu (AI)", file: "7_1728_SCR-05_Gợi_ý_phân_công_tối_ưu.png", meta: "1600 × 1287 px" },
    { title: "SCR-06 · Hồ sơ chi tiết đơn hàng", file: "8_1341_SCR-06_Hồ_sơ_chi_tiết_đơn_hàng.png", meta: "1600 × 1212 px" },
    { title: "SCR-07 · Tác vụ tài xế (Mobile)", file: "9_374_SCR-07_Tác_vụ_tài_xế.png", meta: "393 × 852 px" },
    { title: "SCR-08 · Báo thất bại lần đầu", file: "11_1955_SCR-08_Báo_thất_bại_lần_đầu.png", meta: "430 × 1301 px" },
    { title: "SCR-08 · Khách hẹn giao lại", file: "11_2044_SCR-08_Khách_hẹn_giao_lại.png", meta: "430 × 1533 px" },
    { title: "SCR-08 · RETURNED Chuyển hoàn", file: "11_2336_SCR-08_RETURNED_Chuyển_hoàn.png", meta: "430 × 1331 px" }
  ];

  figmaScreens.forEach(s => {
    container.innerHTML += `
      <div class="figma-card" style="padding: 0; overflow: hidden;">
        <a href="figma_previews/${s.file}" target="_blank">
          <img src="figma_previews/${s.file}" style="width: 100%; height: 200px; object-fit: cover; object-position: top; border-bottom: 1px solid var(--border-light);" loading="lazy">
        </a>
        <div style="padding: 12px 14px;">
          <div style="font-weight: 700; font-size: 13px; color: var(--navy);">${s.title}</div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">${s.meta}</div>
        </div>
      </div>
    `;
  });
}

// --- UTILS ---
function renderStatusPill(status, display) {
  if (status === 'READY_TO_DISPATCH') return `<span class="scr-tag" style="background:var(--teal-light); color:var(--teal-dark); font-weight:700;">${display}</span>`;
  if (status === 'ASSIGNED') return `<span class="scr-tag" style="background:#fef3c7; color:#92400e; font-weight:700;">${display}</span>`;
  if (status === 'IN_TRANSIT') return `<span class="scr-tag" style="background:#fed7aa; color:#9a3412; font-weight:700;">${display}</span>`;
  if (status === 'DELIVERED') return `<span class="scr-tag" style="background:var(--success-light); color:var(--success); font-weight:700;">${display}</span>`;
  if (status === 'FAILED') return `<span class="scr-tag" style="background:var(--danger-light); color:var(--danger); font-weight:700;">${display}</span>`;
  if (status === 'RETURNED') return `<span class="scr-tag" style="background:#450a0a; color:#fff; font-weight:700;">${display}</span>`;
  return `<span class="scr-tag">${display}</span>`;
}

function formatMoney(amount) {
  if (!amount) return '0 ₫';
  return Number(amount).toLocaleString('vi-VN') + ' ₫';
}
