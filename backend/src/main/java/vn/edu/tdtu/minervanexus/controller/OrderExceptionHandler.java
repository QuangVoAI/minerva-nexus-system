package vn.edu.tdtu.minervanexus.controller;

import org.springframework.dao.*;
import org.springframework.http.*;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import vn.edu.tdtu.minervanexus.service.OrderProblem;
import java.util.Map;

@RestControllerAdvice(assignableTypes={OrderController.class,OrderTrackingController.class})
public class OrderExceptionHandler {
    @ExceptionHandler(OrderProblem.class) public ResponseEntity<Map<String,Object>> domain(OrderProblem e) {return response(e.getStatus(),e.getMessage());}
    @ExceptionHandler({DuplicateKeyException.class,OptimisticLockingFailureException.class}) public ResponseEntity<Map<String,Object>> conflict(Exception e) {return response(409,"Dữ liệu đã thay đổi hoặc mã vận đơn đã tồn tại. Vui lòng tải lại.");}
    @ExceptionHandler({HttpMessageNotReadableException.class,MissingServletRequestParameterException.class,MethodArgumentTypeMismatchException.class,IllegalArgumentException.class}) public ResponseEntity<Map<String,Object>> bad(Exception e) {return response(400,"Yêu cầu không hợp lệ. Kiểm tra dữ liệu, tham số và định dạng UTC.");}
    @ExceptionHandler(DataAccessException.class) public ResponseEntity<Map<String,Object>> database(Exception e) {return response(503,"Dịch vụ dữ liệu tạm thời không khả dụng.");}
    @ExceptionHandler(Exception.class) public ResponseEntity<Map<String,Object>> unexpected(Exception e) {return response(500,"Không thể xử lý yêu cầu.");}
    private ResponseEntity<Map<String,Object>> response(int status,String message) {var builder=ResponseEntity.status(status);if(status==429)builder.header("Retry-After","60");return builder.body(Map.of("status",status,"message",message));}
}
