import React, { useEffect, useState } from 'react';
import { apiClient } from '../../services/apiClient';
import { orderService } from '../../services/orderService';
import { driverService } from '../../services/driverService';
import type { DeliveryOrder, Driver } from '../../types';

const card = 'bg-white rounded-xl border border-[#dbe4ea] p-6 shadow-sm font-sans w-full max-w-5xl mx-auto my-6';
const btn = 'px-4 py-2 rounded-md text-[12px] font-semibold cursor-pointer whitespace-nowrap shrink-0';

const fmtTime = (val?: string) => {
  if (!val) return '—';
  const d = new Date(val);
  if (Number.isNaN(d.getTime())) return val;
  return d.toLocaleString('vi-VN', { hour12: false });
};

export const LiveCancelOrder: React.FC = () => {
  const [orders, setOrders] = useState<DeliveryOrder[]>([]); const [selected, setSelected] = useState(''); const [reason, setReason] = useState('Người gửi yêu cầu hủy'); const [message, setMessage] = useState('');
  const load = async () => setOrders(await orderService.getOrders()); useEffect(()=>{load().catch(e=>setMessage(e.message));},[]);
  const cancel = async () => { try { await apiClient.post(`/api/orders/${selected}/cancel?reason=${encodeURIComponent(reason)}`, undefined, {'X-Actor-Id':'DISPATCHER_WEB'}); setMessage('Đã hủy đơn và ghi audit.'); setSelected(''); await load(); } catch(e:any) { setMessage(e.message); } };
  return (
    <div className="w-full px-4">
      <div className={`${card} max-w-3xl`}>
        <h2 className="text-xl font-bold text-[#142b3b]">Hủy đơn hàng</h2>
        <p className="text-[13px] text-[#657684] mt-1">Chỉ cho phép hủy trước khi tài xế bắt đầu phát.</p>
        <select value={selected} onChange={e=>setSelected(e.target.value)} className="mt-5 w-full border border-[#cbd5e1] rounded-md px-3 py-2 text-sm">
          <option value="">Chọn đơn cần hủy</option>
          {orders.filter(o=>!['IN_TRANSIT','DELIVERED','RETURNED','CANCELLED'].includes(o.status)).map(o=><option key={o.orderId} value={o.orderId}>{o.trackingCode} · {o.status}</option>)}
        </select>
        <select value={reason} onChange={e=>setReason(e.target.value)} className="mt-3 w-full border border-[#cbd5e1] rounded-md px-3 py-2 text-sm">
          <option>Người gửi yêu cầu hủy</option>
          <option>Đơn trùng</option>
          <option>Thông tin không thể điều chỉnh</option>
          <option>Lý do khác</option>
        </select>
        <button disabled={!selected} onClick={cancel} className={`${btn} mt-4 bg-[#b91c1c] text-white disabled:opacity-50`}>Xác nhận hủy đơn</button>
        {message && <p className="mt-4 text-sm text-[#087f8c] font-medium">{message}</p>}
      </div>
    </div>
  );
};

export const LiveAuditLog: React.FC = () => {
  const [rows, setRows] = useState<any[]>([]);
  const [q, setQ] = useState('');
  const [loading, setLoading] = useState(true);
  const load = async (query = q) => {
    setLoading(true);
    try {
      setRows(await apiClient.get('/api/audit', query.trim() ? { q: query.trim() } : {}));
    } catch {
      setRows([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => { void load(''); }, []);
  return (
    <div className="w-full px-4">
      <div className={card}>
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="min-w-0">
            <h2 className="text-xl font-bold text-[#142b3b]">Nhật ký hệ thống</h2>
            <p className="text-xs text-[#657684] mt-1">Chỉ đọc · truy vết người thao tác, hành động và thay đổi trạng thái.</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') void load(q); }}
              placeholder="Mã đơn / hành động"
              className="border border-[#cbd5e1] rounded-md px-3 py-2 text-xs w-[220px] focus:outline-none focus:border-[#087f8c]"
            />
            <button onClick={() => void load(q)} className={`${btn} bg-[#087f8c] hover:bg-[#066570] text-white`}>Lọc</button>
          </div>
        </div>
        <div className="overflow-x-auto mt-5">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b bg-[#f6f8fa] text-[#475569]">
                <th className="p-2.5 whitespace-nowrap">Thời gian</th>
                <th className="p-2.5 whitespace-nowrap">Người thao tác</th>
                <th className="p-2.5">Hành động</th>
                <th className="p-2.5 whitespace-nowrap">Mã đơn</th>
                <th className="p-2.5 whitespace-nowrap">Thay đổi trạng thái</th>
                <th className="p-2.5 whitespace-nowrap">Mã lý do</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={6} className="p-6 text-center text-[#657684]">Đang tải nhật ký hệ thống...</td></tr>
              ) : rows.length === 0 ? (
                <tr><td colSpan={6} className="p-6 text-center text-[#657684]">Không tìm thấy bản ghi nhật ký phù hợp.</td></tr>
              ) : rows.map((r, i) => (
                <tr key={i} className="border-b hover:bg-[#f8fafc]">
                  <td className="p-2.5 whitespace-nowrap text-[#475569]">{fmtTime(r.occurredAt)}</td>
                  <td className="p-2.5 whitespace-nowrap font-medium">{r.actorId}</td>
                  <td className="p-2.5">{r.action}</td>
                  <td className="p-2.5 font-mono font-semibold text-[#087f8c] whitespace-nowrap">{r.trackingCode}</td>
                  <td className="p-2.5 whitespace-nowrap">{r.fromStatus || '—'} → {r.toStatus || '—'}</td>
                  <td className="p-2.5 whitespace-nowrap text-[#64748b]">{r.reasonCode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export const LiveReports: React.FC = () => {
  const [orders, setOrders] = useState<DeliveryOrder[]>([]);
  useEffect(() => { orderService.getOrders().then(setOrders).catch(() => {}); }, []);
  const download = () => {
    const header = 'trackingCode,status,areaId,serviceLevel,failureCount\n';
    const body = orders.map(o => [o.trackingCode, o.status, o.areaId, o.serviceLevel, o.failureCount].join(',')).join('\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([header + body], { type: 'text/csv' }));
    a.download = 'minerva-report.csv';
    a.click();
  };
  return (
    <div className="w-full px-4">
      <div className={card}>
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div>
            <h2 className="text-xl font-bold text-[#142b3b]">Báo cáo vận hành</h2>
            <p className="text-xs text-[#657684] mt-1">Tính theo dữ liệu hiện tại, không gọi là real-time.</p>
          </div>
          <button onClick={download} className={`${btn} bg-[#087f8c] hover:bg-[#066570] text-white`}>Xuất CSV</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
          {[
            ['Tổng đơn', orders.length],
            ['Đã giao', orders.filter(o => o.status === 'DELIVERED').length],
            ['Ngoại lệ', orders.filter(o => ['FAILED', 'RETURN_PENDING', 'RETURNED'].includes(o.status)).length],
            ['Đang xử lý', orders.filter(o => !['DELIVERED', 'RETURNED', 'CANCELLED'].includes(o.status)).length],
          ].map(([k, v]) => (
            <div key={String(k)} className="bg-[#f6f8fa] rounded-lg p-4 border border-[#e2e8f0]">
              <div className="text-xs text-[#657684]">{k}</div>
              <strong className="text-2xl text-[#142b3b] block mt-1">{v}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const LiveDriverManagement: React.FC = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  useEffect(() => { driverService.getDrivers().then(setDrivers).catch(() => {}); }, []);
  return (
    <div className="w-full px-4">
      <div className={card}>
        <h2 className="text-xl font-bold text-[#142b3b]">Quản lý tài xế và khu vực</h2>
        <div className="overflow-x-auto mt-5">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b bg-[#f6f8fa] text-[#475569]">
                <th className="p-2.5">Mã</th>
                <th className="p-2.5">Tên</th>
                <th className="p-2.5">Khu vực</th>
                <th className="p-2.5">Trạng thái</th>
                <th className="p-2.5">Tải</th>
              </tr>
            </thead>
            <tbody>
              {drivers.map(d => (
                <tr key={d.driverId} className="border-b hover:bg-[#f8fafc]">
                  <td className="p-2.5 font-mono font-semibold text-[#087f8c]">{d.driverId}</td>
                  <td className="p-2.5 font-medium">{d.name}</td>
                  <td className="p-2.5">{d.assignedAreaId}</td>
                  <td className="p-2.5">{d.active ? 'Đang hoạt động' : 'Tạm nghỉ'}</td>
                  <td className="p-2.5">{d.currentLoad}/{d.capacityPerShift}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
