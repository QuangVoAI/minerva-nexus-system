package vn.edu.tdtu.minervanexus.document;

import java.time.Instant;
import java.util.*;
import vn.edu.tdtu.minervanexus.common.OrderStatus;
import vn.edu.tdtu.minervanexus.common.ServiceLevel;

public class DispatchManifest {
  public String id;
  public Map<String, Driver> drivers = new LinkedHashMap<>();
  public Map<String, Shift> shifts = new LinkedHashMap<>();
  public Map<String, String> membership = new LinkedHashMap<>();

  @org.springframework.data.annotation.Transient
  public Map<String, Order> orders = new LinkedHashMap<>();

  @org.springframework.data.annotation.Transient
  public Map<String, String> tracking = new LinkedHashMap<>();

  public Map<String, Proposal> proposals = new LinkedHashMap<>();
  public List<Event> events = new ArrayList<>();

  public record Driver(
      String id,
      String name,
      String area,
      int capacity,
      boolean active,
      Set<ServiceLevel> services) {}

  public record Shift(
      String id,
      String name,
      String area,
      Instant start,
      Instant end,
      Map<String, Boolean> attendance) {}

  public record Order(
      String id,
      String area,
      ServiceLevel service,
      Instant deadline,
      String shiftId,
      String driverId,
      OrderStatus status) {
    public Order move(String shift, String driver, OrderStatus state) {
      return new Order(id, area, service, deadline, shift, driver, state);
    }
  }

  public record Score(int area, int capacity, int sla, int balance, int total, String reason) {}

  public record Proposal(
      String id,
      String orderId,
      String shiftId,
      String suggested,
      Score score,
      String decision,
      String chosen,
      Instant created) {
    public Proposal decide(String outcome, String driver) {
      return new Proposal(id, orderId, shiftId, suggested, score, outcome, driver, created);
    }
  }

  public record Event(Instant time, String actor, String action, String entity, String detail) {}
}
