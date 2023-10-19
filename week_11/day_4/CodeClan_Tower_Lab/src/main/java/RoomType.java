public enum RoomType {
    SINGLE(1),
    DOUBLE(2),
    CONF(50);

    // an enum is another way of storing info like a Hashmap
    // another way of storing data - used in scenarios
    // where there are finite options - days of the week etc

    private int capacity;

    RoomType(int capacity) {
        this.capacity = capacity;
    }

    // when I create an enum, I'm to call the above

    public int getCapacity() {
        return capacity;
    }
}
