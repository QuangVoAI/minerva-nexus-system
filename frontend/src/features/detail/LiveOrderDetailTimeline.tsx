import React from 'react';
import { useOrderDetail } from '../../hooks';
import { LoadingSpinner, ErrorMessage } from '../../components';

interface LiveOrderDetailTimelineProps {
  orderId: string | null;
}

export const LiveOrderDetailTimeline: React.FC<LiveOrderDetailTimelineProps> = ({ orderId }) => {
  const { history, isLoading, error, refresh } = useOrderDetail(orderId);

  if (!orderId) {
    return (
      <div className="p-6 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl text-center text-[#64748b] text-[13px]">
        Vui lòng chọn hoặc nhập mã đơn hàng để xem lịch sử kiểm toán (Audit Trail).
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-[#dbeafe] p-5 shadow-xs font-sans">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e2e8f0]">
        <div>
          <h4 className="text-[15px] font-bold text-[#1e3a8a] m-0">
            Lịch sử biến động trạng thái & Kiểm toán (Audit Trail)
          </h4>
          <p className="text-[12px] text-[#64748b] mt-0.5 mb-0">
            Mã đơn: <strong className="text-[#2563eb] font-mono">{orderId}</strong>
          </p>
        </div>

        <button
          type="button"
          onClick={refresh}
          disabled={isLoading}
          className="bg-white border border-[#cbd5e1] hover:bg-[#f1f5f9] text-[#475569] text-[12px] font-semibold px-2.5 py-1 rounded cursor-pointer transition-colors"
        >
          ↺ Tải lại
        </button>
      </div>

      {error && <ErrorMessage message={error} onRetry={refresh} />}

      {isLoading ? (
        <div className="py-6"><LoadingSpinner message="Đang tải lịch sử sự kiện..." /></div>
      ) : history.length === 0 ? (
        <div className="py-6 text-center text-[#64748b] text-[13px]">
          Chưa có sự kiện nào được ghi nhận cho đơn này.
        </div>
      ) : (
        <ol className="relative border-l border-[#bfdbfe] ml-3 space-y-4">
          {history.map((event, idx) => (
            <li key={event.historyId || idx} className="ml-5">
              <span className="absolute -left-2.5 flex items-center justify-center w-5 h-5 bg-[#eff6ff] border-2 border-[#2563eb] rounded-full text-[10px] text-[#2563eb] font-bold">
                {idx + 1}
              </span>
              <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <strong className="text-[13px] text-[#1e293b]">
                    {event.oldStatus ? `${event.oldStatus} ➔ ` : ''}
                    <span className="text-[#2563eb]">{event.newStatus}</span>
                  </strong>
                  <span className="text-[11px] text-[#64748b] font-mono">{event.time}</span>
                </div>
                <div className="text-[11.5px] text-[#475569] mt-1">
                  Tác nhân: <strong>{event.actorId}</strong> · Mã lý do: <code>{event.reasonCode}</code>
                </div>
                {event.note && (
                  <div className="text-[12px] text-[#334155] mt-1.5 bg-white p-2 rounded border border-[#e2e8f0]">
                    Ghi chú: {event.note}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};
