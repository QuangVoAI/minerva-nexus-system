package vn.edu.tdtu.minervanexus.repository;

import vn.edu.tdtu.minervanexus.model.Assignment;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

public class AssignmentRepository {
    private final Map<String, Assignment> assignmentMap = new ConcurrentHashMap<>();

    public void save(Assignment assignment) {
        assignmentMap.put(assignment.getAssignmentId(), assignment);
    }

    public Optional<Assignment> findById(String assignmentId) {
        return Optional.ofNullable(assignmentMap.get(assignmentId));
    }

    public Optional<Assignment> findByOrderId(String orderId) {
        return assignmentMap.values().stream()
                .filter(a -> a.getOrderId().equals(orderId))
                .findFirst();
    }

    public List<Assignment> findAll() {
        return new ArrayList<>(assignmentMap.values());
    }

    public List<Assignment> findPendingAssignments() {
        return assignmentMap.values().stream()
                .filter(a -> "PENDING".equalsIgnoreCase(a.getDecisionStatus()))
                .collect(Collectors.toList());
    }
}
