import { useCallback, useEffect, useMemo, useState } from 'react';
import { apiClient, ApiError } from '../../services/apiClient';

type Shift = { id: string; name: string; area: string; start: string; end: string };
type ServiceLevel = 'STANDARD' | 'EXPRESS' | 'SAME_DAY';
type ShiftDriver = {
  driverId: string; name: string; assignedAreaId: string; currentLoad: number;
  capacityPerShift: number; checkedIn: boolean; availableForNewAssignments: boolean;
  services: ServiceLevel[];
};

const actorHeaders = { 'X-Actor-Id': 'DISPATCHER_WEB' };
const fmt = (instant: string) => new Date(instant).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });

/** Live counterpart of SCR-04. Every mutation goes through the Java API and reloads the
 * aggregate afterwards so it is safe to demonstrate the dispatch preconditions. */
export default function LiveShiftAttendance() {
  const [shifts, setShifts] = useState<Shift[]>([]);
  const [shiftId, setShiftId] = useState('');
  const [drivers, setDrivers] = useState<ShiftDriver[]>([]);
  const [attendance, setAttendance] = useState<'all' | 'checked_in' | 'not_checked_in'>('all');
  const [area, setArea] = useState('');
  const [query, setQuery] = useState('');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [attendancePickerOpen, setAttendancePickerOpen] = useState(false);
  const [uncheckedDrivers, setUncheckedDrivers] = useState<ShiftDriver[]>([]);
  const [selectedDriverIds, setSelectedDriverIds] = useState<Set<string>>(new Set());

  const activeShift = shifts.find(s => s.id === shiftId);
  const areas = useMemo(() => [...new Set(drivers.map(d => d.assignedAreaId))].sort(), [drivers]);

  const loadDrivers = useCallback(async (id = shiftId) => {
    if (!id) return;
    const result = await apiClient.get<ShiftDriver[]>(`/api/shifts/${id}/drivers`, { attendance, area, query });
    setDrivers(result);
  }, [shiftId, attendance, area, query]);

  const load = useCallback(async () => {
    try {
      setError('');
      const rows = await apiClient.get<Shift[]>('/api/shifts');
      setShifts(rows);
      const selected = shiftId && rows.some(s => s.id === shiftId) ? shiftId : rows[0]?.id ?? '';
      setShiftId(selected);
      if (selected) await loadDrivers(selected);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Không tải được dữ liệu ca giao.');
    }
  }, [shiftId, loadDrivers]);

  useEffect(() => { void load(); }, []); // Initial read only.
  useEffect(() => { if (shiftId) void loadDrivers(); }, [shiftId, attendance, area, query, loadDrivers]);

  const mutate = async (action: () => Promise<unknown>, success: string) => {
    try {
      setBusy(true); setError(''); setMessage('');
      await action();
      await loadDrivers();
      setMessage(success);
    } catch (e) {
      setError(e instanceof ApiError || e instanceof Error ? e.message : 'Thao tác không thành công.');
    } finally { setBusy(false); }
  };

  const checkIn = (driver: ShiftDriver, present: boolean) =>
    mutate(() => apiClient.post<void>(`/api/shifts/${shiftId}/attendance`, { driverId: driver.driverId, present }, actorHeaders),
      present ? `${driver.name} đã được điểm danh.` : `${driver.name} được ghi nhận vắng mặt.`);

  const openAttendancePicker = async () => {
    try {
      setBusy(true); setError('');
      const rows = await apiClient.get<ShiftDriver[]>(`/api/shifts/${shiftId}/drivers`, { attendance: 'not_checked_in' });
      setUncheckedDrivers(rows);
      setSelectedDriverIds(new Set());
      setAttendancePickerOpen(true);
    } catch (e) { setError(e instanceof Error ? e.message : 'Không tải được danh sách tài xế chưa điểm danh.'); }
    finally { setBusy(false); }
  };

  const confirmSelectedCheckIns = () => mutate(async () => {
    await Promise.all([...selectedDriverIds].map(driverId =>
      apiClient.post<void>(`/api/shifts/${shiftId}/attendance`, { driverId, present: true }, actorHeaders)));
    setAttendancePickerOpen(false);
  }, `Đã điểm danh ${selectedDriverIds.size} tài xế được chọn.`);

  const setAvailability = (driver: ShiftDriver, active: boolean) =>
    mutate(() => apiClient.put<void>(`/api/drivers/${driver.driverId}`, {
      name: driver.name, area: driver.assignedAreaId, capacity: driver.capacityPerShift,
      active, services: driver.services,
    }, actorHeaders), active ? `${driver.name} sẵn sàng nhận đơn.` : `${driver.name} đã tạm dừng nhận đơn.`);

  const exportCsv = async () => {
    try {
      setBusy(true); setError('');
      const response = await fetch(`/api/shifts/${shiftId}/attendance/export`, { headers: { Accept: 'text/csv' } });
      if (!response.ok) throw new Error('Không xuất được danh sách điểm danh.');
      const blob = await response.blob(); const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url; a.download = `attendance-${shiftId}.csv`; a.click(); URL.revokeObjectURL(url);
      setMessage('Đã xuất danh sách điểm danh CSV.');
    } catch (e) { setError(e instanceof Error ? e.message : 'Không xuất được danh sách.'); }
    finally { setBusy(false); }
  };

  const checkedIn = drivers.filter(d => d.checkedIn).length;
  const available = drivers.filter(d => d.checkedIn && d.availableForNewAssignments).length;
  return <div className="min-h-screen bg-slate-100 text-slate-900 p-6 md:p-10">
    <div className="mx-auto max-w-7xl space-y-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div><p className="text-sm text-teal-700 font-semibold">Điều phối / Ca giao</p><h1 className="text-3xl font-bold">Lập ca giao & điểm danh tài xế</h1>
          <p className="mt-1 text-sm text-slate-600">Chỉ tài xế đã điểm danh, đang nhận đơn, đúng khu vực và còn tải mới được gợi ý phân công.</p></div>
        <div className="flex gap-2"><button disabled={busy || !shiftId} onClick={exportCsv} className="rounded-lg border px-4 py-2 font-semibold disabled:opacity-50">Xuất danh sách</button>
          <button disabled={busy || !shiftId} onClick={openAttendancePicker} className="rounded-lg bg-teal-700 px-4 py-2 font-semibold text-white disabled:opacity-50">Điểm danh tài xế</button></div>
      </div>
      {error && <div className="rounded-lg border border-red-300 bg-red-50 p-3 text-red-700">{error}</div>}
      {message && <div className="rounded-lg border border-emerald-300 bg-emerald-50 p-3 text-emerald-800">✓ {message}</div>}
      <div className="grid gap-3 md:grid-cols-4">
        <label className="rounded-xl bg-white p-4 shadow-sm">Ca giao<select value={shiftId} onChange={e => setShiftId(e.target.value)} className="mt-2 w-full rounded border p-2">{shifts.map(s => <option key={s.id} value={s.id}>{s.name} · {s.area} · {fmt(s.start)}–{fmt(s.end)}</option>)}</select></label>
        <div className="rounded-xl bg-white p-4 shadow-sm"><p className="text-sm text-slate-500">Tài xế trong ca</p><p className="text-3xl font-bold">{drivers.length}</p></div>
        <div className="rounded-xl bg-white p-4 shadow-sm"><p className="text-sm text-slate-500">Đã điểm danh</p><p className="text-3xl font-bold text-teal-700">{checkedIn}/{drivers.length}</p></div>
        <div className="rounded-xl bg-white p-4 shadow-sm"><p className="text-sm text-slate-500">Có thể nhận đơn</p><p className="text-3xl font-bold text-teal-700">{available}</p></div>
      </div>
      <div className="rounded-xl border border-teal-100 bg-teal-50 p-4 text-sm text-slate-700"><b>BR-03.</b> Điểm danh là điều kiện bắt buộc trước khi gán đơn. Tài xế vắng mặt, tạm dừng hoặc đạt tải 15/15 không được đề xuất phân công.</div>
      <div className="rounded-xl bg-white p-5 shadow-sm space-y-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><div className="flex gap-2">{(['all','checked_in','not_checked_in'] as const).map(f => <button key={f} onClick={() => setAttendance(f)} className={`rounded-full px-3 py-1.5 text-sm font-semibold ${attendance === f ? 'bg-teal-700 text-white' : 'bg-slate-100'}`}>{f === 'all' ? 'Tất cả' : f === 'checked_in' ? 'Đã điểm danh' : 'Chưa điểm danh'}</button>)}</div>
          <div className="flex gap-2"><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Tìm mã hoặc tên tài xế" className="rounded border px-3 py-2 text-sm"/><select value={area} onChange={e => setArea(e.target.value)} className="rounded border px-3 py-2 text-sm"><option value="">Tất cả tuyến</option>{areas.map(a => <option key={a}>{a}</option>)}</select></div></div>
        <div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="border-b text-slate-500"><tr><th className="p-3">Tài xế</th><th className="p-3">Khu vực</th><th className="p-3">Điểm danh</th><th className="p-3">Tải</th><th className="p-3">Nhận đơn</th><th className="p-3">Thao tác</th></tr></thead>
          <tbody>{drivers.map(d => <tr key={d.driverId} className="border-b"><td className="p-3"><b>{d.name}</b><div className="text-xs text-slate-500">{d.driverId}</div></td><td className="p-3">{d.assignedAreaId}</td><td className="p-3"><span className={d.checkedIn ? 'text-emerald-700' : 'text-slate-500'}>{d.checkedIn ? '● Đã điểm danh' : '○ Chưa điểm danh'}</span></td><td className="p-3">{d.currentLoad}/{d.capacityPerShift} đơn</td><td className="p-3">{d.checkedIn ? <button onClick={() => setAvailability(d, !d.availableForNewAssignments)} disabled={busy} className={`rounded px-3 py-1.5 font-semibold ${d.availableForNewAssignments ? 'bg-teal-700 text-white' : 'bg-slate-200'}`}>{d.availableForNewAssignments ? 'Đang nhận đơn' : 'Tạm dừng'}</button> : <span className="text-slate-400">Bị khóa — chưa điểm danh</span>}</td><td className="p-3 flex gap-2">{!d.checkedIn ? <button disabled={busy} onClick={() => checkIn(d, true)} className="rounded bg-teal-700 px-3 py-1.5 text-white">Điểm danh</button> : <button disabled={busy || d.currentLoad > 0} onClick={() => checkIn(d, false)} className="rounded border px-3 py-1.5 disabled:opacity-50">Ghi vắng</button>}</td></tr>)}</tbody></table></div>
        {drivers.length === 0 && <p className="p-6 text-center text-slate-500">Không tìm thấy tài xế theo bộ lọc hiện tại.</p>}
      </div>
      {activeShift && <p className="text-xs text-slate-500">Ca đang chọn: {activeShift.name} ({activeShift.id}). Mọi thay đổi được lưu qua API và sẽ ảnh hưởng trực tiếp đến gợi ý phân công.</p>}
    </div>
    {attendancePickerOpen && <div className="fixed inset-0 z-40 grid place-items-center bg-slate-950/40 p-4">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl">
        <h2 className="text-xl font-bold">Điểm danh tài xế</h2>
        <p className="mt-1 text-sm text-slate-600">Chọn từng tài xế có mặt trong ca. Không có thao tác điểm danh hàng loạt vô điều kiện.</p>
        <div className="mt-4 max-h-72 space-y-2 overflow-y-auto">
          {uncheckedDrivers.length === 0 ? <p className="py-5 text-center text-slate-500">Tất cả tài xế đã được điểm danh.</p> : uncheckedDrivers.map(d => <label key={d.driverId} className="flex cursor-pointer items-center justify-between rounded-lg border p-3 hover:bg-slate-50"><span><b>{d.name}</b><span className="ml-2 text-xs text-slate-500">{d.driverId} · {d.assignedAreaId}</span></span><input type="checkbox" checked={selectedDriverIds.has(d.driverId)} onChange={e => setSelectedDriverIds(previous => { const next = new Set(previous); e.target.checked ? next.add(d.driverId) : next.delete(d.driverId); return next; })}/></label>)}
        </div>
        <div className="mt-5 flex justify-end gap-2"><button disabled={busy} onClick={() => setAttendancePickerOpen(false)} className="rounded-lg border px-4 py-2">Hủy</button><button disabled={busy || selectedDriverIds.size === 0} onClick={confirmSelectedCheckIns} className="rounded-lg bg-teal-700 px-4 py-2 font-semibold text-white disabled:opacity-50">Xác nhận ({selectedDriverIds.size})</button></div>
      </div>
    </div>}
  </div>;
}
