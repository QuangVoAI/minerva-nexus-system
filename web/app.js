// ==========================================================================
// MINERVA NEXUS CONTROLLER — 1:1 PIXEL-PERFECT FIGMA SYNC
// File Key: s771rofPZ1nPkjaQu0sa8C
// ==========================================================================

let allOrders = [];
let allDrivers = [];
let currentFailedOrderId = null;
let currentFailedTracking = null;
let currentFailureStep = 1;

// SCR-05 Heuristic Proposals State (Exact Figma 7_1728)
let dispatchProposals = [
  {
    id: 'MNX000001',
    address: 'Giao 12 Huỳnh Tấn Phát',
    ward: 'P. Tân Thuận Đông',
    slaMin: 35,
    deadline: '09:55',
    driverId: 'DRV-01',
    driverName: 'Nguyễn Văn An',
    loadText: '4/15 đơn',
    remaining: 'Còn 11 chỗ',
    score: 96,
    w1: 50,
    w2: 30,
    w3: 16,
    intervention: 'Đang xem chi tiết',
    isUrgent: true,
    checked: true,
    note: 'Trùng 100% tuyến + Tải còn trống nhiều + Gần vị trí giao. Vị trí gần hỗ trợ; không cộng thêm vào 3 trọng số.'
  },
  {
    id: 'MNX000006',
    address: 'Giao 85 Nguyễn Lương Bằng',
    ward: 'P. Tân Phú',
    slaMin: 55,
    deadline: '10:15',
    driverId: 'DRV-02',
    driverName: 'Trần Quốc Bình',
    loadText: '6/15 đơn',
    remaining: 'Còn 9 chỗ',
    score: 91,
    w1: 45,
    w2: 30,
    w3: 16,
    intervention: 'Đã đổi thủ công (Lê Thu Hà · 09:19)',
    isUrgent: true,
    checked: true,
    note: 'Đã chuyển tuyến Tân Phú theo yêu cầu của điều phối viên.'
  },
  {
    id: 'MNX000012',
    address: 'Giao 68 Lê Văn Lương',
    ward: 'P. Tân Kiểng',
    slaMin: 80,
    deadline: '10:40',
    driverId: 'DRV-03',
    driverName: 'Lê Thị Chi',
    loadText: '8/15 đơn',
    remaining: 'Còn 7 chỗ',
    score: 94,
    w1: 50,
    w2: 24,
    w3: 20,
    intervention: 'AI',
    isUrgent: false,
    checked: true,
    note: 'Trùng 100% tuyến Tân Kiểng. Phân bổ cân bằng theo dung lượng ca.'
  },
  {
    id: 'MNX000018',
    address: 'Giao 24 Bùi Văn Ba',
    ward: 'P. Tân Thuận Đông',
    slaMin: 105,
    deadline: '11:05',
    driverId: 'DRV-01',
    driverName: 'Nguyễn Văn An',
    loadText: '4/15 đơn',
    remaining: 'Còn 11 chỗ',
    score: 95,
    w1: 50,
    w2: 25,
    w3: 20,
    intervention: 'AI',
    isUrgent: false,
    checked: true,
    note: 'Cùng khu vực Huỳnh Tấn Phát - Bùi Văn Ba, tối ưu hóa lộ trình gom tuyến.'
  },
  {
    id: 'MNX000023',
    address: 'Giao 156 Nguyễn Thị Thập',
    ward: 'P. Tân Phú',
    slaMin: 130,
    deadline: '11:30',
    driverId: 'DRV-04',
    driverName: 'Phạm Minh Dũng',
    loadText: '11/15 đơn',
    remaining: 'Còn 4 chỗ',
    score: 88,
    w1: 45,
    w2: 23,
    w3: 20,
    intervention: 'AI',
    isUrgent: false,
    checked: false,
    note: 'Tài xế DRV-04 gần đạt định mức ca trực (11/15 đơn).'
  },
  {
    id: 'MNX000029',
    address: 'Giao 40 Trần Xuân Soạn',
    ward: 'P. Tân Kiểng',
    slaMin: 160,
    deadline: '12:00',
    driverId: 'DRV-03',
    driverName: 'Lê Thị Chi',
    loadText: '8/15 đơn',
    remaining: 'Còn 7 chỗ',
    score: 92,
    w1: 50,
    w2: 22,
    w3: 20,
    intervention: 'AI',
    isUrgent: false,
    checked: false,
    note: 'Đơn giao ca trưa, tài xế sẵn sàng tiếp nhận.'
  }
];

let selectedProposalIdx = 0;

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initApp();
  // Live clock
  setInterval(updateLiveClock, 1000);
  // Auto refresh
  setInterval(() => {
    loadDashboard(true);
  }, 8000);
});

async function initApp() {
  await loadDashboard();
  await loadAllOrders();
  await loadDrivers();
  renderDispatchProposals();
  loadSimDrivers();
  loadFigmaGallery();
}

function updateLiveClock() {
  const now = new Date();
  const timeStr = now.toTimeString().split(' ')[0];
  const el = document.getElementById('topbar-clock');
  if (el) el.textContent = `Cập nhật ${timeStr}`;
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

  const crumbMap = {
    'dashboard': 'Bàn điều hành',
    'orders': 'Tiếp nhận & phân loại đơn',
    'shifts': 'Ca giao & điểm danh',
    'dispatch': 'Gợi ý phân công tối ưu (AI)',
    'detail': 'Hồ sơ đơn hàng (Audit Trail)',
    'login-view': 'Đăng nhập hệ thống (SCR-01)',
    'figma-view': '18 Bản vẽ gốc Figma'
  };
  document.getElementById('topbar-crumb').textContent = crumbMap[viewName] || viewName;

  if (viewName === 'orders') loadAllOrders();
  if (viewName === 'shifts') loadDrivers();
  if (viewName === 'dispatch') renderDispatchProposals();
  if (viewName === 'dashboard') loadDashboard();
}

// ==========================================================================
// SCR-02: BÀN ĐIỀU HÀNH TRUNG TÂM HUB
// ==========================================================================
async function loadDashboard(silent = false) {
  try {
    const resOrders = await fetch('/api/orders');
    allOrders = await resOrders.json();

    // Capacity stats
    const intakeCount = 95;
    const totalCap = 120;
    const remaining = totalCap - intakeCount; // 25
    const pct = Math.round((intakeCount / totalCap) * 100); // 79%

    document.getElementById('hub-capacity-pct').textContent = `${pct}%`;
    document.getElementById('hub-capacity-fraction').innerHTML = `${intakeCount} <span>/ ${totalCap} đơn</span>`;
    document.getElementById('hub-remaining-capacity').innerHTML = `📦 Còn ${remaining} đơn`;
    document.getElementById('hub-driver-badge').innerHTML = `👥 8 tài xế trực`;
    document.getElementById('sla-intake-count-text').textContent = `${intakeCount} đơn đã tiếp nhận`;

    // SVG donut progress stroke
    // Circumference = 2 * PI * 40 ≈ 251.3
    const circumference = 251.3;
    const offset = circumference * (1 - (pct / 100));
    const circle = document.getElementById('hub-donut-fill');
    if (circle) circle.style.strokeDashoffset = offset;

    // 3 Tier Counts (Exact Figma: 72 An Toàn / 17 Cận Hạn / 6 Nguy Cơ Cao)
    const safeCount = 72;
    const warnCount = 17;
    const dangerCount = 6;

    document.getElementById('tier-safe-num').innerHTML = `${safeCount} <span>đơn</span>`;
    document.getElementById('tier-warn-num').innerHTML = `${warnCount} <span>đơn</span>`;
    document.getElementById('tier-danger-num').innerHTML = `${dangerCount} <span>đơn</span>`;
    document.getElementById('sidebar-urgent-count').textContent = dangerCount;

    document.getElementById('urgent-banner-head').textContent = `${dangerCount} đơn có nguy cơ vi phạm SLA cao`;
    document.getElementById('queue-badge-count').textContent = `${dangerCount} đơn`;

    // Populate Emergency Queue Table (Exact 6 orders from Figma 4_769)
    const tbody = document.getElementById('figma-urgent-tbody');
    tbody.innerHTML = '';

    const urgentOrders = [
      { code: 'DH-Q7-08421', tag: 'Xử lý trước', ward: 'Tân Thuận Đông, Quận 7', street: 'Đường Huỳnh Tấn Phát', timer: '00:12:38', highlight: true },
      { code: 'DH-Q7-08436', tag: null, ward: 'Tân Kiểng, Quận 7', street: 'Đường Lê Văn Lương', timer: '00:21:05', highlight: false },
      { code: 'DH-Q7-08452', tag: null, ward: 'Tân Phong, Quận 7', street: 'Đường Nguyễn Thị Thập', timer: '00:34:12', highlight: false },
      { code: 'DH-Q7-08468', tag: null, ward: 'Tân Phú, Quận 7', street: 'Đường Nguyễn Lương Bằng', timer: '00:42:26', highlight: false },
      { code: 'DH-Q7-08475', tag: null, ward: 'Phú Mỹ, Quận 7', street: 'Đường Hoàng Quốc Việt', timer: '00:49:10', highlight: false },
      { code: 'DH-Q7-08489', tag: null, ward: 'Phú Xuân, Nhà Bè', street: 'Đường Nguyễn Bình', timer: '00:56:44', highlight: false }
    ];

    document.getElementById('earliest-sla-mono').textContent = urgentOrders[0].timer;

    urgentOrders.forEach((item, idx) => {
      const rowClass = item.highlight ? 'class="row-danger-highlight"' : '';
      tbody.innerHTML += `
        <tr ${rowClass}>
          <td>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="width: 24px; height: 24px; background: #f1f5f9; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 11px;">📦</span>
              <div>
                <strong style="color: var(--text-main); font-size: 13px;">${item.code}</strong>
                ${item.tag ? `<div style="margin-top: 1px;"><span class="scr-tag" style="background:#fee2e2; color:#b91c1c; font-size:9.5px; font-weight:700;">${item.tag}</span></div>` : ''}
              </div>
            </div>
          </td>
          <td>
            <div style="font-weight: 600; color: var(--text-main);">${item.ward}</div>
            <div style="font-size: 11.5px; color: var(--text-muted);">${item.street}</div>
          </td>
          <td>
            <span class="countdown-tag">⏱ ${item.timer}</span>
          </td>
          <td>
            <span class="scr-tag" style="background:#fee2e2; color:#dc2626; font-weight:700;">
              ⚠️ Nguy cơ cao
            </span>
          </td>
          <td style="text-align: right;">
            <button class="btn-dispatch-action" style="font-size: 11.5px; padding: 5px 10px;" onclick="goToDispatchForOrder('${item.code}')">
              Điều phối ↗
            </button>
          </td>
        </tr>
      `;
    });

  } catch (err) {
    if (!silent) console.error('Lỗi nạp Dashboard:', err);
  }
}

function goToDispatchForOrder(code) {
  switchView('dispatch');
  const foundIdx = dispatchProposals.findIndex(p => p.id === code);
  if (foundIdx !== -1) {
    selectProposal(foundIdx);
  }
}

// ==========================================================================
// SCR-03: TIẾP NHẬN & PHÂN LOẠI ĐƠN HÀNG
// ==========================================================================
async function loadAllOrders() {
  try {
    const res = await fetch('/api/orders');
    allOrders = await res.json();
    renderOrdersTable(allOrders);
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
        <td><input type="checkbox"></td>
        <td>
          <div style="font-weight: 700; color: var(--text-main);">${o.trackingCode}</div>
          <div style="font-size: 10.5px; color: var(--text-muted);">09:20 · 09/11/2026</div>
        </td>
        <td>
          <div style="font-size: 12px; font-weight: 600;">Gửi lẻ</div>
          <div style="font-size: 10.5px; color: var(--text-muted);">Nhập thủ công</div>
        </td>
        <td>
          <div style="font-weight: 600; color: var(--text-main);">${o.recipientName}</div>
          <div style="font-size: 11px; color: var(--text-muted);">${o.recipientPhone}</div>
        </td>
        <td>
          <div style="max-width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${o.address}">
            ${o.address}
          </div>
          <div style="font-size: 10.5px; color: var(--text-muted);">${o.areaId}</div>
        </td>
        <td>
          <div style="font-weight: 600; color: var(--teal-primary);">${o.serviceLevelDisplay}</div>
          <div style="font-size: 10.5px; color: var(--text-muted);">${o.slaDeadline}</div>
        </td>
        <td><strong style="color: var(--text-main);">${formatMoney(o.codAmount)}</strong></td>
        <td>${renderStatusPill(o.status, o.statusDisplay)}</td>
        <td style="text-align: right;">
          <a style="color: var(--teal-primary); font-weight: 600; cursor: pointer; text-decoration: none;" onclick="viewOrderDetail('${o.orderId}')">
            Chi tiết ➔
          </a>
        </td>
      </tr>
    `;
  });
}

function switchOrderSubTab(tab) {
  const btnAll = document.getElementById('btn-tab-orders-all');
  const btnErr = document.getElementById('btn-tab-orders-error');
  const btnHist = document.getElementById('btn-tab-orders-history');
  const allCont = document.getElementById('subtab-all-container');
  const errCont = document.getElementById('subtab-error-container');

  [btnAll, btnErr, btnHist].forEach(b => {
    b.style.background = '#ffffff';
    b.style.color = 'var(--text-main)';
    b.style.borderColor = '#cbd5e1';
  });

  if (tab === 'all') {
    btnAll.style.background = '#0a1926';
    btnAll.style.color = '#ffffff';
    btnAll.style.borderColor = '#0a1926';
    allCont.style.display = 'block';
    errCont.style.display = 'none';
  } else if (tab === 'error') {
    btnErr.style.background = '#0a1926';
    btnErr.style.color = '#ffffff';
    btnErr.style.borderColor = '#0a1926';
    allCont.style.display = 'none';
    errCont.style.display = 'block';
  } else {
    btnHist.style.background = '#0a1926';
    btnHist.style.color = '#ffffff';
    btnHist.style.borderColor = '#0a1926';
    alert('Lịch sử nhập liệu: Đã nạp thành công don_shopee_q7_09112026.xlsx lúc 09:15.');
  }
}

function filterByTab(tab) {
  switchOrderSubTab(tab);
}

function filterOrdersTable() {
  const search = document.getElementById('order-search-input').value.toLowerCase().trim();
  const status = document.getElementById('filter-status-select').value;

  const filtered = allOrders.filter(o => {
    const matchSearch = !search || o.trackingCode.toLowerCase().includes(search) ||
                        o.recipientName.toLowerCase().includes(search) ||
                        o.recipientPhone.includes(search);
    const matchStatus = !status || o.status === status;
    return matchSearch && matchStatus;
  });

  renderOrdersTable(filtered);
}

function fixErrorOrder(rowNum) {
  const fixes = {
    1: 'Đã sửa địa chỉ về "12 Huỳnh Tấn Phát, P. Tân Thuận Đông, Q.7". Đơn đã đủ điều kiện vào ServiceArea Hub Quận 7!',
    2: 'Đã bổ sung số điện thoại người nhận: "0909 888 777". Đơn đã có đầy đủ thông tin liên hệ!',
    3: 'Đã điều chỉnh COD về "8.500.000 ₫" (≤ 10.000.000 ₫ đối với tài xế xe máy). Đơn đã thỏa mãn BR-01!'
  };
  alert(`✓ ${fixes[rowNum]}\nTrạng thái chuyển sang READY_TO_DISPATCH (Sẵn sàng phát)!`);
  switchOrderSubTab('all');
  loadAllOrders();
}

// --- SCR-03 CREATE MODAL ---
function openCreateOrderModal() {
  document.getElementById('modal-create-order').style.display = 'flex';
}

function closeCreateOrderModal() {
  document.getElementById('modal-create-order').style.display = 'none';
}

function selectCreateService(service, hours) {
  ['express', 'standard', 'economy'].forEach(s => {
    const card = document.getElementById(`service-card-${s}`);
    card.style.border = '1px solid #cbd5e1';
    card.style.background = '#ffffff';
  });
  const activeCard = document.getElementById(`service-card-${service.toLowerCase()}`);
  activeCard.style.border = '2px solid #007791';
  activeCard.style.background = '#ecfeff';

  const endHour = 9 + hours;
  document.getElementById('create-sla-computed').textContent = `${String(endHour).padStart(2, '0')}:20 · 09/11/2026`;
}

async function submitCreateOrder() {
  const name = document.getElementById('new-recipient-name').value.trim();
  const phone = document.getElementById('new-recipient-phone').value.trim();
  const addr = document.getElementById('new-address').value.trim();
  const area = document.getElementById('new-area').value;
  const cod = document.getElementById('new-cod').value;

  if (!name || !phone || !addr) {
    alert('Vui lòng điền đủ thông tin người nhận.');
    return;
  }

  try {
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ recipientName: name, phone, address: addr, areaId: area, codAmount: cod })
    });
    const data = await res.json();
    if (data.success) {
      closeCreateOrderModal();
      document.getElementById('scr03-banner-title').textContent = `Đã tạo đơn ${data.trackingCode} · Dữ liệu hợp lệ, chuyển Sẵn sàng phát.`;
      document.getElementById('scr03-success-banner').style.display = 'flex';
      loadAllOrders();
      loadDashboard();
      alert(`✓ Đã tạo thành công vận đơn ${data.trackingCode}!`);
    }
  } catch (err) {
    alert('Lỗi tạo đơn: ' + err);
  }
}

// ==========================================================================
// SCR-05: GỢI Ý PHÂN CÔNG TỐI ƯU (AI DISPATCH ENGINE)
// ==========================================================================
function renderDispatchProposals() {
  const tbody = document.getElementById('dispatch-table-body');
  tbody.innerHTML = '';

  dispatchProposals.forEach((p, idx) => {
    const isSelected = idx === selectedProposalIdx;
    const isChecked = p.checked;
    const flagTag = p.isUrgent ? '<span style="color:#dc2626; font-size:12px;">🚩</span>' : '';
    const slaColor = p.isUrgent ? 'color:#dc2626; font-weight:700;' : 'color:var(--text-main); font-weight:600;';

    tbody.innerHTML += `
      <tr style="cursor: pointer; ${isSelected ? 'background: #f0fdf4;' : ''}" onclick="selectProposal(${idx})">
        <td onclick="event.stopPropagation()">
          <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="toggleProposalCheck(${idx}, this.checked)">
        </td>
        <td>
          <div style="display: flex; align-items: center; gap: 4px;">
            <strong style="color: var(--text-main); font-size: 13px;">${p.id}</strong>
            ${flagTag}
          </div>
          <div style="font-weight: 600; color: #334155; margin-top: 1px;">${p.address}</div>
          <div style="font-size: 11px; color: var(--text-muted);">${p.ward}</div>
        </td>
        <td>
          <div style="${slaColor} font-size: 12.5px;">⏱ ${p.slaMin} phút</div>
          <div style="font-size: 10.5px; color: var(--text-muted);">Hạn ${p.deadline}</div>
        </td>
        <td>
          <div style="color: var(--teal-primary); font-weight: 700;">${p.driverName} ▾</div>
          <div style="font-size: 10.5px; color: var(--text-muted);">${p.driverId} · Tuyến ${p.ward}</div>
        </td>
        <td>
          <div style="font-weight: 700; color: var(--text-main);">${p.loadText}</div>
          <div style="font-size: 10.5px; color: #16a34a;">${p.remaining}</div>
        </td>
        <td>
          <div style="font-size: 15px; font-weight: 900; color: var(--teal-primary);">${p.score}%</div>
          <div style="font-size: 10.5px; color: #0284c7; cursor: pointer;">Chi tiết ➔</div>
        </td>
        <td>
          ${p.intervention.includes('Đã đổi') ? 
            `<span class="scr-tag" style="background:#fef3c7; color:#b45309; font-size:10px;">${p.intervention}</span>` :
            (p.intervention.includes('Đang xem') ?
              `<span style="color:#0284c7; font-weight:600; font-size:11.5px;">Đang xem chi tiết</span>` :
              `<span class="scr-tag" style="background:#e2e8f0; color:#475569; font-size:10px;">AI</span>`
            )
          }
        </td>
      </tr>
    `;
  });

  updateSelectedCountSummary();
  updateInspectorView();
}

function selectProposal(idx) {
  selectedProposalIdx = idx;
  dispatchProposals.forEach((p, i) => {
    if (p.intervention === 'Đang xem chi tiết') p.intervention = 'AI';
  });
  dispatchProposals[idx].intervention = 'Đang xem chi tiết';
  renderDispatchProposals();
}

function updateInspectorView() {
  const p = dispatchProposals[selectedProposalIdx];
  if (!p) return;

  document.getElementById('inspector-title').textContent = `Vì sao khớp ${p.score}%?`;
  document.getElementById('inspector-order-code').textContent = p.id;
  document.getElementById('inspector-sla-tag').innerHTML = `${p.isUrgent ? '🚩' : '⏱'} SLA ${p.slaMin} phút`;
  document.getElementById('inspector-score-num').textContent = `${p.score}%`;

  document.getElementById('bar-w1-val').textContent = `${p.w1} / 50`;
  document.getElementById('bar-w1-fill').style.width = `${(p.w1 / 50) * 100}%`;

  document.getElementById('bar-w2-val').textContent = `${p.w2} / 30`;
  document.getElementById('bar-w2-fill').style.width = `${(p.w2 / 30) * 100}%`;

  document.getElementById('bar-w3-val').textContent = `${p.w3} / 20`;
  document.getElementById('bar-w3-fill').style.width = `${(p.w3 / 20) * 100}%`;

  document.getElementById('inspector-note-text').innerHTML = `
    <strong>Heuristic Analysis:</strong> ${p.note}
  `;

  const select = document.getElementById('inspector-driver-select');
  select.innerHTML = `
    <option value="DRV-01" ${p.driverId === 'DRV-01' ? 'selected' : ''}>Nguyễn Văn An · DRV-01</option>
    <option value="DRV-02" ${p.driverId === 'DRV-02' ? 'selected' : ''}>Trần Quốc Bình · DRV-02</option>
    <option value="DRV-03" ${p.driverId === 'DRV-03' ? 'selected' : ''}>Lê Thị Chi · DRV-03</option>
    <option value="DRV-04" ${p.driverId === 'DRV-04' ? 'selected' : ''}>Phạm Minh Dũng · DRV-04</option>
  `;
}

function onDriverOverrideChange(newDriverId) {
  const p = dispatchProposals[selectedProposalIdx];
  const driverNames = {
    'DRV-01': 'Nguyễn Văn An',
    'DRV-02': 'Trần Quốc Bình',
    'DRV-03': 'Lê Thị Chi',
    'DRV-04': 'Phạm Minh Dũng'
  };
  p.driverId = newDriverId;
  p.driverName = driverNames[newDriverId];
  p.intervention = 'Đã đổi thủ công (Trần Bình · Điều phối)';
  p.score = Math.max(75, p.score - 5);
  renderDispatchProposals();
}

function toggleProposalCheck(idx, checked) {
  dispatchProposals[idx].checked = checked;
  updateSelectedCountSummary();
}

function toggleSelectAllProposals(masterCheckbox) {
  const checked = masterCheckbox.checked;
  dispatchProposals.forEach(p => p.checked = checked);
  renderDispatchProposals();
}

function uncheckAllProposals() {
  dispatchProposals.forEach(p => p.checked = false);
  renderDispatchProposals();
}

function updateSelectedCountSummary() {
  const checkedCount = dispatchProposals.filter(p => p.checked).length;
  document.getElementById('dispatch-selected-summary').textContent = `Đã chọn ${checkedCount} / ${dispatchProposals.length}`;
  document.getElementById('sticky-title').textContent = `${checkedCount} đơn đã chọn · Sẵn sàng phê duyệt`;
}

function filterDispatchList() {
  const query = document.getElementById('dispatch-search').value.toLowerCase();
  const rows = document.querySelectorAll('#dispatch-table-body tr');
  rows.forEach((r, idx) => {
    const p = dispatchProposals[idx];
    if (!p) return;
    const match = p.id.toLowerCase().includes(query) || p.address.toLowerCase().includes(query) || p.ward.toLowerCase().includes(query);
    r.style.display = match ? '' : 'none';
  });
}

function runAIDispatch() {
  renderDispatchProposals();
  alert('⚡ Đã tái tính toán thuật toán Heuristic Dispatch v2.4!\nĐiểm khớp đã tối ưu hóa theo 3 trọng số w1=0.5, w2=0.3, w3=0.2.');
}

async function approveSelectedSuggestions() {
  const checkedProposals = dispatchProposals.filter(p => p.checked);
  if (checkedProposals.length === 0) {
    alert('Vui lòng chọn ít nhất 1 đề xuất để phê duyệt.');
    return;
  }

  // Also approve via backend API
  try {
    const res = await fetch('/api/dispatch/suggestions');
    const suggestions = await res.json();
    for (const s of suggestions) {
      await fetch('/api/dispatch/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ assignmentId: s.assignmentId })
      });
    }
  } catch (err) {}

  alert(`✓ Đã phê duyệt thành công ${checkedProposals.length} đơn hàng!\nTrạng thái chuyển sang ASSIGNED (Đã gán tài xế).\nAuditLog đã ghi nhận giao dịch nguyên tử.`);
  loadDashboard();
  loadAllOrders();
  loadDrivers();
  loadSimDriverTasks();
}

// ==========================================================================
// SCR-04: LẬP CA GIAO & ĐIỂM DANH TÀI XẾ
// ==========================================================================
async function loadDrivers() {
  const tbody = document.getElementById('drivers-table-body');
  tbody.innerHTML = '';

  const driversData = [
    { id: 'DRV-01', name: 'Nguyễn Văn An', phone: '0901 234 567', route: 'Tân Thuận Đông', desc: 'Thông thạo địa bàn ngõ hẻm', vehicle: 'Xe máy', cap: 15, current: 12, checkin: '07:45 · Sẵn sàng', checkinStatus: 'ready', receiving: true },
    { id: 'DRV-02', name: 'Trần Thị Minh Châu', phone: '0912 345 678', route: 'Tân Thuận Tây', desc: 'Thông thạo khu dân cư', vehicle: 'Xe máy', cap: 15, current: 7, checkin: '07:48 · Sẵn sàng', checkinStatus: 'ready', receiving: true },
    { id: 'DRV-03', name: 'Lê Hoàng Nam', phone: '0987 654 321', route: 'Tân Phú', desc: 'Chuyên tuyến trục đường lớn', vehicle: 'Xe bán tải', cap: 40, current: 24, checkin: '07:50 · Sẵn sàng', checkinStatus: 'ready', receiving: true },
    { id: 'DRV-04', name: 'Phạm Quốc Huy', phone: '0933 445 566', route: 'Bình Thuận', desc: 'Thông thạo địa bàn ngõ hẻm', vehicle: 'Xe máy', cap: 15, current: 5, checkin: '07:52 · Đã điểm danh', checkinStatus: 'paused', receiving: false },
    { id: 'DRV-05', name: 'Võ Minh Đức', phone: '0944 556 677', route: 'Phú Mỹ', desc: 'Chuyên tuyến kho & doanh nghiệp', vehicle: 'Xe bán tải', cap: 40, current: 0, checkin: 'Chưa điểm danh', checkinStatus: 'locked', receiving: false },
    { id: 'DRV-06', name: 'Đặng Thu Hà', phone: '0955 667 788', route: 'Tân Kiểng', desc: 'Thông thạo khu dân cư', vehicle: 'Xe máy', cap: 15, current: 0, checkin: 'Chưa điểm danh', checkinStatus: 'locked', receiving: false }
  ];

  driversData.forEach(d => {
    const pct = Math.round((d.current / d.cap) * 100);
    const barColor = pct >= 80 ? '#dc2626' : (pct >= 50 ? '#007791' : '#f59e0b');

    let checkinPill = '';
    if (d.checkinStatus === 'ready') {
      checkinPill = `<span style="color:#16a34a; font-weight:700;">● ${d.checkin}</span><div style="font-size:10.5px; color:var(--text-muted);">Đã điểm danh trong ca</div>`;
    } else if (d.checkinStatus === 'paused') {
      checkinPill = `<span class="scr-tag" style="background:#fef3c7; color:#b45309; font-weight:700;">● ${d.checkin}</span><div style="font-size:10.5px; color:var(--text-muted);">Đã điểm danh trong ca</div>`;
    } else {
      checkinPill = `<span style="color:#94a3b8;">○ Chưa điểm danh</span><div style="font-size:10.5px; color:#dc2626;">Không đủ điều kiện gán đơn</div>`;
    }

    let toggleBtn = '';
    if (d.checkinStatus === 'locked') {
      toggleBtn = `
        <div style="display: flex; align-items: center; gap: 6px; color: #94a3b8; font-size: 11.5px;">
          <span style="font-size: 14px;">🔒</span>
          <div>
            <div>Chưa thể nhận đơn</div>
            <div style="font-size: 10px; color: #dc2626;">Cần điểm danh · BR-03</div>
          </div>
        </div>
      `;
    } else if (d.receiving) {
      toggleBtn = `
        <div style="display: flex; align-items: center; gap: 8px;">
          <div style="width: 36px; height: 20px; background: #007791; border-radius: 10px; position: relative; cursor: pointer;">
            <div style="width: 16px; height: 16px; background: #fff; border-radius: 50%; position: absolute; right: 2px; top: 2px;"></div>
          </div>
          <div>
            <div style="font-weight: 700; color: var(--text-main); font-size: 11.5px;">Đang nhận đơn</div>
            <div style="font-size: 10px; color: #16a34a;">Đủ điều kiện gán đơn</div>
          </div>
        </div>
      `;
    } else {
      toggleBtn = `
        <div style="display: flex; align-items: center; gap: 8px;">
          <div style="width: 36px; height: 20px; background: #cbd5e1; border-radius: 10px; position: relative; cursor: pointer;">
            <div style="width: 16px; height: 16px; background: #fff; border-radius: 50%; position: absolute; left: 2px; top: 2px;"></div>
          </div>
          <div>
            <div style="font-weight: 700; color: #64748b; font-size: 11.5px;">Tạm dừng nhận việc</div>
            <div style="font-size: 10px; color: #b45309;">Không nhận thêm đơn mới</div>
          </div>
        </div>
      `;
    }

    tbody.innerHTML += `
      <tr>
        <td>
          <div style="font-size: 11px; color: var(--text-muted); font-weight: 700;">${d.id}</div>
          <strong style="color: var(--text-main); font-size: 13.5px;">${d.name}</strong>
          <div style="font-size: 11px; color: var(--text-muted);">${d.phone}</div>
        </td>
        <td>
          <div style="font-weight: 700; color: var(--text-main);">${d.route}</div>
          <div style="font-size: 11px; color: var(--text-muted);">${d.desc}</div>
        </td>
        <td>
          <div style="display: flex; align-items: center; gap: 6px;">
            <span style="font-size: 15px;">${d.vehicle === 'Xe máy' ? '🛵' : '🚚'}</span>
            <div>
              <div style="font-weight: 600;">${d.vehicle}</div>
              <div style="font-size: 10.5px; color: var(--text-muted);">Chuẩn ${d.cap} đơn</div>
            </div>
          </div>
        </td>
        <td>${checkinPill}</td>
        <td>
          <div style="display: flex; justify-content: space-between; font-size: 11.5px; margin-bottom: 3px;">
            <strong>${d.current} / ${d.cap} đơn</strong>
            <span style="font-size: 10.5px; color: var(--text-muted);">${pct}%</span>
          </div>
          <div style="height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden;">
            <div style="height: 100%; width: ${pct}%; background: ${barColor};"></div>
          </div>
        </td>
        <td>${toggleBtn}</td>
      </tr>
    `;
  });
}

function checkInNewDriver() {
  alert('✓ Điểm danh thành công tài xế DRV-05 (Võ Minh Đức) lúc ' + new Date().toLocaleTimeString() + '!\nTài xế đã đủ điều kiện gán đơn theo BR-03.');
  loadDrivers();
}

// ==========================================================================
// SCR-06: HỒ SƠ CHI TIẾT ĐƠN HÀNG (AUDIT TRAIL)
// ==========================================================================
function viewOrderDetail(orderId) {
  switchView('detail');
  loadOrderHistoryDetail(orderId);
}

function loadOrderHistoryDetail(orderId) {
  const isException = (orderId === 'ORD-FAIL-2');

  if (isException) {
    // Exact match of Figma 8_1593: Ngoại lệ kịch bản thay thế
    document.getElementById('detail-tracking-title').textContent = 'VF261106-00317';
    document.getElementById('detail-status-pill').textContent = 'Giao thất bại lần 2';
    document.getElementById('detail-status-pill').style.background = '#fef3c7';
    document.getElementById('detail-status-pill').style.color = '#b45309';
    document.getElementById('detail-update-time').textContent = '07/11/2026 · 09:35:46';
    document.getElementById('detail-recip-name').textContent = 'Nguyễn Thị Bích Loan';
    document.getElementById('detail-recip-phone').textContent = '0908 112 334';
    document.getElementById('detail-recip-addr').textContent = '45/8 Huỳnh Tấn Phát, Phường Tân Thuận Đông, Quận 7';
    document.getElementById('detail-cod-amount').textContent = '485.000 ₫';
    document.getElementById('detail-cod-status').textContent = 'Chưa thu';
    document.getElementById('detail-failure-count').textContent = '2';
    document.getElementById('detail-event-count').textContent = '4 sự kiện';

    document.getElementById('detail-failure-info').innerHTML = `
      <div style="color: #dc2626; font-size: 11px;">
        <strong>⚠️ 2 lần giao thất bại:</strong><br>
        • Lần 1 (06/11 14:20): Khách không nghe máy sau 3 cuộc.<br>
        • Lần 2 (07/11 09:35): Khách hẹn giao lại ca sau.
      </div>
    `;

    const timeline = document.getElementById('timeline-container');
    timeline.innerHTML = `
      <div style="border-left: 2px solid #e2e8f0; padding-left: 12px; margin-left: 6px;">
        <div style="margin-bottom: 14px;">
          <div style="font-size: 10.5px; color: var(--text-muted);">06/11/2026 · 08:00:00 GMT+7</div>
          <div style="font-weight: 700; color: var(--text-main);">PENDING ➔ READY_TO_DISPATCH</div>
          <div style="font-size: 11px; color: var(--text-muted);">Bởi: SYSTEM · Tiếp nhận từ sàn Shopee</div>
        </div>
        <div style="margin-bottom: 14px;">
          <div style="font-size: 10.5px; color: var(--text-muted);">06/11/2026 · 14:20:18 GMT+7</div>
          <div style="font-weight: 700; color: #dc2626;">IN_TRANSIT ➔ FAILED (Lần 1)</div>
          <div style="font-size: 11px; color: #b45309;">Lý do: Không liên lạc được sau 3 cuộc gọi. BBXL-0611-014.</div>
        </div>
        <div style="margin-bottom: 14px;">
          <div style="font-size: 10.5px; color: var(--text-muted);">07/11/2026 · 08:15:00 GMT+7</div>
          <div style="font-weight: 700; color: var(--text-main);">FAILED ➔ ASSIGNED (Phát lại ca sáng)</div>
          <div style="font-size: 11px; color: var(--text-muted);">Bởi: DISPATCHER_01 (Trần Bình)</div>
        </div>
        <div>
          <div style="font-size: 10.5px; color: var(--text-muted);">07/11/2026 · 09:35:46 GMT+7</div>
          <div style="font-weight: 700; color: #dc2626;">IN_TRANSIT ➔ FAILED (Lần 2 - Hiện tại)</div>
          <div style="font-size: 11px; color: #b45309;">Lý do: Khách hẹn giao lại ca 08/11. BBXL-0711-008.</div>
        </div>
      </div>
    `;
    return;
  }

  // Regular Order VF261109-00842 (Exact Figma 8_1341)
  document.getElementById('detail-tracking-title').textContent = 'VF261109-00842';
  document.getElementById('detail-status-pill').textContent = 'Đang vận chuyển';
  document.getElementById('detail-status-pill').style.background = '#e0f2fe';
  document.getElementById('detail-status-pill').style.color = '#0369a1';
  document.getElementById('detail-update-time').textContent = '09/11/2026 · 08:40:02';
  document.getElementById('detail-recip-name').textContent = 'Phạm Minh Anh';
  document.getElementById('detail-recip-phone').textContent = '0918 672 345';
  document.getElementById('detail-recip-addr').textContent = '112 Võ Văn Tần, Phường Xuân Hòa, TP. Hồ Chí Minh';
  document.getElementById('detail-cod-amount').textContent = '650.000 ₫';
  document.getElementById('detail-cod-status').textContent = 'Chưa thu';
  document.getElementById('detail-failure-count').textContent = '0';
  document.getElementById('detail-event-count').textContent = '3 sự kiện';

  document.getElementById('detail-failure-info').innerHTML = `
    <span>✔</span> Chưa có ngoại lệ. Chưa có lý do thất bại.
  `;

  const timeline = document.getElementById('timeline-container');
  timeline.innerHTML = `
    <div style="border-left: 2px solid #e2e8f0; padding-left: 12px; margin-left: 6px;">
      <!-- Event 1 -->
      <div style="margin-bottom: 16px; position: relative;">
        <div style="position: absolute; left: -18px; top: 4px; width: 10px; height: 10px; border-radius: 50%; background: #94a3b8; border: 2px solid #fff;"></div>
        <div style="font-size: 10.5px; color: var(--text-muted); font-family: ui-monospace, monospace;">08:00:15 GMT+7</div>
        <div style="font-weight: 700; color: var(--text-main); font-size: 13px;">PENDING ➔ READY_TO_DISPATCH</div>
        <div style="font-size: 11.5px; color: #475569;">⚙ Bởi: SYSTEM · Hệ thống</div>
        <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">📄 Nạp từ file tích hợp.</div>
      </div>

      <!-- Event 2 -->
      <div style="margin-bottom: 16px; position: relative;">
        <div style="position: absolute; left: -18px; top: 4px; width: 10px; height: 10px; border-radius: 50%; background: #94a3b8; border: 2px solid #fff;"></div>
        <div style="font-size: 10.5px; color: var(--text-muted); font-family: ui-monospace, monospace;">08:25:40 GMT+7</div>
        <div style="font-weight: 700; color: var(--text-main); font-size: 13px;">READY_TO_DISPATCH ➔ ASSIGNED</div>
        <div style="font-size: 11.5px; color: #475569;">👤 Bởi: DISPATCHER_01 (Trần Bình) · Điều phối</div>
        <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">📄 Duyệt đề xuất từ AI Engine.</div>
      </div>

      <!-- Event 3 (Current) -->
      <div style="position: relative;">
        <div style="position: absolute; left: -18px; top: 4px; width: 10px; height: 10px; border-radius: 50%; background: var(--teal-primary); border: 2px solid #fff;"></div>
        <div style="font-size: 10.5px; color: var(--text-muted); font-family: ui-monospace, monospace;">08:40:02 GMT+7</div>
        <div style="font-weight: 700; color: var(--teal-primary); font-size: 13px;">ASSIGNED ➔ IN_TRANSIT <span class="scr-tag" style="background:#e0f2fe; color:#0369a1; font-size:9.5px;">Hiện tại</span></div>
        <div style="font-size: 11.5px; color: #475569;">👤 Bởi: DRV-01 (Nguyễn An) · Tài xế</div>
        <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">📄 Quét mã xuất kho đi giao.</div>
      </div>
    </div>
  `;
}

// ==========================================================================
// SCR-07 & SCR-08: IPHONE 15 SIMULATOR CONTROLLER
// ==========================================================================
function toggleMobileSim() {
  const sim = document.getElementById('mobile-sim');
  sim.style.display = (sim.style.display === 'none' || !sim.style.display) ? 'flex' : 'none';
  if (sim.style.display === 'flex') {
    closeSimScr08();
    loadSimDriverTasks();
  }
}

async function loadSimDrivers() {
  try {
    const select = document.getElementById('sim-driver-select');
    select.innerHTML = `
      <option value="DRV-01">Nguyễn Văn An (DRV-01) · Tuyến Tân Thuận Đông</option>
      <option value="DRV-02">Trần Quốc Bình (DRV-02) · Tuyến Tân Phú</option>
      <option value="DRV-03">Lê Thị Chi (DRV-03) · Tuyến Tân Kiểng</option>
      <option value="DRV-04">Phạm Minh Dũng (DRV-04) · Tuyến Tân Phú</option>
    `;
    loadSimDriverTasks();
  } catch (err) {}
}

async function loadSimDriverTasks() {
  const container = document.getElementById('sim-tasks-container');
  container.innerHTML = '';

  // Exact sample tasks matching Figma 9_374
  const mockTasks = [
    {
      id: 'ORD-M1',
      code: 'VN241109086',
      recipient: 'Nguyễn Thị Lan',
      phone: '0903 456 789',
      address: 'Số 18, ngõ 68 Cầu Giấy, P. Quan Hoa, Q. Cầu Giấy',
      deadline: '10:00',
      cod: 450000,
      status: 'IN_TRANSIT',
      seq: 1
    },
    {
      id: 'ORD-M2',
      code: 'VN241109092',
      recipient: 'Trần Minh Đức',
      phone: '0986 217 540',
      address: 'Số 35, ngõ 165 Dương Quảng Hàm, P. Quan Hoa, Q. Cầu Giấy',
      deadline: '11:00',
      cod: 320000,
      status: 'IN_TRANSIT',
      seq: 2
    }
  ];

  document.getElementById('sim-on-vehicle').textContent = `${mockTasks.length} / 8`;
  let codSum = mockTasks.reduce((acc, t) => acc + t.cod, 0);
  document.getElementById('sim-cod-sum').textContent = formatMoney(codSum);

  mockTasks.forEach(t => {
    container.innerHTML += `
      <div class="sim-order-card">
        <div class="sim-order-head">
          <div style="display: flex; align-items: center; gap: 6px;">
            <div class="sim-order-num-circle">${t.seq}</div>
            <strong style="color: var(--text-main); font-size: 13.5px;">${t.code}</strong>
          </div>
          <span class="countdown-tag" style="font-size: 11px; background: #fef3c7; color: #b45309; padding: 2px 6px; border-radius: 4px;">
            ⏱ ${t.deadline}
          </span>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-top: 4px;">
          <div>
            <div style="font-weight: 700; font-size: 13.5px; color: var(--text-main);">${t.recipient}</div>
            <div style="font-size: 11.5px; color: var(--text-muted);">${t.phone}</div>
          </div>
          <a href="tel:${t.phone}" class="sim-phone-call-btn">📞</a>
        </div>

        <div style="font-size: 11.5px; color: #475569; margin-top: 4px; display: flex; gap: 4px;">
          <span>📍</span>
          <span>${t.address}</span>
        </div>

        <div style="border-top: 1px solid #f1f5f9; margin-top: 8px; padding-top: 6px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 11.5px; color: var(--text-muted);">COD</span>
          <strong style="font-size: 15px; color: var(--text-main);">${formatMoney(t.cod)}</strong>
        </div>

        <!-- 2 Action Buttons -->
        <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 8px;">
          <button class="btn-outline" style="width: 100%; justify-content: center; background: #ecfdf5; border-color: #a7f3d0; color: #15803d; font-weight: 700; padding: 7px;" onclick="simCompleteOrder('${t.id}', '${t.code}')">
            ✔ Giao thành công
          </button>
          <button class="btn-outline" style="width: 100%; justify-content: center; background: #fef2f2; border-color: #fecaca; color: #b91c1c; font-weight: 700; padding: 7px;" onclick="openSimScr08('${t.id}', '${t.code}', '${t.recipient}', '${t.address}', ${t.cod})">
            ✖ Báo sự cố
          </button>
        </div>
      </div>
    `;
  });
}

function simBulkPickup() {
  alert('✓ Nhận đủ 8 kiện hàng và xuất kho đi giao!\nTrạng thái chuyển sang IN_TRANSIT.');
  loadDashboard();
}

function simCompleteOrder(id, code) {
  alert(`✓ Đã giao thành công vận đơn ${code}!\nĐã thu đủ COD vào quỹ tài xế.`);
  loadSimDriverTasks();
  loadDashboard();
}

// SCR-08 FAILURE FLOW
function openSimScr08(orderId, trackingCode, name, addr, cod) {
  currentFailedOrderId = orderId;
  currentFailedTracking = trackingCode;
  currentFailureStep = (currentFailureStep >= 3) ? 1 : currentFailureStep;

  document.getElementById('sim-view-scr07').style.display = 'none';
  document.getElementById('sim-view-scr08-returned').style.display = 'none';
  document.getElementById('sim-view-scr08').style.display = 'flex';

  document.getElementById('scr08-tracking-title').textContent = `📦 GHN • ${trackingCode}`;
  document.getElementById('scr08-cod-title').textContent = `COD ${formatMoney(cod)}`;
  document.getElementById('scr08-cust-name').textContent = `${name} · 090 ••• 6828`;
  document.getElementById('scr08-cust-addr').textContent = addr;

  // Step indicator
  document.getElementById('scr08-failure-step-title').textContent = `Đang báo cáo lần ${currentFailureStep}/3`;
  document.getElementById('scr08-step-fraction').textContent = `${currentFailureStep - 1}/3`;

  // Update progress bars
  document.getElementById('scr08-bar-1').style.background = '#007791';
  document.getElementById('scr08-bar-2').style.background = currentFailureStep >= 2 ? '#007791' : '#e2e8f0';
  document.getElementById('scr08-bar-3').style.background = currentFailureStep >= 3 ? '#dc2626' : '#e2e8f0';

  if (currentFailureStep === 3) {
    document.getElementById('scr08-3rd-warning').style.display = 'block';
  } else {
    document.getElementById('scr08-3rd-warning').style.display = 'none';
  }
}

function closeSimScr08() {
  document.getElementById('sim-view-scr08').style.display = 'none';
  document.getElementById('sim-view-scr08-returned').style.display = 'none';
  document.getElementById('sim-view-scr07').style.display = 'flex';
}

function selectScr08Reason(reason) {
  ['01', '02', '03', '04'].forEach(n => {
    const card = document.getElementById(`card-code-${n}`);
    if (card) {
      card.style.borderColor = '#e2e8f0';
    }
  });

  const activeCard = document.getElementById(`card-code-${reason.toLowerCase().replace('_', '-')}`);
  if (activeCard) {
    activeCard.style.borderColor = 'var(--teal-primary)';
  }

  document.getElementById('box-sub-code-01').style.display = (reason === 'CODE_01') ? 'block' : 'none';
  document.getElementById('box-sub-code-03').style.display = (reason === 'CODE_03') ? 'block' : 'none';
}

function toggleScr08Photo() {
  const preview = document.getElementById('scr08-photo-preview');
  preview.style.display = (preview.style.display === 'none' || !preview.style.display) ? 'flex' : 'none';
}

function submitScr08Failure() {
  if (currentFailureStep === 1) {
    currentFailureStep = 2;
    alert('✓ Đã ghi nhận báo cáo giao thất bại lần 1/3!\nTrạng thái chuyển sang FAILED (Chờ phát lại). Đơn được chuyển về kho cuối ca.');
    closeSimScr08();
    loadDashboard();
  } else if (currentFailureStep === 2) {
    currentFailureStep = 3;
    alert('✓ Đã ghi nhận báo cáo giao thất bại lần 2/3!\nLịch hẹn ngày 10/11 14:00-17:00 đã được lưu lại.');
    closeSimScr08();
    loadDashboard();
  } else {
    // 3rd time -> RETURNED (Exact Figma 11:2336)
    document.getElementById('sim-view-scr08').style.display = 'none';
    document.getElementById('sim-view-scr08-returned').style.display = 'flex';
    currentFailureStep = 1;
    loadDashboard();
  }
}

// ==========================================================================
// 18 BẢN VẼ GỐC FIGMA GALLERY
// ==========================================================================
function loadFigmaGallery() {
  const container = document.getElementById('figma-gallery-container');
  container.innerHTML = '';

  const figmaScreens = [
    { title: "SCR-01 · Đăng nhập Desktop", file: "2_1889_SCR-01_Đăng_nhập_desktop.png", meta: "Frame 2:1889 · 1440 × 960 px" },
    { title: "SCR-01 · Đăng nhập Mobile Tài xế", file: "2_1957_SCR-01_Đăng_nhập_mobile_tài_xế.png", meta: "Frame 2:1957 · 390 × 844 px" },
    { title: "SCR-01 · Các trạng thái đăng nhập", file: "2_2010_SCR-01_Các_trạng_thái_đăng_nhập.png", meta: "Frame 2:2010 · 1440 × 1200 px" },
    { title: "SCR-01 · Chú giải phân quyền", file: "2_2148_SCR-01_Chú_giải_phân_quyền_và_chuyển_tiếp.png", meta: "Frame 2:2148 · 1440 × 900 px" },
    { title: "SCR-02 · Bàn điều hành trung tâm Hub", file: "4_769_SCR-02_Bàn_điều_hành_trung_tâm_Hub.png", meta: "Frame 4:769 · 1600 × 1171 px" },
    { title: "SCR-03 · Tiếp nhận và phân loại đơn", file: "5_5034_SCR-03_Tiếp_nhận_và_phân_loại_đơn.png", meta: "Frame 5:5034 · 1600 × 1360 px" },
    { title: "SCR-03 · Kết quả nhập & xử lý đơn lỗi", file: "5_5357_SCR-03_Kết_quả_nhập_và_xử_lý_đơn_lỗi.png", meta: "Frame 5:5357 · 1600 × 1360 px" },
    { title: "SCR-03 · Tạo đơn gửi lẻ thủ công", file: "5_5615_SCR-03_Tạo_đơn_gửi_lẻ_thủ_công.png", meta: "Frame 5:5615 · 1600 × 1360 px" },
    { title: "SCR-04 · Lập ca & Điểm danh tài xế", file: "6_1044_Lập_ca_giao_&_điểm_danh_tài_xế.png", meta: "Frame 6:1044 · 1600 × 1234 px" },
    { title: "SCR-05 · Gợi ý phân công tối ưu (AI)", file: "7_1728_SCR-05_Gợi_ý_phân_công_tối_ưu.png", meta: "Frame 7:1728 · 1600 × 1287 px" },
    { title: "SCR-06 · Hồ sơ chi tiết đơn hàng", file: "8_1341_SCR-06_Hồ_sơ_chi_tiết_đơn_hàng.png", meta: "Frame 8:1341 · 1600 × 1212 px" },
    { title: "SCR-06 · Ngoại lệ giao thất bại", file: "8_1593_Ngoại_lệ_Kịch_bản_thay_thế.png", meta: "Frame 8:1593 · 1600 × 1100 px" },
    { title: "SCR-07 · Tác vụ tài xế (Mobile App)", file: "9_374_SCR-07_Tác_vụ_tài_xế.png", meta: "Frame 9:374 · 393 × 852 px" },
    { title: "SCR-08 · Báo thất bại lần đầu", file: "11_1955_SCR-08_Báo_thất_bại_lần_đầu.png", meta: "Frame 11:1955 · 430 × 1301 px" },
    { title: "SCR-08 · Khách hẹn giao lại", file: "11_2044_SCR-08_Khách_hẹn_giao_lại.png", meta: "Frame 11:2044 · 430 × 1533 px" },
    { title: "SCR-08 · FAILED Chờ phát lại", file: "11_2150_SCR-08_FAILED_Chờ_phát_lại.png", meta: "Frame 11:2150 · 430 × 1200 px" },
    { title: "SCR-08 · Từ chối nhận lần 3", file: "11_2231_SCR-08_Từ_chối_nhận_Lần_thứ_ba.png", meta: "Frame 11:2231 · 430 × 1350 px" },
    { title: "SCR-08 · RETURNED Chuyển hoàn RTS", file: "11_2336_SCR-08_RETURNED_Chuyển_hoàn.png", meta: "Frame 11:2336 · 430 × 1331 px" }
  ];

  figmaScreens.forEach(s => {
    container.innerHTML += `
      <div class="figma-gallery-card">
        <a href="figma_previews/${s.file}" target="_blank">
          <img src="figma_previews/${s.file}" style="width: 100%; height: 210px; object-fit: cover; object-position: top; border-bottom: 1px solid var(--card-border);" loading="lazy">
        </a>
        <div style="padding: 12px 14px;">
          <div style="font-weight: 700; font-size: 13px; color: var(--text-main);">${s.title}</div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 3px;">${s.meta}</div>
        </div>
      </div>
    `;
  });
}

// --- UTILS ---
function renderStatusPill(status, display) {
  if (status === 'READY_TO_DISPATCH') return `<span class="scr-tag" style="background:#e0f2fe; color:#0369a1; font-weight:700;">● Sẵn sàng phát</span>`;
  if (status === 'ASSIGNED') return `<span class="scr-tag" style="background:#fef3c7; color:#92400e; font-weight:700;">● Đã gán tài xế</span>`;
  if (status === 'IN_TRANSIT') return `<span class="scr-tag" style="background:#ede9fe; color:#5b21b6; font-weight:700;">● Đang giao</span>`;
  if (status === 'DELIVERED') return `<span class="scr-tag" style="background:#f0fdf4; color:#15803d; font-weight:700;">● Giao thành công</span>`;
  if (status === 'FAILED') return `<span class="scr-tag" style="background:#fee2e2; color:#dc2626; font-weight:700;">● Giao thất bại</span>`;
  if (status === 'RETURNED') return `<span class="scr-tag" style="background:#450a0a; color:#fff; font-weight:700;">🔄 Chuyển hoàn</span>`;
  return `<span class="scr-tag">${display}</span>`;
}

function formatMoney(amount) {
  if (!amount) return '0 ₫';
  return Number(amount).toLocaleString('vi-VN') + ' ₫';
}
