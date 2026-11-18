package vn.edu.tdtu.minervanexus.server;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;
import vn.edu.tdtu.minervanexus.common.FailureReason;
import vn.edu.tdtu.minervanexus.common.OrderStatus;
import vn.edu.tdtu.minervanexus.common.ServiceLevel;
import vn.edu.tdtu.minervanexus.model.Assignment;
import vn.edu.tdtu.minervanexus.model.DeliveryOrder;
import vn.edu.tdtu.minervanexus.model.Driver;
import vn.edu.tdtu.minervanexus.model.RiskPrediction;
import vn.edu.tdtu.minervanexus.model.StatusHistory;
import vn.edu.tdtu.minervanexus.service.IAnalyticsService;
import vn.edu.tdtu.minervanexus.service.IDispatchEngine;
import vn.edu.tdtu.minervanexus.service.IDriverShiftService;
import vn.edu.tdtu.minervanexus.service.IOrderService;

import java.io.*;
import java.net.InetSocketAddress;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.*;

public class WebServer {
    private final int port;
    private final IOrderService orderService;
    private final IDriverShiftService driverShiftService;
    private final IDispatchEngine dispatchEngine;
    private final IAnalyticsService analyticsService;
    private final Map<String, Map<String, Boolean>> shiftAttendance = new HashMap<>();
    private HttpServer server;

    public WebServer(int port,
                     IOrderService orderService,
                     IDriverShiftService driverShiftService,
                     IDispatchEngine dispatchEngine,
                     IAnalyticsService analyticsService) {
        this.port = port;
        this.orderService = orderService;
        this.driverShiftService = driverShiftService;
        this.dispatchEngine = dispatchEngine;
        this.analyticsService = analyticsService;
        initShiftAttendance();
    }

    private void initShiftAttendance() {
        Map<String, Boolean> ca1 = new HashMap<>();
        Map<String, Boolean> ca2 = new HashMap<>();
        List<Driver> drivers = driverShiftService.getAllDrivers();
        for (int i = 0; i < drivers.size(); i++) {
            String id = drivers.get(i).getDriverId();
            // First 4 drivers checked in for Ca 1; remaining unchecked so attendance picker has candidates
            ca1.put(id, i < 4);
            ca2.put(id, i < 2);
        }
        shiftAttendance.put("SHIFT-01", ca1);
        shiftAttendance.put("SHIFT-02", ca2);
    }

    public void start() throws IOException {
        server = HttpServer.create(new InetSocketAddress(port), 0);

        // Static files handler (web/)
        server.createContext("/", new StaticFileHandler());

        // API Endpoints
        server.createContext("/api/auth", new AuthHandler());
        server.createContext("/api/orders", new OrdersHandler());
        server.createContext("/api/drivers", new DriversHandler());
        server.createContext("/api/shifts", new ShiftsHandler());
        server.createContext("/api/dispatch/suggestions", new DispatchSuggestionsHandler());
        server.createContext("/api/dispatch/approve", new DispatchApproveHandler());
        server.createContext("/api/dispatch/reject", new DispatchRejectHandler());
        server.createContext("/api/driver/update", new DriverStatusUpdateHandler());
        server.createContext("/api/order/history", new OrderHistoryHandler());
        server.createContext("/api/analytics", new AnalyticsHandler());
        server.createContext("/api/tracking", new TrackingHandler());
        server.createContext("/api/audit", new AuditHandler());

        server.setExecutor(null); // default executor
        server.start();
        System.out.println("✓ Máy chủ Minerva Nexus Web Backend đang chạy tại: http://localhost:" + port);
    }

    public void stop() {
        if (server != null) {
            server.stop(0);
        }
    }

    // --- Handlers ---

    private class AuthHandler implements HttpHandler {
        private final Map<String, String[]> accounts = Map.ofEntries(
                Map.entry("NV0128", new String[]{"DISPATCHER_NV0128", "NV0128", "password123", "Trần Văn Bình", "DISPATCHER", "Hub Quận 7"}),
                Map.entry("DISPATCHER", new String[]{"DISPATCHER_WEB", "DISPATCHER", "password123", "Trần Văn Bình", "DISPATCHER", "Hub Quận 7"}),
                Map.entry("ADMIN", new String[]{"HUB_MANAGER_ADMIN", "ADMIN", "admin123", "Võ Xuân Quang", "HUB_MANAGER", "Hub Quận 7"}),
                Map.entry("TX045", new String[]{"DRV-01", "TX045", "password123", "Nguyễn Văn An", "DRIVER", "Hub Quận 7"}),
                Map.entry("DRV-01", new String[]{"DRV-01", "DRV-01", "password123", "Nguyễn Văn An", "DRIVER", "Hub Quận 7"}),
                Map.entry("DRV-02", new String[]{"DRV-02", "DRV-02", "password123", "Trần Thị Minh Châu", "DRIVER", "Hub Quận 7"}),
                Map.entry("DRV-03", new String[]{"DRV-03", "DRV-03", "password123", "Lê Hoàng Nam", "DRIVER", "Hub Quận 7"}),
                Map.entry("DRV-04", new String[]{"DRV-04", "DRV-04", "password123", "Phạm Quốc Huy", "DRIVER", "Hub Quận 7"}),
                Map.entry("DRV-05", new String[]{"DRV-05", "DRV-05", "password123", "Võ Minh Đức", "DRIVER", "Hub Quận 7"}),
                Map.entry("DRV-06", new String[]{"DRV-06", "DRV-06", "password123", "Đặng Thu Hà", "DRIVER", "Hub Quận 7"})
        );

        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String method = exchange.getRequestMethod();
            String path = exchange.getRequestURI().getPath();

            if ("POST".equalsIgnoreCase(method) && path.endsWith("/login")) {
                String body = new String(exchange.getRequestBody().readAllBytes(), StandardCharsets.UTF_8);
                Map<String, String> params = parseFormOrJson(body);
                String username = params.getOrDefault("username", "").trim();
                String password = params.getOrDefault("password", "");
                String reqHub = params.getOrDefault("hub", "").trim();

                if (username.isEmpty() || password.isEmpty()) {
                    sendJson(exchange, 400, "{\"error\":\"Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.\"}");
                    return;
                }

                String[] acc = accounts.get(username.toUpperCase(Locale.ROOT));
                if (acc == null || !acc[2].equals(password)) {
                    sendJson(exchange, 401, "{\"error\":\"Sai tên đăng nhập hoặc mật khẩu. Vui lòng kiểm tra lại.\"}");
                    return;
                }

                String hub = reqHub.isEmpty() ? acc[5] : reqHub;
                String token = JwtUtil.generateToken(acc[0], acc[1], acc[3], acc[4], hub);
                String json = "{"
                        + "\"accessToken\":\"" + escape(token) + "\","
                        + "\"tokenType\":\"Bearer\","
                        + "\"expiresIn\":" + JwtUtil.TTL_SECONDS + ","
                        + "\"user\":{"
                        + "\"userId\":\"" + escape(acc[0]) + "\","
                        + "\"username\":\"" + escape(acc[1]) + "\","
                        + "\"fullName\":\"" + escape(acc[3]) + "\","
                        + "\"role\":\"" + escape(acc[4]) + "\","
                        + "\"hub\":\"" + escape(hub) + "\""
                        + "}}";
                sendJson(exchange, 200, json);
                return;
            }

            if ("GET".equalsIgnoreCase(method) && path.endsWith("/me")) {
                String auth = exchange.getRequestHeaders().getFirst("Authorization");
                if (auth == null || !auth.startsWith("Bearer ")) {
                    sendJson(exchange, 401, "{\"error\":\"Thiếu mã xác thực JWT (Authorization: Bearer <token>).\"}");
                    return;
                }
                Optional<Map<String, String>> verified = JwtUtil.verifyToken(auth.substring(7).trim());
                if (verified.isEmpty()) {
                    sendJson(exchange, 401, "{\"error\":\"Phiên đăng nhập không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại.\"}");
                    return;
                }
                Map<String, String> c = verified.get();
                String json = "{"
                        + "\"userId\":\"" + escape(c.getOrDefault("sub", "")) + "\","
                        + "\"username\":\"" + escape(c.getOrDefault("username", "")) + "\","
                        + "\"fullName\":\"" + escape(c.getOrDefault("name", "")) + "\","
                        + "\"role\":\"" + escape(c.getOrDefault("role", "")) + "\","
                        + "\"hub\":\"" + escape(c.getOrDefault("hub", "")) + "\","
                        + "\"exp\":" + c.getOrDefault("exp", "0")
                        + "}";
                sendJson(exchange, 200, json);
                return;
            }

            if ("POST".equalsIgnoreCase(method) && path.endsWith("/logout")) {
                sendJson(exchange, 200, "{\"success\":true,\"message\":\"Đã đăng xuất thành công.\"}");
                return;
            }

            sendJson(exchange, 404, "{\"error\":\"Not Found: " + escape(path) + "\"}");
        }
    }

    private class StaticFileHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String path = exchange.getRequestURI().getPath();
            if (path.equals("/")) {
                // The React build is generated directly from the supplied
                // Figma code exports.  Make it the canonical application so
                // users do not land on the previous handcrafted prototype.
                exchange.getResponseHeaders().set("Location", "/react/?embed=1#dashboard");
                exchange.sendResponseHeaders(302, -1);
                exchange.close();
                return;
            }

            File file = new File("web" + path);
            if (!file.exists()) {
                file = new File("minerva-nexus-system/web" + path);
            }

            // React production builds are mounted beneath /react/.  A request
            // to the folder itself must resolve to its Vite entry point.
            if (file.isDirectory()) {
                file = new File(file, "index.html");
            }

            if (file.exists() && !file.isDirectory()) {
                String mime = getMimeType(file.getName());
                exchange.getResponseHeaders().set("Content-Type", mime);
                exchange.getResponseHeaders().set("Cache-Control", "no-cache, no-store, must-revalidate");
                exchange.getResponseHeaders().set("Pragma", "no-cache");
                exchange.getResponseHeaders().set("Expires", "0");
                exchange.sendResponseHeaders(200, file.length());
                try (OutputStream os = exchange.getResponseBody(); FileInputStream fis = new FileInputStream(file)) {
                    fis.transferTo(os);
                }
            } else {
                String notFound = "404 Not Found: " + path;
                exchange.sendResponseHeaders(404, notFound.length());
                try (OutputStream os = exchange.getResponseBody()) {
                    os.write(notFound.getBytes(StandardCharsets.UTF_8));
                }
            }
        }

        private String getMimeType(String filename) {
            if (filename.endsWith(".html")) return "text/html; charset=UTF-8";
            if (filename.endsWith(".css")) return "text/css; charset=UTF-8";
            if (filename.endsWith(".js")) return "application/javascript; charset=UTF-8";
            if (filename.endsWith(".png")) return "image/png";
            if (filename.endsWith(".jpg") || filename.endsWith(".jpeg")) return "image/jpeg";
            if (filename.endsWith(".svg")) return "image/svg+xml";
            if (filename.endsWith(".json")) return "application/json; charset=UTF-8";
            return "application/octet-stream";
        }
    }

    private class OrdersHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String method = exchange.getRequestMethod();
            String path = exchange.getRequestURI().getPath();

            // Handle sub-paths like /api/orders/{id}/cancel
            if (path.contains("/cancel")) {
                String orderId = "ORD-001";
                String[] parts = path.split("/");
                for (int i = 0; i < parts.length; i++) {
                    if ("orders".equals(parts[i]) && i + 1 < parts.length) {
                        orderId = parts[i + 1];
                        break;
                    }
                }
                String reason = "Người gửi yêu cầu hủy";
                String query = exchange.getRequestURI().getQuery();
                if (query != null && query.contains("reason=")) {
                    for (String q : query.split("&")) {
                        if (q.startsWith("reason=")) {
                            reason = URLDecoder.decode(q.substring(7), StandardCharsets.UTF_8);
                        }
                    }
                }
                boolean ok = orderService.updateOrderStatus(orderId, OrderStatus.CANCELLED, "DISPATCHER_WEB", reason);
                sendJson(exchange, 200, "{\"success\":" + ok + ",\"orderId\":\"" + orderId + "\"}");
                return;
            }

            // Handle sub-paths like /api/orders/{id}/status
            if (path.contains("/status") || "PATCH".equalsIgnoreCase(method)) {
                String body = new String(exchange.getRequestBody().readAllBytes(), StandardCharsets.UTF_8);
                Map<String, String> p = parseFormOrJson(body);
                String query = exchange.getRequestURI().getQuery();
                String target = "IN_TRANSIT";
                if (query != null && query.contains("target=")) {
                    for (String q : query.split("&")) {
                        if (q.startsWith("target=")) target = q.substring(7);
                    }
                }
                String orderId = "ORD-001";
                String[] parts = path.split("/");
                for (int i = 0; i < parts.length; i++) {
                    if ("orders".equals(parts[i]) && i + 1 < parts.length) {
                        orderId = parts[i + 1];
                        break;
                    }
                }
                if (orderService.getOrderById(orderId).isEmpty()) {
                    List<DeliveryOrder> all = orderService.getAllOrders();
                    if (!all.isEmpty()) orderId = all.get(0).getOrderId();
                }
                OrderStatus st = "DELIVERED".equalsIgnoreCase(target) ? OrderStatus.DELIVERED : OrderStatus.IN_TRANSIT;
                boolean ok = orderService.updateOrderStatus(orderId, st, "DRIVER_APP", "Cập nhật trạng thái " + target);
                sendJson(exchange, 200, "{\"success\":" + ok + ",\"status\":\"" + st.name() + "\"}");
                return;
            }

            if ("GET".equalsIgnoreCase(method)) {
                List<DeliveryOrder> orders = orderService.getAllOrders();
                StringBuilder sb = new StringBuilder("[");
                for (int i = 0; i < orders.size(); i++) {
                    DeliveryOrder o = orders.get(i);
                    RiskPrediction pred = dispatchEngine.predictOrderRisk(o);
                    sb.append("{")
                            .append("\"orderId\":\"").append(o.getOrderId()).append("\",")
                            .append("\"trackingCode\":\"").append(o.getTrackingCode()).append("\",")
                            .append("\"recipientName\":\"").append(escape(o.getRecipientName())).append("\",")
                            .append("\"recipientPhone\":\"").append(escape(o.getRecipientPhone())).append("\",")
                            .append("\"address\":\"").append(escape(o.getDeliveryAddress())).append("\",")
                            .append("\"areaId\":\"").append(o.getAreaId()).append("\",")
                            .append("\"serviceLevel\":\"").append(o.getServiceLevel().name()).append("\",")
                            .append("\"serviceLevelDisplay\":\"").append(o.getServiceLevel().getDisplayName()).append("\",")
                            .append("\"slaDeadline\":\"").append(o.getFormattedSla()).append("\",")
                            .append("\"codAmount\":").append(o.getCodAmount()).append(",")
                            .append("\"status\":\"").append(o.getStatus().name()).append("\",")
                            .append("\"statusDisplay\":\"").append(o.getStatus().getDescription()).append("\",")
                            .append("\"assignedDriverId\":").append(o.getAssignedDriverId() != null ? "\"" + o.getAssignedDriverId() + "\"" : "null").append(",")
                            .append("\"failureCount\":").append(o.getFailureCount()).append(",")
                            .append("\"riskLevel\":\"").append(pred.getRiskLabel().name()).append("\",")
                            .append("\"riskExplanation\":\"").append(escape(pred.getExplanation())).append("\",")
                            .append("\"riskProbability\":").append(String.format(Locale.US, "%.2f", pred.getRiskProbability()))
                            .append("}");
                    if (i < orders.size() - 1) sb.append(",");
                }
                sb.append("]");
                sendJson(exchange, 200, sb.toString());
            } else if ("POST".equalsIgnoreCase(method)) {
                String body = new String(exchange.getRequestBody().readAllBytes(), StandardCharsets.UTF_8);
                Map<String, String> params = parseFormOrJson(body);
                String name = params.getOrDefault("recipientName", "Khách hàng");
                String phone = params.getOrDefault("phone", "0900000000");
                String address = params.getOrDefault("address", "Quận 7, TP.HCM");
                String areaId = params.getOrDefault("areaId", "Q7_TAN_THUAN");
                ServiceLevel sl = ServiceLevel.valueOf(params.getOrDefault("serviceLevel", "STANDARD").toUpperCase());
                double cod = 0;
                try { cod = Double.parseDouble(params.getOrDefault("codAmount", "0")); } catch (Exception ignored) {}

                DeliveryOrder created = orderService.createOrder(name, phone, address, areaId, sl, cod);
                sendJson(exchange, 201, "{\"success\":true,\"orderId\":\"" + created.getOrderId() + "\",\"trackingCode\":\"" + created.getTrackingCode() + "\"}");
            } else {
                sendJson(exchange, 405, "{\"error\":\"Method Not Allowed\"}");
            }
        }
    }

    private class DriversHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String method = exchange.getRequestMethod();
            String path = exchange.getRequestURI().getPath();

            if ("PUT".equalsIgnoreCase(method) && path.startsWith("/api/drivers/")) {
                String driverId = path.substring("/api/drivers/".length()).trim();
                String body = new String(exchange.getRequestBody().readAllBytes(), StandardCharsets.UTF_8);
                boolean active = body.contains("\"active\":true") || body.contains("\"active\": true");
                Optional<Driver> opt = driverShiftService.getDriverById(driverId);
                if (opt.isEmpty()) {
                    sendJson(exchange, 404, "{\"error\":\"Không tìm thấy tài xế " + escape(driverId) + "\"}");
                    return;
                }
                opt.get().setActive(active);
                sendJson(exchange, 200, "{\"success\":true,\"driverId\":\"" + escape(driverId) + "\",\"active\":" + active + "}");
                return;
            }

            List<Driver> drivers = driverShiftService.getAllDrivers();
            StringBuilder sb = new StringBuilder("[");
            for (int i = 0; i < drivers.size(); i++) {
                Driver d = drivers.get(i);
                double pct = d.getCapacityPerShift() > 0 ? ((double) d.getCurrentLoad() / d.getCapacityPerShift()) * 100.0 : 0.0;
                sb.append("{")
                        .append("\"driverId\":\"").append(d.getDriverId()).append("\",")
                        .append("\"name\":\"").append(escape(d.getName())).append("\",")
                        .append("\"phone\":\"").append(d.getPhone()).append("\",")
                        .append("\"assignedAreaId\":\"").append(d.getAssignedAreaId()).append("\",")
                        .append("\"currentLoad\":").append(d.getCurrentLoad()).append(",")
                        .append("\"capacityPerShift\":").append(d.getCapacityPerShift()).append(",")
                        .append("\"workloadPercent\":").append(String.format(Locale.US, "%.1f", pct)).append(",")
                        .append("\"active\":").append(d.isActive())
                        .append("}");
                if (i < drivers.size() - 1) sb.append(",");
            }
            sb.append("]");
            sendJson(exchange, 200, sb.toString());
        }
    }

    private class ShiftsHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String method = exchange.getRequestMethod();
            String path = exchange.getRequestURI().getPath();
            String query = exchange.getRequestURI().getQuery();

            // GET /api/shifts
            if ("GET".equalsIgnoreCase(method) && ("/api/shifts".equals(path) || "/api/shifts/".equals(path))) {
                String json = "["
                        + "{\"id\":\"SHIFT-01\",\"name\":\"Ca 1 · Sáng\",\"area\":\"Hub Quận 7\",\"start\":\"2026-11-18T01:00:00Z\",\"end\":\"2026-11-18T05:00:00Z\"},"
                        + "{\"id\":\"SHIFT-02\",\"name\":\"Ca 2 · Chiều\",\"area\":\"Hub Quận 7\",\"start\":\"2026-11-18T06:30:00Z\",\"end\":\"2026-11-18T10:30:00Z\"}"
                        + "]";
                sendJson(exchange, 200, json);
                return;
            }

            // Parse shift id from /api/shifts/{id}/...
            String rest = path.startsWith("/api/shifts/") ? path.substring("/api/shifts/".length()) : "";
            String[] segs = rest.split("/");
            String shiftId = segs.length > 0 && !segs[0].isEmpty() ? segs[0] : "SHIFT-01";
            Map<String, Boolean> attMap = shiftAttendance.computeIfAbsent(shiftId, k -> new HashMap<>());

            // GET /api/shifts/{id}/drivers
            if ("GET".equalsIgnoreCase(method) && segs.length >= 2 && "drivers".equals(segs[1])) {
                Map<String, String> qMap = parseFormOrJson(query == null ? "" : query);
                String attFilter = qMap.getOrDefault("attendance", "all");
                String areaFilter = qMap.getOrDefault("area", "");
                String needle = qMap.getOrDefault("query", "").trim().toLowerCase(Locale.ROOT);

                List<Driver> drivers = driverShiftService.getAllDrivers();
                StringBuilder sb = new StringBuilder("[");
                boolean first = true;
                for (Driver d : drivers) {
                    boolean checkedIn = Boolean.TRUE.equals(attMap.get(d.getDriverId()));
                    if ("checked_in".equals(attFilter) && !checkedIn) continue;
                    if ("not_checked_in".equals(attFilter) && checkedIn) continue;
                    if (!areaFilter.isEmpty() && !areaFilter.equalsIgnoreCase(d.getAssignedAreaId())) continue;
                    if (!needle.isEmpty()
                            && !d.getDriverId().toLowerCase(Locale.ROOT).contains(needle)
                            && !d.getName().toLowerCase(Locale.ROOT).contains(needle)) continue;

                    if (!first) sb.append(",");
                    first = false;
                    sb.append("{")
                            .append("\"driverId\":\"").append(escape(d.getDriverId())).append("\",")
                            .append("\"name\":\"").append(escape(d.getName())).append("\",")
                            .append("\"assignedAreaId\":\"").append(escape(d.getAssignedAreaId())).append("\",")
                            .append("\"currentLoad\":").append(d.getCurrentLoad()).append(",")
                            .append("\"capacityPerShift\":").append(Math.min(15, d.getCapacityPerShift())).append(",")
                            .append("\"checkedIn\":").append(checkedIn).append(",")
                            .append("\"availableForNewAssignments\":").append(d.isActive()).append(",")
                            .append("\"services\":[\"STANDARD\",\"EXPRESS\"]")
                            .append("}");
                }
                sb.append("]");
                sendJson(exchange, 200, sb.toString());
                return;
            }

            // POST /api/shifts/{id}/attendance
            if ("POST".equalsIgnoreCase(method) && segs.length >= 2 && "attendance".equals(segs[1])) {
                String body = new String(exchange.getRequestBody().readAllBytes(), StandardCharsets.UTF_8);
                Map<String, String> params = parseFormOrJson(body);
                String driverId = params.getOrDefault("driverId", "");
                boolean present = body.contains("\"present\":true") || body.contains("\"present\": true");
                if (driverId.isEmpty()) {
                    sendJson(exchange, 400, "{\"error\":\"Thiếu driverId\"}");
                    return;
                }
                attMap.put(driverId, present);
                sendJson(exchange, 200, "{\"success\":true,\"shiftId\":\"" + escape(shiftId) + "\",\"driverId\":\"" + escape(driverId) + "\",\"present\":" + present + "}");
                return;
            }

            // GET /api/shifts/{id}/attendance/export
            if ("GET".equalsIgnoreCase(method) && segs.length >= 3 && "attendance".equals(segs[1]) && "export".equals(segs[2])) {
                StringBuilder csv = new StringBuilder("driverId,name,area,checkedIn,availableForNewAssignments,currentLoad,capacityPerShift\n");
                for (Driver d : driverShiftService.getAllDrivers()) {
                    boolean checkedIn = Boolean.TRUE.equals(attMap.get(d.getDriverId()));
                    csv.append("\"").append(escape(d.getDriverId())).append("\",")
                            .append("\"").append(escape(d.getName())).append("\",")
                            .append("\"").append(escape(d.getAssignedAreaId())).append("\",")
                            .append(checkedIn).append(",")
                            .append(d.isActive()).append(",")
                            .append(d.getCurrentLoad()).append(",")
                            .append(Math.min(15, d.getCapacityPerShift())).append("\n");
                }
                byte[] bytes = csv.toString().getBytes(StandardCharsets.UTF_8);
                exchange.getResponseHeaders().set("Content-Type", "text/csv; charset=UTF-8");
                exchange.getResponseHeaders().set("Content-Disposition", "attachment; filename=attendance-" + shiftId + ".csv");
                exchange.sendResponseHeaders(200, bytes.length);
                try (OutputStream os = exchange.getResponseBody()) {
                    os.write(bytes);
                }
                return;
            }

            sendJson(exchange, 404, "{\"error\":\"Not Found: " + escape(path) + "\"}");
        }
    }

    private class DispatchSuggestionsHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            List<Assignment> suggestions = dispatchEngine.generateDispatchSuggestions("SHIFT-01");
            StringBuilder sb = new StringBuilder("[");
            for (int i = 0; i < suggestions.size(); i++) {
                Assignment a = suggestions.get(i);
                Optional<DeliveryOrder> orderOpt = orderService.getOrderById(a.getOrderId());
                Optional<Driver> driverOpt = driverShiftService.getDriverById(a.getDriverId());

                String orderCode = orderOpt.map(DeliveryOrder::getTrackingCode).orElse(a.getOrderId());
                String orderArea = orderOpt.map(DeliveryOrder::getAreaId).orElse("");
                String driverName = driverOpt.map(Driver::getName).orElse(a.getDriverId());
                String driverPhone = driverOpt.map(Driver::getPhone).orElse("");

                sb.append("{")
                        .append("\"assignmentId\":\"").append(a.getAssignmentId()).append("\",")
                        .append("\"orderId\":\"").append(a.getOrderId()).append("\",")
                        .append("\"trackingCode\":\"").append(orderCode).append("\",")
                        .append("\"orderArea\":\"").append(orderArea).append("\",")
                        .append("\"driverId\":\"").append(a.getDriverId()).append("\",")
                        .append("\"driverName\":\"").append(escape(driverName)).append("\",")
                        .append("\"driverPhone\":\"").append(driverPhone).append("\",")
                        .append("\"suggestedScore\":").append(String.format(Locale.US, "%.0f", a.getSuggestedScore())).append(",")
                        .append("\"matchReason\":\"").append(escape(a.getMatchReason())).append("\",")
                        .append("\"decisionStatus\":\"").append(a.getDecisionStatus()).append("\"")
                        .append("}");
                if (i < suggestions.size() - 1) sb.append(",");
            }
            sb.append("]");
            sendJson(exchange, 200, sb.toString());
        }
    }

    private class DispatchApproveHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if ("POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                String body = new String(exchange.getRequestBody().readAllBytes(), StandardCharsets.UTF_8);
                Map<String, String> p = parseFormOrJson(body);
                String assignId = p.get("assignmentId");
                boolean ok = dispatchEngine.approveAssignment(assignId, "DISPATCHER_WEB");
                sendJson(exchange, 200, "{\"success\":" + ok + "}");
            }
        }
    }

    private class DispatchRejectHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if ("POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                String body = new String(exchange.getRequestBody().readAllBytes(), StandardCharsets.UTF_8);
                Map<String, String> p = parseFormOrJson(body);
                String assignId = p.get("assignmentId");
                boolean ok = dispatchEngine.rejectAssignment(assignId);
                sendJson(exchange, 200, "{\"success\":" + ok + "}");
            }
        }
    }

    private class DriverStatusUpdateHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if ("POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                String body = new String(exchange.getRequestBody().readAllBytes(), StandardCharsets.UTF_8);
                Map<String, String> p = parseFormOrJson(body);
                String orderId = p.get("orderId");
                String action = p.get("action"); // TRANSIT, DELIVERED, FAILED
                String driverId = p.getOrDefault("driverId", "DRV-01");
                String reasonCode = p.getOrDefault("reasonCode", "CUSTOMER_UNREACHABLE");
                String note = p.getOrDefault("note", "");

                if (orderId == null || orderId.trim().isEmpty() || orderService.getOrderById(orderId).isEmpty()) {
                    List<DeliveryOrder> all = orderService.getAllOrders();
                    if (!all.isEmpty()) {
                        orderId = all.get(0).getOrderId();
                    }
                }

                boolean ok = false;
                if ("TRANSIT".equalsIgnoreCase(action)) {
                    ok = orderService.updateOrderStatus(orderId, OrderStatus.IN_TRANSIT, driverId, "Tài xế quét xuất kho bắt đầu đi phát");
                } else if ("DELIVERED".equalsIgnoreCase(action)) {
                    ok = orderService.updateOrderStatus(orderId, OrderStatus.DELIVERED, driverId, "Giao thành công, thu COD");
                    driverShiftService.decrementDriverLoad(driverId);
                } else if ("FAILED".equalsIgnoreCase(action)) {
                    FailureReason reason = FailureReason.CUSTOMER_UNREACHABLE;
                    try { reason = FailureReason.valueOf(reasonCode); } catch (Exception ignored) {}
                    ok = orderService.reportDeliveryFailure(orderId, driverId, reason, note);
                    driverShiftService.decrementDriverLoad(driverId);
                }

                sendJson(exchange, 200, "{\"success\":" + ok + ",\"orderId\":\"" + orderId + "\"}");
            } else {
                sendJson(exchange, 405, "{\"error\":\"Method Not Allowed\"}");
            }
        }
    }

    private class OrderHistoryHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String query = exchange.getRequestURI().getQuery();
            String orderId = "";
            if (query != null && query.contains("orderId=")) {
                orderId = query.split("orderId=")[1].split("&")[0];
            }

            List<StatusHistory> hist = orderService.getOrderHistory(orderId);
            StringBuilder sb = new StringBuilder("[");
            for (int i = 0; i < hist.size(); i++) {
                StatusHistory h = hist.get(i);
                sb.append("{")
                        .append("\"historyId\":\"").append(h.getHistoryId()).append("\",")
                        .append("\"oldStatus\":").append(h.getOldStatus() != null ? "\"" + h.getOldStatus().getDescription() + "\"" : "null").append(",")
                        .append("\"newStatus\":\"").append(h.getNewStatus().getDescription()).append("\",")
                        .append("\"actorId\":\"").append(h.getActorId()).append("\",")
                        .append("\"reasonCode\":\"").append(h.getReasonCode()).append("\",")
                        .append("\"note\":\"").append(escape(h.getNote())).append("\",")
                        .append("\"time\":\"").append(h.getChangedAt().toString()).append("\"")
                        .append("}");
                if (i < hist.size() - 1) sb.append(",");
            }
            sb.append("]");
            sendJson(exchange, 200, sb.toString());
        }
    }

    private class AnalyticsHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            int total = analyticsService.getTotalOrders();
            int delivered = analyticsService.getDeliveredOrdersCount();
            int failed = analyticsService.getFailedOrdersCount();
            int pending = analyticsService.getPendingOrdersCount();
            double successRate = analyticsService.getSuccessDeliveryRate();
            double slaRate = analyticsService.getOnTimeSlaRate();
            int highRisk = analyticsService.getHighRiskOrdersCount();

            String json = String.format(Locale.US,
                    "{\"totalOrders\":%d,\"deliveredCount\":%d,\"failedCount\":%d,\"pendingCount\":%d,\"successRate\":%.1f,\"slaRate\":%.1f,\"highRiskCount\":%d}",
                    total, delivered, failed, pending, successRate, slaRate, highRisk);
            sendJson(exchange, 200, json);
        }
    }

    private class TrackingHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String path = exchange.getRequestURI().getPath();
            String code = "";
            String[] parts = path.split("/");
            if (parts.length > 3) {
                code = URLDecoder.decode(parts[3], StandardCharsets.UTF_8);
            }
            if (code.isEmpty() && exchange.getRequestURI().getQuery() != null) {
                String query = exchange.getRequestURI().getQuery();
                for (String q : query.split("&")) {
                    if (q.startsWith("code=") || q.startsWith("trackingCode=")) {
                        code = URLDecoder.decode(q.substring(q.indexOf("=") + 1), StandardCharsets.UTF_8);
                    }
                }
            }

            code = code.trim();
            if (code.isEmpty()) {
                sendJson(exchange, 400, "{\"status\":400,\"message\":\"Mã vận đơn không được để trống\"}");
                return;
            }

            // Find order by tracking code or ID
            Optional<DeliveryOrder> orderOpt = orderService.getOrderByTrackingCode(code);
            if (orderOpt.isEmpty()) {
                orderOpt = orderService.getOrderById(code);
            }
            if (orderOpt.isEmpty()) {
                final String searchKey = code.toLowerCase();
                orderOpt = orderService.getAllOrders().stream()
                        .filter(o -> o.getTrackingCode().equalsIgnoreCase(searchKey)
                                || o.getOrderId().equalsIgnoreCase(searchKey)
                                || searchKey.contains(o.getTrackingCode().toLowerCase())
                                || o.getTrackingCode().toLowerCase().contains(searchKey))
                        .findFirst();
            }

            if (orderOpt.isPresent()) {
                DeliveryOrder order = orderOpt.get();
                List<StatusHistory> histories = orderService.getOrderHistory(order.getOrderId());
                StringBuilder sb = new StringBuilder("{");
                sb.append("\"trackingCode\":\"").append(order.getTrackingCode()).append("\",")
                  .append("\"statusLabel\":\"").append(order.getStatus().name()).append("\",")
                  .append("\"statusDisplay\":\"").append(order.getStatus().getDescription()).append("\",")
                  .append("\"areaId\":\"").append(escape(order.getAreaId())).append("\",")
                  .append("\"createdAt\":\"").append(order.getCreatedAt() != null ? order.getCreatedAt().toString() : "2026-11-17T08:00:00Z").append("\",")
                  .append("\"updatedAt\":\"").append(order.getFormattedSla()).append("\",")
                  .append("\"timeline\":[");

                if (histories != null && !histories.isEmpty()) {
                    for (int i = 0; i < histories.size(); i++) {
                        StatusHistory h = histories.get(i);
                        sb.append("{")
                          .append("\"statusLabel\":\"").append(escape(h.getNewStatus().getDescription())).append("\",")
                          .append("\"changedAt\":\"").append(h.getChangedAt() != null ? h.getChangedAt().toString() : "").append("\"")
                          .append("}");
                        if (i < histories.size() - 1) sb.append(",");
                    }
                } else {
                    sb.append("{\"statusLabel\":\"Tiếp nhận tại Hub\",\"changedAt\":\"08:30 17/11/2026\"},")
                      .append("{\"statusLabel\":\"").append(escape(order.getStatus().getDescription())).append("\",\"changedAt\":\"").append(order.getFormattedSla()).append("\"}");
                }
                sb.append("]}");
                sendJson(exchange, 200, sb.toString());
                return;
            }

            // Fallback for demo tracking codes like MNX000001, VN241109086...
            if (code.toUpperCase().startsWith("MNX") || code.toUpperCase().startsWith("VN24")) {
                StringBuilder sb = new StringBuilder("{");
                sb.append("\"trackingCode\":\"").append(code.toUpperCase()).append("\",")
                  .append("\"statusLabel\":\"DELIVERED\",")
                  .append("\"statusDisplay\":\"Giao thành công\",")
                  .append("\"areaId\":\"Tân Thuận Đông, Q. 7\",")
                  .append("\"createdAt\":\"2026-11-17T08:00:00Z\",")
                  .append("\"updatedAt\":\"17/11/2026 15:30\",")
                  .append("\"timeline\":[")
                  .append("{\"statusLabel\":\"Tiếp nhận tại Hub Quận 7\",\"changedAt\":\"08:30 17/11/2026\"},")
                  .append("{\"statusLabel\":\"Đủ điều kiện phát & Đã phân công\",\"changedAt\":\"09:00 17/11/2026\"},")
                  .append("{\"statusLabel\":\"Tài xế xuất kho đi giao\",\"changedAt\":\"09:30 17/11/2026\"},")
                  .append("{\"statusLabel\":\"Giao thành công (Đã thu COD)\",\"changedAt\":\"10:15 17/11/2026\"}")
                  .append("]}");
                sendJson(exchange, 200, sb.toString());
                return;
            }

            sendJson(exchange, 404, "{\"status\":404,\"message\":\"Không tìm thấy thông tin phù hợp với mã vận đơn: " + escape(code) + "\"}");
        }
    }

    private class AuditHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String query = exchange.getRequestURI().getQuery();
            String q = "";
            if (query != null && !query.isEmpty()) {
                Map<String, String> qMap = parseFormOrJson(query);
                q = qMap.getOrDefault("q", "").trim().toLowerCase(Locale.ROOT);
            }

            List<DeliveryOrder> allOrders = orderService.getAllOrders();
            StringBuilder sb = new StringBuilder("[");
            boolean first = true;

            for (DeliveryOrder o : allOrders) {
                List<StatusHistory> hist = orderService.getOrderHistory(o.getOrderId());
                if (hist != null) {
                    for (StatusHistory h : hist) {
                        if (!q.isEmpty()) {
                            String tracking = o.getTrackingCode().toLowerCase();
                            String actor = h.getActorId().toLowerCase();
                            String action = (h.getNote() != null ? h.getNote() : "").toLowerCase();
                            if (!tracking.contains(q) && !actor.contains(q) && !action.contains(q)) {
                                continue;
                            }
                        }

                        if (!first) sb.append(",");
                        first = false;

                        sb.append("{")
                          .append("\"occurredAt\":\"").append(h.getChangedAt() != null ? h.getChangedAt().toString() : "").append("\",")
                          .append("\"actorId\":\"").append(escape(h.getActorId())).append("\",")
                          .append("\"action\":\"").append(escape(h.getNote() != null && !h.getNote().isEmpty() ? h.getNote() : "Cập nhật trạng thái")).append("\",")
                          .append("\"trackingCode\":\"").append(o.getTrackingCode()).append("\",")
                          .append("\"fromStatus\":").append(h.getOldStatus() != null ? "\"" + h.getOldStatus().name() + "\"" : "null").append(",")
                          .append("\"toStatus\":\"").append(h.getNewStatus().name()).append("\",")
                          .append("\"reasonCode\":\"").append(escape(h.getReasonCode() != null ? h.getReasonCode() : "SYSTEM")).append("\"")
                          .append("}");
                    }
                }
            }
            sb.append("]");
            sendJson(exchange, 200, sb.toString());
        }
    }

    // --- Utility Methods ---

    private void sendJson(HttpExchange exchange, int statusCode, String json) throws IOException {
        byte[] bytes = json.getBytes(StandardCharsets.UTF_8);
        exchange.getResponseHeaders().set("Content-Type", "application/json; charset=UTF-8");
        exchange.getResponseHeaders().set("Access-Control-Allow-Origin", "*");
        exchange.sendResponseHeaders(statusCode, bytes.length);
        try (OutputStream os = exchange.getResponseBody()) {
            os.write(bytes);
        }
    }

    private String escape(String s) {
        if (s == null) return "";
        return s.replace("\\", "\\\\").replace("\"", "\\\"").replace("\n", " ").replace("\r", "");
    }

    private Map<String, String> parseFormOrJson(String body) {
        Map<String, String> map = new HashMap<>();
        if (body == null || body.trim().isEmpty()) return map;

        body = body.trim();
        if (body.startsWith("{") && body.endsWith("}")) {
            // Primitive JSON key-value parser for simple payloads
            String inner = body.substring(1, body.length() - 1);
            String[] pairs = inner.split(",");
            for (String pair : pairs) {
                String[] kv = pair.split(":", 2);
                if (kv.length == 2) {
                    String k = kv[0].trim().replace("\"", "");
                    String v = kv[1].trim().replace("\"", "");
                    map.put(k, v);
                }
            }
        } else {
            // Form URL Encoded
            String[] pairs = body.split("&");
            for (String pair : pairs) {
                String[] kv = pair.split("=", 2);
                if (kv.length == 2) {
                    try {
                        String k = URLDecoder.decode(kv[0], StandardCharsets.UTF_8);
                        String v = URLDecoder.decode(kv[1], StandardCharsets.UTF_8);
                        map.put(k, v);
                    } catch (Exception ignored) {}
                }
            }
        }
        return map;
    }
}
