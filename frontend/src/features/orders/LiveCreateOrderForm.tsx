import React, { useState } from 'react';
import { useCreateOrder } from '../../hooks';
import { LoadingSpinner, ErrorMessage } from '../../components';

interface LiveCreateOrderFormProps {
  onSuccess?: (orderId: string, trackingCode: string) => void;
  onCancel?: () => void;
}

export const LiveCreateOrderForm: React.FC<LiveCreateOrderFormProps> = ({
  onSuccess,
  onCancel,
}) => {
  const {
    formData,
    updateField,
    isLoading,
    error,
    result,
    resetForm,
    submit,
  } = useCreateOrder();

  const [toastSuccess, setToastSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await submit();
    if (res) {
      setToastSuccess(`Tạo đơn hàng thành công! Mã vận đơn: ${res.trackingCode}`);
      if (onSuccess) onSuccess(res.orderId, res.trackingCode);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-[#dbeafe] p-5 shadow-sm max-w-xl mx-auto font-sans">
      <div className="pb-3 mb-4 border-b border-[#e2e8f0] flex items-center justify-between">
        <div>
          <h3 className="text-[16px] font-bold text-[#1e3a8a] m-0">Tạo đơn gửi lẻ tại Hub</h3>
          <p className="text-[12px] text-[#64748b] mt-0.5 mb-0">Kết nối trực tiếp API POST /api/orders</p>
        </div>
        <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#eff6ff] text-[#2563eb] border border-[#bfdbfe]">
          Hub Quận 7
        </span>
      </div>

      {error && <ErrorMessage message={error} />}

      {toastSuccess && (
        <div className="mb-4 p-3 bg-[#dcfce7] border border-[#86efac] text-[#166534] rounded-lg text-[13px] flex items-center justify-between">
          <span>✓ {toastSuccess}</span>
          <button
            type="button"
            onClick={() => {
              setToastSuccess(null);
              resetForm();
            }}
            className="text-[11px] font-bold underline cursor-pointer"
          >
            Tạo đơn khác
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div>
          <label className="block text-[12px] font-semibold text-[#334155] mb-1">
            Họ tên người nhận <span className="text-[#dc2626]">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.recipientName}
            onChange={(e) => updateField('recipientName', e.target.value)}
            placeholder="Ví dụ: Nguyễn Văn An"
            className="w-full text-[13px] px-3 py-2 bg-white border border-[#cbd5e1] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[12px] font-semibold text-[#334155] mb-1">
              Số điện thoại <span className="text-[#dc2626]">*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              placeholder="Ví dụ: 0912345678"
              className="w-full text-[13px] px-3 py-2 bg-white border border-[#cbd5e1] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
            />
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-[#334155] mb-1">
              Tiền thu hộ COD (VNĐ)
            </label>
            <input
              type="number"
              min="0"
              step="1000"
              value={formData.codAmount || ''}
              onChange={(e) => updateField('codAmount', Number(e.target.value) || 0)}
              placeholder="0"
              className="w-full text-[13px] px-3 py-2 bg-white border border-[#cbd5e1] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
            />
          </div>
        </div>

        <div>
          <label className="block text-[12px] font-semibold text-[#334155] mb-1">
            Địa chỉ giao hàng <span className="text-[#dc2626]">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.address}
            onChange={(e) => updateField('address', e.target.value)}
            placeholder="Ví dụ: 12 Huỳnh Tấn Phát, P. Tân Thuận Đông, Quận 7"
            className="w-full text-[13px] px-3 py-2 bg-white border border-[#cbd5e1] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[12px] font-semibold text-[#334155] mb-1">
              Khu vực tuyến giao
            </label>
            <select
              value={formData.areaId}
              onChange={(e) => updateField('areaId', e.target.value)}
              className="w-full text-[13px] px-3 py-2 bg-white border border-[#cbd5e1] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
            >
              <option value="Q7_TAN_THUAN">Tân Thuận Đông - Quận 7</option>
              <option value="Q7_TAN_KIENG">Tân Kiểng - Quận 7</option>
              <option value="Q7_TAN_PHU">Tân Phú - Quận 7</option>
              <option value="Q7_PHU_MY">Phú Mỹ - Quận 7</option>
              <option value="NHA_BE_PHU_XUAN">Phú Xuân - Nhà Bè</option>
            </select>
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-[#334155] mb-1">
              Gói dịch vụ SLA
            </label>
            <select
              value={formData.serviceLevel}
              onChange={(e) => updateField('serviceLevel', e.target.value as any)}
              className="w-full text-[13px] px-3 py-2 bg-white border border-[#cbd5e1] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
            >
              <option value="STANDARD">Tiêu chuẩn (Standard - 4h)</option>
              <option value="EXPRESS">Hỏa tốc (Express - 2h)</option>
              <option value="SAME_DAY">Trong ngày (Same-Day - 8h)</option>
            </select>
          </div>
        </div>

        <div className="pt-3 border-t border-[#e2e8f0] flex items-center justify-end gap-2.5">
          {onCancel && (
            <button
              type="button"
              disabled={isLoading}
              onClick={onCancel}
              className="px-4 py-2 border border-[#cbd5e1] text-[#475569] hover:bg-[#f1f5f9] text-[13px] font-semibold rounded-md cursor-pointer transition-colors"
            >
              Hủy
            </button>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[13px] font-bold px-5 py-2 rounded-md cursor-pointer transition-colors shadow-xs disabled:opacity-50"
          >
            {isLoading ? <LoadingSpinner size="sm" message="" /> : null}
            <span>Lưu & tạo vận đơn</span>
          </button>
        </div>
      </form>
    </div>
  );
};
