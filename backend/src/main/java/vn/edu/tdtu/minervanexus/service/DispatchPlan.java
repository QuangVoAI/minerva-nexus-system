package vn.edu.tdtu.minervanexus.service;

import static vn.edu.tdtu.minervanexus.service.DispatchRules.*;

import java.time.*;
import java.util.*;
import vn.edu.tdtu.minervanexus.common.OrderStatus;
import vn.edu.tdtu.minervanexus.document.DispatchManifest;
import vn.edu.tdtu.minervanexus.document.DispatchManifest.*;

public class DispatchPlan {
  private final DispatchManifest h;
  private final Instant now;
  private final String actor;

  public DispatchPlan(DispatchManifest h, Instant now, String actor) {
    this.h = h;
    this.now = now;
    this.actor = actor;
  }

  public static void require(boolean ok, String message) {
    if (!ok) throw new IllegalArgumentException(message);
  }

  public static boolean filled(String s) {
    return s != null && !s.isBlank();
  }

  public static String id(String prefix) {
    return prefix + "-" + UUID.randomUUID();
  }

  public static <T> T get(Map<String, T> map, String key) {
    T value = map.get(key);
    require(value != null, "Không tìm thấy mã " + key);
    return value;
  }

  public void log(String action, String entity, String detail) {
    h.events.add(new Event(now, actor, action, entity, detail));
  }

  public Driver driver(Driver d) {
    require(
        filled(d.name())
            && filled(d.area())
            && d.capacity() > 0
            && d.capacity() <= 15
            && d.services() != null
            && !d.services().isEmpty()
            && d.services().stream().allMatch(Objects::nonNull),
        "Kiểm tra tên, vùng, dịch vụ và sức chứa 1–15");
    for (Shift s : h.shifts.values())
      require(load(h, s.id(), d.id()) <= d.capacity(), "Sức chứa thấp hơn tải hiện tại");
    h.drivers.put(d.id(), d);
    log("Hồ sơ tài xế", d.id(), d.name() + " · " + d.area());
    return d;
  }

  public void retire(String key) {
    Driver d = get(h.drivers, key);
    driver(new Driver(key, d.name(), d.area(), d.capacity(), false, d.services()));
    log("Tạm khóa tài xế", key, d.name());
  }

  public Shift shift(Shift s) {
    require(
        filled(s.name())
            && filled(s.area())
            && s.start() != null
            && s.end() != null
            && s.end().isAfter(s.start()),
        "Khung giờ hoặc khu vực không hợp lệ");
    Shift old = h.shifts.get(s.id());
    if (old != null && h.orders.values().stream().anyMatch(o -> s.id().equals(o.shiftId())))
      require(
          s.area().equals(old.area()) && s.start().equals(old.start()) && s.end().equals(old.end()),
          "Ca đang có đơn, chỉ được đổi tên");
    for (String driver : s.attendance().keySet()) checkOverlap(s, driver);
    h.shifts.put(s.id(), s);
    log("Lưu ca giao", s.id(), s.name());
    return s;
  }

  private void checkOverlap(Shift s, String driver) {
    boolean overlap =
        h.shifts.values().stream()
            .anyMatch(
                other ->
                    !other.id().equals(s.id())
                        && other.attendance().containsKey(driver)
                        && other.start().isBefore(s.end())
                        && s.start().isBefore(other.end()));
    require(!overlap, "Tài xế đã đăng ký ca trùng giờ");
  }

  public void deleteShift(String key) {
    get(h.shifts, key);
    require(
        h.orders.values().stream().noneMatch(o -> key.equals(o.shiftId())),
        "Hãy bỏ đơn khỏi ca trước");
    h.shifts.remove(key);
    log("Xóa ca", key, "Ca trống");
  }

  public void attendance(String shift, String driver, Boolean present) {
    Shift s = get(h.shifts, shift);
    Driver d = get(h.drivers, driver);
    if (!Boolean.TRUE.equals(present))
      require(load(h, shift, driver) == 0, "Tài xế đang có đơn trong ca");
    if (present == null) s.attendance().remove(driver);
    else {
      require(d.active(), "Tài xế tạm khóa");
      checkOverlap(s, driver);
      s.attendance().put(driver, present);
    }
    log(
        "Điểm danh",
        shift,
        driver + " · " + (present == null ? "Bỏ đăng ký" : present ? "Có mặt" : "Vắng"));
  }

  public void move(String order, String shift) {
    Order o = get(h.orders, order);
    require(QUEUED.contains(o.status()), "Đơn đã phân công");
    if (shift != null) {
      Shift s = get(h.shifts, shift);
      require(s.area().equals(o.area()) && s.end().isAfter(now), "Ca đã kết thúc hoặc sai vùng");
    }
    invalidate(order);
    if (shift == null) h.membership.remove(order);
    else h.membership.put(order, shift);
    h.orders.put(order, o.move(shift, null, o.status()));
    log("Cập nhật ca của đơn", order, shift == null ? "Bỏ khỏi ca" : shift);
  }

  private void invalidate(String order) {
    h.proposals.replaceAll(
        (k, p) ->
            p.orderId().equals(order) && p.decision().equals("DRAFT")
                ? p.decide("SUPERSEDED", null)
                : p);
  }

  public record Result(String orderId, Proposal proposal, String reason) {}

  public List<Result> propose(String shift) {
    Shift s = get(h.shifts, shift);
    require(s.end().isAfter(now), "Ca đã kết thúc");
    List<Order> queue =
        h.orders.values().stream()
            .filter(o -> shift.equals(o.shiftId()) && QUEUED.contains(o.status()))
            .sorted(PRIORITY)
            .toList();
    Map<String, Integer> reserved = new HashMap<>();
    List<Result> result = new ArrayList<>();
    for (Order o : queue) {
      invalidate(o.id());
      Driver best = null;
      Score bestScore = null;
      Set<String> excluded = new LinkedHashSet<>();
      for (Driver d :
          h.drivers.values().stream().sorted(Comparator.comparing(Driver::id)).toList()) {
        int used = load(h, shift, d.id()) + reserved.getOrDefault(d.id(), 0);
        String why = exclusion(d, s, o, now, used);
        if (why != null) {
          excluded.add(why);
          continue;
        }
        Score score = score(d, o, now, used);
        if (bestScore == null || score.total() > bestScore.total()) {
          best = d;
          bestScore = score;
        }
      }
      if (best == null) {
        String why = excluded.isEmpty() ? "Chưa có tài xế" : String.join(" · ", excluded);
        result.add(new Result(o.id(), null, why));
        log("Chưa thể phân công", o.id(), why);
        continue;
      }
      Proposal p = new Proposal(id("P"), o.id(), shift, best.id(), bestScore, "DRAFT", null, now);
      h.proposals.put(p.id(), p);
      reserved.merge(best.id(), 1, Integer::sum);
      result.add(new Result(o.id(), p, bestScore.reason()));
      log("Đề xuất nháp", o.id(), best.name() + " · " + bestScore.reason());
    }
    return result;
  }

  public Proposal decide(String key, String chosen, String reason, boolean approve) {
    Proposal p = get(h.proposals, key);
    require("DRAFT".equals(p.decision()), "Đề xuất đã được xử lý");
    Order o = get(h.orders, p.orderId());
    require(QUEUED.contains(o.status()) && p.shiftId().equals(o.shiftId()), "Đơn đã thay đổi");
    String driver = filled(chosen) ? chosen : p.suggested();
    if (!approve || !driver.equals(p.suggested()))
      require(filled(reason), "Cần lý do điều chỉnh/từ chối");
    if (approve) {
      Driver d = get(h.drivers, driver);
      String why = exclusion(d, get(h.shifts, p.shiftId()), o, now, load(h, p.shiftId(), driver));
      require(why == null, why);
      h.orders.put(o.id(), o.move(p.shiftId(), driver, OrderStatus.ASSIGNED));
    }
    Proposal decision = p.decide(approve ? "APPROVED" : "DECLINED", approve ? driver : null);
    h.proposals.put(key, decision);
    log(
        approve ? "Duyệt phân công" : "Bỏ đề xuất",
        o.id(),
        p.suggested() + " → " + (approve ? driver : "—") + " · " + Objects.toString(reason, ""));
    return decision;
  }

  public void respond(String order, String action, String reason) {
    Order o = get(h.orders, order);
    require(actor.equals(o.driverId()), "Đơn không thuộc tài xế");
    OrderStatus next =
        switch (action) {
          case "accept", "reject" -> {
            require(o.status() == OrderStatus.ASSIGNED, "Đơn không chờ xác nhận");
            yield action.equals("accept")
                ? OrderStatus.DRIVER_ACCEPTED
                : OrderStatus.READY_TO_DISPATCH;
          }
          default -> throw new IllegalArgumentException("Thao tác không hợp lệ");
        };
    if (next == OrderStatus.READY_TO_DISPATCH) require(filled(reason), "Cần lý do từ chối");
    h.orders.put(
        order, o.move(o.shiftId(), next == OrderStatus.READY_TO_DISPATCH ? null : actor, next));
    log(
        next == OrderStatus.READY_TO_DISPATCH ? "Tài xế từ chối" : "Cập nhật giao hàng",
        order,
        o.status() + " → " + next + " · " + Objects.toString(reason, ""));
  }
}
