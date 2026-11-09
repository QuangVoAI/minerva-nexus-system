package vn.edu.tdtu.minervanexus.model;

public class ServiceArea {
    private String areaId;
    private String areaName;
    private String district;
    private String city;

    public ServiceArea() {}

    public ServiceArea(String areaId, String areaName, String district, String city) {
        this.areaId = areaId;
        this.areaName = areaName;
        this.district = district;
        this.city = city;
    }

    public String getAreaId() { return areaId; }
    public void setAreaId(String areaId) { this.areaId = areaId; }

    public String getAreaName() { return areaName; }
    public void setAreaName(String areaName) { this.areaName = areaName; }

    public String getDistrict() { return district; }
    public void setDistrict(String district) { this.district = district; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    @Override
    public String toString() {
        return areaName + " (" + district + ")";
    }
}

