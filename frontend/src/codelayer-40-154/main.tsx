import svgPaths from "./svg-0nwlklxcr1";

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
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#b8d0db] text-[12px] tracking-[1px] whitespace-nowrap">Điểm vận hành</p>
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
        <g clipPath="url(#clip0_0_52)" id="bell-ring">
          <path d={svgPaths.p357b3800} id="Vector" stroke="#8FA0B3" strokeLinecap="round" strokeWidth="1.7" />
        </g>
        <defs>
          <clipPath id="clip0_0_52">
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
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#b8d0db] text-[12px] tracking-[1px] whitespace-nowrap">Vận hành ca trực</p>
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
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#b8d0db] text-[12px] tracking-[1px] whitespace-nowrap">Quản lý</p>
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
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px not-italic relative text-[#b8c9dc] text-[12px]">Hệ thống hoạt động bình thường</p>
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
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px not-italic relative text-[#b8c9dc] text-[12px]">Trung tâm trợ giúp</p>
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
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px not-italic relative text-[#b8c9dc] text-[12px]">Cài đặt</p>
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
  return (
    <div className="bg-[#082e40] content-stretch flex flex-col gap-[28px] h-full items-start min-h-[1120px] overflow-clip pb-[20px] pt-[24px] px-[16px] relative shrink-0 w-[204px]" data-name="Điều hướng Hub">
      <NhnDin />
      <HubHinTi />
      <NghipV />
      <QunTr />
      <KhongDm />
      <HTrVnHanh />
      <PhienTrc />
    </div>
  );
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[13px] whitespace-nowrap">Vận hành Hub</p>
      <ChevronRight />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">Tiếp nhận đơn</p>
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
    <div className="bg-[#e7f4f3] relative rounded-[20px] shrink-0 size-[34px]" data-name="Ảnh đại diện">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[13px] whitespace-nowrap">AL</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function NhanVien() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.45] not-italic overflow-clip relative shrink-0 text-[12px] whitespace-nowrap" data-name="Nhân viên">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#142b3b]">An Lê</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684]">Điều phối viên Hub</p>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="chevron-down">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="#657684" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function TaiKhonVaNgayLamVic() {
  return (
    <div className="content-stretch flex gap-[22px] items-center overflow-clip relative shrink-0" data-name="Tài khoản và ngày làm việc">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Thứ Hai, 09/11/2026</p>
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
    <div className="bg-white h-[72px] relative shrink-0 w-full" data-name="Thanh ứng dụng">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[28px] relative rounded-[inherit] size-full">
        <DngDn />
        <TaiKhonVaNgayLamVic />
      </div>
      <div aria-hidden className="absolute border-[#dee5ed] border-b border-solid inset-0 pointer-events-none" />
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
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.3] not-italic relative shrink-0 text-[#142b3b] text-[27px] w-[412px]">{`Tiếp nhận & phân loại đơn hàng`}</p>
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
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[13px] whitespace-nowrap">Tạo đơn gửi lẻ</p>
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
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Nạp danh sách đơn (Import CSV/Excel)</p>
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

function FileSpreadsheet() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="file-spreadsheet">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="file-spreadsheet">
          <path d={svgPaths.p5237e00} id="Vector" stroke="#087F8C" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function BiuTngTp() {
  return (
    <div className="bg-[#e7f4f3] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[44px]" data-name="Biểu tượng tệp">
      <FileSpreadsheet />
    </div>
  );
}

function ThongTinLnNhp() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Thông tin lần nhập">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#142b3b] text-[16px]">Đã nhập và kiểm tra danh sách đơn</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[12px]">don_shopee_q7_09112026.xlsx · 12 dòng · An Lê · 09:15, 09/11/2026</p>
    </div>
  );
}

function Download() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="download">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="download">
          <path d={svgPaths.pdd92f40} id="Vector" stroke="#087F8C" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function NutThaoTac2() {
  return (
    <div className="bg-white h-[42px] relative rounded-[8px] shrink-0" data-name="Nút thao tác">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <Download />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[13px] whitespace-nowrap">Tải báo cáo kiểm tra</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TpDaKimTra() {
  return (
    <div className="content-stretch flex gap-[14px] items-center overflow-clip p-[20px] relative shrink-0 w-full" data-name="Tệp đã kiểm tra">
      <BiuTngTp />
      <ThongTinLnNhp />
      <NutThaoTac2 />
    </div>
  );
}

function FileCheck() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="file-check-2">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="file-check-2">
          <path d={svgPaths.p22e71000} id="Vector" stroke="#142B3B" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function DinGiiKtQu() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 text-[#142b3b] whitespace-nowrap" data-name="Diễn giải kết quả">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[13px]">Tổng số đơn đã nhập</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[12px]">Đã kiểm tra đủ 12/12 dòng</p>
    </div>
  );
}

function KtQuPhanLoi() {
  return (
    <div className="bg-[#f6f8fa] content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px overflow-clip p-[16px] relative rounded-[8px]" data-name="Kết quả phân loại">
      <FileCheck />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[30px] whitespace-nowrap">12</p>
      <DinGiiKtQu />
    </div>
  );
}

function CircleCheck() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="circle-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="circle-check">
          <path d={svgPaths.p3eb0a470} id="Vector" stroke="#0F766E" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function DinGiiKtQu1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 text-[#0f766e] whitespace-nowrap" data-name="Diễn giải kết quả">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[13px]">Hợp lệ · Sẵn sàng phát</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[12px]">READY_TO_DISPATCH</p>
    </div>
  );
}

function KtQuPhanLoi1() {
  return (
    <div className="bg-[#eaf5ef] content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px overflow-clip p-[16px] relative rounded-[8px]" data-name="Kết quả phân loại">
      <CircleCheck />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#0f766e] text-[30px] whitespace-nowrap">9</p>
      <DinGiiKtQu1 />
    </div>
  );
}

function CircleAlert() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="circle-alert">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="circle-alert">
          <path d={svgPaths.p3e0e99c0} id="Vector" stroke="#D14343" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function DinGiiKtQu2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 text-[#d14343] whitespace-nowrap" data-name="Diễn giải kết quả">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[13px]">Không hợp lệ · Chờ xử lý</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[12px]">PENDING · Không được xuất kho phát</p>
    </div>
  );
}

function KtQuPhanLoi2() {
  return (
    <div className="bg-[#fff0ef] content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px overflow-clip p-[16px] relative rounded-[8px]" data-name="Kết quả phân loại">
      <CircleAlert />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#d14343] text-[30px] whitespace-nowrap">3</p>
      <DinGiiKtQu2 />
    </div>
  );
}

function TngHpKimTra() {
  return (
    <div className="content-stretch flex gap-[14px] items-start overflow-clip pb-[20px] px-[20px] relative shrink-0 w-full" data-name="Tổng hợp kiểm tra">
      <KtQuPhanLoi />
      <KtQuPhanLoi1 />
      <KtQuPhanLoi2 />
    </div>
  );
}

function ShieldAlert() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="shield-alert">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="shield-alert">
          <path d={svgPaths.p597b500} id="Vector" stroke="#95620D" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function ThongBaoKimTra() {
  return (
    <div className="bg-[#fff6e5] content-stretch flex gap-[9px] items-center overflow-clip px-[20px] py-[12px] relative shrink-0 w-full" data-name="Thông báo kiểm tra">
      <ShieldAlert />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#95620d] text-[12px] whitespace-nowrap">3 đơn chưa hợp lệ được giữ ở PENDING. Chỉ chuyển READY_TO_DISPATCH sau khi sửa và kiểm tra lại thành công (BR-01).</p>
    </div>
  );
}

function KtQuNhpDanhSach() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Kết quả nhập danh sách">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <TpDaKimTra />
        <TngHpKimTra />
        <ThongBaoKimTra />
      </div>
      <div aria-hidden className="absolute border border-[#dee5ed] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function TrngThai() {
  return (
    <div className="bg-[#fff1f0] content-stretch flex gap-[6px] items-center overflow-clip px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Trạng thái">
      <div className="bg-[#d14343] relative rounded-[3px] shrink-0 size-[5px]" data-name="Dấu trạng thái" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#d14343] text-[12px] whitespace-nowrap">3</p>
    </div>
  );
}

function TabDnLiDangChn() {
  return (
    <div className="h-full relative shrink-0" data-name="Tab đơn lỗi đang chọn">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[13px] whitespace-nowrap">Đơn lỗi cần xử lý</p>
        <TrngThai />
      </div>
      <div aria-hidden className="absolute border-[#087f8c] border-b-3 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TabKtQu() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="Tab kết quả">
      <div className="content-stretch flex gap-[28px] items-center overflow-clip px-[20px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[13px] whitespace-nowrap">Tất cả đơn hàng 104</p>
        <TabDnLiDangChn />
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
          <path d={svgPaths.p3f6e0f00} id="Vector" stroke="#657684" strokeLinecap="round" />
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
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Tìm mã vận đơn, tên hoặc số điện thoại</p>
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
          <path d={svgPaths.p106eaa80} id="Vector" stroke="#657684" strokeLinecap="round" />
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
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="#657684" strokeLinecap="round" />
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
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">09/11/2026</p>
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
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="#657684" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function LcTrngThai() {
  return (
    <div className="h-[38px] relative rounded-[6px] shrink-0" data-name="Lọc trạng thái">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">Trạng thái: Tất cả</p>
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
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="#657684" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function LcNgun() {
  return (
    <div className="h-[38px] relative rounded-[6px] shrink-0" data-name="Lọc nguồn">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">Nguồn: Tất cả</p>
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
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">Đặt lại</p>
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Trạng thái</p>
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Tuyến / Phường</p>
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

function FileSpreadsheet1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="file-spreadsheet">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="file-spreadsheet">
          <path d={svgPaths.p14561300} id="Vector" stroke="#087F8C" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function X() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="x">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="x">
          <path d={svgPaths.p3b12ff80} id="Vector" stroke="#087F8C" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function TpDangLc() {
  return (
    <div className="bg-[#e7f4f3] content-stretch flex gap-[8px] items-center overflow-clip px-[10px] py-[6px] relative rounded-[5px] shrink-0" data-name="Tệp đang lọc">
      <FileSpreadsheet1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">Lần nhập: don_shopee_q7_09112026.xlsx</p>
      <X />
    </div>
  );
}

function LcTheoLnNhp() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip pb-[16px] px-[16px] relative shrink-0 w-full" data-name="Lọc theo lần nhập">
      <TpDangLc />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">3 lỗi · Mỗi dòng hiển thị lý do và cách sửa</p>
    </div>
  );
}

function TieuDBngLi() {
  return (
    <div className="[word-break:break-word] bg-[#f6f8fa] content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold h-[42px] items-center leading-[1.45] not-italic overflow-clip px-[16px] relative shrink-0 text-[#657684] text-[12px] w-full" data-name="Tiêu đề bảng lỗi">
      <p className="relative shrink-0 w-[154px]">Dòng / Mã nguồn</p>
      <p className="relative shrink-0 w-[190px]">Người nhận / Liên hệ</p>
      <p className="relative shrink-0 w-[252px]">Địa chỉ / Phường</p>
      <p className="relative shrink-0 w-[116px]">COD</p>
      <p className="relative shrink-0 w-[342px]">Kết quả kiểm tra / Lý do lỗi</p>
      <p className="relative shrink-0 w-[242px]">Thao tác</p>
    </div>
  );
}

function ThamChiuDongNhp() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 text-[12px] w-[154px] whitespace-nowrap" data-name="Tham chiếu dòng nhập">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#142b3b]">Dòng 05</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684]">SPX-711205</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684]">Shopee · Excel</p>
    </div>
  );
}

function ThongTinNgiNhn() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 text-[12px] w-[190px] whitespace-nowrap" data-name="Thông tin người nhận">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#142b3b]">Nguyễn Minh Khang</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684]">0908 222 333</p>
    </div>
  );
}

function DaChCnKimTra() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[6px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 text-[12px] w-[252px] whitespace-nowrap" data-name="Địa chỉ cần kiểm tra">
      <p className="relative shrink-0 text-[#142b3b]">72 Lê Văn Việt</p>
      <p className="relative shrink-0 text-[#d14343]">Phường Hiệp Phú, TP. Thủ Đức</p>
    </div>
  );
}

function CodKimTra() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 text-[12px] w-[116px] whitespace-nowrap" data-name="COD kiểm tra">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#142b3b]">650.000 ₫</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684]">Tài xế xe máy</p>
    </div>
  );
}

function TrngThai1() {
  return (
    <div className="bg-[#fff1f0] content-stretch flex gap-[6px] items-center overflow-clip px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Trạng thái">
      <div className="bg-[#d14343] relative rounded-[3px] shrink-0 size-[5px]" data-name="Dấu trạng thái" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#d14343] text-[12px] whitespace-nowrap">Địa chỉ ngoài vùng phục vụ</p>
    </div>
  );
}

function ChiTitLi() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0 w-[342px]" data-name="Chi tiết lỗi">
      <TrngThai1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Không thuộc ServiceArea của Hub Quận 7.</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">Sửa địa chỉ hoặc chuyển Hub phù hợp.</p>
    </div>
  );
}

function SquarePen() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="square-pen">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="square-pen">
          <path d={svgPaths.p102f0e00} id="Vector" stroke="#087F8C" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function NutThaoTac3() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0" data-name="Nút thao tác">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <SquarePen />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">{`Sửa & kiểm tra lại`}</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function XLyVaTrngThai() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start overflow-clip relative shrink-0 w-[242px]" data-name="Xử lý và trạng thái">
      <NutThaoTac3 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#95620d] text-[12px] whitespace-nowrap">Chờ thẩm định · PENDING</p>
    </div>
  );
}

function DongDLiuLi() {
  return (
    <div className="h-[132px] relative shrink-0 w-full" data-name="Dòng dữ liệu lỗi">
      <div className="content-stretch flex items-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <ThamChiuDongNhp />
        <ThongTinNgiNhn />
        <DaChCnKimTra />
        <CodKimTra />
        <ChiTitLi />
        <XLyVaTrngThai />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ThamChiuDongNhp1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 text-[12px] w-[154px] whitespace-nowrap" data-name="Tham chiếu dòng nhập">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#142b3b]">Dòng 08</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684]">SPX-711208</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684]">Shopee · Excel</p>
    </div>
  );
}

function ThongTinNgiNhn1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 text-[12px] w-[190px] whitespace-nowrap" data-name="Thông tin người nhận">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#142b3b]">Võ Thị Bích Ngọc</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#d14343]">Thiếu số điện thoại</p>
    </div>
  );
}

function DaChCnKimTra1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[6px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 text-[12px] w-[252px] whitespace-nowrap" data-name="Địa chỉ cần kiểm tra">
      <p className="relative shrink-0 text-[#142b3b]">98 Nguyễn Thị Thập</p>
      <p className="relative shrink-0 text-[#657684]">Phường Tân Phong</p>
    </div>
  );
}

function CodKimTra1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 text-[12px] w-[116px] whitespace-nowrap" data-name="COD kiểm tra">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#142b3b]">320.000 ₫</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684]">Tài xế xe máy</p>
    </div>
  );
}

function TrngThai2() {
  return (
    <div className="bg-[#fff1f0] content-stretch flex gap-[6px] items-center overflow-clip px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Trạng thái">
      <div className="bg-[#d14343] relative rounded-[3px] shrink-0 size-[5px]" data-name="Dấu trạng thái" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#d14343] text-[12px] whitespace-nowrap">Thiếu số điện thoại người nhận</p>
    </div>
  );
}

function ChiTitLi1() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0 w-[342px]" data-name="Chi tiết lỗi">
      <TrngThai2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Chưa có thông tin liên hệ để giao hàng.</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">Bổ sung số điện thoại hợp lệ.</p>
    </div>
  );
}

function SquarePen1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="square-pen">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="square-pen">
          <path d={svgPaths.p102f0e00} id="Vector" stroke="#087F8C" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function NutThaoTac4() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0" data-name="Nút thao tác">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <SquarePen1 />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">{`Sửa & kiểm tra lại`}</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function XLyVaTrngThai1() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start overflow-clip relative shrink-0 w-[242px]" data-name="Xử lý và trạng thái">
      <NutThaoTac4 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#95620d] text-[12px] whitespace-nowrap">Chờ thẩm định · PENDING</p>
    </div>
  );
}

function DongDLiuLi1() {
  return (
    <div className="h-[132px] relative shrink-0 w-full" data-name="Dòng dữ liệu lỗi">
      <div className="content-stretch flex items-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <ThamChiuDongNhp1 />
        <ThongTinNgiNhn1 />
        <DaChCnKimTra1 />
        <CodKimTra1 />
        <ChiTitLi1 />
        <XLyVaTrngThai1 />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ThamChiuDongNhp2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 text-[12px] w-[154px] whitespace-nowrap" data-name="Tham chiếu dòng nhập">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#142b3b]">Dòng 11</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684]">SPX-711211</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684]">Shopee · Excel</p>
    </div>
  );
}

function ThongTinNgiNhn2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 text-[12px] w-[190px] whitespace-nowrap" data-name="Thông tin người nhận">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#142b3b]">Trần Đức Hưng</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684]">0912 555 678</p>
    </div>
  );
}

function DaChCnKimTra2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[6px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 text-[12px] w-[252px] whitespace-nowrap" data-name="Địa chỉ cần kiểm tra">
      <p className="relative shrink-0 text-[#142b3b]">12 Nguyễn Lương Bằng</p>
      <p className="relative shrink-0 text-[#657684]">Phú Mỹ Hưng</p>
    </div>
  );
}

function CodKimTra2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 text-[12px] w-[116px] whitespace-nowrap" data-name="COD kiểm tra">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#d14343]">12.500.000 ₫</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684]">Tài xế xe máy</p>
    </div>
  );
}

function TrngThai3() {
  return (
    <div className="bg-[#fff1f0] content-stretch flex gap-[6px] items-center overflow-clip px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Trạng thái">
      <div className="bg-[#d14343] relative rounded-[3px] shrink-0 size-[5px]" data-name="Dấu trạng thái" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#d14343] text-[12px] whitespace-nowrap">COD vượt giới hạn xe máy</p>
    </div>
  );
}

function ChiTitLi2() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0 w-[342px]" data-name="Chi tiết lỗi">
      <TrngThai3 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Vượt 2.500.000 ₫ so với mức tối đa.</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">Điều chỉnh COD về ≤ 10.000.000 ₫.</p>
    </div>
  );
}

function SquarePen2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="square-pen">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="square-pen">
          <path d={svgPaths.p102f0e00} id="Vector" stroke="#087F8C" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function NutThaoTac5() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0" data-name="Nút thao tác">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <SquarePen2 />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">{`Sửa & kiểm tra lại`}</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function XLyVaTrngThai2() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start overflow-clip relative shrink-0 w-[242px]" data-name="Xử lý và trạng thái">
      <NutThaoTac5 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#95620d] text-[12px] whitespace-nowrap">Chờ thẩm định · PENDING</p>
    </div>
  );
}

function DongDLiuLi2() {
  return (
    <div className="h-[132px] relative shrink-0 w-full" data-name="Dòng dữ liệu lỗi">
      <div className="content-stretch flex items-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <ThamChiuDongNhp2 />
        <ThongTinNgiNhn2 />
        <DaChCnKimTra2 />
        <CodKimTra2 />
        <ChiTitLi2 />
        <XLyVaTrngThai2 />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Download1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="download">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="download">
          <path d={svgPaths.pdd92f40} id="Vector" stroke="#087F8C" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function NutThaoTac6() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0" data-name="Nút thao tác">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <Download1 />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">Tải danh sách lỗi</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function KtThucDanhSachLi() {
  return (
    <div className="content-stretch flex h-[54px] items-center justify-between overflow-clip px-[20px] relative shrink-0 w-full" data-name="Kết thúc danh sách lỗi">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Hiển thị 3/3 đơn lỗi trong lần nhập này</p>
      <NutThaoTac6 />
    </div>
  );
}

function HangDiXLyDnLi() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Hàng đợi xử lý đơn lỗi">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <TabKtQu />
        <BLcDnHang />
        <LcTheoLnNhp />
        <TieuDBngLi />
        <DongDLiuLi />
        <DongDLiuLi1 />
        <DongDLiuLi2 />
        <KtThucDanhSachLi />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Info() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="info">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="info">
          <path d={svgPaths.p2f1f6700} id="Vector" stroke="#087F8C" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function QuyTrinhSauChnhSa() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 text-[12px] whitespace-nowrap" data-name="Quy trình sau chỉnh sửa">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#142b3b]">Sửa dữ liệu tại từng dòng, sau đó kiểm tra lại</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684]">Hệ thống kiểm tra lại vùng phục vụ, số điện thoại và COD. Đơn còn lỗi tiếp tục ở tab này; đơn hợp lệ được chuyển sang Sẵn sàng phát.</p>
    </div>
  );
}

function HngDnKhcPhc() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Hướng dẫn khắc phục">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <Info />
        <QuyTrinhSauChnhSa />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function NiDungNghipV() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[28px] relative shrink-0 w-full" data-name="Nội dung nghiệp vụ">
      <TieuDVaThaoTac />
      <KtQuNhpDanhSach />
      <HangDiXLyDnLi />
      <HngDnKhcPhc />
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

export default function Scr03KtQuNhpVaXLyDnLi() {
  return (
    <div className="bg-[#f0f4f7] content-stretch flex items-start relative size-full" data-name="SCR-03 · Kết quả nhập và xử lý đơn lỗi">
      <DiuHngHub />
      <KhongGianLamVic />
    </div>
  );
}