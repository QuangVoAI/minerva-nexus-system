import svgPaths from "./svg-panmv2wlen";
import imgNhCaNha from "./9756db330bcff9fa4f08a21e555fb7f8cd2636cc.png";

function IosSignal() {
  return (
    <div className="h-[16px] relative shrink-0 w-[18px]" data-name="ios-signal">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 18 16" width="18">
        <g id="ios-signal">
          <path clipRule="evenodd" d={svgPaths.p3b981f50} fill="white" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IosWifiSignal() {
  return (
    <div className="h-[16px] relative shrink-0 w-[18px]" data-name="ios-wifi-signal">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 18 16" width="18">
        <g id="ios-wifi-signal">
          <path clipRule="evenodd" d={svgPaths.p271f6300} fill="white" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IosBatteryFull() {
  return (
    <div className="h-[16px] relative shrink-0 w-[26px]" data-name="ios-battery-full">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 26 16" width="26">
        <g id="ios-battery-full">
          <path d={svgPaths.p5766400} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TinHiuThitB() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-name="Tín hiệu thiết bị">
      <IosSignal />
      <IosWifiSignal />
      <IosBatteryFull />
    </div>
  );
}

function ThanhTrngThai() {
  return (
    <div className="bg-[#082e40] content-stretch flex h-[44px] items-center justify-between overflow-clip px-[24px] relative shrink-0 w-full" data-name="Thanh trạng thái">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">14:35</p>
      <TinHiuThitB />
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow-left">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="arrow-left">
          <path d={svgPaths.p177d0d00} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function TenManHinh() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px overflow-clip relative" data-name="Tên màn hình">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] not-italic relative shrink-0 text-[18px] text-white w-full">Báo giao thất bại</p>
    </div>
  );
}

function Headset() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="headset">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="headset">
          <path d={svgPaths.p379e775c} id="Vector" stroke="#55CECA" strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function DiuHng() {
  return (
    <div className="bg-[#082e40] h-[64px] relative shrink-0 w-full" data-name="Điều hướng">
      <div className="content-stretch flex gap-[14px] items-center overflow-clip px-[20px] relative rounded-[inherit] size-full">
        <ArrowLeft />
        <TenManHinh />
        <Headset />
      </div>
      <div aria-hidden className="absolute border-[#1e3a4e] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Package() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="package">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="package">
          <path d={svgPaths.p19b12c00} id="Vector" stroke="#175CD3" strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function DnHang() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Đơn hàng">
      <Package />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] not-italic relative shrink-0 text-[#182536] text-[16px] whitespace-nowrap">GHN • 8041 6295</p>
    </div>
  );
}

function MaVnDn() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Mã vận đơn">
      <DnHang />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#182536] text-[13px] whitespace-nowrap">COD 485.000đ</p>
    </div>
  );
}

function NgiNhn() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 w-full" data-name="Người nhận">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#182536] text-[14px] w-full">Nguyễn Minh Anh • 090 ••• 6828</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657386] text-[13px] w-full">28/12 Nguyễn Văn Đậu, P. 6, Bình Thạnh, TP.HCM</p>
    </div>
  );
}

function ThongTinDnHang() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Thông tin đơn hàng">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[20px] relative rounded-[inherit] size-full">
        <MaVnDn />
        <NgiNhn />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function SLn() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[1.45] not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="Số lần">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#182536] text-[15px]">Đang báo cáo lần 3/3</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657386] text-[13px]">2 lần trước</p>
    </div>
  );
}

function TinDBaLn() {
  return (
    <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Tiến độ ba lần">
      <div className="bg-[#087f8c] flex-[1_0_0] h-[5px] min-w-px relative rounded-[100px]" data-name="Mốc thất bại" />
      <div className="bg-[#087f8c] flex-[1_0_0] h-[5px] min-w-px relative rounded-[100px]" data-name="Mốc thất bại" />
      <div className="bg-[#e7f4f3] flex-[1_0_0] h-[5px] min-w-px relative rounded-[100px]" data-name="Mốc thất bại" />
    </div>
  );
}

function BDmLnThtBi() {
  return (
    <div className="bg-[#fff6e5] relative rounded-[12px] shrink-0 w-full" data-name="Bộ đếm lần thất bại">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <SLn />
        <TinDBaLn />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657386] text-[13px] w-full">Xác nhận khi báo cáo hợp lệ.</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function LnDangBaoCao() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Lần đang báo cáo">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[20px] py-[12px] relative rounded-[inherit] size-full">
        <BDmLnThtBi />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function NhanMc() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="Nhãn mục">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#182536] text-[16px]">Lý do giao thất bại</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#657386] text-[13px]">Bắt buộc</p>
    </div>
  );
}

function TieuDMc() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 w-full" data-name="Tiêu đề mục">
      <NhanMc />
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657386] text-[13px] w-full">Chọn 1 lý do theo thực tế.</p>
    </div>
  );
}

function NutChn() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 size-[20px]" data-name="Nút chọn">
      <div aria-hidden className="absolute border-[#b7c1ce] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function LyDo() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative" data-name="Lý do">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#657386] text-[13px] w-full">CODE_01</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#182536] text-[14px] w-full">Khách không nghe máy</p>
    </div>
  );
}

function LaChnLyDo() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Lựa chọn lý do">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <NutChn />
        <LyDo />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function NutChn1() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 size-[20px]" data-name="Nút chọn">
      <div aria-hidden className="absolute border-[#b7c1ce] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function LyDo1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative" data-name="Lý do">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#657386] text-[13px] w-full">CODE_02</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#182536] text-[14px] w-full">Sai địa chỉ / Nhà đóng cửa / Không tìm thấy hẻm</p>
    </div>
  );
}

function LaChnLyDo1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Lựa chọn lý do">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <NutChn1 />
        <LyDo1 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function NutChn2() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 size-[20px]" data-name="Nút chọn">
      <div aria-hidden className="absolute border-[#b7c1ce] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function LyDo2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative" data-name="Lý do">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#657386] text-[13px] w-full">CODE_03</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#182536] text-[14px] w-full">Khách hẹn giao lại</p>
    </div>
  );
}

function LaChnLyDo2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Lựa chọn lý do">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <NutChn2 />
        <LyDo2 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function NutChn3() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 size-[20px]" data-name="Nút chọn">
      <div aria-hidden className="absolute border-6 border-[#087f8c] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function LyDo3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[2px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative" data-name="Lý do">
      <p className="relative shrink-0 text-[#087f8c] text-[13px] w-full">CODE_04</p>
      <p className="relative shrink-0 text-[#182536] text-[14px] w-full">Khách từ chối nhận</p>
    </div>
  );
}

function LaChnLyDo3() {
  return (
    <div className="bg-[#e7f4f3] relative rounded-[8px] shrink-0 w-full" data-name="Lựa chọn lý do">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <NutChn3 />
        <LyDo3 />
      </div>
      <div aria-hidden className="absolute border border-[#087f8c] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function MaLyDoChun() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Mã lý do chuẩn">
      <LaChnLyDo />
      <LaChnLyDo1 />
      <LaChnLyDo2 />
      <LaChnLyDo3 />
    </div>
  );
}

function LaChnChiTit() {
  return (
    <div className="bg-[#087f8c] h-[44px] relative rounded-[8px] shrink-0" data-name="Lựa chọn chi tiết">
      <div className="content-stretch flex items-center overflow-clip px-[10px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.45] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Hàng móp méo</p>
      </div>
      <div aria-hidden className="absolute border border-[#087f8c] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function LaChnChiTit1() {
  return (
    <div className="bg-white h-[44px] relative rounded-[8px] shrink-0" data-name="Lựa chọn chi tiết">
      <div className="content-stretch flex items-center overflow-clip px-[10px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.45] not-italic relative shrink-0 text-[#182536] text-[13px] whitespace-nowrap">Sai hàng</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function LaChnChiTit2() {
  return (
    <div className="bg-white h-[44px] relative rounded-[8px] shrink-0" data-name="Lựa chọn chi tiết">
      <div className="content-stretch flex items-center overflow-clip px-[10px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.45] not-italic relative shrink-0 text-[#182536] text-[13px] whitespace-nowrap">Không đủ tiền</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function CacLyDoTChi() {
  return (
    <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Các lý do từ chối">
      <LaChnChiTit />
      <LaChnChiTit1 />
      <LaChnChiTit2 />
    </div>
  );
}

function MoTThcT() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Mô tả thực tế">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#182536] text-[13px] w-full">Khách từ chối vì góc thùng bị móp, không đồng ý nhận kiện hàng.</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function MoTGhiNhn() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Mô tả ghi nhận">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#182536] text-[13px] w-full">Ghi nhận</p>
      <MoTThcT />
    </div>
  );
}

function LyDoKhachTChi() {
  return (
    <div className="bg-[#e7f4f3] relative rounded-[8px] shrink-0 w-full" data-name="Lý do khách từ chối">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[14px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[13px] w-full">CHI TIẾT • CODE_04</p>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#182536] text-[13px] w-full">Lý do từ chối *</p>
        <CacLyDoTChi />
        <MoTGhiNhn />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function LyDoGiaoThtBi() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Lý do giao thất bại">
      <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip p-[20px] relative rounded-[inherit] size-full">
        <TieuDMc />
        <MaLyDoChun />
        <LyDoKhachTChi />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function NhanMc1() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[1.45] not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="Nhãn mục">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#182536] text-[16px]">Bằng chứng giao hàng</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#657386] text-[13px]">Bắt buộc</p>
    </div>
  );
}

function TieuDMc1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Tiêu đề mục">
      <NhanMc1 />
    </div>
  );
}

function CircleCheck() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="circle-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_20)" id="circle-check">
          <path d={svgPaths.pb0a5b00} id="Vector" stroke="#17765B" strokeLinecap="round" strokeWidth="1.8" />
        </g>
        <defs>
          <clipPath id="clip0_0_20">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DaTinh() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Đã tải ảnh">
      <CircleCheck />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#17765b] text-[13px] whitespace-nowrap">1 ảnh đã tải</p>
    </div>
  );
}

function ThongTinBngChng() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip relative" data-name="Thông tin bằng chứng">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] min-w-full not-italic relative shrink-0 text-[#182536] text-[13px] w-[min-content]">Ảnh hiện trường</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[#657386] text-[13px] w-[min-content]">14:32 • Địa chỉ giao</p>
      <DaTinh />
    </div>
  );
}

function Trash() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="trash-2">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="trash-2">
          <path d={svgPaths.p1af9a080} id="Vector" stroke="#657386" strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function nhDaChp() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Ảnh đã chụp">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip p-[10px] relative rounded-[inherit] size-full">
        <div className="relative rounded-[6px] shrink-0 size-[76px]" data-name="Ảnh cửa nhà">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgNhCaNha} />
        </div>
        <ThongTinBngChng />
        <Trash />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Camera() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="camera">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="camera">
          <path d={svgPaths.p3a144200} id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function ChpnhBngChng() {
  return (
    <div className="bg-[#e7f4f3] h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Chụp ảnh bằng chứng">
      <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Camera />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[14px] whitespace-nowrap">Chụp thêm ảnh</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function BngChngHinTrng() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="Bằng chứng hiện trường">
      <nhDaChp />
      <ChpnhBngChng />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657386] text-[13px] w-full">Ảnh cửa đóng hoặc lịch sử gọi. Bắt buộc có ít nhất 1 ảnh.</p>
    </div>
  );
}

function BngChngGiaoHang() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Bằng chứng giao hàng">
      <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip p-[20px] relative rounded-[inherit] size-full">
        <TieuDMc1 />
        <BngChngHinTrng />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ShieldAlert() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="shield-alert">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="shield-alert">
          <path d={svgPaths.p597b500} id="Vector" stroke="#946218" strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function ThongBaoQuyTc() {
  return (
    <div className="bg-[#fff6e5] relative rounded-[8px] shrink-0 w-full" data-name="Thông báo quy tắc">
      <div className="content-stretch flex gap-[10px] items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <ShieldAlert />
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px not-italic relative text-[#946218] text-[13px]">Đây là lần báo cáo thứ 3. Khi xác nhận hợp lệ: hệ thống chuyển RETURN_PENDING, khóa phát lại và tạo yêu cầu hoàn. Chỉ khi Hub xác nhận hàng đã về kho mới chuyển RETURNED.</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function CnhBaoLnThBa() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Cảnh báo lần thứ ba">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[20px] py-[12px] relative rounded-[inherit] size-full">
        <ThongBaoQuyTc />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BiuMuTChiNhn() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Biểu mẫu từ chối nhận">
      <ThongTinDnHang />
      <LnDangBaoCao />
      <LyDoGiaoThtBi />
      <BngChngGiaoHang />
      <CnhBaoLnThBa />
    </div>
  );
}

function XacNhnGiaoThtBi() {
  return (
    <div className="bg-[#087f8c] content-stretch flex h-[54px] items-center justify-center overflow-clip px-[14px] relative rounded-[12px] shrink-0 w-full" data-name="Xác nhận giao thất bại">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Xác nhận giao thất bại</p>
    </div>
  );
}

function XacNhnBaoCao() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Xác nhận báo cáo">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[20px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[13px] w-full">Đã có lý do và ảnh. Xác nhận sẽ kích hoạt chuyển hoàn tự động.</p>
        <XacNhnGiaoThtBi />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function ChBaoManHinhChinh() {
  return (
    <div className="bg-white h-[26px] relative shrink-0 w-full" data-name="Chỉ báo màn hình chính">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#142b3b] h-[4px] relative rounded-[100px] shrink-0 w-[134px]" data-name="Thanh kéo" />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

export default function Scr08TChiNhnLnThBa() {
  return (
    <div className="bg-[#f0f4f7] relative rounded-[28px] size-full" data-name="SCR-08 • Từ chối nhận · Lần thứ ba">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <ThanhTrngThai />
        <DiuHng />
        <BiuMuTChiNhn />
        <XacNhnBaoCao />
        <ChBaoManHinhChinh />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[28px]" />
    </div>
  );
}
