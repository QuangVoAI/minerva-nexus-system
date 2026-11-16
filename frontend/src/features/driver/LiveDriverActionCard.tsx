import React, { useState } from 'react';
import { useDriverTasks } from '../../hooks';
import { LoadingSpinner, ErrorMessage } from '../../components';
import type { FailureReason } from '../../types';
import { apiClient } from '../../services/apiClient';

interface LiveDriverActionCardProps {
  orderId?: string;
  driverId?: string;
  onActionComplete?: () => void;
}

export const LiveDriverActionCard: React.FC<LiveDriverActionCardProps> = ({
  orderId: initialOrderId = '',
  driverId = 'DRV-01',
  onActionComplete,
}) => {
  const [orderId, setOrderId] = useState<string>(initialOrderId);
  const [showFailureModal, setShowFailureModal] = useState<boolean>(false);
  const [failureReason, setFailureReason] = useState<FailureReason>('CUSTOMER_UNREACHABLE');
  const [failureNote, setFailureNote] = useState<string>('');

  const {
    isLoading,
    error,
    lastActionResult,
    startTransit,
    markDelivered,
    reportFailure,
  } = useDriverTasks();

  const handleTransit = async () => {
    if (!orderId.trim()) return;
    const ok = await startTransit(orderId.trim(), driverId);
    if (ok && onActionComplete) onActionComplete();
  };

  const handleDelivered = async () => {
    if (!orderId.trim()) return;
    const ok = await markDelivered(orderId.trim(), driverId);
    if (ok && onActionComplete) onActionComplete();
  };

  const handleConfirmFailure = async () => {
    if (!orderId.trim()) return;
    const ok = await reportFailure(orderId.trim(), failureReason, failureNote, driverId);
    if (ok) {
      setShowFailureModal(false);
      setFailureNote('');
      if (onActionComplete) onActionComplete();
    }
  };

  const respond = async (action: 'accept' | 'reject') => {
    if (!orderId.trim()) return;
    await apiClient.post(`/api/me/orders/${encodeURIComponent(orderId.trim())}/${action}`, { reason: action === 'reject' ? 'Tài xế từ chối nhận đơn' : '' }, { 'X-Actor-Id': driverId });
    if (onActionComplete) onActionComplete();
  };

  return (
    <div className="bg-white rounded-xl border border-[#dbeafe] p-5 shadow-xs font-sans max-w-md mx-auto">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e2e8f0]">
        <div>
          <h4 className="text-[15px] font-bold text-[#1e3a8a] m-0">Tác vụ tài xế giao hàng (Mobile App)</h4>
          <p className="text-[12px] text-[#64748b] mt-0.5 mb-0">Tài xế: <strong>{driverId}</strong> · Hub Quận 7</p>
        </div>
        <span className="w-2.5 h-2.5 rounded-full bg-[#16a34a]" title="Tài xế đang trực tuyến" />
      </div>

      {lastActionResult && (
        <div className="mb-3 p-3 bg-[#dcfce7] border border-[#86efac] text-[#166534] rounded-lg text-[12.5px]">
          ✓ {lastActionResult}
        </div>
      )}

      {error && <ErrorMessage message={error} />}

      <div className="space-y-3">
        <div>
          <label className="block text-[12px] font-semibold text-[#334155] mb-1">
            Mã đơn hàng xử lý
          </label>
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="Ví dụ: ORD-001 hoặc MNX..."
            className="w-full text-[13px] px-3 py-2 bg-white border border-[#cbd5e1] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563eb] font-mono"
          />
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-2">
          <div className="grid grid-cols-2 gap-2">
            <button type="button" disabled={isLoading || !orderId.trim()} onClick={() => respond('accept')} className="bg-[#087f8c] text-white text-[12px] font-bold py-2 rounded-lg disabled:opacity-50">Nhận đơn</button>
            <button type="button" disabled={isLoading || !orderId.trim()} onClick={() => respond('reject')} className="bg-white border border-[#cbd5e1] text-[#b91c1c] text-[12px] font-bold py-2 rounded-lg disabled:opacity-50">Từ chối</button>
          </div>
          <button
            type="button"
            disabled={isLoading || !orderId.trim()}
            onClick={handleTransit}
            className="w-full bg-[#3b82f6] hover:bg-[#2563eb] disabled:opacity-50 text-white text-[13px] font-bold py-2.5 px-4 rounded-lg cursor-pointer transition-colors shadow-2xs flex items-center justify-center gap-2"
          >
            <span>🚚</span>
            <span>1. Quét xuất kho bắt đầu giao (IN_TRANSIT)</span>
          </button>

          <button
            type="button"
            disabled={isLoading || !orderId.trim()}
            onClick={handleDelivered}
            className="w-full bg-[#16a34a] hover:bg-[#15803d] disabled:opacity-50 text-white text-[13px] font-bold py-2.5 px-4 rounded-lg cursor-pointer transition-colors shadow-2xs flex items-center justify-center gap-2"
          >
            <span>✓</span>
            <span>2. Giao thành công & Thu tiền COD (DELIVERED)</span>
          </button>

          <button
            type="button"
            disabled={isLoading || !orderId.trim()}
            onClick={() => setShowFailureModal(true)}
            className="w-full bg-[#ef4444] hover:bg-[#dc2626] disabled:opacity-50 text-white text-[13px] font-bold py-2.5 px-4 rounded-lg cursor-pointer transition-colors shadow-2xs flex items-center justify-center gap-2"
          >
            <span>⚠️</span>
            <span>3. Báo phát thất bại (FAILED)</span>
          </button>
        </div>
      </div>

      {/* Failure Reason Modal */}
      {showFailureModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full p-5">
            <h4 className="text-[15px] font-bold text-[#991b1b] m-0 mb-3">
              Báo cáo phát hàng thất bại
            </h4>

            <div className="space-y-3 text-[12.5px]">
              <div>
                <label className="block font-semibold text-[#334155] mb-1">
                  Chọn lý do chuẩn nghiệp vụ:
                </label>
                <select
                  value={failureReason}
                  onChange={(e) => setFailureReason(e.target.value as FailureReason)}
                  className="w-full px-3 py-2 border border-[#cbd5e1] rounded-md bg-white text-[12.5px]"
                >
                  <option value="CUSTOMER_UNREACHABLE">1. Khách không nghe máy / Thuê bao</option>
                  <option value="CUSTOMER_RESCHEDULED">2. Khách hẹn giao lại vào thời gian khác</option>
                  <option value="WRONG_ADDRESS">3. Sai địa chỉ nhận hàng / Không tìm thấy</option>
                  <option value="CUSTOMER_REFUSED">4. Khách từ chối nhận hàng</option>
                  <option value="FORCE_MAJEURE">5. Lý do thời tiết / Bất khả kháng</option>
                  <option value="HUB_RECALL">6. Hub yêu cầu giữ lại / Thu hồi đơn</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-[#334155] mb-1">
                  Ghi chú chi tiết:
                </label>
                <textarea
                  rows={2}
                  value={failureNote}
                  onChange={(e) => setFailureNote(e.target.value)}
                  placeholder="Ví dụ: Gọi 3 cuộc không ai nghe máy lúc 10h15"
                  className="w-full px-3 py-2 border border-[#cbd5e1] rounded-md text-[12.5px]"
                />
              </div>

              <div className="p-2.5 bg-[#fef2f2] border border-[#fecaca] rounded text-[11px] text-[#991b1b]">
                Lưu ý: Nếu đơn thất bại lần 3, hệ thống sẽ tự động chuyển trạng thái chờ hoàn về kho (RETURN_PENDING) và khóa phát lại.
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={() => setShowFailureModal(false)}
                  className="px-3 py-1.5 border border-[#cbd5e1] rounded-md text-[#475569] hover:bg-[#f1f5f9] cursor-pointer"
                >
                  Hủy
                </button>
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={handleConfirmFailure}
                  className="px-3.5 py-1.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold rounded-md cursor-pointer transition-colors"
                >
                  {isLoading ? 'Đang gửi...' : 'Xác nhận báo lỗi'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
