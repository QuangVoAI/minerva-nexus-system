# MINERVA NEXUS — LAST-MILE DELIVERY DISPATCH SYSTEM
> **Hệ thống Quản lý và Điều hành Giao hàng Chặng cuối Thông minh**  
> **Đồ án môn học:** Phân tích & Thiết kế Yêu cầu (HK1_2026 - Lớp N10)  
> **Trường:** Đại học Tôn Đức Thắng (TDTU) — Khoa Công nghệ Thông tin  
> **Nhóm thực hiện:** N10 — **Leader / Merge Owner:** Võ Xuân Quang (MSSV: 523H0173)

---

## 1. GIỚI THIỆU TỔNG QUAN

Minerva Nexus là phần mềm mô phỏng hệ thống điều hành tại một Hub giao hàng chặng cuối quy mô vừa. Hệ thống giải quyết bài toán cốt lõi trong Logistics:
* Tiếp nhận và phân loại đơn hàng theo khu vực và gói dịch vụ.
* Đánh giá và cảnh báo nguy cơ vi phạm thời gian cam kết giao hàng (**SLA Risk Prediction: Xanh / Vàng / Đỏ**).
* Tự động đề xuất phân bổ đơn hàng cho tài xế phù hợp theo tuyến đường và sức chứa (**AI / Heuristic Dispatch Engine**).
* Cho phép tài xế nhận đơn, xác nhận phát thành công hoặc ghi nhận sự cố giao thất bại theo đúng chuẩn nghiệp vụ.
* Dashboard thống kê các chỉ số vận hành then chốt (KPI) theo thời gian thực.

---

## 2. KIẾN TRÚC HỆ THỐNG (LAYERED ARCHITECTURE)

Dự án được xây dựng theo kiến trúc phân tầng chuẩn mực trong Công nghệ phần mềm:

```
src/vn/edu/tdtu/minervanexus/
├── common/        # Kiểu dữ liệu dùng chung (OrderStatus, ServiceLevel, RiskLevel, UserRole, FailureReason)
├── model/         # Các thực thể CSDL (DeliveryOrder, Driver, ServiceArea, DeliveryShift, Assignment, ...)
├── repository/    # Tầng lưu trữ dữ liệu In-Memory và CSV Parser (OrderRepository, DriverRepository, ...)
├── service/       # Giao diện nghiệp vụ (IOrderService, IDriverShiftService, IDispatchEngine, IAnalyticsService)
│   └── impl/      # Hiện thực thuật toán nghiệp vụ & Heuristic Dispatch Matching
└── ui/            # Giao diện đồ họa người dùng Java Swing
    ├── MainFrame.java             (Khung điều hướng trung tâm 4 Tab)
    ├── DispatcherPanel.java       (Bàn làm việc Điều phối viên & Cảnh báo SLA)
    ├── ShiftDriverPanel.java      (Quản lý ca trực & Danh sách tài xế)
    ├── DriverExecutionPanel.java  (Mô phỏng Ứng dụng Tài xế trên Mobile)
    └── DashboardPanel.java        (Bảng chỉ số KPI vận hành)
```

---

## 3. HƯỚNG DẪN CÀI ĐẶT & CHẠY CHƯƠNG TRÌNH

### Yêu cầu môi trường
* Máy tính đã cài đặt **Java JDK 17** trở lên (Khuyến nghị OpenJDK 17, 21 hoặc 25).
* Không cần cài đặt Maven/Gradle bên ngoài (đã tối ưu hóa chạy trực tiếp).

### Cách 1: Chạy nhanh bằng Terminal (Khuyến nghị khi Demo)
Mở cửa sổ Terminal tại thư mục `minerva-nexus-system` và chạy:
```bash
# 1. Biên dịch toàn bộ mã nguồn
./compile.sh

# 2. Khởi chạy giao diện ứng dụng
./run.sh
```

### Cách 2: Mở trong IntelliJ IDEA / Eclipse
1. Mở IDE $\rightarrow$ **Open** $\rightarrow$ chọn thư mục `minerva-nexus-system`.
2. Đánh dấu thư mục `src` là **Sources Root** (Chuột phải vào `src` $\rightarrow$ *Mark Directory as* $\rightarrow$ *Sources Root*).
3. Tìm file `src/vn/edu/tdtu/minervanexus/Main.java` $\rightarrow$ Chuột phải bấm **Run 'Main.main()'**.

---

## 4. KỊCH BẢN DEMO LIVE 5 BƯỚC CHO HỘI ĐỒNG BẢO VỆ

Khi lên bục thuyết trình trước giảng viên, thực hiện đúng 5 bước sau trong vòng **3–5 phút**:

* **Bước 1 (Tab 1 - Điều phối & Cảnh báo SLA):** 
  * Giới thiệu danh sách đơn hàng nạp tự động từ kho.
  * Chỉ vào cột **Rủi Ro SLA** có màu **🔴 NGUY CƠ CAO** và **🟡 CẢNH BÁO** để giải thích cho giảng viên: *Hệ thống tự động tính thời gian còn lại đến hạn chót; những đơn chỉ còn < 60 phút sẽ được gắn cờ đỏ khẩn cấp.*
* **Bước 2 (Chạy thuật toán Dispatch):**
  * Nhấn nút **"⚡ Chạy gợi ý phân công AI (Dispatch Engine)"**.
  * Bảng gợi ý tự động sinh ra các cặp Đơn - Tài xế tối ưu kèm điểm số (Score) và lý do ghép nối.
* **Bước 3 (Phê duyệt phân công):**
  * Chọn một dòng gợi ý $\rightarrow$ Nhấn **"✔ Phê duyệt phân công đã chọn"**.
  * Quan sát đơn hàng lập tức chuyển trạng thái sang `ASSIGNED` và tên tài xế được cập nhật.
* **Bước 4 (Tab 3 - Mô phỏng Tài xế thực hiện giao hàng):**
  * Chuyển sang Tab 3 $\rightarrow$ Chọn tài xế vừa được gán đơn.
  * Nhấn **"🚀 Bắt đầu đi giao"** (chuyển sang `IN_TRANSIT`).
  * Nhấn **"✔ Xác nhận Giao thành công"** (chuyển sang `DELIVERED`).
  * Với đơn khác, bấm **"✖ Báo Giao thất bại"** $\rightarrow$ Chọn lý do *"Khách không nghe máy"* $\rightarrow$ Hệ thống tự động ghi nhận ngoại lệ và tăng số lần thất bại (`failureCount`).
* **Bước 5 (Tab 4 - Dashboard KPI):**
  * Chuyển sang Tab 4 để giảng viên xem các thẻ chỉ số KPI: Tỷ lệ giao thành công (%), Tỷ lệ đúng hạn SLA (%), và Biểu đồ tải của từng tài xế tự động cập nhật theo thời gian thực!

---

## 5. BẢN QUYỀN VÀ BẢO TRÌ
* Đồ án học thuật thực hiện bởi Nhóm N10 - Khoa Công nghệ Thông tin - Trường ĐH Tôn Đức Thắng.
* Mọi đóng góp code vui lòng tham khảo file [CONTRIBUTING.md](CONTRIBUTING.md).
