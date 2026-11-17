import { useState } from "react";
import svgPaths from "./svg-jhj2h66zpj";
import imgTrungTamLogistics from "./f338b339f48cced41b3fa9472c89c49e07de2306.png";

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
    <div className="bg-[#087f8c] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[40px]" data-name="Dấu hiệu Hub">
      <Boxes />
    </div>
  );
}

function ThngHiu() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Thương hiệu">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[17px] text-white tracking-[1px]">HUB / OPS</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#b8d0db] text-[12px] tracking-[1.2px]">Vận hành logistics</p>
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

function NhanHThng() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Nhãn hệ thống">
      <div className="bg-[#58bac2] h-[2px] relative shrink-0 w-[24px]" data-name="Dấu nhận diện" />
    </div>
  );
}

function KhuVcVnHanh() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[5px] items-start leading-[1.45] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Khu vực vận hành">
      <p className="relative shrink-0 text-[#c2dde5] text-[12px] tracking-[1.2px]">Mạng lưới Hub</p>
      <p className="relative shrink-0 text-[16px] text-white">Quận 7 · TP. Hồ Chí Minh</p>
    </div>
  );
}

function MapPin() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="map-pin">
          <path d={svgPaths.p1d906b80} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function ChuThichHinhnh() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Chú thích hình ảnh">
      <KhuVcVnHanh />
      <MapPin />
    </div>
  );
}

function HinhnhHub() {
  return (
    <div className="content-stretch flex flex-col h-[282px] items-start justify-end overflow-clip p-[22px] relative rounded-[16px] shrink-0 w-full" data-name="Hình ảnh Hub">
      <div className="absolute h-[282px] left-0 top-0 w-[488px]" data-name="Trung tâm logistics">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTrungTamLogistics} />
      </div>
      <div className="absolute bg-gradient-to-b from-[20%] from-[rgba(8,46,64,0)] h-[282px] left-0 to-[rgba(8,46,64,0.91)] top-0 w-[488px]" data-name="Lớp tăng tương phản" />
      <ChuThichHinhnh />
    </div>
  );
}

function GiiThiu() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start overflow-clip relative shrink-0 w-full" data-name="Giới thiệu">
      <NhanHThng />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.2] min-w-full not-italic relative shrink-0 text-[40px] text-white tracking-[-0.8px] w-[min-content]">Đúng Hub. Đúng vai trò. Vận hành thông suốt.</p>
      <HinhnhHub />
    </div>
  );
}

function ShieldCheck() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="shield-check">
          <path d={svgPaths.p45959d0} id="Vector" stroke="#B8D0DB" strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function CamKtBoMt() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Cam kết bảo mật">
      <ShieldCheck />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#b8d0db] text-[12px] whitespace-nowrap">Truy cập được phân quyền theo Hub trực thuộc</p>
    </div>
  );
}

function KhongGianVnHanh() {
  return (
    <div className="bg-[#082e40] h-[960px] relative shrink-0 w-[600px]" data-name="Không gian vận hành">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip p-[56px] relative rounded-[inherit] size-full">
        <NhnDinHub />
        <GiiThiu />
        <CamKtBoMt />
      </div>
      <div aria-hidden className="absolute border-[#1e3a4e] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Globe() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="globe">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g clipPath="url(#clip0_0_18)" id="globe">
          <path d={svgPaths.p3f8c6c80} id="Vector" stroke="#657684" strokeLinecap="round" strokeWidth="1.8" />
        </g>
        <defs>
          <clipPath id="clip0_0_18">
            <rect fill="white" height="15" width="15" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NgonNg() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-name="Ngôn ngữ">
      <Globe />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[13px] whitespace-nowrap">Tiếng Việt</p>
    </div>
  );
}

function ThanhTinIch() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Thanh tiện ích">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#657684] text-[12px] whitespace-nowrap">Hệ thống quản lý vận hành</p>
      <NgonNg />
    </div>
  );
}

function LiChao() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Lời chào">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.3] not-italic relative shrink-0 text-[#142b3b] text-[28px] tracking-[-0.6px] w-full">Đăng nhập hệ thống</p>
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
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[1.45] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Thông tin Hub">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#142b3b] text-[15px]">Hub Q7-01</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#657684] text-[13px]">Khu chế xuất Tân Thuận</p>
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
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[14px] whitespace-nowrap">Chi nhánh / Bưu cục vận hành</p>
      <HubDangChn />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#657684] text-[12px] w-[min-content]">Chỉ truy cập dữ liệu Hub bạn trực thuộc.</p>
    </div>
  );
}

function EyeOff() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="eye-off">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_16)" id="eye-off">
          <path d={svgPaths.pa663f80} id="Vector" stroke="#657684" strokeLinecap="round" strokeWidth="1.8" />
        </g>
        <defs>
          <clipPath id="clip0_0_16">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
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

function FormDangNhp() {
  const [username, setUsername] = useState("NV0128");
  const [password, setPassword] = useState("password123");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedHub, setSelectedHub] = useState("Hub Q7-01");

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const uname = username.trim().toUpperCase();
    if (uname.startsWith("TX") || uname.includes("DRIVER")) {
      window.location.hash = "driver";
    } else {
      window.location.hash = "dashboard";
    }
  };

  return (
    <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full" data-name="Form đăng nhập">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Chọn Hub">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[14px] whitespace-nowrap">Chi nhánh / Bưu cục vận hành</p>
        <div className="bg-white h-[64px] relative rounded-[12px] shrink-0 w-full" data-name="Hub đang chọn">
          <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[14px] relative rounded-[inherit] size-full">
            <Warehouse />
            <select
              value={selectedHub}
              onChange={(e) => setSelectedHub(e.target.value)}
              className="flex-1 bg-transparent font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#142b3b] text-[15px] outline-none cursor-pointer"
            >
              <option value="Hub Q7-01">Hub Q7-01 — Khu chế xuất Tân Thuận</option>
              <option value="Hub Q1-01">Hub Q1-01 — Trung tâm Bến Nghé</option>
              <option value="Hub BT-02">Hub BT-02 — Bình Thạnh Phước Long</option>
            </select>
          </div>
          <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#657684] text-[12px] w-[min-content]">Chỉ truy cập dữ liệu Hub bạn trực thuộc.</p>
      </div>

      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Trường đăng nhập">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[14px] whitespace-nowrap">Tên đăng nhập / Mã nhân viên</p>
        <div className="bg-white h-[50px] relative rounded-[12px] shrink-0 w-full" data-name="Ô nhập liệu">
          <div className="content-stretch flex items-center overflow-clip px-[14px] relative rounded-[inherit] size-full">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="VD: NV0128 hoặc TX045"
              className="w-full bg-transparent font-['Inter:Regular',sans-serif] text-[#142b3b] text-[14px] outline-none"
            />
          </div>
          <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
        </div>
      </div>

      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Trường đăng nhập">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[#142b3b] text-[14px] whitespace-nowrap">Mật khẩu</p>
        <div className="bg-white h-[50px] relative rounded-[12px] shrink-0 w-full" data-name="Ô nhập liệu">
          <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[14px] relative rounded-[inherit] size-full">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
              className="w-full bg-transparent font-['Inter:Regular',sans-serif] text-[#142b3b] text-[14px] outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="shrink-0 text-[#657684] hover:text-[#142b3b] focus:outline-none cursor-pointer"
            >
              <EyeOff />
            </button>
          </div>
          <div aria-hidden className="absolute border border-[#dce4ea] border-solid inset-0 pointer-events-none rounded-[12px]" />
        </div>
      </div>

      <button
        type="submit"
        className="bg-[#087f8c] hover:bg-[#066570] cursor-pointer transition-colors content-stretch flex gap-[10px] h-[50px] items-center justify-center overflow-clip relative rounded-[12px] shrink-0 w-full border-none"
        data-name="Đăng nhập"
      >
        <span className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">Đăng nhập</span>
        <ArrowRight />
      </button>
    </form>
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
    <div className="content-stretch flex flex-col gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Hỗ trợ tài khoản">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.45] min-w-full not-italic relative shrink-0 text-[#657684] text-[13px] text-center w-[min-content]">Tài khoản do IT / Admin cấp. Không đăng ký tự do.</p>
      <LienHHTr />
    </div>
  );
}

function DangNhpTaiKhon() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Đăng nhập tài khoản">
      <LiChao />
      <FormDangNhp />
      <div className="bg-[#dce4ea] h-px relative shrink-0 w-full" data-name="Phân cách" />
      <HTrTaiKhon />
    </div>
  );
}

function ChanTrang() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#657684] text-[12px] w-full whitespace-nowrap" data-name="Chân trang">
      <p className="relative shrink-0">© 2026 HUB / OPS</p>
      <p className="relative shrink-0">Dành cho nhân sự nội bộ</p>
    </div>
  );
}

function KhuVcDangNhp() {
  return (
    <div className="bg-[#f0f4f7] content-stretch flex flex-[1_0_0] flex-col h-[960px] items-center justify-between min-w-px overflow-clip px-[64px] py-[40px] relative" data-name="Khu vực đăng nhập">
      <ThanhTinIch />
      <DangNhpTaiKhon />
      <ChanTrang />
    </div>
  );
}

export default function Scr01DangNhpDesktop() {
  return (
    <div className="bg-[#f0f4f7] content-stretch flex items-start relative size-full" data-name="SCR-01 · Đăng nhập desktop">
      <KhongGianVnHanh />
      <KhuVcDangNhp />
    </div>
  );
}