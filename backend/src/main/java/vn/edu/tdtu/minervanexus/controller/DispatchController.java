package vn.edu.tdtu.minervanexus.controller;

import static vn.edu.tdtu.minervanexus.service.DispatchPlan.*;

import jakarta.servlet.http.HttpServletRequest;
import java.time.Instant;
import java.util.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import vn.edu.tdtu.minervanexus.common.ServiceLevel;
import vn.edu.tdtu.minervanexus.document.DispatchManifest;
import vn.edu.tdtu.minervanexus.document.DispatchManifest.*;
import vn.edu.tdtu.minervanexus.service.*;

@RestController
@RequestMapping("/api")
public class DispatchController {
  private final DispatchStore store;
  private final HttpServletRequest request;

  private String hub() {
    String value = request.getHeader("X-Hub-Id");
    return filled(value) ? value : "HUB01";
  }

  public DispatchController(DispatchStore store, HttpServletRequest request) {
    this.store = store;
    this.request = request;
  }

  private DispatchPlan board(DispatchManifest h, String actor) {
    require(Set.of("HUB", "DISPATCHER_WEB").contains(actor), "Cần tác nhân Hub");
    return new DispatchPlan(h, Instant.now(), actor);
  }

  @ExceptionHandler(IllegalArgumentException.class)
  @ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
  Map<String, String> invalid(IllegalArgumentException e) {
    return Map.of("message", e.getMessage());
  }

  @GetMapping("/dispatch/board")
  public DispatchManifest read() {
    return store.read(hub());
  }

  public record DriverSummary(
      String driverId,
      String name,
      String phone,
      String assignedAreaId,
      int currentLoad,
      int capacityPerShift,
      int workloadPercent,
      boolean active,
      Set<ServiceLevel> services) {}

  @GetMapping("/drivers")
  public List<DriverSummary> drivers(@RequestParam(required = false) String shiftId) {
    var state = store.read(hub());
    var now = Instant.now();
    if (shiftId != null) get(state.shifts, shiftId);
    return state.drivers.values().stream()
        .map(
            d -> {
              String slot =
                  shiftId != null
                      ? shiftId
                      : state.shifts.values().stream()
                          .filter(
                              s ->
                                  s.attendance().containsKey(d.id())
                                      && !now.isBefore(s.start())
                                      && now.isBefore(s.end()))
                          .map(Shift::id)
                          .findFirst()
                          .orElse(null);
              int load = slot == null ? 0 : DispatchRules.load(state, slot, d.id());
              return new DriverSummary(
                  d.id(),
                  d.name(),
                  "",
                  d.area(),
                  load,
                  d.capacity(),
                  Math.round(100f * load / d.capacity()),
                  d.active(),
                  d.services());
            })
        .toList();
  }

  @GetMapping("/shifts")
  public Collection<Shift> shifts() {
    return store.read(hub()).shifts.values();
  }

  @GetMapping("/shifts/{id}/attendance")
  public Map<String, Boolean> listAttendance(@PathVariable String id) {
    return get(store.read(hub()).shifts, id).attendance();
  }

  public record DriverForm(
      String name, String area, int capacity, boolean active, Set<ServiceLevel> services) {
    Driver toDriver(String id) {
      return new Driver(id, name, area, capacity, active, services);
    }
  }

  @PostMapping("/drivers")
  public Driver add(@RequestBody DriverForm f, @RequestHeader("X-Actor-Id") String actor) {
    return store.write(hub(), actor, h -> board(h, actor).driver(f.toDriver(id("TX"))));
  }

  @PutMapping("/drivers/{id}")
  public Driver edit(
      @PathVariable String id,
      @RequestBody DriverForm f,
      @RequestHeader("X-Actor-Id") String actor) {
    return store.write(
        hub(),
        actor,
        h -> {
          get(h.drivers, id);
          return board(h, actor).driver(f.toDriver(id));
        });
  }

  @DeleteMapping("/drivers/{id}")
  public void retire(@PathVariable String id, @RequestHeader("X-Actor-Id") String actor) {
    store.write(
        hub(),
        actor,
        h -> {
          board(h, actor).retire(id);
          return null;
        });
  }

  public record ShiftForm(String name, String area, Instant start, Instant end) {
    Shift toShift(String id, Map<String, Boolean> attendance) {
      return new Shift(id, name, area, start, end, attendance);
    }
  }

  @PostMapping("/shifts")
  public Shift addShift(@RequestBody ShiftForm f, @RequestHeader("X-Actor-Id") String actor) {
    return store.write(
        hub(), actor, h -> board(h, actor).shift(f.toShift(id("CA"), new LinkedHashMap<>())));
  }

  @PutMapping("/shifts/{id}")
  public Shift editShift(
      @PathVariable String id,
      @RequestBody ShiftForm f,
      @RequestHeader("X-Actor-Id") String actor) {
    return store.write(
        hub(), actor, h -> board(h, actor).shift(f.toShift(id, get(h.shifts, id).attendance())));
  }

  @DeleteMapping("/shifts/{id}")
  public void deleteShift(@PathVariable String id, @RequestHeader("X-Actor-Id") String actor) {
    store.write(
        hub(),
        actor,
        h -> {
          board(h, actor).deleteShift(id);
          return null;
        });
  }

  public record Attendance(String driverId, Boolean present) {}

  @PostMapping("/shifts/{id}/attendance")
  public void mark(
      @PathVariable String id,
      @RequestBody Attendance f,
      @RequestHeader("X-Actor-Id") String actor) {
    require(f.present() != null, "Thiếu trạng thái điểm danh");
    store.write(
        hub(),
        actor,
        h -> {
          board(h, actor).attendance(id, f.driverId(), f.present());
          return null;
        });
  }

  @DeleteMapping("/shifts/{id}/attendance/{driver}")
  public void remove(
      @PathVariable String id,
      @PathVariable String driver,
      @RequestHeader("X-Actor-Id") String actor) {
    store.write(
        hub(),
        actor,
        h -> {
          board(h, actor).attendance(id, driver, null);
          return null;
        });
  }

  public record ShiftRef(String shiftId) {}

  @PutMapping("/orders/{id}/shift")
  public void move(
      @PathVariable String id, @RequestBody ShiftRef f, @RequestHeader("X-Actor-Id") String actor) {
    store.write(
        hub(),
        actor,
        h -> {
          board(h, actor).move(id, f.shiftId());
          return null;
        });
  }

  @PostMapping("/dispatch/proposals")
  public List<DispatchPlan.Result> propose(
      @RequestBody ShiftRef f, @RequestHeader("X-Actor-Id") String actor) {
    return store.write(hub(), actor, h -> board(h, actor).propose(f.shiftId()));
  }

  public record Decision(String driverId, String reason) {}

  public record Suggestion(
      String assignmentId,
      String orderId,
      String trackingCode,
      String orderArea,
      String driverId,
      String driverName,
      String driverPhone,
      int suggestedScore,
      String matchReason,
      String decisionStatus,
      Score components) {}

  @GetMapping("/dispatch/suggestions")
  public List<Suggestion> suggestions() {
    var state = store.read(hub());
    // For the demo path, place eligible queued orders into the first active shift
    // when the operator has not explicitly selected a shift yet. The explicit
    // move/propose endpoints remain available for normal operations.
    if (state.proposals.values().stream().noneMatch(p -> "DRAFT".equals(p.decision()))
        && !state.shifts.isEmpty()) {
      var shift = state.shifts.values().stream().filter(s -> s.end().isAfter(Instant.now())).findFirst().orElse(null);
      if (shift != null) {
        store.write(hub(), "DISPATCHER_WEB", h -> {
          h.orders.values().stream()
              .filter(o -> (o.status() == vn.edu.tdtu.minervanexus.common.OrderStatus.READY_TO_DISPATCH
                  || o.status() == vn.edu.tdtu.minervanexus.common.OrderStatus.READY_FOR_REDELIVERY)
                  && o.shiftId() == null && shift.area().equals(o.area()))
              .forEach(o -> h.membership.put(o.id(), shift.id()));
          return new DispatchPlan(h, Instant.now(), "DISPATCHER_WEB").propose(shift.id());
        });
        state = store.read(hub());
      }
    }
    final var currentState = state;
    return currentState.proposals.values().stream()
        .filter(p -> "DRAFT".equals(p.decision()) && currentState.orders.containsKey(p.orderId()))
        .map(
            p ->
                new Suggestion(
                    p.id(),
                    p.orderId(),
                    currentState.tracking.get(p.orderId()),
                    currentState.orders.get(p.orderId()).area(),
                    p.suggested(),
                    currentState.drivers.get(p.suggested()).name(),
                    "",
                    p.score().total(),
                    p.score().reason(),
                    p.decision(),
                    p.score()))
        .toList();
  }

  public record WebDecision(String assignmentId, String driverId, String reason) {}

  @PostMapping("/dispatch/approve")
  public Map<String, Boolean> approve(
      @RequestBody WebDecision f, @RequestHeader("X-Actor-Id") String actor) {
    decide(f.assignmentId(), "approve", new Decision(f.driverId(), f.reason()), actor);
    return Map.of("success", true);
  }

  @PostMapping("/dispatch/reject")
  public Map<String, Boolean> reject(
      @RequestBody WebDecision f, @RequestHeader("X-Actor-Id") String actor) {
    decide(
        f.assignmentId(),
        "decline",
        new Decision(null, filled(f.reason()) ? f.reason() : "Hub bỏ đề xuất"),
        actor);
    return Map.of("success", true);
  }

  @PostMapping("/dispatch/proposals/{key}/{decision}")
  public Proposal decide(
      @PathVariable String key,
      @PathVariable String decision,
      @RequestBody Decision f,
      @RequestHeader("X-Actor-Id") String actor) {
    require(Set.of("approve", "decline").contains(decision), "Quyết định không hợp lệ");
    return store.write(
        hub(),
        actor,
        h -> board(h, actor).decide(key, f.driverId(), f.reason(), decision.equals("approve")));
  }

  @GetMapping("/me/orders")
  public List<Order> mine(@RequestHeader("X-Actor-Id") String actor) {
    return store.read(hub()).orders.values().stream()
        .filter(o -> actor.equals(o.driverId()))
        .toList();
  }

  @PostMapping("/me/orders/{id}/{action}")
  public void respond(
      @PathVariable String id,
      @PathVariable String action,
      @RequestBody Decision f,
      @RequestHeader("X-Actor-Id") String actor) {
    store.write(
        hub(),
        actor,
        h -> {
          new DispatchPlan(h, Instant.now(), actor).respond(id, action, f.reason());
          return null;
        });
  }
}
