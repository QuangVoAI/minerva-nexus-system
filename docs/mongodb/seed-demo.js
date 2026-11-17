// Development demo seed. Run after bootstrap.js with the same local MONGODB_URI.
const target = db.getSiblingDB('minerva_nexus');
const hubId = 'HUB01';
const now = new Date();
const end = new Date(now.getTime() + 8 * 60 * 60 * 1000);

target.drivers.updateOne({ _id: 'TX-001', hubId }, { $set: {
  _id: 'TX-001', id: 'TX-001', driverCode: 'TX-001', code: 'TX-001', hubId, name: 'Nguyễn Văn An', area: 'Q7',
  capacity: 15, active: true, services: ['STANDARD', 'EXPRESS', 'SAME_DAY']
}}, { upsert: true });
target.drivers.updateOne({ _id: 'TX-002', hubId }, { $set: {
  _id: 'TX-002', id: 'TX-002', driverCode: 'TX-002', code: 'TX-002', hubId, name: 'Trần Quốc Bình', area: 'Q7',
  capacity: 15, active: true, services: ['STANDARD', 'EXPRESS']
}}, { upsert: true });
target.delivery_shifts.updateOne({ _id: 'CA-SANG', hubId }, { $set: {
  _id: 'CA-SANG', id: 'CA-SANG', hubId, name: 'Ca sáng Hub Q7', area: 'Q7',
  start: now, end, attendance: { 'TX-001': true, 'TX-002': true }, orderIds: []
}}, { upsert: true });
print('Demo drivers and shift seeded for HUB01.');
