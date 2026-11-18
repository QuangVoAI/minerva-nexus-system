import { useEffect, useMemo, useState } from "react";
import LoginDesktop from "./codelayer-40-49/main";
import LoginDriver from "./codelayer-40-66/main";
import LoginStates from "./codelayer-40-76/main";
import PermissionLegend from "./codelayer-40-114/main";
import Dashboard from "./codelayer-40-128/main";
import OrderIntake from "./codelayer-40-142/main";
import ImportErrors from "./codelayer-40-154/main";
import CreateOrder from "./codelayer-40-168/main";
import OrderDetail from "./codelayer-40-204/main";
import Exceptions from "./codelayer-40-224/main";
import DriverTasks from "./codelayer-40-246/main";
import FailureOne from "./codelayer-40-270/main";
import Redelivery from "./codelayer-40-296/main";
import FailedPending from "./codelayer-40-335/main";
import RefusedThird from "./codelayer-40-365/main";
import Returned from "./codelayer-40-398/main";
import Dispatch from "./codelayer-40-432/main";

import {
  LiveCancelOrder,
  LiveAuditLog,
  LiveReports,
  LiveDriverManagement,
  LiveShiftAttendance,
} from "./features";
import "./styles/globals.css";

type Screen = { id: string; title: string; group: string; Component: () => JSX.Element };

const screens: Screen[] = [
  { id: "login", title: "SCR-01 · Đăng nhập desktop", group: "Xác thực", Component: LoginDesktop },
  { id: "login-driver", title: "SCR-01 · Đăng nhập mobile tài xế", group: "Xác thực", Component: LoginDriver },
  { id: "login-states", title: "SCR-01 · Các trạng thái đăng nhập", group: "Xác thực", Component: LoginStates },
  { id: "permissions", title: "SCR-01 · Phân quyền & chuyển tiếp", group: "Xác thực", Component: PermissionLegend },
  { id: "dashboard", title: "SCR-02 · Bàn điều hành Hub", group: "Điều hành Hub", Component: Dashboard },
  { id: "orders", title: "SCR-03 · Tiếp nhận & phân loại đơn", group: "Đơn hàng", Component: OrderIntake },
  { id: "import-errors", title: "SCR-03 · Kết quả nhập & đơn lỗi", group: "Đơn hàng", Component: ImportErrors },
  { id: "create-order", title: "SCR-03 · Tạo đơn gửi lẻ", group: "Đơn hàng", Component: CreateOrder },
  { id: "shifts", title: "SCR-04 · Lập ca & điểm danh", group: "Điều phối", Component: LiveShiftAttendance },
  { id: "dispatch", title: "SCR-05 · Gợi ý phân công", group: "Điều phối", Component: Dispatch },
  { id: "order-detail", title: "SCR-06 · Hồ sơ chi tiết đơn", group: "Điều phối", Component: OrderDetail },
  { id: "exceptions", title: "SCR-06 · Ngoại lệ giao hàng", group: "Điều phối", Component: Exceptions },
  { id: "driver", title: "SCR-07 · Tác vụ tài xế", group: "Mobile", Component: DriverTasks },
  { id: "failed-1", title: "SCR-08 · Báo thất bại lần đầu", group: "Mobile", Component: FailureOne },
  { id: "redelivery", title: "SCR-08 · Khách hẹn giao lại", group: "Mobile", Component: Redelivery },
  { id: "failed", title: "SCR-08 · FAILED chờ phát lại", group: "Mobile", Component: FailedPending },
  { id: "refused", title: "SCR-08 · Từ chối nhận lần ba", group: "Mobile", Component: RefusedThird },
  { id: "returned", title: "SCR-08 · RETURNED chuyển hoàn", group: "Mobile", Component: Returned }
  ,{ id: "cancel", title: "UC-23 · Hủy đơn hàng", group: "Đơn hàng", Component: LiveCancelOrder }
  ,{ id: "audit", title: "UC-22 · Nhật ký hệ thống", group: "Hệ thống", Component: LiveAuditLog }
  ,{ id: "reports", title: "UC-20 · Báo cáo vận hành", group: "Báo cáo", Component: LiveReports }
  ,{ id: "drivers", title: "UC-03 · Tài xế và khu vực", group: "Tài xế", Component: LiveDriverManagement }
];

function getScreenFromHash() {
  const value = window.location.hash.replace("#", "");
  return screens.some((screen) => screen.id === value) ? value : "dashboard";
}

export default function App() {
  const [screenId, setScreenId] = useState(getScreenFromHash);
  const [showQuickMenu, setShowQuickMenu] = useState(false);
  const active = useMemo(() => screens.find((screen) => screen.id === screenId) ?? screens[4], [screenId]);

  useEffect(() => {
    const syncHash = () => setScreenId(getScreenFromHash());
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const selectScreen = (id: string) => {
    window.location.hash = id;
    setShowQuickMenu(false);
  };

  const ScreenComponent = active.Component;

  return (
    <main className="min-h-screen bg-[#edf2f5] flex justify-center relative">
      {/* Khung hiển thị giao diện thuần Figma 100%, không bị trùng thanh điều hướng ngoài */}
      <div className="w-full flex justify-center">
        <ScreenComponent />
      </div>

      {/* Nút điều khiển nổi góc dưới bên phải */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setShowQuickMenu(!showQuickMenu)}
          className="bg-[#082e40] hover:bg-[#0f1b2a] text-[#b8d0db] hover:text-white text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-lg border border-[#1e3a4e] flex items-center gap-1.5 cursor-pointer transition-colors"
          title="Chọn nhanh màn hình demo"
        >
          <span>⚡ Chọn màn hình</span>
          <span className="text-[9px]">▾</span>
        </button>

        {showQuickMenu && (
          <div className="absolute bottom-10 right-0 w-[270px] max-h-[440px] overflow-y-auto bg-[#082e40] border border-[#1e3a4e] rounded-xl shadow-2xl p-2.5 text-[#b8d0db]">
            <div className="text-[11px] font-bold text-white mb-2 px-2 pb-1 border-b border-[#1e3a4e] flex justify-between items-center">
              <span>Danh sách màn hình demo</span>
              <button onClick={() => setShowQuickMenu(false)} className="text-[#8fa0b3] hover:text-white text-[12px] cursor-pointer">✕</button>
            </div>
            {screens.map((screen) => (
              <button
                key={screen.id}
                onClick={() => selectScreen(screen.id)}
                className={`w-full text-left text-[11px] py-1.5 px-2 rounded-md transition-colors block cursor-pointer ${
                  screen.id === active.id
                    ? "bg-[#087f8c] text-white font-bold"
                    : "hover:bg-[#10243a] text-[#c2dde5]"
                }`}
              >
                {screen.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
