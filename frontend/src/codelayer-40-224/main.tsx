import svgPaths from "./svg-ts1tqqy41x";

function NhanTrngThai() {
  return (
    <div className="bg-[#fff0ef] content-stretch flex items-center overflow-clip px-[9px] py-[5px] relative rounded-[5px] shrink-0" data-name="Nhãn trạng thái">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#d14343] text-[12px] whitespace-nowrap">Kịch bản thay thế</p>
    </div>
  );
}

function NhanMinhHa() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Nhãn minh họa">
      <p className="[word-break:break-word] font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">SCR-06 / BIẾN THỂ</p>
      <NhanTrngThai />
    </div>
  );
}

function ChuThichKchBn() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Chú thích kịch bản">
      <NhanMinhHa />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] min-w-full not-italic relative shrink-0 text-[#142b3b] text-[22px] tracking-[-0.3px] w-[min-content]">Khi phát sinh giao thất bại</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[#657684] text-[13px] w-[min-content]">Minh họa khối ngoại lệ của một vận đơn khác. Không thuộc lịch sử hiện tại của VF261109-00842.</p>
    </div>
  );
}

function ShieldAlert() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="shield-alert">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="shield-alert">
          <path d={svgPaths.p597b500} id="Vector" stroke="#D14343" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function TieuD() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Tiêu đề">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[16px] whitespace-nowrap">Quản lý ngoại lệ</p>
      <ShieldAlert />
    </div>
  );
}

function Nhan() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 text-[12px]" data-name="Nhãn">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0">Số lần phát thất bại</p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0">failureCount</p>
    </div>
  );
}

function BDmNgoiL() {
  return (
    <div className="[word-break:break-word] bg-[#fff0ef] content-stretch flex items-center justify-between overflow-clip p-[14px] relative rounded-[6px] shrink-0 text-[#d14343] w-full whitespace-nowrap" data-name="Bộ đếm ngoại lệ">
      <Nhan />
      <p className="font-['Roboto_Mono:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[28px]">2</p>
    </div>
  );
}

function TngQuanNgoiL() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[18px] relative shrink-0 w-full" data-name="Tổng quan ngoại lệ">
      <TieuD />
      <p className="[word-break:break-word] font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">VF261106-00317</p>
      <BDmNgoiL />
    </div>
  );
}

function CircleX() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="circle-x">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g clipPath="url(#clip0_0_6)" id="circle-x">
          <path d={svgPaths.p122bf8c0} id="Vector" stroke="#D14343" strokeLinecap="round" />
        </g>
        <defs>
          <clipPath id="clip0_0_6">
            <rect fill="white" height="15" width="15" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LnPhat() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Lần phát">
      <CircleX />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">Lần phát 1</p>
    </div>
  );
}

function ThongTinLnPhat() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Thông tin lần phát">
      <LnPhat />
      <p className="[word-break:break-word] font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">06/11/2026 · 14:20:18</p>
    </div>
  );
}

function LyDoThtBi() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 w-full" data-name="Lý do thất bại">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">LÝ DO</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#142b3b] text-[13px] w-[min-content]">Không liên lạc được người nhận sau 3 cuộc gọi.</p>
    </div>
  );
}

function FileText() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="file-text">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="file-text">
          <path d={svgPaths.p2e70ac80} id="Vector" stroke="#657684" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function BienBn() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-name="Biên bản">
      <FileText />
      <p className="[word-break:break-word] font-['Roboto_Mono:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">BBXL-0611-014</p>
    </div>
  );
}

function MaBienBn() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Mã biên bản">
      <BienBn />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Đã ghi nhận</p>
    </div>
  );
}

function BienBnXLy() {
  return (
    <div className="bg-[#f6f8fa] relative rounded-[6px] shrink-0 w-full" data-name="Biên bản xử lý">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <MaBienBn />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] w-full">CSKH xác nhận lại số điện thoại; hẹn phát lại vào sáng 07/11/2026.</p>
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] w-full">CSKH_03 (Lê Mai) · 06/11/2026 15:05:22</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function LnPhatThtBi() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="Lần phát thất bại">
      <ThongTinLnPhat />
      <LyDoThtBi />
      <BienBnXLy />
    </div>
  );
}

function CircleX1() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="circle-x">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g clipPath="url(#clip0_0_6)" id="circle-x">
          <path d={svgPaths.p122bf8c0} id="Vector" stroke="#D14343" strokeLinecap="round" />
        </g>
        <defs>
          <clipPath id="clip0_0_6">
            <rect fill="white" height="15" width="15" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LnPhat1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Lần phát">
      <CircleX1 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">Lần phát 2</p>
    </div>
  );
}

function ThongTinLnPhat1() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Thông tin lần phát">
      <LnPhat1 />
      <p className="[word-break:break-word] font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">07/11/2026 · 09:35:46</p>
    </div>
  );
}

function LyDoThtBi1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 w-full" data-name="Lý do thất bại">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">LÝ DO</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#142b3b] text-[13px] w-[min-content]">Người nhận vắng mặt tại địa chỉ, đề nghị đổi lịch.</p>
    </div>
  );
}

function FileText1() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="file-text">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="file-text">
          <path d={svgPaths.p2e70ac80} id="Vector" stroke="#657684" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function BienBn1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-name="Biên bản">
      <FileText1 />
      <p className="[word-break:break-word] font-['Roboto_Mono:SemiBold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">BBXL-0711-008</p>
    </div>
  );
}

function MaBienBn1() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Mã biên bản">
      <BienBn1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Đã ghi nhận</p>
    </div>
  );
}

function BienBnXLy1() {
  return (
    <div className="bg-[#f6f8fa] relative rounded-[6px] shrink-0 w-full" data-name="Biên bản xử lý">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <MaBienBn1 />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] w-full">Đã xác nhận lịch giao mới 08/11, 09:00–12:00; điều phối giữ hàng tại bưu cục.</p>
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] w-full">DISPATCHER_02 (Vũ Nam) · 07/11/2026 10:10:08</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function LnPhatThtBi1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="Lần phát thất bại">
      <ThongTinLnPhat1 />
      <LyDoThtBi1 />
      <BienBnXLy1 />
    </div>
  );
}

function LchSThtBi() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[18px] relative shrink-0 w-full" data-name="Lịch sử thất bại">
      <LnPhatThtBi />
      <div className="bg-[#dce4ea] h-px relative shrink-0 w-full" data-name="Đường phân chia" />
      <LnPhatThtBi1 />
    </div>
  );
}

function LockKeyhole() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="lock-keyhole">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g id="lock-keyhole">
          <path d={svgPaths.p18bdda00} id="Vector" stroke="#657684" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function TinhToanVn() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tính toàn vẹn">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[20px] py-[14px] relative rounded-[inherit] size-full">
        <LockKeyhole />
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px not-italic relative text-[#657684] text-[12px]">Giữ nguyên từng lần thất bại và biên bản để truy vết, đối soát.</p>
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function ChiTitNgoiLMinhHa() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Chi tiết ngoại lệ minh họa">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <TngQuanNgoiL />
        <div className="bg-[#dce4ea] h-px relative shrink-0 w-full" data-name="Đường phân chia" />
        <LchSThtBi />
        <TinhToanVn />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

export default function NgoiLKchBnThayTh() {
  return (
    <div className="bg-[#f0f4f7] content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[20px] relative rounded-[10px] size-full" data-name="Ngoại lệ · Kịch bản thay thế">
      <ChuThichKchBn />
      <ChiTitNgoiLMinhHa />
    </div>
  );
}