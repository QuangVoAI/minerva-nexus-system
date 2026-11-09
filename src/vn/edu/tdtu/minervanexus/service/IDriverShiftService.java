package vn.edu.tdtu.minervanexus.service;

import vn.edu.tdtu.minervanexus.model.DeliveryShift;
import vn.edu.tdtu.minervanexus.model.Driver;

import java.io.File;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

public interface IDriverShiftService {
    void registerDriver(Driver driver);

    void importDriversFromCsv(File csvFile);

    List<Driver> getAllDrivers();

    Optional<Driver> getDriverById(String driverId);

    List<Driver> getActiveDriversByArea(String areaId);

    DeliveryShift createShift(String hubId, LocalDate date, LocalTime start, LocalTime end);

    List<DeliveryShift> getAllShifts();

    void incrementDriverLoad(String driverId);

    void decrementDriverLoad(String driverId);
}
