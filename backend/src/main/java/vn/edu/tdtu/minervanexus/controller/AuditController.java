package vn.edu.tdtu.minervanexus.controller;

import java.time.Instant;
import java.util.*;
import java.util.stream.Collectors;
import org.springframework.web.bind.annotation.*;
import vn.edu.tdtu.minervanexus.repository.DeliveryOrderRepository;

@RestController
@RequestMapping("/api/audit")
public class AuditController {
  private final DeliveryOrderRepository orders;
  public AuditController(DeliveryOrderRepository orders) { this.orders = orders; }

  public record Row(String orderId, String trackingCode, String actorId, String action,
                    String fromStatus, String toStatus, String reasonCode, String note, Instant occurredAt) {}

  @GetMapping
  public List<Row> list(@RequestParam(required = false) String q,
                        @RequestParam(required = false) String actor) {
    String query = q == null ? "" : q.toLowerCase(Locale.ROOT);
    return orders.findAll().stream().flatMap(o -> o.getAuditEvents().stream().map(e ->
        new Row(o.getId(), o.getTrackingCode(), e.actorId, e.action,
            e.fromStatus == null ? null : e.fromStatus.name(),
            e.toStatus == null ? null : e.toStatus.name(), e.reasonCode, e.note, e.occurredAt)))
      .filter(r -> actor == null || actor.isBlank() || actor.equalsIgnoreCase(r.actorId()))
      .filter(r -> query.isBlank() || String.valueOf(r.trackingCode()).toLowerCase(Locale.ROOT).contains(query)
          || String.valueOf(r.orderId()).toLowerCase(Locale.ROOT).contains(query)
          || String.valueOf(r.action()).toLowerCase(Locale.ROOT).contains(query))
      .sorted(Comparator.comparing(Row::occurredAt, Comparator.nullsLast(Comparator.reverseOrder())))
      .collect(Collectors.toList());
  }
}
