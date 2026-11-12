# Phân công MVP và quy ước merge

Mục tiêu của nhóm là làm chắc một luồng có thể demo: **tạo/tiếp nhận đơn → đánh giá SLA theo quy tắc → gợi ý và duyệt phân công → tài xế cập nhật kết quả → lịch sử/KPI**. Không bổ sung AI/ML, tối ưu lộ trình, GPS hay chức năng ngoài BRS/SRS chốt.

## Quy ước chung bắt buộc

1. Mỗi người tạo nhánh từ `main` mới nhất theo mẫu `feature/<ten>-<nhom-chuc-nang>`; không commit trực tiếp lên `main`.
2. Chỉ sửa các thư mục/file thuộc quyền sở hữu bên dưới. Không sửa `README.md`, `docs/Minerva_Nexus_BRS_SRS.docx`, `.gitignore`, `backend/pom.xml`, `backend/src/main/resources/application.yml`, `frontend/src/App.tsx` hay `web/react/` nếu chưa trao đổi với Võ Xuân Quang.
3. Không commit `.env`, URI MongoDB, mật khẩu, token hoặc dữ liệu cá nhân thật.
4. Trước khi mở Pull Request: chạy phần kiểm tra của mình, `git pull --rebase origin main`, giải quyết xung đột trên nhánh cá nhân, rồi mới gửi PR.
5. Một PR chỉ xử lý một nhóm chức năng. Không format/rewrite hàng loạt những file không liên quan.

## API và quy tắc không được tự ý đổi

| Hạng mục | Quy ước đã chốt |
| --- | --- |
| Backend chính | Java 21 + Spring Boot; base path `/api` |
| Frontend chính | React + Vite; màn hình Figma là chuẩn giao diện |
| CSDL | MongoDB database `minerva_nexus` |
| SLA | `< 60` phút: nguy cơ cao; `60–120`: cần chú ý; `> 120`: an toàn; quá hạn và chưa giao thành công: quá hạn |
| Sức chứa | Tối đa 15 đơn **đang xử lý** cho một tài xế trong một ca; chỉ tính `ASSIGNED`, `DRIVER_ACCEPTED`, `IN_TRANSIT` |
| Luồng thành công | `PENDING → READY_TO_DISPATCH → ASSIGNED → DRIVER_ACCEPTED → IN_TRANSIT → DELIVERED` |
| Luồng thất bại | `IN_TRANSIT → FAILED`; dưới 3 lần Hub quyết định `READY_FOR_REDELIVERY` hoặc `RETURN_PENDING`; từ lần 3 bắt buộc `RETURN_PENDING`; Hub xác nhận hàng về kho mới `RETURNED` |
| Điều phối | Gợi ý theo quy tắc nghiệp vụ, có lý do; nhân viên Hub duyệt/chỉnh; không gọi là AI/ML/heuristic |

## Hoàng Xuân Thành — Frontend và luồng thao tác

**Nhánh:** `feature/thanh-frontend-flow`
**Chỉ sở hữu:** `frontend/src/features/**`, `frontend/src/services/**`, `frontend/src/hooks/**`, `frontend/src/types/**`, `frontend/src/components/**`.

### Việc cần làm

- Tạo lớp gọi REST API và type dùng chung trong các thư mục mới thuộc `frontend/src/`; không sửa trực tiếp các file export Figma `codelayer-*` trừ khi cần gắn event tối thiểu.
- Kết nối các thao tác UI cốt lõi: tạo/tiếp nhận đơn, danh sách/chi tiết đơn, cập nhật trạng thái, báo thất bại và xem timeline.
- Khi backend chưa có endpoint, hiển thị trạng thái loading/lỗi rõ ràng; không giả báo thành công.
- Giữ layout, màu, cỡ chữ và nút theo Figma; không tự thêm biểu tượng/nhãn “AI”.

### Bàn giao/kiểm tra

- Demo được từ một đơn tạo mới đến lịch sử trạng thái hiển thị trên UI.
- `npm run build` chạy thành công.
- Ghi các endpoint đang dùng vào mô tả Pull Request, không sửa `App.tsx` để đổi route/screen list.

## Nguyễn Gia Nhật Khánh — Đơn hàng, SLA và lịch sử

**Nhánh:** `feature/khanh-order-sla`
**Chỉ sở hữu:** `backend/src/main/java/vn/edu/tdtu/minervanexus/{controller,service,document,repository}/` cho nhóm **order, SLA, audit**; các file mới cần có tiền tố/phân nhóm rõ ràng như `Order*`, `Sla*`, `Audit*`.

### Việc cần làm

- Hoàn thiện validation cho tạo/tiếp nhận/hủy đơn; đảm bảo mã vận đơn duy nhất, SLA hợp lệ và hủy đơn chỉ trước khi phát.
- Hoàn thiện đánh giá SLA theo ngưỡng đã chốt, lưu `ruleVersion`, thời điểm, số phút còn lại và lý do.
- Hoàn thiện status history/audit log; mọi thay đổi trạng thái phải có tác nhân, thời gian, trạng thái trước/sau và ghi chú.
- Cung cấp hoặc hoàn thiện API cho danh sách, tìm kiếm, chi tiết, timeline, chuyển trạng thái, báo thất bại và tra cứu công khai đã che dữ liệu nhạy cảm.

### Không làm

- Không làm assignment, driver/shift hoặc thay đổi collection `drivers`, `delivery_shifts`, `assignments`: phần đó thuộc Nghĩa.
- Không đổi enum/trạng thái đã chốt nếu chưa báo Merge Owner.

### Bàn giao/kiểm tra

- Có test cho SLA: thiếu hạn, trên 120, 60–120, dưới 60, quá hạn, đã giao thành công.
- Có test cho failure count và chặn giao lại từ lần thất bại thứ ba.
- Các endpoint có ví dụ request/response trong PR.

## Phạm Trung Nghĩa — Tài xế, ca giao và điều phối

**Nhánh:** `feature/nghia-dispatch`
**Chỉ sở hữu:** các file **mới** có tiền tố/phân nhóm `Driver*`, `Shift*`, `Assignment*`, `Dispatch*` trong `backend/src/main/java/vn/edu/tdtu/minervanexus/{controller,service,document,repository}/`; dữ liệu seed mới dưới `docs/mongodb/`.

### Việc cần làm

- Xây dựng CRUD tối thiểu cho tài xế, ca giao và điểm danh ca.
- Kiểm tra điều kiện đề xuất: tài xế hoạt động, đã điểm danh ca, đúng khu vực, còn sức chứa, ưu tiên dịch vụ/SLA và tải đang xử lý.
- Sinh đề xuất có lý do/điểm thành phần theo quy tắc cấu hình; không tự gán chính thức.
- Xây dựng duyệt, chỉnh và gán lại: chỉ khi Hub duyệt mới tạo `ASSIGNED`, đồng thời cập nhật tải; xử lý từ chối nhận đơn quay về `READY_TO_DISPATCH` và ghi audit.
- Bảo đảm một tài xế không vượt quá 15 đơn đang xử lý trong ca.

### Không làm

- Không sửa `OrderService`, `SlaRuleService`, `OrderStateMachine`, `OrderController` thuộc phần Khánh; nếu cần tích hợp, đưa interface/đề xuất vào PR trước.
- Không đổi `docs/mongodb/bootstrap.js` hiện có; nếu cần seed mới, tạo file riêng `docs/mongodb/seed-demo.js`.

### Bàn giao/kiểm tra

- Có test cho đúng/sai khu vực, hết sức chứa, tài xế vắng mặt, SLA khẩn và giới hạn 15 đơn.
- Có ví dụ endpoint tạo ca, điểm danh, lấy đề xuất và duyệt đề xuất trong PR.

## Võ Xuân Quang — Merge Owner và tích hợp

- Quản lý `main`, cấu hình dùng chung, tài liệu BRS/SRS, `.env.example`, `pom.xml`, `application.yml`, `App.tsx`, build output `web/react/` và release demo.
- Review PR theo thứ tự: **Khánh (đơn/SLA) → Nghĩa (ca/điều phối) → Thành (frontend tích hợp)**. Thứ tự này giảm phụ thuộc API và xung đột.
- Sau mỗi merge: chạy build frontend, kiểm tra endpoint health, chạy test backend trên môi trường Java 21 + Maven, rồi cập nhật build output `web/react/` một lần.

## Checklist Pull Request

- [ ] Nhánh đã rebase từ `origin/main` mới nhất.
- [ ] Không có `.env`, secret hoặc file build ngoài phạm vi.
- [ ] Không sửa file thuộc quyền sở hữu người khác.
- [ ] Test/build phần mình chạy được.
- [ ] UI không thêm AI/ML/heuristic và luồng thất bại lần ba là `RETURN_PENDING`.
- [ ] Mô tả PR nêu rõ: chức năng, API/dữ liệu tác động, cách test, phần còn thiếu.
