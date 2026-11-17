# Kịch bản nghiệm thu Minerva Nexus

Tài liệu này là kịch bản để cả nhóm chạy đúng **một hệ thống thật** trước khi quay video hoặc bảo vệ. Không dùng dữ liệu giả trên giao diện để khẳng định chức năng đã chạy.

## 1. Chuẩn bị một lần

1. Cài Java 21, Node.js 20+ và MongoDB Atlas. Không commit `.env`.
2. Tại thư mục gốc, tạo `.env` cục bộ:

   ```bash
   MONGODB_URI='mongodb+srv://<user>:<password>@<cluster>/?retryWrites=true&w=majority'
   ```

3. Nạp dữ liệu hạ tầng và một ca/tài xế minh họa. Các script không chứa mật khẩu:

   ```bash
   set -a; source .env; set +a
   mongosh "$MONGODB_URI" --file docs/mongodb/bootstrap.js
   mongosh "$MONGODB_URI" --file docs/mongodb/seed-demo.js
   ```

4. Mở hai Terminal:

   ```bash
   # Terminal A
   set -a; source ../.env; set +a
   cd backend
   ./mvnw test
   ./mvnw spring-boot:run

   # Terminal B
   cd frontend
   npm install
   npm run dev
   ```

5. Kiểm tra `http://localhost:8081/api/health`, sau đó mở URL Vite có `?mode=live`, ví dụ `http://localhost:5173/react/?mode=live#orders`.

## 2. Luồng chính bắt buộc (3–5 phút)

1. **Tạo đơn:** ở `#create-order`, tạo đơn STANDARD hoặc EXPRESS, điền hạn SLA ở tương lai.
2. **Tiếp nhận:** ở `#orders`, chọn đơn mới tạo và xác nhận đơn đủ điều kiện phát. Trạng thái phải đổi `PENDING → READY_TO_DISPATCH`; timeline có người thao tác và thời điểm.
3. **Điều phối:** ở `#dispatch`, xem lý do gợi ý: khu vực, ca có mặt, dịch vụ, sức chứa/tải và mức SLA. Duyệt một gợi ý. Trạng thái thành `ASSIGNED`.
4. **Tài xế:** vào `#driver`, chọn đúng tài xế được gán, bấm **Nhận đơn**, rồi **Bắt đầu đi giao** và **Giao thành công**. Trạng thái tuần tự là `DRIVER_ACCEPTED → IN_TRANSIT → DELIVERED`.
5. **Kiểm chứng:** mở `#order-detail`, đối chiếu timeline nội bộ và nhật ký audit. Mở dashboard để chứng minh KPI được tính lại từ dữ liệu hiện tại.

Không nói “AI”, “machine learning”, “tối ưu tuyến đường” hay “GPS thời gian thực”. Cách gọi đúng là **gợi ý phân công theo quy tắc nghiệp vụ, có người vận hành duyệt**.

## 3. Luồng ngoại lệ cần quay riêng

### A. Thất bại và phát lại

Tạo/gán/nhận/bắt đầu giao một đơn như luồng chính, sau đó tại `#driver` bấm báo thất bại và nhập lý do.

- Lần 1 hoặc 2: `IN_TRANSIT → FAILED`; Hub chọn phát lại: `FAILED → READY_FOR_REDELIVERY`, rồi điều phối lại.
- Lần 3: hệ thống bắt buộc `IN_TRANSIT → FAILED → RETURN_PENDING`. Hub xác nhận hàng về thực tế để chuyển `RETURN_PENDING → RETURNED`.

### B. Hủy đơn và giải phóng tải

Tạo một đơn, tiếp nhận và duyệt gán cho tài xế nhưng **chưa để tài xế nhận**. Vào `#cancel`, nhập lý do hủy.

Kết quả cần chỉ ra:

- `ASSIGNED → CANCELLED`;
- đơn không còn tài xế gán hiện tại;
- tải đang hoạt động của tài xế giảm đi một;
- timeline/audit có lý do và actor.

Sau khi tài xế đã nhận đơn, UI/API phải từ chối hủy trực tiếp; đây là ràng buộc để không làm mất quyền kiểm soát hàng đang đi giao.

## 4. Bằng chứng cần có trước khi nộp

- Ảnh/video luồng chính, có address bar/API health hoặc console backend đang chạy.
- Một ảnh mỗi nhánh ngoại lệ: lần thất bại thứ nhất, lần thứ ba/Chờ hoàn, hủy đơn đã gán.
- Ảnh `./mvnw test` thành công và `npm run build` thành công.
- Ảnh timeline nội bộ và audit log của chính mã vận đơn tạo trong demo.
- Một trang dự phòng: danh sách endpoint trong `docs/M1_API.md` và giải thích 15 đơn/ca chỉ tính các trạng thái `ASSIGNED`, `DRIVER_ACCEPTED`, `IN_TRANSIT`.

## 5. Checklist trả lời phản biện

| Câu hỏi | Trả lời ngắn |
| --- | --- |
| SLA có phải ML không? | Không. SLA được đánh giá bằng quy tắc thời gian còn lại đến hạn dịch vụ. |
| Vì sao chưa dùng bản đồ/TSP? | MVP điều phối tại một Hub, giới hạn khu vực và tải; tối ưu tuyến đường là phạm vi khác. |
| 15 đơn/ca nghĩa là gì? | Là tải đang hoạt động của một tài xế trong ca, không phải tổng số đơn lịch sử. |
| Ai quyết định phân công? | Hệ thống đưa gợi ý có lý do; nhân viên Hub duyệt hoặc chỉnh. |
| Khi thất bại ba lần? | Chuyển Chờ hoàn; chỉ Hub xác nhận hàng thực tế về mới thành Đã hoàn. |
