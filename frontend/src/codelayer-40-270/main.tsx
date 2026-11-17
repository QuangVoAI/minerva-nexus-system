import { useState, createContext, useContext } from "react";
import svgPaths from "./svg-cs17wt3bie";
import { orderService } from "../services";

const FailureFormContext = createContext<{
  selectedReason: string;
  setSelectedReason: (code: string) => void;
  hasConfirmedCalls: boolean;
  setHasConfirmedCalls: (val: boolean | ((prev: boolean) => boolean)) => void;
  hasPhoto: boolean;
  setHasPhoto: (val: boolean | ((prev: boolean) => boolean)) => void;
  handleSubmit: () => void;
  isSubmitting: boolean;
  isReady: boolean;
}>({} as any);

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
      title="Quay lại tác vụ tài xế"
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
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657386] text-[13px] w-full">28/12 Nguyễn Văn Đậu, P. 6, Bình Thạnh, TP. Hồ Chí Minh</p>
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
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#182536] text-[15px]">Đang báo cáo lần 1/3</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657386] text-[13px]">0/3</p>
    </div>
  );
}

function TinDBaLn() {
  return (
    <div className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Tiến độ ba lần">
      <div className="bg-[#087f8c] flex-[1_0_0] h-[5px] min-w-px relative rounded-[100px]" data-name="Mốc thất bại" />
      <div className="bg-[#dce3ec] flex-[1_0_0] h-[5px] min-w-px relative rounded-[100px]" data-name="Mốc thất bại" />
      <div className="bg-[#dce3ec] flex-[1_0_0] h-[5px] min-w-px relative rounded-[100px]" data-name="Mốc thất bại" />
    </div>
  );
}

function BDmLnThtBi() {
  return (
    <div className="bg-[#e7f4f3] relative rounded-[12px] shrink-0 w-full" data-name="Bộ đếm lần thất bại">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <SLn />
        <TinDBaLn />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657386] text-[13px] w-full">Ghi nhận khi báo cáo hợp lệ.</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function LnDangBaoCao() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip px-[20px] py-[12px] relative shrink-0 w-full" data-name="Lần đang báo cáo">
      <BDmLnThtBi />
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
      <div aria-hidden className="absolute border-6 border-[#087f8c] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function LyDo() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[2px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative" data-name="Lý do">
      <p className="relative shrink-0 text-[#087f8c] text-[13px] w-full">CODE_01</p>
      <p className="relative shrink-0 text-[#182536] text-[14px] w-full">Khách không nghe máy</p>
    </div>
  );
}

function LaChnLyDo() {
  const { selectedReason, setSelectedReason } = useContext(FailureFormContext);
  const isSelected = selectedReason === "CODE_01";
  return (
    <div
      onClick={() => setSelectedReason("CODE_01")}
      className={`${isSelected ? "bg-[#e7f4f3] border-[#087f8c]" : "bg-white hover:bg-[#f8fafc] border-[#dce4ea]"} cursor-pointer transition-colors relative rounded-[8px] shrink-0 w-full border`}
      data-name="Lựa chọn lý do"
    >
      <div className="content-stretch flex gap-[12px] items-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <div className="bg-white relative rounded-[100px] shrink-0 size-[20px]" data-name="Nút chọn">
          <div aria-hidden className={`absolute ${isSelected ? "border-6 border-[#087f8c]" : "border-[#b7c1ce] border-[1.5px]"} border-solid inset-0 pointer-events-none rounded-[100px]`} />
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[2px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative" data-name="Lý do">
          <p className={`relative shrink-0 ${isSelected ? "text-[#087f8c]" : "text-[#657386]"} text-[13px] w-full`}>CODE_01</p>
          <p className="relative shrink-0 text-[#182536] text-[14px] w-full">Khách không nghe máy</p>
        </div>
      </div>
    </div>
  );
}

function LaChnLyDo1() {
  const { selectedReason, setSelectedReason } = useContext(FailureFormContext);
  const isSelected = selectedReason === "CODE_02";
  return (
    <div
      onClick={() => setSelectedReason("CODE_02")}
      className={`${isSelected ? "bg-[#e7f4f3] border-[#087f8c]" : "bg-white hover:bg-[#f8fafc] border-[#dce4ea]"} cursor-pointer transition-colors relative rounded-[8px] shrink-0 w-full border`}
      data-name="Lựa chọn lý do"
    >
      <div className="content-stretch flex gap-[12px] items-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <div className="bg-white relative rounded-[100px] shrink-0 size-[20px]" data-name="Nút chọn">
          <div aria-hidden className={`absolute ${isSelected ? "border-6 border-[#087f8c]" : "border-[#b7c1ce] border-[1.5px]"} border-solid inset-0 pointer-events-none rounded-[100px]`} />
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative" data-name="Lý do">
          <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 ${isSelected ? "text-[#087f8c]" : "text-[#657386]"} text-[13px] w-full`}>CODE_02</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#182536] text-[14px] w-full">Sai địa chỉ / Nhà đóng cửa / Không tìm thấy hẻm</p>
        </div>
      </div>
    </div>
  );
}

function LaChnLyDo2() {
  const { selectedReason, setSelectedReason } = useContext(FailureFormContext);
  const isSelected = selectedReason === "CODE_03";
  return (
    <div
      onClick={() => setSelectedReason("CODE_03")}
      className={`${isSelected ? "bg-[#e7f4f3] border-[#087f8c]" : "bg-white hover:bg-[#f8fafc] border-[#dce4ea]"} cursor-pointer transition-colors relative rounded-[8px] shrink-0 w-full border`}
      data-name="Lựa chọn lý do"
    >
      <div className="content-stretch flex gap-[12px] items-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <div className="bg-white relative rounded-[100px] shrink-0 size-[20px]" data-name="Nút chọn">
          <div aria-hidden className={`absolute ${isSelected ? "border-6 border-[#087f8c]" : "border-[#b7c1ce] border-[1.5px]"} border-solid inset-0 pointer-events-none rounded-[100px]`} />
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative" data-name="Lý do">
          <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 ${isSelected ? "text-[#087f8c]" : "text-[#657386]"} text-[13px] w-full`}>CODE_03</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#182536] text-[14px] w-full">Khách hẹn giao lại</p>
        </div>
      </div>
    </div>
  );
}

function LaChnLyDo3() {
  const { selectedReason, setSelectedReason } = useContext(FailureFormContext);
  const isSelected = selectedReason === "CODE_04";
  return (
    <div
      onClick={() => setSelectedReason("CODE_04")}
      className={`${isSelected ? "bg-[#e7f4f3] border-[#087f8c]" : "bg-white hover:bg-[#f8fafc] border-[#dce4ea]"} cursor-pointer transition-colors relative rounded-[8px] shrink-0 w-full border`}
      data-name="Lựa chọn lý do"
    >
      <div className="content-stretch flex gap-[12px] items-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <div className="bg-white relative rounded-[100px] shrink-0 size-[20px]" data-name="Nút chọn">
          <div aria-hidden className={`absolute ${isSelected ? "border-6 border-[#087f8c]" : "border-[#b7c1ce] border-[1.5px]"} border-solid inset-0 pointer-events-none rounded-[100px]`} />
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative" data-name="Lý do">
          <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 ${isSelected ? "text-[#087f8c]" : "text-[#657386]"} text-[13px] w-full`}>CODE_04</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#182536] text-[14px] w-full">Khách từ chối nhận</p>
        </div>
      </div>
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

function XacNhnChaChn() {
  const { hasConfirmedCalls, setHasConfirmedCalls } = useContext(FailureFormContext);
  return (
    <div
      onClick={() => setHasConfirmedCalls((prev: boolean) => !prev)}
      className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full cursor-pointer select-none"
      data-name="Xác nhận chưa chọn"
    >
      <div className={`bg-white ${hasConfirmedCalls ? "border-[#15803d] bg-[#dcfce7] text-[#15803d]" : "border-[#8b5715]"} border-[1.5px] border-solid relative rounded-[4px] shrink-0 size-[22px] flex items-center justify-center font-bold text-[14px] transition-colors`} data-name="Ô xác nhận">
        {hasConfirmedCalls && "✓"}
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[1.45] min-w-px not-italic relative text-[#182536] text-[14px]">Đã gọi tối thiểu 3 cuộc cách nhau 5 phút</p>
    </div>
  );
}

function DiuKinCucGi() {
  return (
    <div className="bg-[#fff6e5] relative rounded-[8px] shrink-0 w-full" data-name="Điều kiện cuộc gọi">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[14px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#8b5715] text-[13px] w-full">XÁC NHẬN BẮT BUỘC • CODE_01</p>
        <XacNhnChaChn />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#8b5715] text-[13px] w-full">Chưa đủ điều kiện? Liên hệ khách trước khi báo thất bại.</p>
      </div>
      <div aria-hidden className="absolute border border-[#f2d58e] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function LyDoGiaoThtBi() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Lý do giao thất bại">
      <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip p-[20px] relative rounded-[inherit] size-full">
        <TieuDMc />
        <MaLyDoChun />
        <DiuKinCucGi />
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
  const { hasPhoto, setHasPhoto } = useContext(FailureFormContext);
  return (
    <div
      onClick={() => setHasPhoto((prev: boolean) => !prev)}
      className={`${hasPhoto ? "bg-[#dcfce7] border-[#15803d]" : "bg-[#e7f4f3] hover:bg-[#d8ecea] border-[#087f8c]"} h-[72px] relative rounded-[8px] shrink-0 w-full cursor-pointer transition-colors`}
      data-name="Chụp ảnh bằng chứng"
      title="Bấm để đính kèm ảnh hiện trường"
    >
      <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Camera />
        <p className={`[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 ${hasPhoto ? "text-[#15803d]" : "text-[#087f8c]"} text-[14px] whitespace-nowrap`}>
          {hasPhoto ? "✓ Đã chụp ảnh hiện trường (cua_dong_01.jpg)" : "Chụp ảnh hiện trường"}
        </p>
      </div>
      <div aria-hidden className={`absolute border ${hasPhoto ? "border-[#15803d] border-solid" : "border-[#087f8c] border-dashed"} inset-0 pointer-events-none rounded-[8px]`} />
    </div>
  );
}

function BngChngHinTrng() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="Bằng chứng hiện trường">
      <ChpnhBngChng />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657386] text-[13px] w-full">Ảnh cửa đóng hoặc lịch sử cuộc gọi. Bắt buộc có ít nhất 1 ảnh.</p>
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

function Info() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="info">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_6)" id="info">
          <path d={svgPaths.p1850880} id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.8" />
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

function ThongBaoQuyTc() {
  return (
    <div className="bg-[#e7f4f3] relative rounded-[8px] shrink-0 w-full" data-name="Thông báo quy tắc">
      <div className="content-stretch flex gap-[10px] items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <Info />
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px not-italic relative text-[#087f8c] text-[13px]">Sau báo cáo hợp lệ: ghi nhận lần 1/3 → FAILED. Mang hàng về kho cuối ca và phát lại ca hôm sau.</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function KtQuDKin() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip px-[20px] py-[12px] relative shrink-0 w-full" data-name="Kết quả dự kiến">
      <ThongBaoQuyTc />
    </div>
  );
}

function BiuMuBaoThtBi() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Biểu mẫu báo thất bại">
      <ThongTinDnHang />
      <LnDangBaoCao />
      <LyDoGiaoThtBi />
      <BngChngGiaoHang />
      <KtQuDKin />
    </div>
  );
}

function LockKeyhole({ stroke = "#657684" }: { stroke?: string }) {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="lock-keyhole">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="lock-keyhole">
          <path d={svgPaths.p2dab1a80} id="Vector" stroke={stroke} strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function XacNhnGiaoThtBi() {
  const { handleSubmit, isSubmitting, isReady } = useContext(FailureFormContext);
  return (
    <div
      onClick={handleSubmit}
      className={`${isReady ? "bg-[#dc2626] hover:bg-[#b91c1c] shadow-md" : "bg-[#e4e9ee] hover:bg-[#d8e0e8]"} cursor-pointer transition-colors content-stretch flex gap-[8px] h-[54px] items-center justify-center overflow-clip px-[14px] relative rounded-[12px] shrink-0 w-full`}
      data-name="Xác nhận giao thất bại"
    >
      <LockKeyhole stroke={isReady ? "white" : "#657684"} />
      <p className={`[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 ${isReady ? "text-white" : "text-[#142b3b]"} text-[15px] whitespace-nowrap`}>
        {isSubmitting ? "Đang gửi báo cáo..." : isReady ? "Xác nhận giao thất bại (Hoàn tất)" : "Xác nhận giao thất bại"}
      </p>
    </div>
  );
}

function XacNhnBaoCao() {
  const { isReady, hasConfirmedCalls, hasPhoto, setHasConfirmedCalls, setHasPhoto } = useContext(FailureFormContext);
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Xác nhận báo cáo">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[20px] relative rounded-[inherit] size-full">
        {isReady ? (
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#15803d] text-[13px] w-full">
            ✓ Đã đủ điều kiện: 3 cuộc gọi xác thực và 1 ảnh hiện trường.
          </p>
        ) : (
          <div className="flex items-center justify-between w-full">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#945a0b] text-[13px]">
              Còn thiếu: {!hasConfirmedCalls && "xác nhận 3 cuộc gọi"} {!hasConfirmedCalls && !hasPhoto && "và "} {!hasPhoto && "1 ảnh bằng chứng."}
            </p>
            <button
              type="button"
              onClick={() => {
                setHasConfirmedCalls(true);
                setHasPhoto(true);
              }}
              className="text-[11px] text-[#087f8c] font-semibold underline cursor-pointer hover:text-[#066570]"
            >
              (Bật nhanh đủ điều kiện)
            </button>
          </div>
        )}
        <XacNhnGiaoThtBi />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-solid border-t inset-0 pointer-events-none rounded-[12px]" />
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

export default function Scr08BaoThtBiLnDu() {
  const [selectedReason, setSelectedReason] = useState("CODE_01");
  const [hasConfirmedCalls, setHasConfirmedCalls] = useState(false);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const isReady = hasConfirmedCalls && hasPhoto;

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const orderId = sessionStorage.getItem("lastAssignedOrderId") || sessionStorage.getItem("lastCreatedOrderId") || "ORD-019";
      const driverId = sessionStorage.getItem("lastAssignedDriverId") || "DRV-02";
      let reasonCode = "CUSTOMER_UNREACHABLE";
      let reasonText = "Khách không nghe máy sau 3 cuộc gọi";
      if (selectedReason === "CODE_02") {
        reasonCode = "WRONG_ADDRESS";
        reasonText = "Sai địa chỉ / Nhà đóng cửa / Không tìm thấy hẻm";
      } else if (selectedReason === "CODE_03") {
        reasonCode = "CUSTOMER_RESCHEDULED";
        reasonText = "Khách hẹn giao lại ca sau";
      } else if (selectedReason === "CODE_04") {
        reasonCode = "CUSTOMER_REFUSED";
        reasonText = "Khách từ chối nhận hàng";
      }

      await Promise.race([
        orderService.updateDriverStatus({
          orderId,
          action: "FAILED",
          reasonCode,
          note: reasonText,
          driverId
        }),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 3000))
      ]).catch(() => null);

      setToast(`Đã ghi nhận giao thất bại: ${reasonText}`);

      setTimeout(() => {
        if (selectedReason === "CODE_03") {
          window.location.hash = "redelivery";
        } else {
          window.location.hash = "failed";
        }
      }, 1000);
    } catch {
      setToast("Đã ghi nhận giao thất bại!");
      setTimeout(() => {
        window.location.hash = "failed";
      }, 1000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FailureFormContext.Provider
      value={{
        selectedReason,
        setSelectedReason,
        hasConfirmedCalls,
        setHasConfirmedCalls,
        hasPhoto,
        setHasPhoto,
        handleSubmit,
        isSubmitting,
        isReady
      }}
    >
      <div className="bg-[#f0f4f7] relative rounded-[28px] size-full" data-name="SCR-08 • Báo thất bại lần đầu">
        {toast && (
          <div className="fixed top-16 right-8 z-50 bg-[#dc2626] text-white px-5 py-3 rounded-lg shadow-xl font-bold text-[13px] animate-bounce">
            ✓ {toast}
          </div>
        )}
        <div className="content-stretch flex flex-col items-start min-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
          <ThanhTrngThai />
          <DiuHng />
          <BiuMuBaoThtBi />
          <XacNhnBaoCao />
          <ChBaoManHinhChinh />
        </div>
        <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[28px]" />
      </div>
    </FailureFormContext.Provider>
  );
}