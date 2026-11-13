export type OrderStatus =
  | 'PENDING'
  | 'READY_TO_DISPATCH'
  | 'ASSIGNED'
  | 'DRIVER_ACCEPTED'
  | 'IN_TRANSIT'
  | 'DELIVERED'
  | 'FAILED'
  | 'READY_FOR_REDELIVERY'
  | 'RETURN_PENDING'
  | 'RETURNED'
  | 'CANCELLED';

export type ServiceLevel = 'STANDARD' | 'EXPRESS' | 'SAME_DAY';

export type SlaRiskLevel = 'SAFE' | 'AT_RISK' | 'HIGH_RISK' | 'BREACHED' | 'UNKNOWN';

export type FailureReason =
  | 'CUSTOMER_UNREACHABLE'
  | 'CUSTOMER_RESCHEDULED'
  | 'WRONG_ADDRESS'
  | 'CUSTOMER_REFUSED'
  | 'FORCE_MAJEURE'
  | 'HUB_RECALL';

export interface DeliveryOrder {
  orderId: string;
  trackingCode: string;
  recipientName: string;
  recipientPhone: string;
  address: string;
  areaId: string;
  serviceLevel: ServiceLevel;
  serviceLevelDisplay: string;
  slaDeadline: string;
  codAmount: number;
  status: OrderStatus;
  statusDisplay: string;
  assignedDriverId: string | null;
  failureCount: number;
  riskLevel: SlaRiskLevel;
  riskExplanation: string;
  riskProbability: number;
}

export interface CreateOrderPayload {
  recipientName: string;
  phone: string;
  address: string;
  areaId: string;
  serviceLevel: ServiceLevel;
  codAmount: number;
}

export interface CreateOrderResponse {
  success: boolean;
  orderId: string;
  trackingCode: string;
}

export interface StatusHistoryItem {
  historyId: string;
  oldStatus: string | null;
  newStatus: string;
  actorId: string;
  reasonCode: string;
  note: string;
  time: string;
}

export interface DriverStatusUpdatePayload {
  orderId: string;
  action: 'TRANSIT' | 'DELIVERED' | 'FAILED';
  driverId?: string;
  reasonCode?: FailureReason | string;
  note?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
}
