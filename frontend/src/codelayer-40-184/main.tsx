import { createContext, useContext, useState } from "react";
import svgPaths from "./svg-oz9anbhy43";
import { DiuHngHub as DiuHngHubShared } from "../components/DiuHngHub";

export interface ShiftContextType {
  activeShift: "ca1" | "ca2";
  setActiveShift: (s: "ca1" | "ca2") => void;
  attendanceFilter: "all" | "checked_in" | "not_checked_in";
  setAttendanceFilter: (f: "all" | "checked_in" | "not_checked_in") => void;
  driverSearch: string;
  setDriverSearch: (q: string) => void;
  checkedInDrivers: Record<string, boolean>;
  toggleDriverCheckIn: (code: string) => void;
}

export const ShiftContext = createContext<ShiftContextType>({
  activeShift: "ca1",
  setActiveShift: () => {},
  attendanceFilter: "all",
  setAttendanceFilter: () => {},
  driverSearch: "",
  setDriverSearch: () => {},
  checkedInDrivers: { TX045: true, TX048: true, TX051: true, TX055: true },
  toggleDriverCheckIn: () => {},
});

function Boxes() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="boxes">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="boxes">
          <path d={svgPaths.p30efd040} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function DuHiuHub() {
  return (
    <div className="bg-[#087f8c] content-stretch flex h-[34px] items-center justify-center overflow-clip relative rounded-[7px] shrink-0 w-[32px]" data-name="Dấu hiệu Hub">
      <Boxes />
    </div>
  );
}

function TenHThng() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[3px] items-start not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Tên hệ thống">
      <p className="leading-[normal] relative shrink-0 text-[17px] text-white tracking-[0.5px]">HUB / OPS</p>
      <p className="leading-[1.45] relative shrink-0 text-[#b8d0db] text-[12px] tracking-[0.8px]">Vận hành logistics</p>
    </div>
  );
}

function NhnDin() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[5px] relative shrink-0" data-name="Nhận diện">
      <DuHiuHub />
      <TenHThng />
    </div>
  );
}

function ChevronsUpDown() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="chevrons-up-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="chevrons-up-down">
          <path d={svgPaths.p3b0a5700} id="Vector" stroke="#8FA0B3" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function HubDaChn() {
  return (
    <div className="bg-[#0f1b2a] content-stretch flex items-center justify-between overflow-clip p-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Hub đã chọn">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Hub Q.7</p>
      <ChevronsUpDown />
    </div>
  );
}

function HubHinTi() {
  return (
    <div className="bg-[#1b2d43] relative rounded-[8px] shrink-0 w-full" data-name="Hub hiện tại">
      <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#b8d0db] text-[12px] tracking-[0.5px] whitespace-nowrap">Điểm vận hành</p>
        <HubDaChn />
      </div>
      <div aria-hidden className="absolute border border-[#1e3a4e] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function LayoutDashboard() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="layout-dashboard">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="layout-dashboard">
          <g id="Vector">
            <path d={svgPaths.p2f7c3ff0} stroke="#8FA0B3" strokeLinecap="round" strokeWidth="1.7" />
            <path d={svgPaths.p772e900} stroke="#8FA0B3" strokeLinecap="round" strokeWidth="1.7" />
            <path d={svgPaths.p99ad200} stroke="#8FA0B3" strokeLinecap="round" strokeWidth="1.7" />
            <path d={svgPaths.p3fc0d440} stroke="#8FA0B3" strokeLinecap="round" strokeWidth="1.7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function McDiuHng() {
  return (
    <div className="bg-[#101f32] content-stretch flex gap-[10px] h-[44px] items-center overflow-clip px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Mục điều hướng">
      <LayoutDashboard />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#aab8c8] text-[12px]">Bàn điều hành</p>
    </div>
  );
}

function Package() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="package">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="package">
          <path d={svgPaths.p2cab6600} id="Vector" stroke="#8FA0B3" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function McDiuHng1() {
  return (
    <div className="bg-[#101f32] content-stretch flex gap-[10px] h-[44px] items-center overflow-clip px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Mục điều hướng">
      <Package />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#aab8c8] text-[12px]">Tiếp nhận đơn</p>
    </div>
  );
}

function History() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="history">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="history">
          <path d={svgPaths.p1825ee00} id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function McDiuHng2() {
  return (
    <div className="bg-[#0f1b2a] h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Mục điều hướng">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <History />
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[12px] text-white">{`Ca giao & điểm danh`}</p>
      </div>
      <div aria-hidden className="absolute border border-[#1e3a4e] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Route() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="route">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="route">
          <path d={svgPaths.p2ac56f00} id="Vector" stroke="#8FA0B3" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function McDiuHng3() {
  return (
    <div className="bg-[#101f32] content-stretch flex gap-[10px] h-[44px] items-center overflow-clip px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Mục điều hướng">
      <Route />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#aab8c8] text-[12px]">Gợi ý phân công</p>
    </div>
  );
}

function Package1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="package">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="package">
          <path d={svgPaths.p2cab6600} id="Vector" stroke="#8FA0B3" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function McDiuHng4() {
  return (
    <div className="bg-[#101f32] content-stretch flex gap-[10px] h-[44px] items-center overflow-clip px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Mục điều hướng">
      <Package1 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#aab8c8] text-[12px]">Hồ sơ đơn hàng</p>
    </div>
  );
}

function Truck() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="truck">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="truck">
          <path d={svgPaths.p266a6480} id="Vector" stroke="#8FA0B3" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function McDiuHng5() {
  return (
    <div className="bg-[#101f32] content-stretch flex gap-[10px] h-[44px] items-center overflow-clip px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Mục điều hướng">
      <Truck />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#aab8c8] text-[12px]">Đội tài xế</p>
    </div>
  );
}

function BellRing() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="bell-ring">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_55)" id="bell-ring">
          <path d={svgPaths.p357b3800} id="Vector" stroke="#8FA0B3" strokeLinecap="round" strokeWidth="1.7" />
        </g>
        <defs>
          <clipPath id="clip0_0_55">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function McDiuHng6() {
  return (
    <div className="bg-[#101f32] content-stretch flex gap-[10px] h-[44px] items-center overflow-clip px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Mục điều hướng">
      <BellRing />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#aab8c8] text-[12px]">Cảnh báo SLA</p>
    </div>
  );
}

function NghipV() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Nghiệp vụ">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#b8d0db] text-[12px] tracking-[0.5px] whitespace-nowrap">Vận hành ca trực</p>
      <McDiuHng />
      <McDiuHng1 />
      <McDiuHng2 />
      <McDiuHng3 />
      <McDiuHng4 />
      <McDiuHng5 />
      <McDiuHng6 />
    </div>
  );
}

function History1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="history">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="history">
          <path d={svgPaths.p1825ee00} id="Vector" stroke="#8FA0B3" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function McDiuHng7() {
  return (
    <div className="bg-[#101f32] content-stretch flex gap-[10px] h-[44px] items-center overflow-clip px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Mục điều hướng">
      <History1 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#aab8c8] text-[12px]">Lịch sử ca trực</p>
    </div>
  );
}

function Settings() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="settings-2">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="settings-2">
          <path d={svgPaths.p2ded3c00} id="Vector" stroke="#8FA0B3" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function McDiuHng8() {
  return (
    <div className="bg-[#101f32] content-stretch flex gap-[10px] h-[44px] items-center overflow-clip px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Mục điều hướng">
      <Settings />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#aab8c8] text-[12px]">Cấu hình Hub</p>
    </div>
  );
}

function QunTr() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Quản trị">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#b8d0db] text-[12px] tracking-[0.5px] whitespace-nowrap">Quản lý</p>
      <McDiuHng7 />
      <McDiuHng8 />
    </div>
  );
}

function KhongDm() {
  return <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Khoảng đệm" />;
}

function Radio() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="radio">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="radio">
          <path d={svgPaths.p146b4500} id="Vector" stroke="#55CECA" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function CaHotDng() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-name="Ca hoạt động">
      <Radio />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#55ceca] text-[12px] whitespace-nowrap">Đang trực</p>
    </div>
  );
}

function PhienTrc() {
  return (
    <div className="relative shrink-0 w-full" data-name="Phiên trực">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#8fa0b3] text-[12px] whitespace-nowrap">Trưởng ca</p>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Mai Linh</p>
        <CaHotDng />
      </div>
      <div aria-hidden className="absolute border-[#1e3a4e] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function DiuHngHub() {
  return <DiuHngHubShared />;
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="chevron-right">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="#657684" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function DngDn() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Đường dẫn">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Vận hành Hub</p>
      <ChevronRight />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">{`Ca giao & điểm danh`}</p>
    </div>
  );
}

function KtNi() {
  return (
    <div className="content-stretch flex gap-[7px] items-center overflow-clip relative shrink-0" data-name="Kết nối">
      <div className="relative shrink-0 size-[6px]" data-name="Tín hiệu">
        <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
          <circle cx="3" cy="3" fill="#087F8C" id="TÃ­n hiá»u" r="3" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">Trực tuyến</p>
    </div>
  );
}

function Bell() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="bell">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="bell">
          <path d={svgPaths.p13cb380} id="Vector" stroke="#6B7B88" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function nhDiDin() {
  return (
    <div className="bg-[#e7f4f3] relative rounded-[100px] shrink-0 size-[30px]" data-name="Ảnh đại diện">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">ML</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function KtNiVaNgiDung() {
  return (
    <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0" data-name="Kết nối và người dùng">
      <KtNi />
      <div className="bg-[#e3e9ed] h-[20px] relative shrink-0 w-px" data-name="Phân cách" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">09:20 · 09/11/2026</p>
      <Bell />
      <nhDiDin />
    </div>
  );
}

function ThanhTrngThai() {
  return (
    <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="Thanh trạng thái">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[28px] relative rounded-[inherit] size-full">
        <DngDn />
        <KtNiVaNgiDung />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TieuDVaMa() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-name="Tiêu đề và mã">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.3] min-w-px not-italic relative text-[#182b39] text-[27px] tracking-[-0.5px]">{`Lập ca giao & điểm danh tài xế`}</p>
    </div>
  );
}

function NiDungTieuD() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip relative" data-name="Nội dung tiêu đề">
      <TieuDVaMa />
    </div>
  );
}

function History2() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="history">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="history">
          <path d={svgPaths.p3d4a1090} id="Vector" stroke="#6B7B88" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function LchSDimDanh() {
  return (
    <div
      onClick={() => { window.location.hash = "audit"; }}
      className="bg-white hover:bg-slate-50 cursor-pointer transition-colors h-[36px] relative rounded-[8px] shrink-0"
      data-name="Lịch sử điểm danh"
      title="Bấm để xem lịch sử điểm danh và nhật ký ca"
    >
      <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[13px] relative rounded-[inherit] size-full">
        <History2 />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#182b39] text-[12px] whitespace-nowrap">Lịch sử điểm danh</p>
      </div>
      <div aria-hidden className="absolute border border-[#e3e9ed] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TieuDManHinh() {
  return (
    <div className="content-stretch flex h-[66px] items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Tiêu đề màn hình">
      <NiDungTieuD />
      <LchSDimDanh />
    </div>
  );
}

function CalendarDays() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="calendar-days">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="calendar-days">
          <path d={svgPaths.p106eaa80} id="Vector" stroke="#6B7B88" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="chevron-down">
          <path d={svgPaths.pa029e20} id="Vector" stroke="#6B7B88" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function NgayDaChn() {
  return (
    <div className="h-[42px] relative rounded-[8px] shrink-0 w-full" data-name="Ngày đã chọn">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <CalendarDays />
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px not-italic relative text-[#182b39] text-[13px]">09/11/2026</p>
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#6b7b88] text-[12px] whitespace-nowrap">Hôm nay</p>
        <ChevronDown />
      </div>
      <div aria-hidden className="absolute border border-[#e3e9ed] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ChnNgay() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[238px]" data-name="Chọn ngày">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#6b7b88] text-[12px] whitespace-nowrap">Ngày vận hành</p>
      <NgayDaChn />
    </div>
  );
}

function NutChn() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 size-[14px]" data-name="Nút chọn">
      <div aria-hidden className="absolute border-4 border-[#087f8c] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function LaChnCa() {
  const { activeShift, setActiveShift } = useContext(ShiftContext);
  const isSelected = activeShift === "ca1";
  return (
    <div
      onClick={() => setActiveShift("ca1")}
      className={`${isSelected ? "bg-[#e7f4f3] border-[#087f8c]" : "bg-white border-[#e3e9ed]"} h-[42px] relative rounded-[8px] shrink-0 w-[258px] cursor-pointer transition-colors border border-solid`}
      data-name="Lựa chọn ca"
    >
      <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <div className="bg-white relative rounded-[100px] shrink-0 size-[14px]">
          <div aria-hidden className={`absolute ${isSelected ? "border-4 border-[#087f8c]" : "border border-[#b4bfc7]"} border-solid inset-0 pointer-events-none rounded-[100px]`} />
        </div>
        <p className={`[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 ${isSelected ? "text-[#087f8c] font-semibold" : "text-[#182b39]"} text-[13px] whitespace-nowrap`}>Ca 1</p>
        <p className={`[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 ${isSelected ? "text-[#087f8c]" : "text-[#6b7b88]"} text-[12px] whitespace-nowrap`}>08:00 - 12:00</p>
      </div>
    </div>
  );
}

function NutChn1() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 size-[14px]" data-name="Nút chọn">
      <div aria-hidden className="absolute border border-[#b4bfc7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="clock-3">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g clipPath="url(#clip0_0_73)" id="clock-3">
          <path d={svgPaths.p12750e00} id="Vector" stroke="#94A1AC" strokeLinecap="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_73">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LaChnCa1() {
  const { activeShift, setActiveShift } = useContext(ShiftContext);
  const isSelected = activeShift === "ca2";
  return (
    <div
      onClick={() => setActiveShift("ca2")}
      className={`${isSelected ? "bg-[#e7f4f3] border-[#087f8c]" : "bg-white border-[#e3e9ed]"} h-[42px] relative rounded-[8px] shrink-0 w-[258px] cursor-pointer transition-colors border border-solid`}
      data-name="Lựa chọn ca"
    >
      <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <div className="bg-white relative rounded-[100px] shrink-0 size-[14px]">
          <div aria-hidden className={`absolute ${isSelected ? "border-4 border-[#087f8c]" : "border border-[#b4bfc7]"} border-solid inset-0 pointer-events-none rounded-[100px]`} />
        </div>
        <p className={`[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 ${isSelected ? "text-[#087f8c] font-semibold" : "text-[#182b39]"} text-[13px] whitespace-nowrap`}>Ca 2</p>
        <p className={`[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 ${isSelected ? "text-[#087f8c]" : "text-[#6b7b88]"} text-[12px] whitespace-nowrap`}>13:30 - 17:30</p>
        <Clock />
      </div>
    </div>
  );
}

function CacCa() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-name="Các ca">
      <LaChnCa />
      <LaChnCa1 />
    </div>
  );
}

function ChnCa() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip relative" data-name="Chọn ca">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#6b7b88] text-[12px] whitespace-nowrap">Ca giao</p>
      <CacCa />
    </div>
  );
}

function CircleStop() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="circle-stop">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_42)" id="circle-stop">
          <path d={svgPaths.p34884c00} id="Vector" stroke="#182B39" strokeLinecap="round" strokeWidth="1.6" />
        </g>
        <defs>
          <clipPath id="clip0_0_42">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function KtCa() {
  return (
    <div className="h-[42px] relative rounded-[8px] shrink-0" data-name="Kết ca">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[18px] relative rounded-[inherit] size-full">
        <CircleStop />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#182b39] text-[13px] whitespace-nowrap">Kết ca</p>
      </div>
      <div aria-hidden className="absolute border border-[#e3e9ed] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ThaoTacCa() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end overflow-clip relative shrink-0" data-name="Thao tác ca">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#6b7b88] text-[12px] whitespace-nowrap">Kết thúc dự kiến lúc 12:00</p>
      <KtCa />
    </div>
  );
}

function NgayVaCaLamVic() {
  return (
    <div className="content-stretch flex gap-[24px] items-end overflow-clip px-[20px] py-[18px] relative shrink-0 w-full" data-name="Ngày và ca làm việc">
      <ChnNgay />
      <ChnCa />
      <ThaoTacCa />
    </div>
  );
}

function CircleCheck() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="circle-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_38)" id="circle-check">
          <path d={svgPaths.pb0a5b00} id="Vector" stroke="#94A1AC" strokeLinecap="round" strokeWidth="1.6" />
        </g>
        <defs>
          <clipPath id="clip0_0_38">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ChaM() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-name="Chưa mở">
      <CircleCheck />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#94a1ac] text-[12px] whitespace-nowrap">Chưa mở</p>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="arrow-right">
          <path d={svgPaths.p2b607f80} id="Vector" stroke="#BCC5CC" strokeLinecap="round" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function DangHotDng() {
  return (
    <div className="bg-[#e9f5f2] content-stretch flex gap-[6px] items-center overflow-clip px-[9px] py-[5px] relative rounded-[6px] shrink-0" data-name="Đang hoạt động">
      <div className="bg-[#087f73] relative rounded-[100px] shrink-0 size-[6px]" data-name="Chỉ báo" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#087f73] text-[12px] whitespace-nowrap">Đang hoạt động</p>
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="arrow-right">
          <path d={svgPaths.p2b607f80} id="Vector" stroke="#BCC5CC" strokeLinecap="round" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function CacTrngThai() {
  return (
    <div className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0" data-name="Các trạng thái">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#6b7b88] text-[12px] whitespace-nowrap">Trạng thái ca</p>
      <ChaM />
      <ArrowRight />
      <DangHotDng />
      <ArrowRight1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#94a1ac] text-[12px] whitespace-nowrap">Đã đóng / kết ca</p>
    </div>
  );
}

function VongDiCa() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Vòng đời ca">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[20px] relative rounded-[inherit] size-full">
        <CacTrngThai />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#6b7b88] text-[12px] whitespace-nowrap">Mở lúc 08:00 bởi Mai Linh · Trưởng ca</p>
      </div>
      <div aria-hidden className="absolute border-[#e3e9ed] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function DiuKhinCaGiao() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Điều khiển ca giao">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <NgayVaCaLamVic />
        <VongDiCa />
      </div>
      <div aria-hidden className="absolute border border-[#e3e9ed] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function SLiu() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal gap-[6px] items-start min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Số liệu">
      <p className="leading-[1.45] relative shrink-0 text-[#6b7b88] text-[12px]">Tài xế trong ca</p>
      <p className="leading-[0] relative shrink-0 text-[#182b39] text-[0px] tracking-[-0.5px]">
        <span className="leading-none text-[26px]">6</span>
        <span className="leading-none text-[#94a1ac] text-[16px]">{` tài xế`}</span>
      </p>
      <p className="leading-[1.45] relative shrink-0 text-[#6b7b88] text-[12px]">4 xe máy · 2 xe bán tải</p>
    </div>
  );
}

function Users() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="users">
          <path d={svgPaths.p15db900} id="Vector" stroke="#6B7B88" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function BiuTngChS() {
  return (
    <div className="bg-[#f8fafb] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Biểu tượng chỉ số">
      <Users />
    </div>
  );
}

function ChSCaGiao() {
  return (
    <div className="bg-white flex-[1_0_38px] h-[100px] min-w-px relative rounded-[10px]" data-name="Chỉ số ca giao">
      <div className="content-stretch flex gap-[12px] items-start overflow-clip px-[18px] py-[15px] relative rounded-[inherit] size-full">
        <SLiu />
        <BiuTngChS />
      </div>
      <div aria-hidden className="absolute border border-[#e3e9ed] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function SLiu1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal gap-[6px] items-start min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Số liệu">
      <p className="leading-[1.45] relative shrink-0 text-[#6b7b88] text-[12px]">Đã điểm danh</p>
      <p className="leading-[0] relative shrink-0 text-[#087f73] text-[0px] tracking-[-0.5px]">
        <span className="leading-none text-[26px]">4</span>
        <span className="leading-none text-[#94a1ac] text-[16px]">{` / 6`}</span>
      </p>
      <p className="leading-[1.45] relative shrink-0 text-[#6b7b88] text-[12px]">2 tài xế chưa điểm danh</p>
    </div>
  );
}

function UserCheck() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="user-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="user-check">
          <path d={svgPaths.p11ffe480} id="Vector" stroke="#087F73" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function BiuTngChS1() {
  return (
    <div className="bg-[#e9f5f2] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Biểu tượng chỉ số">
      <UserCheck />
    </div>
  );
}

function ChSCaGiao1() {
  return (
    <div className="bg-white flex-[1_0_38px] h-[100px] min-w-px relative rounded-[10px]" data-name="Chỉ số ca giao">
      <div className="content-stretch flex gap-[12px] items-start overflow-clip px-[18px] py-[15px] relative rounded-[inherit] size-full">
        <SLiu1 />
        <BiuTngChS1 />
      </div>
      <div aria-hidden className="absolute border border-[#e3e9ed] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function SLiu2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal gap-[6px] items-start min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Số liệu">
      <p className="leading-[1.45] relative shrink-0 text-[#6b7b88] text-[12px]">Đang nhận đơn</p>
      <p className="leading-[0] relative shrink-0 text-[#087f73] text-[0px] tracking-[-0.5px]">
        <span className="leading-none text-[26px]">3</span>
        <span className="leading-none text-[#94a1ac] text-[16px]">{` tài xế`}</span>
      </p>
      <p className="leading-[1.45] relative shrink-0 text-[#6b7b88] text-[12px]">1 tài xế tạm dừng nhận việc</p>
    </div>
  );
}

function Radio1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="radio">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="radio">
          <path d={svgPaths.p19bfa80} id="Vector" stroke="#087F73" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function BiuTngChS2() {
  return (
    <div className="bg-[#e9f5f2] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Biểu tượng chỉ số">
      <Radio1 />
    </div>
  );
}

function ChSCaGiao2() {
  return (
    <div className="bg-white flex-[1_0_38px] h-[100px] min-w-px relative rounded-[10px]" data-name="Chỉ số ca giao">
      <div className="content-stretch flex gap-[12px] items-start overflow-clip px-[18px] py-[15px] relative rounded-[inherit] size-full">
        <SLiu2 />
        <BiuTngChS2 />
      </div>
      <div aria-hidden className="absolute border border-[#e3e9ed] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function SLiu3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal gap-[6px] items-start min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Số liệu">
      <p className="leading-[1.45] relative shrink-0 text-[#6b7b88] text-[12px]">Tải của tài xế đã điểm danh</p>
      <p className="leading-[0] relative shrink-0 text-[#182b39] text-[0px] tracking-[-0.5px]">
        <span className="leading-none text-[26px]">48</span>
        <span className="leading-none text-[#94a1ac] text-[16px]">{` / 85 đơn`}</span>
      </p>
      <p className="leading-[1.45] relative shrink-0 text-[#6b7b88] text-[12px]">56% công suất đã được sử dụng</p>
    </div>
  );
}

function PackageCheck() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="package-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="package-check">
          <path d={svgPaths.p27d90800} id="Vector" stroke="#6B7B88" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function BiuTngChS3() {
  return (
    <div className="bg-[#f8fafb] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Biểu tượng chỉ số">
      <PackageCheck />
    </div>
  );
}

function ChSCaGiao3() {
  return (
    <div className="bg-white flex-[1_0_38px] h-[100px] min-w-px relative rounded-[10px]" data-name="Chỉ số ca giao">
      <div className="content-stretch flex gap-[12px] items-start overflow-clip px-[18px] py-[15px] relative rounded-[inherit] size-full">
        <SLiu3 />
        <BiuTngChS3 />
      </div>
      <div aria-hidden className="absolute border border-[#e3e9ed] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function TngQuanCa() {
  return (
    <div className="content-stretch flex gap-[14px] items-start overflow-clip relative shrink-0 w-full" data-name="Tổng quan ca">
      <ChSCaGiao />
      <ChSCaGiao1 />
      <ChSCaGiao2 />
      <ChSCaGiao3 />
    </div>
  );
}

function ShieldCheck() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 21 21" width="21">
        <g id="shield-check">
          <path d={svgPaths.p1c709f00} id="Vector" stroke="#506D85" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function NiDungQuyTc() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic overflow-clip relative text-[12px]" data-name="Nội dung quy tắc">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#36536a] w-full">BR-03 · Chỉ gán đơn cho tài xế đã điểm danh trong ca đang mở.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#60798d] w-full">Không thể gán đơn khi tài xế chưa điểm danh. Nút nhận đơn sẽ bị khóa và tải hiện tại luôn bằng 0.</p>
    </div>
  );
}

function LockKeyhole() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="lock-keyhole">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_24)" id="lock-keyhole">
          <path d={svgPaths.p1b621500} id="Vector" stroke="#60798D" strokeLinecap="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_24">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TinhBtBin() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0" data-name="Tính bất biến">
      <LockKeyhole />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#60798d] text-[12px] whitespace-nowrap">Không thể bỏ qua</p>
    </div>
  );
}

function RangBucBr() {
  return (
    <div className="bg-[#eff4f8] min-h-[60px] relative rounded-[8px] shrink-0 w-full" data-name="Ràng buộc BR-03">
      <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <ShieldCheck />
        <NiDungQuyTc />
        <TinhBtBin />
      </div>
      <div aria-hidden className="absolute border border-[#d7e2eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TngQuanNhanLcVaDiuKinGanDn() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Tổng quan nhân lực và điều kiện gán đơn">
      <TngQuanCa />
      <RangBucBr />
    </div>
  );
}

function TieuDDanhSach() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Tiêu đề danh sách">
      <p className="relative shrink-0 text-[#182b39] text-[16px]">Danh sách tài xế</p>
      <p className="relative shrink-0 text-[#6b7b88] text-[12px]">Ca 1 · 08:00 - 12:00 · Hub Quận 7</p>
    </div>
  );
}

function Download() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="download">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_53)" id="download">
          <path d={svgPaths.p2d3a35c0} id="Vector" stroke="#6B7B88" strokeLinecap="round" strokeWidth="1.6" />
        </g>
        <defs>
          <clipPath id="clip0_0_53">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function XutDanhSach() {
  return (
    <div className="h-[34px] relative rounded-[6px] shrink-0" data-name="Xuất danh sách">
      <div className="content-stretch flex gap-[7px] items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <Download />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#182b39] text-[12px] whitespace-nowrap">Xuất danh sách</p>
      </div>
      <div aria-hidden className="absolute border border-[#e3e9ed] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function UserCheck1() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="user-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="user-check">
          <path d={svgPaths.p2a8eb000} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function DimDanhTaiX() {
  const { toggleDriverCheckIn } = useContext(ShiftContext);
  const [toast, setToast] = useState(false);
  const handleBatchCheckIn = () => {
    toggleDriverCheckIn("ALL");
    setToast(true);
    setTimeout(() => setToast(false), 2500);
  };
  return (
    <div
      onClick={handleBatchCheckIn}
      className="bg-[#087f8c] hover:bg-[#066570] cursor-pointer transition-colors content-stretch flex gap-[7px] h-[34px] items-center overflow-clip px-[13px] relative rounded-[6px] shrink-0"
      data-name="Điểm danh tài xế"
      title="Bấm để điểm danh nhanh tài xế vào ca"
    >
      {toast && (
        <div className="fixed top-16 right-8 z-50 bg-[#15803d] text-white px-5 py-3 rounded-lg shadow-xl font-bold text-[13px] animate-bounce">
          ✓ Đã xác nhận điểm danh tài xế thành công!
        </div>
      )}
      <UserCheck1 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Điểm danh tài xế</p>
    </div>
  );
}

function ThaoTacDanhSach() {
  return (
    <div className="content-stretch flex gap-[9px] items-start overflow-clip relative shrink-0" data-name="Thao tác danh sách">
      <XutDanhSach />
      <DimDanhTaiX />
    </div>
  );
}

function TieuDVaThaoTac() {
  return (
    <div className="content-stretch flex h-[68px] items-center justify-between overflow-clip px-[20px] relative shrink-0 w-full" data-name="Tiêu đề và thao tác">
      <TieuDDanhSach />
      <ThaoTacDanhSach />
    </div>
  );
}

function SLng() {
  return (
    <div className="bg-[#e7f4f3] content-stretch flex items-start overflow-clip px-[5px] py-[2px] relative rounded-[4px] shrink-0" data-name="Số lượng">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">6</p>
    </div>
  );
}

function BLcDimDanh() {
  return (
    <div className="h-[45px] relative shrink-0" data-name="Bộ lọc điểm danh">
      <div className="content-stretch flex gap-[6px] items-center overflow-clip px-[3px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">Tất cả</p>
        <SLng />
      </div>
      <div aria-hidden className="absolute border-[#087f8c] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SLng1() {
  return (
    <div className="bg-[#f0f3f5] content-stretch flex items-start overflow-clip px-[5px] py-[2px] relative rounded-[4px] shrink-0" data-name="Số lượng">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#6b7b88] text-[12px] whitespace-nowrap">4</p>
    </div>
  );
}

function BLcDimDanh1() {
  return (
    <div className="h-[45px] relative shrink-0" data-name="Bộ lọc điểm danh">
      <div className="content-stretch flex gap-[6px] items-center overflow-clip px-[3px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#6b7b88] text-[12px] whitespace-nowrap">Đã điểm danh</p>
        <SLng1 />
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0)] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SLng2() {
  return (
    <div className="bg-[#f0f3f5] content-stretch flex items-start overflow-clip px-[5px] py-[2px] relative rounded-[4px] shrink-0" data-name="Số lượng">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#6b7b88] text-[12px] whitespace-nowrap">2</p>
    </div>
  );
}

function BLcDimDanh2() {
  return (
    <div className="h-[45px] relative shrink-0" data-name="Bộ lọc điểm danh">
      <div className="content-stretch flex gap-[6px] items-center overflow-clip px-[3px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#6b7b88] text-[12px] whitespace-nowrap">Chưa điểm danh</p>
        <SLng2 />
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0)] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function LcTheoDimDanh() {
  const { attendanceFilter, setAttendanceFilter } = useContext(ShiftContext);
  return (
    <div className="content-stretch flex gap-[22px] items-center overflow-clip relative shrink-0" data-name="Lọc theo điểm danh">
      <div
        onClick={() => setAttendanceFilter("all")}
        className="h-[45px] relative shrink-0 cursor-pointer"
        data-name="Bộ lọc điểm danh"
      >
        <div className="content-stretch flex gap-[6px] items-center overflow-clip px-[3px] relative rounded-[inherit] size-full">
          <p className={`[word-break:break-word] ${attendanceFilter === "all" ? "font-semibold text-[#087f8c]" : "font-normal text-[#6b7b88]"} font-['Inter:Semi_Bold',sans-serif] leading-[1.45] not-italic relative shrink-0 text-[12px] whitespace-nowrap`}>Tất cả</p>
          <div className="bg-[#e7f4f3] content-stretch flex items-start overflow-clip px-[5px] py-[2px] relative rounded-[4px] shrink-0">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">6</p>
          </div>
        </div>
        {attendanceFilter === "all" && <div aria-hidden className="absolute border-[#087f8c] border-b-2 border-solid inset-0 pointer-events-none" />}
      </div>

      <div
        onClick={() => setAttendanceFilter("checked_in")}
        className="h-[45px] relative shrink-0 cursor-pointer"
        data-name="Bộ lọc điểm danh"
      >
        <div className="content-stretch flex gap-[6px] items-center overflow-clip px-[3px] relative rounded-[inherit] size-full">
          <p className={`[word-break:break-word] ${attendanceFilter === "checked_in" ? "font-semibold text-[#087f8c]" : "font-normal text-[#6b7b88]"} font-['Inter:Regular',sans-serif] leading-[1.45] not-italic relative shrink-0 text-[12px] whitespace-nowrap`}>Đã điểm danh</p>
          <div className="bg-[#f0f3f5] content-stretch flex items-start overflow-clip px-[5px] py-[2px] relative rounded-[4px] shrink-0">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#6b7b88] text-[12px] whitespace-nowrap">4</p>
          </div>
        </div>
        {attendanceFilter === "checked_in" && <div aria-hidden className="absolute border-[#087f8c] border-b-2 border-solid inset-0 pointer-events-none" />}
      </div>

      <div
        onClick={() => setAttendanceFilter("not_checked_in")}
        className="h-[45px] relative shrink-0 cursor-pointer"
        data-name="Bộ lọc điểm danh"
      >
        <div className="content-stretch flex gap-[6px] items-center overflow-clip px-[3px] relative rounded-[inherit] size-full">
          <p className={`[word-break:break-word] ${attendanceFilter === "not_checked_in" ? "font-semibold text-[#087f8c]" : "font-normal text-[#6b7b88]"} font-['Inter:Regular',sans-serif] leading-[1.45] not-italic relative shrink-0 text-[12px] whitespace-nowrap`}>Chưa điểm danh</p>
          <div className="bg-[#f0f3f5] content-stretch flex items-start overflow-clip px-[5px] py-[2px] relative rounded-[4px] shrink-0">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#6b7b88] text-[12px] whitespace-nowrap">2</p>
          </div>
        </div>
        {attendanceFilter === "not_checked_in" && <div aria-hidden className="absolute border-[#087f8c] border-b-2 border-solid inset-0 pointer-events-none" />}
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="search">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="search">
          <path d={svgPaths.pb810ec0} id="Vector" stroke="#94A1AC" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function TimTaiX() {
  const { driverSearch, setDriverSearch } = useContext(ShiftContext);
  return (
    <div className="h-[32px] relative rounded-[6px] shrink-0 w-[252px]" data-name="Tìm tài xế">
      <div className="content-stretch flex gap-[7px] items-center overflow-clip px-[10px] relative rounded-[inherit] size-full">
        <Search />
        <input
          type="text"
          value={driverSearch}
          onChange={(e) => setDriverSearch(e.target.value)}
          placeholder="Tìm mã hoặc tên tài xế..."
          className="w-full bg-transparent font-['Inter:Regular',sans-serif] text-[12px] text-[#182b39] outline-none"
        />
      </div>
      <div aria-hidden className="absolute border border-[#e3e9ed] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="chevron-down">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="#6B7B88" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function LcTuyn() {
  return (
    <div className="h-[32px] relative rounded-[6px] shrink-0" data-name="Lọc tuyến">
      <div className="content-stretch flex gap-[18px] items-center overflow-clip px-[10px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#182b39] text-[12px] whitespace-nowrap">Tất cả tuyến</p>
        <ChevronDown1 />
      </div>
      <div aria-hidden className="absolute border border-[#e3e9ed] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function CongCTimKim() {
  return (
    <div className="content-stretch flex gap-[9px] items-start overflow-clip relative shrink-0" data-name="Công cụ tìm kiếm">
      <TimTaiX />
      <LcTuyn />
    </div>
  );
}

function TimKimVaLc() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Tìm kiếm và lọc">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[20px] relative rounded-[inherit] size-full">
        <LcTheoDimDanh />
        <CongCTimKim />
      </div>
      <div aria-hidden className="absolute border-[#e3e9ed] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function NhomCtNghipV() {
  return (
    <div className="bg-[#f8fafb] h-[42px] relative shrink-0 w-full" data-name="Nhóm cột nghiệp vụ">
      <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold items-center leading-[1.45] not-italic overflow-clip px-[20px] relative rounded-[inherit] size-full text-[#6b7b88] text-[12px]">
        <p className="relative shrink-0 w-[242px]">{`Mã tài xế & họ tên`}</p>
        <p className="relative shrink-0 w-[220px]">Tuyến phụ trách</p>
        <p className="relative shrink-0 w-[192px]">Phương tiện</p>
        <p className="relative shrink-0 w-[218px]">Trạng thái điểm danh</p>
        <p className="relative shrink-0 w-[174px]">Tải hiện tại</p>
        <p className="relative shrink-0 w-[242px]">Nhận đơn</p>
      </div>
      <div aria-hidden className="absolute border-[#e3e9ed] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function MaVaHTen() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 w-[242px]" data-name="Mã và họ tên">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7b88] text-[12px] tracking-[0.3px] whitespace-nowrap">DRV-01</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold min-w-full relative shrink-0 text-[#182b39] text-[13px] w-[min-content]">Nguyễn Văn An</p>
    </div>
  );
}

function TuynPhTrachChinh() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 w-[220px]" data-name="Tuyến phụ trách chính">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#182b39] text-[13px] w-full">Tân Thuận Đông</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7b88] text-[12px] w-full">Thông thạo địa bàn ngõ hẻm</p>
    </div>
  );
}

function CircleX() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="circle-x">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_14)" id="circle-x">
          <path d={svgPaths.p30a06080} id="Vector" stroke="#6B7B88" strokeLinecap="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LoiXeVaCongSut() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Loại xe và công suất">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#182b39] text-[13px]">Xe máy</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7b88] text-[12px]">Chuẩn 15 đơn</p>
    </div>
  );
}

function PhngTinDangKy() {
  return (
    <div className="content-stretch flex gap-[9px] items-center overflow-clip relative shrink-0 w-[192px]" data-name="Phương tiện đăng ký">
      <CircleX />
      <LoiXeVaCongSut />
    </div>
  );
}

function NhanDimDanh() {
  return (
    <div className="bg-[#e9f5f2] content-stretch flex gap-[5px] items-center overflow-clip px-[8px] py-[5px] relative rounded-[5px] shrink-0" data-name="Nhãn điểm danh">
      <div className="bg-[#087f8c] relative rounded-[100px] shrink-0 size-[5px]" data-name="Đã có mặt" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">07:45 · Sẵn sàng</p>
    </div>
  );
}

function TrngThaiDimDanh() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip relative shrink-0 w-[218px]" data-name="Trạng thái điểm danh">
      <NhanDimDanh />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#6b7b88] text-[12px] whitespace-nowrap">Đã điểm danh trong ca</p>
    </div>
  );
}

function ThanhCongSut() {
  return (
    <div className="bg-[#e4e9ed] content-stretch flex h-[4px] items-start overflow-clip relative rounded-[100px] shrink-0 w-[126px]" data-name="Thanh công suất">
      <div className="bg-[#087f8c] h-[4px] relative rounded-[100px] shrink-0 w-[100.8px]" data-name="Công suất đã nhận" />
    </div>
  );
}

function TiTrngHinTi() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start overflow-clip relative shrink-0 w-[174px]" data-name="Tải trọng hiện tại">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#182b39] text-[0px] whitespace-nowrap">
        <span className="leading-[normal] text-[13px]">12</span>
        <span className="leading-[normal] text-[#6b7b88] text-[11px]">{` / 15 đơn`}</span>
      </p>
      <ThanhCongSut />
    </div>
  );
}

function NutGtNhnDn() {
  return (
    <div className="h-[20px] relative shrink-0 w-[34px]" data-name="Nút gạt nhận đơn">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 34 20" width="34">
        <g id="NÃºt gáº¡t nháº­n ÄÆ¡n">
          <rect fill="#087F8C" height="20" rx="10" width="34" />
          <circle cx="24" cy="10" fill="white" id="NÃºm gáº¡t" r="8" />
        </g>
      </svg>
    </div>
  );
}

function NutGtVaTrngThai() {
  return (
    <div className="content-stretch flex gap-[9px] items-center overflow-clip relative shrink-0" data-name="Nút gạt và trạng thái">
      <NutGtNhnDn />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">Đang nhận đơn</p>
    </div>
  );
}

function DiuKinNhnDn() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip relative shrink-0 w-[242px]" data-name="Điều kiện nhận đơn">
      <NutGtVaTrngThai />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#6b7b88] text-[12px] whitespace-nowrap">Đủ điều kiện gán đơn</p>
    </div>
  );
}

function TaiXTrongCa() {
  return (
    <div className="bg-white h-[76px] relative shrink-0 w-full" data-name="Tài xế trong ca">
      <div className="content-stretch flex items-center overflow-clip px-[20px] relative rounded-[inherit] size-full">
        <MaVaHTen />
        <TuynPhTrachChinh />
        <PhngTinDangKy />
        <TrngThaiDimDanh />
        <TiTrngHinTi />
        <DiuKinNhnDn />
      </div>
      <div aria-hidden className="absolute border-[#e3e9ed] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function MaVaHTen1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 w-[242px]" data-name="Mã và họ tên">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7b88] text-[12px] tracking-[0.3px] whitespace-nowrap">DRV-02</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold min-w-full relative shrink-0 text-[#182b39] text-[13px] w-[min-content]">Trần Thị Minh Châu</p>
    </div>
  );
}

function TuynPhTrachChinh1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 w-[220px]" data-name="Tuyến phụ trách chính">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#182b39] text-[13px] w-full">Tân Thuận Tây</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7b88] text-[12px] w-full">Thông thạo khu dân cư</p>
    </div>
  );
}

function CircleX1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="circle-x">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_14)" id="circle-x">
          <path d={svgPaths.p30a06080} id="Vector" stroke="#6B7B88" strokeLinecap="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LoiXeVaCongSut1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Loại xe và công suất">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#182b39] text-[13px]">Xe máy</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7b88] text-[12px]">Chuẩn 15 đơn</p>
    </div>
  );
}

function PhngTinDangKy1() {
  return (
    <div className="content-stretch flex gap-[9px] items-center overflow-clip relative shrink-0 w-[192px]" data-name="Phương tiện đăng ký">
      <CircleX1 />
      <LoiXeVaCongSut1 />
    </div>
  );
}

function NhanDimDanh1() {
  return (
    <div className="bg-[#e9f5f2] content-stretch flex gap-[5px] items-center overflow-clip px-[8px] py-[5px] relative rounded-[5px] shrink-0" data-name="Nhãn điểm danh">
      <div className="bg-[#087f8c] relative rounded-[100px] shrink-0 size-[5px]" data-name="Đã có mặt" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">07:48 · Sẵn sàng</p>
    </div>
  );
}

function TrngThaiDimDanh1() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip relative shrink-0 w-[218px]" data-name="Trạng thái điểm danh">
      <NhanDimDanh1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#6b7b88] text-[12px] whitespace-nowrap">Đã điểm danh trong ca</p>
    </div>
  );
}

function ThanhCongSut1() {
  return (
    <div className="bg-[#e4e9ed] content-stretch flex h-[4px] items-start overflow-clip relative rounded-[100px] shrink-0 w-[126px]" data-name="Thanh công suất">
      <div className="bg-[#087f8c] h-[4px] relative rounded-[100px] shrink-0 w-[58.8px]" data-name="Công suất đã nhận" />
    </div>
  );
}

function TiTrngHinTi1() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start overflow-clip relative shrink-0 w-[174px]" data-name="Tải trọng hiện tại">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#182b39] text-[0px] whitespace-nowrap">
        <span className="leading-[normal] text-[13px]">7</span>
        <span className="leading-[normal] text-[#6b7b88] text-[11px]">{` / 15 đơn`}</span>
      </p>
      <ThanhCongSut1 />
    </div>
  );
}

function NutGtNhnDn1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[34px]" data-name="Nút gạt nhận đơn">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 34 20" width="34">
        <g id="NÃºt gáº¡t nháº­n ÄÆ¡n">
          <rect fill="#087F8C" height="20" rx="10" width="34" />
          <circle cx="24" cy="10" fill="white" id="NÃºm gáº¡t" r="8" />
        </g>
      </svg>
    </div>
  );
}

function NutGtVaTrngThai1() {
  return (
    <div className="content-stretch flex gap-[9px] items-center overflow-clip relative shrink-0" data-name="Nút gạt và trạng thái">
      <NutGtNhnDn1 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">Đang nhận đơn</p>
    </div>
  );
}

function DiuKinNhnDn1() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip relative shrink-0 w-[242px]" data-name="Điều kiện nhận đơn">
      <NutGtVaTrngThai1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#6b7b88] text-[12px] whitespace-nowrap">Đủ điều kiện gán đơn</p>
    </div>
  );
}

function TaiXTrongCa1() {
  return (
    <div className="bg-white h-[76px] relative shrink-0 w-full" data-name="Tài xế trong ca">
      <div className="content-stretch flex items-center overflow-clip px-[20px] relative rounded-[inherit] size-full">
        <MaVaHTen1 />
        <TuynPhTrachChinh1 />
        <PhngTinDangKy1 />
        <TrngThaiDimDanh1 />
        <TiTrngHinTi1 />
        <DiuKinNhnDn1 />
      </div>
      <div aria-hidden className="absolute border-[#e3e9ed] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function MaVaHTen2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 w-[242px]" data-name="Mã và họ tên">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7b88] text-[12px] tracking-[0.3px] whitespace-nowrap">DRV-03</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold min-w-full relative shrink-0 text-[#182b39] text-[13px] w-[min-content]">Lê Hoàng Nam</p>
    </div>
  );
}

function TuynPhTrachChinh2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 w-[220px]" data-name="Tuyến phụ trách chính">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#182b39] text-[13px] w-full">Tân Phú</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7b88] text-[12px] w-full">Chuyên tuyến trục đường lớn</p>
    </div>
  );
}

function Truck1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="truck">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="truck">
          <path d={svgPaths.p1ff81140} id="Vector" stroke="#6B7B88" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function LoiXeVaCongSut2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Loại xe và công suất">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#182b39] text-[13px]">Xe bán tải</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7b88] text-[12px]">Chuẩn 40 đơn</p>
    </div>
  );
}

function PhngTinDangKy2() {
  return (
    <div className="content-stretch flex gap-[9px] items-center overflow-clip relative shrink-0 w-[192px]" data-name="Phương tiện đăng ký">
      <Truck1 />
      <LoiXeVaCongSut2 />
    </div>
  );
}

function NhanDimDanh2() {
  return (
    <div className="bg-[#e9f5f2] content-stretch flex gap-[5px] items-center overflow-clip px-[8px] py-[5px] relative rounded-[5px] shrink-0" data-name="Nhãn điểm danh">
      <div className="bg-[#087f8c] relative rounded-[100px] shrink-0 size-[5px]" data-name="Đã có mặt" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">07:50 · Sẵn sàng</p>
    </div>
  );
}

function TrngThaiDimDanh2() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip relative shrink-0 w-[218px]" data-name="Trạng thái điểm danh">
      <NhanDimDanh2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#6b7b88] text-[12px] whitespace-nowrap">Đã điểm danh trong ca</p>
    </div>
  );
}

function ThanhCongSut2() {
  return (
    <div className="bg-[#e4e9ed] content-stretch flex h-[4px] items-start overflow-clip relative rounded-[100px] shrink-0 w-[126px]" data-name="Thanh công suất">
      <div className="bg-[#087f8c] h-[4px] relative rounded-[100px] shrink-0 w-[75.6px]" data-name="Công suất đã nhận" />
    </div>
  );
}

function TiTrngHinTi2() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start overflow-clip relative shrink-0 w-[174px]" data-name="Tải trọng hiện tại">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#182b39] text-[0px] whitespace-nowrap">
        <span className="leading-[normal] text-[13px]">24</span>
        <span className="leading-[normal] text-[#6b7b88] text-[11px]">{` / 40 đơn`}</span>
      </p>
      <ThanhCongSut2 />
    </div>
  );
}

function NutGtNhnDn2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[34px]" data-name="Nút gạt nhận đơn">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 34 20" width="34">
        <g id="NÃºt gáº¡t nháº­n ÄÆ¡n">
          <rect fill="#087F8C" height="20" rx="10" width="34" />
          <circle cx="24" cy="10" fill="white" id="NÃºm gáº¡t" r="8" />
        </g>
      </svg>
    </div>
  );
}

function NutGtVaTrngThai2() {
  return (
    <div className="content-stretch flex gap-[9px] items-center overflow-clip relative shrink-0" data-name="Nút gạt và trạng thái">
      <NutGtNhnDn2 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">Đang nhận đơn</p>
    </div>
  );
}

function DiuKinNhnDn2() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip relative shrink-0 w-[242px]" data-name="Điều kiện nhận đơn">
      <NutGtVaTrngThai2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#6b7b88] text-[12px] whitespace-nowrap">Đủ điều kiện gán đơn</p>
    </div>
  );
}

function TaiXTrongCa2() {
  return (
    <div className="bg-white h-[76px] relative shrink-0 w-full" data-name="Tài xế trong ca">
      <div className="content-stretch flex items-center overflow-clip px-[20px] relative rounded-[inherit] size-full">
        <MaVaHTen2 />
        <TuynPhTrachChinh2 />
        <PhngTinDangKy2 />
        <TrngThaiDimDanh2 />
        <TiTrngHinTi2 />
        <DiuKinNhnDn2 />
      </div>
      <div aria-hidden className="absolute border-[#e3e9ed] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function MaVaHTen3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 w-[242px]" data-name="Mã và họ tên">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7b88] text-[12px] tracking-[0.3px] whitespace-nowrap">DRV-04</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold min-w-full relative shrink-0 text-[#182b39] text-[13px] w-[min-content]">Phạm Quốc Huy</p>
    </div>
  );
}

function TuynPhTrachChinh3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 w-[220px]" data-name="Tuyến phụ trách chính">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#182b39] text-[13px] w-full">Bình Thuận</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7b88] text-[12px] w-full">Thông thạo địa bàn ngõ hẻm</p>
    </div>
  );
}

function CircleX2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="circle-x">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_14)" id="circle-x">
          <path d={svgPaths.p30a06080} id="Vector" stroke="#6B7B88" strokeLinecap="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LoiXeVaCongSut3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Loại xe và công suất">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#182b39] text-[13px]">Xe máy</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7b88] text-[12px]">Chuẩn 15 đơn</p>
    </div>
  );
}

function PhngTinDangKy3() {
  return (
    <div className="content-stretch flex gap-[9px] items-center overflow-clip relative shrink-0 w-[192px]" data-name="Phương tiện đăng ký">
      <CircleX2 />
      <LoiXeVaCongSut3 />
    </div>
  );
}

function NhanDimDanh3() {
  return (
    <div className="bg-[#fff6e5] content-stretch flex gap-[5px] items-center overflow-clip px-[8px] py-[5px] relative rounded-[5px] shrink-0" data-name="Nhãn điểm danh">
      <div className="bg-[#f59e0b] relative rounded-[100px] shrink-0 size-[5px]" data-name="Đã có mặt" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#f59e0b] text-[12px] whitespace-nowrap">07:52 · Đã điểm danh</p>
    </div>
  );
}

function TrngThaiDimDanh3() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip relative shrink-0 w-[218px]" data-name="Trạng thái điểm danh">
      <NhanDimDanh3 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#6b7b88] text-[12px] whitespace-nowrap">Đã điểm danh trong ca</p>
    </div>
  );
}

function ThanhCongSut3() {
  return (
    <div className="bg-[#e4e9ed] content-stretch flex h-[4px] items-start overflow-clip relative rounded-[100px] shrink-0 w-[126px]" data-name="Thanh công suất">
      <div className="bg-[#f59e0b] h-[4px] relative rounded-[100px] shrink-0 w-[42px]" data-name="Công suất đã nhận" />
    </div>
  );
}

function TiTrngHinTi3() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start overflow-clip relative shrink-0 w-[174px]" data-name="Tải trọng hiện tại">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#182b39] text-[0px] whitespace-nowrap">
        <span className="leading-[normal] text-[13px]">5</span>
        <span className="leading-[normal] text-[#6b7b88] text-[11px]">{` / 15 đơn`}</span>
      </p>
      <ThanhCongSut3 />
    </div>
  );
}

function NutGtNhnDn3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[34px]" data-name="Nút gạt nhận đơn">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 34 20" width="34">
        <g id="NÃºt gáº¡t nháº­n ÄÆ¡n">
          <rect fill="#B7C2CA" height="20" rx="10" width="34" />
          <circle cx="10" cy="10" fill="white" id="NÃºm gáº¡t" r="8" />
        </g>
      </svg>
    </div>
  );
}

function NutGtVaTrngThai3() {
  return (
    <div className="content-stretch flex gap-[9px] items-center overflow-clip relative shrink-0" data-name="Nút gạt và trạng thái">
      <NutGtNhnDn3 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#182b39] text-[12px] whitespace-nowrap">Tạm dừng nhận việc</p>
    </div>
  );
}

function DiuKinNhnDn3() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip relative shrink-0 w-[242px]" data-name="Điều kiện nhận đơn">
      <NutGtVaTrngThai3 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#6b7b88] text-[12px] whitespace-nowrap">Không nhận thêm đơn mới</p>
    </div>
  );
}

function TaiXTrongCa3() {
  return (
    <div className="bg-white h-[76px] relative shrink-0 w-full" data-name="Tài xế trong ca">
      <div className="content-stretch flex items-center overflow-clip px-[20px] relative rounded-[inherit] size-full">
        <MaVaHTen3 />
        <TuynPhTrachChinh3 />
        <PhngTinDangKy3 />
        <TrngThaiDimDanh3 />
        <TiTrngHinTi3 />
        <DiuKinNhnDn3 />
      </div>
      <div aria-hidden className="absolute border-[#e3e9ed] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function MaVaHTen4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 w-[242px]" data-name="Mã và họ tên">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7b88] text-[12px] tracking-[0.3px] whitespace-nowrap">DRV-05</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold min-w-full relative shrink-0 text-[#182b39] text-[13px] w-[min-content]">Võ Minh Đức</p>
    </div>
  );
}

function TuynPhTrachChinh4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 w-[220px]" data-name="Tuyến phụ trách chính">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#182b39] text-[13px] w-full">Phú Mỹ</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7b88] text-[12px] w-full">{`Chuyên tuyến kho & doanh nghiệp`}</p>
    </div>
  );
}

function Truck2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="truck">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="truck">
          <path d={svgPaths.p1ff81140} id="Vector" stroke="#6B7B88" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function LoiXeVaCongSut4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Loại xe và công suất">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#182b39] text-[13px]">Xe bán tải</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7b88] text-[12px]">Chuẩn 40 đơn</p>
    </div>
  );
}

function PhngTinDangKy4() {
  return (
    <div className="content-stretch flex gap-[9px] items-center overflow-clip relative shrink-0 w-[192px]" data-name="Phương tiện đăng ký">
      <Truck2 />
      <LoiXeVaCongSut4 />
    </div>
  );
}

function CircleDashed() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="circle-dashed">
      <svg className="absolute block inset-0 size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 11 11" width="11">
        <g clipPath="url(#clip0_0_75)" id="circle-dashed">
          <path d={svgPaths.pf5e4600} id="Vector" stroke="#6B7B88" strokeLinecap="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_75">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NhanDimDanh4() {
  return (
    <div className="bg-[#edf0f3] content-stretch flex gap-[5px] items-center overflow-clip px-[8px] py-[5px] relative rounded-[5px] shrink-0" data-name="Nhãn điểm danh">
      <CircleDashed />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#6b7b88] text-[12px] whitespace-nowrap">Chưa điểm danh</p>
    </div>
  );
}

function TrngThaiDimDanh4() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip relative shrink-0 w-[218px]" data-name="Trạng thái điểm danh">
      <NhanDimDanh4 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#6b7b88] text-[12px] whitespace-nowrap">Không đủ điều kiện gán đơn</p>
    </div>
  );
}

function ThanhCongSut4() {
  return <div className="bg-[#e4e9ed] h-[4px] relative rounded-[100px] shrink-0 w-[126px]" data-name="Thanh công suất" />;
}

function TiTrngHinTi4() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start overflow-clip relative shrink-0 w-[174px]" data-name="Tải trọng hiện tại">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#6b7b88] text-[0px] whitespace-nowrap">
        <span className="leading-[normal] text-[13px]">0</span>
        <span className="leading-[normal] text-[11px]">{` / 40 đơn`}</span>
      </p>
      <ThanhCongSut4 />
    </div>
  );
}

function NhnDnBKhoa() {
  return (
    <div className="h-[20px] relative shrink-0 w-[34px]" data-name="Nhận đơn bị khóa">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 34 20" width="34">
        <g id="Nháº­n ÄÆ¡n bá» khÃ³a">
          <rect fill="#E4E9ED" height="20" rx="10" width="34" />
          <circle cx="10" cy="10" fill="#F5F7F9" id="NÃºm gáº¡t" r="8" />
        </g>
      </svg>
    </div>
  );
}

function LockKeyhole1() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="lock-keyhole">
      <svg className="absolute block inset-0 size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 11 11" width="11">
        <g clipPath="url(#clip0_0_6)" id="lock-keyhole">
          <path d={svgPaths.p19795400} id="Vector" stroke="#74818C" strokeLinecap="round" strokeWidth="1.6" />
        </g>
        <defs>
          <clipPath id="clip0_0_6">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NutGtVaTrngThai4() {
  return (
    <div className="content-stretch flex gap-[9px] items-center overflow-clip relative shrink-0" data-name="Nút gạt và trạng thái">
      <NhnDnBKhoa />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#74818c] text-[12px] whitespace-nowrap">Chưa thể nhận đơn</p>
      <LockKeyhole1 />
    </div>
  );
}

function DiuKinNhnDn4() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip relative shrink-0 w-[242px]" data-name="Điều kiện nhận đơn">
      <NutGtVaTrngThai4 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#74818c] text-[12px] whitespace-nowrap">Cần điểm danh · BR-03</p>
    </div>
  );
}

function TaiXTrongCa4() {
  return (
    <div className="bg-[#fafbfc] h-[76px] relative shrink-0 w-full" data-name="Tài xế trong ca">
      <div className="content-stretch flex items-center overflow-clip px-[20px] relative rounded-[inherit] size-full">
        <MaVaHTen4 />
        <TuynPhTrachChinh4 />
        <PhngTinDangKy4 />
        <TrngThaiDimDanh4 />
        <TiTrngHinTi4 />
        <DiuKinNhnDn4 />
      </div>
      <div aria-hidden className="absolute border-[#e3e9ed] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function MaVaHTen5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 w-[242px]" data-name="Mã và họ tên">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7b88] text-[12px] tracking-[0.3px] whitespace-nowrap">DRV-06</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold min-w-full relative shrink-0 text-[#182b39] text-[13px] w-[min-content]">Đặng Thu Hà</p>
    </div>
  );
}

function TuynPhTrachChinh5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 w-[220px]" data-name="Tuyến phụ trách chính">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#182b39] text-[13px] w-full">Tân Kiểng</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7b88] text-[12px] w-full">Thông thạo khu dân cư</p>
    </div>
  );
}

function CircleX3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="circle-x">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_14)" id="circle-x">
          <path d={svgPaths.p30a06080} id="Vector" stroke="#6B7B88" strokeLinecap="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LoiXeVaCongSut5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Loại xe và công suất">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#182b39] text-[13px]">Xe máy</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b7b88] text-[12px]">Chuẩn 15 đơn</p>
    </div>
  );
}

function PhngTinDangKy5() {
  return (
    <div className="content-stretch flex gap-[9px] items-center overflow-clip relative shrink-0 w-[192px]" data-name="Phương tiện đăng ký">
      <CircleX3 />
      <LoiXeVaCongSut5 />
    </div>
  );
}

function CircleDashed1() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="circle-dashed">
      <svg className="absolute block inset-0 size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 11 11" width="11">
        <g clipPath="url(#clip0_0_75)" id="circle-dashed">
          <path d={svgPaths.pf5e4600} id="Vector" stroke="#6B7B88" strokeLinecap="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_75">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NhanDimDanh5() {
  return (
    <div className="bg-[#edf0f3] content-stretch flex gap-[5px] items-center overflow-clip px-[8px] py-[5px] relative rounded-[5px] shrink-0" data-name="Nhãn điểm danh">
      <CircleDashed1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#6b7b88] text-[12px] whitespace-nowrap">Chưa điểm danh</p>
    </div>
  );
}

function TrngThaiDimDanh5() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip relative shrink-0 w-[218px]" data-name="Trạng thái điểm danh">
      <NhanDimDanh5 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#6b7b88] text-[12px] whitespace-nowrap">Không đủ điều kiện gán đơn</p>
    </div>
  );
}

function ThanhCongSut5() {
  return <div className="bg-[#e4e9ed] h-[4px] relative rounded-[100px] shrink-0 w-[126px]" data-name="Thanh công suất" />;
}

function TiTrngHinTi5() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start overflow-clip relative shrink-0 w-[174px]" data-name="Tải trọng hiện tại">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#6b7b88] text-[0px] whitespace-nowrap">
        <span className="leading-[normal] text-[13px]">0</span>
        <span className="leading-[normal] text-[11px]">{` / 15 đơn`}</span>
      </p>
      <ThanhCongSut5 />
    </div>
  );
}

function NhnDnBKhoa1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[34px]" data-name="Nhận đơn bị khóa">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 34 20" width="34">
        <g id="Nháº­n ÄÆ¡n bá» khÃ³a">
          <rect fill="#E4E9ED" height="20" rx="10" width="34" />
          <circle cx="10" cy="10" fill="#F5F7F9" id="NÃºm gáº¡t" r="8" />
        </g>
      </svg>
    </div>
  );
}

function LockKeyhole2() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="lock-keyhole">
      <svg className="absolute block inset-0 size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 11 11" width="11">
        <g clipPath="url(#clip0_0_6)" id="lock-keyhole">
          <path d={svgPaths.p19795400} id="Vector" stroke="#74818C" strokeLinecap="round" strokeWidth="1.6" />
        </g>
        <defs>
          <clipPath id="clip0_0_6">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NutGtVaTrngThai5() {
  return (
    <div className="content-stretch flex gap-[9px] items-center overflow-clip relative shrink-0" data-name="Nút gạt và trạng thái">
      <NhnDnBKhoa1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#74818c] text-[12px] whitespace-nowrap">Chưa thể nhận đơn</p>
      <LockKeyhole2 />
    </div>
  );
}

function DiuKinNhnDn5() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip relative shrink-0 w-[242px]" data-name="Điều kiện nhận đơn">
      <NutGtVaTrngThai5 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#74818c] text-[12px] whitespace-nowrap">Cần điểm danh · BR-03</p>
    </div>
  );
}

function TaiXTrongCa5() {
  return (
    <div className="bg-[#fafbfc] h-[76px] relative shrink-0 w-full" data-name="Tài xế trong ca">
      <div className="content-stretch flex items-center overflow-clip px-[20px] relative rounded-[inherit] size-full">
        <MaVaHTen5 />
        <TuynPhTrachChinh5 />
        <PhngTinDangKy5 />
        <TrngThaiDimDanh5 />
        <TiTrngHinTi5 />
        <DiuKinNhnDn5 />
      </div>
      <div aria-hidden className="absolute border-[#e3e9ed] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CacTaiX() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Các tài xế">
      <TaiXTrongCa />
      <TaiXTrongCa1 />
      <TaiXTrongCa2 />
      <TaiXTrongCa3 />
      <TaiXTrongCa4 />
      <TaiXTrongCa5 />
    </div>
  );
}

function TomTtKhNangNhnDn() {
  return (
    <div className="content-stretch flex gap-[7px] items-center overflow-clip relative shrink-0" data-name="Tóm tắt khả năng nhận đơn">
      <div className="bg-[#087f8c] relative rounded-[100px] shrink-0 size-[5px]" data-name="Chỉ báo" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#6b7b88] text-[12px] whitespace-nowrap">3 tài xế có thể nhận đơn · 1 tạm dừng · 2 bị khóa theo BR-03</p>
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="chevron-left">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="chevron-left">
          <path d={svgPaths.p23808200} id="Vector" stroke="#BAC4CC" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function TrangHinTi() {
  return (
    <div className="bg-[#e7f4f3] content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Trang hiện tại">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">1</p>
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="chevron-right">
          <path d={svgPaths.p23079900} id="Vector" stroke="#BAC4CC" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function PhanTrang() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Phân trang">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#6b7b88] text-[12px] whitespace-nowrap">Hiển thị 1–6 trên 6 tài xế</p>
      <ChevronLeft />
      <TrangHinTi />
      <ChevronRight1 />
    </div>
  );
}

function TomTtVaPhanTrang() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-between overflow-clip px-[20px] relative shrink-0 w-full" data-name="Tóm tắt và phân trang">
      <TomTtKhNangNhnDn />
      <PhanTrang />
    </div>
  );
}

function DanhSachTaiX() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Danh sách tài xế">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <TieuDVaThaoTac />
        <TimKimVaLc />
        <NhomCtNghipV />
        <CacTaiX />
        <TomTtVaPhanTrang />
      </div>
      <div aria-hidden className="absolute border border-[#e3e9ed] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function NiDungCaGiao() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[28px] relative shrink-0 w-full" data-name="Nội dung ca giao">
      <TieuDManHinh />
      <DiuKhinCaGiao />
      <TngQuanNhanLcVaDiuKinGanDn />
      <DanhSachTaiX />
    </div>
  );
}

function KhongGianDiuPhi() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Không gian điều phối">
      <ThanhTrngThai />
      <NiDungCaGiao />
    </div>
  );
}

export default function LpCaGiaoDimDanhTaiX() {
  const [activeShift, setActiveShift] = useState<"ca1" | "ca2">("ca1");
  const [attendanceFilter, setAttendanceFilter] = useState<"all" | "checked_in" | "not_checked_in">("all");
  const [driverSearch, setDriverSearch] = useState("");
  const [checkedInDrivers, setCheckedInDrivers] = useState<Record<string, boolean>>({
    TX045: true,
    TX048: true,
    TX051: true,
    TX055: true,
  });

  const toggleDriverCheckIn = (code: string) => {
    if (code === "ALL") {
      setCheckedInDrivers({
        TX045: true,
        TX048: true,
        TX051: true,
        TX055: true,
        TX058: true,
        TX062: true,
      });
    } else {
      setCheckedInDrivers((prev) => ({ ...prev, [code]: !prev[code] }));
    }
  };

  return (
    <ShiftContext.Provider
      value={{
        activeShift,
        setActiveShift,
        attendanceFilter,
        setAttendanceFilter,
        driverSearch,
        setDriverSearch,
        checkedInDrivers,
        toggleDriverCheckIn,
      }}
    >
      <div className="bg-[#f4f6f8] content-stretch flex items-start relative size-full" data-name="Lập ca giao & điểm danh tài xế">
        <DiuHngHubShared />
        <KhongGianDiuPhi />
      </div>
    </ShiftContext.Provider>
  );
}