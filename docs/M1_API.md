# M1 — Đơn hàng, SLA, lịch sử và tra cứu công khai

Backend sử dụng Java 21 / Spring Boot. Phần frontend và M2 được giữ nguyên. Tài liệu này mô tả hợp đồng API chính thức của backend Spring với dữ liệu người gửi/người nhận dạng đối tượng lồng nhau. Frontend hiện còn dùng các trường phẳng như `recipientName`, `riskProbability` và đường dẫn của prototype cũ; M3 cần ánh xạ riêng sang hợp đồng dưới đây. SLA được đánh giá theo quy tắc, không phải dự báo hay xác suất.

## 1. Khởi chạy an toàn

Spring Boot không tự động đọc file `.env` trong repository. Cần khai báo biến môi trường trong Terminal khởi chạy backend. Khi kiểm thử, sử dụng MongoDB cục bộ riêng; không dùng dữ liệu Atlas hoặc database chung của nhóm cho các ví dụ dưới đây.

```sh
export JAVA_HOME=$(/usr/libexec/java_home -v 21)
export MONGODB_URI='mongodb://127.0.0.1:27017/minerva_local'
cd backend
mvn spring-boot:run
```

**Lưu ý tên database:** `application.yml` của nhóm đang cấu hình database `minerva_nexus`. Muốn chạy thử trên database cục bộ riêng, cần ghi đè cấu hình này khi khởi chạy, ví dụ:

```sh
mvn spring-boot:run -Dspring-boot.run.arguments="--spring.data.mongodb.database=minerva_local"
```

Cổng mặc định của ứng dụng là **8081**. Không ghi URI chứa mật khẩu vào log, tài liệu hoặc Git.

Header `X-Actor-Id` có giá trị mặc định `SYSTEM`, dùng để ghi nhận người thao tác trong nhật ký, **không phải cơ chế xác thực**. API nội bộ có thông tin tên, điện thoại, địa chỉ và lịch sử vận hành; trước khi triển khai thực tế phải bổ sung xác thực, phân quyền và giới hạn truy cập phù hợp. API tra cứu công khai sử dụng cấu trúc trả về riêng, không trả toàn bộ document đơn hàng.

## 2. Tạo đơn hàng

```sh
curl -i http://localhost:8081/api/orders \
  -H 'Content-Type: application/json' -H 'X-Actor-Id: demo-operator' \
  -d '{
    "orderCode":"DEMO-001",
    "trackingCode":"MN-7F49C3A18B22",
    "hubId":"HUB-DEMO",
    "areaId":"AREA-DEMO",
    "sender":{"name":"Người gửi mô phỏng","phone":"0901234567","address":"123 Đường Mô Phỏng"},
    "recipient":{"name":"Người nhận mô phỏng","phone":"0907654321","address":"456 Đường Mô Phỏng"},
    "serviceLevel":"STANDARD",
    "slaDeadline":"2030-11-14T12:00:00Z"
  }'
```

Các dữ liệu trên chỉ phục vụ minh họa. Khi chạy phải chọn hạn SLA thực sự ở tương lai.

### Kết quả

HTTP **201** trả về document đã lưu, gồm:
- `id`, `version` do hệ thống quản lý.
- `status: PENDING` và `failureCount: 0`.
- `createdAt`, `updatedAt`.
- Kết quả `slaAssessment`.
- Một sự kiện tạo đơn trong `statusHistory`.
- Một bản ghi nhật ký trong `auditEvents`.

Chỉ tám trường trong request mẫu được nhận làm dữ liệu nghiệp vụ (`orderCode` không bắt buộc). Client không được tự thiết lập định danh lưu trữ, trạng thái, lịch sử, audit, số lần thất bại, thông tin hoàn hàng hoặc phân công thông qua các trường JSON bổ sung. Hàm tạo đơn ở tầng service cũng sao chép theo danh sách trường được phép.

### Điều kiện dữ liệu

| Trường | Điều kiện |
|---|---|
| `sender`, `recipient` | Bắt buộc có thông tin người gửi và người nhận |
| `name` | Không để trống, tối đa 150 ký tự |
| `address` | Không để trống, tối đa 500 ký tự |
| `phone` | Bắt buộc; 8–15 chữ số, có thể có dấu `+` ở đầu |
| `hubId`, `areaId` | Không để trống, tối đa 100 ký tự |
| `serviceLevel` | Bắt buộc, thuộc enum đã chốt |
| `slaDeadline` | Bắt buộc, ở tương lai khi tạo đơn |
| `trackingCode` | 12–64 ký tự ASCII viết hoa, chữ số hoặc dấu `-`; bắt đầu bằng chữ/số; không được trùng |
| `orderCode` | Không bắt buộc, tối đa 100 ký tự |
| `X-Actor-Id` | Không để trống, tối đa 100 ký tự |
| `note`, lý do hủy | Tối đa 1.000 ký tự; lý do hủy không được trống |
| `reasonCode` báo thất bại | Chuỗi nghiệp vụ bắt buộc, không để trống, tối đa 100 ký tự; không thêm enum mới |

Các trường văn bản được kiểm tra để từ chối ký tự điều khiển. Mã vận đơn phải được client tạo khó đoán, không tuần tự; kiểm tra định dạng **không bảo đảm mã đủ ngẫu nhiên**. Backend không tự sinh mã vận đơn tuần tự để tra cứu công khai.

## 3. Danh sách API nội bộ

| Phương thức | Đường dẫn | Kết quả / hành vi |
|---|---|---|
| GET | `/api/orders` | Mảng đơn; mặc định `page=0`, `size=100`, có giới hạn phân trang |
| GET | `/api/orders/search` | `{content,page,size,totalElements,totalPages}`; mặc định `size=20` |
| GET | `/api/orders/{id}` | Chi tiết đầy đủ đơn nội bộ; 404 nếu không tồn tại |
| GET | `/api/orders/{id}/timeline` | Mảng `statusHistory`, có người thao tác, lý do và ghi chú |
| POST | `/api/orders/{id}/receive` | `PENDING → READY_TO_DISPATCH`; kiểm tra lại dữ liệu bắt buộc; vẫn cho tiếp nhận đơn quá hạn và cảnh báo SLA |
| POST | `/api/orders/{id}/cancel?reason=...` | Hủy đơn theo cạnh trạng thái hợp lệ; bắt buộc có lý do |
| PATCH | `/api/orders/{id}/status?target=...&note=...` | Chuyển trạng thái; giữ cách truyền tham số trên URL hiện có |
| POST | `/api/orders/{id}/failures?reasonCode=...&note=...` | Báo một lần giao thất bại hợp lệ |
| POST | `/api/orders/{id}/sla-assessment` | Đánh giá lại SLA, lưu kết quả và audit |

Các thao tác thay đổi dữ liệu nhận header `X-Actor-Id` tùy chọn. Ngoại trừ tạo mới trả 201, thao tác thành công trả **200** cùng document kết quả.

### Tìm kiếm, bộ lọc và phân trang

Các tham số tùy chọn của danh sách/tìm kiếm:

`status`, `areaId`, `hubId`, `serviceLevel`, `from`, `to`, `q`, `page`, `size`.

- `from`, `to`: thời điểm UTC theo ISO-8601, ví dụ `2026-11-14T00:00:00Z`; lọc theo `createdAt`, bao gồm hai mốc biên.
- Không chấp nhận `from > to`.
- `q`: tối đa 100 ký tự, tìm chuỗi con trong `trackingCode` hoặc `orderCode`, không phân biệt hoa/thường. Nội dung được xử lý như văn bản, không thực thi biểu thức chính quy do client nhập.
- `page`: đánh số từ 0, tối đa 100.000.
- `size`: từ 1 đến 100.
- Sắp xếp theo `createdAt` giảm dần, sau đó `id` giảm dần để ổn định thứ tự khi trùng thời gian.
- Số lượng kết quả và trang dữ liệu được đọc riêng, không phải ảnh chụp nhất quán xuyên suốt khi có ghi đồng thời.

```sh
curl --get http://localhost:8081/api/orders/search \
  --data-urlencode 'status=PENDING' --data-urlencode 'areaId=AREA-DEMO' \
  --data-urlencode 'from=2026-01-01T00:00:00Z' \
  --data-urlencode 'q=7F49' --data-urlencode 'page=0' --data-urlencode 'size=20'
```

Ví dụ cấu trúc kết quả phân trang rỗng:

```json
{"content":[],"page":0,"size":20,"totalElements":0,"totalPages":0}
```

### Các enum được giữ nguyên

Tên kỹ thuật dưới đây không dịch trong JSON hoặc code để tránh làm sai hợp đồng của nhóm:

- `OrderStatus`: `PENDING`, `READY_TO_DISPATCH`, `ASSIGNED`, `DRIVER_ACCEPTED`, `IN_TRANSIT`, `DELIVERED`, `FAILED`, `READY_FOR_REDELIVERY`, `RETURN_PENDING`, `RETURNED`, `CANCELLED`.
- `ServiceLevel`: `STANDARD`, `EXPRESS`, `SAME_DAY`.
- `SlaRiskLevel`: `SAFE`, `AT_RISK`, `HIGH_RISK`, `BREACHED`, `UNKNOWN`.

### Chuyển trạng thái và giới hạn phạm vi

`OrderStateMachine` hiện có là chuẩn kiểm tra, không được M1 tự thay đổi.

- Chỉ hủy từ **`PENDING` hoặc `READY_TO_DISPATCH`**, không hủy từ `ASSIGNED`.
- Mô tả hủy rộng hơn trong tài liệu cần Leader/M2 thống nhất; M1 không tự thêm cạnh hoặc thu hồi phân công. Quản lý assignment và tải tài xế thuộc M2.
- Không cho chuyển trực tiếp sang `FAILED` bằng API cập nhật trạng thái chung. Phải dùng API `failures` để không bỏ qua việc tăng số lần thất bại.
- Lần thất bại thứ ba ghi hai sự kiện **`IN_TRANSIT → FAILED → RETURN_PENDING`**, một ngoại lệ và một hành động audit, trong **một lần lưu document**.
- Chặn `READY_FOR_REDELIVERY` khi `failureCount >= 3`.
- Chuyển trạng thái không hợp lệ không làm thay đổi hoặc lưu đơn.

## 4. SLA và lưu trữ MongoDB

### Quy tắc đánh giá

So sánh thời điểm chính xác, không dựa vào số phút đã làm tròn:

| Điều kiện | Kết quả |
|---|---|
| Quá hạn dù chỉ 1 mili giây và chưa `DELIVERED` | `BREACHED` — Quá hạn |
| Chưa quá hạn, còn dưới 60 phút | `HIGH_RISK` — Nguy cơ cao |
| Còn từ 60 đến 120 phút, bao gồm đúng hai mốc | `AT_RISK` — Cần chú ý |
| Còn trên 120 phút | `SAFE` — An toàn |
| Thiếu hạn SLA | `UNKNOWN` — Chưa đủ dữ liệu |

`remainingMinutes` là giá trị hiển thị, cắt phần lẻ về phía 0, không dùng làm tiêu chí phân loại.

Với đơn `DELIVERED`, hệ thống dùng thời điểm giao thành công đầu tiên trong lịch sử, không dùng thời điểm tải lại. Nếu thiếu mốc giao thì kết quả là `UNKNOWN`. Đơn đã giao không được gắn `BREACHED` theo quy tắc này; nếu giao muộn thì được phân loại `HIGH_RISK` tại thời điểm giao. Khi tính tỷ lệ đúng hạn, cần so sánh mốc giao với `slaDeadline`, không suy ra chỉ từ nhãn rủi ro.

### Cách lưu

Đơn hàng, đánh giá SLA, lịch sử trạng thái, ngoại lệ giao và audit được nhúng trong cùng document thuộc collection **`delivery_orders`**, giúp mỗi lần lưu là nguyên tử mà không cần transaction nhiều document.

Audit có hành động, người thao tác, thời gian, trạng thái trước/sau, `reasonCode` và `note`. Không lưu ảnh chụp toàn bộ thông tin người gửi/người nhận trong audit. Lý do và ghi chú vận hành chỉ dùng nội bộ, không nên nhập dữ liệu cá nhân không cần thiết và không được trả ra API công khai.

- M1 không ghi vào các collection `audit_logs` hoặc `sla_rules` hiện có.
- `@Version` phát hiện ghi đè từ phiên bản document cũ.
- Unique index `trackingCode_1` được bảo đảm khi khởi động, kể cả khi tự tạo index bằng annotation bị tắt.
- Nếu dữ liệu cũ bị trùng mã hoặc index không tương thích, ứng dụng từ chối khởi động thay vì bỏ qua ràng buộc. Cần xử lý dữ liệu cũ có chủ đích, không tự xóa.

## 5. Tra cứu hành trình công khai

`GET /api/tracking/{trackingCode}` chỉ trả các trường sau:

```json
{
  "trackingCode":"MN-7F49C3A18B22",
  "statusLabel":"PENDING",
  "areaId":"AREA-DEMO",
  "createdAt":"2026-11-14T03:00:00Z",
  "updatedAt":"2026-11-14T03:00:00Z",
  "timeline":[
    {"statusLabel":"PENDING","changedAt":"2026-11-14T03:00:00Z"}
  ]
}
```

`statusLabel` hiện giữ tên enum kỹ thuật, chưa phải nhãn tiếng Việt; frontend ánh xạ nhãn hiển thị mà không đổi giá trị API.

**Không trả:** id/version nội bộ, người gửi/người nhận, thông tin liên hệ/địa chỉ, assignment/tài xế, audit/người thao tác, lý do/ghi chú, ngoại lệ giao, COD hoặc dữ liệu SLA nội bộ.

- Mã sai định dạng và mã không tồn tại dùng chung thông báo 404.
- Giới hạn 30 lượt tra cứu/phút theo `remoteAddr`; trả 429 với `Retry-After: 60` khi vượt giới hạn.
- Không tin trực tiếp header `X-Forwarded-For` do client gửi.
- Bộ giới hạn lưu trong bộ nhớ theo từng instance, đặt lại khi khởi động. Cơ chế này không ngăn hoàn toàn dò quét phân tán hoặc truy cập dồn ở ranh giới phút; triển khai thực tế cần kiểm soát tại gateway và mã vận đơn khó đoán.

## 6. Phản hồi lỗi

Cấu trúc JSON:

```json
{"status":400,"message":"Thông báo lỗi"}
```

Không trả stack trace, Mongo URI hoặc nội dung exception gốc.

| Mã HTTP | Ý nghĩa |
|---|---|
| 400 | Payload, enum, thời gian, giới hạn phân trang hoặc lý do không hợp lệ |
| 404 | Không tìm thấy đơn nội bộ hoặc mã vận đơn công khai |
| 409 | Trùng mã, phiên bản cũ, chuyển trạng thái sai hoặc đạt giới hạn thất bại |
| 429 | Vượt giới hạn tra cứu công khai |
| 503 | Dịch vụ dữ liệu tạm thời không khả dụng |
| 500 | Lỗi ngoài dự kiến, đã được ẩn thông tin kỹ thuật |

Khi gặp xung đột hoặc trùng dữ liệu, client cần tải lại và xử lý; không tự gửi lại thao tác ghi một cách mù quáng.

## 7. Kiểm thử và kết quả xác minh

```sh
mvn test
# Bật kiểm thử MongoDB thật trên localhost.
# Mỗi test tạo database m1_test_* ngẫu nhiên và xóa sau khi chạy.
mvn -Dm1.mongo.port=27017 package
```

Nếu không truyền `m1.mongo.port`, ba test trong `OrderMongoTest` được đánh dấu bỏ qua; các test còn lại vẫn chạy. Không trỏ cổng kiểm thử đến máy chủ dùng chung khi chưa hiểu hành vi tạo/xóa database riêng của test.

### Lưu ý đường dẫn bản ZIP

Tên thư mục `14:11` chứa dấu `:`, là ký tự phân cách classpath trên Unix, khiến Maven không tìm được các lớp nguồn khi biên dịch test trực tiếp tại đường dẫn này.

Cách đã kiểm chứng: sao chép riêng `backend/pom.xml` và `backend/src` sang thư mục không có dấu `:` như `/tmp/minerva-m1-build`, không chép `.env` hoặc `target`, rồi chạy Maven 3.9.9 bằng JDK 21 với `-f /tmp/minerva-m1-build/pom.xml`. Source bàn giao vẫn nằm trong thư mục ZIP. Có thể dùng một thư mục clone tên đơn giản khi đưa code vào Git.

### Kết quả đã chạy

- `clean package` bằng JDK 21/Maven 3.9.9: **22 test đạt, 0 thất bại, 0 lỗi, 0 bỏ qua**, gồm ba test MongoDB thật.
- Test ma trận chuyển trạng thái kiểm tra toàn bộ **121 cặp trạng thái**.
- Bao phủ: biên SLA, thời điểm đã giao, validation, chặn dữ liệu trạng thái do client chèn, luồng trạng thái, số lần thất bại, dữ liệu công khai và giới hạn tần suất, HTTP lỗi, unique index, optimistic locking, tìm kiếm chuỗi nguyên văn và lưu dữ liệu nhúng.
- Có cảnh báo dynamic Java agent của Mockito/JDK; không sửa `pom.xml` dùng chung để thay cấu hình.
- Lượt xác minh độc lập đã build lại source cuối và chạy đạt cùng 22 test.
- Đã khởi chạy ứng dụng Spring Boot đóng gói với MongoDB cục bộ riêng và gọi HTTP thật: tạo đơn (201), trùng mã (409), tiếp nhận, danh sách/tìm kiếm/chi tiết/timeline, kiểm tra danh sách trường công khai, chuyển trạng thái sai (409), hủy và lý do trong audit.
- Ứng dụng smoke test đã dừng; database smoke ngẫu nhiên đã được xóa.
- Chưa dọn container `minerva-m1-isolated-20261114` do công cụ yêu cầu quyền bổ sung; container có thể vẫn chạy trên localhost cổng 59481.
- Không truy cập MongoDB Atlas chung, không thay đổi dữ liệu dùng chung hoặc các workload không liên quan.
