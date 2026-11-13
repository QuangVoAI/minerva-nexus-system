import React from 'react';
import { useDispatch } from '../../hooks';
import { LoadingSpinner, ErrorMessage } from '../../components';

export const LiveDispatchView: React.FC = () => {
  const { suggestions, isLoading, error, actionMessage, refresh, approve, reject } = useDispatch();

  return (
    <div className="bg-white rounded-xl border border-[#dbeafe] shadow-xs overflow-hidden font-sans">
      <div className="p-4 border-b border-[#e2e8f0] bg-[#f8fafc] flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-[16px] font-bold text-[#1e3a8a] m-0">
            Gợi ý phân công đơn theo quy tắc nghiệp vụ (SCR-05 Live)
          </h3>
          <p className="text-[12px] text-[#64748b] mt-0.5 mb-0">
            Duyệt đề xuất ghép đơn dựa trên 3 tiêu chí: Đúng tuyến $\rightarrow$ Sức chứa ca $\rightarrow$ Rủi ro SLA
          </p>
        </div>

        <button
          type="button"
          onClick={refresh}
          disabled={isLoading}
          className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[12px] font-semibold px-3 py-1.5 rounded-md cursor-pointer transition-colors shadow-2xs flex items-center gap-1"
        >
          <span>↺</span>
          <span>Tải lại đề xuất</span>
        </button>
      </div>

      {actionMessage && (
        <div className="mx-4 mt-4 p-3 bg-[#dcfce7] border border-[#86efac] text-[#166534] rounded-lg text-[13px]">
          ✓ {actionMessage}
        </div>
      )}

      {error && <div className="p-4"><ErrorMessage message={error} onRetry={refresh} /></div>}

      {isLoading ? (
        <div className="py-12"><LoadingSpinner message="Đang tính toán đề xuất phân công theo quy tắc..." /></div>
      ) : suggestions.length === 0 ? (
        <div className="py-12 text-center text-[#64748b]">
          <p className="text-[14px]">Hiện không có đề xuất phân công nào cần xử lý.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-[12.5px]">
            <thead>
              <tr className="bg-[#eff6ff] text-[#1e3a8a] border-b border-[#bfdbfe] font-semibold">
                <th className="py-3 px-3">Mã phân công</th>
                <th className="py-3 px-3">Mã vận đơn</th>
                <th className="py-3 px-3">Tài xế đề xuất</th>
                <th className="py-3 px-3">Khu vực</th>
                <th className="py-3 px-3 text-center">Điểm khớp</th>
                <th className="py-3 px-3">Lý do quy tắc</th>
                <th className="py-3 px-3 text-center">Trạng thái</th>
                <th className="py-3 px-3 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0]">
              {suggestions.map((item) => (
                <tr key={item.assignmentId} className="hover:bg-[#f8fafc] transition-colors">
                  <td className="py-3 px-3 font-mono text-[#64748b]">{item.assignmentId}</td>
                  <td className="py-3 px-3 font-mono font-bold text-[#2563eb]">{item.trackingCode || item.orderId}</td>
                  <td className="py-3 px-3">
                    <strong className="text-[#0f172a]">{item.driverName}</strong>
                    <div className="text-[11px] text-[#64748b] font-mono">{item.driverId} · {item.driverPhone}</div>
                  </td>
                  <td className="py-3 px-3 text-[#334155]">{item.orderArea}</td>
                  <td className="py-3 px-3 text-center">
                    <span className="inline-block px-2 py-0.5 rounded font-mono font-bold text-[12px] bg-[#ecfdf5] text-[#059669] border border-[#a7f3d0]">
                      {item.suggestedScore}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-[#475569] max-w-[280px] text-[12px]">
                    {item.matchReason}
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#fef9c3] text-[#854d0e]">
                      {item.decisionStatus || 'PROPOSED'}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <div className="inline-flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => approve(item.assignmentId)}
                        className="bg-[#16a34a] hover:bg-[#15803d] text-white text-[11.5px] font-bold px-2.5 py-1 rounded cursor-pointer transition-colors shadow-2xs"
                      >
                        ✓ Duyệt
                      </button>
                      <button
                        type="button"
                        onClick={() => reject(item.assignmentId)}
                        className="bg-white border border-[#cbd5e1] hover:bg-[#f1f5f9] text-[#64748b] text-[11.5px] font-semibold px-2 py-1 rounded cursor-pointer transition-colors"
                      >
                        Từ chối
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
