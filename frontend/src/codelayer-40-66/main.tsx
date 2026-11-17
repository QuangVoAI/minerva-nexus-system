import svgPaths from "./svg-m20rp2w9f2";

function IosSignal() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="ios-signal">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="ios-signal">
          <path clipRule="evenodd" d={svgPaths.pc062070} fill="#142B3B" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IosWifiSignal() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="ios-wifi-signal">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="ios-wifi-signal">
          <path clipRule="evenodd" d={svgPaths.p3b876d80} fill="#142B3B" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IosBatteryFull() {
  return (
    <div className="h-[18px] relative shrink-0 w-[25px]" data-name="ios-battery-full">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 25 18" width="25">
        <g id="ios-battery-full">
          <path d={svgPaths.pe73300} fill="#142B3B" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function KtNi() {
  return (
    <div className="content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0" data-name="Kết nối">
      <IosSignal />
      <IosWifiSignal />
      <IosBatteryFull />
    </div>
  );
}

function ThanhTrngThai() {
  return (
    <div className="bg-white h-[48px] relative shrink-0 w-full" data-name="Thanh trạng thái">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[24px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[14px] whitespace-nowrap">9:41</p>
        <KtNi />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Boxes() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="boxes">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="boxes">
          <path d={svgPaths.p3389fe00} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function DuHiuHub() {
  return (
    <div className="bg-[#087f8c] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[34px]" data-name="Dấu hiệu Hub">
      <Boxes />
    </div>
  );
}

function ThngHiu() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Thương hiệu">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[18px] text-white tracking-[-0.5px]">HUB / OPS</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#b8d0db] text-[13px] tracking-[1.5px]">Vận hành logistics</p>
    </div>
  );
}

function NhnDinHub() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Nhận diện Hub">
      <DuHiuHub />
      <ThngHiu />
    </div>
  );
}

function ShieldCheck() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="shield-check">
          <path d={svgPaths.p26f66600} id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function ThngHiuVaBoMt() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Thương hiệu và bảo mật">
      <NhnDinHub />
      <ShieldCheck />
    </div>
  );
}

function TieuDDangNhp() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="Tiêu đề đăng nhập">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[28px] text-white tracking-[-0.8px] w-[min-content]">Sẵn sàng cho ngày mới.</p>
    </div>
  );
}

function NhnDinCng() {
  return (
    <div className="bg-[#082e40] content-stretch flex flex-col gap-[24px] items-start overflow-clip pb-[24px] pt-[20px] px-[24px] relative shrink-0 w-full" data-name="Nhận diện cổng">
      <ThngHiuVaBoMt />
      <TieuDDangNhp />
    </div>
  );
}

function Warehouse() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="warehouse">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="warehouse">
          <path d={svgPaths.p2b895580} id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function ThongTinHub() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Thông tin Hub">
      <p className="relative shrink-0 text-[#142b3b] text-[14px]">Hub Q7-01</p>
      <p className="relative shrink-0 text-[#657684] text-[13px]">Khu chế xuất Tân Thuận</p>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="chevron-down">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="#657684" strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function HubDangChn() {
  return (
    <div className="bg-white h-[64px] relative rounded-[12px] shrink-0 w-full" data-name="Hub đang chọn">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[14px] relative rounded-[inherit] size-full">
        <Warehouse />
        <ThongTinHub />
        <ChevronDown />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ChnHub() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Chọn Hub">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">Chi nhánh / Bưu cục vận hành</p>
      <HubDangChn />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[#657684] text-[13px] w-[min-content]">Chỉ truy cập dữ liệu của Hub này.</p>
    </div>
  );
}

function ONhpLiu() {
  return (
    <div className="bg-white h-[50px] relative rounded-[12px] shrink-0 w-full" data-name="Ô nhập liệu">
      <div className="content-stretch flex items-center overflow-clip px-[14px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px not-italic relative text-[#142b3b] text-[14px]">TX045</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function TrngDangNhp() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Trường đăng nhập">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">Tên đăng nhập / Mã nhân viên</p>
      <ONhpLiu />
    </div>
  );
}

function EyeOff() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="eye-off">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_8)" id="eye-off">
          <path d={svgPaths.pa663f80} id="Vector" stroke="#657684" strokeLinecap="round" strokeWidth="1.8" />
        </g>
        <defs>
          <clipPath id="clip0_0_8">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ONhpLiu1() {
  return (
    <div className="bg-white h-[50px] relative rounded-[12px] shrink-0 w-full" data-name="Ô nhập liệu">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[14px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px not-italic relative text-[#142b3b] text-[14px] tracking-[3px]">••••••••••</p>
        <EyeOff />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function TrngDangNhp1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Trường đăng nhập">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">Mật khẩu</p>
      <ONhpLiu1 />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="arrow-right">
          <path d={svgPaths.p394a7400} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function DangNhp() {
  return (
    <div
      onClick={() => { window.location.hash = "driver"; }}
      className="bg-[#087f8c] hover:bg-[#066570] cursor-pointer transition-colors content-stretch flex gap-[10px] h-[50px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full"
      data-name="Đăng nhập"
    >
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Đăng nhập</p>
      <ArrowRight />
    </div>
  );
}

function FormDangNhp() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full" data-name="Form đăng nhập">
      <ChnHub />
      <TrngDangNhp />
      <TrngDangNhp1 />
      <DangNhp />
    </div>
  );
}

function Headset() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="headset">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g clipPath="url(#clip0_0_4)" id="headset">
          <path d={svgPaths.p39cd1980} id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.8" />
        </g>
        <defs>
          <clipPath id="clip0_0_4">
            <rect fill="white" height="15" width="15" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LienHHTr() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-name="Liên hệ hỗ trợ">
      <Headset />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[13px] whitespace-nowrap">Cần hỗ trợ? Liên hệ quản trị Hub</p>
    </div>
  );
}

function HTrTaiKhon() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Hỗ trợ tài khoản">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[#657684] text-[13px] w-[min-content]">Tài khoản do IT / Admin cấp.</p>
      <LienHHTr />
    </div>
  );
}

function NiDungDangNhp() {
  return (
    <div className="bg-white relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Nội dung đăng nhập">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip pb-[24px] pt-[28px] px-[24px] relative rounded-[inherit] size-full">
        <FormDangNhp />
        <div className="bg-[#dce4ea] h-px relative shrink-0 w-full" data-name="Phân cách" />
        <HTrTaiKhon />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-solid border-t inset-0 pointer-events-none rounded-tl-[16px] rounded-tr-[16px]" />
    </div>
  );
}

function ChanTrang() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip pb-[24px] pt-[8px] relative shrink-0 w-full" data-name="Chân trang">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[13px] whitespace-nowrap">© 2026 HUB / OPS</p>
    </div>
  );
}

export default function Scr01DangNhpMobileTaiX() {
  return (
    <div className="bg-[#f0f4f7] content-stretch flex flex-col items-start relative size-full" data-name="SCR-01 · Đăng nhập mobile tài xế">
      <ThanhTrngThai />
      <NhnDinCng />
      <NiDungDangNhp />
      <ChanTrang />
      <div className="-translate-x-1/2 absolute bg-[#142b3b] bottom-[14px] h-[4px] left-1/2 rounded-[100px] w-[128px]" data-name="Thanh màn hình chính" />
    </div>
  );
}