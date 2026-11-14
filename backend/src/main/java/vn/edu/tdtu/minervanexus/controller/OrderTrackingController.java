package vn.edu.tdtu.minervanexus.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.*;
import vn.edu.tdtu.minervanexus.repository.DeliveryOrderRepository;
import vn.edu.tdtu.minervanexus.service.OrderProblem;
import java.time.*;
import java.util.*;

@RestController
@RequestMapping("/api/tracking")
public class OrderTrackingController {
    private final DeliveryOrderRepository repository;
    private final Map<String,Window> windows=new HashMap<>();
    private record Window(long minute,int count) {}
    public record Milestone(String statusLabel,Instant changedAt) {}
    public record Tracking(String trackingCode,String statusLabel,String areaId,Instant createdAt,Instant updatedAt,List<Milestone> timeline) {}
    private final Clock clock;
    @org.springframework.beans.factory.annotation.Autowired
    public OrderTrackingController(DeliveryOrderRepository repository) {this(repository,Clock.systemUTC());}
    public OrderTrackingController(DeliveryOrderRepository repository,Clock clock) {this.repository=repository;this.clock=clock;}
    @GetMapping("/{trackingCode}") public Tracking track(@PathVariable String trackingCode,HttpServletRequest request) {
        limit(request.getRemoteAddr());
        if(!trackingCode.matches("[A-Z0-9][A-Z0-9-]{11,63}"))throw missing();
        var o=repository.findByTrackingCode(trackingCode).orElseThrow(this::missing);
        return new Tracking(o.getTrackingCode(),o.getStatus().name(),o.getAreaId(),o.getCreatedAt(),o.getUpdatedAt(),o.getStatusHistory().stream().map(e->new Milestone(e.toStatus==null?null:e.toStatus.name(),e.changedAt)).toList());
    }
    private OrderProblem missing() {return new OrderProblem(404,"Không tìm thấy thông tin vận đơn.");}
    private synchronized void limit(String ip) {
        long minute=clock.millis()/60000;windows.entrySet().removeIf(e->e.getValue().minute()!=minute);
        Window w=windows.get(ip);if(w==null&&windows.size()>=10000)throw new OrderProblem(429,"Vui lòng thử lại sau.");
        int count=w==null?0:w.count();if(count>=30)throw new OrderProblem(429,"Vui lòng thử lại sau.");windows.put(ip,new Window(minute,count+1));
    }
}
