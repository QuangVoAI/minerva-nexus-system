package vn.edu.tdtu.minervanexus.service;

import vn.edu.tdtu.minervanexus.model.Assignment;
import vn.edu.tdtu.minervanexus.model.DeliveryOrder;
import vn.edu.tdtu.minervanexus.model.RiskPrediction;

import java.util.List;

public interface IDispatchEngine {
    RiskPrediction predictOrderRisk(DeliveryOrder order);

    List<Assignment> generateDispatchSuggestions(String shiftId);

    boolean approveAssignment(String assignmentId, String dispatcherId);

    boolean rejectAssignment(String assignmentId);

    List<Assignment> getPendingAssignments();
}
