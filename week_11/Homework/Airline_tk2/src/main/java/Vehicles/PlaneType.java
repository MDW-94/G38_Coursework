package Vehicles;

public enum PlaneType {
    BOEING747(500, 2000),
    SMALLESTPLANE(3, 50),
    BOEING800(600, 2200),
    BOEING990(150, 1800);

    private final int capacity;

    private final int weightKg;

    PlaneType(int capacity, int weightKg) {
        this.capacity = capacity;
        this.weightKg = weightKg;
    }

    public int getCapacity() {
        return capacity;
    }

    public int getWeightKg() {
        return weightKg;
    }
}
