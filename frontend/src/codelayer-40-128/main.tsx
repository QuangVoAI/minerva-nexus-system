import svgPaths from "./svg-pwzfn0yyu6";

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
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] text-white tracking-[0.5px]">HUB / OPS</p>
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
            <path d={svgPaths.p2f7c3ff0} stroke="#087F8C" strokeLinecap="round" strokeWidth="1.7" />
            <path d={svgPaths.p772e900} stroke="#087F8C" strokeLinecap="round" strokeWidth="1.7" />
            <path d={svgPaths.p99ad200} stroke="#087F8C" strokeLinecap="round" strokeWidth="1.7" />
            <path d={svgPaths.p3fc0d440} stroke="#087F8C" strokeLinecap="round" strokeWidth="1.7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function McDiuHng() {
  return (
    <div className="bg-[#0f1b2a] h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Mục điều hướng">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <LayoutDashboard />
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[12px] text-white">Bàn điều hành</p>
      </div>
      <div aria-hidden className="absolute border border-[#1e3a4e] border-solid inset-0 pointer-events-none rounded-[8px]" />
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
        <g clipPath="url(#clip0_0_50)" id="bell-ring">
          <path d={svgPaths.p357b3800} id="Vector" stroke="#8FA0B3" strokeLinecap="round" strokeWidth="1.7" />
        </g>
        <defs>
          <clipPath id="clip0_0_50">
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
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Trần Văn Bình</p>
        <CaHotDng />
      </div>
      <div aria-hidden className="absolute border-[#1e3a4e] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function DiuHngHub() {
  return (
    <div className="bg-[#082e40] content-stretch flex flex-col gap-[28px] items-start min-h-[1120px] overflow-clip pb-[20px] pt-[24px] px-[16px] relative self-stretch shrink-0 w-[204px]" data-name="Điều hướng Hub">
      <NhnDin />
      <HubHinTi />
      <NghipV />
      <QunTr />
      <KhongDm />
      <PhienTrc />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="chevron-right">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="#657684" strokeLinecap="round" />
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
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">Bàn điều hành</p>
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
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">Kết nối</p>
    </div>
  );
}

function nhDiDin() {
  return (
    <div className="bg-[#e7f4f3] relative rounded-[100px] shrink-0 size-[30px]" data-name="Ảnh đại diện">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">TB</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function KtNiVaNgiDung() {
  return (
    <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0" data-name="Kết nối và người dùng">
      <KtNi />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Cập nhật 09:25:48</p>
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

function TenManHinh() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Tên màn hình">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.3] not-italic relative shrink-0 text-[#142b3b] text-[28px] tracking-[-0.5px] w-[365px]">Bàn điều hành trung tâm Hub</p>
    </div>
  );
}

function ThongTinChinh() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[9px] items-start min-w-px overflow-clip relative" data-name="Thông tin chính">
      <TenManHinh />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[#657684] text-[13px] w-[min-content]">Hub Quận 7 · Ca sáng 08:00 - 12:00 · Điều phối viên Trần Văn Bình</p>
    </div>
  );
}

function Radio1() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="radio">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="radio">
          <path d={svgPaths.p3c27d000} id="Vector" stroke="#087F8C" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function GiamSatThiGianThc() {
  return (
    <div className="bg-[#e7f4f3] relative rounded-[8px] shrink-0" data-name="Giám sát thời gian thực">
      <div className="content-stretch flex gap-[7px] items-center overflow-clip px-[13px] py-[9px] relative rounded-[inherit] size-full">
        <Radio1 />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">Giám sát thời gian thực</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TieuDManHinh() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip px-[28px] py-[24px] relative shrink-0 w-full" data-name="Tiêu đề màn hình">
      <ThongTinChinh />
      <GiamSatThiGianThc />
    </div>
  );
}

function ThongTinCaTrc() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Thông tin ca trực">
      <ThanhTrngThai />
      <TieuDManHinh />
    </div>
  );
}

function Users() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="users">
          <path d={svgPaths.p2277bd00} id="Vector" stroke="#8FA0B3" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function DiTrcCa() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-name="Đội trực ca">
      <Users />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#c7d2df] text-[12px] whitespace-nowrap">8 tài xế trực</p>
    </div>
  );
}

function TieuD() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Tiêu đề">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[17px] text-white whitespace-nowrap">Công suất Hub</p>
      <DiTrcCa />
    </div>
  );
}

function DngHCongSut() {
  return (
    <div className="content-stretch flex flex-col gap-px items-center justify-center overflow-clip relative shrink-0 size-[114px]" data-name="Đồng hồ công suất">
      <div className="absolute left-0 size-[114px] top-0" data-name="Nền đồng hồ">
        <svg className="absolute block inset-0 size-full" fill="none" height="114" preserveAspectRatio="none" viewBox="0 0 114 114" width="114">
          <path d={svgPaths.p3aa988f1} fill="#0F1B2A" id="Ná»n Äá»ng há»" />
        </svg>
      </div>
      <div className="absolute left-0 size-[114px] top-0" data-name="Mức công suất">
        <svg className="absolute block inset-0 size-full" fill="none" height="114" preserveAspectRatio="none" viewBox="0 0 114 114" width="114">
          <path d={svgPaths.p37ec1200} fill="#087F8C" id="Má»©c cÃ´ng suáº¥t" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[31px] text-white tracking-[-1px] whitespace-nowrap">79%</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#b8d0db] text-[12px] whitespace-nowrap">công suất Hub</p>
    </div>
  );
}

function DnTipNhn() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px not-italic overflow-clip relative" data-name="Đơn tiếp nhận">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[0px] text-white tracking-[-0.8px] whitespace-nowrap">
        <span className="leading-[normal] text-[34px]">{`95 `}</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-[#8fa0b3] text-[19px]">/ 120 đơn</span>
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#b8d0db] text-[12px] w-[min-content]">Đã tiếp nhận · Sức chứa tối đa</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#b8d0db] text-[12px] whitespace-nowrap">Tổng sức chứa đội</p>
    </div>
  );
}

function McTi() {
  return (
    <div className="content-stretch flex gap-[24px] items-center overflow-clip relative shrink-0 w-full" data-name="Mức tải">
      <DngHCongSut />
      <DnTipNhn />
    </div>
  );
}

function PackagePlus() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="package-plus">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="package-plus">
          <path d={svgPaths.p16ce4f00} id="Vector" stroke="#087F8C" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function DDaTipNhn() {
  return (
    <div className="bg-[#0f1b2a] content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[10px] relative rounded-[6px] shrink-0 w-full" data-name="Dư địa tiếp nhận">
      <PackagePlus />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#d1e0eb] text-[12px] whitespace-nowrap">
        <span className="leading-[normal]">{`Còn `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] text-[#087f8c]">25 đơn</span>
      </p>
    </div>
  );
}

function CongSutHub() {
  return (
    <div className="bg-[#082e40] h-full relative rounded-[12px] shrink-0 w-[450px]" data-name="Công suất Hub">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[20px] relative rounded-[inherit] size-full">
        <TieuD />
        <McTi />
        <DDaTipNhn />
      </div>
      <div aria-hidden className="absolute border border-[#1e3a4e] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function NiDung() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Nội dung">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#142b3b] text-[17px]">Giám sát SLA thời gian thực</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684] text-[12px]">95 đơn đã tiếp nhận</p>
    </div>
  );
}

function Siren() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="siren">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_41)" id="siren">
          <path d={svgPaths.p3f0ccef0} id="Vector" stroke="#D14343" strokeLinecap="round" />
        </g>
        <defs>
          <clipPath id="clip0_0_41">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CoiCnhBaoDangBt() {
  return (
    <div className="bg-[#fff0ef] content-stretch flex gap-[7px] items-center overflow-clip px-[10px] py-[7px] relative rounded-[6px] shrink-0" data-name="Còi cảnh báo đang bật">
      <Siren />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#d14343] text-[12px] whitespace-nowrap">Cảnh báo: Bật</p>
    </div>
  );
}

function TieuDSla() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Tiêu đề SLA">
      <NiDung />
      <CoiCnhBaoDangBt />
    </div>
  );
}

function PhanBSla() {
  return (
    <div className="content-stretch flex gap-[3px] h-[12px] items-start overflow-clip relative rounded-[3px] shrink-0 w-full" data-name="Phân bố SLA">
      <div className="bg-[#0f766e] h-[12px] relative shrink-0 w-[624px]" data-name="Đơn an toàn" />
      <div className="bg-[#f59e0b] h-[12px] relative shrink-0 w-[148px]" data-name="Đơn cận hạn" />
      <div className="bg-[#d14343] flex-[1_0_0] h-[12px] min-w-px relative" data-name="Đơn nguy cơ cao" />
    </div>
  );
}

function ShieldCheck() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="shield-check">
          <path d={svgPaths.p35cb9570} id="Vector" stroke="#0F766E" strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function McD() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 w-full" data-name="Mức độ">
      <ShieldCheck />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">An toàn</p>
    </div>
  );
}

function SDn() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[5px] items-baseline not-italic overflow-clip relative shrink-0 w-full" data-name="Số đơn">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f766e] text-[29px] tracking-[-0.8px] whitespace-nowrap">72</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#65768a] text-[12px] whitespace-nowrap">đơn</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px relative text-[#65768a] text-[12px] text-right">{`> 120 phút`}</p>
    </div>
  );
}

function NhomSla() {
  return (
    <div className="bg-[#eaf5ef] flex-[1_0_26px] min-w-px relative rounded-[8px]" data-name="Nhóm SLA">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <McD />
        <SDn />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="clock-3">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_30)" id="clock-3">
          <path d={svgPaths.p83de400} id="Vector" stroke="#F59E0B" strokeLinecap="round" strokeWidth="1.8" />
        </g>
        <defs>
          <clipPath id="clip0_0_30">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function McD1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 w-full" data-name="Mức độ">
      <Clock />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">Cận hạn</p>
    </div>
  );
}

function SDn1() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[5px] items-baseline not-italic overflow-clip relative shrink-0 w-full" data-name="Số đơn">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f59e0b] text-[29px] tracking-[-0.8px] whitespace-nowrap">17</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#65768a] text-[12px] whitespace-nowrap">đơn</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px relative text-[#65768a] text-[12px] text-right">60 - 120 phút</p>
    </div>
  );
}

function NhomSla1() {
  return (
    <div className="bg-[#fff5de] flex-[1_0_26px] min-w-px relative rounded-[8px]" data-name="Nhóm SLA">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <McD1 />
        <SDn1 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TriangleAlert() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="triangle-alert">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_12)" id="triangle-alert">
          <path d={svgPaths.p3a38ad80} id="Vector" stroke="#D14343" strokeLinecap="round" strokeWidth="1.8" />
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

function McD2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0 w-full" data-name="Mức độ">
      <TriangleAlert />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">Nguy cơ cao</p>
    </div>
  );
}

function SDn2() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[5px] items-baseline not-italic overflow-clip relative shrink-0 w-full" data-name="Số đơn">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#d14343] text-[29px] tracking-[-0.8px] whitespace-nowrap">6</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#65768a] text-[12px] whitespace-nowrap">đơn</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px relative text-[#65768a] text-[12px] text-right">{`< 60 phút`}</p>
    </div>
  );
}

function NhomSla2() {
  return (
    <div className="bg-[#fff0ef] flex-[1_0_26px] min-w-px relative rounded-[8px]" data-name="Nhóm SLA">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <McD2 />
        <SDn2 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function CacMcSla() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="Các mức SLA">
      <NhomSla />
      <NhomSla1 />
      <NhomSla2 />
    </div>
  );
}

function TrngThaiuTien() {
  return (
    <div className="content-stretch flex gap-[7px] items-center overflow-clip relative shrink-0 w-full" data-name="Trạng thái ưu tiên">
      <div className="relative shrink-0 size-[10px]" data-name="Vùng tín hiệu">
        <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
          <circle cx="5" cy="5" fill="#FFF0EF" id="VÃ¹ng tÃ­n hiá»u" r="4" stroke="#D14343" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

function GiamSatSla() {
  return (
    <div className="bg-white flex-[1_0_42px] h-full min-w-px relative rounded-[12px]" data-name="Giám sát SLA">
      <div className="content-stretch flex flex-col gap-[15px] items-start overflow-clip p-[20px] relative rounded-[inherit] size-full">
        <TieuDSla />
        <PhanBSla />
        <CacMcSla />
        <TrngThaiuTien />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function TngQuanVnHanh() {
  return (
    <div className="content-stretch flex gap-[20px] h-[254px] items-start overflow-clip relative shrink-0 w-full" data-name="Tổng quan vận hành">
      <CongSutHub />
      <GiamSatSla />
    </div>
  );
}

function Siren1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="siren">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="siren">
          <path d={svgPaths.p593cd00} id="Vector" stroke="#D14343" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function TinHiuCnhBao() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Tín hiệu cảnh báo">
      <Siren1 />
    </div>
  );
}

function ThongBao() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Thông báo">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#d14343] text-[13px]">6 đơn có nguy cơ vi phạm SLA cao</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#8e5656] text-[12px]">Ưu tiên theo thời gian còn lại.</p>
    </div>
  );
}

function HnGnNht() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-normal gap-[10px] items-center overflow-clip relative shrink-0 whitespace-nowrap" data-name="Hạn gần nhất">
      <p className="font-['Inter:Regular',sans-serif] leading-[1.45] not-italic relative shrink-0 text-[#8e5656] text-[12px]">Đến hạn sớm nhất</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#d14343] text-[19px]">00:12:38</p>
    </div>
  );
}

function CnhBaouTien() {
  return (
    <div className="bg-[#fff0ef] h-[58px] relative shrink-0 w-full" data-name="Cảnh báo ưu tiên">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[20px] relative rounded-[inherit] size-full">
        <TinHiuCnhBao />
        <ThongBao />
        <HnGnNht />
      </div>
      <div aria-hidden className="absolute border-[#f2cbc8] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SDnKhn() {
  return (
    <div className="bg-[#fff0ef] content-stretch flex items-start overflow-clip px-[7px] py-[3px] relative rounded-[6px] shrink-0" data-name="Số đơn khẩn">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] not-italic relative shrink-0 text-[#d14343] text-[12px] whitespace-nowrap">6 đơn</p>
    </div>
  );
}

function TenHangDi() {
  return (
    <div className="content-stretch flex gap-[9px] items-center overflow-clip relative shrink-0" data-name="Tên hàng đợi">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[17px] whitespace-nowrap">Hàng đợi khẩn cấp</p>
      <SDnKhn />
    </div>
  );
}

function NiDungTieuD() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0" data-name="Nội dung tiêu đề">
      <TenHangDi />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Dưới 60 phút</p>
    </div>
  );
}

function ArrowUpNarrowWide() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="arrow-up-narrow-wide">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="arrow-up-narrow-wide">
          <path d={svgPaths.p414ba80} id="Vector" stroke="#65768A" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function ThTHinTh() {
  return (
    <div className="content-stretch flex gap-[7px] items-center overflow-clip relative shrink-0" data-name="Thứ tự hiển thị">
      <ArrowUpNarrowWide />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#65768a] text-[12px] whitespace-nowrap">Sắp xếp: SLA gần nhất</p>
    </div>
  );
}

function TieuDHangDi() {
  return (
    <div className="bg-[#f6f8fa] content-stretch flex h-[72px] items-center justify-between overflow-clip px-[20px] relative shrink-0 w-full" data-name="Tiêu đề hàng đợi">
      <NiDungTieuD />
      <ThTHinTh />
    </div>
  );
}

function TieuDCt() {
  return (
    <div className="bg-[#f6f8fa] h-[36px] relative shrink-0 w-full" data-name="Tiêu đề cột">
      <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[20px] items-center leading-[1.45] not-italic overflow-clip px-[20px] relative rounded-[inherit] size-full text-[#65768a] text-[12px]">
        <p className="relative shrink-0 w-[206px]">Mã đơn</p>
        <p className="flex-[1_0_0] min-w-px relative">Khu vực giao</p>
        <p className="relative shrink-0 w-[214px]">SLA còn lại</p>
        <p className="relative shrink-0 w-[150px]">Trạng thái SLA</p>
        <p className="relative shrink-0 w-[176px]">Hành động</p>
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Package2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="package">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="package">
          <path d={svgPaths.p6cc5200} id="Vector" stroke="#65768A" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function KyHiuDn() {
  return (
    <div className="bg-[#f0f4f7] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[30px]" data-name="Ký hiệu đơn">
      <Package2 />
    </div>
  );
}

function DnhDanh() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-semibold gap-[5px] items-start leading-[1.45] overflow-clip relative shrink-0 whitespace-nowrap" data-name="Định danh">
      <p className="font-['Roboto_Mono:SemiBold',sans-serif] relative shrink-0 text-[#142b3b] text-[13px]">DH-Q7-08421</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] not-italic relative shrink-0 text-[#d14343] text-[12px]">Xử lý trước</p>
    </div>
  );
}

function MaDn() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-[206px]" data-name="Mã đơn">
      <KyHiuDn />
      <DnhDanh />
    </div>
  );
}

function KhuVcGiao() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative" data-name="Khu vực giao">
      <p className="relative shrink-0 text-[#142b3b] text-[13px] w-full">Tân Thuận Đông, Quận 7</p>
      <p className="relative shrink-0 text-[#657684] text-[12px] w-full">Đường Huỳnh Tấn Phát</p>
    </div>
  );
}

function Timer() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="timer">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g id="timer">
          <path d={svgPaths.p2ff45900} id="Vector" stroke="#D14343" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function DmNgcSla() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-[214px]" data-name="Đếm ngược SLA">
      <Timer />
      <p className="[word-break:break-word] font-['Roboto_Mono:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#d14343] text-[21px] tracking-[-0.5px] whitespace-nowrap">00:12:38</p>
    </div>
  );
}

function TriangleAlert1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="triangle-alert">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="triangle-alert">
          <path d={svgPaths.p27077b00} id="Vector" stroke="#D14343" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function NhanNguyC() {
  return (
    <div className="bg-[#fff0ef] content-stretch flex gap-[6px] items-center overflow-clip px-[9px] py-[6px] relative rounded-[6px] shrink-0" data-name="Nhãn nguy cơ">
      <TriangleAlert1 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#d14343] text-[12px] whitespace-nowrap">Nguy cơ cao</p>
    </div>
  );
}

function McRiRo() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[150px]" data-name="Mức rủi ro">
      <NhanNguyC />
    </div>
  );
}

function ArrowUpRight() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="arrow-up-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="arrow-up-right">
          <path d={svgPaths.p1908cf00} id="Vector" stroke="white" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function DiuPhiNgay() {
  return (
    <div className="bg-[#087f8c] content-stretch flex h-[33px] items-center justify-between overflow-clip px-[12px] relative rounded-[6px] shrink-0 w-full" data-name="Điều phối ngay">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Điều phối</p>
      <ArrowUpRight />
    </div>
  );
}

function DiuPhiDn() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center overflow-clip relative shrink-0 w-[176px]" data-name="Điều phối đơn">
      <DiuPhiNgay />
    </div>
  );
}

function DnKhnCp() {
  return (
    <div className="bg-[#fffaf9] h-[70px] relative shrink-0 w-full" data-name="Đơn khẩn cấp">
      <div className="content-stretch flex gap-[20px] items-center overflow-clip px-[20px] relative rounded-[inherit] size-full">
        <MaDn />
        <KhuVcGiao />
        <DmNgcSla />
        <McRiRo />
        <DiuPhiDn />
      </div>
      <div aria-hidden className="absolute border-[#f2cbc8] border-b border-l-3 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Package3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="package">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="package">
          <path d={svgPaths.p6cc5200} id="Vector" stroke="#65768A" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function KyHiuDn1() {
  return (
    <div className="bg-[#f0f4f7] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[30px]" data-name="Ký hiệu đơn">
      <Package3 />
    </div>
  );
}

function DnhDanh1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Định danh">
      <p className="[word-break:break-word] font-['Roboto_Mono:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">DH-Q7-08436</p>
    </div>
  );
}

function MaDn1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-[206px]" data-name="Mã đơn">
      <KyHiuDn1 />
      <DnhDanh1 />
    </div>
  );
}

function KhuVcGiao1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative" data-name="Khu vực giao">
      <p className="relative shrink-0 text-[#142b3b] text-[13px] w-full">Tân Kiểng, Quận 7</p>
      <p className="relative shrink-0 text-[#657684] text-[12px] w-full">Đường Lê Văn Lương</p>
    </div>
  );
}

function Timer1() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="timer">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g id="timer">
          <path d={svgPaths.p2ff45900} id="Vector" stroke="#D14343" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function DmNgcSla1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-[214px]" data-name="Đếm ngược SLA">
      <Timer1 />
      <p className="[word-break:break-word] font-['Roboto_Mono:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#d14343] text-[21px] tracking-[-0.5px] whitespace-nowrap">00:21:05</p>
    </div>
  );
}

function TriangleAlert2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="triangle-alert">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="triangle-alert">
          <path d={svgPaths.p27077b00} id="Vector" stroke="#D14343" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function NhanNguyC1() {
  return (
    <div className="bg-[#fff0ef] content-stretch flex gap-[6px] items-center overflow-clip px-[9px] py-[6px] relative rounded-[6px] shrink-0" data-name="Nhãn nguy cơ">
      <TriangleAlert2 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#d14343] text-[12px] whitespace-nowrap">Nguy cơ cao</p>
    </div>
  );
}

function McRiRo1() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[150px]" data-name="Mức rủi ro">
      <NhanNguyC1 />
    </div>
  );
}

function ArrowUpRight1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="arrow-up-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="arrow-up-right">
          <path d={svgPaths.p1908cf00} id="Vector" stroke="white" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function DiuPhiNgay1() {
  return (
    <div className="bg-[#087f8c] content-stretch flex h-[33px] items-center justify-between overflow-clip px-[12px] relative rounded-[6px] shrink-0 w-full" data-name="Điều phối ngay">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Điều phối</p>
      <ArrowUpRight1 />
    </div>
  );
}

function DiuPhiDn1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center overflow-clip relative shrink-0 w-[176px]" data-name="Điều phối đơn">
      <DiuPhiNgay1 />
    </div>
  );
}

function DnKhnCp1() {
  return (
    <div className="bg-white h-[70px] relative shrink-0 w-full" data-name="Đơn khẩn cấp">
      <div className="content-stretch flex gap-[20px] items-center overflow-clip px-[20px] relative rounded-[inherit] size-full">
        <MaDn1 />
        <KhuVcGiao1 />
        <DmNgcSla1 />
        <McRiRo1 />
        <DiuPhiDn1 />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Package4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="package">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="package">
          <path d={svgPaths.p6cc5200} id="Vector" stroke="#65768A" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function KyHiuDn2() {
  return (
    <div className="bg-[#f0f4f7] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[30px]" data-name="Ký hiệu đơn">
      <Package4 />
    </div>
  );
}

function DnhDanh2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Định danh">
      <p className="[word-break:break-word] font-['Roboto_Mono:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">DH-Q7-08452</p>
    </div>
  );
}

function MaDn2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-[206px]" data-name="Mã đơn">
      <KyHiuDn2 />
      <DnhDanh2 />
    </div>
  );
}

function KhuVcGiao2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative" data-name="Khu vực giao">
      <p className="relative shrink-0 text-[#142b3b] text-[13px] w-full">Tân Phong, Quận 7</p>
      <p className="relative shrink-0 text-[#657684] text-[12px] w-full">Đường Nguyễn Thị Thập</p>
    </div>
  );
}

function Timer2() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="timer">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g id="timer">
          <path d={svgPaths.p2ff45900} id="Vector" stroke="#D14343" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function DmNgcSla2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-[214px]" data-name="Đếm ngược SLA">
      <Timer2 />
      <p className="[word-break:break-word] font-['Roboto_Mono:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#d14343] text-[21px] tracking-[-0.5px] whitespace-nowrap">00:34:12</p>
    </div>
  );
}

function TriangleAlert3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="triangle-alert">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="triangle-alert">
          <path d={svgPaths.p27077b00} id="Vector" stroke="#D14343" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function NhanNguyC2() {
  return (
    <div className="bg-[#fff0ef] content-stretch flex gap-[6px] items-center overflow-clip px-[9px] py-[6px] relative rounded-[6px] shrink-0" data-name="Nhãn nguy cơ">
      <TriangleAlert3 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#d14343] text-[12px] whitespace-nowrap">Nguy cơ cao</p>
    </div>
  );
}

function McRiRo2() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[150px]" data-name="Mức rủi ro">
      <NhanNguyC2 />
    </div>
  );
}

function ArrowUpRight2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="arrow-up-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="arrow-up-right">
          <path d={svgPaths.p1908cf00} id="Vector" stroke="white" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function DiuPhiNgay2() {
  return (
    <div className="bg-[#087f8c] content-stretch flex h-[33px] items-center justify-between overflow-clip px-[12px] relative rounded-[6px] shrink-0 w-full" data-name="Điều phối ngay">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Điều phối</p>
      <ArrowUpRight2 />
    </div>
  );
}

function DiuPhiDn2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center overflow-clip relative shrink-0 w-[176px]" data-name="Điều phối đơn">
      <DiuPhiNgay2 />
    </div>
  );
}

function DnKhnCp2() {
  return (
    <div className="bg-white h-[70px] relative shrink-0 w-full" data-name="Đơn khẩn cấp">
      <div className="content-stretch flex gap-[20px] items-center overflow-clip px-[20px] relative rounded-[inherit] size-full">
        <MaDn2 />
        <KhuVcGiao2 />
        <DmNgcSla2 />
        <McRiRo2 />
        <DiuPhiDn2 />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Package5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="package">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="package">
          <path d={svgPaths.p6cc5200} id="Vector" stroke="#65768A" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function KyHiuDn3() {
  return (
    <div className="bg-[#f0f4f7] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[30px]" data-name="Ký hiệu đơn">
      <Package5 />
    </div>
  );
}

function DnhDanh3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Định danh">
      <p className="[word-break:break-word] font-['Roboto_Mono:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">DH-Q7-08468</p>
    </div>
  );
}

function MaDn3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-[206px]" data-name="Mã đơn">
      <KyHiuDn3 />
      <DnhDanh3 />
    </div>
  );
}

function KhuVcGiao3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative" data-name="Khu vực giao">
      <p className="relative shrink-0 text-[#142b3b] text-[13px] w-full">Tân Phú, Quận 7</p>
      <p className="relative shrink-0 text-[#657684] text-[12px] w-full">Đường Nguyễn Lương Bằng</p>
    </div>
  );
}

function Timer3() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="timer">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g id="timer">
          <path d={svgPaths.p2ff45900} id="Vector" stroke="#D14343" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function DmNgcSla3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-[214px]" data-name="Đếm ngược SLA">
      <Timer3 />
      <p className="[word-break:break-word] font-['Roboto_Mono:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#d14343] text-[21px] tracking-[-0.5px] whitespace-nowrap">00:42:26</p>
    </div>
  );
}

function TriangleAlert4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="triangle-alert">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="triangle-alert">
          <path d={svgPaths.p27077b00} id="Vector" stroke="#D14343" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function NhanNguyC3() {
  return (
    <div className="bg-[#fff0ef] content-stretch flex gap-[6px] items-center overflow-clip px-[9px] py-[6px] relative rounded-[6px] shrink-0" data-name="Nhãn nguy cơ">
      <TriangleAlert4 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#d14343] text-[12px] whitespace-nowrap">Nguy cơ cao</p>
    </div>
  );
}

function McRiRo3() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[150px]" data-name="Mức rủi ro">
      <NhanNguyC3 />
    </div>
  );
}

function ArrowUpRight3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="arrow-up-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="arrow-up-right">
          <path d={svgPaths.p1908cf00} id="Vector" stroke="white" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function DiuPhiNgay3() {
  return (
    <div className="bg-[#087f8c] content-stretch flex h-[33px] items-center justify-between overflow-clip px-[12px] relative rounded-[6px] shrink-0 w-full" data-name="Điều phối ngay">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Điều phối</p>
      <ArrowUpRight3 />
    </div>
  );
}

function DiuPhiDn3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center overflow-clip relative shrink-0 w-[176px]" data-name="Điều phối đơn">
      <DiuPhiNgay3 />
    </div>
  );
}

function DnKhnCp3() {
  return (
    <div className="bg-white h-[70px] relative shrink-0 w-full" data-name="Đơn khẩn cấp">
      <div className="content-stretch flex gap-[20px] items-center overflow-clip px-[20px] relative rounded-[inherit] size-full">
        <MaDn3 />
        <KhuVcGiao3 />
        <DmNgcSla3 />
        <McRiRo3 />
        <DiuPhiDn3 />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Package6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="package">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="package">
          <path d={svgPaths.p6cc5200} id="Vector" stroke="#65768A" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function KyHiuDn4() {
  return (
    <div className="bg-[#f0f4f7] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[30px]" data-name="Ký hiệu đơn">
      <Package6 />
    </div>
  );
}

function DnhDanh4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Định danh">
      <p className="[word-break:break-word] font-['Roboto_Mono:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">DH-Q7-08475</p>
    </div>
  );
}

function MaDn4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-[206px]" data-name="Mã đơn">
      <KyHiuDn4 />
      <DnhDanh4 />
    </div>
  );
}

function KhuVcGiao4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative" data-name="Khu vực giao">
      <p className="relative shrink-0 text-[#142b3b] text-[13px] w-full">Phú Mỹ, Quận 7</p>
      <p className="relative shrink-0 text-[#657684] text-[12px] w-full">Đường Hoàng Quốc Việt</p>
    </div>
  );
}

function Timer4() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="timer">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g id="timer">
          <path d={svgPaths.p2ff45900} id="Vector" stroke="#D14343" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function DmNgcSla4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-[214px]" data-name="Đếm ngược SLA">
      <Timer4 />
      <p className="[word-break:break-word] font-['Roboto_Mono:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#d14343] text-[21px] tracking-[-0.5px] whitespace-nowrap">00:49:10</p>
    </div>
  );
}

function TriangleAlert5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="triangle-alert">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="triangle-alert">
          <path d={svgPaths.p27077b00} id="Vector" stroke="#D14343" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function NhanNguyC4() {
  return (
    <div className="bg-[#fff0ef] content-stretch flex gap-[6px] items-center overflow-clip px-[9px] py-[6px] relative rounded-[6px] shrink-0" data-name="Nhãn nguy cơ">
      <TriangleAlert5 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#d14343] text-[12px] whitespace-nowrap">Nguy cơ cao</p>
    </div>
  );
}

function McRiRo4() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[150px]" data-name="Mức rủi ro">
      <NhanNguyC4 />
    </div>
  );
}

function ArrowUpRight4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="arrow-up-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="arrow-up-right">
          <path d={svgPaths.p1908cf00} id="Vector" stroke="white" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function DiuPhiNgay4() {
  return (
    <div className="bg-[#087f8c] content-stretch flex h-[33px] items-center justify-between overflow-clip px-[12px] relative rounded-[6px] shrink-0 w-full" data-name="Điều phối ngay">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Điều phối</p>
      <ArrowUpRight4 />
    </div>
  );
}

function DiuPhiDn4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center overflow-clip relative shrink-0 w-[176px]" data-name="Điều phối đơn">
      <DiuPhiNgay4 />
    </div>
  );
}

function DnKhnCp4() {
  return (
    <div className="bg-white h-[70px] relative shrink-0 w-full" data-name="Đơn khẩn cấp">
      <div className="content-stretch flex gap-[20px] items-center overflow-clip px-[20px] relative rounded-[inherit] size-full">
        <MaDn4 />
        <KhuVcGiao4 />
        <DmNgcSla4 />
        <McRiRo4 />
        <DiuPhiDn4 />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Package7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="package">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="package">
          <path d={svgPaths.p6cc5200} id="Vector" stroke="#65768A" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function KyHiuDn5() {
  return (
    <div className="bg-[#f0f4f7] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[30px]" data-name="Ký hiệu đơn">
      <Package7 />
    </div>
  );
}

function DnhDanh5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Định danh">
      <p className="[word-break:break-word] font-['Roboto_Mono:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">DH-Q7-08489</p>
    </div>
  );
}

function MaDn5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-[206px]" data-name="Mã đơn">
      <KyHiuDn5 />
      <DnhDanh5 />
    </div>
  );
}

function KhuVcGiao5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative" data-name="Khu vực giao">
      <p className="relative shrink-0 text-[#142b3b] text-[13px] w-full">Phú Xuân, Nhà Bè</p>
      <p className="relative shrink-0 text-[#657684] text-[12px] w-full">Đường Nguyễn Bình</p>
    </div>
  );
}

function Timer5() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="timer">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g id="timer">
          <path d={svgPaths.p2ff45900} id="Vector" stroke="#D14343" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function DmNgcSla5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-[214px]" data-name="Đếm ngược SLA">
      <Timer5 />
      <p className="[word-break:break-word] font-['Roboto_Mono:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#d14343] text-[21px] tracking-[-0.5px] whitespace-nowrap">00:56:44</p>
    </div>
  );
}

function TriangleAlert6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="triangle-alert">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="triangle-alert">
          <path d={svgPaths.p27077b00} id="Vector" stroke="#D14343" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function NhanNguyC5() {
  return (
    <div className="bg-[#fff0ef] content-stretch flex gap-[6px] items-center overflow-clip px-[9px] py-[6px] relative rounded-[6px] shrink-0" data-name="Nhãn nguy cơ">
      <TriangleAlert6 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#d14343] text-[12px] whitespace-nowrap">Nguy cơ cao</p>
    </div>
  );
}

function McRiRo5() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[150px]" data-name="Mức rủi ro">
      <NhanNguyC5 />
    </div>
  );
}

function ArrowUpRight5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="arrow-up-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="arrow-up-right">
          <path d={svgPaths.p1908cf00} id="Vector" stroke="white" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function DiuPhiNgay5() {
  return (
    <div className="bg-[#087f8c] content-stretch flex h-[33px] items-center justify-between overflow-clip px-[12px] relative rounded-[6px] shrink-0 w-full" data-name="Điều phối ngay">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Điều phối</p>
      <ArrowUpRight5 />
    </div>
  );
}

function DiuPhiDn5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center overflow-clip relative shrink-0 w-[176px]" data-name="Điều phối đơn">
      <DiuPhiNgay5 />
    </div>
  );
}

function DnKhnCp5() {
  return (
    <div className="bg-white h-[70px] relative shrink-0 w-full" data-name="Đơn khẩn cấp">
      <div className="content-stretch flex gap-[20px] items-center overflow-clip px-[20px] relative rounded-[inherit] size-full">
        <MaDn5 />
        <KhuVcGiao5 />
        <DmNgcSla5 />
        <McRiRo5 />
        <DiuPhiDn5 />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TomTtHangDi() {
  return (
    <div className="[word-break:break-word] bg-[#f6f8fa] content-stretch flex font-['Inter:Regular',sans-serif] font-normal h-[38px] items-center justify-between not-italic overflow-clip px-[20px] relative shrink-0 text-[#657684] w-full whitespace-nowrap" data-name="Tóm tắt hàng đợi">
      <p className="leading-[0] relative shrink-0 text-[0px]">
        <span className="leading-[1.45] text-[12px]">{`Hiển thị `}</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] text-[#142b3b] text-[12px]">6 / 6 đơn khẩn cấp</span>
      </p>
      <p className="leading-[1.45] relative shrink-0 text-[12px]">Đồng hồ: giờ : phút : giây</p>
    </div>
  );
}

function HangDiKhnCp() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Hàng đợi khẩn cấp">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <CnhBaouTien />
        <TieuDHangDi />
        <TieuDCt />
        <DnKhnCp />
        <DnKhnCp1 />
        <DnKhnCp2 />
        <DnKhnCp3 />
        <DnKhnCp4 />
        <DnKhnCp5 />
        <TomTtHangDi />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ThongTinDLiu() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between leading-[1.45] not-italic overflow-clip relative shrink-0 text-[#657684] text-[12px] w-full whitespace-nowrap" data-name="Thông tin dữ liệu">
      <p className="relative shrink-0">Phạm vi: đơn đã tiếp nhận tại Hub Quận 7 trong ca hiện tại</p>
      <p className="relative shrink-0">Giờ Việt Nam · UTC+7</p>
    </div>
  );
}

function GiamSatCaTrc() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip pb-[24px] px-[28px] relative shrink-0 w-full" data-name="Giám sát ca trực">
      <TngQuanVnHanh />
      <HangDiKhnCp />
      <ThongTinDLiu />
    </div>
  );
}

function KhongGianDiuHanh() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Không gian điều hành">
      <ThongTinCaTrc />
      <GiamSatCaTrc />
    </div>
  );
}

export default function Scr02BanDiuHanhTrungTamHub() {
  return (
    <div className="bg-[#f0f4f7] content-stretch flex items-start relative size-full" data-name="SCR-02 · Bàn điều hành trung tâm Hub">
      <DiuHngHub />
      <KhongGianDiuHanh />
    </div>
  );
}