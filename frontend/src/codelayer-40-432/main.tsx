import { useState, createContext, useContext } from "react";
import svgPaths from "./svg-mmw8u2i6ev";
import { dispatchService } from "../services";
import { DiuHngHub as DiuHngHubShared } from "../components/DiuHngHub";

export interface DispatchOrder {
  id: string;
  address: string;
  ward: string;
  slaTime: string;
  slaDeadline: string;
  isUrgent: boolean;
  driverId: string;
  driverName: string;
  route: string;
  currentLoad: number;
  maxLoad: number;
  matchPercent: number;
  intervention: string;
  checked: boolean;
  breakdown: {
    w1: number;
    w2: number;
    w3: number;
    explanation: string;
    note?: string;
  };
}

export interface DriverOption {
  id: string;
  name: string;
  code: string;
  route: string;
  baseLoad: number;
  maxLoad: number;
}

export const DRIVER_OPTIONS: DriverOption[] = [
  { id: "DRV-01", name: "Nguyễn Văn An", code: "DRV-01", route: "Tuyến Tân Thuận Đông", baseLoad: 4, maxLoad: 15 },
  { id: "DRV-02", name: "Trần Quốc Bình", code: "DRV-02", route: "Tuyến Tân Phú", baseLoad: 6, maxLoad: 15 },
  { id: "DRV-03", name: "Lê Thị Chi", code: "DRV-03", route: "Tuyến Tân Kiểng", baseLoad: 8, maxLoad: 15 },
  { id: "DRV-04", name: "Phạm Minh Dũng", code: "DRV-04", route: "Tuyến Tân Phú", baseLoad: 11, maxLoad: 15 },
  { id: "DRV-05", name: "Hoàng Văn Em", code: "DRV-05", route: "Tuyến Dự phòng Tân Quy", baseLoad: 2, maxLoad: 15 },
];

export const INITIAL_DISPATCH_ORDERS: DispatchOrder[] = [
  {
    id: "MNX000001",
    address: "Giao 12 Huỳnh Tấn Phát",
    ward: "P. Tân Thuận Đông",
    slaTime: "35 phút",
    slaDeadline: "Hạn 09:55",
    isUrgent: true,
    driverId: "DRV-01",
    driverName: "Nguyễn Văn An",
    route: "Tuyến Tân Thuận Đông",
    currentLoad: 4,
    maxLoad: 15,
    matchPercent: 96,
    intervention: "Đang xem chi tiết",
    checked: true,
    breakdown: {
      w1: 50,
      w2: 30,
      w3: 16,
      explanation: "Trùng 100% tuyến + Tải còn trống nhiều + Gần vị trí giao.",
      note: "Vị trí gần hỗ trợ; không cộng thêm vào 3 trọng số."
    }
  },
  {
    id: "MNX000006",
    address: "Giao 85 Nguyễn Lương Bằng",
    ward: "P. Tân Phú",
    slaTime: "55 phút",
    slaDeadline: "Hạn 10:15",
    isUrgent: true,
    driverId: "DRV-02",
    driverName: "Trần Quốc Bình",
    route: "Tuyến Tân Phú",
    currentLoad: 6,
    maxLoad: 15,
    matchPercent: 91,
    intervention: "Đã đổi thủ công Lê Thu Hà · 09:19",
    checked: true,
    breakdown: {
      w1: 45,
      w2: 30,
      w3: 16,
      explanation: "Tài xế quen thuộc khu đô thị Phú Mỹ Hưng, sẵn sàng nhận thêm đơn.",
      note: "Đã can thiệp thủ công từ điều phối viên."
    }
  },
  {
    id: "MNX000012",
    address: "Giao 68 Lê Văn Lương",
    ward: "P. Tân Kiểng",
    slaTime: "1 giờ 20",
    slaDeadline: "Hạn 10:40",
    isUrgent: false,
    driverId: "DRV-03",
    driverName: "Lê Thị Chi",
    route: "Tuyến Tân Kiểng",
    currentLoad: 8,
    maxLoad: 15,
    matchPercent: 94,
    intervention: "Theo quy tắc",
    checked: true,
    breakdown: {
      w1: 48,
      w2: 28,
      w3: 18,
      explanation: "Tuyến đường tối ưu, gần điểm giao hiện tại.",
      note: "Tự động phân công theo thuật toán v2.4."
    }
  },
  {
    id: "MNX000018",
    address: "Giao 24 Bùi Văn Ba",
    ward: "P. Tân Thuận Đông",
    slaTime: "1 giờ 45",
    slaDeadline: "Hạn 11:05",
    isUrgent: false,
    driverId: "DRV-01",
    driverName: "Nguyễn Văn An",
    route: "Tuyến Tân Thuận Đông",
    currentLoad: 4,
    maxLoad: 15,
    matchPercent: 95,
    intervention: "Theo quy tắc",
    checked: true,
    breakdown: {
      w1: 50,
      w2: 25,
      w3: 20,
      explanation: "Cùng trục đường với MNX000001, gom đơn tiết kiệm thời gian di chuyển.",
      note: "Tự động phân công theo thuật toán v2.4."
    }
  },
  {
    id: "MNX000023",
    address: "Giao 156 Nguyễn Thị Thập",
    ward: "P. Tân Phú",
    slaTime: "2 giờ 10",
    slaDeadline: "Hạn 11:30",
    isUrgent: false,
    driverId: "DRV-04",
    driverName: "Phạm Minh Dũng",
    route: "Tuyến Tân Phú",
    currentLoad: 11,
    maxLoad: 15,
    matchPercent: 88,
    intervention: "Theo quy tắc",
    checked: false,
    breakdown: {
      w1: 45,
      w2: 23,
      w3: 20,
      explanation: "Đơn giao giờ trưa, sức chứa tài xế còn 4 đơn.",
      note: "Tự động phân công theo thuật toán v2.4."
    }
  },
  {
    id: "MNX000029",
    address: "Giao 40 Trần Xuân Soạn",
    ward: "P. Tân Kiểng",
    slaTime: "2 giờ 40",
    slaDeadline: "Hạn 12:00",
    isUrgent: false,
    driverId: "DRV-03",
    driverName: "Lê Thị Chi",
    route: "Tuyến Tân Kiểng",
    currentLoad: 8,
    maxLoad: 15,
    matchPercent: 92,
    intervention: "Theo quy tắc",
    checked: false,
    breakdown: {
      w1: 48,
      w2: 24,
      w3: 20,
      explanation: "Điểm giao cuối tuyến, phù hợp hành trình về trạm.",
      note: "Tự động phân công theo thuật toán v2.4."
    }
  }
];

const DispatchActionContext = createContext<{
  orders: DispatchOrder[];
  selectedOrderId: string;
  setSelectedOrderId: (id: string) => void;
  toggleCheck: (id: string) => void;
  toggleCheckAll: () => void;
  uncheckAll: () => void;
  changeDriver: (orderId: string, driverId: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  filterSla: string;
  setFilterSla: (f: string) => void;
  filterIntervention: string;
  setFilterIntervention: (f: string) => void;
  onApprove: () => void;
  isApproving: boolean;
  checkedCount: number;
  filteredOrders: DispatchOrder[];
  selectedOrder: DispatchOrder;
}>({} as any);

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
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] items-start not-italic overflow-clip relative shrink-0 tracking-[1px] whitespace-nowrap" data-name="Tên hệ thống">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[17px] text-white">HUB / OPS</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#b8d0db] text-[12px]">Vận hành logistics</p>
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
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Hub Quận 7</p>
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
          <path d={svgPaths.p2ac56f00} id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function McDiuHng3() {
  return (
    <div className="bg-[#0f1b2a] h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Mục điều hướng">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <Route />
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[12px] text-white">Gợi ý phân công</p>
      </div>
      <div aria-hidden className="absolute border border-[#1e3a4e] border-solid inset-0 pointer-events-none rounded-[8px]" />
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
        <g clipPath="url(#clip0_0_30)" id="bell-ring">
          <path d={svgPaths.p357b3800} id="Vector" stroke="#8FA0B3" strokeLinecap="round" strokeWidth="1.7" />
        </g>
        <defs>
          <clipPath id="clip0_0_30">
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
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Lê Thu Hà</p>
        <CaHotDng />
      </div>
      <div aria-hidden className="absolute border-[#1e3a4e] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function DiuHngHub() {
  return <DiuHngHubShared />;
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="chevron-right">
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="#5F7180" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function DngDn() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Đường dẫn">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#5f7180] text-[12px] whitespace-nowrap">Điều phối</p>
      <ChevronRight />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#172b3a] text-[13px] whitespace-nowrap">Gợi ý phân công</p>
    </div>
  );
}

function KtNi() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-name="Kết nối">
      <div className="relative shrink-0 size-[6px]" data-name="Tín hiệu kết nối">
        <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
          <circle cx="3" cy="3" fill="#087F8C" id="TÃ­n hiá»u káº¿t ná»i" r="3" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#596975] text-[12px] whitespace-nowrap">Đang kết nối</p>
    </div>
  );
}

function Bell() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="bell">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="bell">
          <path d={svgPaths.p13cb380} id="Vector" stroke="#596975" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function nhDiDin() {
  return (
    <div className="bg-[#e7f4f3] relative rounded-[100px] shrink-0 size-[32px]" data-name="Ảnh đại diện">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">LH</p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function NgiDung() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Người dùng">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#18252f] text-[13px]">Lê Thu Hà</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#596975] text-[12px]">Điều phối viên</p>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="chevron-down">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="#596975" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function TaiKhon() {
  return (
    <div className="content-stretch flex gap-[9px] items-center overflow-clip relative shrink-0" data-name="Tài khoản">
      <nhDiDin />
      <NgiDung />
      <ChevronDown />
    </div>
  );
}

function PhienDiuPhi() {
  return (
    <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0" data-name="Phiên điều phối">
      <KtNi />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#596975] text-[12px] whitespace-nowrap">Ca sáng · 08:00–12:00</p>
      <Bell />
      <TaiKhon />
    </div>
  );
}

function ThanhDiuHanhHub() {
  return (
    <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="Thanh điều hành Hub">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[28px] relative rounded-[inherit] size-full">
        <DngDn />
        <PhienDiuPhi />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="chevron-right">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="#657684" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function PhanCp() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Phân cấp">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Điều phối</p>
      <ChevronRight1 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#142b3b] text-[12px] whitespace-nowrap">Gợi ý phân công</p>
    </div>
  );
}

function DngDn1() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Đường dẫn">
      <PhanCp />
    </div>
  );
}

function NhanTrngThai() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="Nhãn trạng thái">
      <div className="content-stretch flex items-start overflow-clip px-[7px] py-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">Theo quy tắc</p>
      </div>
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function TieuD() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Tiêu đề">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.3] not-italic relative shrink-0 text-[#142b3b] text-[26px] tracking-[-0.5px] w-[281px]">Gợi ý phân công tối ưu</p>
      <NhanTrngThai />
    </div>
  );
}

function GiiThiu() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip relative shrink-0" data-name="Giới thiệu">
      <TieuD />
    </div>
  );
}

function RefreshCw() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="refresh-cw">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="refresh-cw">
          <path d={svgPaths.p1b857280} id="Vector" stroke="#596975" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function ChyLiGiY() {
  const [refreshing, setRefreshing] = useState(false);
  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };
  return (
    <div
      onClick={handleRefresh}
      className="bg-white hover:bg-slate-50 cursor-pointer transition-colors h-[40px] relative rounded-[6px] shrink-0"
      data-name="Chạy lại gợi ý"
      title="Bấm để tính toán lại gợi ý phân công"
    >
      {refreshing && (
        <div className="fixed top-16 right-8 z-50 bg-[#087f8c] text-white px-5 py-3 rounded-lg shadow-xl font-bold text-[13px] animate-bounce">
          ⚡ Đã tối ưu và cập nhật phương án phân công mới nhất!
        </div>
      )}
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <RefreshCw />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#18252f] text-[13px] whitespace-nowrap">
          {refreshing ? "Đang tính toán..." : "Chạy lại gợi ý"}
        </p>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function ChyLiPhngAn() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-end overflow-clip relative shrink-0" data-name="Chạy lại phương án">
      <ChyLiGiY />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Cập nhật 09:20:00 · 09/11/2026</p>
    </div>
  );
}

function TieuDVaThaoTac() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Tiêu đề và thao tác">
      <GiiThiu />
      <ChyLiPhngAn />
    </div>
  );
}

function YNghia() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start leading-[1.45] overflow-clip relative shrink-0" data-name="Ý nghĩa">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#18252f] text-[13px]">Đơn sẵn sàng</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[12px]">READY_TO_DISPATCH</p>
    </div>
  );
}

function ChSDuVao() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Chỉ số đầu vào">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#18252f] text-[30px] tracking-[-1.2px]">06</p>
      <YNghia />
    </div>
  );
}

function YNghia1() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start leading-[1.45] overflow-clip relative shrink-0" data-name="Ý nghĩa">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#18252f] text-[13px]">Tài xế đủ điều kiện</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[12px]">Đang trực ca · còn chỗ</p>
    </div>
  );
}

function ChSDuVao1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Chỉ số đầu vào">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#18252f] text-[30px] tracking-[-1.2px]">04</p>
      <YNghia1 />
    </div>
  );
}

function YNghia2() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start leading-[1.45] overflow-clip relative shrink-0" data-name="Ý nghĩa">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#d14343] text-[13px]">Đơn cần ưu tiên</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[12px]">SLA dưới 60 phút</p>
    </div>
  );
}

function ChSDuVao2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Chỉ số đầu vào">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#d14343] text-[30px] tracking-[-1.2px]">02</p>
      <YNghia2 />
    </div>
  );
}

function YNghia3() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start leading-[1.45] overflow-clip relative shrink-0" data-name="Ý nghĩa">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#18252f] text-[13px]">Đơn có đề xuất</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[12px]">Chưa thay đổi</p>
    </div>
  );
}

function ChSDuVao3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Chỉ số đầu vào">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#18252f] text-[30px] tracking-[-1.2px]">6/6</p>
      <YNghia3 />
    </div>
  );
}

function TpDLiuDuVao() {
  return (
    <div className="content-stretch flex gap-[24px] h-[82px] items-center overflow-clip px-[22px] relative shrink-0 w-full" data-name="Tập dữ liệu đầu vào">
      <ChSDuVao />
      <div className="bg-[#dce4ea] h-[34px] relative shrink-0 w-px" data-name="Phân cách" />
      <ChSDuVao1 />
      <div className="bg-[#dce4ea] h-[34px] relative shrink-0 w-px" data-name="Phân cách" />
      <ChSDuVao2 />
      <div className="bg-[#dce4ea] h-[34px] relative shrink-0 w-px" data-name="Phân cách" />
      <ChSDuVao3 />
    </div>
  );
}

function Workflow() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="workflow">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="workflow">
          <path d={svgPaths.p135a8700} id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function CongThc() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Công thức">
      <Workflow />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#18252f] text-[12px] whitespace-nowrap">Điểm khớp</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">w1 × tuyến + w2 × SLA + w3 × tải</p>
    </div>
  );
}

function CuHinh() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[16px] items-center leading-[1.45] overflow-clip relative shrink-0 text-[12px] whitespace-nowrap" data-name="Cấu hình">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal relative shrink-0 text-[#657684]">w1 = 0.5 · w2 = 0.3 · w3 = 0.2</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic relative shrink-0 text-[#087f8c]">Cấu hình ↗</p>
    </div>
  );
}

function QuyTcTinhDim() {
  return (
    <div className="bg-[#f6f8fa] h-[41px] relative rounded-bl-[10px] rounded-br-[10px] shrink-0 w-full" data-name="Quy tắc tính điểm">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[22px] relative rounded-[inherit] size-full">
        <CongThc />
        <CuHinh />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-solid border-t inset-0 pointer-events-none rounded-bl-[10px] rounded-br-[10px]" />
    </div>
  );
}

function DLiuVaMoHinh() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Dữ liệu và mô hình">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <TpDLiuDuVao />
        <QuyTcTinhDim />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function NgCnhGiY() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip relative shrink-0 w-full" data-name="Ngữ cảnh gợi ý">
      <DngDn1 />
      <TieuDVaThaoTac />
      <DLiuVaMoHinh />
    </div>
  );
}

function NhanTrngThai1() {
  return (
    <div className="bg-[#f6f8fa] content-stretch flex items-start overflow-clip px-[8px] py-[5px] relative rounded-[4px] shrink-0" data-name="Nhãn trạng thái">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">6 đơn</p>
    </div>
  );
}

function SDXut() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Số đề xuất">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#18252f] text-[16px] whitespace-nowrap">Đề xuất phân công</p>
      <NhanTrngThai1 />
    </div>
  );
}

function Flag() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="flag">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="flag">
          <path d={svgPaths.p1e4e1000} id="Vector" stroke="#D14343" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function ChuGiiRiRo() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0" data-name="Chú giải rủi ro">
      <Flag />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">{`SLA < 60 phút`}</p>
    </div>
  );
}

function LaChnVaChuGii() {
  const { checkedCount, orders } = useContext(DispatchActionContext);
  return (
    <div className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0" data-name="Lựa chọn và chú giải">
      <ChuGiiRiRo />
      <div className="bg-[#dce4ea] h-[16px] relative shrink-0 w-px" data-name="Phân cách" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#087f8c] text-[12px] whitespace-nowrap">
        Đã chọn {checkedCount} / {orders.length}
      </p>
    </div>
  );
}

function TieuDBng() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between overflow-clip px-[16px] relative shrink-0 w-full" data-name="Tiêu đề bảng">
      <SDXut />
      <LaChnVaChuGii />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="search">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_12)" id="search">
          <path d={svgPaths.pb810ec0} id="Vector" stroke="#596975" strokeLinecap="round" strokeWidth="1.7" />
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

function ArrowDownWideNarrow() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="arrow-down-wide-narrow">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="arrow-down-wide-narrow">
          <path d={svgPaths.p14640780} id="Vector" stroke="#596975" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function BLcBng() {
  const { searchQuery, setSearchQuery, filterSla, setFilterSla, filterIntervention, setFilterIntervention } = useContext(DispatchActionContext);
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="Bộ lọc bảng">
      <div className="content-stretch flex gap-[8px] items-center px-[16px] relative rounded-[inherit] size-full">
        {/* Tìm đơn */}
        <div className="h-[34px] relative rounded-[6px] shrink-0 w-[230px] border border-[#dce4ea] bg-white flex items-center px-[10px] gap-[8px]">
          <Search />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm mã đơn, địa chỉ..."
            className="w-full bg-transparent font-['Inter:Regular',sans-serif] text-[12px] text-[#18252f] placeholder-[#84919c] outline-none"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="text-[#84919c] hover:text-[#18252f] text-[11px] cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>

        {/* Lọc SLA / Trạng thái */}
        <div className="bg-white h-[34px] relative rounded-[6px] shrink-0 border border-[#dce4ea] px-[8px] flex items-center">
          <select
            value={filterSla}
            onChange={(e) => setFilterSla(e.target.value)}
            className="bg-transparent font-['Inter:Regular',sans-serif] text-[12px] text-[#657684] outline-none cursor-pointer"
          >
            <option value="all">Tất cả đề xuất</option>
            <option value="urgent">SLA khẩn cấp (&lt; 60 phút)</option>
            <option value="checked">Đã chọn</option>
            <option value="unchecked">Chưa chọn</option>
          </select>
        </div>

        {/* Lọc Can thiệp */}
        <div className="bg-white h-[34px] relative rounded-[6px] shrink-0 border border-[#dce4ea] px-[8px] flex items-center">
          <select
            value={filterIntervention}
            onChange={(e) => setFilterIntervention(e.target.value)}
            className="bg-transparent font-['Inter:Regular',sans-serif] text-[12px] text-[#657684] outline-none cursor-pointer"
          >
            <option value="all">Tất cả can thiệp</option>
            <option value="manual">Đã đổi thủ công</option>
            <option value="rule">Theo quy tắc</option>
          </select>
        </div>

        <div className="flex-[1_0_0] h-px min-w-px relative" />

        {/* Sắp xếp */}
        <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0">
          <ArrowDownWideNarrow />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] text-[#657684] text-[12px] whitespace-nowrap">Sắp xếp: SLA</p>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Minus() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="minus">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="minus">
          <path d="M2.4996 6H9.5004" id="Vector" stroke="white" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="check">
          <path d={svgPaths.p2a580400} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="clock-3">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_37)" id="clock-3">
          <path d={svgPaths.p2ca19080} id="Vector" stroke="#D14343" strokeLinecap="round" strokeWidth="1.7" />
        </g>
        <defs>
          <clipPath id="clip0_0_37">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TieuDCt() {
  const { filteredOrders, toggleCheckAll } = useContext(DispatchActionContext);
  const allChecked = filteredOrders.length > 0 && filteredOrders.every((o) => o.checked);
  const someChecked = filteredOrders.some((o) => o.checked) && !allChecked;

  return (
    <div className="bg-[#f6f8fa] h-[40px] relative shrink-0 w-full" data-name="Tiêu đề cột">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[24px]" data-name="Chọn tất cả">
          <button
            type="button"
            onClick={toggleCheckAll}
            className={`relative rounded-[3px] shrink-0 size-[17px] flex items-center justify-center cursor-pointer transition-colors border ${
              allChecked || someChecked ? "bg-[#087f8c] border-[#087f8c]" : "bg-white border-[#dce4ea] hover:border-[#087f8c]"
            }`}
            title={allChecked ? "Bỏ chọn tất cả" : "Chọn tất cả đề xuất"}
          >
            {allChecked && <Check />}
            {someChecked && <Minus />}
          </button>
        </div>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] text-[#657684] text-[12px] w-[230px]">Đơn / Địa chỉ</p>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] text-[#657684] text-[12px] w-[88px]">SLA</p>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] text-[#657684] text-[12px] w-[168px]">Tài xế (Sổ xuống để chọn)</p>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] text-[#657684] text-[12px] w-[100px]">Tải</p>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] text-[#657684] text-[12px] w-[62px]">Khớp</p>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] text-[#657684] text-[12px] w-[128px]">Can thiệp</p>
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-b border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function DispatchRow({ order }: { order: DispatchOrder }) {
  const { selectedOrderId, setSelectedOrderId, toggleCheck, changeDriver } = useContext(DispatchActionContext);
  const isSelected = order.id === selectedOrderId;

  return (
    <div
      onClick={() => setSelectedOrderId(order.id)}
      className={`h-[92px] relative shrink-0 w-full cursor-pointer transition-colors border-b border-[#dce4ea] ${
        isSelected ? "bg-[#f0f8f6] border-l-[3px] border-l-[#087f8c]" : "bg-white hover:bg-[#fafbfc]"
      }`}
      data-name="Đề xuất phân công"
    >
      <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
        {/* Checkbox */}
        <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[24px]">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleCheck(order.id);
            }}
            className={`relative rounded-[3px] shrink-0 size-[17px] flex items-center justify-center cursor-pointer transition-colors border ${
              order.checked ? "bg-[#087f8c] border-[#087f8c]" : "bg-white border-[#dce4ea] hover:border-[#087f8c]"
            }`}
            title={order.checked ? "Bỏ chọn đơn này" : "Chọn đơn này"}
          >
            {order.checked && <Check />}
          </button>
        </div>

        {/* Đơn giao */}
        <div className="content-stretch flex flex-col gap-[5px] items-start overflow-clip relative shrink-0 w-[230px]">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <p className="font-['Roboto_Mono:SemiBold',sans-serif] font-semibold text-[#18252f] text-[12px] whitespace-nowrap">{order.id}</p>
            {order.isUrgent && <Flag />}
          </div>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#18252f] text-[12px] truncate w-full">{order.address}</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#657684] text-[12px] truncate w-full">{order.ward}</p>
        </div>

        {/* Độ cấp bách SLA */}
        <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[88px]">
          <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0">
            <Clock />
            <p className={`font-['Inter:Regular',sans-serif] font-normal text-[13px] whitespace-nowrap ${order.isUrgent ? "text-[#d14343]" : "text-[#18252f]"}`}>
              {order.slaTime}
            </p>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#657684] text-[12px] whitespace-nowrap">{order.slaDeadline}</p>
        </div>

        {/* Tài xế đề xuất (Dropdown chọn tài xế) */}
        <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[168px]">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <select
              value={order.driverId}
              onClick={(e) => e.stopPropagation()}
              onChange={(e) => {
                e.stopPropagation();
                changeDriver(order.id, e.target.value);
              }}
              className="bg-transparent font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#087f8c] hover:text-[#066570] text-[12px] underline outline-none cursor-pointer"
              title="Nhấn để đổi tài xế khác cho đơn này"
            >
              {DRIVER_OPTIONS.map((d) => (
                <option key={d.id} value={d.id} className="text-[#18252f] no-underline font-normal">
                  {d.name} ({d.code} · {d.route})
                </option>
              ))}
            </select>
          </div>
          <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal text-[#657684] text-[12px] whitespace-nowrap">{order.driverId}</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#657684] text-[12px] truncate w-full">{order.route}</p>
        </div>

        {/* Sức chứa / Tải */}
        <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-[100px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#18252f] text-[12px] whitespace-nowrap">
            {order.currentLoad}/{order.maxLoad} đơn
          </p>
          <div className="bg-[#dce4ea] content-stretch flex h-[3px] items-start overflow-clip relative rounded-[2px] shrink-0 w-[88px]">
            <div
              className="bg-[#087f8c] h-[3px] relative rounded-[2px] shrink-0"
              style={{ width: `${Math.min(100, Math.round((order.currentLoad / order.maxLoad) * 88))}px` }}
            />
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#657684] text-[12px] whitespace-nowrap">
            Còn {order.maxLoad - order.currentLoad} chỗ
          </p>
        </div>

        {/* Điểm khớp */}
        <div className="content-stretch flex flex-col gap-[5px] items-start not-italic overflow-clip relative shrink-0 text-[#087f8c] w-[62px] whitespace-nowrap">
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[17px] tracking-[-0.5px]">{order.matchPercent}%</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px]">Chi tiết →</p>
        </div>

        {/* Trạng thái can thiệp */}
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[128px]">
          {isSelected ? (
            <div className="bg-[#e7f4f3] content-stretch flex items-start overflow-clip px-[8px] py-[5px] relative rounded-[4px] shrink-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#087f8c] text-[12px] whitespace-nowrap">Đang xem chi tiết</p>
            </div>
          ) : order.intervention.includes("thủ công") ? (
            <div className="bg-[#fff8ea] border border-[#fbd38d] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#b7791f] text-[11px] whitespace-nowrap">Đã đổi thủ công</p>
            </div>
          ) : (
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[#657684] text-[12px] whitespace-nowrap">{order.intervention}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function BngDXutPhanCong() {
  const { filteredOrders, orders } = useContext(DispatchActionContext);

  return (
    <div className="bg-white flex-[1_0_2px] min-w-px relative rounded-[10px]" data-name="Bảng đề xuất phân công">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <TieuDBng />
        <BLcBng />
        <TieuDCt />
        {filteredOrders.length === 0 ? (
          <div className="w-full py-12 text-center text-[#657684] text-[13px]">
            Không tìm thấy đề xuất phân công phù hợp với bộ lọc hiện tại.
          </div>
        ) : (
          filteredOrders.map((order) => <DispatchRow key={order.id} order={order} />)
        )}
        <div className="[word-break:break-word] bg-[#f6f8fa] content-stretch flex font-['Inter:Regular',sans-serif] font-normal h-[42px] items-center justify-between leading-[1.45] overflow-clip px-[16px] relative shrink-0 text-[#657684] text-[12px] w-full whitespace-nowrap" data-name="Thông tin bảng">
          <p className="relative shrink-0">{filteredOrders.length}/{orders.length} đề xuất hiển thị · Không có đơn bị loại</p>
          <p className="relative shrink-0">Tải hiện tại: 09:20, tính theo ca trực đang chạy</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function ScanLine() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="scan-line">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g id="scan-line">
          <path d={svgPaths.p19dad3c0} id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function GiiThichDKhp() {
  const { selectedOrder } = useContext(DispatchActionContext);

  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Giải thích độ khớp">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        {/* Tiêu đề */}
        <div className="h-[49px] relative shrink-0 w-full border-b border-[#dce4ea] flex items-center justify-between px-[20px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#18252f] text-[13px] whitespace-nowrap">
            Vì sao khớp {selectedOrder.matchPercent}%?
          </p>
          <ScanLine />
        </div>

        {/* Nội dung điểm */}
        <div className="content-stretch flex flex-col gap-[15px] items-start p-[20px] relative shrink-0 w-full">
          <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip relative shrink-0">
              <p className="font-['Roboto_Mono:SemiBold',sans-serif] font-semibold text-[#18252f] text-[12px] whitespace-nowrap">{selectedOrder.id}</p>
              {selectedOrder.isUrgent && (
                <div className="content-stretch flex gap-[5px] items-center overflow-clip relative shrink-0">
                  <Flag />
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#d14343] text-[12px] whitespace-nowrap">SLA {selectedOrder.slaTime}</p>
                </div>
              )}
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[#087f8c] tracking-[-1.7px] whitespace-nowrap">
              <span className="text-[36px] font-bold">{selectedOrder.matchPercent}</span>
              <span className="text-[21px]">%</span>
            </p>
          </div>

          <div className="bg-[#dce4ea] h-px relative shrink-0 w-full" />

          {/* w1 Trùng tuyến */}
          <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between leading-[1.45] overflow-clip relative shrink-0 text-[12px] w-full">
              <p className="font-['Inter:Regular',sans-serif] text-[#657684]">Trùng tuyến địa bàn · w1</p>
              <p className="font-['Roboto_Mono:SemiBold',sans-serif] font-semibold text-[#18252f]">{selectedOrder.breakdown.w1} / 50</p>
            </div>
            <div className="bg-[#dce4ea] content-stretch flex h-[4px] items-start overflow-clip relative rounded-[2px] shrink-0 w-full">
              <div
                className="bg-[#087f8c] h-[4px] relative rounded-[2px] shrink-0 transition-all"
                style={{ width: `${(selectedOrder.breakdown.w1 / 50) * 100}%` }}
              />
            </div>
          </div>

          {/* w2 SLA */}
          <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between leading-[1.45] overflow-clip relative shrink-0 text-[12px] w-full">
              <p className="font-['Inter:Regular',sans-serif] text-[#657684]">Độ cấp bách SLA · w2</p>
              <p className="font-['Roboto_Mono:SemiBold',sans-serif] font-semibold text-[#18252f]">{selectedOrder.breakdown.w2} / 30</p>
            </div>
            <div className="bg-[#dce4ea] content-stretch flex h-[4px] items-start overflow-clip relative rounded-[2px] shrink-0 w-full">
              <div
                className="bg-[#087f8c] h-[4px] relative rounded-[2px] shrink-0 transition-all"
                style={{ width: `${(selectedOrder.breakdown.w2 / 30) * 100}%` }}
              />
            </div>
          </div>

          {/* w3 Cân bằng tải */}
          <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between leading-[1.45] overflow-clip relative shrink-0 text-[12px] w-full">
              <p className="font-['Inter:Regular',sans-serif] text-[#657684]">Cân bằng tải · w3</p>
              <p className="font-['Roboto_Mono:SemiBold',sans-serif] font-semibold text-[#18252f]">{selectedOrder.breakdown.w3} / 20</p>
            </div>
            <div className="bg-[#dce4ea] content-stretch flex h-[4px] items-start overflow-clip relative rounded-[2px] shrink-0 w-full">
              <div
                className="bg-[#087f8c] h-[4px] relative rounded-[2px] shrink-0 transition-all"
                style={{ width: `${(selectedOrder.breakdown.w3 / 20) * 100}%` }}
              />
            </div>
          </div>

          {/* Diễn giải */}
          <div className="[word-break:break-word] bg-[#e7f4f3] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[7px] items-start leading-[1.45] p-[12px] relative rounded-[6px] shrink-0 text-[12px] w-full">
            <p className="relative shrink-0 text-[#066361] w-full">{selectedOrder.breakdown.explanation}</p>
            <p className="relative shrink-0 text-[#657684] w-full">{selectedOrder.breakdown.note || "Vị trí gần hỗ trợ; không cộng thêm vào 3 trọng số."}</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function History2() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="history">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g clipPath="url(#clip0_0_8)" id="history">
          <path d={svgPaths.p3d534280} id="Vector" stroke="#657684" strokeLinecap="round" strokeWidth="1.7" />
        </g>
        <defs>
          <clipPath id="clip0_0_8">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DiuChnhTaiX() {
  const { selectedOrder, changeDriver } = useContext(DispatchActionContext);

  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Điều chỉnh tài xế">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[20px] relative rounded-[inherit] size-full">
        {/* Header */}
        <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] text-[#18252f] text-[13px] whitespace-nowrap">Tài xế đề xuất</p>
          <div className="bg-[#e7f4f3] content-stretch flex items-start overflow-clip px-[8px] py-[5px] relative rounded-[4px] shrink-0">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#087f8c] text-[12px] whitespace-nowrap">Đang trực ca</p>
          </div>
        </div>

        {/* Dropdown đổi tài xế */}
        <select
          value={selectedOrder.driverId}
          onChange={(e) => changeDriver(selectedOrder.id, e.target.value)}
          className="w-full bg-[#f6f8fa] border border-[#087f8c] rounded-[6px] h-[43px] px-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#087f8c] text-[13px] outline-none cursor-pointer"
          title="Chọn tài xế khác cho đơn đang xem"
        >
          {DRIVER_OPTIONS.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name} · {d.code} ({d.route})
            </option>
          ))}
        </select>

        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] text-[#657684] text-[12px]">
          Nhấn tên tài xế để đổi nếu có vấn đề thực tế.
        </p>

        <div className="content-stretch flex gap-[7px] items-center overflow-clip relative shrink-0">
          <History2 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] text-[#657684] text-[12px] whitespace-nowrap">
            Đổi tài xế sẽ được ghi nhận vào Audit Log.
          </p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function TiDKinTheoLaChn() {
  const { orders, checkedCount } = useContext(DispatchActionContext);

  // Group load additions for checked orders
  const checkedOrders = orders.filter((o) => o.checked);
  const driverAdditions = DRIVER_OPTIONS.map((driver) => {
    const assignedCount = checkedOrders.filter((o) => o.driverId === driver.id).length;
    return {
      driver,
      added: assignedCount,
      newLoad: driver.baseLoad + assignedCount,
    };
  }).filter((item) => item.added > 0);

  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Tải dự kiến theo lựa chọn">
      <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip px-[20px] py-[16px] relative rounded-[inherit] size-full text-[12px] whitespace-nowrap">
        <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between not-italic overflow-clip relative shrink-0 w-full" data-name="Tóm tắt tài xế">
          <p className="leading-[normal] relative shrink-0 text-[#18252f] font-semibold">Tải sau phê duyệt</p>
          <p className="leading-[1.45] relative shrink-0 text-[#657684]">{driverAdditions.length} tài xế · {checkedCount} đơn</p>
        </div>

        {driverAdditions.length === 0 ? (
          <p className="text-[#8fa0b3] text-[12px] py-2">Chưa chọn đơn hàng nào để tính tải.</p>
        ) : (
          driverAdditions.map(({ driver, added, newLoad }) => (
            <div key={driver.id} className="content-stretch flex items-center justify-between leading-[1.45] overflow-clip relative shrink-0 w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[#657684]">{driver.name}</p>
              <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#087f8c]">+{added}</p>
                <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal text-[#18252f]">
                  {driver.baseLoad} → {newLoad}/{driver.maxLoad}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function GiiThichVaDiuChnh() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-[320px]" data-name="Giải thích và điều chỉnh">
      <GiiThichDKhp />
      <DiuChnhTaiX />
      <TiDKinTheoLaChn />
    </div>
  );
}

function DXutVaGiiThich() {
  return (
    <div className="content-stretch flex gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Đề xuất và giải thích">
      <BngDXutPhanCong />
      <GiiThichVaDiuChnh />
    </div>
  );
}

function ListChecks() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="list-checks">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="list-checks">
          <path d={svgPaths.p16620780} id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function BiuTngLaChn() {
  return (
    <div className="bg-[#e7f4f3] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[38px]" data-name="Biểu tượng lựa chọn">
      <ListChecks />
    </div>
  );
}

function PhngAn() {
  const { checkedCount, orders } = useContext(DispatchActionContext);
  const checkedOrders = orders.filter((o) => o.checked);
  const urgentCount = checkedOrders.filter((o) => o.isUrgent).length;
  const driverCount = new Set(checkedOrders.map((o) => o.driverId)).size;
  const manualCount = checkedOrders.filter((o) => o.intervention.includes("thủ công")).length;

  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[7px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Phương án">
      <p className="relative shrink-0 text-[#18252f] text-[15px] font-semibold">
        {checkedCount} đơn đã chọn · Sẵn sàng phê duyệt
      </p>
      <p className="relative shrink-0 text-[#657684] text-[12px]">
        {urgentCount} đơn SLA khẩn cấp · {driverCount} tài xế · {manualCount} thay đổi
      </p>
    </div>
  );
}

function TomTtLaChn() {
  return (
    <div className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0" data-name="Tóm tắt lựa chọn">
      <BiuTngLaChn />
      <PhngAn />
    </div>
  );
}

function PheDuytPhanCongDaChn() {
  const { onApprove, isApproving, checkedCount } = useContext(DispatchActionContext);
  const isDisabled = checkedCount === 0 || isApproving;

  return (
    <button
      type="button"
      onClick={isDisabled ? undefined : onApprove}
      disabled={isDisabled}
      className={`${
        isDisabled ? "bg-[#94a1ac] cursor-not-allowed opacity-60" : "bg-[#087f8c] hover:bg-[#066570] cursor-pointer"
      } h-[40px] relative rounded-[6px] shrink-0 transition-colors border border-transparent`}
      data-name="Phê duyệt phân công đã chọn"
    >
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <Check />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
          {isApproving ? "Đang phê duyệt..." : "Phê duyệt"}
        </p>
      </div>
    </button>
  );
}

function ThaoTacPheDuyt() {
  const { uncheckAll, checkedCount } = useContext(DispatchActionContext);
  return (
    <div className="content-stretch flex gap-[24px] items-center overflow-clip relative shrink-0" data-name="Thao tác phê duyệt">
      <button
        type="button"
        onClick={uncheckAll}
        disabled={checkedCount === 0}
        className={`[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal text-[12px] whitespace-nowrap ${
          checkedCount === 0 ? "text-[#b0bcc5] cursor-not-allowed" : "text-[#657684] hover:text-[#18252f] cursor-pointer hover:underline"
        }`}
      >
        Bỏ chọn
      </button>
      <PheDuytPhanCongDaChn />
    </div>
  );
}

function PhngAnDaChn() {
  return (
    <div className="content-stretch flex h-[78px] items-center justify-between overflow-clip px-[22px] relative shrink-0 w-full" data-name="Phương án đã chọn">
      <TomTtLaChn />
      <ThaoTacPheDuyt />
    </div>
  );
}

function ShieldCheck() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="shield-check">
          <path d={svgPaths.p35cb9570} id="Vector" stroke="#087F8C" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function CamKtPheDuyt() {
  return (
    <div className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0 w-full" data-name="Cam kết phê duyệt">
      <ShieldCheck />
      <p className="font-['Roboto_Mono:SemiBold',sans-serif] font-semibold leading-[1.45] text-[#18252f] text-[12px] whitespace-nowrap">READY_TO_DISPATCH → ASSIGNED</p>
      <div className="bg-[#dce4ea] h-[12px] relative shrink-0 w-px" data-name="Phân cách" />
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.45] text-[#18252f] text-[12px] whitespace-nowrap">currentLoad += 1 / đơn</p>
      <div className="bg-[#dce4ea] h-[12px] relative shrink-0 w-px" data-name="Phân cách" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] text-[#657684] text-[12px] whitespace-nowrap">Kiểm tra sức chứa · Giao dịch nguyên tử, lỗi sẽ hoàn tác.</p>
    </div>
  );
}

function FileClock() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="file-clock">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="file-clock">
          <path d={svgPaths.p4c3ac80} id="Vector" stroke="#657684" strokeLinecap="round" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function DuVtKimToan() {
  return (
    <div className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0 w-full" data-name="Dấu vết kiểm toán">
      <FileClock />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.45] text-[#657684] text-[12px] whitespace-nowrap">AuditLog lưu: người duyệt, thời gian, thuật toán v2.4 và thay đổi.</p>
      <div className="flex-[1_0_0] h-px min-w-px relative" />
      <p
        onClick={() => { window.location.hash = "audit"; }}
        className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] text-[#087f8c] hover:underline text-[12px] whitespace-nowrap cursor-pointer"
      >
        Lịch sử ↗
      </p>
    </div>
  );
}

function ThongTinGiaoDch() {
  return (
    <div className="bg-[#f6f8fa] relative rounded-bl-[10px] rounded-br-[10px] shrink-0 w-full" data-name="Thông tin giao dịch">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip px-[22px] py-[14px] relative rounded-[inherit] size-full">
        <CamKtPheDuyt />
        <DuVtKimToan />
      </div>
      <div aria-hidden className="absolute border-[#dce4ea] border-solid border-t inset-0 pointer-events-none rounded-bl-[10px] rounded-br-[10px]" />
    </div>
  );
}

function PheDuytVaKimToan() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Phê duyệt và kiểm toán">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <PhngAnDaChn />
        <ThongTinGiaoDch />
      </div>
      <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function BngDiuPhi() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[28px] relative shrink-0 w-full" data-name="Bảng điều phối">
      <NgCnhGiY />
      <DXutVaGiiThich />
      <PheDuytVaKimToan />
    </div>
  );
}

function KhongGianDiuPhi() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip relative" data-name="Không gian điều phối">
      <ThanhDiuHanhHub />
      <BngDiuPhi />
    </div>
  );
}

export default function Scr05GiYPhanCongTiu() {
  const [orders, setOrders] = useState<DispatchOrder[]>(INITIAL_DISPATCH_ORDERS);
  const [selectedOrderId, setSelectedOrderId] = useState<string>("MNX000001");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterSla, setFilterSla] = useState("all");
  const [filterIntervention, setFilterIntervention] = useState("all");
  const [isApproving, setIsApproving] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const toggleCheck = (id: string) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, checked: !o.checked } : o))
    );
  };

  const toggleCheckAll = () => {
    setOrders((prev) => {
      const allChecked = prev.every((o) => o.checked);
      return prev.map((o) => ({ ...o, checked: !allChecked }));
    });
  };

  const uncheckAll = () => {
    setOrders((prev) => prev.map((o) => ({ ...o, checked: false })));
  };

  const changeDriver = (orderId: string, driverId: string) => {
    const driver = DRIVER_OPTIONS.find((d) => d.id === driverId);
    if (!driver) return;

    setOrders((prev) =>
      prev.map((o) => {
        if (o.id === orderId) {
          return {
            ...o,
            driverId: driver.id,
            driverName: driver.name,
            route: driver.route,
            currentLoad: driver.baseLoad + 1,
            maxLoad: driver.maxLoad,
            intervention: `Đã đổi thủ công (${driver.name})`,
          };
        }
        return o;
      })
    );
    setToast(`Đã đổi tài xế đơn ${orderId} sang ${driver.name} (${driver.code})`);
    setTimeout(() => setToast(null), 3000);
  };

  // Filter logic
  const filteredOrders = orders.filter((o) => {
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      const matchId = o.id.toLowerCase().includes(q);
      const matchAddr = o.address.toLowerCase().includes(q) || o.ward.toLowerCase().includes(q);
      const matchDriver = o.driverName.toLowerCase().includes(q);
      if (!matchId && !matchAddr && !matchDriver) return false;
    }

    if (filterSla === "urgent" && !o.isUrgent) return false;
    if (filterSla === "checked" && !o.checked) return false;
    if (filterSla === "unchecked" && o.checked) return false;

    if (filterIntervention === "manual" && !o.intervention.includes("thủ công")) return false;
    if (filterIntervention === "rule" && o.intervention.includes("thủ công")) return false;

    return true;
  });

  const selectedOrder = orders.find((o) => o.id === selectedOrderId) || orders[0];
  const checkedCount = orders.filter((o) => o.checked).length;

  const handleApprove = async () => {
    if (isApproving || checkedCount === 0) return;
    setIsApproving(true);
    try {
      const checkedList = orders.filter((o) => o.checked);
      const primary = checkedList[0];

      await Promise.race([
        dispatchService.approveSuggestion(primary.id),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 1000)),
      ]).catch(() => null);

      sessionStorage.setItem("lastAssignedOrderId", primary.id);
      sessionStorage.setItem("lastAssignedDriverId", primary.driverId);
      sessionStorage.setItem("minerva_approved_dispatch_orders", JSON.stringify(checkedList));
      sessionStorage.removeItem("driver_orders_state");
      sessionStorage.removeItem("driver_has_transited");
      sessionStorage.removeItem("driver_has_delivered");
      setToast(`Đã duyệt phân công thành công ${checkedCount} đơn hàng!`);
      setTimeout(() => {
        window.location.hash = "driver";
      }, 900);
    } catch {
      const checkedList = orders.filter((o) => o.checked);
      sessionStorage.setItem("minerva_approved_dispatch_orders", JSON.stringify(checkedList));
      sessionStorage.removeItem("driver_orders_state");
      sessionStorage.removeItem("driver_has_transited");
      sessionStorage.removeItem("driver_has_delivered");
      setToast(`Đã duyệt phân công thành công ${checkedCount} đơn!`);
      setTimeout(() => {
        window.location.hash = "driver";
      }, 900);
    } finally {
      setIsApproving(false);
    }
  };

  return (
    <DispatchActionContext.Provider
      value={{
        orders,
        selectedOrderId,
        setSelectedOrderId,
        toggleCheck,
        toggleCheckAll,
        uncheckAll,
        changeDriver,
        searchQuery,
        setSearchQuery,
        filterSla,
        setFilterSla,
        filterIntervention,
        setFilterIntervention,
        onApprove: handleApprove,
        isApproving,
        checkedCount,
        filteredOrders,
        selectedOrder,
      }}
    >
      <div className="bg-[#f0f4f7] content-stretch flex items-start relative size-full" data-name="SCR-05 · Gợi ý phân công tối ưu">
        {toast && (
          <div className="fixed top-16 right-8 z-50 bg-[#15803d] text-white px-5 py-3 rounded-lg shadow-xl font-bold text-[13px] animate-bounce">
            ✓ {toast}
          </div>
        )}
        <DiuHngHub />
        <KhongGianDiuPhi />
      </div>
    </DispatchActionContext.Provider>
  );
}
