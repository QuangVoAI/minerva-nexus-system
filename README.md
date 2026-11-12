# MINERVA NEXUS — LAST-MILE DELIVERY OPERATIONS SYSTEM
> **Hệ thống Quản lý và Điều hành Giao hàng Chặng cuối**
> **Đồ án môn học:** Phân tích & Thiết kế Yêu cầu (HK1_2026 - Lớp N10)  
> **Trường:** Đại học Tôn Đức Thắng (TDTU) — Khoa Công nghệ Thông tin  
> **Nhóm thực hiện:** N10 — **Leader / Merge Owner:** Võ Xuân Quang (MSSV: 523H0173)

---

## 1. GIỚI THIỆU TỔNG QUAN

Minerva Nexus là phần mềm mô phỏng hệ thống điều hành tại một Hub giao hàng chặng cuối quy mô vừa. Hệ thống giải quyết bài toán cốt lõi trong Logistics:
* Tiếp nhận và phân loại đơn hàng theo khu vực và gói dịch vụ.
* Đánh giá và cảnh báo nguy cơ vi phạm thời gian cam kết giao hàng bằng **quy tắc SLA**.
* Đề xuất tài xế theo khu vực, trạng thái ca, sức chứa, mức dịch vụ và hạn SLA; Nhân viên vận hành Hub là người duyệt cuối.
* Cho phép tài xế nhận đơn, xác nhận phát thành công hoặc ghi nhận sự cố giao thất bại theo đúng chuẩn nghiệp vụ.
* Dashboard thống kê các chỉ số vận hành then chốt (KPI) theo thời gian thực.

---

## 2. KIẾN TRÚC HỆ THỐNG

Dự án được xây dựng theo kiến trúc phân tầng chuẩn mực trong Công nghệ phần mềm:

```
frontend/                         # React + Vite, giao diện theo Figma
backend/                          # Java 21 + Spring Boot + MongoDB
├── src/main/java/.../controller  # REST API
├── src/main/java/.../service     # Quy tắc SLA, trạng thái đơn và phân công
├── src/main/java/.../document    # MongoDB documents
└── src/main/java/.../repository  # Spring Data MongoDB repositories
docs/DATA_STRUCTURE.md            # Cấu trúc collection và state machine
src/                              # Prototype Java Swing/HttpServer cũ, chỉ giữ để tham khảo
```

---

## 3. HƯỚNG DẪN CÀI ĐẶT & CHẠY CHƯƠNG TRÌNH

### Yêu cầu môi trường
* Java 21, Maven 3.9+, Node.js 20+ và MongoDB Atlas.
* Không đưa URI MongoDB, mật khẩu hay token vào Git.

### Chạy frontend React
Mở Terminal tại thư mục `frontend` và chạy:
```bash
npm install
npm run dev
```

### Chạy backend Spring Boot
Tạo biến môi trường `MONGODB_URI` trong máy cục bộ, sau đó chạy:

```bash
cd backend
mvn spring-boot:run
```

Sau khi chạy, kiểm tra kết nối tại `GET http://localhost:8081/api/health`.

Tài liệu cấu trúc MongoDB và quy tắc trạng thái nằm tại [docs/DATA_STRUCTURE.md](docs/DATA_STRUCTURE.md).

---

## 4. KỊCH BẢN DEMO LIVE 5 BƯỚC CHO HỘI ĐỒNG BẢO VỆ

Khi lên bục thuyết trình trước giảng viên, thực hiện đúng 5 bước sau trong vòng **3–5 phút**:

* **Bước 1 (Tab 1 - Điều phối & Cảnh báo SLA):** 
  * Giới thiệu danh sách đơn hàng nạp tự động từ kho.
  * Chỉ vào cột **Rủi Ro SLA** có màu **🔴 NGUY CƠ CAO** và **🟡 CẢNH BÁO** để giải thích cho giảng viên: *Hệ thống tự động tính thời gian còn lại đến hạn chót; những đơn chỉ còn < 60 phút sẽ được gắn cờ đỏ khẩn cấp.*
* **Bước 2 (Tạo gợi ý phân công theo quy tắc):**
  * Hệ thống chỉ xét tài xế đang hoạt động, có mặt trong ca, đúng khu vực và còn sức chứa.
  * Nếu có nhiều tài xế phù hợp, hệ thống ưu tiên đơn Express/Same-day, SLA gần hơn và tải đang hoạt động thấp hơn.
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

