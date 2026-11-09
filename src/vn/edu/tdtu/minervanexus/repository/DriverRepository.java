package vn.edu.tdtu.minervanexus.repository;

import vn.edu.tdtu.minervanexus.model.Driver;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

public class DriverRepository {
    private final Map<String, Driver> driverMap = new ConcurrentHashMap<>();

    public void save(Driver driver) {
        driverMap.put(driver.getDriverId(), driver);
    }

    public Optional<Driver> findById(String driverId) {
        return Optional.ofNullable(driverMap.get(driverId));
    }

    public List<Driver> findAll() {
        return new ArrayList<>(driverMap.values());
    }

    public List<Driver> findActiveDrivers() {
        return driverMap.values().stream()
                .filter(Driver::isActive)
                .collect(Collectors.toList());
    }

    public List<Driver> findByArea(String areaId) {
        return driverMap.values().stream()
                .filter(d -> d.isActive() && areaId.equals(d.getAssignedAreaId()))
                .collect(Collectors.toList());
    }
}

