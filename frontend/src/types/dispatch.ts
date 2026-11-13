export interface DispatchSuggestion {
  assignmentId: string;
  orderId: string;
  trackingCode: string;
  orderArea: string;
  driverId: string;
  driverName: string;
  driverPhone: string;
  suggestedScore: number;
  matchReason: string;
  decisionStatus: string;
}

export interface DispatchApproveResponse {
  success: boolean;
  message?: string;
}
