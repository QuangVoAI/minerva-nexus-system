import React from 'react';
import { useAnalytics } from '../../hooks';
import { LoadingSpinner, ErrorMessage } from '../../components';

export const LiveDashboardKpi: React.FC = () => {
  const { metrics, isLoading, error, refresh } = useAnalytics(10000); // Tự động làm mới mỗi 10 giây

  if (error) {
    return <ErrorMessage message={error} onRetry={refresh} />;
  }

  if (isLoading && !metrics) {
    return <LoadingSpinner message="Đang nạp dữ liệu thống kê Hub..." />;
  }

  const data = metrics || {
    totalOrders: 0,
    deliveredCount: 0,
    failedCount: 0,
    pendingCount: 0,
    successRate: 0,
    slaRate: 0,
    highRiskCount: 0,
  };

  return (
    <div className="bg-white rounded-xl border border-[#dbeafe] p-5 shadow-xs font-sans">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e2e8f0]">
        <div>
          <h3 className="text-[16px] font-bold text-[#1e3a8a] m-0">
            Chỉ số vận hành Hub theo lần cập nhật (/api/analytics)
          </h3>
          <p className="text-[12px] text-[#64748b] mt-0.5 mb-0">Cập nhật tự động trực tiếp từ backend</p>
        </div>

        <button
          type="button"
          onClick={refresh}
          className="text-[12px] text-[#2563eb] hover:underline font-semibold cursor-pointer"
        >
          Làm mới ↻
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {/* Total Orders */}
        <div className="p-3.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg">
          <div className="text-[11px] font-semibold text-[#64748b] uppercase tracking-wider">Tổng đơn tiếp nhận</div>
          <div className="text-[22px] font-bold text-[#0f172a] mt-1 font-mono">{data.totalOrders}</div>
          <div className="text-[11px] text-[#475569] mt-0.5">Ca trực sáng Hub Q7</div>
        </div>

        {/* Delivered */}
        <div className="p-3.5 bg-[#ecfdf5] border border-[#a7f3d0] rounded-lg">
          <div className="text-[11px] font-semibold text-[#047857] uppercase tracking-wider">Giao thành công</div>
          <div className="text-[22px] font-bold text-[#059669] mt-1 font-mono">{data.deliveredCount}</div>
          <div className="text-[11px] text-[#065f46] mt-0.5">Tỷ lệ: {data.successRate}%</div>
        </div>

        {/* Failed */}
        <div className="p-3.5 bg-[#fef2f2] border border-[#fecaca] rounded-lg">
          <div className="text-[11px] font-semibold text-[#b91c1c] uppercase tracking-wider">Giao thất bại</div>
          <div className="text-[22px] font-bold text-[#dc2626] mt-1 font-mono">{data.failedCount}</div>
          <div className="text-[11px] text-[#991b1b] mt-0.5">Đã ghi nhận lý do</div>
        </div>

        {/* High Risk SLA */}
        <div className="p-3.5 bg-[#fffbeb] border border-[#fde68a] rounded-lg">
          <div className="text-[11px] font-semibold text-[#b45309] uppercase tracking-wider">Nguy cơ SLA cao</div>
          <div className="text-[22px] font-bold text-[#d97706] mt-1 font-mono">{data.highRiskCount}</div>
          <div className="text-[11px] text-[#92400e] mt-0.5">Đúng hạn: {data.slaRate}%</div>
        </div>
      </div>
    </div>
  );
};
