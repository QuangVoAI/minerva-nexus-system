package vn.edu.tdtu.minervanexus;

import static org.junit.jupiter.api.Assertions.*;
import static vn.edu.tdtu.minervanexus.service.DispatchRules.*;

import java.time.*;
import java.util.*;
import org.junit.jupiter.api.Test;
import vn.edu.tdtu.minervanexus.common.OrderStatus;
import vn.edu.tdtu.minervanexus.common.ServiceLevel;
import vn.edu.tdtu.minervanexus.document.DispatchManifest;
import vn.edu.tdtu.minervanexus.document.DispatchManifest.*;
import vn.edu.tdtu.minervanexus.service.*;

class DispatchRulesTest {
  Instant now = Instant.parse("2026-11-15T01:00:00Z");
  DispatchManifest h = DispatchFixture.create(now);
  DispatchPlan hub = new DispatchPlan(h, now, "hub");
  Shift s = h.shifts.get("CA01");
  Driver d = h.drivers.get("TX01");
  Order o = h.orders.get("MN-24081");

  @Test
  void wrongArea() {
    assertEquals("Sai khu vực", exclusion(h.drivers.get("TX04"), s, o, now, 0));
  }

  @Test
  void absent() {
    assertEquals("Chưa điểm danh có mặt", exclusion(h.drivers.get("TX03"), s, o, now, 0));
  }

  @Test
  void inactive() {
    hub.retire(d.id());
    assertEquals("Tài xế tạm nghỉ", exclusion(h.drivers.get(d.id()), s, o, now, 0));
  }

  @Test
  void lastSlotAndHardLimit() {
    Driver oversized = new Driver(d.id(), d.name(), d.area(), 35, true, d.services());
    assertNull(exclusion(oversized, s, o, now, 14));
    assertEquals("Đã đủ tải", exclusion(oversized, s, o, now, 15));
  }

  @Test
  void smallerCapacity() {
    Driver small = new Driver(d.id(), d.name(), d.area(), 4, true, d.services());
    assertNull(exclusion(small, s, o, now, 3));
    assertNotNull(exclusion(small, s, o, now, 4));
  }

  @Test
  void activeLoadOnly() {
    for (OrderStatus state : OrderStatus.values())
      h.orders.put(
          state.name(),
          new Order(
              state.name(), "Q7", ServiceLevel.STANDARD, o.deadline(), s.id(), d.id(), state));
    assertEquals(3, load(h, s.id(), d.id()));
  }

  @Test
  void urgentExpressFirstAndExplained() {
    var batch = hub.propose(s.id());
    assertEquals(o.id(), batch.getFirst().orderId());
    var p = batch.getFirst().proposal();
    assertEquals(20, p.score().sla());
    assertEquals(100, p.score().total());
    assertEquals(OrderStatus.READY_TO_DISPATCH, h.orders.get(o.id()).status());
  }

  @Test
  void incompatibleServiceAndDeadline() {
    hub.attendance(s.id(), "TX03", true);
    assertEquals("Không hỗ trợ dịch vụ", exclusion(h.drivers.get("TX03"), s, o, now, 0));
    assertEquals(
        "Thiếu thời gian cho SLA/ca", exclusion(d, s, o, o.deadline().minusSeconds(60), 0));
  }

  @Test
  void reserveLastSlotAcrossBatch() {
    hub.attendance(s.id(), "TX02", false);
    for (int i = 0; i < 14; i++)
      h.orders.put("L" + i, o.move(s.id(), d.id(), OrderStatus.IN_TRANSIT));
    var batch = hub.propose(s.id());
    assertEquals(1, batch.stream().filter(r -> r.proposal() != null).count());
    hub.decide(batch.getFirst().proposal().id(), d.id(), "", true);
    assertEquals(15, load(h, s.id(), d.id()));
  }

  @Test
  void approvalChecksNewAttendance() {
    var p = hub.propose(s.id()).getFirst().proposal();
    hub.attendance(s.id(), p.suggested(), false);
    assertThrows(IllegalArgumentException.class, () -> hub.decide(p.id(), null, "", true));
  }

  @Test
  void rejectionRequeuesAndRequiresFreshApproval() {
    var p = hub.propose(s.id()).getFirst().proposal();
    hub.decide(p.id(), null, "", true);
    DispatchPlan driver = new DispatchPlan(h, now, p.suggested());
    assertThrows(IllegalArgumentException.class, () -> driver.respond(o.id(), "reject", " "));
    driver.respond(o.id(), "reject", "Sự cố xe");
    assertEquals(OrderStatus.READY_TO_DISPATCH, h.orders.get(o.id()).status());
    assertEquals(0, load(h, s.id(), p.suggested()));
    assertEquals("APPROVED", h.proposals.get(p.id()).decision());
    var revised = hub.propose(s.id()).getFirst().proposal();
    assertThrows(IllegalArgumentException.class, () -> hub.decide(revised.id(), "TX02", "", true));
    hub.decide(revised.id(), "TX02", "Thay xe", true);
    assertEquals("TX02", h.orders.get(o.id()).driverId());
    assertTrue(h.events.stream().anyMatch(e -> e.detail().contains("Sự cố xe")));
  }

  @Test
  void overlappingRegistration() {
    hub.shift(new Shift("S2", "Ca trùng", "Q7", now, s.end(), new HashMap<>()));
    assertThrows(IllegalArgumentException.class, () -> hub.attendance("S2", d.id(), true));
  }

  @Test
  void staleProposalCannotApproveTwice() {
    var p = hub.propose(s.id()).getFirst().proposal();
    hub.decide(p.id(), null, "", true);
    assertThrows(IllegalArgumentException.class, () -> hub.decide(p.id(), null, "", true));
  }
}
