# M1 — Đơn hàng, SLA và lịch sử vận hành nội bộ

Minerva Nexus là MVP điều hành tại **một Hub giao hàng chặng cuối**. Tài liệu này mô tả API nội bộ cho nhân viên Hub và tài xế trong luồng demo. Không có API hoặc giao diện tra cứu đơn công khai trong phạm vi đã chốt.

## Khởi chạy

Ứng dụng cần Java 21 và hai biến môi trường cục bộ: `MONGODB_URI` và (tuỳ chọn) `SERVER_PORT`. Không commit file `.env` hay URI chứa mật khẩu.

```sh
set -a; source ../.env; set +a
export JAVA_HOME=/opt/homebrew/opt/openjdk@21
export PATH="$JAVA_HOME/bin:$PATH"
cd backend
./mvnw test
./mvnw spring-boot:run
```

`X-Actor-Id` chỉ ghi actor vào audit trong MVP, **không phải cơ chế xác thực hay phân quyền**. Đây là giới hạn minh bạch của bản demo học thuật.

## Hợp đồng chính

| Method | Path | Mục đích |
| --- | --- | --- |
| GET | `/api/health` | Kiểm tra backend/MongoDB sẵn sàng |
| GET, POST | `/api/orders` | Danh sách hoặc tạo đơn |
| GET | `/api/orders/search` | Tìm kiếm/lọc/phân trang |
| GET | `/api/orders/{id}` | Hồ sơ đơn nội bộ |
| GET | `/api/orders/{id}/timeline` | Lịch sử trạng thái nội bộ |
| POST | `/api/orders/{id}/receive` | `PENDING → READY_TO_DISPATCH` |
| PATCH | `/api/orders/{id}/status?target=...` | Chuyển trạng thái hợp lệ |
| POST | `/api/orders/{id}/failures` | Ghi nhận giao thất bại |
| POST | `/api/orders/{id}/return/confirm` | Hub xác nhận hàng hoàn về |
| POST | `/api/orders/{id}/cancel` | Hủy khi trạng thái cho phép |
| GET, POST, PUT, DELETE | `/api/drivers`, `/api/shifts` | Tài xế, ca và điểm danh |
| POST | `/api/dispatch/proposals` | Sinh gợi ý theo quy tắc nghiệp vụ |
| POST | `/api/dispatch/proposals/{id}/approve` | Hub duyệt/gán tài xế |
| GET, POST | `/api/me/orders`, `/api/me/orders/{id}/{action}` | Tài xế nhận/từ chối đơn được giao |
| GET | `/api/audit` | Nhật ký nội bộ |
| GET | `/api/analytics` | KPI dashboard |

## Quy tắc nghiệp vụ đã chốt

- SLA là quy tắc thời gian: trên 120 phút `SAFE`; 60–120 `AT_RISK`; dưới 60 `HIGH_RISK`; quá hạn `BREACHED`.
- Tải tối đa là **15 đơn đang xử lý/tài xế/ca**, chỉ tính `ASSIGNED`, `DRIVER_ACCEPTED`, `IN_TRANSIT`.
- Luồng chính: `PENDING → READY_TO_DISPATCH → ASSIGNED → DRIVER_ACCEPTED → IN_TRANSIT → DELIVERED`.
- Lần thất bại 1–2 đưa đơn về luồng phát lại; thất bại lần 3 bắt buộc `RETURN_PENDING`; chỉ Hub xác nhận mới thành `RETURNED`.
- Hủy chỉ trước khi tài xế nhận đơn; hủy phải giải phóng assignment/tải và ghi audit.
- Gợi ý phân công là **rule-based weighted scoring**, không phải AI/ML, heuristic, TSP/VRP hay GPS.

## Kiểm thử

```sh
# Unit + HTTP tests
./mvnw test

# Dispatch integration test trên database Atlas tách biệt, tên ngắn m2t_*;
# test tự xóa database sau khi chạy.
M2_TEST_MONGO="$MONGODB_URI" ./mvnw -Dtest=DispatchIntegrationTest test

# Với backend đang chạy: live API acceptance flow
cd ../frontend && npm run test:e2e
```

Test integration xác nhận đồng thời hai thao tác duyệt khi chỉ còn một slot tải, sau đó tài xế từ chối và tải giảm chính xác.
