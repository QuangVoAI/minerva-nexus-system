package vn.edu.tdtu.minervanexus.service;

import java.time.*;
import java.util.*;
import vn.edu.tdtu.minervanexus.common.OrderStatus;
import vn.edu.tdtu.minervanexus.common.ServiceLevel;
import vn.edu.tdtu.minervanexus.document.DispatchManifest;
import vn.edu.tdtu.minervanexus.document.DispatchManifest.*;

public class DispatchFixture {
  public static DispatchManifest create(Instant now) {
    DispatchManifest h = new DispatchManifest();
    h.id = "HUB01";
    DispatchPlan b = new DispatchPlan(h, now, "demo");
    String[] names = {"Trần Minh Anh", "Nguyễn Hải Nam", "Lê Gia Hân", "Phạm Nhật Minh"};
    for (int i = 0; i < names.length; i++)
      b.driver(
          new Driver(
              "TX0" + (i + 1),
              names[i],
              i == 3 ? "Q4" : "Q7",
              15,
              true,
              i == 2 ? Set.of(ServiceLevel.STANDARD) : EnumSet.allOf(ServiceLevel.class)));
    b.shift(
        new Shift(
            "CA01",
            "Ca giao Sài Gòn",
            "Q7",
            now.minusSeconds(600),
            now.plusSeconds(8 * 3600),
            new LinkedHashMap<>()));
    for (String key : h.drivers.keySet()) b.attendance("CA01", key, !key.equals("TX03"));
    for (int i = 0; i < 8; i++) {
      var services = List.of(ServiceLevel.EXPRESS, ServiceLevel.SAME_DAY, ServiceLevel.STANDARD);
      Order o =
          new Order(
              "MN-" + (24081 + i),
              "Q7",
              services.get(i % 3),
              now.plusSeconds((40 + i * 25) * 60L),
              "CA01",
              null,
              OrderStatus.READY_TO_DISPATCH);
      h.orders.put(o.id(), o);
    }
    return h;
  }
}
