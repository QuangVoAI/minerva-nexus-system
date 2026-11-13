import React, { useState } from 'react';
import { useDemoFlow } from '../hooks/useDemoFlow';
import { LoadingSpinner } from './LoadingSpinner';
import { ApiStatusBadge } from './ApiStatusBadge';

interface DemoFlowBarProps {
  apiStatus?: 'checking' | 'online' | 'offline';
  onNavigateToScreen?: (screenId: string) => void;
}

export const DemoFlowBar: React.FC<DemoFlowBarProps> = ({
  apiStatus = 'online',
  onNavigateToScreen,
}) => {
  const {
    activeStep,
    demoOrder,
    auditHistory,
    analytics,
    logs,
    isLoading,
    isRunningAll,
    errorMessage,
    executeCreateOrder,
    executeAssessSla,
    executeApproveDispatch,
    executeDriverTransit,
    executeDriverDelivered,
    executeDriverFailed,
    executeFetchHistoryAndKPI,
    runFullHappyPathDemo,
    resetDemo,
  } = useDemoFlow();

  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [showLogs, setShowLogs] = useState<boolean>(false);
  const [showAuditModal, setShowAuditModal] = useState<boolean>(false);

  const navigate = (id: string) => {
    window.location.hash = id;
    if (onNavigateToScreen) onNavigateToScreen(id);
  };

  const steps = [
    { num: 1, label: 'Tạo đơn mới', targetScreen: 'create-order' },
    { num: 2, label: 'Đánh giá SLA', targetScreen: 'orders' },
    { num: 3, label: 'Duyệt phân công', targetScreen: 'dispatch' },
    { num: 4, label: 'Xuất kho', targetScreen: 'driver' },
    { num: 5, label: 'Giao hàng / Lỗi', targetScreen: 'driver' },
    { num: 6, label: 'Lịch sử & KPI', targetScreen: 'order-detail' },
  ];

  return (
    <div className="w-full bg-white select-none font-sans">
      {/* Top Header Bar */}
      <div className="max-w-[1600px] mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2563eb] animate-pulse" />
            <strong className="text-[13px] font-bold text-[#1e3a8a] tracking-wide">
              M3 · THỰC THI LUỒNG DEMO TÍCH HỢP REST API
            </strong>
          </div>
          <ApiStatusBadge status={apiStatus} />
        </div>

        <div className="flex items-center gap-2">
          {/* Quick 1-Click Run E2E Button */}
          <button
            type="button"
            disabled={isLoading || isRunningAll}
            onClick={runFullHappyPathDemo}
            className="flex items-center gap-1.5 bg-[#2563eb] hover:bg-[#1d4ed8] active:bg-[#1e40af] disabled:opacity-50 text-white text-[12px] font-bold px-3 py-1.5 rounded-md cursor-pointer transition-colors shadow-xs"
          >
            <span>▶</span>
            <span>{isRunningAll ? 'Đang chạy demo tự động...' : 'Chạy toàn bộ Demo (1-Click E2E)'}</span>
          </button>

          {/* Reset button */}
          <button
            type="button"
            disabled={isLoading || isRunningAll}
            onClick={resetDemo}
            className="bg-[#f8fafc] hover:bg-[#f1f5f9] border border-[#cbd5e1] text-[#475569] text-[12px] font-semibold px-2.5 py-1.5 rounded-md cursor-pointer transition-colors"
            title="Đặt lại trạng thái luồng demo"
          >
            ↺ Làm mới
          </button>

          {/* Logs toggle */}
          <button
            type="button"
            onClick={() => setShowLogs(!showLogs)}
            className={`text-[12px] font-semibold px-2.5 py-1.5 rounded-md cursor-pointer transition-colors border ${
              showLogs ? 'bg-[#eff6ff] text-[#1d4ed8] border-[#93c5fd]' : 'bg-white text-[#64748b] border-[#cbd5e1] hover:bg-[#f8fafc]'
            }`}
          >
            📋 Nhật ký API ({logs.length})
          </button>

          {/* Collapse/Expand toolbar */}
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[12px] text-[#64748b] hover:text-[#0f172a] px-2 py-1 cursor-pointer"
            title={isExpanded ? 'Thu gọn thanh điều khiển' : 'Mở rộng thanh điều khiển'}
          >
            {isExpanded ? '▲' : '▼'}
          </button>
        </div>
      </div>

      {/* Expanded Controls Area */}
      {isExpanded && (
        <div className="border-t border-[#e2e8f0] bg-[#f8fafc] px-4 py-3">
          <div className="max-w-[1600px] mx-auto">
            {/* Error notice if any */}
            {errorMessage && (
              <div className="mb-3 px-3 py-2 bg-[#fef2f2] border border-[#fecaca] rounded text-[#b91c1c] text-[12px] flex items-center justify-between">
                <span>⚠️ {errorMessage}</span>
                <button
                  type="button"
                  onClick={() => resetDemo()}
                  className="underline text-[11px] font-bold cursor-pointer"
                >
                  Bỏ qua
                </button>
              </div>
            )}

            {/* Step Progress & Interactive Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
              {/* BƯỚC 1: TẠO ĐƠN */}
              <div
                className={`p-2.5 rounded-lg border transition-all ${
                  activeStep >= 1 ? 'bg-[#eff6ff] border-[#bfdbfe]' : 'bg-white border-[#e2e8f0]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2563eb]">
                    Bước 1
                  </span>
                  <button
                    type="button"
                    onClick={() => navigate('create-order')}
                    className="text-[10px] text-[#64748b] hover:text-[#2563eb] underline cursor-pointer"
                  >
                    Xem SCR-03 ↗
                  </button>
                </div>
                <div className="text-[12px] font-semibold text-[#1e293b] mb-2">Tạo đơn gửi lẻ</div>
                <button
                  type="button"
                  disabled={isLoading || isRunningAll}
                  onClick={() => executeCreateOrder()}
                  className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] disabled:opacity-50 text-white text-[11px] font-semibold py-1.5 px-2 rounded cursor-pointer transition-colors"
                >
                  + Gọi POST /api/orders
                </button>
              </div>

              {/* BƯỚC 2: ĐÁNH GIÁ SLA */}
              <div
                className={`p-2.5 rounded-lg border transition-all ${
                  activeStep >= 2 ? 'bg-[#eff6ff] border-[#bfdbfe]' : 'bg-white border-[#e2e8f0]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2563eb]">
                    Bước 2
                  </span>
                  <button
                    type="button"
                    onClick={() => navigate('orders')}
                    className="text-[10px] text-[#64748b] hover:text-[#2563eb] underline cursor-pointer"
                  >
                    Xem SCR-03 ↗
                  </button>
                </div>
                <div className="text-[12px] font-semibold text-[#1e293b] mb-2">Đánh giá SLA</div>
                <button
                  type="button"
                  disabled={isLoading || isRunningAll || !demoOrder}
                  onClick={() => executeAssessSla()}
                  className="w-full bg-[#3b82f6] hover:bg-[#2563eb] disabled:opacity-50 text-white text-[11px] font-semibold py-1.5 px-2 rounded cursor-pointer transition-colors"
                >
                  🔍 Gọi GET /api/orders
                </button>
              </div>

              {/* BƯỚC 3: GỢI Ý & DUYỆT ĐIỀU PHỐI */}
              <div
                className={`p-2.5 rounded-lg border transition-all ${
                  activeStep >= 3 ? 'bg-[#eff6ff] border-[#bfdbfe]' : 'bg-white border-[#e2e8f0]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2563eb]">
                    Bước 3
                  </span>
                  <button
                    type="button"
                    onClick={() => navigate('dispatch')}
                    className="text-[10px] text-[#64748b] hover:text-[#2563eb] underline cursor-pointer"
                  >
                    Xem SCR-05 ↗
                  </button>
                </div>
                <div className="text-[12px] font-semibold text-[#1e293b] mb-2">Duyệt phân công</div>
                <button
                  type="button"
                  disabled={isLoading || isRunningAll}
                  onClick={() => executeApproveDispatch()}
                  className="w-full bg-[#087f8c] hover:bg-[#066570] disabled:opacity-50 text-white text-[11px] font-semibold py-1.5 px-2 rounded cursor-pointer transition-colors"
                >
                  ✓ Duyệt (POST /approve)
                </button>
              </div>

              {/* BƯỚC 4: TÀI XẾ XUẤT KHO */}
              <div
                className={`p-2.5 rounded-lg border transition-all ${
                  activeStep >= 4 ? 'bg-[#eff6ff] border-[#bfdbfe]' : 'bg-white border-[#e2e8f0]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2563eb]">
                    Bước 4
                  </span>
                  <button
                    type="button"
                    onClick={() => navigate('driver')}
                    className="text-[10px] text-[#64748b] hover:text-[#2563eb] underline cursor-pointer"
                  >
                    Xem SCR-07 ↗
                  </button>
                </div>
                <div className="text-[12px] font-semibold text-[#1e293b] mb-2">Xuất kho đi phát</div>
                <button
                  type="button"
                  disabled={isLoading || isRunningAll || !demoOrder}
                  onClick={() => executeDriverTransit()}
                  className="w-full bg-[#475569] hover:bg-[#334155] disabled:opacity-50 text-white text-[11px] font-semibold py-1.5 px-2 rounded cursor-pointer transition-colors"
                >
                  🚚 Bắt đầu (TRANSIT)
                </button>
              </div>

              {/* BƯỚC 5: GIAO THÀNH CÔNG HOẶC THẤT BẠI */}
              <div
                className={`p-2.5 rounded-lg border transition-all ${
                  activeStep >= 5 ? 'bg-[#eff6ff] border-[#bfdbfe]' : 'bg-white border-[#e2e8f0]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2563eb]">
                    Bước 5
                  </span>
                  <button
                    type="button"
                    onClick={() => navigate('failed-1')}
                    className="text-[10px] text-[#64748b] hover:text-[#2563eb] underline cursor-pointer"
                  >
                    Xem SCR-08 ↗
                  </button>
                </div>
                <div className="text-[12px] font-semibold text-[#1e293b] mb-2">Cập nhật kết quả</div>
                <div className="flex gap-1">
                  <button
                    type="button"
                    disabled={isLoading || isRunningAll || !demoOrder}
                    onClick={() => executeDriverDelivered()}
                    className="flex-1 bg-[#16a34a] hover:bg-[#15803d] disabled:opacity-50 text-white text-[10.5px] font-semibold py-1.5 px-1 rounded cursor-pointer transition-colors text-center"
                    title="Xác nhận giao thành công"
                  >
                    Thành công
                  </button>
                  <button
                    type="button"
                    disabled={isLoading || isRunningAll || !demoOrder}
                    onClick={() => executeDriverFailed('CUSTOMER_UNREACHABLE', 'Khách không nghe máy lần 1')}
                    className="flex-1 bg-[#dc2626] hover:bg-[#b91c1c] disabled:opacity-50 text-white text-[10.5px] font-semibold py-1.5 px-1 rounded cursor-pointer transition-colors text-center"
                    title="Báo phát thất bại"
                  >
                    Thất bại
                  </button>
                </div>
              </div>

              {/* BƯỚC 6: XEM LỊCH SỬ / AUDIT TRAIL & KPI */}
              <div
                className={`p-2.5 rounded-lg border transition-all ${
                  activeStep >= 6 ? 'bg-[#eff6ff] border-[#bfdbfe]' : 'bg-white border-[#e2e8f0]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2563eb]">
                    Bước 6
                  </span>
                  <button
                    type="button"
                    onClick={() => navigate('order-detail')}
                    className="text-[10px] text-[#64748b] hover:text-[#2563eb] underline cursor-pointer"
                  >
                    Xem SCR-06 ↗
                  </button>
                </div>
                <div className="text-[12px] font-semibold text-[#1e293b] mb-2">Lịch sử & KPI</div>
                <button
                  type="button"
                  disabled={isLoading || isRunningAll || !demoOrder}
                  onClick={async () => {
                    await executeFetchHistoryAndKPI();
                    setShowAuditModal(true);
                  }}
                  className="w-full bg-[#1d4ed8] hover:bg-[#1e40af] disabled:opacity-50 text-white text-[11px] font-semibold py-1.5 px-2 rounded cursor-pointer transition-colors"
                >
                  📜 Tra cứu Audit Trail
                </button>
              </div>
            </div>

            {/* Active Demo Order Ribbon */}
            {demoOrder && (
              <div className="mt-3 px-3 py-2 bg-white rounded-md border border-[#cbd5e1] flex flex-wrap items-center justify-between gap-3 text-[12px]">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-[#64748b]">Đơn demo đang chạy:</span>
                  <strong className="text-[#2563eb] font-mono">{demoOrder.trackingCode}</strong>
                  <span className="text-[#94a3b8]">|</span>
                  <span className="text-[#334155]">{demoOrder.recipientName}</span>
                  <span className="text-[#94a3b8]">|</span>
                  <span className="text-[#64748b]">{demoOrder.address}</span>
                  <span className="text-[#94a3b8]">|</span>
                  <span className="font-semibold text-[#0f172a]">COD: {demoOrder.codAmount.toLocaleString('vi-VN')} đ</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[#64748b]">Trạng thái:</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                      demoOrder.status === 'DELIVERED'
                        ? 'bg-[#dcfce7] text-[#166534]'
                        : demoOrder.status === 'FAILED'
                        ? 'bg-[#fee2e2] text-[#991b1b]'
                        : demoOrder.status === 'IN_TRANSIT'
                        ? 'bg-[#fef9c3] text-[#854d0e]'
                        : demoOrder.status === 'ASSIGNED'
                        ? 'bg-[#e0f2fe] text-[#075985]'
                        : 'bg-[#f1f5f9] text-[#475569]'
                    }`}
                  >
                    {demoOrder.status}
                  </span>

                  {demoOrder.assignmentId && (
                    <span className="text-[11px] text-[#475569]">
                      (Gán: {demoOrder.driverId || 'DRV-01'})
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Real-time API Logs Drawer */}
      {showLogs && (
        <div className="border-t border-[#cbd5e1] bg-[#0f172a] text-[#f8fafc] p-4 max-h-[300px] overflow-y-auto font-mono text-[11.5px]">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#334155]">
            <strong className="text-[#38bdf8] text-[12px]">
              NHẬT KÝ GIAO TIẾP REST API THỜI GIAN THỰC (Java Backend :8080)
            </strong>
            <button
              type="button"
              onClick={() => setShowLogs(false)}
              className="text-[#94a3b8] hover:text-white cursor-pointer"
            >
              ✕ Đóng
            </button>
          </div>

          {logs.length === 0 ? (
            <div className="text-[#64748b] py-2">Chưa có yêu cầu API nào được gửi. Bấm các nút ở trên để thực thi luồng demo.</div>
          ) : (
            <div className="space-y-2">
              {logs.map((log) => (
                <div
                  key={log.id}
                  className={`p-2 rounded border ${
                    log.status === 'success'
                      ? 'bg-[#064e3b]/30 border-[#059669]/40 text-[#a7f3d0]'
                      : log.status === 'error'
                      ? 'bg-[#7f1d1d]/30 border-[#dc2626]/40 text-[#fecaca]'
                      : 'bg-[#1e293b] border-[#475569] text-[#cbd5e1]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[#94a3b8] text-[10.5px]">{log.time}</span>
                      <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-[#334155] text-white">
                        {log.method}
                      </span>
                      <strong className="text-white">{log.endpoint}</strong>
                      <span className="text-[#cbd5e1] font-sans">({log.stepName})</span>
                    </div>
                    <span
                      className={`text-[10.5px] font-bold ${
                        log.status === 'success'
                          ? 'text-[#34d399]'
                          : log.status === 'error'
                          ? 'text-[#f87171]'
                          : 'text-[#fbbf24]'
                      }`}
                    >
                      {log.status.toUpperCase()}
                    </span>
                  </div>

                  <div className="mt-1 font-sans text-[11px] text-white/90">{log.message}</div>

                  {log.requestPayload && (
                    <details className="mt-1 text-[10px] text-[#94a3b8] cursor-pointer">
                      <summary>Payload gửi đi (Request Body)</summary>
                      <pre className="mt-0.5 p-1.5 bg-black/40 rounded overflow-x-auto text-[#e2e8f0]">
                        {JSON.stringify(log.requestPayload, null, 2)}
                      </pre>
                    </details>
                  )}

                  {log.responsePayload && (
                    <details className="mt-1 text-[10px] text-[#94a3b8] cursor-pointer">
                      <summary>Dữ liệu nhận về (Response JSON)</summary>
                      <pre className="mt-0.5 p-1.5 bg-black/40 rounded overflow-x-auto text-[#6ee7b7]">
                        {JSON.stringify(log.responsePayload, null, 2)}
                      </pre>
                    </details>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Audit History Modal */}
      {showAuditModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-[#e2e8f0]">
              <div>
                <h3 className="text-[16px] font-bold text-[#0f172a] m-0">
                  Lịch sử biến động trạng thái (Audit Trail)
                </h3>
                <p className="text-[12px] text-[#64748b] mt-0.5 mb-0">
                  Đơn hàng: <strong className="text-[#2563eb]">{demoOrder?.trackingCode}</strong> (ID: {demoOrder?.orderId})
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowAuditModal(false)}
                className="text-[#64748b] hover:text-[#0f172a] text-[18px] cursor-pointer px-2"
              >
                ✕
              </button>
            </div>

            <div className="mt-4">
              {auditHistory.length === 0 ? (
                <div className="text-center py-6 text-[#64748b]">
                  <p>Chưa có sự kiện nào được ghi nhận cho đơn này.</p>
                </div>
              ) : (
                <ol className="relative border-l border-[#bfdbfe] ml-3 space-y-4">
                  {auditHistory.map((item, idx) => (
                    <li key={item.historyId || idx} className="ml-5">
                      <span className="absolute -left-2.5 flex items-center justify-center w-5 h-5 bg-[#eff6ff] border-2 border-[#2563eb] rounded-full text-[10px] text-[#2563eb] font-bold">
                        {idx + 1}
                      </span>
                      <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <strong className="text-[13px] text-[#1e293b]">
                            {item.oldStatus ? `${item.oldStatus} ➔ ` : ''}
                            <span className="text-[#2563eb]">{item.newStatus}</span>
                          </strong>
                          <span className="text-[11px] text-[#64748b]">{item.time}</span>
                        </div>
                        <div className="text-[11.5px] text-[#475569] mt-1">
                          Tác nhân: <strong>{item.actorId}</strong> · Mã lý do: <code>{item.reasonCode}</code>
                        </div>
                        {item.note && (
                          <div className="text-[12px] text-[#334155] mt-1 bg-white p-2 rounded border border-[#e2e8f0]">
                            Ghi chú: {item.note}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              )}
            </div>

            {/* KPI Summary Block */}
            {analytics && (
              <div className="mt-5 p-3.5 bg-[#eff6ff] border border-[#bfdbfe] rounded-lg">
                <h4 className="text-[12px] font-bold text-[#1e40af] m-0 mb-2">
                  CHỈ SỐ KPI VẬN HÀNH THỜI GIAN THỰC (/api/analytics)
                </h4>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="bg-white p-2 rounded shadow-2xs">
                    <div className="text-[10px] text-[#64748b]">Tổng số đơn</div>
                    <strong className="text-[15px] text-[#0f172a]">{analytics.totalOrders}</strong>
                  </div>
                  <div className="bg-white p-2 rounded shadow-2xs">
                    <div className="text-[10px] text-[#166534]">Đã giao</div>
                    <strong className="text-[15px] text-[#16a34a]">{analytics.deliveredCount}</strong>
                  </div>
                  <div className="bg-white p-2 rounded shadow-2xs">
                    <div className="text-[10px] text-[#991b1b]">Thất bại</div>
                    <strong className="text-[15px] text-[#dc2626]">{analytics.failedCount}</strong>
                  </div>
                  <div className="bg-white p-2 rounded shadow-2xs">
                    <div className="text-[10px] text-[#1e40af]">Đúng hạn SLA</div>
                    <strong className="text-[15px] text-[#2563eb]">{analytics.slaRate}%</strong>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-5 text-right">
              <button
                type="button"
                onClick={() => setShowAuditModal(false)}
                className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[12px] font-semibold px-4 py-2 rounded-md cursor-pointer transition-colors"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
