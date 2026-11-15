package vn.edu.tdtu.minervanexus.service;

import java.time.*;
import java.util.*;
import vn.edu.tdtu.minervanexus.common.OrderStatus;
import vn.edu.tdtu.minervanexus.common.ServiceLevel;
import vn.edu.tdtu.minervanexus.document.DispatchManifest;
import vn.edu.tdtu.minervanexus.document.DispatchManifest.*;

public final class DispatchRules {
  private DispatchRules() {}

  public static final Set<OrderStatus> ACTIVE =
      Set.of(OrderStatus.ASSIGNED, OrderStatus.DRIVER_ACCEPTED, OrderStatus.IN_TRANSIT);
  public static final Set<OrderStatus> QUEUED =
      Set.of(OrderStatus.READY_TO_DISPATCH, OrderStatus.READY_FOR_REDELIVERY);
  public static final Comparator<Order> PRIORITY =
      Comparator.comparingInt((Order o) -> o.service() == ServiceLevel.STANDARD ? 1 : 0)
          .thenComparing(Order::deadline, Comparator.nullsLast(Comparator.naturalOrder()))
          .thenComparing(Order::id);

  public static int load(DispatchManifest hub, String shift, String driver) {
    return (int)
        hub.orders.values().stream()
            .filter(
                o ->
                    ACTIVE.contains(o.status())
                        && shift.equals(o.shiftId())
                        && driver.equals(o.driverId()))
            .count();
  }

  public static String exclusion(Driver d, Shift s, Order o, Instant now, int load) {
    if (o.service() == null || o.deadline() == null || o.area() == null) return "Chưa đủ dữ liệu";
    if (!d.active()) return "Tài xế tạm nghỉ";
    if (!Boolean.TRUE.equals(s.attendance().get(d.id()))) return "Chưa điểm danh có mặt";
    if (!s.area().equals(o.area()) || !d.area().equals(o.area())) return "Sai khu vực";
    if (load >= Math.min(15, d.capacity())) return "Đã đủ tải";
    if (!d.services().contains(o.service())) return "Không hỗ trợ dịch vụ";
    Instant earliest = now.isAfter(s.start()) ? now : s.start();
    Instant finish = earliest.plus(Duration.ofMinutes(20));
    if (finish.isAfter(s.end()) || finish.isAfter(o.deadline()))
      return "Thiếu thời gian cho SLA/ca";
    return null;
  }

  public static Score score(Driver d, Order o, Instant now, int load) {
    int cap = Math.min(d.capacity(), 15);
    int capacity = Math.round(25f * (cap - load) / cap);
    long minutes = Duration.between(now, o.deadline()).toMinutes();
    int sla =
        minutes < 60 || (o.service() != ServiceLevel.STANDARD && minutes < 120)
            ? 20
            : minutes < 120 ? 10 : 0;
    int balance = Math.round(10f * (15 - load) / 15);
    return new Score(
        45,
        capacity,
        sla,
        balance,
        45 + capacity + sla + balance,
        "Đúng vùng "
            + o.area()
            + " · hỗ trợ "
            + o.service()
            + " · tải "
            + load
            + "/"
            + cap
            + " · SLA còn "
            + minutes
            + " phút");
  }
}
