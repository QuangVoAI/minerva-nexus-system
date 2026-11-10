import svgPaths from "./svg-10wz5514xz";

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
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 tracking-[1px] whitespace-nowrap" data-name="Tên hệ thống">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[16px] text-white">HUB / OPS</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#b8d0db] text-[12px]">Vận hành logistics</p>
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
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#b8d0db] text-[12px] tracking-[0.5px] whitespace-nowrap">Ca trực</p>
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
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#b8d0db] text-[12px] tracking-[0.5px] whitespace-nowrap">Quản lý</p>
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
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px not-italic relative text-[#8fa0b3] text-[12px]">Hệ thống hoạt động</p>
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
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#8fa0b3] text-[12px]">Trợ giúp</p>
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
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#8fa0b3] text-[12px] whitespace-nowrap">Điều phối viên</p>
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Hub</p>
      <ChevronRight />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">Tiếp nhận</p>
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
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684]">Điều phối viên</p>
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">09/11/2026</p>
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
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.25] not-italic relative shrink-0 text-[#142b3b] text-[26px] tracking-[-0.5px] w-[391px]">{`Tiếp nhận & phân loại đơn hàng`}</p>
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

function CircleCheck() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="circle-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="circle-check">
          <path d={svgPaths.p3eb0a470} id="Vector" stroke="#217454" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function KtQuToDn() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px not-italic overflow-clip relative text-[#0f766e] whitespace-nowrap" data-name="Kết quả tạo đơn">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[13px]">Đã tạo đơn MNX000105 · Dữ liệu hợp lệ, chuyển Sẵn sàng phát.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px]">09:20 · 09/11/2026 — Địa chỉ hợp lệ, đủ số điện thoại, COD trong giới hạn.</p>
    </div>
  );
}

function X() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="x">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="x">
          <path d="M12 4L4 12M4 4L12 12" id="Vector" stroke="#0F766E" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function ThongBaoLuThanhCong() {
  return (
    <div className="bg-[#eaf5ef] relative rounded-[8px] shrink-0 w-full" data-name="Thông báo lưu thành công">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <CircleCheck />
        <KtQuToDn />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f766e] text-[12px] whitespace-nowrap">Xem đơn</p>
        <X />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
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
      <p className="leading-[normal] relative shrink-0 text-[#142b3b] text-[30px]">58</p>
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
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Đã hợp lệ</p>
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
        <p className="relative shrink-0 text-[13px]">Tất cả</p>
        <p className="relative shrink-0 text-[12px]">105</p>
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[13px] whitespace-nowrap">Đơn lỗi</p>
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
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[13px] whitespace-nowrap">Lịch sử</p>
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
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Tìm mã đơn, tên hoặc số điện thoại</p>
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#65758a] text-[12px] whitespace-nowrap">Phường</p>
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
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] w-[132px]">Mã đơn</p>
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
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">1–5 / 105 đơn · 5/trang</p>
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
      <p className="relative shrink-0">Hub Q.7 · Ngày 09/11/2026 · UTC+7</p>
      <p className="relative shrink-0">Cập nhật 09:20 · Vừa xong</p>
    </div>
  );
}

function NiDungNghipV() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip px-[28px] py-[24px] relative shrink-0 w-full" data-name="Nội dung nghiệp vụ">
      <TieuDVaThaoTac />
      <ThongBaoLuThanhCong />
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

export default function Scr03TipNhnVaPhanLoiDn() {
  return (
    <div className="bg-[#f3f6fa] content-stretch flex items-start relative size-full" data-name="SCR-03 · Tiếp nhận và phân loại đơn">
      <DiuHngHub />
      <KhongGianLamVic />
    </div>
  );
}