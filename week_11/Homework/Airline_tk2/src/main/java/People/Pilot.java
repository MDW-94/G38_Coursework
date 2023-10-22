package People;

public class Pilot extends Person {

    private Rank rank;

    private String license;

    public Pilot(String name, Rank rank, String license) {
        super(name);
        this.rank = rank;
        this.license = license;
    }

    public Rank getRank() {
        return rank;
    }

    public void setRank(Rank rank) {
        this.rank = rank;
    }

    public String getLicense() {
        return license;
    }

    public void setLicense(String license) {
        this.license = license;
    }

    public String pilotFly(){
        return "PEESHEWWWWWWW";
    }
}
