package vn.edu.tdtu.minervanexus.repository;

import java.time.ZoneId;
import java.util.*;
import org.bson.Document;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.*;
import org.springframework.stereotype.Repository;
import vn.edu.tdtu.minervanexus.document.DispatchManifest;
import vn.edu.tdtu.minervanexus.document.DispatchManifest.*;

@Repository
public class DispatchRepository {
  private final MongoTemplate mongo;

  public DispatchRepository(MongoTemplate mongo) {
    this.mongo = mongo;
  }

  public DispatchManifest load(String hub) {
    var state = new DispatchManifest();
    state.id = hub;
    var inHub = Query.query(Criteria.where("hubId").is(hub));
    for (var driver : mongo.find(inHub, Driver.class, "drivers"))
      state.drivers.put(driver.id(), driver);
    for (var data : mongo.find(inHub, Document.class, "delivery_shifts")) {
      var shift = mongo.getConverter().read(Shift.class, data);
      state.shifts.put(shift.id(), shift);
      for (var id : data.getList("orderIds", String.class, List.of()))
        state.membership.put(id, shift.id());
    }
    for (var p : mongo.find(inHub, Proposal.class, "assignments")) state.proposals.put(p.id(), p);
    var logs =
        Query.query(Criteria.where("hubId").is(hub).and("module").is("M2"))
            .with(Sort.by("sequence"));
    state.events.addAll(mongo.find(logs, Event.class, "audit_logs"));
    return state;
  }

  // Snapshot encoded documents before mutation, including nested attendance, to update only changed
  // rows.
  public Map<String, Map<String, Document>> snapshot(DispatchManifest state) {
    Map<String, Map<String, Document>> tables = new LinkedHashMap<>();
    Map<String, Document> drivers = new HashMap<>(),
        shifts = new HashMap<>(),
        assignments = new HashMap<>();
    tables.put("drivers", drivers);
    tables.put("delivery_shifts", shifts);
    tables.put("assignments", assignments);
    for (var d : state.drivers.values())
      drivers.put(d.id(), encode(d, state.id).append("code", d.id()));
    for (var s : state.shifts.values()) {
      var orderIds =
          state.membership.entrySet().stream()
              .filter(e -> s.id().equals(e.getValue()))
              .map(Map.Entry::getKey)
              .sorted()
              .toList();
      shifts.put(
          s.id(),
          encode(s, state.id)
              .append("code", s.id())
              .append("orderIds", orderIds)
              .append(
                  "shiftDate",
                  s.start().atZone(ZoneId.of("Asia/Ho_Chi_Minh")).toLocalDate().toString()));
    }
    for (var p : state.proposals.values())
      assignments.put(p.id(), encode(p, state.id).append("decisionStatus", p.decision()));
    return tables;
  }

  private Document encode(Object row, String hub) {
    var doc = new Document();
    mongo.getConverter().write(row, doc);
    return doc.append("hubId", hub);
  }

  public void persist(
      DispatchManifest state, Map<String, Map<String, Document>> before, int oldEvents) {
    // All M2 writers for this hub contend on one counter inside the MongoDB transaction.
    mongo.upsert(
        Query.query(Criteria.where("_id").is("dispatch:" + state.id)),
        new Update().inc("revision", 1),
        "counters");
    snapshot(state)
        .forEach(
            (name, rows) -> {
              var old = before.get(name);
              rows.forEach(
                  (id, doc) -> {
                    if (!doc.equals(old.get(id))) mongo.save(doc, name);
                  });
              for (String id : old.keySet())
                if (!rows.containsKey(id))
                  mongo.remove(
                      Query.query(Criteria.where("_id").is(id).and("hubId").is(state.id)), name);
            });
    for (int n = oldEvents; n < state.events.size(); n++) {
      Event event = state.events.get(n);
      mongo.insert(
          encode(event, state.id)
              .append("module", "M2")
              .append("sequence", n)
              .append("entityType", "DISPATCH")
              .append("entityId", event.entity())
              .append("createdAt", Date.from(event.time())),
          "audit_logs");
    }
  }
}
