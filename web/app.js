// MINERVA NEXUS — FRONTEND CONTROLLER
let allOrders = [];
let allDrivers = [];
let currentFailedOrderId = null;

document.addEventListener('DOMContentLoaded', () => {
  initApp();
  // Auto-refresh every 8 seconds for real-time reactivity
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

  // Highlight active nav item
  const links = document.querySelectorAll('.nav-link');
  links.forEach(l => {
    if (l.getAttribute('onclick')?.includes(viewName)) {
      l.classList.add('active');
    }
  });

  if (viewName === 'orders') loadAllOrders();
  if (viewName === 'shifts') loadDrivers();
  if (viewName === 'dispatch') runAIDispatch();
  if (viewName === 'dashboard') loadDashboard();
}

// --- VIEW 1: DASHBOARD (SCR-02) ---
async function loadDashboard(silent = false) {
  try {
    const [resAnalytics, resOrders] = await Promise.all([
      fetch('/api/analytics'),
      fetch('/api/orders')
    ]);

    const kpi = await resAnalytics.json();
    allOrders = await resOrders.json();

    document.getElementById('kpi-total').textContent = kpi.totalOrders;
    document.getElementById('kpi-success-rate').textContent = kpi.successRate.toFixed(1) + '%';
    document.getElementById('kpi-sla-rate').textContent = kpi.slaRate.toFixed(1) + '%';
    document.getElementById('kpi-high-risk').textContent = kpi.highRiskCount;

    document.getElementById('sidebar-urgent-count').textContent = kpi.highRiskCount;

    // SLA Gauge Calculation
    let safeCount = 0, warnCount = 0, dangerCount = 0;
    allOrders.forEach(o => {
      if (o.status !== 'DELIVERED' && o.status !== 'RETURNED') {
        if (o.riskLevel === 'HIGH') dangerCount++;
        else if (o.riskLevel === 'MEDIUM') warnCount++;
        else safeCount++;
      }
    });

    const totalActive = safeCount + warnCount + dangerCount || 1;
    const safePct = (safeCount / totalActive) * 100;
    const warnPct = (warnCount / totalActive) * 100;
    const dangerPct = (dangerCount / totalActive) * 100;

    document.getElementById('gauge-safe').style.width = safePct + '%';
    document.getElementById('gauge-warning').style.width = warnPct + '%';
    document.getElementById('gauge-danger').style.width = dangerPct + '%';
    document.getElementById('gauge-text').textContent = 
      `${dangerCount} đơn nguy cơ cao / ${warnCount} đơn cận hạn / ${safeCount} đơn an toàn`;

    // Urgent Table
    const urgentTbody = document.getElementById('urgent-table-body');
    const urgentOrders = allOrders.filter(o => o.riskLevel === 'HIGH' && o.status !== 'DELIVERED' && o.status !== 'RETURNED');
    
    urgentTbody.innerHTML = '';
    if (urgentOrders.length === 0) {
      urgentTbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color: #16a34a; padding: 20px;">✓ Không có đơn hàng nào bị đe dọa trễ hạn SLA</td></tr>`;
    } else {
      urgentOrders.forEach(o => {
        urgentTbody.innerHTML += `
          <tr>
            <td><strong>${o.trackingCode}</strong></td>
            <td>${o.recipientName} (${o.areaId})</td>
            <td><span class="tag tag-info">${o.serviceLevelDisplay}</span></td>
            <td>${o.slaDeadline}</td>
            <td><span class="tag tag-danger">🔴 NGUY CƠ CAO (${(o.riskProbability * 100).toFixed(0)}%)</span></td>
            <td style="font-size: 12px; color: #b91c1c;">${o.riskExplanation}</td>
            <td>${renderStatusTag(o.status, o.statusDisplay)}</td>
          </tr>
        `;
      });
    }

  } catch (err) {
    if (!silent) console.error('Lỗi nạp Dashboard:', err);
  }
}

// --- VIEW 2: ORDERS (SCR-03) ---
async function loadAllOrders() {
  try {
    const res = await fetch('/api/orders');
    allOrders = await res.json();
    renderOrdersTable(allOrders);

    // Also populate select in SCR-06 detail
    const detailSelect = document.getElementById('detail-order-select');
    detailSelect.innerHTML = allOrders.map(o => `<option value="${o.orderId}">${o.trackingCode} - ${o.recipientName}</option>`).join('');
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

  if (orders.length === 0) {
    tbody.innerHTML = `<tr><td colspan="11" style="text-align: center; color: #64748b; padding: 20px;">Không tìm thấy đơn hàng nào phù hợp bộ lọc</td></tr>`;
    return;
  }

  orders.forEach(o => {
    tbody.innerHTML += `
      <tr>
        <td><strong>${o.trackingCode}</strong></td>
        <td>${o.recipientName}</td>
        <td>${o.recipientPhone}</td>
        <td style="max-width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${o.address}">${o.address}</td>
        <td>${o.areaId}</td>
        <td><span class="tag tag-info">${o.serviceLevelDisplay}</span></td>
        <td>${o.slaDeadline}</td>
        <td><strong>${formatMoney(o.codAmount)}</strong></td>
        <td>${renderStatusTag(o.status, o.statusDisplay)}</td>
        <td>${o.assignedDriverId ? `<span class="tag tag-neutral">${o.assignedDriverId}</span>` : '<span style="color:#94a3b8;">Chưa gán</span>'}</td>
        <td>
          <button class="btn btn-outline" style="padding: 4px 8px; font-size: 11px;" onclick="viewOrderDetail('${o.orderId}')">Chi tiết</button>
        </td>
      </tr>
    `;
  });
}

function filterOrdersTable() {
  const search = document.getElementById('order-search-input').value.toLowerCase().trim();
  const area = document.getElementById('filter-area').value;
  const status = document.getElementById('filter-status').value;

  const filtered = allOrders.filter(o => {
    const matchSearch = !search || o.trackingCode.toLowerCase().includes(search) ||
                        o.recipientName.toLowerCase().includes(search) ||
                        o.recipientPhone.includes(search);
    const matchArea = !area || o.areaId === area;
    const matchStatus = !status || o.status === status;
    return matchSearch && matchArea && matchStatus;
  });

  renderOrdersTable(filtered);
}

// --- VIEW 3: SHIFTS & DRIVERS (SCR-04) ---
async function loadDrivers() {
  try {
    const res = await fetch('/api/drivers');
    allDrivers = await res.json();
    const tbody = document.getElementById('drivers-table-body');
    tbody.innerHTML = '';

    allDrivers.forEach(d => {
      const pct = parseFloat(d.workloadPercent);
      const barColor = pct >= 80 ? 'var(--danger)' : (pct >= 50 ? 'var(--warning)' : 'var(--success)');
      tbody.innerHTML += `
        <tr>
          <td><strong>${d.driverId}</strong></td>
          <td>${d.name}</td>
          <td>${d.phone}</td>
          <td><span class="tag tag-neutral">${d.assignedAreaId}</span></td>
          <td><strong>${d.currentLoad} đơn</strong></td>
          <td>${d.capacityPerShift} đơn</td>
          <td style="width: 220px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <div style="flex: 1; height: 8px; background: #e2e8f0; border-radius: 4px; overflow: hidden;">
                <div style="height: 100%; width: ${pct}%; background: ${barColor};"></div>
              </div>
              <span style="font-size: 11.5px; font-weight: bold; width: 45px;">${pct.toFixed(0)}%</span>
            </div>
          </td>
          <td>${d.active ? '<span class="tag tag-success">Đang trực ca</span>' : '<span class="tag tag-neutral">Nghỉ</span>'}</td>
        </tr>
      `;
    });
  } catch (err) {
    console.error('Lỗi nạp tài xế:', err);
  }
}

// --- VIEW 4: AI DISPATCH CONSOLE (SCR-05) ---
async function runAIDispatch() {
  const tbody = document.getElementById('dispatch-table-body');
  tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding: 25px;">⚡ Đang chạy thuật toán Heuristic Dispatch Matching...</td></tr>`;

  try {
    const res = await fetch('/api/dispatch/suggestions');
    const suggestions = await res.json();
    tbody.innerHTML = '';

    if (suggestions.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: #16a34a; padding: 25px;">✓ Tất cả đơn hàng đã được phân công hoặc không còn tài xế trống tải</td></tr>`;
      return;
    }

    suggestions.forEach(s => {
      tbody.innerHTML += `
        <tr>
          <td><strong>${s.assignmentId}</strong></td>
          <td><span style="font-weight: 700; color: var(--navy);">${s.trackingCode}</span></td>
          <td><span class="tag tag-info">${s.orderArea}</span></td>
          <td><strong>${s.driverName}</strong> (${s.driverId})</td>
          <td>${s.driverPhone}</td>
          <td><span class="tag tag-success" style="font-size: 12px;">★ ${s.suggestedScore}%</span></td>
          <td style="font-size: 12px; color: #334155;">${s.matchReason}</td>
          <td>
            <div style="display: flex; gap: 6px;">
              <button class="btn btn-success" style="padding: 4px 10px; font-size: 11.5px;" onclick="approveDispatch('${s.assignmentId}')">✔ Duyệt</button>
              <button class="btn btn-outline" style="padding: 4px 8px; font-size: 11.5px;" onclick="rejectDispatch('${s.assignmentId}')">✖</button>
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

// --- VIEW 5: ORDER DOSSIER & AUDIT TRAIL (SCR-06) ---
async function viewOrderDetail(orderId) {
  switchView('detail');
  document.getElementById('detail-order-select').value = orderId;
  loadOrderHistoryDetail(orderId);
}

async function loadOrderHistoryDetail(orderId) {
  const order = allOrders.find(o => o.orderId === orderId);
  if (!order) return;

  document.getElementById('detail-tracking-title').textContent = `Hồ Sơ Vận Đơn: ${order.trackingCode}`;
  
  document.getElementById('detail-info-box').innerHTML = `
    <div><strong>Mã đơn hàng:</strong> ${order.orderId}</div>
    <div><strong>Người nhận:</strong> ${order.recipientName} (${order.recipientPhone})</div>
    <div><strong>Địa chỉ giao:</strong> ${order.address}</div>
    <div><strong>Tuyến bưu cục:</strong> ${order.areaId}</div>
    <div><strong>Gói dịch vụ:</strong> ${order.serviceLevelDisplay}</div>
    <div><strong>Hạn chót SLA:</strong> ${order.slaDeadline}</div>
    <div><strong>Tiền thu hộ COD:</strong> <span style="color:#d97706; font-weight:bold;">${formatMoney(order.codAmount)}</span></div>
    <div><strong>Trạng thái:</strong> ${renderStatusTag(order.status, order.statusDisplay)}</div>
    <div><strong>Tài xế phụ trách:</strong> ${order.assignedDriverId || 'Chưa gán'}</div>
    <div><strong>Số lần giao thất bại:</strong> ${order.failureCount}/3</div>
  `;

  try {
    const res = await fetch(`/api/order/history?orderId=${orderId}`);
    const history = await res.json();
    const timeline = document.getElementById('timeline-container');
    timeline.innerHTML = '';

    if (history.length === 0) {
      timeline.innerHTML = `<p style="color: #64748b; font-size: 13px;">Chưa có lịch sử trạng thái ghi nhận</p>`;
    } else {
      history.forEach(h => {
        timeline.innerHTML += `
          <div style="margin-bottom: 20px; position: relative; padding-left: 15px;">
            <div style="position: absolute; left: -16px; top: 4px; width: 10px; height: 10px; border-radius: 50%; background: var(--primary);"></div>
            <div style="font-size: 11.5px; color: #64748b; font-weight: 600;">${h.time} | Thực hiện bởi: <span style="color:var(--navy);">${h.actorId}</span></div>
            <div style="font-size: 13.5px; font-weight: 700; color: var(--navy); margin-top: 2px;">
              ${h.oldStatus ? `${h.oldStatus} ➔ ` : ''}${h.newStatus}
            </div>
            <div style="font-size: 12px; color: #475569; margin-top: 2px;">${h.note}</div>
          </div>
        `;
      });
    }
  } catch (err) {
    console.error('Lỗi nạp lịch sử đơn:', err);
  }
}

// --- VIEW 6: FIGMA GALLERY (18 SCREENS) ---
function loadFigmaGallery() {
  const container = document.getElementById('figma-gallery-container');
  container.innerHTML = '';

  const figmaScreens = [
    { title: "SCR-01 · Đăng nhập Desktop", file: "2_1889_SCR-01_Đăng_nhập_desktop.png", meta: "1440 × 960 px · Cổng đăng nhập quản lý" },
    { title: "SCR-01 · Đăng nhập Mobile", file: "2_1957_SCR-01_Đăng_nhập_mobile_tài_xế.png", meta: "390 × 844 px · Cổng đăng nhập tài xế" },
    { title: "SCR-01 · Các trạng thái đăng nhập", file: "2_2010_SCR-01_Các_trạng_thái_đăng_nhập.png", meta: "1440 × 1416 px · Validation & Error states" },
    { title: "SCR-01 · Chú giải phân quyền", file: "2_2148_SCR-01_Chú_giải_phân_quyền_và_chuyển_tiếp.png", meta: "1120 × 904 px · Ma trận RBAC" },
    { title: "SCR-02 · Bàn điều hành trung tâm Hub", file: "4_769_SCR-02_Bàn_điều_hành_trung_tâm_Hub.png", meta: "1600 × 1171 px · Dashboard KPI & SLA Gauge" },
    { title: "SCR-03 · Tiếp nhận và phân loại đơn", file: "5_5034_SCR-03_Tiếp_nhận_và_phân_loại_đơn.png", meta: "1600 × 1360 px · Quản lý danh mục vận đơn" },
    { title: "SCR-03 · Kết quả nhập & xử lý lỗi", file: "5_5357_SCR-03_Kết_quả_nhập_và_xử_lý_đơn_lỗi.png", meta: "1600 × 1360 px · Xử lý ngoại lệ file CSV" },
    { title: "SCR-03 · Tạo đơn gửi lẻ thủ công", file: "5_5615_SCR-03_Tạo_đơn_gửi_lẻ_thủ_công.png", meta: "1600 × 1360 px · Modal tiếp nhận lẻ" },
    { title: "SCR-04 · Lập ca & Điểm danh tài xế", file: "6_1044_Lập_ca_giao_&_điểm_danh_tài_xế.png", meta: "1600 × 1234 px · Shift Roster & Workload" },
    { title: "SCR-05 · Gợi ý phân công tối ưu (AI)", file: "7_1728_SCR-05_Gợi_ý_phân_công_tối_ưu.png", meta: "1600 × 1287 px · Heuristic Dispatch Engine" },
    { title: "SCR-06 · Hồ sơ chi tiết đơn hàng", file: "8_1341_SCR-06_Hồ_sơ_chi_tiết_đơn_hàng.png", meta: "1600 × 1212 px · Order Dossier & Timeline" },
    { title: "Ngoại lệ · Kịch bản thay thế", file: "8_1593_Ngoại_lệ_Kịch_bản_thay_thế.png", meta: "520 × 809 px · Luồng xử lý sự cố" },
    { title: "SCR-07 · Tác vụ tài xế (Mobile)", file: "9_374_SCR-07_Tác_vụ_tài_xế.png", meta: "393 × 852 px · Driver Field App" },
    { title: "SCR-08 • Báo thất bại lần đầu", file: "11_1955_SCR-08_Báo_thất_bại_lần_đầu.png", meta: "430 × 1301 px · Lần phát 1/3" },
    { title: "SCR-08 • Khách hẹn giao lại", file: "11_2044_SCR-08_Khách_hẹn_giao_lại.png", meta: "430 × 1533 px · Hẹn phát ca sau" },
    { title: "SCR-08 • FAILED · Chờ phát lại", file: "11_2150_SCR-08_FAILED_Chờ_phát_lại.png", meta: "430 × 1246 px · Trạng thái lưu kho tạm" },
    { title: "SCR-08 • Từ chối nhận · Lần thứ ba", file: "11_2231_SCR-08_Từ_chối_nhận_Lần_thứ_ba.png", meta: "430 × 1544 px · Lần phát 3/3" },
    { title: "SCR-08 • RETURNED · Chuyển hoàn", file: "11_2336_SCR-08_RETURNED_Chuyển_hoàn.png", meta: "430 × 1331 px · Kích hoạt hoàn hàng RTS" }
  ];

  figmaScreens.forEach(s => {
    container.innerHTML += `
      <div class="figma-card">
        <a href="figma_previews/${s.file}" target="_blank">
          <img src="figma_previews/${s.file}" alt="${s.title}" loading="lazy">
        </a>
        <div class="figma-card-body">
          <div class="figma-card-title">${s.title}</div>
          <div class="figma-card-meta">${s.meta}</div>
        </div>
      </div>
    `;
  });
}

// --- MOBILE SIMULATOR (SCR-07 & SCR-08) ---
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
    select.innerHTML = allDrivers.map(d => `<option value="${d.driverId}">${d.name} (${d.driverId}) - ${d.assignedAreaId}</option>`).join('');
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

  document.getElementById('sim-task-count').textContent = `Nhiệm vụ: ${driverTasks.length} đơn`;

  let totalCod = 0;
  driverTasks.forEach(t => totalCod += (t.codAmount || 0));
  document.getElementById('sim-cod-sum').textContent = `COD: ${formatMoney(totalCod)}`;

  if (driverTasks.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: #64748b;">
        <div style="font-size: 32px; margin-bottom: 10px;">🛵</div>
        <p style="font-weight: 600; font-size: 13px;">Chưa có đơn hàng nào được phân công</p>
        <p style="font-size: 11.5px; margin-top: 5px;">Hãy dùng nút <strong>⚡ AI Dispatch</strong> trên Web để gán đơn cho tài xế này.</p>
      </div>
    `;
    return;
  }

  driverTasks.forEach(t => {
    container.innerHTML += `
      <div style="background: #fff; border-radius: 12px; padding: 14px; margin-bottom: 14px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <span style="font-weight: 800; font-size: 14px; color: var(--navy);">${t.trackingCode}</span>
          ${renderStatusTag(t.status, t.statusDisplay)}
        </div>
        <div style="font-size: 13px; font-weight: 700; color: #1e293b;">${t.recipientName} • <a href="tel:${t.recipientPhone}" style="color: var(--primary);">${t.recipientPhone}</a></div>
        <div style="font-size: 12px; color: #64748b; margin-top: 3px;">📍 ${t.address}</div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px; font-size: 12px;">
          <span>Hạn: <strong>${t.slaDeadline}</strong></span>
          <span style="color: #d97706; font-weight: bold; font-size: 13px;">${formatMoney(t.codAmount)}</span>
        </div>

        <div style="display: flex; gap: 8px; margin-top: 12px; border-top: 1px solid #f1f5f9; padding-top: 10px;">
          ${t.status === 'ASSIGNED' ? `
            <button class="btn btn-primary" style="flex:1; justify-content:center; padding: 6px;" onclick="simUpdateStatus('${t.orderId}', 'TRANSIT')">🚀 Bắt Đầu Đi Giao</button>
          ` : `
            <button class="btn btn-success" style="flex:1; justify-content:center; padding: 6px;" onclick="simUpdateStatus('${t.orderId}', 'DELIVERED')">✔ Thành Công</button>
            <button class="btn btn-danger" style="flex:1; justify-content:center; padding: 6px;" onclick="openFailedModal('${t.orderId}', '${t.trackingCode}')">✖ Thất Bại</button>
          `}
        </div>
      </div>
    `;
  });
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
      loadDrivers();
    }
  } catch (err) {
    alert('Lỗi cập nhật: ' + err);
  }
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
  } catch (err) {
    alert('Lỗi báo giao thất bại: ' + err);
  }
}

// --- SCR-03: CREATE ORDER MODAL ---
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
  const serviceLevel = document.getElementById('new-service-level').value;
  const codAmount = document.getElementById('new-cod').value;

  if (!recipientName || !phone || !address) {
    alert('Vui lòng điền đầy đủ các trường bắt buộc (*)');
    return;
  }

  try {
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ recipientName, phone, address, areaId, serviceLevel, codAmount })
    });
    const data = await res.json();
    if (data.success) {
      closeCreateOrderModal();
      loadAllOrders();
      loadDashboard();
      alert(`✓ Đã tạo đơn thành công! Mã vận đơn: ${data.trackingCode}`);
    }
  } catch (err) {
    alert('Lỗi tạo đơn: ' + err);
  }
}

// --- UTILS ---
function renderStatusTag(status, display) {
  if (status === 'READY_TO_DISPATCH') return `<span class="tag tag-info">${display}</span>`;
  if (status === 'ASSIGNED') return `<span class="tag tag-warning">${display}</span>`;
  if (status === 'IN_TRANSIT') return `<span class="tag tag-warning" style="background:#fed7aa; color:#9a3412;">${display}</span>`;
  if (status === 'DELIVERED') return `<span class="tag tag-success">${display}</span>`;
  if (status === 'FAILED') return `<span class="tag tag-danger">${display}</span>`;
  if (status === 'RETURNED') return `<span class="tag tag-danger" style="background:#450a0a; color:#fff;">${display}</span>`;
  return `<span class="tag tag-neutral">${display}</span>`;
}

function formatMoney(amount) {
  if (!amount) return '0 VNĐ';
  return Number(amount).toLocaleString('vi-VN') + ' VNĐ';
}
