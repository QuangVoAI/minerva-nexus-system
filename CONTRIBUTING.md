# HƯỚNG DẪN LÀM VIỆC NHÓM VÀ QUY TRÌNH PULL REQUEST (PR)
## Dự án: Minerva Nexus — Last-mile Delivery Dispatch System
**Môn học:** Phân tích & Thiết kế Yêu cầu (HK1_2026 - Lớp N10) — Đại học Tôn Đức Thắng (TDTU)  
**Project Leader / Reviewer / Merge Owner:** Võ Xuân Quang (MSSV: 523H0173)

---

### 1. PHÂN CHIA TRÁCH NHIỆM 3 THÀNH VIÊN DEV

Để tránh xung đột code (merge conflicts) tuyệt đối, toàn bộ hệ thống đã được thiết kế theo mô hình phân tầng hướng giao diện (Interface-driven Layered Architecture). Mỗi thành viên phụ trách một package độc lập:

| Thành viên | Nhánh Git (Branch) | Package phụ trách | Trách nhiệm chính theo SRS |
| :--- | :--- | :--- | :--- |
| **Dev 1** | `feature/order-management` | `repository/`, `service/impl/OrderServiceImpl.java`, `data/` | • Quản lý danh mục đơn hàng (`UC-04, UC-07`).<br>• Xử lý đọc/ghi và xác thực file `sample_orders.csv`.<br>• Quản lý lịch sử thay đổi trạng thái đơn (`StatusHistory`). |
| **Dev 2** | `feature/dispatch-engine` | `service/impl/DispatchEngineImpl.java`, `service/impl/DriverShiftServiceImpl.java` | • Quản lý ca trực & danh sách tài xế (`UC-08`).<br>• Thuật toán tính điểm rủi ro SLA (`UC-10`).<br>• Thuật toán phân công tài xế thông minh Heuristic (`UC-11, UC-12`). |
| **Dev 3** | `feature/ui-dashboard` | `ui/` (`DispatcherPanel`, `ShiftDriverPanel`, `DriverExecutionPanel`, `DashboardPanel`) | • Tinh chỉnh giao diện Java Swing trực quan, màu sắc hiện đại.<br>• Hoàn thiện luồng thao tác của Tài xế (`UC-14, UC-15, UC-16`).<br>• Thống kê thẻ chỉ số KPI & tỷ lệ hoàn thành (`UC-19`). |
| **Leader (Quang)** | `main` & `develop` | Toàn bộ dự án | • Cấu hình Skeleton ban đầu, Contracts, Interfaces.<br>• Review Code từng Pull Request (PR), chạy test biên dịch và bấm Merge.<br>• Điều phối tiến độ và chốt bản nộp cuối kỳ. |

---

### 2. QUY TRÌNH PHÁT TRIỂN VÀ TẠO PULL REQUEST (PR)

Tất cả thành viên tuân thủ quy tắc 5 bước sau khi làm việc:

#### Bước 1: Kéo code mới nhất từ nhánh `main` về máy
```bash
git checkout main
git pull origin main
```

#### Bước 2: Tạo nhánh riêng theo đúng tên quy định
```bash
# Ví dụ Dev 1 làm về Quản lý đơn hàng:
git checkout -b feature/order-management

# Ví dụ Dev 2 làm về Dispatch Engine:
git checkout -b feature/dispatch-engine

# Ví dụ Dev 3 làm về Giao diện:
git checkout -b feature/ui-dashboard
```

#### Bước 3: Lập trình và kiểm tra biên dịch trước khi commit
Trước khi commit, bắt buộc phải chạy script biên dịch để đảm bảo không gãy code:
```bash
./compile.sh
```
Nếu biên dịch báo `✅ Biên dịch thành công!`, tiến hành commit với thông điệp rõ ràng theo chuẩn:
```bash
git add .
git commit -m "feat(order): bo sung bo loc don theo khu vuc Q7"
# Quy chuẩn prefix:
# feat: Tính năng mới
# fix: Sửa lỗi
# style: Căn chỉnh giao diện Swing
# docs: Cập nhật tài liệu
```

#### Bước 4: Đẩy nhánh lên Remote Repository & Tạo Pull Request (PR)
```bash
git push -u origin feature/<ten-nhanh-cua-ban>
```
Sau đó truy cập vào GitHub/GitLab của nhóm:
1. Nhấn nút **New Pull Request**.
2. Chọn Base: `main` $\leftarrow$ Compare: `feature/<ten-nhanh-cua-ban>`.
3. Ghi rõ mô tả:
   - Các chức năng đã làm xong trong PR này.
   - Ảnh chụp màn hình chạy thử `./run.sh` (nếu làm phần UI).
4. Gán **Reviewer** là `Võ Xuân Quang`.

---

### 3. CHECKLIST DÀNH CHO LEADER KHI REVIEW VÀ MERGE CODE

Trước khi bấm nút **Merge Pull Request**, Quang cần kiểm tra:
- [ ] PR không sửa vào các file interface cốt lõi (`IOrderService`, `IDispatchEngine`...) nếu chưa thảo luận trước.
- [ ] Kéo PR về máy chạy `./compile.sh` biên dịch không có lỗi.
- [ ] Chạy `./run.sh` kiểm tra dữ liệu mẫu load đúng và giao diện đồ họa không bị treo.
- [ ] Bấm **Squash and Merge** hoặc **Merge Pull Request** vào `main`.
- [ ] Thông báo cho cả nhóm cập nhật lại nhánh `main` của mình.
