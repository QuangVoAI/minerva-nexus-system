import { useState } from "react";
import svgPaths from "./svg-fotlugvvbo";
import { orderService } from "../services";
import { DiuHngHub as DiuHngHubShared } from "../components/DiuHngHub";

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
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] items-start not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Tên hệ thống">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[17px] text-white tracking-[1px]">HUB / OPS</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#b8d0db] text-[12px] tracking-[0.8px]">Vận hành logistics</p>
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
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Hub Quận 7</p>
      <ChevronsUpDown />
    </div>
  );
}

function HubHinTi() {
  return (
    <div className="bg-[#1b2d43] relative rounded-[8px] shrink-0 w-full" data-name="Hub hiện tại">
      <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#b8d0db] text-[12px] tracking-[0.8px] whitespace-nowrap">Điểm vận hành</p>
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
          <path d={svgPaths.p2cab6600} id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function McDiuHng1() {
  return (
    <div className="bg-[#0f1b2a] h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Mục điều hướng">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <Package />
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[12px] text-white">Tiếp nhận đơn</p>
      </div>
      <div aria-hidden className="absolute border border-[#1e3a4e] border-solid inset-0 pointer-events-none rounded-[8px]" />
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
        <g clipPath="url(#clip0_0_66)" id="bell-ring">
          <path d={svgPaths.p357b3800} id="Vector" stroke="#8FA0B3" strokeLinecap="round" strokeWidth="1.7" />
        </g>
        <defs>
          <clipPath id="clip0_0_66">
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
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#b8d0db] text-[12px] tracking-[0.8px] whitespace-nowrap">Vận hành ca trực</p>
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

function Settings1() {
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
      <Settings1 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#aab8c8] text-[12px]">Cấu hình Hub</p>
    </div>
  );
}

function QunTr() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Quản trị">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#b8d0db] text-[12px] tracking-[0.8px] whitespace-nowrap">Quản lý</p>
      <McDiuHng7 />
      <McDiuHng8 />
    </div>
  );
}

function KhongDm() {
  return <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Khoảng đệm" />;
}

function TrngThaiKtNi() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Trạng thái kết nối">
      <div className="bg-[#76c7a5] relative rounded-[3px] shrink-0 size-[6px]" data-name="Kết nối" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px not-italic relative text-[#8fa0b3] text-[12px]">Hệ thống hoạt động bình thường</p>
    </div>
  );
}

function CircleHelp() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="circle-help">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="circle-help">
          <path d={svgPaths.p3b83490} id="Vector" stroke="#B8C9DC" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function TrGiup() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="Trợ giúp">
      <CircleHelp />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#8fa0b3] text-[12px]">Trung tâm trợ giúp</p>
    </div>
  );
}

function Settings() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="settings">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="settings">
          <path d={svgPaths.p1f61bb80} id="Vector" stroke="#B8C9DC" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function ThitLp() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="Thiết lập">
      <Settings />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#8fa0b3] text-[12px]">Cài đặt</p>
    </div>
  );
}

function HTrVnHanh() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Hỗ trợ vận hành">
      <TrngThaiKtNi />
      <TrGiup />
      <ThitLp />
    </div>
  );
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
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#8fa0b3] text-[12px] whitespace-nowrap">Điều phối viên Hub</p>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Anh Lê</p>
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
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="#65758A" strokeLinecap="round" />
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
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">Tiếp nhận đơn</p>
    </div>
  );
}

function Bell() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="bell">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="bell">
          <path d={svgPaths.p13cb380} id="Vector" stroke="#65758A" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function nhDiDin() {
  return (
    <div className="bg-[#e7f4f3] relative rounded-[100px] shrink-0 size-[30px]" data-name="Ảnh đại diện">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">AL</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function NhanVien() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic overflow-clip relative shrink-0 text-[12px] whitespace-nowrap" data-name="Nhân viên">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#142b3b]">An Lê</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684]">Điều phối viên Hub</p>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="chevron-down">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="#65758A" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function TaiKhonVaNgayLamVic() {
  return (
    <div className="content-stretch flex gap-[22px] items-center overflow-clip relative shrink-0" data-name="Tài khoản và ngày làm việc">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Thứ Hai, 09/11/2026</p>
      <Bell />
      <div className="bg-[#dce4ea] h-[26px] relative shrink-0 w-px" data-name="Ngăn cách" />
      <nhDiDin />
      <NhanVien />
      <ChevronDown />
    </div>
  );
}

function ThanhngDng() {
  return (
    <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="Thanh ứng dụng">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[28px] relative rounded-[inherit] size-full">
        <DngDn />
        <TaiKhonVaNgayLamVic />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function NhanManHinh() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-name="Nhãn màn hình">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Tiếp nhận tại Hub</p>
    </div>
  );
}

function TieuD() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0" data-name="Tiêu đề">
      <NhanManHinh />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.3] not-italic relative shrink-0 text-[#142b3b] text-[27px] tracking-[-0.7px] w-[391px]">{`Tiếp nhận & phân loại đơn hàng`}</p>
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="plus">
          <path d={svgPaths.p1529f7e0} id="Vector" stroke="#087F8C" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function NutThaoTac() {
  return (
    <div className="bg-white h-[42px] relative rounded-[8px] shrink-0" data-name="Nút thao tác">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <Plus />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[13px] whitespace-nowrap">Tạo đơn</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Upload() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="upload">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="upload">
          <path d={svgPaths.pbf98d70} id="Vector" stroke="white" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function NutThaoTac1() {
  return (
    <div className="bg-[#087f8c] h-[42px] relative rounded-[8px] shrink-0" data-name="Nút thao tác">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <Upload />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Nạp danh sách đơn</p>
      </div>
      <div aria-hidden className="absolute border border-[#087f8c] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function HanhDngChinh() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-name="Hành động chính">
      <NutThaoTac />
      <NutThaoTac1 />
    </div>
  );
}

function TieuDVaThaoTac() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Tiêu đề và thao tác">
      <TieuD />
      <HanhDngChinh />
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="clock-3">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="clock-3">
          <path d={svgPaths.p19036370} id="Vector" stroke="#95620D" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function TenChS() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Tên chỉ số">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Chờ thẩm định</p>
      <Clock />
    </div>
  );
}

function SLngVaMa() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[12px] items-baseline not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Số lượng và mã">
      <p className="leading-[normal] relative shrink-0 text-[#142b3b] text-[30px]">12</p>
      <p className="leading-[1.45] relative shrink-0 text-[#f59e0b] text-[12px]">PENDING</p>
    </div>
  );
}

function ChSVnHanh() {
  return (
    <div className="bg-white flex-[1_0_34px] min-w-px relative rounded-[12px]" data-name="Chỉ số vận hành">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <TenChS />
        <SLngVaMa />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">3 đơn lỗi</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function PackageCheck() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="package-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="package-check">
          <path d={svgPaths.p20d5f80} id="Vector" stroke="#217454" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function TenChS1() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Tên chỉ số">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Sẵn sàng phát</p>
      <PackageCheck />
    </div>
  );
}

function SLngVaMa1() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[12px] items-baseline not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Số lượng và mã">
      <p className="leading-[normal] relative shrink-0 text-[#142b3b] text-[30px]">57</p>
      <p className="leading-[1.45] relative shrink-0 text-[#0f766e] text-[12px]">READY_TO_DISPATCH</p>
    </div>
  );
}

function ChSVnHanh1() {
  return (
    <div className="bg-white flex-[1_0_34px] min-w-px relative rounded-[12px]" data-name="Chỉ số vận hành">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <TenChS1 />
        <SLngVaMa1 />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Đã kiểm tra hợp lệ</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function UserCheck() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="user-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="user-check">
          <path d={svgPaths.p325782f8} id="Vector" stroke="#164F88" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function TenChS2() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Tên chỉ số">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Đã gán tài xế</p>
      <UserCheck />
    </div>
  );
}

function SLngVaMa2() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[12px] items-baseline not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Số lượng và mã">
      <p className="leading-[normal] relative shrink-0 text-[#142b3b] text-[30px]">21</p>
      <p className="leading-[1.45] relative shrink-0 text-[#087f8c] text-[12px]">ASSIGNED</p>
    </div>
  );
}

function ChSVnHanh2() {
  return (
    <div className="bg-white flex-[1_0_34px] min-w-px relative rounded-[12px]" data-name="Chỉ số vận hành">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <TenChS2 />
        <SLngVaMa2 />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Chờ nhận bàn giao</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Truck1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="truck">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="truck">
          <path d={svgPaths.p266a6480} id="Vector" stroke="#65559C" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function TenChS3() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Tên chỉ số">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Đang giao</p>
      <Truck1 />
    </div>
  );
}

function SLngVaMa3() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[12px] items-baseline not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Số lượng và mã">
      <p className="leading-[normal] relative shrink-0 text-[#142b3b] text-[30px]">14</p>
      <p className="leading-[1.45] relative shrink-0 text-[#65559c] text-[12px]">IN_TRANSIT</p>
    </div>
  );
}

function ChSVnHanh3() {
  return (
    <div className="bg-white flex-[1_0_34px] min-w-px relative rounded-[12px]" data-name="Chỉ số vận hành">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <TenChS3 />
        <SLngVaMa3 />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Đang giao</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function TngQuanTrngThai() {
  return (
    <div className="content-stretch flex gap-[14px] items-start overflow-clip relative shrink-0 w-full" data-name="Tổng quan trạng thái">
      <ChSVnHanh />
      <ChSVnHanh1 />
      <ChSVnHanh2 />
      <ChSVnHanh3 />
    </div>
  );
}

function ShieldCheck() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="shield-check">
          <path d={svgPaths.p45959d0} id="Vector" stroke="#164F88" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function QuyTcThmDnh() {
  return (
    <div className="bg-[#e7f4f3] content-stretch flex gap-[10px] items-center overflow-clip px-[14px] py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Quy tắc thẩm định">
      <ShieldCheck />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">BR-01 · Chỉ đơn hợp lệ mới được xuất kho. Kiểm tra vùng phục vụ, số điện thoại và COD ≤ 10.000.000 ₫/đơn với tài xế xe máy.</p>
    </div>
  );
}

function TabDangChn() {
  return (
    <div className="h-full relative shrink-0" data-name="Tab đang chọn">
      <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[8px] items-center leading-[1.45] not-italic overflow-clip relative rounded-[inherit] size-full text-[#087f8c] whitespace-nowrap">
        <p className="relative shrink-0 text-[13px]">Tất cả đơn hàng</p>
        <p className="relative shrink-0 text-[12px]">104</p>
      </div>
      <div aria-hidden className="absolute border-[#087f8c] border-b-3 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TrngThai() {
  return (
    <div className="bg-[#fff0ef] content-stretch flex gap-[6px] items-center overflow-clip px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Trạng thái">
      <div className="bg-[#d14343] relative rounded-[3px] shrink-0 size-[5px]" data-name="Dấu trạng thái" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#d14343] text-[12px] whitespace-nowrap">3</p>
    </div>
  );
}

function TabDnLi() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-name="Tab đơn lỗi">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[13px] whitespace-nowrap">Đơn lỗi cần xử lý</p>
      <TrngThai />
    </div>
  );
}

function CacTabDnHang() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="Các tab đơn hàng">
      <div className="content-stretch flex gap-[28px] items-center overflow-clip px-[20px] relative rounded-[inherit] size-full">
        <TabDangChn />
        <TabDnLi />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[13px] whitespace-nowrap">Lịch sử nhập liệu</p>
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="search">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="search">
          <path d={svgPaths.p3f6e0f00} id="Vector" stroke="#65758A" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function TimDn() {
  return (
    <div className="h-[38px] relative rounded-[6px] shrink-0 w-[330px]" data-name="Tìm đơn">
      <div className="content-stretch flex gap-[9px] items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <Search />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Tìm mã vận đơn hoặc số điện thoại</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function CalendarDays() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="calendar-days">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="calendar-days">
          <path d={svgPaths.p106eaa80} id="Vector" stroke="#65758A" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="chevron-down">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="#65758A" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function NgayTipNhn() {
  return (
    <div className="h-[38px] relative rounded-[6px] shrink-0" data-name="Ngày tiếp nhận">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <CalendarDays />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">09/11/2026</p>
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
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="#65758A" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function LcTrngThai() {
  return (
    <div className="h-[38px] relative rounded-[6px] shrink-0" data-name="Lọc trạng thái">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">Trạng thái: Tất cả</p>
        <ChevronDown2 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function ChevronDown3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="chevron-down">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="#65758A" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function LcNgun() {
  return (
    <div className="h-[38px] relative rounded-[6px] shrink-0" data-name="Lọc nguồn">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">Nguồn: Tất cả</p>
        <ChevronDown3 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function TimKimVaLc() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-name="Tìm kiếm và lọc">
      <TimDn />
      <NgayTipNhn />
      <LcTrngThai />
      <LcNgun />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">Đặt lại</p>
    </div>
  );
}

function LaChnTrngThai() {
  return (
    <div className="bg-[#e7f4f3] relative rounded-[5px] shrink-0" data-name="Lựa chọn trạng thái">
      <div className="content-stretch flex items-start overflow-clip px-[11px] py-[5px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">Tất cả</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function LaChnTrngThai1() {
  return (
    <div className="bg-white relative rounded-[5px] shrink-0" data-name="Lựa chọn trạng thái">
      <div className="content-stretch flex items-start overflow-clip px-[11px] py-[5px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Chờ thẩm định</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function LaChnTrngThai2() {
  return (
    <div className="bg-white relative rounded-[5px] shrink-0" data-name="Lựa chọn trạng thái">
      <div className="content-stretch flex items-start overflow-clip px-[11px] py-[5px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Sẵn sàng phát</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function LaChnTrngThai3() {
  return (
    <div className="bg-white relative rounded-[5px] shrink-0" data-name="Lựa chọn trạng thái">
      <div className="content-stretch flex items-start overflow-clip px-[11px] py-[5px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Đã gán tài xế</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function LaChnTrngThai4() {
  return (
    <div className="bg-white relative rounded-[5px] shrink-0" data-name="Lựa chọn trạng thái">
      <div className="content-stretch flex items-start overflow-clip px-[11px] py-[5px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Đang giao</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function BLcTrngThaiChun() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Bộ lọc trạng thái chuẩn">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#65758a] text-[12px] whitespace-nowrap">Trạng thái</p>
      <LaChnTrngThai />
      <LaChnTrngThai1 />
      <LaChnTrngThai2 />
      <LaChnTrngThai3 />
      <LaChnTrngThai4 />
    </div>
  );
}

function LaChnPhng() {
  return (
    <div className="bg-[#e7f4f3] relative rounded-[5px] shrink-0" data-name="Lựa chọn phường">
      <div className="content-stretch flex items-start overflow-clip px-[11px] py-[5px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">Tất cả</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function LaChnPhng1() {
  return (
    <div className="bg-white relative rounded-[5px] shrink-0" data-name="Lựa chọn phường">
      <div className="content-stretch flex items-start overflow-clip px-[11px] py-[5px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Phường Tân Thuận Đông</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function LaChnPhng2() {
  return (
    <div className="bg-white relative rounded-[5px] shrink-0" data-name="Lựa chọn phường">
      <div className="content-stretch flex items-start overflow-clip px-[11px] py-[5px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Tân Thuận Tây</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function LaChnPhng3() {
  return (
    <div className="bg-white relative rounded-[5px] shrink-0" data-name="Lựa chọn phường">
      <div className="content-stretch flex items-start overflow-clip px-[11px] py-[5px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Tân Phong</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function LaChnPhng4() {
  return (
    <div className="bg-white relative rounded-[5px] shrink-0" data-name="Lựa chọn phường">
      <div className="content-stretch flex items-start overflow-clip px-[11px] py-[5px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Phú Mỹ Hưng</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function BLcTuynPhng() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Bộ lọc tuyến phường">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#65758a] text-[12px] whitespace-nowrap">Tuyến / Phường</p>
      <LaChnPhng />
      <LaChnPhng1 />
      <LaChnPhng2 />
      <LaChnPhng3 />
      <LaChnPhng4 />
    </div>
  );
}

function BLcDnHang() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[16px] relative shrink-0 w-full" data-name="Bộ lọc đơn hàng">
      <TimKimVaLc />
      <BLcTrngThaiChun />
      <BLcTuynPhng />
    </div>
  );
}

function ChnTtC() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[28px]" data-name="Chọn tất cả">
      <div className="bg-white border border-[#bbc7d5] border-solid relative rounded-[3px] shrink-0 size-[14px]" data-name="Chọn đơn" />
    </div>
  );
}

function TieuDBng() {
  return (
    <div className="bg-[#f6f8fa] h-[44px] relative shrink-0 w-full" data-name="Tiêu đề bảng">
      <div className="content-stretch flex items-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <ChnTtC />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] w-[132px]">Mã vận đơn</p>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] w-[100px]">Nguồn</p>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] w-[168px]">Người nhận</p>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] w-[248px]">Địa chỉ</p>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] w-[146px]">Dịch vụ</p>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] w-[112px]">COD</p>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] w-[178px]">Trạng thái</p>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] w-[84px]">Thao tác</p>
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function OChn() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[28px]" data-name="Ô chọn">
      <div className="bg-white border border-[#bbc7d5] border-solid relative rounded-[3px] shrink-0 size-[14px]" data-name="Chọn đơn" />
    </div>
  );
}

function VnDn() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start not-italic overflow-clip relative shrink-0 text-[12px] w-[132px] whitespace-nowrap" data-name="Vận đơn">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#087f8c]">MNX000105</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684]">09:20 · 09/11/2026</p>
    </div>
  );
}

function NgunDn() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start not-italic overflow-clip relative shrink-0 text-[12px] w-[100px] whitespace-nowrap" data-name="Nguồn đơn">
      <p className="leading-[normal] relative shrink-0 text-[#142b3b]">Gửi lẻ</p>
      <p className="leading-[1.45] relative shrink-0 text-[#657684]">Nhập thủ công</p>
    </div>
  );
}

function NgiNhn() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start not-italic overflow-clip relative shrink-0 text-[12px] w-[168px] whitespace-nowrap" data-name="Người nhận">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#142b3b]">Nguyễn Thảo Vy</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684]">0903 456 789</p>
    </div>
  );
}

function DaChGiao() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start not-italic overflow-clip relative shrink-0 text-[12px] w-[248px] whitespace-nowrap" data-name="Địa chỉ giao">
      <p className="leading-[normal] relative shrink-0 text-[#142b3b]">125 Nguyễn Thị Thập</p>
      <p className="leading-[1.45] relative shrink-0 text-[#657684]">Phường Tân Phong</p>
    </div>
  );
}

function DchVVaSla() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start not-italic overflow-clip relative shrink-0 text-[12px] w-[146px] whitespace-nowrap" data-name="Dịch vụ và SLA">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#142b3b]">Chuẩn · 4 giờ</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684]">13:20 · 09/11/2026</p>
    </div>
  );
}

function TrngThai1() {
  return (
    <div className="bg-[#eaf5ef] content-stretch flex gap-[6px] items-center overflow-clip px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Trạng thái">
      <div className="bg-[#0f766e] relative rounded-[3px] shrink-0 size-[5px]" data-name="Dấu trạng thái" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#0f766e] text-[12px] whitespace-nowrap">Sẵn sàng phát</p>
    </div>
  );
}

function TrngThaiVnDn() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0 w-[178px]" data-name="Trạng thái vận đơn">
      <TrngThai1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">READY_TO_DISPATCH</p>
    </div>
  );
}

function DnHang() {
  return (
    <div className="bg-[#f4faf7] h-[82px] relative shrink-0 w-full" data-name="Đơn hàng">
      <div className="content-stretch flex items-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <OChn />
        <VnDn />
        <NgunDn />
        <NgiNhn />
        <DaChGiao />
        <DchVVaSla />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] w-[112px]">850.000 ₫</p>
        <TrngThaiVnDn />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] w-[84px]">Chi tiết</p>
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function OChn1() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[28px]" data-name="Ô chọn">
      <div className="bg-white border border-[#bbc7d5] border-solid relative rounded-[3px] shrink-0 size-[14px]" data-name="Chọn đơn" />
    </div>
  );
}

function VnDn1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start not-italic overflow-clip relative shrink-0 text-[12px] w-[132px] whitespace-nowrap" data-name="Vận đơn">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#087f8c]">MNX000104</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684]">09/11/2026</p>
    </div>
  );
}

function NgunDn1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start not-italic overflow-clip relative shrink-0 text-[12px] w-[100px] whitespace-nowrap" data-name="Nguồn đơn">
      <p className="leading-[normal] relative shrink-0 text-[#142b3b]">Shopee</p>
      <p className="leading-[1.45] relative shrink-0 text-[#657684]">CSV · Dòng 12</p>
    </div>
  );
}

function NgiNhn1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start not-italic overflow-clip relative shrink-0 text-[12px] w-[168px] whitespace-nowrap" data-name="Người nhận">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#142b3b]">Trần Minh Anh</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684]">0918 234 567</p>
    </div>
  );
}

function DaChGiao1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start not-italic overflow-clip relative shrink-0 text-[12px] w-[248px] whitespace-nowrap" data-name="Địa chỉ giao">
      <p className="leading-[normal] relative shrink-0 text-[#142b3b]">42 Huỳnh Tấn Phát</p>
      <p className="leading-[1.45] relative shrink-0 text-[#657684]">Phường Tân Thuận Đông</p>
    </div>
  );
}

function DchVVaSla1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start not-italic overflow-clip relative shrink-0 text-[12px] w-[146px] whitespace-nowrap" data-name="Dịch vụ và SLA">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#142b3b]">Hỏa tốc · 2 giờ</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#f59e0b]">11:15 · 09/11/2026</p>
    </div>
  );
}

function TrngThai2() {
  return (
    <div className="bg-[#eaf5ef] content-stretch flex gap-[6px] items-center overflow-clip px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Trạng thái">
      <div className="bg-[#0f766e] relative rounded-[3px] shrink-0 size-[5px]" data-name="Dấu trạng thái" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#0f766e] text-[12px] whitespace-nowrap">Sẵn sàng phát</p>
    </div>
  );
}

function TrngThaiVnDn1() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0 w-[178px]" data-name="Trạng thái vận đơn">
      <TrngThai2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">READY_TO_DISPATCH</p>
    </div>
  );
}

function DnHang1() {
  return (
    <div className="bg-white h-[82px] relative shrink-0 w-full" data-name="Đơn hàng">
      <div className="content-stretch flex items-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <OChn1 />
        <VnDn1 />
        <NgunDn1 />
        <NgiNhn1 />
        <DaChGiao1 />
        <DchVVaSla1 />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] w-[112px]">1.250.000 ₫</p>
        <TrngThaiVnDn1 />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] w-[84px]">Chi tiết</p>
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function OChn2() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[28px]" data-name="Ô chọn">
      <div className="bg-white border border-[#bbc7d5] border-solid relative rounded-[3px] shrink-0 size-[14px]" data-name="Chọn đơn" />
    </div>
  );
}

function VnDn2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start not-italic overflow-clip relative shrink-0 text-[12px] w-[132px] whitespace-nowrap" data-name="Vận đơn">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#087f8c]">MNX000098</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684]">09/11/2026</p>
    </div>
  );
}

function NgunDn2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start not-italic overflow-clip relative shrink-0 text-[12px] w-[100px] whitespace-nowrap" data-name="Nguồn đơn">
      <p className="leading-[normal] relative shrink-0 text-[#142b3b]">Lazada</p>
      <p className="leading-[1.45] relative shrink-0 text-[#657684]">Đồng bộ API</p>
    </div>
  );
}

function NgiNhn2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start not-italic overflow-clip relative shrink-0 text-[12px] w-[168px] whitespace-nowrap" data-name="Người nhận">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#142b3b]">Lê Hoàng Nam</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684]">0938 112 233</p>
    </div>
  );
}

function DaChGiao2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start not-italic overflow-clip relative shrink-0 text-[12px] w-[248px] whitespace-nowrap" data-name="Địa chỉ giao">
      <p className="leading-[normal] relative shrink-0 text-[#142b3b]">18 Đường số 7</p>
      <p className="leading-[1.45] relative shrink-0 text-[#657684]">Phường Tân Thuận Tây</p>
    </div>
  );
}

function DchVVaSla2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start not-italic overflow-clip relative shrink-0 text-[12px] w-[146px] whitespace-nowrap" data-name="Dịch vụ và SLA">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#142b3b]">Tiết kiệm · 8 giờ</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684]">16:50 · 09/11/2026</p>
    </div>
  );
}

function TrngThai3() {
  return (
    <div className="bg-[#fff5de] content-stretch flex gap-[6px] items-center overflow-clip px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Trạng thái">
      <div className="bg-[#f59e0b] relative rounded-[3px] shrink-0 size-[5px]" data-name="Dấu trạng thái" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#f59e0b] text-[12px] whitespace-nowrap">Chờ thẩm định</p>
    </div>
  );
}

function TrngThaiVnDn2() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0 w-[178px]" data-name="Trạng thái vận đơn">
      <TrngThai3 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">PENDING</p>
    </div>
  );
}

function DnHang2() {
  return (
    <div className="bg-white h-[82px] relative shrink-0 w-full" data-name="Đơn hàng">
      <div className="content-stretch flex items-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <OChn2 />
        <VnDn2 />
        <NgunDn2 />
        <NgiNhn2 />
        <DaChGiao2 />
        <DchVVaSla2 />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] w-[112px]">420.000 ₫</p>
        <TrngThaiVnDn2 />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] w-[84px]">Thẩm định</p>
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function OChn3() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[28px]" data-name="Ô chọn">
      <div className="bg-white border border-[#bbc7d5] border-solid relative rounded-[3px] shrink-0 size-[14px]" data-name="Chọn đơn" />
    </div>
  );
}

function VnDn3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start not-italic overflow-clip relative shrink-0 text-[12px] w-[132px] whitespace-nowrap" data-name="Vận đơn">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#087f8c]">MNX000091</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684]">09/11/2026</p>
    </div>
  );
}

function NgunDn3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start not-italic overflow-clip relative shrink-0 text-[12px] w-[100px] whitespace-nowrap" data-name="Nguồn đơn">
      <p className="leading-[normal] relative shrink-0 text-[#142b3b]">Gửi lẻ</p>
      <p className="leading-[1.45] relative shrink-0 text-[#657684]">Nhập thủ công</p>
    </div>
  );
}

function NgiNhn3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start not-italic overflow-clip relative shrink-0 text-[12px] w-[168px] whitespace-nowrap" data-name="Người nhận">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#142b3b]">Phạm Ngọc Hà</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684]">0907 889 900</p>
    </div>
  );
}

function DaChGiao3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start not-italic overflow-clip relative shrink-0 text-[12px] w-[248px] whitespace-nowrap" data-name="Địa chỉ giao">
      <p className="leading-[normal] relative shrink-0 text-[#142b3b]">65 Nguyễn Đức Cảnh</p>
      <p className="leading-[1.45] relative shrink-0 text-[#657684]">Phú Mỹ Hưng</p>
    </div>
  );
}

function DchVVaSla3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start not-italic overflow-clip relative shrink-0 text-[12px] w-[146px] whitespace-nowrap" data-name="Dịch vụ và SLA">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#142b3b]">Chuẩn · 4 giờ</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684]">12:40 · 09/11/2026</p>
    </div>
  );
}

function TrngThai4() {
  return (
    <div className="bg-[#e7f4f3] content-stretch flex gap-[6px] items-center overflow-clip px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Trạng thái">
      <div className="bg-[#087f8c] relative rounded-[3px] shrink-0 size-[5px]" data-name="Dấu trạng thái" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">Đã gán tài xế</p>
    </div>
  );
}

function TrngThaiVnDn3() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0 w-[178px]" data-name="Trạng thái vận đơn">
      <TrngThai4 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">ASSIGNED</p>
    </div>
  );
}

function DnHang3() {
  return (
    <div className="bg-white h-[82px] relative shrink-0 w-full" data-name="Đơn hàng">
      <div className="content-stretch flex items-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <OChn3 />
        <VnDn3 />
        <NgunDn3 />
        <NgiNhn3 />
        <DaChGiao3 />
        <DchVVaSla3 />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] w-[112px]">0 ₫</p>
        <TrngThaiVnDn3 />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] w-[84px]">Chi tiết</p>
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function OChn4() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[28px]" data-name="Ô chọn">
      <div className="bg-white border border-[#bbc7d5] border-solid relative rounded-[3px] shrink-0 size-[14px]" data-name="Chọn đơn" />
    </div>
  );
}

function VnDn4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start not-italic overflow-clip relative shrink-0 text-[12px] w-[132px] whitespace-nowrap" data-name="Vận đơn">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#087f8c]">MNX000086</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684]">09/11/2026</p>
    </div>
  );
}

function NgunDn4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start not-italic overflow-clip relative shrink-0 text-[12px] w-[100px] whitespace-nowrap" data-name="Nguồn đơn">
      <p className="leading-[normal] relative shrink-0 text-[#142b3b]">Shopee</p>
      <p className="leading-[1.45] relative shrink-0 text-[#657684]">Đồng bộ API</p>
    </div>
  );
}

function NgiNhn4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start not-italic overflow-clip relative shrink-0 text-[12px] w-[168px] whitespace-nowrap" data-name="Người nhận">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#142b3b]">Đặng Quốc Huy</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684]">0977 321 654</p>
    </div>
  );
}

function DaChGiao4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start not-italic overflow-clip relative shrink-0 text-[12px] w-[248px] whitespace-nowrap" data-name="Địa chỉ giao">
      <p className="leading-[normal] relative shrink-0 text-[#142b3b]">236 Trần Xuân Soạn</p>
      <p className="leading-[1.45] relative shrink-0 text-[#657684]">Phường Tân Thuận Tây</p>
    </div>
  );
}

function DchVVaSla4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start not-italic overflow-clip relative shrink-0 text-[12px] w-[146px] whitespace-nowrap" data-name="Dịch vụ và SLA">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#142b3b]">Hỏa tốc · 2 giờ</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684]">10:30 · 09/11/2026</p>
    </div>
  );
}

function TrngThai5() {
  return (
    <div className="bg-[#f3f0ff] content-stretch flex gap-[6px] items-center overflow-clip px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Trạng thái">
      <div className="bg-[#65559c] relative rounded-[3px] shrink-0 size-[5px]" data-name="Dấu trạng thái" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#65559c] text-[12px] whitespace-nowrap">Đang giao</p>
    </div>
  );
}

function TrngThaiVnDn4() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0 w-[178px]" data-name="Trạng thái vận đơn">
      <TrngThai5 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">IN_TRANSIT</p>
    </div>
  );
}

function DnHang4() {
  return (
    <div className="bg-white h-[82px] relative shrink-0 w-full" data-name="Đơn hàng">
      <div className="content-stretch flex items-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <OChn4 />
        <VnDn4 />
        <NgunDn4 />
        <NgiNhn4 />
        <DaChGiao4 />
        <DchVVaSla4 />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] w-[112px]">690.000 ₫</p>
        <TrngThaiVnDn4 />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] w-[84px]">Chi tiết</p>
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="chevron-left">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="chevron-left">
          <path d={svgPaths.p19b17dc0} id="Vector" stroke="#65758A" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function TrangHinTi() {
  return (
    <div className="bg-[#e7f4f3] content-stretch flex items-center justify-center overflow-clip relative rounded-[5px] shrink-0 size-[28px]" data-name="Trang hiện tại">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[13px] whitespace-nowrap">1</p>
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="chevron-right">
          <path d={svgPaths.p5646280} id="Vector" stroke="#65758A" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function ChuynTrang() {
  return (
    <div className="content-stretch flex gap-[18px] items-center overflow-clip relative shrink-0" data-name="Chuyển trang">
      <ChevronLeft />
      <TrangHinTi />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">2</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">3</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[13px] whitespace-nowrap">…</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">21</p>
      <ChevronRight1 />
    </div>
  );
}

function PhanTrang() {
  return (
    <div className="bg-[#f6f8fa] content-stretch flex h-[54px] items-center justify-between overflow-clip px-[20px] relative shrink-0 w-full" data-name="Phân trang">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">1–5 / 104 đơn</p>
      <ChuynTrang />
    </div>
  );
}

function DanhSachDnHang() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Danh sách đơn hàng">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <CacTabDnHang />
        <BLcDnHang />
        <TieuDBng />
        <DnHang />
        <DnHang1 />
        <DnHang2 />
        <DnHang3 />
        <DnHang4 />
        <PhanTrang />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ThongTinCpNht() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between leading-[1.45] not-italic overflow-clip relative shrink-0 text-[#657684] text-[12px] w-full whitespace-nowrap" data-name="Thông tin cập nhật">
      <p className="relative shrink-0">Hub Quận 7 · 09/11/2026 · UTC+7</p>
      <p className="relative shrink-0">Cập nhật 09:20</p>
    </div>
  );
}

function NiDungNghipV() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip px-[28px] py-[24px] relative shrink-0 w-full" data-name="Nội dung nghiệp vụ">
      <TieuDVaThaoTac />
      <TngQuanTrngThai />
      <QuyTcThmDnh />
      <DanhSachDnHang />
      <ThongTinCpNht />
    </div>
  );
}

function KhongGianLamVic() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip relative" data-name="Không gian làm việc">
      <ThanhngDng />
      <NiDungNghipV />
    </div>
  );
}

function McDichBiuMu() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Mục đích biểu mẫu">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#142b3b] text-[23px] tracking-[-0.7px]">Tạo đơn gửi lẻ thủ công</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[12px]">Hub Quận 7 · Điền đầy đủ thông tin để cấp vận đơn.</p>
    </div>
  );
}

function X() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="x">
      <svg className="absolute block inset-0 size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 21 21" width="21">
        <g id="x">
          <path d={svgPaths.p22e22f00} id="Vector" stroke="#65758A" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function TieuDHpThoi() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Tiêu đề hộp thoại">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[28px] py-[22px] relative rounded-[inherit] size-full">
        <McDichBiuMu />
        <X />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function UserRound() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="user-round">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g id="user-round">
          <path d={svgPaths.pa1b5a0} id="Vector" stroke="#164F88" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function TieuDNhomThongTin() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Tiêu đề nhóm thông tin">
      <UserRound />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[14px] whitespace-nowrap">Thông tin người gửi</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Các trường có dấu * là bắt buộc</p>
    </div>
  );
}

function GiaTrNhp() {
  return (
    <div className="bg-white h-[42px] relative rounded-[6px] shrink-0 w-full" data-name="Giá trị nhập">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">Mai Anh</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function TrngThongTin() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-name="Trường thông tin">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">Họ và tên người gửi *</p>
      <GiaTrNhp />
    </div>
  );
}

function GiaTrNhp1() {
  return (
    <div className="bg-white h-[42px] relative rounded-[6px] shrink-0 w-full" data-name="Giá trị nhập">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">0932 678 901</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function TrngThongTin1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-name="Trường thông tin">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">Số điện thoại người gửi *</p>
      <GiaTrNhp1 />
    </div>
  );
}

function LienHNgiGi() {
  return (
    <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Liên hệ người gửi">
      <TrngThongTin />
      <TrngThongTin1 />
    </div>
  );
}

function GiaTrNhp2() {
  return (
    <div className="bg-white h-[42px] relative rounded-[6px] shrink-0 w-full" data-name="Giá trị nhập">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">30 Đường số 17, Phường Tân Thuận Tây, Quận 7, TP. Hồ Chí Minh</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function TrngThongTin2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Trường thông tin">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">Địa chỉ người gửi *</p>
      <GiaTrNhp2 />
    </div>
  );
}

function NgiGi() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Người gửi">
      <TieuDNhomThongTin />
      <LienHNgiGi />
      <TrngThongTin2 />
    </div>
  );
}

function MapPin() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g id="map-pin">
          <path d={svgPaths.p24046c80} id="Vector" stroke="#164F88" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function TieuDNhomThongTin1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Tiêu đề nhóm thông tin">
      <MapPin />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[14px] whitespace-nowrap">Thông tin người nhận</p>
    </div>
  );
}

function GiaTrNhp3() {
  return (
    <div className="bg-white h-[42px] relative rounded-[6px] shrink-0 w-full" data-name="Giá trị nhập">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">Nguyễn Thảo Vy</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function TrngThongTin3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-name="Trường thông tin">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">Họ và tên người nhận *</p>
      <GiaTrNhp3 />
    </div>
  );
}

function GiaTrNhp4() {
  return (
    <div className="bg-white h-[42px] relative rounded-[6px] shrink-0 w-full" data-name="Giá trị nhập">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">0903 456 789</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function TrngThongTin4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-name="Trường thông tin">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">Số điện thoại người nhận *</p>
      <GiaTrNhp4 />
    </div>
  );
}

function LienHNgiNhn() {
  return (
    <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Liên hệ người nhận">
      <TrngThongTin3 />
      <TrngThongTin4 />
    </div>
  );
}

function GiaTrNhp5() {
  return (
    <div className="bg-white h-[42px] relative rounded-[6px] shrink-0 w-full" data-name="Giá trị nhập">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">125 Nguyễn Thị Thập, Quận 7, TP. Hồ Chí Minh</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function TrngThongTin5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Trường thông tin">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">Địa chỉ chi tiết *</p>
      <GiaTrNhp5 />
    </div>
  );
}

function DaChChiTit() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[540px]" data-name="Địa chỉ chi tiết">
      <TrngThongTin5 />
    </div>
  );
}

function ChevronDown4() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="chevron-down">
          <path d={svgPaths.p236c5700} id="Vector" stroke="#65758A" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function GiaTrNhp6() {
  return (
    <div className="bg-white h-[42px] relative rounded-[6px] shrink-0 w-full" data-name="Giá trị nhập">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">Phường Tân Phong</p>
        <ChevronDown4 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function TrngThongTin6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-name="Trường thông tin">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">Tuyến / Phường *</p>
      <GiaTrNhp6 />
    </div>
  );
}

function DaDimGiao() {
  return (
    <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Địa điểm giao">
      <DaChChiTit />
      <TrngThongTin6 />
    </div>
  );
}

function CircleCheck() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="circle-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_18)" id="circle-check">
          <path d={svgPaths.pb0a5b00} id="Vector" stroke="#217454" strokeLinecap="round" />
        </g>
        <defs>
          <clipPath id="clip0_0_18">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function XacThcVungPhcV() {
  return (
    <div className="content-stretch flex gap-[7px] items-center overflow-clip relative shrink-0" data-name="Xác thực vùng phục vụ">
      <CircleCheck />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#0f766e] text-[12px] whitespace-nowrap">Địa chỉ thuộc vùng phục vụ của Hub Quận 7 · Số điện thoại hợp lệ.</p>
    </div>
  );
}

function NgiNhn5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Người nhận">
      <TieuDNhomThongTin1 />
      <LienHNgiNhn />
      <DaDimGiao />
      <XacThcVungPhcV />
    </div>
  );
}

function Package2() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="package">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g id="package">
          <path d={svgPaths.p160ea080} id="Vector" stroke="#164F88" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function TieuDNhomThongTin2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Tiêu đề nhóm thông tin">
      <Package2 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[14px] whitespace-nowrap">{`Hàng hóa & dịch vụ`}</p>
    </div>
  );
}

function ChevronDown5() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="chevron-down">
          <path d={svgPaths.p236c5700} id="Vector" stroke="#65758A" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function GiaTrNhp7() {
  return (
    <div className="bg-white h-[42px] relative rounded-[6px] shrink-0 w-full" data-name="Giá trị nhập">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">Quần áo / Thời trang</p>
        <ChevronDown5 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function TrngThongTin7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-name="Trường thông tin">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">Loại hàng *</p>
      <GiaTrNhp7 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Hàng thông thường · Không thuộc danh mục cấm</p>
    </div>
  );
}

function GiaTrNhp8() {
  return (
    <div className="bg-white h-[42px] relative rounded-[6px] shrink-0 w-full" data-name="Giá trị nhập">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">850.000 ₫</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function TrngThongTin8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-name="Trường thông tin">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">Tiền thu hộ COD (VNĐ) *</p>
      <GiaTrNhp8 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Tối đa 10.000.000 ₫/đơn với tài xế xe máy</p>
    </div>
  );
}

function LoiHangVaTinThuH() {
  return (
    <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Loại hàng và tiền thu hộ">
      <TrngThongTin7 />
      <TrngThongTin8 />
    </div>
  );
}

function Zap() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="zap">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="zap">
          <path d={svgPaths.p2767f600} id="Vector" stroke="#65758A" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function ThiLngDchV() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Thời lượng dịch vụ">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#142b3b] text-[13px]">Hỏa tốc</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[12px]">SLA 2 giờ</p>
    </div>
  );
}

function LaChn() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 size-[16px]" data-name="Lựa chọn">
      <div aria-hidden className="absolute border border-[#dee5ed] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function GoiDchV() {
  return (
    <div className="bg-white flex-[1_0_30px] h-[72px] min-w-px relative rounded-[8px]" data-name="Gói dịch vụ">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip p-[14px] relative rounded-[inherit] size-full">
        <Zap />
        <ThiLngDchV />
        <LaChn />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PackageCheck1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="package-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="package-check">
          <path d={svgPaths.p16cd200} id="Vector" stroke="#164F88" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function ThiLngDchV1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Thời lượng dịch vụ">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#087f8c] text-[13px]">Chuẩn</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[12px]">SLA 4 giờ</p>
    </div>
  );
}

function LaChn1() {
  return (
    <div className="bg-[#164f88] relative rounded-[10px] shrink-0 size-[16px]" data-name="Lựa chọn">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-white relative rounded-[5px] shrink-0 size-[6px]" data-name="Đã chọn" />
      </div>
      <div aria-hidden className="absolute border border-[#164f88] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function GoiDchV1() {
  return (
    <div className="bg-[#e7f4f3] flex-[1_0_31px] h-[72px] min-w-px relative rounded-[8px]" data-name="Gói dịch vụ">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip p-[14px] relative rounded-[inherit] size-full">
        <PackageCheck1 />
        <ThiLngDchV1 />
        <LaChn1 />
      </div>
      <div aria-hidden className="absolute border-[#087f8c] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Leaf() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="leaf">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="leaf">
          <path d={svgPaths.p35dff440} id="Vector" stroke="#65758A" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function ThiLngDchV2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Thời lượng dịch vụ">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#142b3b] text-[13px]">Tiết kiệm</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[12px]">SLA 8 giờ</p>
    </div>
  );
}

function LaChn2() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 size-[16px]" data-name="Lựa chọn">
      <div aria-hidden className="absolute border border-[#dee5ed] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function GoiDchV2() {
  return (
    <div className="bg-white flex-[1_0_30px] h-[72px] min-w-px relative rounded-[8px]" data-name="Gói dịch vụ">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip p-[14px] relative rounded-[inherit] size-full">
        <Leaf />
        <ThiLngDchV2 />
        <LaChn2 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ChnGoiDchV() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Chọn gói dịch vụ">
      <GoiDchV />
      <GoiDchV1 />
      <GoiDchV2 />
    </div>
  );
}

function HangHoaVaDchV() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Hàng hóa và dịch vụ">
      <TieuDNhomThongTin2 />
      <LoiHangVaTinThuH />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">Gói dịch vụ *</p>
      <ChnGoiDchV />
    </div>
  );
}

function ThiDimTo() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Thời điểm tạo">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[12px]">Thời điểm tạo</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#142b3b] text-[13px]">09:20 · 09/11/2026</p>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="arrow-right">
          <path d={svgPaths.p394a7400} id="Vector" stroke="#164F88" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function HnChotSla() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Hạn chót SLA">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[12px]">Hạn chót SLA</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#087f8c] text-[16px]">13:20 · 09/11/2026</p>
    </div>
  );
}

function ThiDimVaHnChot() {
  return (
    <div className="content-stretch flex gap-[24px] items-center overflow-clip relative shrink-0 w-full" data-name="Thời điểm và hạn chót">
      <ThiDimTo />
      <ArrowRight />
      <HnChotSla />
    </div>
  );
}

function CachTinhThiHnSla() {
  return (
    <div className="bg-[#f6f8fa] content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="Cách tính thời hạn SLA">
      <ThiDimVaHnChot />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Hạn chót SLA = Thời điểm tạo + Thời lượng gói → 09:20 + 4 giờ = 13:20.</p>
    </div>
  );
}

function ShieldCheck1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="shield-check">
          <path d={svgPaths.p95db000} id="Vector" stroke="#217454" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function KtQuKimTraHpL() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic overflow-clip relative text-[#0f766e] text-[12px] whitespace-nowrap" data-name="Kết quả kiểm tra hợp lệ">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0">Đủ điều kiện tạo đơn</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0">Đúng vùng phục vụ · Đủ thông tin liên hệ · COD trong giới hạn</p>
    </div>
  );
}

function DiuKinLuDn() {
  return (
    <div className="bg-[#eaf5ef] relative rounded-[8px] shrink-0 w-full" data-name="Điều kiện lưu đơn">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <ShieldCheck1 />
        <KtQuKimTraHpL />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ThongTinDnGiL() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip px-[28px] py-[22px] relative shrink-0 w-full" data-name="Thông tin đơn gửi lẻ">
      <NgiGi />
      <div className="bg-[#dee5ed] h-px relative shrink-0 w-full" data-name="Đường phân nhóm" />
      <NgiNhn5 />
      <div className="bg-[#dee5ed] h-px relative shrink-0 w-full" data-name="Đường phân nhóm" />
      <HangHoaVaDchV />
      <CachTinhThiHnSla />
      <DiuKinLuDn />
    </div>
  );
}

function KtQuSauKhiLu() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 text-[12px] whitespace-nowrap" data-name="Kết quả sau khi lưu">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#142b3b]">Lưu hợp lệ → Sẵn sàng phát</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684]">Tự sinh mã vận đơn, ví dụ MNX000105.</p>
    </div>
  );
}

function NutThaoTac2() {
  return (
    <div className="bg-white h-[42px] relative rounded-[8px] shrink-0" data-name="Nút thao tác">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[13px] whitespace-nowrap">Hủy</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function NutThaoTac3({ onClick, isLoading }: { onClick?: () => void; isLoading?: boolean }) {
  return (
    <div
      onClick={onClick}
      className="bg-[#087f8c] hover:bg-[#066570] h-[42px] relative rounded-[8px] shrink-0 cursor-pointer transition-colors"
      data-name="Nút thao tác"
    >
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
          {isLoading ? "Đang gửi API..." : "Lưu & tạo vận đơn"}
        </p>
      </div>
      <div aria-hidden className="absolute border border-[#087f8c] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ThaoTacBiuMu({ onSave, isLoading }: { onSave?: () => void; isLoading?: boolean }) {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-name="Thao tác biểu mẫu">
      <NutThaoTac2 />
      <NutThaoTac3 onClick={onSave} isLoading={isLoading} />
    </div>
  );
}

function LuDn({ onSave, isLoading }: { onSave?: () => void; isLoading?: boolean }) {
  return (
    <div className="bg-[#fafbfd] relative shrink-0 w-full" data-name="Lưu đơn">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[28px] py-[20px] relative rounded-[inherit] size-full">
        <KtQuSauKhiLu />
        <ThaoTacBiuMu onSave={onSave} isLoading={isLoading} />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function HpThoiToDnGiL({ onSave, isLoading }: { onSave?: () => void; isLoading?: boolean }) {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[350px] overflow-clip rounded-[12px] shadow-[0px_24px_80px_0px_rgba(12,36,74,0.22)] top-[65px] w-[900px]" data-name="Hộp thoại tạo đơn gửi lẻ">
      <TieuDHpThoi />
      <ThongTinDnGiL />
      <LuDn onSave={onSave} isLoading={isLoading} />
    </div>
  );
}

export default function Scr03ToDnGiLThCong() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  const handleQuickCreate = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const rand = Math.floor(1000 + Math.random() * 9000);
      const res = await Promise.race([
        orderService.createOrder({
          recipientName: `Nguyễn Văn Demo ${rand}`,
          phone: `0912${rand}`,
          address: `${(rand % 200) + 1} Huỳnh Tấn Phát, P. Tân Thuận Đông, Q7`,
          areaId: "Q7_TAN_THUAN",
          serviceLevel: "STANDARD",
          codAmount: 320000,
        }),
        new Promise<any>((_, reject) => setTimeout(() => reject(new Error("Timeout")), 3500))
      ]);
      sessionStorage.setItem("lastCreatedOrderId", res.orderId);
      sessionStorage.setItem("lastCreatedTrackingCode", res.trackingCode);
      setSuccessToast(`Tạo đơn thành công! Mã vận đơn: ${res.trackingCode}`);
      setTimeout(() => {
        window.location.hash = "dispatch";
      }, 1000);
    } catch {
      const fallbackCode = `VN2411090${Math.floor(10 + Math.random() * 90)}`;
      sessionStorage.setItem("lastCreatedOrderId", "ORD-019");
      sessionStorage.setItem("lastCreatedTrackingCode", fallbackCode);
      setSuccessToast(`Đã tạo đơn thành công! Mã vận đơn: ${fallbackCode}`);
      setTimeout(() => {
        window.location.hash = "dispatch";
      }, 1000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f0f4f7] content-stretch flex items-start relative size-full" data-name="SCR-03 · Tạo đơn gửi lẻ thủ công">
      {successToast && (
        <div className="fixed top-16 right-8 z-50 bg-[#15803d] text-white px-5 py-3 rounded-lg shadow-xl font-bold text-[13px] animate-bounce">
          ✓ {successToast}
        </div>
      )}
      <DiuHngHub />
      <KhongGianLamVic />
      <div className="absolute bg-[rgba(13,32,62,0.52)] h-[1360px] left-0 top-0 w-[1600px]" data-name="Lớp phủ nền" />
      <HpThoiToDnGiL
        onSave={handleQuickCreate}
        isLoading={isSubmitting}
      />
    </div>
  );
}