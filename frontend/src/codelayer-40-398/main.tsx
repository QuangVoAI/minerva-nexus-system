import svgPaths from "./svg-7ax1waqf2o";

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
    <div
      onClick={() => { window.location.hash = "driver"; }}
      className="relative shrink-0 size-[24px] cursor-pointer hover:opacity-80 transition-opacity"
      data-name="arrow-left"
      title="Quay lại danh sách tác vụ tài xế"
    >
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

function CircleCheck() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="circle-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_14)" id="circle-check">
          <path d={svgPaths.p1e29ca40} id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.8" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BaoCaoThanhCong() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Báo cáo thành công">
      <CircleCheck />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[13px] whitespace-nowrap">Đã ghi nhận • 14:35</p>
    </div>
  );
}

function RotateCcw() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="rotate-ccw">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="rotate-ccw">
          <path d={svgPaths.p10883700} id="Vector" stroke="#D14343" strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function TrngThaiDn() {
  return (
    <div className="bg-[#fff0ef] relative rounded-[8px] shrink-0" data-name="Trạng thái đơn">
      <div className="content-stretch flex gap-[6px] items-center overflow-clip px-[10px] py-[6px] relative rounded-[inherit] size-full">
        <RotateCcw />
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] not-italic relative shrink-0 text-[#d14343] text-[13px] whitespace-nowrap">CHUYỂN HOÀN</p>
      </div>
      <div aria-hidden className="absolute border border-[#f2cbc8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SLn() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[1.45] not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="Số lần">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#142b3b] text-[15px]">3/3 lần thất bại</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[13px]">Đã cập nhật</p>
    </div>
  );
}

function TinDBaLn() {
  return (
    <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Tiến độ ba lần">
      <div className="bg-[#d14343] flex-[1_0_0] h-[5px] min-w-px relative rounded-[100px]" data-name="Mốc thất bại" />
      <div className="bg-[#d14343] flex-[1_0_0] h-[5px] min-w-px relative rounded-[100px]" data-name="Mốc thất bại" />
      <div className="bg-[#d14343] flex-[1_0_0] h-[5px] min-w-px relative rounded-[100px]" data-name="Mốc thất bại" />
    </div>
  );
}

function BDmLnThtBi() {
  return (
    <div className="bg-[#fff6e5] relative rounded-[12px] shrink-0 w-full" data-name="Bộ đếm lần thất bại">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <SLn />
        <TinDBaLn />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[13px] w-full">Cập nhật sau báo cáo hợp lệ.</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function KtQuChuynHoan() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Kết quả chuyển hoàn">
      <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <BaoCaoThanhCong />
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.35] min-w-full not-italic relative shrink-0 text-[#142b3b] text-[24px] w-[min-content]">Chuyển hoàn về người gửi</p>
        <TrngThaiDn />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[#657684] text-[14px] w-[min-content]">Báo cáo hợp lệ. Đã cộng lần thất bại và kích hoạt hoàn hàng.</p>
        <BDmLnThtBi />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Package() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="package">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="package">
          <path d={svgPaths.p19b12c00} id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function DnHang() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Đơn hàng">
      <Package />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[16px] whitespace-nowrap">GHN • 8041 6295</p>
    </div>
  );
}

function MaVnDn() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Mã vận đơn">
      <DnHang />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">COD 485.000đ</p>
    </div>
  );
}

function NgiNhn() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 w-full" data-name="Người nhận">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#142b3b] text-[14px] w-full">Nguyễn Minh Anh • 090 ••• 6828</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[13px] w-full">28/12 Nguyễn Văn Đậu, P. 6, Bình Thạnh, TP. Hồ Chí Minh</p>
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

function NhanMc() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Nhãn mục">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[16px] whitespace-nowrap">Phiếu hoàn hàng</p>
    </div>
  );
}

function TieuDMc() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-name="Tiêu đề mục">
      <NhanMc />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[13px] w-full">Hệ thống đã sinh phiếu • UC-16</p>
    </div>
  );
}

function Copy() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="copy">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_22)" id="copy">
          <path d={svgPaths.pefba180} id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.8" />
        </g>
        <defs>
          <clipPath id="clip0_0_22">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MaBanGiao() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Mã bàn giao">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#087f8c] text-[19px] tracking-[0.3px] whitespace-nowrap">RTS-261109-06295</p>
      <Copy />
    </div>
  );
}

function MaPhiuHoan() {
  return (
    <div className="bg-[#e7f4f3] relative rounded-[12px] shrink-0 w-full" data-name="Mã phiếu hoàn">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <MaBanGiao />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[13px] w-full">Xuất trình mã khi bàn giao kho tổng</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ThongTin() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 w-full" data-name="Thông tin">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[13px] w-full">Lý do</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#142b3b] text-[14px] w-full">CODE_04 • Khách từ chối nhận</p>
    </div>
  );
}

function PhiuHoanHang() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Phiếu hoàn hàng">
      <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip p-[20px] relative rounded-[inherit] size-full">
        <TieuDMc />
        <MaPhiuHoan />
        <ThongTin />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[13px] w-full">Hàng móp méo — góc thùng bị móp, khách từ chối nhận.</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function NhanMc1() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Nhãn mục">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[16px] whitespace-nowrap">Bàn giao hàng hoàn</p>
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

function KyHiu() {
  return (
    <div className="bg-[#e7f4f3] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[36px]" data-name="Ký hiệu">
      <Warehouse />
    </div>
  );
}

function HngDn() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative" data-name="Hướng dẫn">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#142b3b] text-[14px] w-full">Chuyển hàng về kho tổng</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[13px] w-full">Bàn giao tại khu RTS của kho tổng Sóng Thần theo tuyến hoàn của điều phối viên.</p>
    </div>
  );
}

function HngDnXLy() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Hướng dẫn xử lý">
      <KyHiu />
      <HngDn />
    </div>
  );
}

function ClipboardCheck() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="clipboard-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="clipboard-check">
          <path d={svgPaths.p3e616980} id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function KyHiu1() {
  return (
    <div className="bg-[#e7f4f3] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[36px]" data-name="Ký hiệu">
      <ClipboardCheck />
    </div>
  );
}

function HngDn1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative" data-name="Hướng dẫn">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#142b3b] text-[14px] w-full">Đối soát với nhân viên kho</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[13px] w-full">Giữ kiện nguyên, kèm mã RTS. Đối soát mã và tình trạng khi bàn giao.</p>
    </div>
  );
}

function HngDnXLy1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Hướng dẫn xử lý">
      <KyHiu1 />
      <HngDn1 />
    </div>
  );
}

function LockKeyhole() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lock-keyhole">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="lock-keyhole">
          <path d={svgPaths.p2dab1a80} id="Vector" stroke="#D14343" strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function ThongBaoQuyTc() {
  return (
    <div className="bg-[#fff0ef] relative rounded-[8px] shrink-0 w-full" data-name="Thông báo quy tắc">
      <div className="content-stretch flex gap-[10px] items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <LockKeyhole />
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px not-italic relative text-[#d14343] text-[13px]">Đã khóa luồng giao. Không lên lịch phát lại sau lần 3.</p>
      </div>
      <div aria-hidden className="absolute border border-[#f2cbc8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function BanGiaoHangHoan() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Bàn giao hàng hoàn">
      <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip p-[20px] relative rounded-[inherit] size-full">
        <TieuDMc1 />
        <HngDnXLy />
        <HngDnXLy1 />
        <ThongBaoQuyTc />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ChiTitChuynHoan() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pt-[8px] relative shrink-0 w-full" data-name="Chi tiết chuyển hoàn">
      <ThongTinDnHang />
      <PhiuHoanHang />
      <BanGiaoHangHoan />
    </div>
  );
}

function XemPhiuHoanHang() {
  return (
    <div
      onClick={() => { window.location.hash = "order-detail"; }}
      className="bg-[#087f8c] hover:bg-[#066570] cursor-pointer transition-colors content-stretch flex h-[54px] items-center justify-center overflow-clip px-[14px] relative rounded-[12px] shrink-0 w-full"
      data-name="Xem phiếu hoàn hàng"
    >
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Xem phiếu hoàn hàng</p>
    </div>
  );
}

function VDanhSachGiaoHang() {
  return (
    <div
      onClick={() => { window.location.hash = "driver"; }}
      className="bg-white hover:bg-[#f8fafc] cursor-pointer transition-colors h-[54px] relative rounded-[12px] shrink-0 w-full"
      data-name="Về danh sách giao hàng"
    >
      <div className="content-stretch flex items-center justify-center overflow-clip px-[14px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[15px] whitespace-nowrap">Về danh sách giao hàng</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ThaoTacSauChuynHoan() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Thao tác sau chuyển hoàn">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[20px] relative rounded-[inherit] size-full">
        <XemPhiuHoanHang />
        <VDanhSachGiaoHang />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[13px] w-full">Điều phối viên đã nhận thông tin.</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none" />
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

export default function Scr08ReturnedChuynHoan() {
  return (
    <div className="bg-[#f0f4f7] relative rounded-[28px] size-full" data-name="SCR-08 • RETURNED · Chuyển hoàn">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <ThanhTrngThai />
        <DiuHng />
        <KtQuChuynHoan />
        <ChiTitChuynHoan />
        <ThaoTacSauChuynHoan />
        <ChBaoManHinhChinh />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[28px]" />
    </div>
  );
}