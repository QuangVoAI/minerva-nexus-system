import svgPaths from "./svg-2auud66ghj";
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
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#b8d0db] text-[12px] tracking-[1.2px]">VẬN HÀNH LOGISTICS</p>
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
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#b8d0db] text-[12px] tracking-[1px] whitespace-nowrap">ĐIỂM VẬN HÀNH</p>
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
          <path d={svgPaths.p2cab6600} id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function McDiuHng4() {
  return (
    <div className="bg-[#0f1b2a] h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Mục điều hướng">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <Package1 />
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[12px] text-white">Hồ sơ đơn hàng</p>
      </div>
      <div aria-hidden className="absolute border border-[#1e3a4e] border-solid inset-0 pointer-events-none rounded-[8px]" />
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
        <g clipPath="url(#clip0_0_31)" id="bell-ring">
          <path d={svgPaths.p357b3800} id="Vector" stroke="#8FA0B3" strokeLinecap="round" strokeWidth="1.7" />
        </g>
        <defs>
          <clipPath id="clip0_0_31">
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
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#b8d0db] text-[12px] tracking-[1px] whitespace-nowrap">VẬN HÀNH CA TRỰC</p>
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
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#b8d0db] text-[12px] tracking-[1px] whitespace-nowrap">QUẢN LÝ</p>
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#55ceca] text-[12px] whitespace-nowrap">Hệ thống hoạt động ổn định</p>
    </div>
  );
}

function PhienTrc() {
  return (
    <div className="relative shrink-0 w-full" data-name="Phiên trực">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#8fa0b3] text-[12px] whitespace-nowrap">Nhân viên CSKH</p>
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#5f7180] text-[12px] whitespace-nowrap">Đơn hàng</p>
      <ChevronRight />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#172b3a] text-[12px] whitespace-nowrap">Hồ sơ chi tiết</p>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="search">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="search">
          <path d={svgPaths.p219b4180} id="Vector" stroke="#5F7180" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function TimKim() {
  return (
    <div className="bg-[#f8fafb] h-[34px] relative rounded-[6px] shrink-0 w-[255px]" data-name="Tìm kiếm">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[11px] relative rounded-[inherit] size-full">
        <Search />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#84929d] text-[12px] whitespace-nowrap">Tìm mã vận đơn...</p>
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#84929d] text-[12px] whitespace-nowrap">⌘ K</p>
      </div>
      <div aria-hidden className="absolute border border-[#dfe5ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Bell() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="bell">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="bell">
          <path d={svgPaths.p13cb380} id="Vector" stroke="#5F7180" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function nhDiDin() {
  return (
    <div className="bg-[#e8f5f5] content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] shrink-0 size-[32px]" data-name="Ảnh đại diện">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087e8b] text-[12px] whitespace-nowrap">ML</p>
    </div>
  );
}

function NhanVien() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Nhân viên">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#172b3a] text-[13px]">Mai Linh</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5f7180] text-[12px]">CSKH</p>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="chevron-down">
          <path d={svgPaths.pa029e20} id="Vector" stroke="#5F7180" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function TaiKhon() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Tài khoản">
      <nhDiDin />
      <NhanVien />
      <ChevronDown />
    </div>
  );
}

function CongCVaTaiKhon() {
  return (
    <div className="content-stretch flex gap-[22px] items-center overflow-clip relative shrink-0" data-name="Công cụ và tài khoản">
      <TimKim />
      <Bell />
      <div className="bg-[#dfe5ea] h-[26px] relative shrink-0 w-px" data-name="Phân chia tài khoản" />
      <TaiKhon />
    </div>
  );
}

function ThanhCongC() {
  return (
    <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="Thanh công cụ">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[28px] relative rounded-[inherit] size-full">
        <DngDn />
        <CongCVaTaiKhon />
      </div>
      <div aria-hidden className="absolute border-[#dfe5ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TenHS() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip relative shrink-0" data-name="Tên hồ sơ">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.3] not-italic relative shrink-0 text-[#142b3b] text-[26px] tracking-[-0.5px] w-[287px]">Hồ sơ chi tiết đơn hàng</p>
    </div>
  );
}

function LockKeyhole() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="lock-keyhole">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="lock-keyhole">
          <path d={svgPaths.p2d1e0d00} id="Vector" stroke="#5F7180" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function ChDc() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip px-[10px] relative shrink-0" data-name="Chỉ đọc">
      <LockKeyhole />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#5f7180] text-[12px] whitespace-nowrap">Chỉ đọc</p>
    </div>
  );
}

function Download() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="download">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="download">
          <path d={svgPaths.pdd92f40} id="Vector" stroke="#5F7180" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function XutHS() {
  return (
    <div className="bg-white h-[36px] relative rounded-[6px] shrink-0" data-name="Xuất hồ sơ">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[14px] relative rounded-[inherit] size-full">
        <Download />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#172b3a] text-[12px] whitespace-nowrap">Xuất hồ sơ</p>
      </div>
      <div aria-hidden className="absolute border border-[#dfe5ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function TacVHS() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Tác vụ hồ sơ">
      <ChDc />
      <XutHS />
    </div>
  );
}

function TieuDHS() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Tiêu đề hồ sơ">
      <TenHS />
      <TacVHS />
    </div>
  );
}

function Package2() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="package">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="package">
          <path d={svgPaths.p5adfd80} id="Vector" stroke="#087E8B" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function BiuTngKinHang() {
  return (
    <div className="bg-[#e8f5f5] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[42px]" data-name="Biểu tượng kiện hàng">
      <Package2 />
    </div>
  );
}

function Copy() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="copy">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_35)" id="copy">
          <path d={svgPaths.p2923eb40} id="Vector" stroke="#5F7180" strokeLinecap="round" />
        </g>
        <defs>
          <clipPath id="clip0_0_35">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MaDnhDanh() {
  return (
    <div className="content-stretch flex gap-[9px] items-center overflow-clip relative shrink-0" data-name="Mã định danh">
      <p className="[word-break:break-word] font-['Roboto_Mono:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#142b3b] text-[18px] whitespace-nowrap">VF261109-00842</p>
      <Copy />
    </div>
  );
}

function MaVnDn() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Mã vận đơn">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#5f7180] text-[12px] whitespace-nowrap">MÃ VẬN ĐƠN</p>
      <MaDnhDanh />
    </div>
  );
}

function NhanTrngThai() {
  return (
    <div className="bg-[#e8f5f5] content-stretch flex items-center overflow-clip px-[9px] py-[5px] relative rounded-[5px] shrink-0" data-name="Nhãn trạng thái">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087e8b] text-[12px] whitespace-nowrap">Đang vận chuyển</p>
    </div>
  );
}

function MaVaTrngThai() {
  return (
    <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-name="Mã và trạng thái">
      <BiuTngKinHang />
      <MaVnDn />
      <NhanTrngThai />
    </div>
  );
}

function CpNhtGnNht() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-normal gap-[5px] items-end overflow-clip relative shrink-0 text-[12px] whitespace-nowrap" data-name="Cập nhật gần nhất">
      <p className="font-['Inter:Regular',sans-serif] leading-[1.45] not-italic relative shrink-0 text-[#5f7180]">Cập nhật</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#142b3b]">09/11/2026 · 08:40:02</p>
    </div>
  );
}

function DnhDanhVnDn() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip px-[24px] py-[20px] relative shrink-0 w-full" data-name="Định danh vận đơn">
      <MaVaTrngThai />
      <CpNhtGnNht />
    </div>
  );
}

function TrngThongTin() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-name="Trường thông tin">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#5f7180] text-[12px] w-full">Ngày tạo</p>
      <p className="font-['Roboto_Mono:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#142b3b] text-[13px] w-full">09/11/2026 · 08:00:15</p>
    </div>
  );
}

function TrngThongTin1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px not-italic overflow-clip relative" data-name="Trường thông tin">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5f7180] text-[12px] w-full">Dịch vụ</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.45] relative shrink-0 text-[#142b3b] text-[13px] w-full">Giao tiêu chuẩn · Nội thành</p>
    </div>
  );
}

function TrngThongTin2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px not-italic overflow-clip relative" data-name="Trường thông tin">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5f7180] text-[12px] w-full">Hàng hóa</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.45] relative shrink-0 text-[#142b3b] text-[13px] w-full">Áo thun cotton · 1 kiện · 0,8 kg</p>
    </div>
  );
}

function TrngThongTin3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px not-italic overflow-clip relative" data-name="Trường thông tin">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5f7180] text-[12px] w-full">Nguồn tạo</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.45] relative shrink-0 text-[#142b3b] text-[13px] w-full">File tích hợp · SORA-10482</p>
    </div>
  );
}

function ThongTinDchV() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[24px] items-start overflow-clip px-[24px] py-[18px] relative shrink-0 w-full" data-name="Thông tin dịch vụ">
      <TrngThongTin />
      <TrngThongTin1 />
      <TrngThongTin2 />
      <TrngThongTin3 />
    </div>
  );
}

function TenVaDinThoi() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="Tên và điện thoại">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[14px]">Sora Studio · Lê Thu Hà</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#087e8b] text-[12px]">0903 456 218</p>
    </div>
  );
}

function ThongTinLienH() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative" data-name="Thông tin liên hệ">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#5f7180] text-[12px] tracking-[0.6px] whitespace-nowrap">Người gửi</p>
      <TenVaDinThoi />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#5f7180] text-[12px] w-[min-content]">28 Nguyễn Trãi, Phường Bến Thành, TP. Hồ Chí Minh</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[#84929d] text-[12px] w-[min-content]">KH-00218 · sora.ops@example.com</p>
    </div>
  );
}

function TenVaDinThoi1() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="Tên và điện thoại">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[14px]">Phạm Minh Anh</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#087e8b] text-[12px]">0918 672 345</p>
    </div>
  );
}

function ThongTinLienH1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative" data-name="Thông tin liên hệ">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#5f7180] text-[12px] tracking-[0.6px] whitespace-nowrap">Người nhận</p>
      <TenVaDinThoi1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#5f7180] text-[12px] w-[min-content]">112 Võ Văn Tần, Phường Xuân Hòa, TP. Hồ Chí Minh</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[#84929d] text-[12px] w-[min-content]">Ghi chú: Gọi trước 10 phút.</p>
    </div>
  );
}

function NgiGiVaNgiNhn() {
  return (
    <div className="content-stretch flex gap-[28px] items-start overflow-clip p-[24px] relative shrink-0 w-full" data-name="Người gửi và người nhận">
      <ThongTinLienH />
      <div className="bg-[#dfe5ea] h-[98px] relative shrink-0 w-px" data-name="Phân chia liên hệ" />
      <ThongTinLienH1 />
    </div>
  );
}

function DLiuGcVnDn() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Dữ liệu gốc vận đơn">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <DnhDanhVnDn />
        <div className="bg-[#dfe5ea] h-px relative shrink-0 w-full" data-name="Đường phân chia" />
        <ThongTinDchV />
        <div className="bg-[#dfe5ea] h-px relative shrink-0 w-full" data-name="Đường phân chia" />
        <NgiGiVaNgiNhn />
      </div>
      <div aria-hidden className="absolute border border-[#dfe5ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function ThongTinVnDn() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start overflow-clip relative shrink-0 w-full" data-name="Thông tin vận đơn">
      <TieuDHS />
      <DLiuGcVnDn />
    </div>
  );
}

function History2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="history">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="history">
          <path d={svgPaths.p1825ee00} id="Vector" stroke="#087E8B" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function TenKhi() {
  return (
    <div className="content-stretch flex gap-[9px] items-center overflow-clip relative shrink-0" data-name="Tên khối">
      <History2 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[16px] whitespace-nowrap">Nhật ký vận hành</p>
    </div>
  );
}

function TieuDKhi() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Tiêu đề khối">
      <TenKhi />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#5f7180] text-[12px] whitespace-nowrap">3 sự kiện</p>
    </div>
  );
}

function ShieldCheck() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="shield-check">
          <path d={svgPaths.p35cb9570} id="Vector" stroke="#087E8B" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function ThongBaoBtBin() {
  return (
    <div className="bg-[#f8fafb] content-stretch flex gap-[9px] items-center overflow-clip px-[12px] py-[10px] relative rounded-[5px] shrink-0 w-full" data-name="Thông báo bất biến">
      <ShieldCheck />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px not-italic relative text-[#5f7180] text-[12px]">Nhật ký bất biến · Chỉ đọc.</p>
    </div>
  );
}

function DuNhtKy() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start overflow-clip p-[24px] relative shrink-0 w-full" data-name="Đầu nhật ký">
      <TieuDKhi />
      <ThongBaoBtBin />
    </div>
  );
}

function NgaySKin() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between not-italic overflow-clip relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="Ngày sự kiện">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#172b3a]">Thứ Hai, 09/11/2026</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#84929d]">Cũ → Mới</p>
    </div>
  );
}

function NhanCacTrng() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[32px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 text-[#84929d] text-[12px] tracking-[0.5px] w-full" data-name="Nhãn các trường">
      <p className="relative shrink-0 w-[90px]">THỜI GIAN</p>
      <p className="relative shrink-0 whitespace-nowrap">TRẠNG THÁI / TÁC NHÂN / GHI CHÚ</p>
    </div>
  );
}

function ThiGian() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[1.45] overflow-clip pt-[5px] relative shrink-0 w-[90px] whitespace-nowrap" data-name="Thời gian">
      <p className="font-['Roboto_Mono:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#142b3b] text-[14px]">08:00:15</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#84929d] text-[12px]">GMT+7</p>
    </div>
  );
}

function TrcLchS() {
  return (
    <div className="h-[141px] relative shrink-0 w-[16px]" data-name="Trục lịch sử">
      <svg className="absolute block inset-0 size-full" fill="none" height="141" preserveAspectRatio="none" viewBox="0 0 16 141" width="16">
        <g clipPath="url(#clip0_0_28)" id="Trá»¥c lá»ch sá»­">
          <rect fill="#DFE5EA" height="133" id="ÄÆ°á»ng ná»i sá»± kiá»n" width="2" x="7" y="15" />
          <circle cx="8" cy="14" fill="white" id="Má»c ghi nháº­n" r="5" stroke="#9AAEB9" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_28">
            <rect fill="white" height="141" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="arrow-right">
          <path d={svgPaths.p22cbce80} id="Vector" stroke="#84929D" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function NhanTrngThai1() {
  return (
    <div className="bg-[#f8fafb] content-stretch flex items-center overflow-clip px-[9px] py-[5px] relative rounded-[5px] shrink-0" data-name="Nhãn trạng thái">
      <p className="[word-break:break-word] font-['Roboto_Mono:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#5f7180] text-[12px] whitespace-nowrap">READY_TO_DISPATCH</p>
    </div>
  );
}

function TrngThaiCuVaMi() {
  return (
    <div className="content-stretch flex gap-[9px] items-center overflow-clip relative shrink-0 w-full" data-name="Trạng thái cũ và mới">
      <p className="[word-break:break-word] font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#5f7180] text-[12px] whitespace-nowrap">PENDING</p>
      <ArrowRight />
      <NhanTrngThai1 />
    </div>
  );
}

function Cpu() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="cpu">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g clipPath="url(#clip0_0_61)" id="cpu">
          <path d={svgPaths.pb3fadc0} id="Vector" stroke="#5F7180" strokeLinecap="round" />
        </g>
        <defs>
          <clipPath id="clip0_0_61">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TacNhanThcHin() {
  return (
    <div className="content-stretch flex gap-[7px] items-center overflow-clip relative shrink-0" data-name="Tác nhân thực hiện">
      <Cpu />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">Bởi: SYSTEM</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#84929d] text-[12px] whitespace-nowrap">· Hệ thống</p>
    </div>
  );
}

function MessageSquareText() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="message-square-text">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="message-square-text">
          <path d={svgPaths.p2d012900} id="Vector" stroke="#5F7180" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function LyDoVaGhiChu() {
  return (
    <div className="bg-[#f8fafb] content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[10px] relative rounded-[5px] shrink-0 w-full" data-name="Lý do và ghi chú">
      <MessageSquareText />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#5f7180] text-[12px]">Nạp từ file tích hợp.</p>
    </div>
  );
}

function ChiTitChuynTrngThai() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[11px] items-start min-w-px overflow-clip pb-[22px] relative" data-name="Chi tiết chuyển trạng thái">
      <TrngThaiCuVaMi />
      <TacNhanThcHin />
      <LyDoVaGhiChu />
    </div>
  );
}

function SKinTrngThai() {
  return (
    <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Sự kiện trạng thái">
      <ThiGian />
      <TrcLchS />
      <ChiTitChuynTrngThai />
    </div>
  );
}

function ThiGian1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[1.45] overflow-clip pt-[5px] relative shrink-0 w-[90px] whitespace-nowrap" data-name="Thời gian">
      <p className="font-['Roboto_Mono:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#142b3b] text-[14px]">08:25:40</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#84929d] text-[12px]">GMT+7</p>
    </div>
  );
}

function TrcLchS1() {
  return (
    <div className="h-[141px] relative shrink-0 w-[16px]" data-name="Trục lịch sử">
      <svg className="absolute block inset-0 size-full" fill="none" height="141" preserveAspectRatio="none" viewBox="0 0 16 141" width="16">
        <g clipPath="url(#clip0_0_28)" id="Trá»¥c lá»ch sá»­">
          <rect fill="#DFE5EA" height="133" id="ÄÆ°á»ng ná»i sá»± kiá»n" width="2" x="7" y="15" />
          <circle cx="8" cy="14" fill="white" id="Má»c ghi nháº­n" r="5" stroke="#9AAEB9" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_28">
            <rect fill="white" height="141" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="arrow-right">
          <path d={svgPaths.p22cbce80} id="Vector" stroke="#84929D" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function NhanTrngThai2() {
  return (
    <div className="bg-[#f8fafb] content-stretch flex items-center overflow-clip px-[9px] py-[5px] relative rounded-[5px] shrink-0" data-name="Nhãn trạng thái">
      <p className="[word-break:break-word] font-['Roboto_Mono:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#5f7180] text-[12px] whitespace-nowrap">ASSIGNED</p>
    </div>
  );
}

function TrngThaiCuVaMi1() {
  return (
    <div className="content-stretch flex gap-[9px] items-center overflow-clip relative shrink-0 w-full" data-name="Trạng thái cũ và mới">
      <p className="[word-break:break-word] font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#5f7180] text-[12px] whitespace-nowrap">READY_TO_DISPATCH</p>
      <ArrowRight1 />
      <NhanTrngThai2 />
    </div>
  );
}

function UserRound() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="user-round">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="user-round">
          <path d={svgPaths.paa10000} id="Vector" stroke="#5F7180" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function TacNhanThcHin1() {
  return (
    <div className="content-stretch flex gap-[7px] items-center overflow-clip relative shrink-0" data-name="Tác nhân thực hiện">
      <UserRound />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">Bởi: DISPATCHER_01 (Trần Bình)</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#84929d] text-[12px] whitespace-nowrap">· Điều phối</p>
    </div>
  );
}

function MessageSquareText1() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="message-square-text">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="message-square-text">
          <path d={svgPaths.p2d012900} id="Vector" stroke="#5F7180" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function LyDoVaGhiChu1() {
  return (
    <div className="bg-[#f8fafb] content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[10px] relative rounded-[5px] shrink-0 w-full" data-name="Lý do và ghi chú">
      <MessageSquareText1 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#5f7180] text-[12px]">Duyệt đề xuất theo quy tắc nghiệp vụ.</p>
    </div>
  );
}

function ChiTitChuynTrngThai1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[11px] items-start min-w-px overflow-clip pb-[22px] relative" data-name="Chi tiết chuyển trạng thái">
      <TrngThaiCuVaMi1 />
      <TacNhanThcHin1 />
      <LyDoVaGhiChu1 />
    </div>
  );
}

function SKinTrngThai1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Sự kiện trạng thái">
      <ThiGian1 />
      <TrcLchS1 />
      <ChiTitChuynTrngThai1 />
    </div>
  );
}

function ThiGian2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[1.45] overflow-clip pt-[5px] relative shrink-0 w-[90px] whitespace-nowrap" data-name="Thời gian">
      <p className="font-['Roboto_Mono:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#142b3b] text-[14px]">08:40:02</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#84929d] text-[12px]">GMT+7</p>
    </div>
  );
}

function TrcLchS2() {
  return (
    <div className="h-[141px] relative shrink-0 w-[16px]" data-name="Trục lịch sử">
      <svg className="absolute block inset-0 size-full" fill="none" height="141" preserveAspectRatio="none" viewBox="0 0 16 141" width="16">
        <g id="Trá»¥c lá»ch sá»­">
          <circle cx="8" cy="14" fill="#087E8B" id="Má»c ghi nháº­n" r="4.5" stroke="#087E8B" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function ArrowRight2() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="arrow-right">
          <path d={svgPaths.p22cbce80} id="Vector" stroke="#84929D" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function NhanTrngThai3() {
  return (
    <div className="bg-[#e8f5f5] content-stretch flex items-center overflow-clip px-[9px] py-[5px] relative rounded-[5px] shrink-0" data-name="Nhãn trạng thái">
      <p className="[word-break:break-word] font-['Roboto_Mono:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#087e8b] text-[12px] whitespace-nowrap">IN_TRANSIT</p>
    </div>
  );
}

function TrngThaiCuVaMi2() {
  return (
    <div className="content-stretch flex gap-[9px] items-center overflow-clip relative shrink-0 w-full" data-name="Trạng thái cũ và mới">
      <p className="[word-break:break-word] font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#5f7180] text-[12px] whitespace-nowrap">ASSIGNED</p>
      <ArrowRight2 />
      <NhanTrngThai3 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#087e8b] text-[12px] whitespace-nowrap">Hiện tại</p>
    </div>
  );
}

function UserRound1() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="user-round">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="user-round">
          <path d={svgPaths.paa10000} id="Vector" stroke="#5F7180" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function TacNhanThcHin2() {
  return (
    <div className="content-stretch flex gap-[7px] items-center overflow-clip relative shrink-0" data-name="Tác nhân thực hiện">
      <UserRound1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">Bởi: DRV-01 (Nguyễn An)</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#84929d] text-[12px] whitespace-nowrap">· Tài xế</p>
    </div>
  );
}

function MessageSquareText2() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="message-square-text">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="message-square-text">
          <path d={svgPaths.p2d012900} id="Vector" stroke="#5F7180" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function LyDoVaGhiChu2() {
  return (
    <div className="bg-[#f8fafb] content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[10px] relative rounded-[5px] shrink-0 w-full" data-name="Lý do và ghi chú">
      <MessageSquareText2 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#5f7180] text-[12px]">Quét mã xuất kho đi giao.</p>
    </div>
  );
}

function ChiTitChuynTrngThai2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[11px] items-start min-w-px overflow-clip pb-[22px] relative" data-name="Chi tiết chuyển trạng thái">
      <TrngThaiCuVaMi2 />
      <TacNhanThcHin2 />
      <LyDoVaGhiChu2 />
    </div>
  );
}

function SKinTrngThai2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Sự kiện trạng thái">
      <ThiGian2 />
      <TrcLchS2 />
      <ChiTitChuynTrngThai2 />
    </div>
  );
}

function CacSKin() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Các sự kiện">
      <SKinTrngThai />
      <SKinTrngThai1 />
      <SKinTrngThai2 />
    </div>
  );
}

function DongThiGian() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start overflow-clip pb-[4px] pt-[22px] px-[24px] relative shrink-0 w-full" data-name="Dòng thời gian">
      <NgaySKin />
      <NhanCacTrng />
      <CacSKin />
    </div>
  );
}

function Database() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="database">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="database">
          <path d={svgPaths.p19085500} id="Vector" stroke="#5F7180" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function KtThucLchS() {
  return (
    <div className="relative shrink-0 w-full" data-name="Kết thúc lịch sử">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[24px] py-[15px] relative rounded-[inherit] size-full">
        <Database />
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px not-italic relative text-[#5f7180] text-[12px]">Hiển thị toàn bộ lịch sử vận đơn.</p>
        <p className="[word-break:break-word] font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#84929d] text-[12px] whitespace-nowrap">3/3 bản ghi</p>
      </div>
      <div aria-hidden className="absolute border-[#dfe5ea] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function NhtKyVnHanhBtBin() {
  return (
    <div className="bg-white flex-[1_0_2px] min-w-px relative rounded-[10px]" data-name="Nhật ký vận hành bất biến">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <DuNhtKy />
        <div className="bg-[#dfe5ea] h-px relative shrink-0 w-full" data-name="Đường phân chia" />
        <DongThiGian />
        <KtThucLchS />
      </div>
      <div aria-hidden className="absolute border border-[#dfe5ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Wallet() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="wallet">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="wallet">
          <path d={svgPaths.p378b48c0} id="Vector" stroke="#087E8B" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function TenKhi1() {
  return (
    <div className="content-stretch flex gap-[9px] items-center overflow-clip relative shrink-0" data-name="Tên khối">
      <Wallet />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[16px] whitespace-nowrap">{`Thu tiền & đối soát`}</p>
    </div>
  );
}

function TieuDKhi1() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Tiêu đề khối">
      <TenKhi1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#5f7180] text-[12px] whitespace-nowrap">VND</p>
    </div>
  );
}

function KhonTin() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-normal items-center justify-between overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="Khoản tiền">
      <p className="font-['Inter:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5f7180] text-[12px]">Tiền hàng</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] leading-[1.45] relative shrink-0 text-[#142b3b] text-[13px]">650.000 đ</p>
    </div>
  );
}

function KhonTin1() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-normal items-center justify-between overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="Khoản tiền">
      <p className="font-['Inter:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5f7180] text-[12px]">Phí vận chuyển · Người gửi trả</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] leading-[1.45] relative shrink-0 text-[#142b3b] text-[13px]">25.000 đ</p>
    </div>
  );
}

function KhonTin2() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="Khoản tiền">
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#5f7180] text-[12px]">Tiền thu COD</p>
      <p className="font-['Roboto_Mono:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#087f8c] text-[17px]">650.000 đ</p>
    </div>
  );
}

function ChiTitKhonThu() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-full" data-name="Chi tiết khoản thu">
      <KhonTin />
      <KhonTin1 />
      <div className="bg-[#dfe5ea] h-px relative shrink-0 w-full" data-name="Đường phân chia" />
      <KhonTin2 />
    </div>
  );
}

function NhanTrngThai4() {
  return (
    <div className="bg-[#f8fafb] content-stretch flex items-center overflow-clip px-[9px] py-[5px] relative rounded-[5px] shrink-0" data-name="Nhãn trạng thái">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#5f7180] text-[12px] whitespace-nowrap">Chưa thu</p>
    </div>
  );
}

function TrngThaiThu() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Trạng thái thu">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#5f7180] text-[12px] whitespace-nowrap">Trạng thái thu</p>
      <NhanTrngThai4 />
    </div>
  );
}

function KhonTin3() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Khoản tiền">
      <p className="font-['Inter:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5f7180] text-[12px]">Đã thu</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] leading-[1.45] relative shrink-0 text-[#142b3b] text-[13px]">0 đ</p>
    </div>
  );
}

function DiSoat() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] items-start justify-between leading-[1.45] not-italic overflow-clip relative shrink-0 text-[12px] w-full" data-name="Đối soát">
      <p className="relative shrink-0 text-[#5f7180]">Đối soát</p>
      <p className="relative shrink-0 text-[#84929d]">Chưa phát sinh</p>
    </div>
  );
}

function TinhHinhDiSoat() {
  return (
    <div className="[word-break:break-word] bg-[#f8fafb] content-stretch flex flex-col font-normal gap-[10px] items-start overflow-clip p-[12px] relative rounded-[6px] shrink-0 w-full whitespace-nowrap" data-name="Tình hình đối soát">
      <KhonTin3 />
      <DiSoat />
    </div>
  );
}

function DLiuThuTin() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Dữ liệu thu tiền">
      <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip p-[22px] relative rounded-[inherit] size-full">
        <TieuDKhi1 />
        <ChiTitKhonThu />
        <TrngThaiThu />
        <TinhHinhDiSoat />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#5f7180] text-[12px] w-full">Đơn đang vận chuyển. COD chỉ xác nhận khi tài xế thu tiền.</p>
      </div>
      <div aria-hidden className="absolute border border-[#dfe5ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function ShieldAlert() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="shield-alert">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="shield-alert">
          <path d={svgPaths.p597b500} id="Vector" stroke="#087E8B" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function TenKhi2() {
  return (
    <div className="content-stretch flex gap-[9px] items-center overflow-clip relative shrink-0" data-name="Tên khối">
      <ShieldAlert />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[16px] whitespace-nowrap">Quản lý ngoại lệ</p>
    </div>
  );
}

function TieuDKhi2() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Tiêu đề khối">
      <TenKhi2 />
    </div>
  );
}

function NhanSLn() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[4px] items-start overflow-clip relative shrink-0 text-[12px]" data-name="Nhãn số lần">
      <p className="font-['Inter:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5f7180]">Số lần thất bại</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] leading-[1.45] relative shrink-0 text-[#84929d]">failureCount</p>
    </div>
  );
}

function SLnThtBi() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="Số lần thất bại">
      <NhanSLn />
      <p className="font-['Roboto_Mono:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#142b3b] text-[28px]">0</p>
    </div>
  );
}

function CircleCheck() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="circle-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g clipPath="url(#clip0_0_4)" id="circle-check">
          <path d={svgPaths.p223a4400} id="Vector" stroke="#287756" strokeLinecap="round" />
        </g>
        <defs>
          <clipPath id="clip0_0_4">
            <rect fill="white" height="17" width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function XacNhn() {
  return (
    <div className="bg-[#eff8f2] content-stretch flex items-center justify-center overflow-clip relative rounded-[15px] shrink-0 size-[30px]" data-name="Xác nhận">
      <CircleCheck />
    </div>
  );
}

function ThongBao() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[7px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative" data-name="Thông báo">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">Chưa có ngoại lệ</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#5f7180] text-[12px] w-[min-content]">Chưa có lý do thất bại.</p>
    </div>
  );
}

function KhongCoNgoiL() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Không có ngoại lệ">
      <XacNhn />
      <ThongBao />
    </div>
  );
}

function NgoiLCaVnDn() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Ngoại lệ của vận đơn">
      <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip p-[22px] relative rounded-[inherit] size-full">
        <TieuDKhi2 />
        <SLnThtBi />
        <div className="bg-[#dfe5ea] h-px relative shrink-0 w-full" data-name="Đường phân chia" />
        <KhongCoNgoiL />
      </div>
      <div aria-hidden className="absolute border border-[#dfe5ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function RefreshCw() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="refresh-cw">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="refresh-cw">
          <path d={svgPaths.p1eb5c680} id="Vector" stroke="#5F7180" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function NgunDLiu() {
  return (
    <div className="content-stretch flex gap-[7px] items-center overflow-clip px-[3px] relative shrink-0 w-full" data-name="Nguồn dữ liệu">
      <RefreshCw />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#84929d] text-[12px] whitespace-nowrap">Dữ liệu tại 09/11/2026 · 08:45:00</p>
    </div>
  );
}

function ThuTinVaNgoiL() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-[408px]" data-name="Thu tiền và ngoại lệ">
      <DLiuThuTin />
      <NgoiLCaVnDn />
      <NgunDLiu />
    </div>
  );
}

function NhtKyVaDiSoat() {
  return (
    <div className="content-stretch flex gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Nhật ký và đối soát">
      <NhtKyVnHanhBtBin />
      <ThuTinVaNgoiL />
    </div>
  );
}

function NiDungHS() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[32px] relative shrink-0 w-full" data-name="Nội dung hồ sơ">
      <ThongTinVnDn />
      <NhtKyVaDiSoat />
    </div>
  );
}

function KhongGianHS() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Không gian hồ sơ">
      <ThanhCongC />
      <NiDungHS />
    </div>
  );
}

export default function Scr06HSChiTitDnHang() {
  return (
    <div className="bg-[#f0f4f7] content-stretch flex items-start relative size-full" data-name="SCR-06 · Hồ sơ chi tiết đơn hàng">
      <DiuHngHub />
      <KhongGianHS />
    </div>
  );
}
