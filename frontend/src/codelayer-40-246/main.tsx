import { useState, createContext, useContext } from "react";
import svgPaths from "./svg-lzvjgarkuc";
import { orderService } from "../services";

const DriverActionContext = createContext<{
  onTransit?: () => void;
  onDelivered?: () => void;
  onFailure?: () => void;
  isProcessing?: boolean;
}>({});

function IosSignal() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="ios-signal">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g id="ios-signal">
          <path clipRule="evenodd" d={svgPaths.p1464e500} fill="white" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IosWifiSignal() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="ios-wifi-signal">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g id="ios-wifi-signal">
          <path clipRule="evenodd" d={svgPaths.p3ef30a80} fill="white" fillRule="evenodd" id="Vector" />
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
          <path d={svgPaths.pe73300} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function KtNi() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0" data-name="Kết nối">
      <IosSignal />
      <IosWifiSignal />
      <IosBatteryFull />
    </div>
  );
}

function TrngThaiThitB() {
  return (
    <div className="bg-[#082e40] content-stretch flex h-[40px] items-center justify-between overflow-clip px-[24px] relative shrink-0 w-full" data-name="Trạng thái thiết bị">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">9:15</p>
      <KtNi />
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="chevron-left">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="chevron-left">
          <path d={svgPaths.p111cfd00} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function QuayLi() {
  return (
    <div
      onClick={() => { window.location.hash = "dashboard"; }}
      className="content-stretch flex h-[44px] items-center justify-center overflow-clip relative shrink-0 w-[36px] cursor-pointer hover:opacity-80 transition-opacity"
      data-name="Quay lại"
      title="Quay lại Bàn điều hành"
    >
      <ChevronLeft />
    </div>
  );
}

function TieuD() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Tiêu đề">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[21px] text-white">Lộ trình hôm nay</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.45] relative shrink-0 text-[#b8d0db] text-[13px]">Ca sáng · 09/11/2026</p>
    </div>
  );
}

function Route() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="route">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="route">
          <path d={svgPaths.p22db7800} id="Vector" stroke="#BBCBD9" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function DiuHng() {
  return (
    <div className="bg-[#082e40] content-stretch flex gap-[8px] h-[56px] items-center overflow-clip pl-[12px] pr-[20px] relative shrink-0 w-full" data-name="Điều hướng">
      <QuayLi />
      <TieuD />
      <Route />
    </div>
  );
}

function TrngThai() {
  return (
    <div className="bg-[#fff3d9] relative rounded-[6px] shrink-0" data-name="Trạng thái">
      <div className="content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#946218] text-[13px] whitespace-nowrap">Chờ nhận hàng</p>
      </div>
      <div aria-hidden className="absolute border border-[#f2cbc8] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function TinTrinhNhnHang() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Tiến trình nhận hàng">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[13px] tracking-[0.4px] whitespace-pre">{`01  NHẬN HÀNG`}</p>
      <TrngThai />
    </div>
  );
}

function DimNhn() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[1.45] not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="Điểm nhận">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#142b3b] text-[15px]">Hub Cầu Giấy</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#657684] text-[13px]">8 đơn</p>
    </div>
  );
}

function TipNhnTiHub() {
  return (
    <div className="bg-white h-[76px] relative rounded-[12px] shrink-0 w-full" data-name="Tiếp nhận tại Hub">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <TinTrinhNhnHang />
        <DimNhn />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function TiHinTi() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Tải hiện tại">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684] text-[13px]">Trên xe</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#142b3b] text-[22px]">0 / 8</p>
    </div>
  );
}

function TinDangGi() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Tiền đang giữ">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684] text-[13px]">COD giữ</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#142b3b] text-[22px]">0 ₫</p>
    </div>
  );
}

function TiVaTinDangGi() {
  return (
    <div className="bg-white h-[64px] relative rounded-[12px] shrink-0 w-full" data-name="Tải và tiền đang giữ">
      <div className="content-stretch flex gap-[16px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
        <TiHinTi />
        <div className="bg-[#dfe6ed] h-[32px] relative shrink-0 w-px" data-name="Phân cách" />
        <TinDangGi />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ThTGiao() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Thứ tự giao">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#142b3b] text-[15px]">Lộ trình giao</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[13px]">Đã tối ưu</p>
    </div>
  );
}

function ListOrdered() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="list-ordered">
      <svg className="absolute block inset-0 size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 21 21" width="21">
        <g id="list-ordered">
          <path d={svgPaths.p390a1100} id="Vector" stroke="#142D48" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function TieuDDanhSach() {
  return (
    <div className="bg-[#f6f8fa] content-stretch flex h-[52px] items-center justify-between overflow-clip px-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Tiêu đề danh sách">
      <ThTGiao />
      <ListOrdered />
    </div>
  );
}

function ThongTinLTrinh() {
  return (
    <div className="content-stretch flex flex-col h-[288px] items-start overflow-clip relative shrink-0 w-full" data-name="Thông tin lộ trình">
      <TrngThaiThitB />
      <DiuHng />
      <TipNhnTiHub />
      <TiVaTinDangGi />
      <TieuDDanhSach />
    </div>
  );
}

function DimGiao() {
  return (
    <div className="bg-[#087f8c] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[24px]" data-name="Điểm giao">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">1</p>
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="clock-3">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_8)" id="clock-3">
          <path d={svgPaths.p2ca19080} id="Vector" stroke="#946218" strokeLinecap="round" strokeWidth="1.7" />
        </g>
        <defs>
          <clipPath id="clip0_0_8">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HnSla() {
  return (
    <div className="bg-[#fff3d9] relative rounded-[6px] shrink-0" data-name="Hạn SLA">
      <div className="content-stretch flex gap-[4px] items-center overflow-clip px-[7px] py-[5px] relative rounded-[inherit] size-full">
        <Clock />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#946218] text-[13px] whitespace-nowrap">10:00</p>
      </div>
      <div aria-hidden className="absolute border border-[#f2cbc8] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function MaDnVaHnGiao() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Mã đơn và hạn giao">
      <DimGiao />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] min-w-px not-italic relative text-[#142b3b] text-[13px]">VN241109086</p>
      <HnSla />
    </div>
  );
}

function LienH() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative" data-name="Liên hệ">
      <p className="font-['Inter:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[#142b3b] text-[16px] w-[min-content]">Nguyễn Thị Lan</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[13px] whitespace-nowrap">0903 456 789</p>
    </div>
  );
}

function Phone() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="phone">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
        <g clipPath="url(#clip0_0_6)" id="phone">
          <path d={svgPaths.p19f02700} id="Vector" stroke="#142D48" strokeLinecap="round" strokeWidth="1.8" />
        </g>
        <defs>
          <clipPath id="clip0_0_6">
            <rect fill="white" height="19" width="19" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function GiKhachHang() {
  return (
    <div className="bg-[#edf2f6] relative rounded-[10px] shrink-0 size-[44px]" data-name="Gọi khách hàng">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Phone />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function NgiNhn() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Người nhận">
      <LienH />
      <GiKhachHang />
    </div>
  );
}

function MapPin() {
  return (
    <div className="h-[17px] relative shrink-0 w-[15px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 15 17" width="15">
        <g id="map-pin">
          <path d={svgPaths.p23ecf780} id="Vector" stroke="#647487" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function DaChGiao() {
  return (
    <div className="content-stretch flex gap-[7px] items-start overflow-clip relative shrink-0 w-full" data-name="Địa chỉ giao">
      <MapPin />
      <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-px not-italic relative text-[#142b3b] text-[13px]">
        <p className="leading-[1.45] mb-0">Số 18, ngõ 68 Cầu Giấy,</p>
        <p className="leading-[1.45]">P. Quan Hoa, Q. Cầu Giấy</p>
      </div>
    </div>
  );
}

function TinThuH() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Tiền thu hộ">
      <div className="[word-break:break-word] content-stretch flex items-center justify-between not-italic overflow-clip relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684] text-[13px]">COD</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#142b3b] text-[23px] tracking-[-0.6px]">450.000 ₫</p>
      </div>
      <div aria-hidden className="absolute border-[#dfe6ed] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function GiaoThanhCongChaKhDng() {
  const { onDelivered, isProcessing } = useContext(DriverActionContext);
  return (
    <div
      onClick={onDelivered}
      className="bg-[#15803d] hover:bg-[#166534] cursor-pointer transition-colors h-[42px] relative rounded-[10px] shrink-0 w-full"
      data-name="Giao thành công"
    >
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] min-w-px not-italic relative text-white text-[13px] text-center">
          {isProcessing ? "Đang cập nhật..." : "✔ Giao thành công"}
        </p>
      </div>
      <div aria-hidden className="absolute border border-[#15803d] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function BaoSCChaKhDng() {
  const { onFailure } = useContext(DriverActionContext);
  return (
    <div
      onClick={onFailure}
      className="bg-[#dc2626] hover:bg-[#b91c1c] cursor-pointer transition-colors h-[42px] relative rounded-[10px] shrink-0 w-full"
      data-name="Báo sự cố"
    >
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] min-w-px not-italic relative text-white text-[13px] text-center">
          ✖ Báo sự cố
        </p>
      </div>
      <div aria-hidden className="absolute border border-[#dc2626] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function KtQuGiaoChaKhDng() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Kết quả giao · Chưa khả dụng">
      <GiaoThanhCongChaKhDng />
      <BaoSCChaKhDng />
    </div>
  );
}

function DnHang() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Đơn hàng">
      <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <MaDnVaHnGiao />
        <NgiNhn />
        <DaChGiao />
        <TinThuH />
        <KtQuGiaoChaKhDng />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function DimGiao1() {
  return (
    <div className="bg-[#087f8c] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[24px]" data-name="Điểm giao">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">2</p>
    </div>
  );
}

function Clock1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="clock-3">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_16)" id="clock-3">
          <path d={svgPaths.p2ca19080} id="Vector" stroke="#647487" strokeLinecap="round" strokeWidth="1.7" />
        </g>
        <defs>
          <clipPath id="clip0_0_16">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HnSla1() {
  return (
    <div className="bg-[#edf2f6] relative rounded-[6px] shrink-0" data-name="Hạn SLA">
      <div className="content-stretch flex gap-[4px] items-center overflow-clip px-[7px] py-[5px] relative rounded-[inherit] size-full">
        <Clock1 />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[13px] whitespace-nowrap">11:00</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function MaDnVaHnGiao1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Mã đơn và hạn giao">
      <DimGiao1 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] min-w-px not-italic relative text-[#142b3b] text-[13px]">VN241109092</p>
      <HnSla1 />
    </div>
  );
}

function LienH1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative" data-name="Liên hệ">
      <p className="font-['Inter:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[#142b3b] text-[16px] w-[min-content]">Trần Minh Đức</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[13px] whitespace-nowrap">0986 217 540</p>
    </div>
  );
}

function Phone1() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="phone">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
        <g clipPath="url(#clip0_0_6)" id="phone">
          <path d={svgPaths.p19f02700} id="Vector" stroke="#142D48" strokeLinecap="round" strokeWidth="1.8" />
        </g>
        <defs>
          <clipPath id="clip0_0_6">
            <rect fill="white" height="19" width="19" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function GiKhachHang1() {
  return (
    <div className="bg-[#edf2f6] relative rounded-[10px] shrink-0 size-[44px]" data-name="Gọi khách hàng">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Phone1 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function NgiNhn1() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Người nhận">
      <LienH1 />
      <GiKhachHang1 />
    </div>
  );
}

function MapPin1() {
  return (
    <div className="h-[17px] relative shrink-0 w-[15px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 15 17" width="15">
        <g id="map-pin">
          <path d={svgPaths.p23ecf780} id="Vector" stroke="#647487" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function DaChGiao1() {
  return (
    <div className="content-stretch flex gap-[7px] items-start overflow-clip relative shrink-0 w-full" data-name="Địa chỉ giao">
      <MapPin1 />
      <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-px not-italic relative text-[#142b3b] text-[13px]">
        <p className="leading-[1.45] mb-0">Số 35, ngõ 165 Dương Quảng Hàm,</p>
        <p className="leading-[1.45]">P. Quan Hoa, Q. Cầu Giấy</p>
      </div>
    </div>
  );
}

function TinThuH1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Tiền thu hộ">
      <div className="[word-break:break-word] content-stretch flex items-center justify-between not-italic overflow-clip relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684] text-[13px]">COD</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#142b3b] text-[23px] tracking-[-0.6px]">280.000 ₫</p>
      </div>
      <div aria-hidden className="absolute border-[#dfe6ed] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function GiaoThanhCongChaKhDng1() {
  return (
    <div className="bg-[#e8f2ec] h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Giao thành công · Chưa khả dụng">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] min-w-px not-italic relative text-[#719884] text-[13px] text-center">✔ Giao thành công</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function BaoSCChaKhDng1() {
  return (
    <div className="bg-[#f8ecec] h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Báo sự cố · Chưa khả dụng">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] min-w-px not-italic relative text-[#b98787] text-[13px] text-center">✖ Báo sự cố</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function KtQuGiaoChaKhDng1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Kết quả giao · Chưa khả dụng">
      <GiaoThanhCongChaKhDng1 />
      <BaoSCChaKhDng1 />
    </div>
  );
}

function DnHang1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Đơn hàng">
      <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <MaDnVaHnGiao1 />
        <NgiNhn1 />
        <DaChGiao1 />
        <TinThuH1 />
        <KtQuGiaoChaKhDng1 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function DimGiao2() {
  return (
    <div className="bg-[#087f8c] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[24px]" data-name="Điểm giao">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">3</p>
    </div>
  );
}

function Clock2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="clock-3">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_16)" id="clock-3">
          <path d={svgPaths.p2ca19080} id="Vector" stroke="#647487" strokeLinecap="round" strokeWidth="1.7" />
        </g>
        <defs>
          <clipPath id="clip0_0_16">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HnSla2() {
  return (
    <div className="bg-[#edf2f6] relative rounded-[6px] shrink-0" data-name="Hạn SLA">
      <div className="content-stretch flex gap-[4px] items-center overflow-clip px-[7px] py-[5px] relative rounded-[inherit] size-full">
        <Clock2 />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[13px] whitespace-nowrap">11:30</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function MaDnVaHnGiao2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Mã đơn và hạn giao">
      <DimGiao2 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] min-w-px not-italic relative text-[#142b3b] text-[13px]">VN241109105</p>
      <HnSla2 />
    </div>
  );
}

function LienH2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative" data-name="Liên hệ">
      <p className="font-['Inter:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[#142b3b] text-[16px] w-[min-content]">Lê Thu Hà</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[13px] whitespace-nowrap">0912 803 662</p>
    </div>
  );
}

function Phone2() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="phone">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
        <g clipPath="url(#clip0_0_6)" id="phone">
          <path d={svgPaths.p19f02700} id="Vector" stroke="#142D48" strokeLinecap="round" strokeWidth="1.8" />
        </g>
        <defs>
          <clipPath id="clip0_0_6">
            <rect fill="white" height="19" width="19" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function GiKhachHang2() {
  return (
    <div className="bg-[#edf2f6] relative rounded-[10px] shrink-0 size-[44px]" data-name="Gọi khách hàng">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Phone2 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function NgiNhn2() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Người nhận">
      <LienH2 />
      <GiKhachHang2 />
    </div>
  );
}

function MapPin2() {
  return (
    <div className="h-[17px] relative shrink-0 w-[15px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 15 17" width="15">
        <g id="map-pin">
          <path d={svgPaths.p23ecf780} id="Vector" stroke="#647487" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function DaChGiao2() {
  return (
    <div className="content-stretch flex gap-[7px] items-start overflow-clip relative shrink-0 w-full" data-name="Địa chỉ giao">
      <MapPin2 />
      <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-px not-italic relative text-[#142b3b] text-[13px]">
        <p className="leading-[1.45] mb-0">Số 12, ngách 8/11 Trần Tử Bình,</p>
        <p className="leading-[1.45]">P. Nghĩa Tân, Q. Cầu Giấy</p>
      </div>
    </div>
  );
}

function TinThuH2() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Tiền thu hộ">
      <div className="[word-break:break-word] content-stretch flex items-center justify-between not-italic overflow-clip relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684] text-[13px]">COD</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#142b3b] text-[23px] tracking-[-0.6px]">0 ₫</p>
      </div>
      <div aria-hidden className="absolute border-[#dfe6ed] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function GiaoThanhCongChaKhDng2() {
  return (
    <div className="bg-[#e8f2ec] h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Giao thành công · Chưa khả dụng">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] min-w-px not-italic relative text-[#719884] text-[13px] text-center">✔ Giao thành công</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function BaoSCChaKhDng2() {
  return (
    <div className="bg-[#f8ecec] h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Báo sự cố · Chưa khả dụng">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] min-w-px not-italic relative text-[#b98787] text-[13px] text-center">✖ Báo sự cố</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function KtQuGiaoChaKhDng2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Kết quả giao · Chưa khả dụng">
      <GiaoThanhCongChaKhDng2 />
      <BaoSCChaKhDng2 />
    </div>
  );
}

function DnHang2() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Đơn hàng">
      <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <MaDnVaHnGiao2 />
        <NgiNhn2 />
        <DaChGiao2 />
        <TinThuH2 />
        <KtQuGiaoChaKhDng2 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function DimGiao3() {
  return (
    <div className="bg-[#087f8c] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[24px]" data-name="Điểm giao">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">4</p>
    </div>
  );
}

function Clock3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="clock-3">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_16)" id="clock-3">
          <path d={svgPaths.p2ca19080} id="Vector" stroke="#647487" strokeLinecap="round" strokeWidth="1.7" />
        </g>
        <defs>
          <clipPath id="clip0_0_16">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HnSla3() {
  return (
    <div className="bg-[#edf2f6] relative rounded-[6px] shrink-0" data-name="Hạn SLA">
      <div className="content-stretch flex gap-[4px] items-center overflow-clip px-[7px] py-[5px] relative rounded-[inherit] size-full">
        <Clock3 />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[13px] whitespace-nowrap">12:00</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function MaDnVaHnGiao3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Mã đơn và hạn giao">
      <DimGiao3 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] min-w-px not-italic relative text-[#142b3b] text-[13px]">VN241109118</p>
      <HnSla3 />
    </div>
  );
}

function LienH3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative" data-name="Liên hệ">
      <p className="font-['Inter:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[#142b3b] text-[16px] w-[min-content]">Phạm Hoàng Nam</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[13px] whitespace-nowrap">0983 674 210</p>
    </div>
  );
}

function Phone3() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="phone">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
        <g clipPath="url(#clip0_0_6)" id="phone">
          <path d={svgPaths.p19f02700} id="Vector" stroke="#142D48" strokeLinecap="round" strokeWidth="1.8" />
        </g>
        <defs>
          <clipPath id="clip0_0_6">
            <rect fill="white" height="19" width="19" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function GiKhachHang3() {
  return (
    <div className="bg-[#edf2f6] relative rounded-[10px] shrink-0 size-[44px]" data-name="Gọi khách hàng">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Phone3 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function NgiNhn3() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Người nhận">
      <LienH3 />
      <GiKhachHang3 />
    </div>
  );
}

function MapPin3() {
  return (
    <div className="h-[17px] relative shrink-0 w-[15px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 15 17" width="15">
        <g id="map-pin">
          <path d={svgPaths.p23ecf780} id="Vector" stroke="#647487" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function DaChGiao3() {
  return (
    <div className="content-stretch flex gap-[7px] items-start overflow-clip relative shrink-0 w-full" data-name="Địa chỉ giao">
      <MapPin3 />
      <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-px not-italic relative text-[#142b3b] text-[13px]">
        <p className="leading-[1.45] mb-0">Số 46, ngõ 120 Hoàng Quốc Việt,</p>
        <p className="leading-[1.45]">P. Nghĩa Tân, Q. Cầu Giấy</p>
      </div>
    </div>
  );
}

function TinThuH3() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Tiền thu hộ">
      <div className="[word-break:break-word] content-stretch flex items-center justify-between not-italic overflow-clip relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684] text-[13px]">COD</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#142b3b] text-[23px] tracking-[-0.6px]">195.000 ₫</p>
      </div>
      <div aria-hidden className="absolute border-[#dfe6ed] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function GiaoThanhCongChaKhDng3() {
  return (
    <div className="bg-[#e8f2ec] h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Giao thành công · Chưa khả dụng">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] min-w-px not-italic relative text-[#719884] text-[13px] text-center">✔ Giao thành công</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function BaoSCChaKhDng3() {
  return (
    <div className="bg-[#f8ecec] h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Báo sự cố · Chưa khả dụng">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] min-w-px not-italic relative text-[#b98787] text-[13px] text-center">✖ Báo sự cố</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function KtQuGiaoChaKhDng3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Kết quả giao · Chưa khả dụng">
      <GiaoThanhCongChaKhDng3 />
      <BaoSCChaKhDng3 />
    </div>
  );
}

function DnHang3() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Đơn hàng">
      <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <MaDnVaHnGiao3 />
        <NgiNhn3 />
        <DaChGiao3 />
        <TinThuH3 />
        <KtQuGiaoChaKhDng3 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function DimGiao4() {
  return (
    <div className="bg-[#087f8c] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[24px]" data-name="Điểm giao">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">5</p>
    </div>
  );
}

function Clock4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="clock-3">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_16)" id="clock-3">
          <path d={svgPaths.p2ca19080} id="Vector" stroke="#647487" strokeLinecap="round" strokeWidth="1.7" />
        </g>
        <defs>
          <clipPath id="clip0_0_16">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HnSla4() {
  return (
    <div className="bg-[#edf2f6] relative rounded-[6px] shrink-0" data-name="Hạn SLA">
      <div className="content-stretch flex gap-[4px] items-center overflow-clip px-[7px] py-[5px] relative rounded-[inherit] size-full">
        <Clock4 />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[13px] whitespace-nowrap">12:30</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function MaDnVaHnGiao4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Mã đơn và hạn giao">
      <DimGiao4 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] min-w-px not-italic relative text-[#142b3b] text-[13px]">VN241109123</p>
      <HnSla4 />
    </div>
  );
}

function LienH4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative" data-name="Liên hệ">
      <p className="font-['Inter:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[#142b3b] text-[16px] w-[min-content]">Đỗ Mai Anh</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[13px] whitespace-nowrap">0904 821 356</p>
    </div>
  );
}

function Phone4() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="phone">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
        <g clipPath="url(#clip0_0_6)" id="phone">
          <path d={svgPaths.p19f02700} id="Vector" stroke="#142D48" strokeLinecap="round" strokeWidth="1.8" />
        </g>
        <defs>
          <clipPath id="clip0_0_6">
            <rect fill="white" height="19" width="19" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function GiKhachHang4() {
  return (
    <div className="bg-[#edf2f6] relative rounded-[10px] shrink-0 size-[44px]" data-name="Gọi khách hàng">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Phone4 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function NgiNhn4() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Người nhận">
      <LienH4 />
      <GiKhachHang4 />
    </div>
  );
}

function MapPin4() {
  return (
    <div className="h-[17px] relative shrink-0 w-[15px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 15 17" width="15">
        <g id="map-pin">
          <path d={svgPaths.p23ecf780} id="Vector" stroke="#647487" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function DaChGiao4() {
  return (
    <div className="content-stretch flex gap-[7px] items-start overflow-clip relative shrink-0 w-full" data-name="Địa chỉ giao">
      <MapPin4 />
      <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-px not-italic relative text-[#142b3b] text-[13px]">
        <p className="leading-[1.45] mb-0">Số 27, ngõ 106 Hoàng Quốc Việt,</p>
        <p className="leading-[1.45]">P. Nghĩa Đô, Q. Cầu Giấy</p>
      </div>
    </div>
  );
}

function TinThuH4() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Tiền thu hộ">
      <div className="[word-break:break-word] content-stretch flex items-center justify-between not-italic overflow-clip relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684] text-[13px]">COD</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#142b3b] text-[23px] tracking-[-0.6px]">320.000 ₫</p>
      </div>
      <div aria-hidden className="absolute border-[#dfe6ed] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function GiaoThanhCongChaKhDng4() {
  return (
    <div className="bg-[#e8f2ec] h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Giao thành công · Chưa khả dụng">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] min-w-px not-italic relative text-[#719884] text-[13px] text-center">✔ Giao thành công</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function BaoSCChaKhDng4() {
  return (
    <div className="bg-[#f8ecec] h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Báo sự cố · Chưa khả dụng">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] min-w-px not-italic relative text-[#b98787] text-[13px] text-center">✖ Báo sự cố</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function KtQuGiaoChaKhDng4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Kết quả giao · Chưa khả dụng">
      <GiaoThanhCongChaKhDng4 />
      <BaoSCChaKhDng4 />
    </div>
  );
}

function DnHang4() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Đơn hàng">
      <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <MaDnVaHnGiao4 />
        <NgiNhn4 />
        <DaChGiao4 />
        <TinThuH4 />
        <KtQuGiaoChaKhDng4 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function DimGiao5() {
  return (
    <div className="bg-[#087f8c] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[24px]" data-name="Điểm giao">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">6</p>
    </div>
  );
}

function Clock5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="clock-3">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_16)" id="clock-3">
          <path d={svgPaths.p2ca19080} id="Vector" stroke="#647487" strokeLinecap="round" strokeWidth="1.7" />
        </g>
        <defs>
          <clipPath id="clip0_0_16">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HnSla5() {
  return (
    <div className="bg-[#edf2f6] relative rounded-[6px] shrink-0" data-name="Hạn SLA">
      <div className="content-stretch flex gap-[4px] items-center overflow-clip px-[7px] py-[5px] relative rounded-[inherit] size-full">
        <Clock5 />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[13px] whitespace-nowrap">13:00</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function MaDnVaHnGiao5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Mã đơn và hạn giao">
      <DimGiao5 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] min-w-px not-italic relative text-[#142b3b] text-[13px]">VN241109137</p>
      <HnSla5 />
    </div>
  );
}

function LienH5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative" data-name="Liên hệ">
      <p className="font-['Inter:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[#142b3b] text-[16px] w-[min-content]">Vũ Quang Huy</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[13px] whitespace-nowrap">0972 460 815</p>
    </div>
  );
}

function Phone5() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="phone">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
        <g clipPath="url(#clip0_0_6)" id="phone">
          <path d={svgPaths.p19f02700} id="Vector" stroke="#142D48" strokeLinecap="round" strokeWidth="1.8" />
        </g>
        <defs>
          <clipPath id="clip0_0_6">
            <rect fill="white" height="19" width="19" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function GiKhachHang5() {
  return (
    <div className="bg-[#edf2f6] relative rounded-[10px] shrink-0 size-[44px]" data-name="Gọi khách hàng">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Phone5 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function NgiNhn5() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Người nhận">
      <LienH5 />
      <GiKhachHang5 />
    </div>
  );
}

function MapPin5() {
  return (
    <div className="h-[17px] relative shrink-0 w-[15px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 15 17" width="15">
        <g id="map-pin">
          <path d={svgPaths.p23ecf780} id="Vector" stroke="#647487" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function DaChGiao5() {
  return (
    <div className="content-stretch flex gap-[7px] items-start overflow-clip relative shrink-0 w-full" data-name="Địa chỉ giao">
      <MapPin5 />
      <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-px not-italic relative text-[#142b3b] text-[13px]">
        <p className="leading-[1.45] mb-0">Số 15, ngõ 100 Hoàng Quốc Việt,</p>
        <p className="leading-[1.45]">P. Nghĩa Đô, Q. Cầu Giấy</p>
      </div>
    </div>
  );
}

function TinThuH5() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Tiền thu hộ">
      <div className="[word-break:break-word] content-stretch flex items-center justify-between not-italic overflow-clip relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684] text-[13px]">COD</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#142b3b] text-[23px] tracking-[-0.6px]">0 ₫</p>
      </div>
      <div aria-hidden className="absolute border-[#dfe6ed] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function GiaoThanhCongChaKhDng5() {
  return (
    <div className="bg-[#e8f2ec] h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Giao thành công · Chưa khả dụng">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] min-w-px not-italic relative text-[#719884] text-[13px] text-center">✔ Giao thành công</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function BaoSCChaKhDng5() {
  return (
    <div className="bg-[#f8ecec] h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Báo sự cố · Chưa khả dụng">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] min-w-px not-italic relative text-[#b98787] text-[13px] text-center">✖ Báo sự cố</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function KtQuGiaoChaKhDng5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Kết quả giao · Chưa khả dụng">
      <GiaoThanhCongChaKhDng5 />
      <BaoSCChaKhDng5 />
    </div>
  );
}

function DnHang5() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Đơn hàng">
      <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <MaDnVaHnGiao5 />
        <NgiNhn5 />
        <DaChGiao5 />
        <TinThuH5 />
        <KtQuGiaoChaKhDng5 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function DimGiao6() {
  return (
    <div className="bg-[#087f8c] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[24px]" data-name="Điểm giao">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">7</p>
    </div>
  );
}

function Clock6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="clock-3">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_16)" id="clock-3">
          <path d={svgPaths.p2ca19080} id="Vector" stroke="#647487" strokeLinecap="round" strokeWidth="1.7" />
        </g>
        <defs>
          <clipPath id="clip0_0_16">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HnSla6() {
  return (
    <div className="bg-[#edf2f6] relative rounded-[6px] shrink-0" data-name="Hạn SLA">
      <div className="content-stretch flex gap-[4px] items-center overflow-clip px-[7px] py-[5px] relative rounded-[inherit] size-full">
        <Clock6 />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[13px] whitespace-nowrap">13:30</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function MaDnVaHnGiao6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Mã đơn và hạn giao">
      <DimGiao6 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] min-w-px not-italic relative text-[#142b3b] text-[13px]">VN241109142</p>
      <HnSla6 />
    </div>
  );
}

function LienH6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative" data-name="Liên hệ">
      <p className="font-['Inter:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[#142b3b] text-[16px] w-[min-content]">Bùi Thanh Hương</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[13px] whitespace-nowrap">0915 382 604</p>
    </div>
  );
}

function Phone6() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="phone">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
        <g clipPath="url(#clip0_0_6)" id="phone">
          <path d={svgPaths.p19f02700} id="Vector" stroke="#142D48" strokeLinecap="round" strokeWidth="1.8" />
        </g>
        <defs>
          <clipPath id="clip0_0_6">
            <rect fill="white" height="19" width="19" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function GiKhachHang6() {
  return (
    <div className="bg-[#edf2f6] relative rounded-[10px] shrink-0 size-[44px]" data-name="Gọi khách hàng">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Phone6 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function NgiNhn6() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Người nhận">
      <LienH6 />
      <GiKhachHang6 />
    </div>
  );
}

function MapPin6() {
  return (
    <div className="h-[17px] relative shrink-0 w-[15px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 15 17" width="15">
        <g id="map-pin">
          <path d={svgPaths.p23ecf780} id="Vector" stroke="#647487" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function DaChGiao6() {
  return (
    <div className="content-stretch flex gap-[7px] items-start overflow-clip relative shrink-0 w-full" data-name="Địa chỉ giao">
      <MapPin6 />
      <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-px not-italic relative text-[#142b3b] text-[13px]">
        <p className="leading-[1.45] mb-0">Số 8, ngõ 24 Nguyễn Đình Hoàn,</p>
        <p className="leading-[1.45]">P. Nghĩa Đô, Q. Cầu Giấy</p>
      </div>
    </div>
  );
}

function TinThuH6() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Tiền thu hộ">
      <div className="[word-break:break-word] content-stretch flex items-center justify-between not-italic overflow-clip relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684] text-[13px]">COD</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#142b3b] text-[23px] tracking-[-0.6px]">560.000 ₫</p>
      </div>
      <div aria-hidden className="absolute border-[#dfe6ed] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function GiaoThanhCongChaKhDng6() {
  return (
    <div className="bg-[#e8f2ec] h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Giao thành công · Chưa khả dụng">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] min-w-px not-italic relative text-[#719884] text-[13px] text-center">✔ Giao thành công</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function BaoSCChaKhDng6() {
  return (
    <div className="bg-[#f8ecec] h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Báo sự cố · Chưa khả dụng">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] min-w-px not-italic relative text-[#b98787] text-[13px] text-center">✖ Báo sự cố</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function KtQuGiaoChaKhDng6() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Kết quả giao · Chưa khả dụng">
      <GiaoThanhCongChaKhDng6 />
      <BaoSCChaKhDng6 />
    </div>
  );
}

function DnHang6() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Đơn hàng">
      <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <MaDnVaHnGiao6 />
        <NgiNhn6 />
        <DaChGiao6 />
        <TinThuH6 />
        <KtQuGiaoChaKhDng6 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function DimGiao7() {
  return (
    <div className="bg-[#087f8c] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[24px]" data-name="Điểm giao">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">8</p>
    </div>
  );
}

function Clock7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="clock-3">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_16)" id="clock-3">
          <path d={svgPaths.p2ca19080} id="Vector" stroke="#647487" strokeLinecap="round" strokeWidth="1.7" />
        </g>
        <defs>
          <clipPath id="clip0_0_16">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HnSla7() {
  return (
    <div className="bg-[#edf2f6] relative rounded-[6px] shrink-0" data-name="Hạn SLA">
      <div className="content-stretch flex gap-[4px] items-center overflow-clip px-[7px] py-[5px] relative rounded-[inherit] size-full">
        <Clock7 />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[13px] whitespace-nowrap">14:00</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function MaDnVaHnGiao7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Mã đơn và hạn giao">
      <DimGiao7 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] min-w-px not-italic relative text-[#142b3b] text-[13px]">VN241109156</p>
      <HnSla7 />
    </div>
  );
}

function LienH7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative" data-name="Liên hệ">
      <p className="font-['Inter:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[#142b3b] text-[16px] w-[min-content]">Hoàng Anh Tuấn</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[13px] whitespace-nowrap">0981 563 792</p>
    </div>
  );
}

function Phone7() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="phone">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
        <g clipPath="url(#clip0_0_6)" id="phone">
          <path d={svgPaths.p19f02700} id="Vector" stroke="#142D48" strokeLinecap="round" strokeWidth="1.8" />
        </g>
        <defs>
          <clipPath id="clip0_0_6">
            <rect fill="white" height="19" width="19" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function GiKhachHang7() {
  return (
    <div className="bg-[#edf2f6] relative rounded-[10px] shrink-0 size-[44px]" data-name="Gọi khách hàng">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Phone7 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function NgiNhn7() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Người nhận">
      <LienH7 />
      <GiKhachHang7 />
    </div>
  );
}

function MapPin7() {
  return (
    <div className="h-[17px] relative shrink-0 w-[15px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 15 17" width="15">
        <g id="map-pin">
          <path d={svgPaths.p23ecf780} id="Vector" stroke="#647487" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function DaChGiao7() {
  return (
    <div className="content-stretch flex gap-[7px] items-start overflow-clip relative shrink-0 w-full" data-name="Địa chỉ giao">
      <MapPin7 />
      <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-px not-italic relative text-[#142b3b] text-[13px]">
        <p className="leading-[1.45] mb-0">Số 36, ngõ 20 Nguyễn Văn Huyên,</p>
        <p className="leading-[1.45]">P. Quan Hoa, Q. Cầu Giấy</p>
      </div>
    </div>
  );
}

function TinThuH7() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Tiền thu hộ">
      <div className="[word-break:break-word] content-stretch flex items-center justify-between not-italic overflow-clip relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684] text-[13px]">COD</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#142b3b] text-[23px] tracking-[-0.6px]">210.000 ₫</p>
      </div>
      <div aria-hidden className="absolute border-[#dfe6ed] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function GiaoThanhCongChaKhDng7() {
  return (
    <div className="bg-[#e8f2ec] h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Giao thành công · Chưa khả dụng">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] min-w-px not-italic relative text-[#719884] text-[13px] text-center">✔ Giao thành công</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function BaoSCChaKhDng7() {
  return (
    <div className="bg-[#f8ecec] h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Báo sự cố · Chưa khả dụng">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] min-w-px not-italic relative text-[#b98787] text-[13px] text-center">✖ Báo sự cố</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function KtQuGiaoChaKhDng7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="Kết quả giao · Chưa khả dụng">
      <GiaoThanhCongChaKhDng7 />
      <BaoSCChaKhDng7 />
    </div>
  );
}

function DnHang7() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Đơn hàng">
      <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <MaDnVaHnGiao7 />
        <NgiNhn7 />
        <DaChGiao7 />
        <TinThuH7 />
        <KtQuGiaoChaKhDng7 />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function DanhSachDnCunDc() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[440px] items-start overflow-clip px-[16px] relative shrink-0 w-full" data-name="Danh sách đơn · Cuộn dọc">
      <DnHang />
      <DnHang1 />
      <DnHang2 />
      <DnHang3 />
      <DnHang4 />
      <DnHang5 />
      <DnHang6 />
      <DnHang7 />
    </div>
  );
}

function LockKeyhole() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="lock-keyhole">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_26)" id="lock-keyhole">
          <path d={svgPaths.p1b621500} id="Vector" stroke="#647487" strokeLinecap="round" strokeWidth="1.6" />
        </g>
        <defs>
          <clipPath id="clip0_0_26">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DiuKinGiaoHang() {
  return (
    <div className="content-stretch flex gap-[5px] h-[20px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Điều kiện giao hàng">
      <LockKeyhole />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[13px] whitespace-nowrap">Nhận đủ hàng để mở giao.</p>
    </div>
  );
}

function PackageCheck() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="package-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="package-check">
          <path d={svgPaths.p34f06c00} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
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

function XacNhnNhnDHangVaXutKho() {
  const { onTransit, isProcessing } = useContext(DriverActionContext);
  return (
    <div
      onClick={onTransit}
      className="bg-[#087f8c] hover:bg-[#066570] cursor-pointer transition-colors content-stretch flex gap-[12px] h-[56px] items-center overflow-clip px-[20px] relative rounded-[10px] shrink-0 w-full"
      data-name="Xác nhận nhận đủ hàng và xuất kho"
    >
      <PackageCheck />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] min-w-px not-italic relative text-[15px] text-center text-white">
        {isProcessing ? "Đang xuất kho..." : `Nhận đủ & Xuất kho`}
      </p>
      <ArrowRight />
    </div>
  );
}

function XacNhnNhnHang() {
  return (
    <div className="bg-white h-[124px] relative shrink-0 w-full" data-name="Xác nhận nhận hàng">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip px-[16px] py-[10px] relative rounded-[inherit] size-full">
        <DiuKinGiaoHang />
        <XacNhnNhnDHangVaXutKho />
        <div className="-translate-x-1/2 absolute bg-[#087f8c] bottom-[8px] h-[5px] left-1/2 rounded-[3px] w-[134px]" data-name="Thanh cử chỉ" />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

export default function Scr07TacVTaiX() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const getTargetOrderId = () => {
    return sessionStorage.getItem("lastAssignedOrderId") || sessionStorage.getItem("lastCreatedOrderId") || "ORD-01";
  };
  const getDriverId = () => {
    return sessionStorage.getItem("lastAssignedDriverId") || "DRV-02";
  };

  const handleTransit = async () => {
    setIsProcessing(true);
    try {
      const orderId = getTargetOrderId();
      const driverId = getDriverId();
      await orderService.updateDriverStatus({ orderId, action: "TRANSIT", driverId });
      setToast(`Đã xuất kho đơn ${orderId} (IN_TRANSIT)`);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Xuất kho thất bại";
      alert(`Lỗi: ${msg}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDelivered = async () => {
    setIsProcessing(true);
    try {
      const orderId = getTargetOrderId();
      const driverId = getDriverId();
      await orderService.updateDriverStatus({ orderId, action: "DELIVERED", driverId });
      setToast(`Đã giao thành công đơn ${orderId}! Thu tiền COD hoàn tất.`);
      setTimeout(() => {
        window.location.hash = "dashboard";
      }, 1200);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Cập nhật thất bại";
      alert(`Lỗi: ${msg}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFailure = async () => {
    setIsProcessing(true);
    try {
      const orderId = getTargetOrderId();
      const driverId = getDriverId();
      await orderService.updateDriverStatus({
        orderId,
        action: "FAILED",
        reasonCode: "CUSTOMER_UNREACHABLE",
        note: "Khách không nghe máy sau 3 cuộc gọi",
        driverId
      });
      setToast(`Đã ghi nhận sự cố đơn ${orderId}: Khách không nghe máy`);
      setTimeout(() => {
        window.location.hash = "failed-1";
      }, 1200);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Báo sự cố thất bại";
      alert(`Lỗi: ${msg}`);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <DriverActionContext.Provider value={{ onTransit: handleTransit, onDelivered: handleDelivered, onFailure: handleFailure, isProcessing }}>
      <div className="bg-[#f0f4f7] content-stretch flex flex-col items-start relative size-full" data-name="SCR-07 · Tác vụ tài xế">
        {toast && (
          <div className="fixed top-16 right-8 z-50 bg-[#15803d] text-white px-5 py-3 rounded-lg shadow-xl font-bold text-[13px] animate-bounce">
            ✓ {toast}
          </div>
        )}
        <ThongTinLTrinh />
        <DanhSachDnCunDc />
        <XacNhnNhnHang />
      </div>
    </DriverActionContext.Provider>
  );
}