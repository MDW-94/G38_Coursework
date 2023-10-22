package Planes;

public enum PlaneType {
    SMALLPLANE(50, 100),
    MEDPLANE(100, 200),
    LARGEPLANE(200, 500);

    private final int capacity;
    private final int totalWeight;

    PlaneType(int capacity, int totalWeight) {
        this.capacity = capacity;
        this.totalWeight = totalWeight;
    }

    public int getCapacity() {
        return capacity;
    }

    public int getTotalWeight() {
        return totalWeight;
    }
}
