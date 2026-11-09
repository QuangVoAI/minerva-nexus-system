package vn.edu.tdtu.minervanexus.service.impl;

import vn.edu.tdtu.minervanexus.model.DeliveryShift;
import vn.edu.tdtu.minervanexus.model.Driver;
import vn.edu.tdtu.minervanexus.repository.DriverRepository;
import vn.edu.tdtu.minervanexus.repository.ShiftRepository;
import vn.edu.tdtu.minervanexus.service.IDriverShiftService;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicInteger;

public class DriverShiftServiceImpl implements IDriverShiftService {
    private final DriverRepository driverRepository;
    private final ShiftRepository shiftRepository;
    private final AtomicInteger shiftCounter = new AtomicInteger(1);

    public DriverShiftServiceImpl(DriverRepository driverRepository, ShiftRepository shiftRepository) {
        this.driverRepository = driverRepository;
        this.shiftRepository = shiftRepository;
    }

    @Override
    public void registerDriver(Driver driver) {
        driverRepository.save(driver);
    }

    @Override
    public void importDriversFromCsv(File csvFile) {
        if (csvFile == null || !csvFile.exists()) return;
        try (BufferedReader reader = new BufferedReader(new FileReader(csvFile))) {
            String line;
            boolean firstLine = true;
            while ((line = reader.readLine()) != null) {
                if (firstLine) { firstLine = false; continue; }
                String[] parts = line.split(",");
                if (parts.length >= 5) {
                    String id = parts[0].trim();
                    String name = parts[1].trim();
                    String phone = parts[2].trim();
                    String area = parts[3].trim();
                    int cap = Integer.parseInt(parts[4].trim());
                    Driver driver = new Driver(id, name, phone, area, cap);
                    driverRepository.save(driver);
                }
            }
        } catch (Exception e) {
            System.err.println("Lỗi khi đọc file CSV tài xế: " + e.getMessage());
        }
    }

    @Override
    public List<Driver> getAllDrivers() {
        return driverRepository.findAll();
    }

    @Override
    public Optional<Driver> getDriverById(String driverId) {
        return driverRepository.findById(driverId);
    }

    @Override
    public List<Driver> getActiveDriversByArea(String areaId) {
        return driverRepository.findByArea(areaId);
    }

    @Override
    public DeliveryShift createShift(String hubId, LocalDate date, LocalTime start, LocalTime end) {
        String shiftId = "SHIFT-" + shiftCounter.getAndIncrement();
        DeliveryShift shift = new DeliveryShift(shiftId, hubId, date, start, end);
        shiftRepository.save(shift);
        return shift;
    }

    @Override
    public List<DeliveryShift> getAllShifts() {
        return shiftRepository.findAll();
    }

    @Override
    public void incrementDriverLoad(String driverId) {
        driverRepository.findById(driverId).ifPresent(d -> {
            d.setCurrentLoad(d.getCurrentLoad() + 1);
            driverRepository.save(d);
        });
    }

    @Override
    public void decrementDriverLoad(String driverId) {
        driverRepository.findById(driverId).ifPresent(d -> {
            d.setCurrentLoad(Math.max(0, d.getCurrentLoad() - 1));
            driverRepository.save(d);
        });
    }
}

