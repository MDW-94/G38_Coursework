package Vehicles;

public class Plane {

    private PlaneType type;

    public Plane(PlaneType type) {
        this.type = type;
    }

    public PlaneType getType() {
        return type;
    }

    public void setType(PlaneType type) {
        this.type = type;
    }

    public int getPlaneCapacity(){
        return this.type.getCapacity();
    }

    public int getTotalWeight(){
        return this.type.getWeightKg();
    }
}
