package vn.edu.tdtu.minervanexus.service;

import java.util.*;
import java.util.function.Function;
import org.springframework.dao.*;
import org.springframework.data.mongodb.MongoTransactionManager;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.*;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.support.TransactionTemplate;
import org.springframework.web.server.ResponseStatusException;
import vn.edu.tdtu.minervanexus.common.OrderStatus;
import vn.edu.tdtu.minervanexus.document.*;
import vn.edu.tdtu.minervanexus.document.DispatchManifest.*;
import vn.edu.tdtu.minervanexus.repository.*;

@Service
public class DispatchStore {
  private final MongoTemplate mongo;
  private final DispatchRepository manifests;
  private final DeliveryOrderRepository orders;
  private final OrderService orderService;
  private final TransactionTemplate transaction;

  public DispatchStore(
      MongoTemplate mongo,
      DispatchRepository manifests,
      DeliveryOrderRepository orders,
      OrderService orderService) {
    this.mongo = mongo;
    this.manifests = manifests;
    this.orders = orders;
    this.orderService = orderService;
    this.transaction =
        new TransactionTemplate(new MongoTransactionManager(mongo.getMongoDatabaseFactory()));
  }

  public DispatchManifest read(String hubId) {
    DispatchManifest manifest = manifests.load(hubId);
    var inHub = Query.query(Criteria.where("hubId").is(hubId));
    for (DeliveryOrderDocument order : mongo.find(inHub, DeliveryOrderDocument.class)) {
      var ref = order.getCurrentAssignment();
      String shift = ref == null ? manifest.membership.get(order.getId()) : ref.shiftId;
      manifest.orders.put(
          order.getId(),
          new Order(
              order.getId(),
              order.getAreaId(),
              order.getServiceLevel(),
              order.getSlaDeadline(),
              shift,
              ref == null ? null : ref.driverId,
              order.getStatus()));
      manifest.tracking.put(order.getId(), order.getTrackingCode());
    }
    return manifest;
  }

  // One transaction couples the capacity check, versioned manifest, M1 timeline and actual
  // assignment.
  public <T> T write(String hubId, String actor, Function<DispatchManifest, T> command) {
    try {
      return transaction.execute(
          tx -> {
            var manifest = read(hubId);
            var before = new HashMap<>(manifest.orders);
            var previousRows = manifests.snapshot(manifest);
            int previousEvents = manifest.events.size();
            T result = command.apply(manifest);
            manifests.persist(manifest, previousRows, previousEvents);
            for (var order : manifest.orders.values()) {
              if (before.get(order.id()).status() != order.status())
                persistTransition(manifest, order, actor);
            }
            return result;
          });
    } catch (OptimisticLockingFailureException | DuplicateKeyException conflict) {
      throw new ResponseStatusException(
          HttpStatus.CONFLICT, "Ca đã thay đổi, hãy tải lại.", conflict);
    } catch (RuntimeException error) {
      for (Throwable t = error; t != null; t = t.getCause()) {
        if (t instanceof com.mongodb.MongoException m
            && m.hasErrorLabel("TransientTransactionError"))
          throw new ResponseStatusException(
              HttpStatus.CONFLICT, "Có cập nhật đồng thời, hãy tải lại.", error);
      }
      throw error;
    }
  }

  private void persistTransition(DispatchManifest manifest, Order order, String actor) {
    var event = manifest.events.getLast();
    var live = orderService.transition(order.id(), order.status(), actor, event.detail());
    if (order.status() == OrderStatus.ASSIGNED) {
      Proposal decision =
          manifest.proposals.values().stream()
              .filter(
                  p ->
                      p.orderId().equals(order.id())
                          && "APPROVED".equals(p.decision())
                          && order.driverId().equals(p.chosen()))
              .max(Comparator.comparing(Proposal::created))
              .orElseThrow();
      var ref = new DeliveryOrderDocument.AssignmentRef();
      ref.assignmentId = decision.id();
      ref.shiftId = order.shiftId();
      ref.driverId = order.driverId();
      ref.approvedBy = actor;
      ref.assignedAt = event.time();
      live.setCurrentAssignment(ref);
    } else if (order.status() == OrderStatus.READY_TO_DISPATCH) {
      live.setCurrentAssignment(null);
    }
    orders.save(live);
  }
}
