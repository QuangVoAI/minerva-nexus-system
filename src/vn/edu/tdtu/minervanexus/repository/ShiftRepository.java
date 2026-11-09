package vn.edu.tdtu.minervanexus.repository;

import vn.edu.tdtu.minervanexus.model.DeliveryShift;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

public class ShiftRepository {
    private final Map<String, DeliveryShift> shiftMap = new ConcurrentHashMap<>();

    public void save(DeliveryShift shift) {
        shiftMap.put(shift.getShiftId(), shift);
    }

    public Optional<DeliveryShift> findById(String shiftId) {
        return Optional.ofNullable(shiftMap.get(shiftId));
    }

    public List<DeliveryShift> findAll() {
        return new ArrayList<>(shiftMap.values());
    }
}

