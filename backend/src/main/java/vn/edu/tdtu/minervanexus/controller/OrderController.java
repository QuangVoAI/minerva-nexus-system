package vn.edu.tdtu.minervanexus.controller;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import vn.edu.tdtu.minervanexus.common.OrderStatus;
import vn.edu.tdtu.minervanexus.document.DeliveryOrderDocument;
import vn.edu.tdtu.minervanexus.service.OrderService;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    private final OrderService orderService;
    public OrderController(OrderService orderService) { this.orderService = orderService; }
    @GetMapping public List<DeliveryOrderDocument> all() { return orderService.findAll(); }
    @PostMapping @ResponseStatus(HttpStatus.CREATED)
    public DeliveryOrderDocument create(@RequestBody @Valid DeliveryOrderDocument order, @RequestHeader(value = "X-Actor-Id", defaultValue = "SYSTEM") String actorId) { return orderService.create(order, actorId); }
    @PatchMapping("/{id}/status")
    public DeliveryOrderDocument transition(@PathVariable String id, @RequestParam OrderStatus target, @RequestHeader(value = "X-Actor-Id", defaultValue = "SYSTEM") String actorId, @RequestParam(defaultValue = "") String note) { return orderService.transition(id, target, actorId, note); }
    @PostMapping("/{id}/failures")
    public DeliveryOrderDocument reportFailure(@PathVariable String id, @RequestHeader(value = "X-Actor-Id", defaultValue = "SYSTEM") String actorId, @RequestParam String reasonCode, @RequestParam(defaultValue = "") String note) { return orderService.reportFailure(id, actorId, reasonCode, note); }
}
