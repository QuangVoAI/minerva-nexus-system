import svgPaths from "./svg-b27q20tzi6";

function GiiThiu() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic overflow-clip relative shrink-0 w-[930px]" data-name="Giới thiệu">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#087f8c] text-[12px] tracking-[1.5px] whitespace-nowrap">SCR-01 / TRẠNG THÁI GIAO DIỆN</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#082e40] text-[30px] tracking-[-0.8px] w-[min-content]">Rõ nguyên nhân. Đúng cách xử lý.</p>
    </div>
  );
}

function NhanDcT() {
  return (
    <div className="bg-[#e7f4f3] relative rounded-[100px] shrink-0" data-name="Nhãn đặc tả">
      <div className="content-stretch flex items-start overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">BIẾN THỂ FORM</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function TieuDBngTrngThai() {
  return (
    <div className="content-stretch flex items-end justify-between overflow-clip relative shrink-0 w-full" data-name="Tiêu đề bảng trạng thái">
      <GiiThiu />
      <NhanDcT />
    </div>
  );
}

function MoTTrngThai() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Mô tả trạng thái">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#082e40] text-[18px] w-full">Chọn Hub vận hành</p>
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
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Thông tin Hub">
      <p className="leading-[1.45] relative shrink-0 text-[#142b3b] text-[14px]">Hub Q7-01</p>
      <p className="leading-[normal] relative shrink-0 text-[#657684] text-[12px]">Khu chế xuất Tân Thuận</p>
    </div>
  );
}

function ChevronUp() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-up">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="chevron-up">
          <path d="M13.5 11.25L9 6.75L4.5 11.25" id="Vector" stroke="#657684" strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function HubDangChn() {
  return (
    <div className="bg-white h-[64px] relative rounded-[8px] shrink-0 w-full" data-name="Hub đang chọn">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[14px] relative rounded-[inherit] size-full">
        <Warehouse />
        <ThongTinHub />
        <ChevronUp />
      </div>
      <div aria-hidden className="absolute border border-[#087f8c] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ThongTinHub1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Thông tin Hub">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#087f8c] text-[14px]">Hub Q7-01</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#657684] text-[12px]">Khu chế xuất Tân Thuận</p>
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="check">
          <path d={svgPaths.p3901e500} id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function LaChnHub() {
  return (
    <div className="bg-[#e7f4f3] content-stretch flex gap-[12px] items-center overflow-clip p-[12px] relative rounded-[6px] shrink-0 w-full" data-name="Lựa chọn Hub">
      <ThongTinHub1 />
      <Check />
    </div>
  );
}

function ThongTinHub2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Thông tin Hub">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#142b3b] text-[14px]">Hub Q7-02</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#657684] text-[12px]">Phú Mỹ Hưng</p>
    </div>
  );
}

function LaChnHub1() {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip p-[12px] relative rounded-[6px] shrink-0 w-full" data-name="Lựa chọn Hub">
      <ThongTinHub2 />
    </div>
  );
}

function DanhSachHub() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Danh sách Hub">
      <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip p-[6px] relative rounded-[inherit] size-full">
        <LaChnHub />
        <LaChnHub1 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ChnHub() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Chọn Hub">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">Chi nhánh / Bưu cục vận hành</p>
      <HubDangChn />
      <DanhSachHub />
    </div>
  );
}

function ONhpLiu() {
  return (
    <div className="bg-white h-[50px] relative rounded-[8px] shrink-0 w-full" data-name="Ô nhập liệu">
      <div className="content-stretch flex items-center overflow-clip px-[14px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px not-italic relative text-[#142b3b] text-[14px]">NV0128</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
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
        <g clipPath="url(#clip0_0_14)" id="eye-off">
          <path d={svgPaths.pa663f80} id="Vector" stroke="#657684" strokeLinecap="round" strokeWidth="1.8" />
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

function ONhpLiu1() {
  return (
    <div className="bg-white h-[50px] relative rounded-[8px] shrink-0 w-full" data-name="Ô nhập liệu">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[14px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px not-italic relative text-[#142b3b] text-[14px] tracking-[3px]">••••••••••</p>
        <EyeOff />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
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
    <div className="bg-[#087f8c] content-stretch flex gap-[10px] h-[50px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Đăng nhập">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Đăng nhập</p>
      <ArrowRight />
    </div>
  );
}

function FormDangNhp() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full" data-name="Form đăng nhập">
      <ChnHub />
      <TrngDangNhp />
      <TrngDangNhp1 />
      <DangNhp />
    </div>
  );
}

function BinThForm() {
  return (
    <div className="bg-white flex-[1_0_58px] min-w-px relative rounded-[12px] self-stretch" data-name="Biến thể form">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[28px] relative rounded-[inherit] size-full">
        <MoTTrngThai />
        <FormDangNhp />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function MoTTrngThai1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Mô tả trạng thái">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#082e40] text-[18px] w-full">Thông tin đăng nhập không đúng</p>
    </div>
  );
}

function Warehouse1() {
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

function ThongTinHub3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Thông tin Hub">
      <p className="leading-[1.45] relative shrink-0 text-[#142b3b] text-[14px]">Hub Q7-01</p>
      <p className="leading-[normal] relative shrink-0 text-[#657684] text-[12px]">Khu chế xuất Tân Thuận</p>
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

function HubDangChn1() {
  return (
    <div className="bg-white h-[64px] relative rounded-[8px] shrink-0 w-full" data-name="Hub đang chọn">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[14px] relative rounded-[inherit] size-full">
        <Warehouse1 />
        <ThongTinHub3 />
        <ChevronDown />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ChnHub1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Chọn Hub">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">Chi nhánh / Bưu cục vận hành</p>
      <HubDangChn1 />
    </div>
  );
}

function ONhpLiu2() {
  return (
    <div className="bg-white h-[50px] relative rounded-[8px] shrink-0 w-full" data-name="Ô nhập liệu">
      <div className="content-stretch flex items-center overflow-clip px-[14px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px not-italic relative text-[#142b3b] text-[14px]">NV0128</p>
      </div>
      <div aria-hidden className="absolute border border-[#d14343] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TrngDangNhp2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Trường đăng nhập">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">Tên đăng nhập / Mã nhân viên</p>
      <ONhpLiu2 />
    </div>
  );
}

function Eye() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="eye">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="eye">
          <path d={svgPaths.p197a0df0} id="Vector" stroke="#657684" strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function ONhpLiu3() {
  return (
    <div className="bg-white h-[50px] relative rounded-[8px] shrink-0 w-full" data-name="Ô nhập liệu">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[14px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px not-italic relative text-[#142b3b] text-[14px]">Hub@2026</p>
        <Eye />
      </div>
      <div aria-hidden className="absolute border border-[#d14343] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TrngDangNhp3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Trường đăng nhập">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">Mật khẩu</p>
      <ONhpLiu3 />
    </div>
  );
}

function CircleAlert() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="circle-alert">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_6)" id="circle-alert">
          <path d={svgPaths.p3384e480} id="Vector" stroke="#D14343" strokeLinecap="round" strokeWidth="1.8" />
        </g>
        <defs>
          <clipPath id="clip0_0_6">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NiDungThongBao() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Nội dung thông báo">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#d14343] text-[13px] w-full">Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại.</p>
    </div>
  );
}

function ThongBao() {
  return (
    <div className="bg-[#fff0ef] relative rounded-[8px] shrink-0 w-full" data-name="Thông báo">
      <div className="content-stretch flex gap-[10px] items-start overflow-clip p-[14px] relative rounded-[inherit] size-full">
        <CircleAlert />
        <NiDungThongBao />
      </div>
      <div aria-hidden className="absolute border border-[#f2cbc8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ArrowRight1() {
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

function DangNhp1() {
  return (
    <div className="bg-[#087f8c] content-stretch flex gap-[10px] h-[50px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Đăng nhập">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Đăng nhập</p>
      <ArrowRight1 />
    </div>
  );
}

function FormDangNhp1() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full" data-name="Form đăng nhập">
      <ChnHub1 />
      <TrngDangNhp2 />
      <TrngDangNhp3 />
      <ThongBao />
      <DangNhp1 />
    </div>
  );
}

function BinThForm1() {
  return (
    <div className="bg-white flex-[1_0_58px] min-w-px relative rounded-[12px] self-stretch" data-name="Biến thể form">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[28px] relative rounded-[inherit] size-full">
        <MoTTrngThai1 />
        <FormDangNhp1 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ChnHubVaSaiThongTin() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Chọn Hub và sai thông tin">
      <BinThForm />
      <BinThForm1 />
    </div>
  );
}

function MoTTrngThai2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Mô tả trạng thái">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#082e40] text-[18px] w-full">Tài khoản bị vô hiệu hóa</p>
    </div>
  );
}

function Warehouse2() {
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

function ThongTinHub4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Thông tin Hub">
      <p className="leading-[1.45] relative shrink-0 text-[#142b3b] text-[14px]">Hub Q7-01</p>
      <p className="leading-[normal] relative shrink-0 text-[#657684] text-[12px]">Khu chế xuất Tân Thuận</p>
    </div>
  );
}

function ChevronDown1() {
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

function HubDangChn2() {
  return (
    <div className="bg-white h-[64px] relative rounded-[8px] shrink-0 w-full" data-name="Hub đang chọn">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[14px] relative rounded-[inherit] size-full">
        <Warehouse2 />
        <ThongTinHub4 />
        <ChevronDown1 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ChnHub2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Chọn Hub">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">Chi nhánh / Bưu cục vận hành</p>
      <HubDangChn2 />
    </div>
  );
}

function ONhpLiu4() {
  return (
    <div className="bg-white h-[50px] relative rounded-[8px] shrink-0 w-full" data-name="Ô nhập liệu">
      <div className="content-stretch flex items-center overflow-clip px-[14px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px not-italic relative text-[#142b3b] text-[14px]">NV0128</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TrngDangNhp4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Trường đăng nhập">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">Tên đăng nhập / Mã nhân viên</p>
      <ONhpLiu4 />
    </div>
  );
}

function EyeOff1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="eye-off">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_14)" id="eye-off">
          <path d={svgPaths.pa663f80} id="Vector" stroke="#657684" strokeLinecap="round" strokeWidth="1.8" />
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

function ONhpLiu5() {
  return (
    <div className="bg-white h-[50px] relative rounded-[8px] shrink-0 w-full" data-name="Ô nhập liệu">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[14px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px not-italic relative text-[#142b3b] text-[14px] tracking-[3px]">••••••••••</p>
        <EyeOff1 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TrngDangNhp5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Trường đăng nhập">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">Mật khẩu</p>
      <ONhpLiu5 />
    </div>
  );
}

function CircleAlert1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="circle-alert">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_6)" id="circle-alert">
          <path d={svgPaths.p3384e480} id="Vector" stroke="#D14343" strokeLinecap="round" strokeWidth="1.8" />
        </g>
        <defs>
          <clipPath id="clip0_0_6">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NiDungThongBao1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Nội dung thông báo">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#d14343] text-[13px] w-full">Tài khoản đã bị tạm khóa. Vui lòng liên hệ quản trị Hub</p>
    </div>
  );
}

function ThongBao1() {
  return (
    <div className="bg-[#fff0ef] relative rounded-[8px] shrink-0 w-full" data-name="Thông báo">
      <div className="content-stretch flex gap-[10px] items-start overflow-clip p-[14px] relative rounded-[inherit] size-full">
        <CircleAlert1 />
        <NiDungThongBao1 />
      </div>
      <div aria-hidden className="absolute border border-[#f2cbc8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ArrowRight2() {
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

function DangNhp2() {
  return (
    <div className="bg-[#087f8c] content-stretch flex gap-[10px] h-[50px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Đăng nhập">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Đăng nhập</p>
      <ArrowRight2 />
    </div>
  );
}

function FormDangNhp2() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full" data-name="Form đăng nhập">
      <ChnHub2 />
      <TrngDangNhp4 />
      <TrngDangNhp5 />
      <ThongBao1 />
      <DangNhp2 />
    </div>
  );
}

function BinThForm2() {
  return (
    <div className="bg-white flex-[1_0_58px] min-w-px relative rounded-[12px] self-stretch" data-name="Biến thể form">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[28px] relative rounded-[inherit] size-full">
        <MoTTrngThai2 />
        <FormDangNhp2 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function MoTTrngThai3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Mô tả trạng thái">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#082e40] text-[18px] w-full">Khóa bảo mật tạm thời</p>
    </div>
  );
}

function Warehouse3() {
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

function ThongTinHub5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Thông tin Hub">
      <p className="leading-[1.45] relative shrink-0 text-[#142b3b] text-[14px]">Hub Q7-01</p>
      <p className="leading-[normal] relative shrink-0 text-[#657684] text-[12px]">Khu chế xuất Tân Thuận</p>
    </div>
  );
}

function ChevronDown2() {
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

function HubDangChn3() {
  return (
    <div className="bg-white h-[64px] relative rounded-[8px] shrink-0 w-full" data-name="Hub đang chọn">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[14px] relative rounded-[inherit] size-full">
        <Warehouse3 />
        <ThongTinHub5 />
        <ChevronDown2 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ChnHub3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Chọn Hub">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">Chi nhánh / Bưu cục vận hành</p>
      <HubDangChn3 />
    </div>
  );
}

function ONhpLiu6() {
  return (
    <div className="bg-white h-[50px] relative rounded-[8px] shrink-0 w-full" data-name="Ô nhập liệu">
      <div className="content-stretch flex items-center overflow-clip px-[14px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px not-italic relative text-[#142b3b] text-[14px]">NV0128</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TrngDangNhp6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Trường đăng nhập">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">Tên đăng nhập / Mã nhân viên</p>
      <ONhpLiu6 />
    </div>
  );
}

function EyeOff2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="eye-off">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_14)" id="eye-off">
          <path d={svgPaths.pa663f80} id="Vector" stroke="#657684" strokeLinecap="round" strokeWidth="1.8" />
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

function ONhpLiu7() {
  return (
    <div className="bg-white h-[50px] relative rounded-[8px] shrink-0 w-full" data-name="Ô nhập liệu">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[14px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px not-italic relative text-[#142b3b] text-[14px] tracking-[3px]">••••••••••</p>
        <EyeOff2 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TrngDangNhp7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Trường đăng nhập">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">Mật khẩu</p>
      <ONhpLiu7 />
    </div>
  );
}

function Timer() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="timer">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="timer">
          <path d={svgPaths.p17131800} id="Vector" stroke="#F59E0B" strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function NiDungThongBao2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative text-[#8b5715] text-[13px]" data-name="Nội dung thông báo">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-full">Tạm ngừng đăng nhập trong 15 phút</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">Bạn đã nhập sai quá 5 lần. Vui lòng thử lại sau khi hết thời gian chờ.</p>
    </div>
  );
}

function ThongBao2() {
  return (
    <div className="bg-[#fff5de] relative rounded-[8px] shrink-0 w-full" data-name="Thông báo">
      <div className="content-stretch flex gap-[10px] items-start overflow-clip p-[14px] relative rounded-[inherit] size-full">
        <Timer />
        <NiDungThongBao2 />
      </div>
      <div aria-hidden className="absolute border border-[#f2d58e] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function LockKeyhole() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lock-keyhole">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="lock-keyhole">
          <path d={svgPaths.p2dab1a80} id="Vector" stroke="#657684" strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function DangNhp3() {
  return (
    <div className="bg-[#f0f4f7] h-[50px] relative rounded-[8px] shrink-0 w-full" data-name="Đăng nhập">
      <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[14px] whitespace-nowrap">Thử lại sau 14:59</p>
        <LockKeyhole />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function FormDangNhp3() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full" data-name="Form đăng nhập">
      <ChnHub3 />
      <TrngDangNhp6 />
      <TrngDangNhp7 />
      <ThongBao2 />
      <DangNhp3 />
    </div>
  );
}

function BinThForm3() {
  return (
    <div className="bg-white flex-[1_0_58px] min-w-px relative rounded-[12px] self-stretch" data-name="Biến thể form">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[28px] relative rounded-[inherit] size-full">
        <MoTTrngThai3 />
        <FormDangNhp3 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function KhoaTaiKhonVaKhoaBoMt() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Khóa tài khoản và khóa bảo mật">
      <BinThForm2 />
      <BinThForm3 />
    </div>
  );
}

export default function Scr01CacTrngThaiDangNhp() {
  return (
    <div className="bg-[#f0f4f7] content-stretch flex flex-col gap-[32px] items-start p-[48px] relative size-full" data-name="SCR-01 · Các trạng thái đăng nhập">
      <TieuDBngTrngThai />
      <ChnHubVaSaiThongTin />
      <KhoaTaiKhonVaKhoaBoMt />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#657684] text-[12px] w-full">Tài khoản bị tạm khóa: cần quản trị Hub xử lý. Khóa bảo mật: chờ đủ 15 phút để thử lại.</p>
    </div>
  );
}