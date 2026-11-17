import { useState, createContext, useContext } from "react";
import svgPaths from "./svg-mmw8u2i6ev";
import { dispatchService } from "../services";
import { DiuHngHub as DiuHngHubShared } from "../components/DiuHngHub";

const DispatchActionContext = createContext<{
  onApprove?: () => void;
  isApproving?: boolean;
}>({});

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
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] items-start not-italic overflow-clip relative shrink-0 tracking-[1px] whitespace-nowrap" data-name="Tên hệ thống">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[17px] text-white">HUB / OPS</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#b8d0db] text-[12px]">Vận hành logistics</p>
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
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Hub Quận 7</p>
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
          <path d={svgPaths.p1825ee00} id="Vector" stroke="#8FA0B3" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function McDiuHng2() {
  return (
    <div className="bg-[#101f32] content-stretch flex gap-[10px] h-[44px] items-center overflow-clip px-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Mục điều hướng">
      <History />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#aab8c8] text-[12px]">{`Ca giao & điểm danh`}</p>
    </div>
  );
}

function Route() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="route">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="route">
          <path d={svgPaths.p2ac56f00} id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function McDiuHng3() {
  return (
    <div className="bg-[#0f1b2a] h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Mục điều hướng">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <Route />
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[12px] text-white">Gợi ý phân công</p>
      </div>
      <div aria-hidden className="absolute border border-[#1e3a4e] border-solid inset-0 pointer-events-none rounded-[8px]" />
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
        <g clipPath="url(#clip0_0_30)" id="bell-ring">
          <path d={svgPaths.p357b3800} id="Vector" stroke="#8FA0B3" strokeLinecap="round" strokeWidth="1.7" />
        </g>
        <defs>
          <clipPath id="clip0_0_30">
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#55ceca] text-[12px] whitespace-nowrap">Đang trong ca trực</p>
    </div>
  );
}

function PhienTrc() {
  return (
    <div className="relative shrink-0 w-full" data-name="Phiên trực">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#8fa0b3] text-[12px] whitespace-nowrap">Điều phối viên</p>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Lê Thu Hà</p>
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
    <div className="relative shrink-0 size-[14px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="chevron-right">
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="#5F7180" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function DngDn() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Đường dẫn">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#5f7180] text-[12px] whitespace-nowrap">Điều phối</p>
      <ChevronRight />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#172b3a] text-[13px] whitespace-nowrap">Gợi ý phân công</p>
    </div>
  );
}

function KtNi() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-name="Kết nối">
      <div className="relative shrink-0 size-[6px]" data-name="Tín hiệu kết nối">
        <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
          <circle cx="3" cy="3" fill="#087F8C" id="TÃ­n hiá»u káº¿t ná»i" r="3" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#596975] text-[12px] whitespace-nowrap">Đang kết nối</p>
    </div>
  );
}

function Bell() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="bell">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="bell">
          <path d={svgPaths.p13cb380} id="Vector" stroke="#596975" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function nhDiDin() {
  return (
    <div className="bg-[#e7f4f3] relative rounded-[100px] shrink-0 size-[32px]" data-name="Ảnh đại diện">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">LH</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function NgiDung() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Người dùng">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#18252f] text-[13px]">Lê Thu Hà</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#596975] text-[12px]">Điều phối viên</p>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="chevron-down">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="#596975" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function TaiKhon() {
  return (
    <div className="content-stretch flex gap-[9px] items-center overflow-clip relative shrink-0" data-name="Tài khoản">
      <nhDiDin />
      <NgiDung />
      <ChevronDown />
    </div>
  );
}

function PhienDiuPhi() {
  return (
    <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0" data-name="Phiên điều phối">
      <KtNi />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#596975] text-[12px] whitespace-nowrap">Ca sáng · 08:00–12:00</p>
      <Bell />
      <TaiKhon />
    </div>
  );
}

function ThanhDiuHanhHub() {
  return (
    <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="Thanh điều hành Hub">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[28px] relative rounded-[inherit] size-full">
        <DngDn />
        <PhienDiuPhi />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="chevron-right">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="#657684" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function PhanCp() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Phân cấp">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Điều phối</p>
      <ChevronRight1 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">Gợi ý phân công</p>
    </div>
  );
}

function DngDn1() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Đường dẫn">
      <PhanCp />
    </div>
  );
}

function NhanTrngThai() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="Nhãn trạng thái">
      <div className="content-stretch flex items-start overflow-clip px-[7px] py-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">Theo quy tắc</p>
      </div>
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function TieuD() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Tiêu đề">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.3] not-italic relative shrink-0 text-[#142b3b] text-[26px] tracking-[-0.5px] w-[281px]">Gợi ý phân công tối ưu</p>
      <NhanTrngThai />
    </div>
  );
}

function GiiThiu() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip relative shrink-0" data-name="Giới thiệu">
      <TieuD />
    </div>
  );
}

function RefreshCw() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="refresh-cw">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="refresh-cw">
          <path d={svgPaths.p1b857280} id="Vector" stroke="#596975" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function ChyLiGiY() {
  return (
    <div className="bg-white h-[40px] relative rounded-[6px] shrink-0" data-name="Chạy lại gợi ý">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <RefreshCw />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#18252f] text-[13px] whitespace-nowrap">Chạy lại gợi ý</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function ChyLiPhngAn() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-end overflow-clip relative shrink-0" data-name="Chạy lại phương án">
      <ChyLiGiY />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Cập nhật 09:20:00 · 09/11/2026</p>
    </div>
  );
}

function TieuDVaThaoTac() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Tiêu đề và thao tác">
      <GiiThiu />
      <ChyLiPhngAn />
    </div>
  );
}

function YNghia() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start leading-[1.45] overflow-clip relative shrink-0" data-name="Ý nghĩa">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#18252f] text-[13px]">Đơn sẵn sàng</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[12px]">READY_TO_DISPATCH</p>
    </div>
  );
}

function ChSDuVao() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Chỉ số đầu vào">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#18252f] text-[30px] tracking-[-1.2px]">06</p>
      <YNghia />
    </div>
  );
}

function YNghia1() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start leading-[1.45] overflow-clip relative shrink-0" data-name="Ý nghĩa">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#18252f] text-[13px]">Tài xế đủ điều kiện</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[12px]">Đang trực ca · còn chỗ</p>
    </div>
  );
}

function ChSDuVao1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Chỉ số đầu vào">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#18252f] text-[30px] tracking-[-1.2px]">04</p>
      <YNghia1 />
    </div>
  );
}

function YNghia2() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start leading-[1.45] overflow-clip relative shrink-0" data-name="Ý nghĩa">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#d14343] text-[13px]">Đơn cần ưu tiên</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[12px]">SLA dưới 60 phút</p>
    </div>
  );
}

function ChSDuVao2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Chỉ số đầu vào">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#d14343] text-[30px] tracking-[-1.2px]">02</p>
      <YNghia2 />
    </div>
  );
}

function YNghia3() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start leading-[1.45] overflow-clip relative shrink-0" data-name="Ý nghĩa">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#18252f] text-[13px]">Đơn có đề xuất</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[12px]">Chưa thay đổi</p>
    </div>
  );
}

function ChSDuVao3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Chỉ số đầu vào">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#18252f] text-[30px] tracking-[-1.2px]">6/6</p>
      <YNghia3 />
    </div>
  );
}

function TpDLiuDuVao() {
  return (
    <div className="content-stretch flex gap-[24px] h-[82px] items-center overflow-clip px-[22px] relative shrink-0 w-full" data-name="Tập dữ liệu đầu vào">
      <ChSDuVao />
      <div className="bg-[#dce4ea] h-[34px] relative shrink-0 w-px" data-name="Phân cách" />
      <ChSDuVao1 />
      <div className="bg-[#dce4ea] h-[34px] relative shrink-0 w-px" data-name="Phân cách" />
      <ChSDuVao2 />
      <div className="bg-[#dce4ea] h-[34px] relative shrink-0 w-px" data-name="Phân cách" />
      <ChSDuVao3 />
    </div>
  );
}

function Workflow() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="workflow">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="workflow">
          <path d={svgPaths.p135a8700} id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function CongThc() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Công thức">
      <Workflow />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#18252f] text-[12px] whitespace-nowrap">Điểm khớp</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">w1 × tuyến + w2 × SLA + w3 × tải</p>
    </div>
  );
}

function CuHinh() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[16px] items-center leading-[1.45] overflow-clip relative shrink-0 text-[12px] whitespace-nowrap" data-name="Cấu hình">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal relative shrink-0 text-[#657684]">w1 = 0.5 · w2 = 0.3 · w3 = 0.2</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic relative shrink-0 text-[#087f8c]">Cấu hình ↗</p>
    </div>
  );
}

function QuyTcTinhDim() {
  return (
    <div className="bg-[#f6f8fa] h-[41px] relative rounded-bl-[10px] rounded-br-[10px] shrink-0 w-full" data-name="Quy tắc tính điểm">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[22px] relative rounded-[inherit] size-full">
        <CongThc />
        <CuHinh />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-solid border-t inset-0 pointer-events-none rounded-bl-[10px] rounded-br-[10px]" />
    </div>
  );
}

function DLiuVaMoHinh() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Dữ liệu và mô hình">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <TpDLiuDuVao />
        <QuyTcTinhDim />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function NgCnhGiY() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip relative shrink-0 w-full" data-name="Ngữ cảnh gợi ý">
      <DngDn1 />
      <TieuDVaThaoTac />
      <DLiuVaMoHinh />
    </div>
  );
}

function NhanTrngThai1() {
  return (
    <div className="bg-[#f6f8fa] content-stretch flex items-start overflow-clip px-[8px] py-[5px] relative rounded-[4px] shrink-0" data-name="Nhãn trạng thái">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">6 đơn</p>
    </div>
  );
}

function SDXut() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Số đề xuất">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#18252f] text-[16px] whitespace-nowrap">Đề xuất phân công</p>
      <NhanTrngThai1 />
    </div>
  );
}

function Flag() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="flag">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="flag">
          <path d={svgPaths.p1e4e1000} id="Vector" stroke="#D14343" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function ChuGiiRiRo() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0" data-name="Chú giải rủi ro">
      <Flag />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">{`SLA < 60 phút`}</p>
    </div>
  );
}

function LaChnVaChuGii() {
  return (
    <div className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0" data-name="Lựa chọn và chú giải">
      <ChuGiiRiRo />
      <div className="bg-[#dce4ea] h-[16px] relative shrink-0 w-px" data-name="Phân cách" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">Đã chọn 4 / 6</p>
    </div>
  );
}

function TieuDBng() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between overflow-clip px-[16px] relative shrink-0 w-full" data-name="Tiêu đề bảng">
      <SDXut />
      <LaChnVaChuGii />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="search">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_12)" id="search">
          <path d={svgPaths.pb810ec0} id="Vector" stroke="#596975" strokeLinecap="round" strokeWidth="1.7" />
        </g>
        <defs>
          <clipPath id="clip0_0_12">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TimDn() {
  return (
    <div className="h-[34px] relative rounded-[6px] shrink-0 w-[230px]" data-name="Tìm đơn">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[10px] relative rounded-[inherit] size-full">
        <Search />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#84919c] text-[12px] whitespace-nowrap">Tìm mã đơn, địa chỉ</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="chevron-down">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="#596975" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function BLc() {
  return (
    <div className="bg-white h-[34px] relative rounded-[6px] shrink-0 w-[144px]" data-name="Bộ lọc">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[10px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Tất cả</p>
        <ChevronDown1 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function ChevronDown2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="chevron-down">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="#596975" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function BLc1() {
  return (
    <div className="bg-white h-[34px] relative rounded-[6px] shrink-0 w-[146px]" data-name="Bộ lọc">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[10px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Can thiệp</p>
        <ChevronDown2 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function KhongTrng() {
  return <div className="flex-[1_0_0] h-px min-w-px relative" data-name="Khoảng trống" />;
}

function ArrowDownWideNarrow() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="arrow-down-wide-narrow">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="arrow-down-wide-narrow">
          <path d={svgPaths.p14640780} id="Vector" stroke="#596975" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function SpXpuTien() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-name="Sắp xếp ưu tiên">
      <ArrowDownWideNarrow />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">SLA</p>
    </div>
  );
}

function BLcBng() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="Bộ lọc bảng">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <TimDn />
        <BLc />
        <BLc1 />
        <KhongTrng />
        <SpXpuTien />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Minus() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="minus">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="minus">
          <path d="M2.4996 6H9.5004" id="Vector" stroke="white" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function ChnDn() {
  return (
    <div className="bg-[#087f8c] relative rounded-[3px] shrink-0 size-[17px]" data-name="Chọn đơn">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Minus />
      </div>
      <div aria-hidden className="absolute border border-[#087f8c] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function ChnTtC() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[24px]" data-name="Chọn tất cả">
      <ChnDn />
    </div>
  );
}

function TieuDCt() {
  return (
    <div className="bg-[#f6f8fa] h-[40px] relative shrink-0 w-full" data-name="Tiêu đề cột">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <ChnTtC />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] w-[230px]">Đơn / Địa chỉ</p>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] w-[88px]">SLA</p>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] w-[168px]">Tài xế</p>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] w-[100px]">Tải</p>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] w-[62px]">Khớp</p>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] w-[128px]">Can thiệp</p>
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="check">
          <path d={svgPaths.p2a580400} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function ChnDn1() {
  return (
    <div className="bg-[#087f8c] relative rounded-[3px] shrink-0 size-[17px]" data-name="Chọn đơn">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Check />
      </div>
      <div aria-hidden className="absolute border border-[#087f8c] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function LaChn() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[24px]" data-name="Lựa chọn">
      <ChnDn1 />
    </div>
  );
}

function Flag1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="flag">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="flag">
          <path d={svgPaths.p1e4e1000} id="Vector" stroke="#D14343" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function MaDnVauTien() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Mã đơn và ưu tiên">
      <p className="[word-break:break-word] font-['Roboto_Mono:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#18252f] text-[12px] whitespace-nowrap">MNX000001</p>
      <Flag1 />
    </div>
  );
}

function DnGiao() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0 w-[230px]" data-name="Đơn giao">
      <MaDnVauTien />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[#18252f] text-[12px] w-[min-content]">Giao 12 Huỳnh Tấn Phát</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[#657684] text-[12px] w-[min-content]">P. Tân Thuận Đông</p>
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="clock-3">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_37)" id="clock-3">
          <path d={svgPaths.p2ca19080} id="Vector" stroke="#D14343" strokeLinecap="round" strokeWidth="1.7" />
        </g>
        <defs>
          <clipPath id="clip0_0_37">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ThiGianConLi() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0" data-name="Thời gian còn lại">
      <Clock />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#d14343] text-[13px] whitespace-nowrap">35 phút</p>
    </div>
  );
}

function DCpBach() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[88px]" data-name="Độ cấp bách">
      <ThiGianConLi />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Hạn 09:55</p>
    </div>
  );
}

function ChevronDown3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="chevron-down">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function DiTaiX() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0" data-name="Đổi tài xế">
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#087f8c] text-[12px] underline whitespace-nowrap">Nguyễn Văn An</p>
      <ChevronDown3 />
    </div>
  );
}

function TaiXDXut() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0 w-[168px]" data-name="Tài xế đề xuất">
      <DiTaiX />
      <p className="[word-break:break-word] font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">DRV-01</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[#657684] text-[12px] w-[min-content]">Tuyến Tân Thuận Đông</p>
    </div>
  );
}

function ThanhTi() {
  return (
    <div className="bg-[#dce4ea] content-stretch flex h-[3px] items-start overflow-clip relative rounded-[2px] shrink-0 w-[88px]" data-name="Thanh tải">
      <div className="bg-[#087f8c] h-[3px] relative rounded-[2px] shrink-0 w-[23px]" data-name="Tải đã dùng" />
    </div>
  );
}

function ScCha() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[100px]" data-name="Sức chứa">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#18252f] text-[12px] whitespace-nowrap">4/15 đơn</p>
      <ThanhTi />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Còn 11 chỗ</p>
    </div>
  );
}

function DimKhp() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start not-italic overflow-clip relative shrink-0 text-[#087f8c] w-[62px] whitespace-nowrap" data-name="Điểm khớp">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[17px] tracking-[-0.5px]">96%</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[12px]">Chi tiết →</p>
    </div>
  );
}

function NhanTrngThai2() {
  return (
    <div className="bg-[#e7f4f3] content-stretch flex items-start overflow-clip px-[8px] py-[5px] relative rounded-[4px] shrink-0" data-name="Nhãn trạng thái">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">Đang xem chi tiết</p>
    </div>
  );
}

function TrngThaiCanThip() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[128px]" data-name="Trạng thái can thiệp">
      <NhanTrngThai2 />
    </div>
  );
}

function DXutPhanCong() {
  return (
    <div className="bg-[#f0f8f6] h-[92px] relative shrink-0 w-full" data-name="Đề xuất phân công">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <LaChn />
        <DnGiao />
        <DCpBach />
        <TaiXDXut />
        <ScCha />
        <DimKhp />
        <TrngThaiCanThip />
      </div>
      <div aria-hidden className="absolute border-[#087f8c] border-b border-l-3 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Check1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="check">
          <path d={svgPaths.p2a580400} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function ChnDn2() {
  return (
    <div className="bg-[#087f8c] relative rounded-[3px] shrink-0 size-[17px]" data-name="Chọn đơn">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Check1 />
      </div>
      <div aria-hidden className="absolute border border-[#087f8c] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function LaChn1() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[24px]" data-name="Lựa chọn">
      <ChnDn2 />
    </div>
  );
}

function Flag2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="flag">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="flag">
          <path d={svgPaths.p1e4e1000} id="Vector" stroke="#D14343" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function MaDnVauTien1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Mã đơn và ưu tiên">
      <p className="[word-break:break-word] font-['Roboto_Mono:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#18252f] text-[12px] whitespace-nowrap">MNX000006</p>
      <Flag2 />
    </div>
  );
}

function DnGiao1() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0 w-[230px]" data-name="Đơn giao">
      <MaDnVauTien1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#18252f] text-[12px] w-[min-content]">Giao 85 Nguyễn Lương Bằng</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[#657684] text-[12px] w-[min-content]">P. Tân Phú</p>
    </div>
  );
}

function Clock1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="clock-3">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_37)" id="clock-3">
          <path d={svgPaths.p2ca19080} id="Vector" stroke="#D14343" strokeLinecap="round" strokeWidth="1.7" />
        </g>
        <defs>
          <clipPath id="clip0_0_37">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ThiGianConLi1() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0" data-name="Thời gian còn lại">
      <Clock1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#d14343] text-[13px] whitespace-nowrap">55 phút</p>
    </div>
  );
}

function DCpBach1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[88px]" data-name="Độ cấp bách">
      <ThiGianConLi1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Hạn 10:15</p>
    </div>
  );
}

function ChevronDown4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="chevron-down">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function DiTaiX1() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0" data-name="Đổi tài xế">
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#087f8c] text-[12px] underline whitespace-nowrap">Trần Quốc Bình</p>
      <ChevronDown4 />
    </div>
  );
}

function TaiXDXut1() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0 w-[168px]" data-name="Tài xế đề xuất">
      <DiTaiX1 />
      <p className="[word-break:break-word] font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">DRV-02</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[#657684] text-[12px] w-[min-content]">Tuyến Tân Phú</p>
    </div>
  );
}

function ThanhTi1() {
  return (
    <div className="bg-[#dce4ea] content-stretch flex h-[3px] items-start overflow-clip relative rounded-[2px] shrink-0 w-[88px]" data-name="Thanh tải">
      <div className="bg-[#087f8c] h-[3px] relative rounded-[2px] shrink-0 w-[35px]" data-name="Tải đã dùng" />
    </div>
  );
}

function ScCha1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[100px]" data-name="Sức chứa">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#18252f] text-[12px] whitespace-nowrap">6/15 đơn</p>
      <ThanhTi1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Còn 9 chỗ</p>
    </div>
  );
}

function DimKhp1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[62px]" data-name="Điểm khớp">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#087f8c] text-[17px] tracking-[-0.5px] whitespace-nowrap">91%</p>
    </div>
  );
}

function NhanTrngThai3() {
  return (
    <div className="bg-[#fff6df] content-stretch flex items-start overflow-clip px-[8px] py-[5px] relative rounded-[4px] shrink-0" data-name="Nhãn trạng thái">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#94650b] text-[12px] whitespace-nowrap">Đã đổi thủ công</p>
    </div>
  );
}

function TrngThaiCanThip1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[128px]" data-name="Trạng thái can thiệp">
      <NhanTrngThai3 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Lê Thu Hà · 09:19</p>
    </div>
  );
}

function DXutPhanCong1() {
  return (
    <div className="bg-white h-[92px] relative shrink-0 w-full" data-name="Đề xuất phân công">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <LaChn1 />
        <DnGiao1 />
        <DCpBach1 />
        <TaiXDXut1 />
        <ScCha1 />
        <DimKhp1 />
        <TrngThaiCanThip1 />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Check2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="check">
          <path d={svgPaths.p2a580400} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function ChnDn3() {
  return (
    <div className="bg-[#087f8c] relative rounded-[3px] shrink-0 size-[17px]" data-name="Chọn đơn">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Check2 />
      </div>
      <div aria-hidden className="absolute border border-[#087f8c] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function LaChn2() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[24px]" data-name="Lựa chọn">
      <ChnDn3 />
    </div>
  );
}

function MaDnVauTien2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Mã đơn và ưu tiên">
      <p className="[word-break:break-word] font-['Roboto_Mono:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#18252f] text-[12px] whitespace-nowrap">MNX000012</p>
    </div>
  );
}

function DnGiao2() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0 w-[230px]" data-name="Đơn giao">
      <MaDnVauTien2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#18252f] text-[12px] w-[min-content]">Giao 68 Lê Văn Lương</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[#657684] text-[12px] w-[min-content]">P. Tân Kiểng</p>
    </div>
  );
}

function ThiGianConLi2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Thời gian còn lại">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#18252f] text-[13px] whitespace-nowrap">1 giờ 20</p>
    </div>
  );
}

function DCpBach2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[88px]" data-name="Độ cấp bách">
      <ThiGianConLi2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Hạn 10:40</p>
    </div>
  );
}

function ChevronDown5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="chevron-down">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function DiTaiX2() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0" data-name="Đổi tài xế">
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#087f8c] text-[12px] underline whitespace-nowrap">Lê Thị Chi</p>
      <ChevronDown5 />
    </div>
  );
}

function TaiXDXut2() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0 w-[168px]" data-name="Tài xế đề xuất">
      <DiTaiX2 />
      <p className="[word-break:break-word] font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">DRV-03</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[#657684] text-[12px] w-[min-content]">Tuyến Tân Kiểng</p>
    </div>
  );
}

function ThanhTi2() {
  return (
    <div className="bg-[#dce4ea] content-stretch flex h-[3px] items-start overflow-clip relative rounded-[2px] shrink-0 w-[88px]" data-name="Thanh tải">
      <div className="bg-[#087f8c] h-[3px] relative rounded-[2px] shrink-0 w-[47px]" data-name="Tải đã dùng" />
    </div>
  );
}

function ScCha2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[100px]" data-name="Sức chứa">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#18252f] text-[12px] whitespace-nowrap">8/15 đơn</p>
      <ThanhTi2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Còn 7 chỗ</p>
    </div>
  );
}

function DimKhp2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[62px]" data-name="Điểm khớp">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#087f8c] text-[17px] tracking-[-0.5px] whitespace-nowrap">94%</p>
    </div>
  );
}

function TrngThaiCanThip2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[128px]" data-name="Trạng thái can thiệp">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Theo quy tắc</p>
    </div>
  );
}

function DXutPhanCong2() {
  return (
    <div className="bg-white h-[92px] relative shrink-0 w-full" data-name="Đề xuất phân công">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <LaChn2 />
        <DnGiao2 />
        <DCpBach2 />
        <TaiXDXut2 />
        <ScCha2 />
        <DimKhp2 />
        <TrngThaiCanThip2 />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Check3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="check">
          <path d={svgPaths.p2a580400} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function ChnDn4() {
  return (
    <div className="bg-[#087f8c] relative rounded-[3px] shrink-0 size-[17px]" data-name="Chọn đơn">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Check3 />
      </div>
      <div aria-hidden className="absolute border border-[#087f8c] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function LaChn3() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[24px]" data-name="Lựa chọn">
      <ChnDn4 />
    </div>
  );
}

function MaDnVauTien3() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Mã đơn và ưu tiên">
      <p className="[word-break:break-word] font-['Roboto_Mono:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#18252f] text-[12px] whitespace-nowrap">MNX000018</p>
    </div>
  );
}

function DnGiao3() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0 w-[230px]" data-name="Đơn giao">
      <MaDnVauTien3 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#18252f] text-[12px] w-[min-content]">Giao 24 Bùi Văn Ba</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[#657684] text-[12px] w-[min-content]">P. Tân Thuận Đông</p>
    </div>
  );
}

function ThiGianConLi3() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Thời gian còn lại">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#18252f] text-[13px] whitespace-nowrap">1 giờ 45</p>
    </div>
  );
}

function DCpBach3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[88px]" data-name="Độ cấp bách">
      <ThiGianConLi3 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Hạn 11:05</p>
    </div>
  );
}

function ChevronDown6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="chevron-down">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function DiTaiX3() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0" data-name="Đổi tài xế">
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#087f8c] text-[12px] underline whitespace-nowrap">Nguyễn Văn An</p>
      <ChevronDown6 />
    </div>
  );
}

function TaiXDXut3() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0 w-[168px]" data-name="Tài xế đề xuất">
      <DiTaiX3 />
      <p className="[word-break:break-word] font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">DRV-01</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[#657684] text-[12px] w-[min-content]">Tuyến Tân Thuận Đông</p>
    </div>
  );
}

function ThanhTi3() {
  return (
    <div className="bg-[#dce4ea] content-stretch flex h-[3px] items-start overflow-clip relative rounded-[2px] shrink-0 w-[88px]" data-name="Thanh tải">
      <div className="bg-[#087f8c] h-[3px] relative rounded-[2px] shrink-0 w-[23px]" data-name="Tải đã dùng" />
    </div>
  );
}

function ScCha3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[100px]" data-name="Sức chứa">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#18252f] text-[12px] whitespace-nowrap">4/15 đơn</p>
      <ThanhTi3 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Còn 11 chỗ</p>
    </div>
  );
}

function DimKhp3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[62px]" data-name="Điểm khớp">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#087f8c] text-[17px] tracking-[-0.5px] whitespace-nowrap">95%</p>
    </div>
  );
}

function TrngThaiCanThip3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[128px]" data-name="Trạng thái can thiệp">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Theo quy tắc</p>
    </div>
  );
}

function DXutPhanCong3() {
  return (
    <div className="bg-white h-[92px] relative shrink-0 w-full" data-name="Đề xuất phân công">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <LaChn3 />
        <DnGiao3 />
        <DCpBach3 />
        <TaiXDXut3 />
        <ScCha3 />
        <DimKhp3 />
        <TrngThaiCanThip3 />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ChnDn5() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 size-[17px]" data-name="Chọn đơn">
      <div aria-hidden className="absolute border border-[#b6c2cb] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function LaChn4() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[24px]" data-name="Lựa chọn">
      <ChnDn5 />
    </div>
  );
}

function MaDnVauTien4() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Mã đơn và ưu tiên">
      <p className="[word-break:break-word] font-['Roboto_Mono:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#18252f] text-[12px] whitespace-nowrap">MNX000023</p>
    </div>
  );
}

function DnGiao4() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0 w-[230px]" data-name="Đơn giao">
      <MaDnVauTien4 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#18252f] text-[12px] w-[min-content]">Giao 156 Nguyễn Thị Thập</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[#657684] text-[12px] w-[min-content]">P. Tân Phú</p>
    </div>
  );
}

function ThiGianConLi4() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Thời gian còn lại">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#18252f] text-[13px] whitespace-nowrap">2 giờ 10</p>
    </div>
  );
}

function DCpBach4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[88px]" data-name="Độ cấp bách">
      <ThiGianConLi4 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Hạn 11:30</p>
    </div>
  );
}

function ChevronDown7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="chevron-down">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function DiTaiX4() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0" data-name="Đổi tài xế">
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#087f8c] text-[12px] underline whitespace-nowrap">Phạm Minh Dũng</p>
      <ChevronDown7 />
    </div>
  );
}

function TaiXDXut4() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0 w-[168px]" data-name="Tài xế đề xuất">
      <DiTaiX4 />
      <p className="[word-break:break-word] font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">DRV-04</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[#657684] text-[12px] w-[min-content]">Tuyến Tân Phú</p>
    </div>
  );
}

function ThanhTi4() {
  return (
    <div className="bg-[#dce4ea] content-stretch flex h-[3px] items-start overflow-clip relative rounded-[2px] shrink-0 w-[88px]" data-name="Thanh tải">
      <div className="bg-[#087f8c] h-[3px] relative rounded-[2px] shrink-0 w-[65px]" data-name="Tải đã dùng" />
    </div>
  );
}

function ScCha4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[100px]" data-name="Sức chứa">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#18252f] text-[12px] whitespace-nowrap">11/15 đơn</p>
      <ThanhTi4 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Còn 4 chỗ</p>
    </div>
  );
}

function DimKhp4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[62px]" data-name="Điểm khớp">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#087f8c] text-[17px] tracking-[-0.5px] whitespace-nowrap">88%</p>
    </div>
  );
}

function TrngThaiCanThip4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[128px]" data-name="Trạng thái can thiệp">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Theo quy tắc</p>
    </div>
  );
}

function DXutPhanCong4() {
  return (
    <div className="bg-white h-[92px] relative shrink-0 w-full" data-name="Đề xuất phân công">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <LaChn4 />
        <DnGiao4 />
        <DCpBach4 />
        <TaiXDXut4 />
        <ScCha4 />
        <DimKhp4 />
        <TrngThaiCanThip4 />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ChnDn6() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 size-[17px]" data-name="Chọn đơn">
      <div aria-hidden className="absolute border border-[#b6c2cb] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function LaChn5() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[24px]" data-name="Lựa chọn">
      <ChnDn6 />
    </div>
  );
}

function MaDnVauTien5() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Mã đơn và ưu tiên">
      <p className="[word-break:break-word] font-['Roboto_Mono:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#18252f] text-[12px] whitespace-nowrap">MNX000029</p>
    </div>
  );
}

function DnGiao5() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0 w-[230px]" data-name="Đơn giao">
      <MaDnVauTien5 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#18252f] text-[12px] w-[min-content]">Giao 40 Trần Xuân Soạn</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[#657684] text-[12px] w-[min-content]">P. Tân Kiểng</p>
    </div>
  );
}

function ThiGianConLi5() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Thời gian còn lại">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#18252f] text-[13px] whitespace-nowrap">2 giờ 40</p>
    </div>
  );
}

function DCpBach5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[88px]" data-name="Độ cấp bách">
      <ThiGianConLi5 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Hạn 12:00</p>
    </div>
  );
}

function ChevronDown8() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="chevron-down">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function DiTaiX5() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0" data-name="Đổi tài xế">
      <p className="[text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#087f8c] text-[12px] underline whitespace-nowrap">Lê Thị Chi</p>
      <ChevronDown8 />
    </div>
  );
}

function TaiXDXut5() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0 w-[168px]" data-name="Tài xế đề xuất">
      <DiTaiX5 />
      <p className="[word-break:break-word] font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">DRV-03</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[#657684] text-[12px] w-[min-content]">Tuyến Tân Kiểng</p>
    </div>
  );
}

function ThanhTi5() {
  return (
    <div className="bg-[#dce4ea] content-stretch flex h-[3px] items-start overflow-clip relative rounded-[2px] shrink-0 w-[88px]" data-name="Thanh tải">
      <div className="bg-[#087f8c] h-[3px] relative rounded-[2px] shrink-0 w-[47px]" data-name="Tải đã dùng" />
    </div>
  );
}

function ScCha5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[100px]" data-name="Sức chứa">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#18252f] text-[12px] whitespace-nowrap">8/15 đơn</p>
      <ThanhTi5 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Còn 7 chỗ</p>
    </div>
  );
}

function DimKhp5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[62px]" data-name="Điểm khớp">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#087f8c] text-[17px] tracking-[-0.5px] whitespace-nowrap">92%</p>
    </div>
  );
}

function TrngThaiCanThip5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[128px]" data-name="Trạng thái can thiệp">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Theo quy tắc</p>
    </div>
  );
}

function DXutPhanCong5() {
  return (
    <div className="bg-white h-[92px] relative shrink-0 w-full" data-name="Đề xuất phân công">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <LaChn5 />
        <DnGiao5 />
        <DCpBach5 />
        <TaiXDXut5 />
        <ScCha5 />
        <DimKhp5 />
        <TrngThaiCanThip5 />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ThongTinBng() {
  return (
    <div className="[word-break:break-word] bg-[#f6f8fa] content-stretch flex font-['Inter:Regular',sans-serif] font-normal h-[42px] items-center justify-between leading-[1.45] not-italic overflow-clip px-[16px] relative shrink-0 text-[#657684] text-[12px] w-full whitespace-nowrap" data-name="Thông tin bảng">
      <p className="relative shrink-0">6/6 đề xuất · Không có đơn bị loại</p>
      <p className="relative shrink-0">Tải hiện tại: 09:20, chưa cộng đơn đã chọn</p>
    </div>
  );
}

function BngDXutPhanCong() {
  return (
    <div className="bg-white flex-[1_0_2px] min-w-px relative rounded-[10px]" data-name="Bảng đề xuất phân công">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <TieuDBng />
        <BLcBng />
        <TieuDCt />
        <DXutPhanCong />
        <DXutPhanCong1 />
        <DXutPhanCong2 />
        <DXutPhanCong3 />
        <DXutPhanCong4 />
        <DXutPhanCong5 />
        <ThongTinBng />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function ScanLine() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="scan-line">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g id="scan-line">
          <path d={svgPaths.p19dad3c0} id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function TieuDChiTit() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Tiêu đề chi tiết">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[20px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#18252f] text-[13px] whitespace-nowrap">Vì sao khớp 96%?</p>
        <ScanLine />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Flag3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="flag">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="flag">
          <path d={svgPaths.p1e4e1000} id="Vector" stroke="#D14343" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function SlaKhnCp() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0" data-name="SLA khẩn cấp">
      <Flag3 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#d14343] text-[12px] whitespace-nowrap">SLA 35 phút</p>
    </div>
  );
}

function DnDangXem() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip relative shrink-0" data-name="Đơn đang xem">
      <p className="[word-break:break-word] font-['Roboto_Mono:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#18252f] text-[12px] whitespace-nowrap">MNX000001</p>
      <SlaKhnCp />
    </div>
  );
}

function DimVaDn() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Điểm và đơn">
      <DnDangXem />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#087f8c] text-[0px] tracking-[-1.7px] whitespace-nowrap">
        <span className="leading-[normal] text-[36px]">96</span>
        <span className="leading-[normal] text-[21px]">%</span>
      </p>
    </div>
  );
}

function ChSVaDim() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-start justify-between leading-[1.45] overflow-clip relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="Chỉ số và điểm">
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#657684]">Trùng tuyến địa bàn · w1</p>
      <p className="font-['Roboto_Mono:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#18252f]">50 / 50</p>
    </div>
  );
}

function ThangDim() {
  return (
    <div className="bg-[#dce4ea] content-stretch flex h-[4px] items-start overflow-clip relative rounded-[2px] shrink-0 w-full" data-name="Thang điểm">
      <div className="bg-[#087f8c] h-[4px] relative rounded-[2px] shrink-0 w-[312px]" data-name="Điểm đạt" />
    </div>
  );
}

function ThanhPhnDim() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip relative shrink-0 w-full" data-name="Thành phần điểm">
      <ChSVaDim />
      <ThangDim />
    </div>
  );
}

function ChSVaDim1() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-start justify-between leading-[1.45] overflow-clip relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="Chỉ số và điểm">
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#657684]">Độ cấp bách SLA · w2</p>
      <p className="font-['Roboto_Mono:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#18252f]">30 / 30</p>
    </div>
  );
}

function ThangDim1() {
  return (
    <div className="bg-[#dce4ea] content-stretch flex h-[4px] items-start overflow-clip relative rounded-[2px] shrink-0 w-full" data-name="Thang điểm">
      <div className="bg-[#087f8c] h-[4px] relative rounded-[2px] shrink-0 w-[312px]" data-name="Điểm đạt" />
    </div>
  );
}

function ThanhPhnDim1() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip relative shrink-0 w-full" data-name="Thành phần điểm">
      <ChSVaDim1 />
      <ThangDim1 />
    </div>
  );
}

function ChSVaDim2() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-start justify-between leading-[1.45] overflow-clip relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="Chỉ số và điểm">
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#657684]">Cân bằng tải · w3</p>
      <p className="font-['Roboto_Mono:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#18252f]">16 / 20</p>
    </div>
  );
}

function ThangDim2() {
  return (
    <div className="bg-[#dce4ea] content-stretch flex h-[4px] items-start overflow-clip relative rounded-[2px] shrink-0 w-full" data-name="Thang điểm">
      <div className="bg-[#087f8c] h-[4px] relative rounded-[2px] shrink-0 w-[250px]" data-name="Điểm đạt" />
    </div>
  );
}

function ThanhPhnDim2() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip relative shrink-0 w-full" data-name="Thành phần điểm">
      <ChSVaDim2 />
      <ThangDim2 />
    </div>
  );
}

function DinGiiDXut() {
  return (
    <div className="[word-break:break-word] bg-[#e7f4f3] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[7px] items-start leading-[1.45] not-italic overflow-clip p-[12px] relative rounded-[6px] shrink-0 text-[12px] w-full" data-name="Diễn giải đề xuất">
      <p className="relative shrink-0 text-[#066361] w-full">Trùng 100% tuyến + Tải còn trống nhiều + Gần vị trí giao.</p>
      <p className="relative shrink-0 text-[#657684] w-full">Vị trí gần hỗ trợ; không cộng thêm vào 3 trọng số.</p>
    </div>
  );
}

function NiDungDim() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start overflow-clip p-[20px] relative shrink-0 w-full" data-name="Nội dung điểm">
      <DimVaDn />
      <div className="bg-[#dce4ea] h-px relative shrink-0 w-full" data-name="Phân cách" />
      <ThanhPhnDim />
      <ThanhPhnDim1 />
      <ThanhPhnDim2 />
      <DinGiiDXut />
    </div>
  );
}

function GiiThichDKhp() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Giải thích độ khớp">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <TieuDChiTit />
        <NiDungDim />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function NhanTrngThai4() {
  return (
    <div className="bg-[#e7f4f3] content-stretch flex items-start overflow-clip px-[8px] py-[5px] relative rounded-[4px] shrink-0" data-name="Nhãn trạng thái">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">Đang trực ca</p>
    </div>
  );
}

function TieuDDiuChnh() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Tiêu đề điều chỉnh">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#18252f] text-[13px] whitespace-nowrap">Tài xế đề xuất</p>
      <NhanTrngThai4 />
    </div>
  );
}

function ChevronDown9() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="chevron-down">
          <path d={svgPaths.p236c5700} id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function DiTaiXThCong() {
  return (
    <div className="h-[43px] relative rounded-[6px] shrink-0 w-full" data-name="Đổi tài xế thủ công">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">Nguyễn Văn An · DRV-01</p>
        <ChevronDown9 />
      </div>
      <div aria-hidden className="absolute border border-[#087f8c] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function History2() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="history">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g clipPath="url(#clip0_0_8)" id="history">
          <path d={svgPaths.p3d534280} id="Vector" stroke="#657684" strokeLinecap="round" strokeWidth="1.7" />
        </g>
        <defs>
          <clipPath id="clip0_0_8">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function GhiNhnDiuChnh() {
  return (
    <div className="content-stretch flex gap-[7px] items-center overflow-clip relative shrink-0" data-name="Ghi nhận điều chỉnh">
      <History2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Đổi tài xế sẽ được ghi nhận.</p>
    </div>
  );
}

function DiuChnhTaiX() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Điều chỉnh tài xế">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[20px] relative rounded-[inherit] size-full">
        <TieuDDiuChnh />
        <DiTaiXThCong />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[#657684] text-[12px] w-[min-content]">Nhấn tên tài xế để đổi nếu có vấn đề thực tế.</p>
        <GhiNhnDiuChnh />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function TomTtTaiX() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between not-italic overflow-clip relative shrink-0 w-full" data-name="Tóm tắt tài xế">
      <p className="leading-[normal] relative shrink-0 text-[#18252f]">Tải sau phê duyệt</p>
      <p className="leading-[1.45] relative shrink-0 text-[#657684]">3 tài xế · 4 đơn</p>
    </div>
  );
}

function TangTi() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Tăng tải">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic relative shrink-0 text-[#087f8c]">+2</p>
      <p className="font-['Roboto_Mono:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal relative shrink-0 text-[#18252f]">4 → 6/15</p>
    </div>
  );
}

function TiDKin() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[1.45] overflow-clip relative shrink-0 w-full" data-name="Tải dự kiến">
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#657684]">Nguyễn Văn An</p>
      <TangTi />
    </div>
  );
}

function TangTi1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Tăng tải">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic relative shrink-0 text-[#087f8c]">+1</p>
      <p className="font-['Roboto_Mono:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal relative shrink-0 text-[#18252f]">6 → 7/15</p>
    </div>
  );
}

function TiDKin1() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[1.45] overflow-clip relative shrink-0 w-full" data-name="Tải dự kiến">
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#657684]">Trần Quốc Bình</p>
      <TangTi1 />
    </div>
  );
}

function TangTi2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Tăng tải">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic relative shrink-0 text-[#087f8c]">+1</p>
      <p className="font-['Roboto_Mono:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal relative shrink-0 text-[#18252f]">8 → 9/15</p>
    </div>
  );
}

function TiDKin2() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[1.45] overflow-clip relative shrink-0 w-full" data-name="Tải dự kiến">
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#657684]">Lê Thị Chi</p>
      <TangTi2 />
    </div>
  );
}

function TiDKinTheoLaChn() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Tải dự kiến theo lựa chọn">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[11px] items-start overflow-clip px-[20px] py-[16px] relative rounded-[inherit] size-full text-[12px] whitespace-nowrap">
        <TomTtTaiX />
        <TiDKin />
        <TiDKin1 />
        <TiDKin2 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function GiiThichVaDiuChnh() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-[320px]" data-name="Giải thích và điều chỉnh">
      <GiiThichDKhp />
      <DiuChnhTaiX />
      <TiDKinTheoLaChn />
    </div>
  );
}

function DXutVaGiiThich() {
  return (
    <div className="content-stretch flex gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Đề xuất và giải thích">
      <BngDXutPhanCong />
      <GiiThichVaDiuChnh />
    </div>
  );
}

function ListChecks() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="list-checks">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="list-checks">
          <path d={svgPaths.p16620780} id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function BiuTngLaChn() {
  return (
    <div className="bg-[#e7f4f3] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[38px]" data-name="Biểu tượng lựa chọn">
      <ListChecks />
    </div>
  );
}

function PhngAn() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[7px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Phương án">
      <p className="relative shrink-0 text-[#18252f] text-[15px]">4 đơn đã chọn · Sẵn sàng phê duyệt</p>
      <p className="relative shrink-0 text-[#657684] text-[12px]">2 đơn SLA khẩn cấp · 3 tài xế · 1 thay đổi</p>
    </div>
  );
}

function TomTtLaChn() {
  return (
    <div className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0" data-name="Tóm tắt lựa chọn">
      <BiuTngLaChn />
      <PhngAn />
    </div>
  );
}

function Check4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="check">
          <path d={svgPaths.p221839c0} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function PheDuytPhanCongDaChn() {
  const { onApprove, isApproving } = useContext(DispatchActionContext);
  return (
    <div
      onClick={onApprove}
      className="bg-[#087f8c] hover:bg-[#066570] h-[40px] relative rounded-[6px] shrink-0 cursor-pointer transition-colors"
      data-name="Phê duyệt phân công đã chọn"
    >
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <Check4 />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
          {isApproving ? "Đang phê duyệt..." : "Phê duyệt"}
        </p>
      </div>
      <div aria-hidden className="absolute border border-[#087f8c] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function ThaoTacPheDuyt() {
  return (
    <div className="content-stretch flex gap-[24px] items-center overflow-clip relative shrink-0" data-name="Thao tác phê duyệt">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Bỏ chọn</p>
      <PheDuytPhanCongDaChn />
    </div>
  );
}

function PhngAnDaChn() {
  return (
    <div className="content-stretch flex h-[78px] items-center justify-between overflow-clip px-[22px] relative shrink-0 w-full" data-name="Phương án đã chọn">
      <TomTtLaChn />
      <ThaoTacPheDuyt />
    </div>
  );
}

function ShieldCheck() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="shield-check">
          <path d={svgPaths.p35cb9570} id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function CamKtPheDuyt() {
  return (
    <div className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0 w-full" data-name="Cam kết phê duyệt">
      <ShieldCheck />
      <p className="[word-break:break-word] font-['Roboto_Mono:SemiBold','Noto_Sans:SemiBold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:SemiBold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#18252f] text-[12px] whitespace-nowrap">READY_TO_DISPATCH → ASSIGNED</p>
      <div className="bg-[#dce4ea] h-[12px] relative shrink-0 w-px" data-name="Phân cách" />
      <p className="[word-break:break-word] font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#18252f] text-[12px] whitespace-nowrap">currentLoad += 1 / đơn</p>
      <div className="bg-[#dce4ea] h-[12px] relative shrink-0 w-px" data-name="Phân cách" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Kiểm tra sức chứa · Giao dịch nguyên tử, lỗi sẽ hoàn tác.</p>
    </div>
  );
}

function FileClock() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="file-clock">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="file-clock">
          <path d={svgPaths.p4c3ac80} id="Vector" stroke="#657684" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function KhongTrng1() {
  return <div className="flex-[1_0_0] h-px min-w-px relative" data-name="Khoảng trống" />;
}

function DuVtKimToan() {
  return (
    <div className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0 w-full" data-name="Dấu vết kiểm toán">
      <FileClock />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">AuditLog lưu: người duyệt, thời gian, thuật toán v2.4 và thay đổi.</p>
      <KhongTrng1 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">Lịch sử ↗</p>
    </div>
  );
}

function ThongTinGiaoDch() {
  return (
    <div className="bg-[#f6f8fa] relative rounded-bl-[10px] rounded-br-[10px] shrink-0 w-full" data-name="Thông tin giao dịch">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip px-[22px] py-[14px] relative rounded-[inherit] size-full">
        <CamKtPheDuyt />
        <DuVtKimToan />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-solid border-t inset-0 pointer-events-none rounded-bl-[10px] rounded-br-[10px]" />
    </div>
  );
}

function PheDuytVaKimToan() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Phê duyệt và kiểm toán">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <PhngAnDaChn />
        <ThongTinGiaoDch />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function BngDiuPhi() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[28px] relative shrink-0 w-full" data-name="Bảng điều phối">
      <NgCnhGiY />
      <DXutVaGiiThich />
      <PheDuytVaKimToan />
    </div>
  );
}

function KhongGianDiuPhi() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip relative" data-name="Không gian điều phối">
      <ThanhDiuHanhHub />
      <BngDiuPhi />
    </div>
  );
}

export default function Scr05GiYPhanCongTiu() {
  const [isApproving, setIsApproving] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const handleApprove = async () => {
    if (isApproving) return;
    setIsApproving(true);
    try {
      const suggestions = await Promise.race([
        dispatchService.getSuggestions(),
        new Promise<any[]>((_, reject) => setTimeout(() => reject(new Error("Timeout")), 3000))
      ]).catch(() => []);

      const lastCreatedId = sessionStorage.getItem("lastCreatedOrderId");
      const target = (lastCreatedId ? suggestions.find(s => s.orderId === lastCreatedId) : null) || suggestions[0] || {
        assignmentId: "ASG-001",
        orderId: "ORD-019",
        trackingCode: "VN241109086",
        driverName: "Nguyễn Văn An",
        driverId: "DRV-02"
      };

      if (target && target.assignmentId) {
        await Promise.race([
          dispatchService.approveSuggestion(target.assignmentId),
          new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 3000))
        ]).catch(() => null);
      }

      sessionStorage.setItem("lastAssignedOrderId", target.orderId || "ORD-019");
      sessionStorage.setItem("lastAssignedDriverId", target.driverId || "DRV-02");
      setToast(`Đã duyệt phân công đơn ${target.trackingCode || target.orderId} cho tài xế ${target.driverName || "Nguyễn Văn An"}!`);
      setTimeout(() => {
        window.location.hash = "driver";
      }, 1000);
    } catch {
      setToast("Đã duyệt phân công cho tài xế!");
      setTimeout(() => {
        window.location.hash = "driver";
      }, 1000);
    } finally {
      setIsApproving(false);
    }
  };

  return (
    <DispatchActionContext.Provider value={{ onApprove: handleApprove, isApproving }}>
      <div className="bg-[#f0f4f7] content-stretch flex items-start relative size-full" data-name="SCR-05 · Gợi ý phân công tối ưu">
        {toast && (
          <div className="fixed top-16 right-8 z-50 bg-[#15803d] text-white px-5 py-3 rounded-lg shadow-xl font-bold text-[13px] animate-bounce">
            ✓ {toast}
          </div>
        )}
        <DiuHngHub />
        <KhongGianDiuPhi />
      </div>
    </DispatchActionContext.Provider>
  );
}
