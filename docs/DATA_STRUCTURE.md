# Minerva Nexus data structure

The production-style MVP uses MongoDB database `minerva_nexus`.

## Collections

`users`, `hubs`, `service_areas`, `drivers`, `delivery_shifts`, `delivery_orders`, `assignments`, `sla_rules`, `audit_logs`, and `counters`.

## Delivery order state machine

`PENDING → READY_TO_DISPATCH → ASSIGNED → DRIVER_ACCEPTED → IN_TRANSIT → DELIVERED`.

After `FAILED`, the order becomes `READY_FOR_REDELIVERY` only when `failureCount < 3`. At the third valid failure it becomes `RETURN_PENDING`; it becomes `RETURNED` only after Hub confirmation.

## Rule-based dispatch

The system does not use AI, ML, or predictive probability. It applies the configured business rules in a fixed order: active status, shift attendance, matching service area, remaining shift capacity, service priority, SLA urgency, then active load as a tie breaker. When the implementation records component points for an eligible order-driver pair, those points are an explainable rule configuration—not a learning or heuristic model. A Hub operator approves or overrides every proposal.

## Atlas bootstrap

The Atlas database has been initialized with the listed collections, their core indexes, the `SLA-RULE-v1` configuration, and sequence counters. The reproducible, credential-free bootstrap script is [mongodb/bootstrap.js](mongodb/bootstrap.js). It must be run only against the intended development database.

## Secret handling

The database URI is supplied through `MONGODB_URI` in the local environment only. Never commit it to Git or add it to frontend files.
