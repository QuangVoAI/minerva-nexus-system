// Minerva Nexus development bootstrap. Run only with a local environment URI:
// mongosh "$MONGODB_URI" --file docs/mongodb/bootstrap.js
// The script intentionally contains no credential or cluster address.

const dbName = "minerva_nexus";
const target = db.getSiblingDB(dbName);

[
  "users", "hubs", "service_areas", "drivers", "delivery_shifts",
  "delivery_orders", "assignments", "sla_rules", "audit_logs", "counters"
].forEach((collection) => {
  if (!target.getCollectionNames().includes(collection)) target.createCollection(collection);
});

target.users.createIndex({ username: 1 }, { unique: true });
target.hubs.createIndex({ code: 1 }, { unique: true });
target.service_areas.createIndex({ hubId: 1, code: 1 }, { unique: true });
target.drivers.createIndex({ hubId: 1, code: 1 }, { unique: true });
target.delivery_shifts.createIndex({ hubId: 1, shiftDate: 1, code: 1 }, { unique: true });
target.delivery_orders.createIndex({ trackingCode: 1 }, { unique: true });
target.delivery_orders.createIndex({ hubId: 1, status: 1, slaDeadline: 1 });
target.assignments.createIndex({ orderId: 1, decisionStatus: 1 });
target.audit_logs.createIndex({ entityType: 1, entityId: 1, createdAt: -1 });

target.sla_rules.updateOne(
  { ruleVersion: "SLA-RULE-v1" },
  {
    $setOnInsert: {
      ruleVersion: "SLA-RULE-v1",
      highRiskMinutes: 60,
      atRiskMinutes: 120,
      description: "MVP rule configuration; no predictive probability or ML.",
      active: true,
      createdAt: new Date()
    }
  },
  { upsert: true }
);

[
  "users", "hubs", "service_areas", "drivers", "delivery_shifts"
].forEach((name) => target.counters.updateOne({ _id: name }, { $setOnInsert: { sequence: 0 } }, { upsert: true }));

print(`Minerva Nexus bootstrap completed for ${dbName}.`);
