import { useState, useEffect } from "react";
import svgPaths from "./svg-lzvjgarkuc";
import { orderService } from "../services";

export interface DeliveryOrderItem {
  id: string;
  stopIndex: number;
  slaTime: string;
  isUrgent: boolean;
  customerName: string;
  phone: string;
  address: string;
  codAmount: number;
  status: "PENDING" | "IN_TRANSIT" | "DELIVERED" | "FAILED";
  failureReason?: string;
}

const DEFAULT_ORDERS_Q7: DeliveryOrderItem[] = [
  {
    id: "MNX000001",
    stopIndex: 1,
    slaTime: "09:55",
    isUrgent: true,
    customerName: "Nguyễn Thị Lan",
    phone: "0903 456 789",
    address: "Số 12 Huỳnh Tấn Phát, P. Tân Thuận Đông, Q. 7, TP.HCM",
    codAmount: 450000,
    status: "PENDING",
  },
  {
    id: "MNX000006",
    stopIndex: 2,
    slaTime: "10:15",
    isUrgent: true,
    customerName: "Trần Minh Đức",
    phone: "0988 217 540",
    address: "Số 85 Nguyễn Lương Bằng, P. Tân Phú, Q. 7, TP.HCM",
    codAmount: 280000,
    status: "PENDING",
  },
  {
    id: "MNX000012",
    stopIndex: 3,
    slaTime: "10:40",
    isUrgent: false,
    customerName: "Lê Thị Mai",
    phone: "0912 345 678",
    address: "Số 68 Lê Văn Lương, P. Tân Kiểng, Q. 7, TP.HCM",
    codAmount: 350000,
    status: "PENDING",
  },
  {
    id: "MNX000018",
    stopIndex: 4,
    slaTime: "11:05",
    isUrgent: false,
    customerName: "Phạm Hoàng Long",
    phone: "0977 888 999",
    address: "Số 24 Bùi Văn Ba, P. Tân Thuận Đông, Q. 7, TP.HCM",
    codAmount: 190000,
    status: "PENDING",
  },
  {
    id: "MNX000023",
    stopIndex: 5,
    slaTime: "11:30",
    isUrgent: false,
    customerName: "Vũ Quốc Tuấn",
    phone: "0934 567 890",
    address: "Số 156 Nguyễn Thị Thập, P. Tân Phú, Q. 7, TP.HCM",
    codAmount: 520000,
    status: "PENDING",
  },
  {
    id: "MNX000029",
    stopIndex: 6,
    slaTime: "12:00",
    isUrgent: false,
    customerName: "Đỗ Bích Ngọc",
    phone: "0965 432 109",
    address: "Số 40 Trần Xuân Soạn, P. Tân Kiểng, Q. 7, TP.HCM",
    codAmount: 310000,
    status: "PENDING",
  },
];

const DEFAULT_ORDERS_CAUGIAY: DeliveryOrderItem[] = [
  {
    id: "VN241109086",
    stopIndex: 1,
    slaTime: "10:00",
    isUrgent: true,
    customerName: "Nguyễn Thị Lan",
    phone: "0903 456 789",
    address: "Số 18, ngõ 68 Cầu Giấy, P. Quan Hoa, Q. Cầu Giấy",
    codAmount: 450000,
    status: "PENDING",
  },
  {
    id: "VN241109092",
    stopIndex: 2,
    slaTime: "11:00",
    isUrgent: false,
    customerName: "Trần Minh Đức",
    phone: "0988 217 540",
    address: "Số 35, ngõ 165 Dương Quảng Hàm, P. Quan Hoa, Q. Cầu Giấy",
    codAmount: 280000,
    status: "PENDING",
  },
  {
    id: "VN241109098",
    stopIndex: 3,
    slaTime: "11:30",
    isUrgent: false,
    customerName: "Lê Thị Mai",
    phone: "0912 345 678",
    address: "Số 12, ngõ 20 Nguyễn Chánh, P. Trung Hòa, Q. Cầu Giấy",
    codAmount: 350000,
    status: "PENDING",
  },
  {
    id: "VN241109104",
    stopIndex: 4,
    slaTime: "12:00",
    isUrgent: false,
    customerName: "Phạm Hoàng Long",
    phone: "0977 888 999",
    address: "Số 58 Trần Thái Tông, P. Dịch Vọng Hậu, Q. Cầu Giấy",
    codAmount: 190000,
    status: "PENDING",
  },
  {
    id: "VN241109110",
    stopIndex: 5,
    slaTime: "13:00",
    isUrgent: false,
    customerName: "Vũ Quốc Tuấn",
    phone: "0934 567 890",
    address: "Số 99 Xuân Thủy, P. Dịch Vọng Hậu, Q. Cầu Giấy",
    codAmount: 520000,
    status: "PENDING",
  },
  {
    id: "VN241109116",
    stopIndex: 6,
    slaTime: "13:30",
    isUrgent: false,
    customerName: "Đỗ Bích Ngọc",
    phone: "0965 432 109",
    address: "Số 45 Trung Kính, P. Yên Hòa, Q. Cầu Giấy",
    codAmount: 310000,
    status: "PENDING",
  },
  {
    id: "VN241109122",
    stopIndex: 7,
    slaTime: "14:00",
    isUrgent: false,
    customerName: "Hoàng Đức Hải",
    phone: "0918 765 432",
    address: "Số 102 Hoàng Quốc Việt, P. Nghĩa Đô, Q. Cầu Giấy",
    codAmount: 220000,
    status: "PENDING",
  },
  {
    id: "VN241109128",
    stopIndex: 8,
    slaTime: "14:30",
    isUrgent: false,
    customerName: "Bùi Thị Thu",
    phone: "0909 112 233",
    address: "Số 15 Duy Tân, P. Dịch Vọng Hậu, Q. Cầu Giấy",
    codAmount: 400000,
    status: "PENDING",
  },
];

function IosSignal() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="ios-signal">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <path clipRule="evenodd" d={svgPaths.p1464e500} fill="white" fillRule="evenodd" id="Vector" />
      </svg>
    </div>
  );
}

function IosWifiSignal() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="ios-wifi-signal">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <path clipRule="evenodd" d={svgPaths.p3ef30a80} fill="white" fillRule="evenodd" id="Vector" />
      </svg>
    </div>
  );
}

function IosBatteryFull() {
  return (
    <div className="h-[18px] relative shrink-0 w-[25px]" data-name="ios-battery-full">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 25 18" width="25">
        <path d={svgPaths.pe73300} fill="white" id="Vector" />
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
        <path d={svgPaths.p111cfd00} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
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

function RouteIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="route">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <path d={svgPaths.p22db7800} id="Vector" stroke="#BBCBD9" strokeLinecap="round" strokeWidth="1.7" />
      </svg>
    </div>
  );
}

function DiuHng() {
  return (
    <div className="bg-[#082e40] content-stretch flex gap-[8px] h-[56px] items-center overflow-clip pl-[12px] pr-[20px] relative shrink-0 w-full" data-name="Điều hướng">
      <QuayLi />
      <TieuD />
      <RouteIcon />
    </div>
  );
}

function ClockIcon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="clock-3">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <path d={svgPaths.p2ca19080} id="Vector" stroke="#946218" strokeLinecap="round" strokeWidth="1.7" />
      </svg>
    </div>
  );
}

function PhoneIcon() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="phone">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
        <path d={svgPaths.p19f02700} id="Vector" stroke="#142D48" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    </div>
  );
}

function MapPinIcon() {
  return (
    <div className="h-[17px] relative shrink-0 w-[15px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 15 17" width="15">
        <path d={svgPaths.p23ecf780} id="Vector" stroke="#647487" strokeLinecap="round" strokeWidth="1.7" />
      </svg>
    </div>
  );
}

function ListOrderedIcon() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="list-ordered">
      <svg className="absolute block inset-0 size-full" fill="none" height="21" preserveAspectRatio="none" viewBox="0 0 21 21" width="21">
        <path d={svgPaths.p390a1100} id="Vector" stroke="#142D48" strokeLinecap="round" strokeWidth="1.7" />
      </svg>
    </div>
  );
}

function LockKeyholeIcon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="lock-keyhole">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <path d={svgPaths.p1b621500} id="Vector" stroke="#647487" strokeLinecap="round" strokeWidth="1.6" />
      </svg>
    </div>
  );
}

function PackageCheckIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="package-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <path d={svgPaths.p34f06c00} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    </div>
  );
}

function ArrowRightIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <path d={svgPaths.p394a7400} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    </div>
  );
}

function DeliveryOrderCard({
  order,
  onDeliver,
  onReportIncident,
  onCall,
  isDelivering,
}: {
  order: DeliveryOrderItem;
  onDeliver: (id: string) => void;
  onReportIncident: (order: DeliveryOrderItem) => void;
  onCall: (order: DeliveryOrderItem) => void;
  isDelivering: boolean;
}) {
  const isDelivered = order.status === "DELIVERED";
  const isFailed = order.status === "FAILED";

  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full shadow-sm transition-all" data-name={`Đơn hàng ${order.id}`}>
      <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip p-[12px] relative rounded-[inherit] size-full">
        {/* Header row: Điểm giao, Mã đơn, Hạn SLA */}
        <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Mã đơn và hạn giao">
          <div
            className={`${
              isDelivered ? "bg-[#15803d]" : isFailed ? "bg-[#dc2626]" : "bg-[#087f8c]"
            } content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[24px] text-white font-bold text-[13px]`}
          >
            {isDelivered ? "✓" : isFailed ? "✖" : order.stopIndex}
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] min-w-px not-italic relative text-[#142b3b] text-[13px]">
            {order.id}
          </p>
          <div
            className={`${
              order.isUrgent ? "bg-[#fff3d9] border-[#f2cbc8]" : "bg-[#edf2f6] border-[#dce4ea]"
            } relative rounded-[6px] shrink-0 border border-solid`}
          >
            <div className="content-stretch flex gap-[4px] items-center overflow-clip px-[7px] py-[5px] relative rounded-[inherit] size-full">
              <ClockIcon />
              <p
                className={`[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 ${
                  order.isUrgent ? "text-[#946218]" : "text-[#657684]"
                } text-[13px] whitespace-nowrap`}
              >
                {order.slaTime}
              </p>
            </div>
          </div>
        </div>

        {/* Customer row & Call button */}
        <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Người nhận">
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative">
            <p className="font-['Inter:Bold',sans-serif] font-bold min-w-full relative shrink-0 text-[#142b3b] text-[16px]">
              {order.customerName}
            </p>
            <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[13px] whitespace-nowrap">
              {order.phone}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onCall(order)}
            className="bg-[#edf2f6] hover:bg-[#dfe6ed] active:scale-95 transition-all relative rounded-[10px] shrink-0 size-[44px] flex items-center justify-center border border-[#dce4ea]"
            title={`Gọi cho ${order.customerName}`}
          >
            <PhoneIcon />
          </button>
        </div>

        {/* Address row */}
        <div className="content-stretch flex gap-[7px] items-start overflow-clip relative shrink-0 w-full" data-name="Địa chỉ giao">
          <div className="mt-0.5">
            <MapPinIcon />
          </div>
          <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-px not-italic relative text-[#142b3b] text-[13px]">
            {order.address}
          </div>
        </div>

        {/* COD row */}
        <div className="h-[36px] relative shrink-0 w-full border-t border-[#dfe6ed] pt-1" data-name="Tiền thu hộ">
          <div className="[word-break:break-word] content-stretch flex items-center justify-between not-italic overflow-clip relative size-full whitespace-nowrap">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] relative shrink-0 text-[#657684] text-[13px]">COD</p>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#142b3b] text-[20px] tracking-[-0.6px]">
              {order.codAmount.toLocaleString("vi-VN")} ₫
            </p>
          </div>
        </div>

        {/* Interactive Action buttons */}
        <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full pt-1">
          {isDelivered ? (
            <div className="bg-[#047857] h-[42px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center px-[8px] border border-[#047857]">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[13px] text-center">
                ✓ Đã giao thành công (Đã thu COD: {order.codAmount.toLocaleString("vi-VN")} ₫)
              </p>
            </div>
          ) : isFailed ? (
            <div className="bg-[#b91c1c] h-[42px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center px-[8px] border border-[#b91c1c]">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[13px] text-center">
                ✖ Giao thất bại ({order.failureReason || "Đã ghi nhận sự cố"})
              </p>
            </div>
          ) : (
            <>
              <button
                type="button"
                onClick={() => onDeliver(order.id)}
                disabled={isDelivering}
                className="bg-[#15803d] hover:bg-[#166534] active:scale-[0.99] cursor-pointer transition-all h-[42px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center px-[8px] border border-[#15803d]"
              >
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] text-white text-[13px] text-center">
                  {isDelivering ? "Đang cập nhật..." : "✔ Giao thành công"}
                </p>
              </button>
              <button
                type="button"
                onClick={() => onReportIncident(order)}
                className="bg-[#dc2626] hover:bg-[#b91c1c] active:scale-[0.99] cursor-pointer transition-all h-[42px] relative rounded-[10px] shrink-0 w-full flex items-center justify-center px-[8px] border border-[#dc2626]"
              >
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] text-white text-[13px] text-center">
                  ✖ Báo sự cố
                </p>
              </button>
            </>
          )}
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

export default function Scr07TacVTaiX() {
  const [hubName, setHubName] = useState(() => localStorage.getItem("minerva_current_hub") || "Hub Quận 7");
  const [isTransiting, setIsTransiting] = useState(false);
  const [deliveringId, setDeliveringId] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const [hasTransited, setHasTransited] = useState(() => {
    return sessionStorage.getItem("driver_has_transited") === "true";
  });

  // Initialize dynamic order list from approved dispatch or defaults
  const [orders, setOrders] = useState<DeliveryOrderItem[]>(() => {
    // 1. Check if user already has an active trip state in sessionStorage
    try {
      const savedState = sessionStorage.getItem("driver_orders_state");
      if (savedState) {
        const parsed = JSON.parse(savedState);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {}

    // 2. Check if user approved orders from #dispatch
    try {
      const approvedStr = sessionStorage.getItem("minerva_approved_dispatch_orders");
      if (approvedStr) {
        const approved = JSON.parse(approvedStr);
        if (Array.isArray(approved) && approved.length > 0) {
          const names = ["Nguyễn Thị Lan", "Trần Minh Đức", "Lê Thị Mai", "Phạm Hoàng Long", "Vũ Quốc Tuấn", "Đỗ Bích Ngọc", "Hoàng Đức Hải", "Bùi Thị Thu"];
          const phones = ["0903 456 789", "0988 217 540", "0912 345 678", "0977 888 999", "0934 567 890", "0965 432 109", "0918 765 432", "0909 112 233"];
          const codAmounts = [450000, 280000, 350000, 190000, 520000, 310000, 220000, 400000];

          return approved.map((item: any, idx: number) => ({
            id: item.id || `VN24110908${idx}`,
            stopIndex: idx + 1,
            slaTime: item.slaDeadline ? item.slaDeadline.replace("Hạn ", "") : (item.slaTime || "10:00"),
            isUrgent: !!item.isUrgent,
            customerName: item.customerName || names[idx % names.length],
            phone: item.phone || phones[idx % phones.length],
            address: item.address ? `${item.address}, ${item.ward || ""}` : "Số 18, ngõ 68 Cầu Giấy, P. Quan Hoa, Q. Cầu Giấy",
            codAmount: item.codAmount || codAmounts[idx % codAmounts.length],
            status: "PENDING",
          }));
        }
      }
    } catch {}

    // 3. Fallback based on selected Hub
    const currentHub = localStorage.getItem("minerva_current_hub") || "Hub Quận 7";
    if (currentHub.includes("Cầu Giấy")) {
      return DEFAULT_ORDERS_CAUGIAY;
    }
    return DEFAULT_ORDERS_Q7;
  });

  // Sync hub change
  useEffect(() => {
    const handleHubChange = () => {
      const newHub = localStorage.getItem("minerva_current_hub") || "Hub Quận 7";
      setHubName(newHub);
    };
    window.addEventListener("minerva_hub_changed", handleHubChange);
    return () => window.removeEventListener("minerva_hub_changed", handleHubChange);
  }, []);

  // Sync failed orders if returned from #failed-1
  useEffect(() => {
    try {
      const failedIds = JSON.parse(sessionStorage.getItem("driver_failed_order_ids") || "[]");
      if (Array.isArray(failedIds) && failedIds.length > 0) {
        setOrders((prev) => {
          const updated = prev.map((o) =>
            failedIds.includes(o.id) ? { ...o, status: "FAILED" as const, failureReason: "Khách không nghe máy / Hẹn lại" } : o
          );
          sessionStorage.setItem("driver_orders_state", JSON.stringify(updated));
          return updated;
        });
      }
    } catch {}
  }, []);

  // Calculate metrics dynamically
  const totalOrders = orders.length;
  const deliveredCount = orders.filter((o) => o.status === "DELIVERED").length;
  const failedCount = orders.filter((o) => o.status === "FAILED").length;
  const handledCount = deliveredCount + failedCount;
  const isAllHandled = handledCount === totalOrders && totalOrders > 0;

  // Remaining on truck
  const remainingOnTruck = hasTransited ? Math.max(0, totalOrders - handledCount) : 0;

  // Total COD collected
  const totalCodCollected = orders
    .filter((o) => o.status === "DELIVERED")
    .reduce((sum, o) => sum + (o.codAmount || 0), 0);

  // Status badge text & style
  const statusBadge = isAllHandled
    ? { text: "Hoàn tất ca giao", bg: "bg-[#dcfce7]", textCol: "text-[#15803d]", border: "border-[#86efac]" }
    : hasTransited
    ? { text: "Đang phát hàng", bg: "bg-[#e0f2fe]", textCol: "text-[#0369a1]", border: "border-[#bae6fd]" }
    : { text: "Chờ nhận hàng", bg: "bg-[#fff3d9]", textCol: "text-[#946218]", border: "border-[#f2cbc8]" };

  // Bottom action: Xác nhận nhận đủ hàng & xuất kho
  const handleTransit = async () => {
    if (isTransiting || hasTransited) return;
    setIsTransiting(true);
    try {
      const driverId = sessionStorage.getItem("lastAssignedDriverId") || "DRV-01";
      await Promise.race([
        orderService.updateDriverStatus({ orderId: orders[0]?.id || "MNX000001", action: "TRANSIT", driverId }),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 1000)),
      ]).catch(() => null);

      setHasTransited(true);
      sessionStorage.setItem("driver_has_transited", "true");
      setOrders((prev) => {
        const next = prev.map((o) => (o.status === "PENDING" ? { ...o, status: "IN_TRANSIT" as const } : o));
        sessionStorage.setItem("driver_orders_state", JSON.stringify(next));
        return next;
      });
      setToast(`Đã xuất kho ${totalOrders} đơn hàng lên xe thành công!`);
    } catch {
      setHasTransited(true);
      sessionStorage.setItem("driver_has_transited", "true");
      setToast(`Đã xuất kho ${totalOrders} đơn hàng lên xe!`);
    } finally {
      setIsTransiting(false);
    }
  };

  // Action: Giao thành công
  const handleDeliver = async (orderId: string) => {
    if (deliveringId) return;
    setDeliveringId(orderId);
    try {
      const driverId = sessionStorage.getItem("lastAssignedDriverId") || "DRV-01";
      await Promise.race([
        orderService.updateDriverStatus({ orderId, action: "DELIVERED", driverId }),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 1000)),
      ]).catch(() => null);

      if (!hasTransited) {
        setHasTransited(true);
        sessionStorage.setItem("driver_has_transited", "true");
      }

      setOrders((prev) => {
        const next = prev.map((o) => (o.id === orderId ? { ...o, status: "DELIVERED" as const } : o));
        sessionStorage.setItem("driver_orders_state", JSON.stringify(next));
        return next;
      });

      const currentOrder = orders.find((o) => o.id === orderId);
      const codText = currentOrder ? `${currentOrder.codAmount.toLocaleString("vi-VN")} ₫` : "";
      setToast(`✓ Đã giao thành công đơn ${orderId}! Thu tiền COD ${codText}.`);
    } catch {
      setOrders((prev) => {
        const next = prev.map((o) => (o.id === orderId ? { ...o, status: "DELIVERED" as const } : o));
        sessionStorage.setItem("driver_orders_state", JSON.stringify(next));
        return next;
      });
      setToast(`✓ Đã xác nhận giao thành công đơn ${orderId}!`);
    } finally {
      setDeliveringId(null);
    }
  };

  // Action: Báo sự cố
  const handleReportIncident = (order: DeliveryOrderItem) => {
    sessionStorage.setItem("lastIncidentOrder", JSON.stringify(order));
    sessionStorage.setItem("lastAssignedOrderId", order.id);
    window.location.hash = "failed-1";
  };

  // Action: Gọi khách
  const handleCall = (order: DeliveryOrderItem) => {
    setToast(`📞 Đang kết nối cuộc gọi tới ${order.customerName} (${order.phone})...`);
  };

  return (
    <div className="bg-[#f0f4f7] content-stretch flex flex-col items-start relative size-full min-h-screen" data-name="SCR-07 · Tác vụ tài xế">
      {toast && (
        <div className="fixed top-14 right-6 z-50 bg-[#15803d] text-white px-5 py-3 rounded-lg shadow-2xl font-bold text-[13px] animate-bounce">
          {toast}
        </div>
      )}

      {/* 1. Header cố định */}
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Thông tin lộ trình">
        <TrngThaiThitB />
        <DiuHng />

        {/* Tiếp nhận tại Hub */}
        <div className="px-4 py-2 w-full">
          <div className="bg-white h-[76px] relative rounded-[12px] shrink-0 w-full" data-name="Tiếp nhận tại Hub">
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Tiến trình nhận hàng">
                <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.45] text-[#657684] text-[13px] tracking-[0.4px]">01  NHẬN HÀNG</p>
                <div className={`${statusBadge.bg} relative rounded-[6px] shrink-0 transition-colors`}>
                  <div className="content-stretch flex items-start overflow-clip px-[8px] py-[4px] relative rounded-[inherit] size-full">
                    <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] ${statusBadge.textCol} text-[13px] whitespace-nowrap`}>
                      {statusBadge.text}
                    </p>
                  </div>
                  <div aria-hidden className={`absolute border ${statusBadge.border} border-solid inset-0 pointer-events-none rounded-[6px]`} />
                </div>
              </div>
              <div className="content-stretch flex items-center justify-between leading-[1.45] not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="Điểm nhận">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#142b3b] text-[15px]">{hubName}</p>
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#657684] text-[13px]">{totalOrders} đơn</p>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
          </div>
        </div>

        {/* Tải và tiền đang giữ */}
        <div className="px-4 pb-2 w-full">
          <div className="bg-white h-[64px] relative rounded-[12px] shrink-0 w-full" data-name="Tải và tiền đang giữ">
            <div className="content-stretch flex gap-[16px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px overflow-clip relative whitespace-nowrap">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] text-[#657684] text-[13px]">Trên xe</p>
                <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] text-[#142b3b] text-[22px]">
                  {remainingOnTruck} / {totalOrders}
                </p>
              </div>
              <div className="bg-[#dfe6ed] h-[32px] relative shrink-0 w-px" data-name="Phân cách" />
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px overflow-clip relative whitespace-nowrap">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] text-[#657684] text-[13px]">COD giữ</p>
                <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] text-[#142b3b] text-[22px]">
                  {totalCodCollected.toLocaleString("vi-VN")} ₫
                </p>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
          </div>
        </div>

        {/* Tiêu đề danh sách đơn */}
        <div className="px-4 pb-2 w-full">
          <div className="bg-[#f6f8fa] content-stretch flex h-[52px] items-center justify-between overflow-clip px-[16px] relative rounded-[12px] shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[3px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 whitespace-nowrap">
              <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#142b3b] text-[15px]">Lộ trình giao ({totalOrders} đơn)</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[13px]">
                {deliveredCount > 0 ? `Đã giao ${deliveredCount}/${totalOrders} đơn` : "Đã tối ưu thứ tự giao"}
              </p>
            </div>
            <ListOrderedIcon />
          </div>
        </div>
      </div>

      {/* 2. Danh sách cuộn chứa TOÀN BỘ đơn hàng, hỗ trợ thao tác trên mọi đơn */}
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-y-auto max-h-[calc(100vh-420px)] px-[16px] py-[4px] relative shrink-0 w-full pb-6 scrollbar-thin">
        {orders.map((order) => (
          <DeliveryOrderCard
            key={order.id}
            order={order}
            onDeliver={handleDeliver}
            onReportIncident={handleReportIncident}
            onCall={handleCall}
            isDelivering={deliveringId === order.id}
          />
        ))}
      </div>

      {/* 3. Thanh xác nhận xuất kho cố định dưới cùng */}
      <div className="bg-white h-[124px] relative shrink-0 w-full mt-auto" data-name="Xác nhận nhận hàng">
        <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip px-[16px] py-[10px] relative rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[5px] h-[20px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Điều kiện giao hàng">
            {hasTransited ? (
              <span className="text-[#15803d] font-bold text-[13px]">✓ Đang trên lộ trình phát hàng</span>
            ) : (
              <>
                <LockKeyholeIcon />
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] text-[#657684] text-[13px] whitespace-nowrap">
                  Nhận đủ hàng để xuất kho và phát hàng.
                </p>
              </>
            )}
          </div>
          <button
            type="button"
            onClick={handleTransit}
            disabled={hasTransited || isTransiting}
            className={`${
              hasTransited
                ? "bg-[#0f766e] cursor-default"
                : "bg-[#087f8c] hover:bg-[#066570] cursor-pointer"
            } transition-colors content-stretch flex gap-[12px] h-[56px] items-center justify-between overflow-clip px-[20px] relative rounded-[10px] shrink-0 w-full`}
            data-name="Xác nhận nhận đủ hàng và xuất kho"
          >
            <PackageCheckIcon />
            <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] min-w-px text-[15px] text-center text-white">
              {isTransiting ? "Đang xuất kho..." : hasTransited ? "✓ Đã xuất kho (Đang phát hàng)" : "Nhận đủ & Xuất kho"}
            </p>
            <ArrowRightIcon />
          </button>
          <div className="-translate-x-1/2 absolute bg-[#087f8c] bottom-[8px] h-[5px] left-1/2 rounded-[3px] w-[134px]" data-name="Thanh cử chỉ" />
        </div>
        <div aria-hidden className="absolute border-[#dce4ea] border-solid border-t inset-0 pointer-events-none" />
      </div>
    </div>
  );
}
