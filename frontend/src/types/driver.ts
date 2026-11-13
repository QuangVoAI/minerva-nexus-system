export interface Driver {
  driverId: string;
  name: string;
  phone: string;
  assignedAreaId: string;
  currentLoad: number;
  capacityPerShift: number;
  workloadPercent: number;
  active: boolean;
}
