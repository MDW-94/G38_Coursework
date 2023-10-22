package people.Staff;

public enum Rank {
    CAPTAIN("captain"),
    FIRSTOFFICER("first officer"),
    PURSER("purser"),
    FLIGHTATTENDANT("flight attendant");

    private final String rank;

    Rank(String rank) {
        this.rank = rank;
    }

    public String getRank() {
        return rank;
    }
}
