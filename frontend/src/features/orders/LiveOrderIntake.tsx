import React, { useState } from 'react';
import { useOrders } from '../../hooks';
import { LoadingSpinner, ErrorMessage } from '../../components';
import type { DeliveryOrder, OrderStatus, SlaRiskLevel } from '../../types';

export const LiveOrderIntake: React.FC = () => {
  const {
    filteredOrders,
    isLoading,
    error,
    refresh,
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    riskFilter,
    setRiskFilter,
    stats,
  } = useOrders();

  const [viewMode, setViewMode] = useState<'table' | 'card'>('table');
  const [pageSize, setPageSize] = useState<number>(100);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Pagination calculation
  const totalRecords = filteredOrders.length;
  const totalPages = Math.ceil(totalRecords / pageSize) || 1;
  const paginatedOrders = filteredOrders.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  // Sum of COD for all matching records
  const totalCodAmount = filteredOrders.reduce((sum, order) => sum + (order.codAmount || 0), 0);

  const getRiskBadge = (level: SlaRiskLevel, explanation?: string) => {
    switch (level) {
      case 'HIGH_RISK':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-[#fee2e2] text-[#dc2626] border border-[#fca5a5]">
            ⚠️ Nguy cơ cao
          </span>
        );
      case 'AT_RISK':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-[#fef9c3] text-[#854d0e] border border-[#fde047]">
            ⏱ Cần chú ý
          </span>
        );
      case 'SAFE':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#dcfce7] text-[#166534] border border-[#86efac]">
            ✓ An toàn
          </span>
        );
      case 'BREACHED':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-[#991b1b] text-white">
            ⛔ Quá hạn SLA
          </span>
        );
      default:
        return <span className="text-[#64748b] text-[11px]">—</span>;
    }
  };

  const getStatusBadge = (status: OrderStatus, display: string) => {
    switch (status) {
      case 'DELIVERED':
        return <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#dcfce7] text-[#15803d]">Đã giao thành công</span>;
      case 'FAILED':
        return <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#fee2e2] text-[#b91c1c]">Giao thất bại</span>;
      case 'RETURN_PENDING':
        return <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#fff7ed] text-[#c2410c]">Chờ hoàn hàng</span>;
      case 'RETURNED':
        return <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#e2e8f0] text-[#475569]">Đã hoàn hàng</span>;
      case 'IN_TRANSIT':
        return <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#fef3c7] text-[#b45309]">Đang giao hàng</span>;
      case 'ASSIGNED':
        return <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#eff6ff] text-[#1d4ed8]">Đã gán tài xế</span>;
      case 'READY_TO_DISPATCH':
        return <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#e0f2fe] text-[#0369a1]">Sẵn sàng điều phối</span>;
      case 'PENDING':
        return <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#f1f5f9] text-[#475569]">Chờ tiếp nhận</span>;
      default:
        return <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#f1f5f9] text-[#475569]">{display || status}</span>;
    }
  };

  return (
    <div className="bg-white rounded-xl border border-[#dbeafe] shadow-xs overflow-hidden">
      {/* Header & Controls */}
      <div className="p-4 border-b border-[#e2e8f0] bg-[#f8fafc]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div>
            <h3 className="text-[16px] font-bold text-[#1e3a8a] m-0">
              Danh sách tiếp nhận & phân loại đơn hàng (Dữ liệu API thực)
            </h3>
            <p className="text-[12px] text-[#64748b] mt-0.5 mb-0">
              Tổng số {stats.total} đơn hàng · {stats.highRisk} đơn nguy cơ cao · {stats.delivered} đơn đã giao thành công
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="inline-flex rounded-md border border-[#cbd5e1] bg-white p-0.5 text-[12px]">
              <button
                type="button"
                onClick={() => setViewMode('table')}
                className={`px-3 py-1 font-semibold rounded cursor-pointer transition-colors ${
                  viewMode === 'table' ? 'bg-[#2563eb] text-white shadow-2xs' : 'text-[#64748b] hover:text-[#0f172a]'
                }`}
              >
                ⊞ Dạng bảng
              </button>
              <button
                type="button"
                onClick={() => setViewMode('card')}
                className={`px-3 py-1 font-semibold rounded cursor-pointer transition-colors ${
                  viewMode === 'card' ? 'bg-[#2563eb] text-white shadow-2xs' : 'text-[#64748b] hover:text-[#0f172a]'
                }`}
              >
                ▦ Dạng thẻ
              </button>
            </div>

            <button
              type="button"
              onClick={refresh}
              disabled={isLoading}
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[12px] font-semibold px-3 py-1.5 rounded-md cursor-pointer transition-colors shadow-2xs flex items-center gap-1"
            >
              <span>↺</span>
              <span>Làm mới</span>
            </button>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pt-2">
          <div className="sm:col-span-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Tìm kiếm theo mã vận đơn, người nhận, SĐT, địa chỉ..."
              className="w-full text-[13px] px-3 py-2 bg-white border border-[#cbd5e1] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
            />
          </div>

          <div>
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value as OrderStatus | 'ALL');
                setCurrentPage(1);
              }}
              aria-label="Lọc theo trạng thái"
              className="w-full text-[13px] px-3 py-2 bg-white border border-[#cbd5e1] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
            >
              <option value="ALL">Tất cả trạng thái</option>
              <option value="PENDING">Chờ tiếp nhận</option>
              <option value="READY_TO_DISPATCH">Sẵn sàng điều phối</option>
              <option value="ASSIGNED">Đã gán tài xế</option>
              <option value="IN_TRANSIT">Đang giao hàng</option>
              <option value="DELIVERED">Đã giao thành công</option>
              <option value="FAILED">Giao thất bại</option>
              <option value="RETURN_PENDING">Chờ hoàn hàng</option>
              <option value="RETURNED">Đã hoàn hàng</option>
            </select>
          </div>

          <div>
            <select
              value={riskFilter}
              onChange={(e) => {
                setRiskFilter(e.target.value as SlaRiskLevel | 'ALL');
                setCurrentPage(1);
              }}
              aria-label="Lọc theo mức rủi ro SLA"
              className="w-full text-[13px] px-3 py-2 bg-white border border-[#cbd5e1] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
            >
              <option value="ALL">Tất cả mức SLA</option>
              <option value="HIGH_RISK">⚠️ Nguy cơ cao (&lt; 60p)</option>
              <option value="AT_RISK">⏱ Cần chú ý (60-120p)</option>
              <option value="SAFE">✓ An toàn (&gt; 120p)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      {error && <div className="p-4"><ErrorMessage message={error} onRetry={refresh} /></div>}

      {isLoading ? (
        <div className="py-12"><LoadingSpinner message="Đang tải dữ liệu đơn hàng từ máy chủ Java..." /></div>
      ) : paginatedOrders.length === 0 ? (
        <div className="py-12 text-center text-[#64748b]">
          <p className="text-[14px]">Không tìm thấy đơn hàng nào phù hợp với điều kiện lọc.</p>
        </div>
      ) : viewMode === 'table' ? (
        /* TABLE VIEW */
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-[12.5px]">
            <thead>
              <tr className="bg-[#eff6ff] text-[#1e3a8a] border-b border-[#bfdbfe] font-semibold">
                <th className="py-3 px-3">Mã vận đơn</th>
                <th className="py-3 px-3">Người nhận</th>
                <th className="py-3 px-3">Số điện thoại</th>
                <th className="py-3 px-3">Địa chỉ giao</th>
                <th className="py-3 px-3">Gói dịch vụ</th>
                <th className="py-3 px-3">Hạn SLA</th>
                <th className="py-3 px-3 text-right">Tiền COD</th>
                <th className="py-3 px-3">Trạng thái</th>
                <th className="py-3 px-3">Rủi ro SLA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0]">
              {paginatedOrders.map((order) => (
                <tr key={order.orderId || order.trackingCode} className="hover:bg-[#f8fafc] transition-colors">
                  <td className="py-3 px-3 font-mono font-bold text-[#2563eb]">
                    {order.trackingCode}
                    {order.failureCount > 0 && (
                      <span className="ml-1.5 px-1.5 py-0.2 rounded text-[10px] font-bold bg-[#fee2e2] text-[#dc2626]">
                        Lần {order.failureCount}
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-3 font-medium text-[#0f172a]">{order.recipientName}</td>
                  <td className="py-3 px-3 text-[#475569]">{order.recipientPhone}</td>
                  <td className="py-3 px-3 text-[#334155] max-w-[240px] truncate" title={order.address}>
                    {order.address}
                  </td>
                  <td className="py-3 px-3 text-[#0369a1] font-semibold">{order.serviceLevelDisplay || order.serviceLevel}</td>
                  <td className="py-3 px-3 font-mono text-[#475569]">{order.slaDeadline || '—'}</td>
                  <td className="py-3 px-3 text-right font-mono font-semibold text-[#0f172a]">
                    {(order.codAmount || 0).toLocaleString('vi-VN')} đ
                  </td>
                  <td className="py-3 px-3">{getStatusBadge(order.status, order.statusDisplay)}</td>
                  <td className="py-3 px-3">{getRiskBadge(order.riskLevel, order.riskExplanation)}</td>
                </tr>
              ))}
            </tbody>
            {/* TOTAL ROW (HÀNG TỔNG) */}
            <tfoot>
              <tr className="bg-[#f1f5f9] font-bold text-[#1e293b] border-t-2 border-[#cbd5e1]">
                <td className="py-3 px-3" colSpan={4}>
                  TỔNG CỘNG ({totalRecords} đơn hàng phù hợp)
                </td>
                <td className="py-3 px-3 text-right" colSpan={3}>
                  Tổng COD: <span className="text-[#2563eb] font-mono">{totalCodAmount.toLocaleString('vi-VN')} đ</span>
                </td>
                <td className="py-3 px-3" colSpan={2}>
                  Đúng hạn: <span className="text-[#16a34a]">{stats.safe}</span> · Nguy cơ cao: <span className="text-[#dc2626]">{stats.highRisk}</span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
        /* CARD VIEW */
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {paginatedOrders.map((order) => (
              <div key={order.orderId || order.trackingCode} className="bg-white border border-[#e2e8f0] rounded-lg p-3.5 shadow-2xs hover:border-[#bfdbfe] transition-all">
                <div className="flex items-center justify-between pb-2 border-b border-[#f1f5f9]">
                  <span className="font-mono font-bold text-[#2563eb] text-[13px]">{order.trackingCode}</span>
                  {getRiskBadge(order.riskLevel, order.riskExplanation)}
                </div>

                <div className="mt-2.5 space-y-1.5 text-[12px]">
                  <div className="flex justify-between">
                    <span className="text-[#64748b]">Người nhận:</span>
                    <strong className="text-[#0f172a]">{order.recipientName} ({order.recipientPhone})</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#64748b]">Địa chỉ:</span>
                    <span className="text-[#334155] text-right truncate max-w-[200px]" title={order.address}>{order.address}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#64748b]">Dịch vụ / Hạn SLA:</span>
                    <span className="text-[#475569]">{order.serviceLevelDisplay} · {order.slaDeadline}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-[#f1f5f9]">
                    <span className="text-[#64748b]">Thu hộ COD:</span>
                    <strong className="text-[#2563eb] font-mono text-[13px]">{(order.codAmount || 0).toLocaleString('vi-VN')} đ</strong>
                  </div>
                </div>

                <div className="mt-2.5 pt-2 border-t border-[#f1f5f9] flex justify-between items-center">
                  <span className="text-[11px] text-[#64748b]">Trạng thái:</span>
                  {getStatusBadge(order.status, order.statusDisplay)}
                </div>
              </div>
            ))}
          </div>

          {/* TOTAL CARD */}
          <div className="p-3.5 bg-[#eff6ff] border border-[#bfdbfe] rounded-lg flex flex-wrap items-center justify-between text-[13px] font-bold text-[#1e3a8a]">
            <span>Tổng cộng: {totalRecords} đơn hàng</span>
            <span>Tổng tiền COD: {totalCodAmount.toLocaleString('vi-VN')} đ</span>
          </div>
        </div>
      )}

      {/* Pagination Controls */}
      <div className="p-3.5 border-t border-[#e2e8f0] bg-[#f8fafc] flex flex-wrap items-center justify-between gap-3 text-[12px]">
        <div className="flex items-center gap-2 text-[#64748b]">
          <span>Hiển thị</span>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="border border-[#cbd5e1] rounded px-2 py-1 bg-white font-medium"
          >
            <option value={50}>50</option>
            <option value={100}>100 (Mặc định)</option>
            <option value={200}>200</option>
          </select>
          <span>bản ghi / trang</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[#64748b]">
            Trang {currentPage} / {totalPages}
          </span>
          <div className="inline-flex rounded-md border border-[#cbd5e1] bg-white">
            <button
              type="button"
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              className="px-2.5 py-1 text-[#475569] hover:bg-[#f1f5f9] disabled:opacity-40 cursor-pointer"
            >
              ◀ Trước
            </button>
            <button
              type="button"
              disabled={currentPage >= totalPages}
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              className="px-2.5 py-1 text-[#475569] hover:bg-[#f1f5f9] disabled:opacity-40 cursor-pointer border-l border-[#cbd5e1]"
            >
              Sau ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
