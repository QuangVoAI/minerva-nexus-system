# KẾ HOẠCH TIẾN ĐỘ VÀ PHÂN CÔNG CÔNG VIỆC (PROJECT SCHEDULE)
## Dự án: Minerva Nexus — Last-mile Delivery Dispatch System
**Học phần:** Phân tích & Thiết kế Yêu cầu (HK1_2026 - Lớp N10) — Đại học Tôn Đức Thắng (TDTU)  
**Project Leader / Merge Owner:** Võ Xuân Quang (MSSV: 523H0173)  
**Thời gian thực hiện:** 09/11/2026 – 06/12/2026 (4 Tuần / 4 Sprints)

---

## 1. TỔNG QUAN CÁC CỘT MỐC (MILESTONES TIMELINE)

| Sprint / Cột mốc | Thời gian | Trọng tâm chính | Kết quả đầu ra (Deliverable) |
| :--- | :---: | :--- | :--- |
| **Sprint 1: Core Data & Architecture Setup** | 09/11 – 15/11/2026 | Dữ liệu CSV, mô hình thực thể, khung ca trực, layout 4 tab | Skeleton chạy mượt, nạp được file CSV đơn và tài xế |
| **Sprint 2: Heuristic Dispatch & Mobile Flow** | 16/11 – 22/11/2026 | Thuật toán Heuristic, tính điểm rủi ro SLA, giao diện Mobile tài xế | Điều phối viên xem gợi ý phân công; Tài xế nhận/báo đơn |
| **Sprint 3: KPI Dashboard & Integration Testing** | 23/11 – 29/11/2026 | Thẻ chỉ số KPI thời gian thực, xử lý ngoại lệ biên, test tích hợp | Giao diện hoàn thiện 1:1 theo 18 màn hình Figma, không lỗi |
| **Sprint 4: Code Freeze, Final Demo & Submission** | 30/11 – 06/12/2026 | Đóng băng code, tổng duyệt 18 kịch bản demo, đóng gói báo cáo | Video demo, slide thuyết trình, source code và báo cáo nộp |

---

## 2. PHÂN CÔNG CHI TIẾT THEO TỪNG TUẦN (WEEKLY SPRINT BREAKDOWN)

### TUẦN 1 (09/11 – 15/11/2026): NỀN TẢNG DỮ LIỆU & KIẾN TRÚC BAN ĐẦU
> **Mục tiêu tuần:** Tất cả thành viên clone repo, hiểu rõ Interface, chạy thành công `./compile.sh` và `./run.sh`.

* **Dev 1 (Nhánh: `feature/order-management`):**
  - [x] Thiết lập `sample_orders.csv` với các trường nghiệp vụ chuẩn (`tracking_code`, `service_level`, `sla_deadline`, `cod_amount`, `status`).
  - [ ] Hoàn thiện `OrderRepository.java`: Đọc dữ liệu từ file CSV vào bộ nhớ In-Memory, kiểm tra tính hợp lệ dữ liệu (UC-04).
  - [ ] Thêm chức năng thêm mới đơn hàng thủ công và cập nhật trạng thái đơn (UC-04, UC-05).
* **Dev 2 (Nhánh: `feature/dispatch-engine`):**
  - [x] Thiết lập `sample_drivers.csv`: Danh sách tài xế, loại phương tiện (xe máy, xe tải), sức chứa ca.
  - [ ] Hoàn thiện `DriverRepository.java` và `ShiftRepository.java`: Quản lý ca trực sáng/chiều/tối (UC-08).
  - [ ] Viết hàm tính toán sức chứa còn lại của từng tài xế trong ca trực (`currentLoad / maxCapacity`).
* **Dev 3 (Nhánh: `feature/ui-dashboard`):**
  - [x] Rà soát cấu trúc khung giao diện `MainFrame.java` với 4 Tab điều hướng.
  - [ ] Tinh chỉnh bảng danh sách đơn hàng trên `DispatcherPanel.java` (render màu trạng thái, căn lề cột, format tiền COD).
  - [ ] Đảm bảo chuyển tab qua lại không gây lỗi render Java Swing.
* **Leader (Võ Xuân Quang):**
  - Khởi tạo GitHub repo, thiết lập branch protection, viết `CONTRIBUTING.md` và `SCHEDULE.md`.
  - Hướng dẫn 3 Dev thiết lập môi trường Git và giải thích ranh giới Interface.
  - Review và Merge PR Tuần 1 vào nhánh `main`.

---

### TUẦN 2 (16/11 – 22/11/2026): THUẬT TOÁN ĐIỀU PHỐI & LUỒNG TÁC VỤ TÀI XẾ
> **Mục tiêu tuần:** Hoàn thành lõi thuật toán Heuristic Dispatch Matching và kịch bản phát hàng của Tài xế.

* **Dev 1 (Nhánh: `feature/order-management`):**
  - [ ] Xây dựng bộ lọc tìm kiếm nâng cao: Lọc theo khu vực (Q7, Nhà Bè, Bình Chánh), gói dịch vụ (Express, Standard, Same-Day) (UC-07).
  - [ ] Hiện thực lớp `StatusHistory`: Ghi nhận lịch sử mỗi khi trạng thái đơn thay đổi (ai đổi, thời gian nào, lý do gì).
* **Dev 2 (Nhánh: `feature/dispatch-engine`):**
  - [ ] Hiện thực thuật toán **Dự báo rủi ro vi phạm cam kết SLA** (`UC-10`): Tính toán hạn chót SLA, phân cấp màu rủi ro (Xanh: an toàn, Vàng: cận giờ, Đỏ: nguy cơ trễ cao).
  - [ ] Hiện thực thuật toán **Heuristic Dispatch Engine** (`UC-11, UC-12`): Tự động đề xuất ghép đơn cho tài xế phù hợp dựa trên 3 tiêu chí: Đúng khu vực phụ trách $\rightarrow$ Xe còn sức chứa $\rightarrow$ Ưu tiên đơn rủi ro cao.
* **Dev 3 (Nhánh: `feature/ui-dashboard`):**
  - [ ] Hoàn thiện giao diện `DriverExecutionPanel.java` mô phỏng ứng dụng Mobile của tài xế (`SCR-07, SCR-08`).
  - [ ] Xây dựng luồng thao tác: Nhận chuyến $\rightarrow$ Bấm "Giao thành công" (xác nhận chữ ký) $\rightarrow$ Hoặc bấm "Báo thất bại" với 6 lý do chuẩn nghiệp vụ (Khách hẹn lại, Không liên lạc được, Sai địa chỉ...).
* **Leader (Võ Xuân Quang):**
  - Kiểm thử thuật toán Heuristic với tập dữ liệu đơn lớn (>100 đơn), đo thời gian xử lý (<100ms).
  - Kết nối dữ liệu giữa Tab Điều phối (`DispatcherPanel`) và Tab Tài xế (`DriverExecutionPanel`).
  - Review và Merge PR Tuần 2.

---

### TUẦN 3 (23/11 – 29/11/2026): BẢNG CHỈ SỐ KPI VẬN HÀNH & KIỂM THỬ TÍCH HỢP
> **Mục tiêu tuần:** Hoàn thiện Dashboard phân tích thời gian thực và kiểm thử liên tầng (End-to-End Testing).

* **Dev 1 (Nhánh: `feature/order-management`):**
  - [ ] Xử lý ngoại lệ file dữ liệu (Edge Cases): File CSV bị rỗng, mã đơn trùng, thời gian sai định dạng $\rightarrow$ Hiện thông báo lỗi thân thiện thay vì crash.
  - [ ] Tối ưu hóa truy vấn In-Memory để tìm kiếm và lọc tức thì.
* **Dev 2 (Nhánh: `feature/dispatch-engine`):**
  - [ ] Bổ sung cơ chế ghi đè thủ công (Manual Override): Cho phép điều phối viên hủy đề xuất AI và chỉ định tài xế theo ý muốn.
  - [ ] Viết hàm tính toán chỉ số thống kê phục vụ Dashboard: Tổng đơn đã gán, tỷ lệ tài xế đang hoạt động, tỷ lệ đơn có rủi ro cao.
* **Dev 3 (Nhánh: `feature/ui-dashboard`):**
  - [ ] Hoàn thiện `DashboardPanel.java` (`SCR-02, SCR-11`): Hiển thị các thẻ KPI (Tổng đơn, Đang giao, Đã giao thành công, Tỷ lệ giao đúng giờ OTP Rate, Doanh thu COD tạm thu).
  - [ ] Vẽ biểu đồ tiến độ phân bổ và bảng cảnh báo nguy cơ vi phạm SLA theo thời gian thực.
  - [ ] Rà soát 100% kích thước, khoảng cách padding, màu sắc theo hệ màu Design Token từ Figma.
* **Leader (Võ Xuân Quang):**
  - Chạy kịch bản tích hợp End-to-End từ lúc tạo đơn $\rightarrow$ Gợi ý tài xế $\rightarrow$ Duyệt $\rightarrow$ Tài xế nhận $\rightarrow$ Phát thành công $\rightarrow$ Cập nhật Dashboard.
  - Review và Merge PR Tuần 3.

---

### TUẦN 4 (30/11 – 06/12/2026): CODE FREEZE, TỔNG DUYỆT DEMO & ĐÓNG GÓI BÁO CÁO
> **Mục tiêu tuần:** Đóng băng mã nguồn, quay video demo, hoàn tất slide và nộp đồ án.

* **Toàn đội ngũ (01/12/2026): CODE FREEZE**
  - Ngừng commit tính năng mới; chỉ được phép sửa lỗi hiển thị hoặc lỗi chính tả nếu có.
* **Dev 1, Dev 2, Dev 3:**
  - Chạy thử chéo kịch bản của nhau để tìm lỗi tiềm ẩn.
  - Chuẩn bị nội dung báo cáo tương ứng với phần việc của mình (chụp ảnh màn hình chức năng, giải thích thuật toán, phân tích thiết kế class diagram).
* **Leader (Võ Xuân Quang):**
  - Tổng hợp mã nguồn vào nhánh `main`, tạo tag phát hành cuối cùng `v1.0.0-release`.
  - Tổng duyệt kịch bản Demo trực tiếp trên Java Swing và Web Demo.
  - Hoàn thiện tài liệu Báo cáo đồ án môn học (`523H0173_VoXuanQuang_Completed.docx`) và Slide thuyết trình.

---

## 3. MA TRẬN TRÁCH NHIỆM RACI (RACI MATRIX)

* **R (Responsible):** Người trực tiếp thực hiện công việc.
* **A (Accountable):** Người chịu trách nhiệm phê duyệt cao nhất (Leader).
* **C (Consulted):** Người được tham vấn ý kiến chuyên môn.
* **I (Informed):** Người được cập nhật tiến độ.

| Gói công việc (Work Package) | Dev 1 | Dev 2 | Dev 3 | Leader (Quang) |
| :--- | :---: | :---: | :---: | :---: |
| **1. Khung dự án & Interfaces** | I | I | I | **A / R** |
| **2. Quản lý Đơn hàng & CSV (UC-04, 05, 07)** | **R** | C | C | **A** |
| **3. Ca trực & Tài xế (UC-08)** | C | **R** | I | **A** |
| **4. Thuật toán SLA Risk & Heuristic (UC-10, 11, 12)** | I | **R** | C | **A** |
| **5. Luồng xử lý Tài xế Mobile (UC-14, 15, 16)** | C | I | **R** | **A** |
| **6. Giao diện & KPI Dashboard (UC-19)** | I | C | **R** | **A** |
| **7. Review Code & Merge PR** | I | I | I | **A / R** |
| **8. Báo cáo cuối kỳ & Slide Demo** | C | C | C | **A / R** |

---

## 4. QUY ĐỊNH HỌP VÀ ĐỒNG BỘ TIẾN ĐỘ (SYNC RULES)

1. **Daily Standup nhanh (10 phút online / tin nhắn nhóm lúc 21:00 mỗi ngày):**
   - Hôm nay đã hoàn thành task nào?
   - Ngày mai dự định làm task nào?
   - Có gặp khó khăn (blockers) nào về code hay logic không?
2. **Weekly Sync & Merge PR (Tối Chủ Nhật hàng tuần):**
   - Leader kiểm tra toàn bộ PR trong tuần, chạy thử nghiệm `./compile.sh` và `./run.sh`.
   - Tiến hành bấm **Merge** vào nhánh `main` và thông báo cho cả nhóm kéo code mới.
