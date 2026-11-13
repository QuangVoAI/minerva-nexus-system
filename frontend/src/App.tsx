import { useEffect, useMemo, useState } from "react";
import LoginDesktop from "./codelayer-40-49/main";
import LoginDriver from "./codelayer-40-66/main";
import LoginStates from "./codelayer-40-76/main";
import PermissionLegend from "./codelayer-40-114/main";
import Dashboard from "./codelayer-40-128/main";
import OrderIntake from "./codelayer-40-142/main";
import ImportErrors from "./codelayer-40-154/main";
import CreateOrder from "./codelayer-40-168/main";
import ShiftCheckIn from "./codelayer-40-184/main";
import OrderDetail from "./codelayer-40-204/main";
import Exceptions from "./codelayer-40-224/main";
import DriverTasks from "./codelayer-40-246/main";
import FailureOne from "./codelayer-40-270/main";
import Redelivery from "./codelayer-40-296/main";
import FailedPending from "./codelayer-40-335/main";
import RefusedThird from "./codelayer-40-365/main";
import Returned from "./codelayer-40-398/main";
import Dispatch from "./codelayer-40-432/main";
import { DemoFlowBar } from "./components/DemoFlowBar";
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
  { id: "shifts", title: "SCR-04 · Lập ca & điểm danh", group: "Điều phối", Component: ShiftCheckIn },
  { id: "dispatch", title: "SCR-05 · Gợi ý phân công", group: "Điều phối", Component: Dispatch },
  { id: "order-detail", title: "SCR-06 · Hồ sơ chi tiết đơn", group: "Điều phối", Component: OrderDetail },
  { id: "exceptions", title: "SCR-06 · Ngoại lệ giao hàng", group: "Điều phối", Component: Exceptions },
  { id: "driver", title: "SCR-07 · Tác vụ tài xế", group: "Mobile", Component: DriverTasks },
  { id: "failed-1", title: "SCR-08 · Báo thất bại lần đầu", group: "Mobile", Component: FailureOne },
  { id: "redelivery", title: "SCR-08 · Khách hẹn giao lại", group: "Mobile", Component: Redelivery },
  { id: "failed", title: "SCR-08 · FAILED chờ phát lại", group: "Mobile", Component: FailedPending },
  { id: "refused", title: "SCR-08 · Từ chối nhận lần ba", group: "Mobile", Component: RefusedThird },
  { id: "returned", title: "SCR-08 · RETURNED chuyển hoàn", group: "Mobile", Component: Returned }
];

function getScreenFromHash() {
  const value = window.location.hash.replace("#", "");
  return screens.some((screen) => screen.id === value) ? value : "dashboard";
}

export default function App() {
  const [screenId, setScreenId] = useState(getScreenFromHash);
  const [apiStatus, setApiStatus] = useState<"checking" | "online" | "offline">("checking");
  const [showDemoModal, setShowDemoModal] = useState<boolean>(false);
  const embed = new URLSearchParams(window.location.search).get("embed") === "1";
  const active = useMemo(() => screens.find((screen) => screen.id === screenId) ?? screens[4], [screenId]);

  useEffect(() => {
    const syncHash = () => setScreenId(getScreenFromHash());
    window.addEventListener("hashchange", syncHash);
    fetch("/api/analytics").then((response) => setApiStatus(response.ok ? "online" : "offline")).catch(() => setApiStatus("offline"));
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const selectScreen = (id: string) => { window.location.hash = id; };
  const groups = [...new Set(screens.map((screen) => screen.group))];
  const ScreenComponent = active.Component;

  return (
    <main className={embed ? "figma-runtime figma-runtime--embed" : "figma-runtime"}>
      <aside className="figma-runtime__nav" aria-label="Danh sách màn hình prototype">
        <div className="figma-runtime__brand"><span>MINERVA NEXUS</span><small>Figma React runtime</small></div>
        {groups.map((group) => (
          <section key={group} className="figma-runtime__group">
            <h2>{group}</h2>
            {screens.filter((screen) => screen.group === group).map((screen) => (
              <button key={screen.id} className={screen.id === active.id ? "is-active" : ""} onClick={() => selectScreen(screen.id)}>{screen.title}</button>
            ))}
          </section>
        ))}
        <div className={`figma-runtime__api figma-runtime__api--${apiStatus}`}>API Java: {apiStatus === "checking" ? "đang kiểm tra" : apiStatus === "online" ? "đã kết nối" : "chưa chạy"}</div>
        <button
          type="button"
          onClick={() => setShowDemoModal(true)}
          style={{
            marginTop: "12px",
            width: "100%",
            padding: "8px 10px",
            background: "#2563eb",
            color: "white",
            borderRadius: "6px",
            border: "none",
            fontSize: "11px",
            fontWeight: 700,
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          ⚡ Công cụ Test API (M3)
        </button>
      </aside>
      <section className="figma-runtime__stage" aria-label={active.title}>
        <div className="figma-runtime__toolbar"><strong>{active.title}</strong><span>Render từ Figma code export gốc</span></div>
        <div className="figma-runtime__canvas"><ScreenComponent /></div>
      </section>

      {showDemoModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "12px",
              boxShadow: "0 20px 25px -5px rgba(0,0,0,0.2)",
              maxWidth: "1100px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 20px",
                borderBottom: "1px solid #e2e8f0",
              }}
            >
              <strong style={{ fontSize: "14px", color: "#1e3a8a" }}>
                Bảng điều khiển kiểm thử REST API (M3 · Luồng Demo E2E)
              </strong>
              <button
                type="button"
                onClick={() => setShowDemoModal(false)}
                style={{
                  background: "transparent",
                  border: "none",
                  fontSize: "18px",
                  cursor: "pointer",
                  color: "#64748b",
                  padding: "4px 8px",
                }}
              >
                ✕
              </button>
            </div>
            <div>
              <DemoFlowBar
                apiStatus={apiStatus}
                onNavigateToScreen={(id) => {
                  selectScreen(id);
                  setShowDemoModal(false);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
