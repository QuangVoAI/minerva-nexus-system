import React, { useEffect, useState } from "react";
import svgPaths from "../codelayer-40-128/svg-pwzfn0yyu6";

function Boxes() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="boxes">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" viewBox="0 0 22 22" width="22">
        <g id="boxes">
          <path d={svgPaths.p30efd040} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function ChevronsUpDown() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="chevrons-up-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" viewBox="0 0 14 14" width="14">
        <path d={svgPaths.p3b0a5700} id="Vector" stroke="#8FA0B3" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function Radio() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="radio">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" viewBox="0 0 13 13" width="13">
        <path d={svgPaths.p146b4500} id="Vector" stroke="#55CECA" strokeLinecap="round" />
      </svg>
    </div>
  );
}

const AVAILABLE_HUBS = [
  { id: "HUB_Q7", code: "Hub Q7-01", name: "Hub Quận 7", desc: "KCX Tân Thuận (SRS MVP)" },
  { id: "HUB_Q1", code: "Hub Q1-01", name: "Hub Quận 1", desc: "Trung tâm Bến Nghé" },
  { id: "HUB_BT", code: "Hub BT-02", name: "Hub Bình Thạnh", desc: "Hàng Xanh Phước Long" },
  { id: "HUB_CG", code: "Hub CG-01", name: "Hub Cầu Giấy", desc: "Dịch Vọng Hậu, Hà Nội" },
];

export function DiuHngHub() {
  const [currentHash, setCurrentHash] = useState(() => window.location.hash.replace("#", "") || "dashboard");
  const [selectedHub, setSelectedHub] = useState(() => localStorage.getItem("minerva_current_hub") || "Hub Quận 7");
  const [isHubDropdownOpen, setIsHubDropdownOpen] = useState(false);
  const [hubToast, setHubToast] = useState<string | null>(null);

  useEffect(() => {
    const handleHash = () => setCurrentHash(window.location.hash.replace("#", "") || "dashboard");
    const handleHubChange = () => setSelectedHub(localStorage.getItem("minerva_current_hub") || "Hub Quận 7");
    window.addEventListener("hashchange", handleHash);
    window.addEventListener("minerva_hub_changed", handleHubChange);
    return () => {
      window.removeEventListener("hashchange", handleHash);
      window.removeEventListener("minerva_hub_changed", handleHubChange);
    };
  }, []);

  const handleSelectHub = (hub: typeof AVAILABLE_HUBS[0]) => {
    setSelectedHub(hub.name);
    localStorage.setItem("minerva_current_hub", hub.name);
    localStorage.setItem("minerva_current_hub_code", hub.code);
    setIsHubDropdownOpen(false);
    window.dispatchEvent(new Event("minerva_hub_changed"));
    setHubToast(`Đã chuyển sang điểm vận hành: ${hub.name} (${hub.code})`);
    setTimeout(() => setHubToast(null), 3000);
  };

  const navigate = (hash: string) => {
    window.location.hash = hash;
  };

  const navItemClass = (isActive: boolean) =>
    `content-stretch flex gap-[10px] h-[44px] items-center overflow-clip px-[12px] relative rounded-[8px] shrink-0 w-full cursor-pointer transition-colors ${
      isActive
        ? "bg-[#0f1b2a] border border-[#1e3a4e] text-white"
        : "bg-[#101f32] hover:bg-[#162a42] text-[#aab8c8] hover:text-white"
    }`;

  const isDashboard = currentHash === "dashboard" || currentHash === "";
  const isOrders = currentHash === "orders" || currentHash === "create-order" || currentHash === "import-errors";
  const isShifts = currentHash === "shifts";
  const isDispatch = currentHash === "dispatch";
  const isOrderDetail = currentHash === "order-detail" || currentHash === "exceptions";
  const isDriver = currentHash === "driver" || currentHash.startsWith("failed") || currentHash === "redelivery" || currentHash === "refused" || currentHash === "returned";
  const isPermissions = currentHash === "permissions";

  return (
    <div className="bg-[#082e40] content-stretch flex flex-col gap-[24px] items-start min-h-[1120px] overflow-visible pb-[20px] pt-[24px] px-[16px] relative self-stretch shrink-0 w-[204px] z-30" data-name="Điều hướng Hub">
      {hubToast && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#087f8c] text-white px-4 py-2 rounded-lg shadow-xl text-[12px] font-semibold animate-fade-in flex items-center gap-2">
          <span>✓</span>
          <span>{hubToast}</span>
        </div>
      )}

      {/* Brand Logo */}
      <div
        onClick={() => navigate("dashboard")}
        className="content-stretch flex gap-[10px] items-center overflow-clip px-[5px] relative shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
        data-name="Nhận diện"
      >
        <div className="bg-[#087f8c] content-stretch flex h-[34px] items-center justify-center overflow-clip relative rounded-[7px] shrink-0 w-[32px]">
          <Boxes />
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] items-start not-italic overflow-clip relative shrink-0 tracking-[1px] whitespace-nowrap">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] text-white tracking-[0.5px]">HUB / OPS</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#b8d0db] text-[12px] tracking-[0.8px]">Vận hành logistics</p>
        </div>
      </div>

      {/* Điểm vận hành (Hub Switcher) */}
      <div className="bg-[#1b2d43] relative rounded-[8px] shrink-0 w-full z-40" data-name="Hub hiện tại">
        <div className="content-stretch flex flex-col gap-[7px] items-start p-[12px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] text-[#b8d0db] text-[12px] tracking-[0.5px]">Điểm vận hành</p>
          <button
            type="button"
            onClick={() => setIsHubDropdownOpen(!isHubDropdownOpen)}
            className="bg-[#0f1b2a] hover:bg-[#152438] transition-colors content-stretch flex items-center justify-between p-[8px] relative rounded-[8px] shrink-0 w-full cursor-pointer text-left border border-transparent hover:border-[#2e526e]"
            title="Nhấn để đổi điểm vận hành / Hub"
          >
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-white truncate">{selectedHub}</p>
            <ChevronsUpDown />
          </button>
        </div>
        <div aria-hidden className="absolute border border-[#1e3a4e] border-solid inset-0 pointer-events-none rounded-[8px]" />

        {/* Dropdown danh sách Hub */}
        {isHubDropdownOpen && (
          <div className="absolute top-[calc(100%+4px)] left-0 w-[240px] bg-[#0f1b2a] border border-[#2e526e] rounded-xl shadow-2xl p-2 z-50 text-white animate-fade-in">
            <div className="px-2 py-1 text-[11px] font-bold text-[#8fa0b3] border-b border-[#1e3a4e] flex justify-between items-center mb-1">
              <span>CHỌN ĐIỂM VẬN HÀNH</span>
              <button
                type="button"
                onClick={() => setIsHubDropdownOpen(false)}
                className="text-[#8fa0b3] hover:text-white text-[12px] cursor-pointer"
              >
                ✕
              </button>
            </div>
            {AVAILABLE_HUBS.map((hub) => {
              const isSelected = selectedHub === hub.name;
              return (
                <button
                  key={hub.id}
                  type="button"
                  onClick={() => handleSelectHub(hub)}
                  className={`w-full text-left p-2 rounded-lg text-[12px] transition-colors mb-1 cursor-pointer flex flex-col ${
                    isSelected
                      ? "bg-[#087f8c] text-white font-semibold shadow"
                      : "hover:bg-[#1a2c42] text-[#d1e0e8]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold">{hub.name}</span>
                    <span className="text-[10px] opacity-80 font-mono">{hub.code}</span>
                  </div>
                  <span className="text-[10px] opacity-75 mt-0.5">{hub.desc}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Menu Vận hành ca trực */}
      <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Nghiệp vụ">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] text-[#b8d0db] text-[12px] tracking-[0.5px]">Vận hành ca trực</p>

        {/* 1. Bàn điều hành */}
        <div onClick={() => navigate("dashboard")} className={navItemClass(isDashboard)}>
          <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
            <path d={svgPaths.p2f7c3ff0} stroke={isDashboard ? "#087F8C" : "#8FA0B3"} strokeLinecap="round" strokeWidth="1.7" />
            <path d={svgPaths.p772e900} stroke={isDashboard ? "#087F8C" : "#8FA0B3"} strokeLinecap="round" strokeWidth="1.7" />
            <path d={svgPaths.p99ad200} stroke={isDashboard ? "#087F8C" : "#8FA0B3"} strokeLinecap="round" strokeWidth="1.7" />
            <path d={svgPaths.p3fc0d440} stroke={isDashboard ? "#087F8C" : "#8FA0B3"} strokeLinecap="round" strokeWidth="1.7" />
          </svg>
          <p className="flex-1 text-[12px] font-semibold leading-normal">Bàn điều hành</p>
        </div>

        {/* 2. Tiếp nhận đơn */}
        <div onClick={() => navigate("orders")} className={navItemClass(isOrders)}>
          <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
            <path d={svgPaths.p2cab6600} stroke={isOrders ? "#087F8C" : "#8FA0B3"} strokeLinecap="round" strokeWidth="1.7" />
          </svg>
          <p className="flex-1 text-[12px] font-normal leading-normal">Tiếp nhận đơn</p>
        </div>

        {/* 3. Ca giao & điểm danh */}
        <div onClick={() => navigate("shifts")} className={navItemClass(isShifts)}>
          <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
            <path d={svgPaths.p1825ee00} stroke={isShifts ? "#087F8C" : "#8FA0B3"} strokeLinecap="round" strokeWidth="1.7" />
          </svg>
          <p className="flex-1 text-[12px] font-normal leading-normal">Ca giao & điểm danh</p>
        </div>

        {/* 4. Gợi ý phân công */}
        <div onClick={() => navigate("dispatch")} className={navItemClass(isDispatch)}>
          <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
            <path d={svgPaths.p2ac56f00} stroke={isDispatch ? "#087F8C" : "#8FA0B3"} strokeLinecap="round" strokeWidth="1.7" />
          </svg>
          <p className="flex-1 text-[12px] font-normal leading-normal">Gợi ý phân công</p>
          <span className="bg-[#dc2626] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">6</span>
        </div>

        {/* 5. Hồ sơ đơn hàng */}
        <div onClick={() => navigate("order-detail")} className={navItemClass(isOrderDetail)}>
          <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
            <path d={svgPaths.p2cab6600} stroke={isOrderDetail ? "#087F8C" : "#8FA0B3"} strokeLinecap="round" strokeWidth="1.7" />
          </svg>
          <p className="flex-1 text-[12px] font-normal leading-normal">Hồ sơ đơn hàng</p>
        </div>

        {/* 6. Đội tài xế */}
        <div onClick={() => navigate("driver")} className={navItemClass(isDriver)}>
          <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
            <path d={svgPaths.p266a6480} stroke={isDriver ? "#087F8C" : "#8FA0B3"} strokeLinecap="round" strokeWidth="1.7" />
          </svg>
          <p className="flex-1 text-[12px] font-normal leading-normal">Đội tài xế (App)</p>
        </div>

        {/* 7. Cảnh báo SLA */}
        <div onClick={() => navigate("dispatch")} className={navItemClass(false)}>
          <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
            <path d={svgPaths.p357b3800} stroke="#8FA0B3" strokeLinecap="round" strokeWidth="1.7" />
          </svg>
          <p className="flex-1 text-[12px] font-normal leading-normal">Cảnh báo SLA</p>
        </div>
      </div>

      {/* Menu Quản trị */}
      <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Quản trị">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] text-[#b8d0db] text-[12px] tracking-[0.5px]">Quản lý</p>

        {/* Lịch sử ca trực */}
        <div onClick={() => navigate("order-detail")} className={navItemClass(false)}>
          <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
            <path d={svgPaths.p1825ee00} stroke="#8FA0B3" strokeLinecap="round" strokeWidth="1.7" />
          </svg>
          <p className="flex-1 text-[12px] font-normal leading-normal">Lịch sử ca trực</p>
        </div>

        {/* Cấu hình & Phân quyền */}
        <div onClick={() => navigate("permissions")} className={navItemClass(isPermissions)}>
          <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
            <path d={svgPaths.p2ded3c00} stroke={isPermissions ? "#087F8C" : "#8FA0B3"} strokeLinecap="round" strokeWidth="1.7" />
          </svg>
          <p className="flex-1 text-[12px] font-normal leading-normal">Cấu hình Hub</p>
        </div>
      </div>

      <div className="flex-1 min-h-[40px] w-full" />

      {/* Phiên trực (Bấm để đăng xuất) */}
      <div
        onClick={() => navigate("login")}
        className="relative shrink-0 w-full cursor-pointer hover:bg-[#10243a] transition-colors rounded-[8px]"
        data-name="Phiên trực"
        title="Bấm để đăng xuất"
      >
        <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] text-[#8fa0b3] text-[12px]">Điều phối viên</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] text-[14px] text-white">Trần Văn Bình</p>
          <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0">
            <Radio />
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] text-[#55ceca] text-[12px]">Đang trong ca trực</p>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#1e3a4e] border-solid border-t inset-0 pointer-events-none" />
      </div>
    </div>
  );
}
export default DiuHngHub;
