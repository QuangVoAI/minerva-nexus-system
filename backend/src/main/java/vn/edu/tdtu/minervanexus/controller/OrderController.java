package vn.edu.tdtu.minervanexus.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import vn.edu.tdtu.minervanexus.common.*;
import vn.edu.tdtu.minervanexus.document.DeliveryOrderDocument;
import vn.edu.tdtu.minervanexus.repository.DeliveryOrderSearch;
import vn.edu.tdtu.minervanexus.service.OrderService;
import java.time.Instant;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    private final OrderService orderService;
    private final DeliveryOrderSearch search;
    public OrderController(OrderService orderService) {this(orderService,null);}
    @Autowired
    public OrderController(OrderService orderService,DeliveryOrderSearch search) {this.orderService=orderService;this.search=search;}
    @GetMapping public List<DeliveryOrderDocument> all(@RequestParam(required=false) OrderStatus status,@RequestParam(required=false) String areaId,@RequestParam(required=false) String hubId,@RequestParam(required=false) ServiceLevel serviceLevel,@RequestParam(required=false) Instant from,@RequestParam(required=false) Instant to,@RequestParam(required=false) String q,@RequestParam(defaultValue="0") int page,@RequestParam(defaultValue="100") int size) {
        return search.search(new DeliveryOrderSearch.Filter(status,areaId,hubId,serviceLevel,from,to,q,page,size)).content();
    }
    @GetMapping("/search") public DeliveryOrderSearch.Result search(@RequestParam(required=false) OrderStatus status,@RequestParam(required=false) String areaId,@RequestParam(required=false) String hubId,@RequestParam(required=false) ServiceLevel serviceLevel,@RequestParam(required=false) Instant from,@RequestParam(required=false) Instant to,@RequestParam(required=false) String q,@RequestParam(defaultValue="0") int page,@RequestParam(defaultValue="20") int size) {return search.search(new DeliveryOrderSearch.Filter(status,areaId,hubId,serviceLevel,from,to,q,page,size));}
    @GetMapping("/{id}") public DeliveryOrderDocument detail(@PathVariable String id) {return orderService.findById(id);}
    @GetMapping("/{id}/timeline") public List<DeliveryOrderDocument.StatusEvent> timeline(@PathVariable String id) {return orderService.timeline(id);}
    @PostMapping @ResponseStatus(HttpStatus.CREATED) public DeliveryOrderDocument create(@RequestBody OrderCreateRequest request,@RequestHeader(value="X-Actor-Id",defaultValue="SYSTEM") String actor) {return orderService.create(request.toDocument(),actor);}
    @PostMapping("/{id}/receive") public DeliveryOrderDocument receive(@PathVariable String id,@RequestHeader(value="X-Actor-Id",defaultValue="SYSTEM") String actor) {return orderService.receive(id,actor);}
    @PostMapping("/{id}/cancel") public DeliveryOrderDocument cancel(@PathVariable String id,@RequestParam String reason,@RequestHeader(value="X-Actor-Id",defaultValue="SYSTEM") String actor) {return orderService.cancel(id,actor,reason);}
    @PatchMapping("/{id}/status") public DeliveryOrderDocument transition(@PathVariable String id,@RequestParam OrderStatus target,@RequestHeader(value="X-Actor-Id",defaultValue="SYSTEM") String actor,@RequestParam(defaultValue="") String note) {return orderService.transition(id,target,actor,note);}
    @PostMapping("/{id}/failures") public DeliveryOrderDocument failure(@PathVariable String id,@RequestParam String reasonCode,@RequestParam(defaultValue="") String note,@RequestHeader(value="X-Actor-Id",defaultValue="SYSTEM") String actor) {return orderService.reportFailure(id,actor,reasonCode,note);}
    @PostMapping("/{id}/sla-assessment") public DeliveryOrderDocument assess(@PathVariable String id,@RequestHeader(value="X-Actor-Id",defaultValue="SYSTEM") String actor) {return orderService.assessSla(id,actor);}
}
