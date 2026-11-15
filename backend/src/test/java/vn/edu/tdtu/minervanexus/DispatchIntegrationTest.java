package vn.edu.tdtu.minervanexus;

import static org.junit.jupiter.api.Assertions.*;

import java.time.Instant;
import java.util.*;
import java.util.concurrent.*;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.condition.EnabledIfEnvironmentVariable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.*;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.web.server.ResponseStatusException;
import vn.edu.tdtu.minervanexus.common.*;
import vn.edu.tdtu.minervanexus.document.*;
import vn.edu.tdtu.minervanexus.document.DispatchManifest.*;
import vn.edu.tdtu.minervanexus.service.*;

@SpringBootTest
@TestExecutionListeners(DependencyInjectionTestExecutionListener.class)
@EnabledIfEnvironmentVariable(named = "M2_TEST_MONGO", matches = ".+")
class DispatchIntegrationTest {
  static final String db = "m2_test_" + UUID.randomUUID().toString().replace("-", "");

  @DynamicPropertySource
  static void mongo(DynamicPropertyRegistry p) {
    p.add("spring.data.mongodb.uri", () -> System.getenv("M2_TEST_MONGO"));
    p.add("spring.data.mongodb.database", () -> db);
  }

  @Autowired MongoTemplate mongo;
  @Autowired DispatchStore store;

  @AfterEach
  void cleanup() {
    assertEquals(db, mongo.getDb().getName());
    mongo.getDb().drop();
  }

  @Test
  void twoConcurrentHubApprovalsOneSlotThenDriverRejects() throws Exception {
    String hub = "TEST";
    var now = Instant.now();
    var manifest = new DispatchManifest();
    manifest.id = hub;
    var plan = new DispatchPlan(manifest, now, "HUB");
    plan.driver(new Driver("TX", "Demo", "Q7", 15, true, Set.of(ServiceLevel.EXPRESS)));
    plan.shift(new Shift("CA", "Ca test", "Q7", now, now.plusSeconds(7200), new HashMap<>()));
    plan.attendance("CA", "TX", true);
    for (int i = 0; i < 2; i++) {
      var ready = createOrder(hub, now, OrderStatus.READY_TO_DISPATCH);
      manifest.membership.put(ready.getId(), "CA");
    }
    store.write(
        hub,
        "HUB",
        state -> {
          state.drivers.putAll(manifest.drivers);
          state.shifts.putAll(manifest.shifts);
          state.membership.putAll(manifest.membership);
          return null;
        });
    var drafts = store.write(hub, "HUB", h -> new DispatchPlan(h, now, "HUB").propose("CA"));
    for (int i = 0; i < 14; i++) createOrder(hub, now, OrderStatus.IN_TRANSIT);
    var gate = new CountDownLatch(1);
    try (var threads = Executors.newFixedThreadPool(2)) {
      var requests = new ArrayList<Future<Boolean>>();
      for (var draft : drafts)
        requests.add(
            threads.submit(
                () -> {
                  gate.await();
                  try {
                    store.write(
                        hub,
                        "HUB",
                        h ->
                            new DispatchPlan(h, now, "HUB")
                                .decide(draft.proposal().id(), "TX", "demo", true));
                    return true;
                  } catch (ResponseStatusException conflict) {
                    assertEquals(409, conflict.getStatusCode().value());
                    return false;
                  } catch (IllegalArgumentException full) {
                    assertEquals("Đã đủ tải", full.getMessage());
                    return false;
                  }
                }));
      gate.countDown();
      assertNotEquals(
          requests.get(0).get(20, TimeUnit.SECONDS), requests.get(1).get(20, TimeUnit.SECONDS));
    }
    var after = store.read(hub);
    assertEquals(15, DispatchRules.load(after, "CA", "TX"));
    var assigned =
        after.orders.values().stream()
            .filter(o -> o.status() == OrderStatus.ASSIGNED)
            .findFirst()
            .orElseThrow();
    store.write(
        hub,
        "TX",
        h -> {
          new DispatchPlan(h, Instant.now(), "TX").respond(assigned.id(), "reject", "Xe hỏng");
          return null;
        });
    var live = mongo.findById(assigned.id(), DeliveryOrderDocument.class);
    assertNotNull(live);
    assertEquals(OrderStatus.READY_TO_DISPATCH, live.getStatus());
    assertNull(live.getCurrentAssignment());
    assertTrue(live.getStatusHistory().getLast().note.contains("Xe hỏng"));
    assertEquals(14, DispatchRules.load(store.read(hub), "CA", "TX"));
  }

  private DeliveryOrderDocument createOrder(String hub, Instant now, OrderStatus status) {
    var o = new DeliveryOrderDocument();
    o.setHubId(hub);
    o.setTrackingCode(UUID.randomUUID().toString());
    o.setAreaId("Q7");
    o.setServiceLevel(ServiceLevel.EXPRESS);
    o.setSlaDeadline(now.plusSeconds(3600));
    o.setStatus(status);
    if (status == OrderStatus.IN_TRANSIT) {
      var ref = new DeliveryOrderDocument.AssignmentRef();
      ref.driverId = "TX";
      ref.shiftId = "CA";
      o.setCurrentAssignment(ref);
    }
    return mongo.insert(o);
  }
}
