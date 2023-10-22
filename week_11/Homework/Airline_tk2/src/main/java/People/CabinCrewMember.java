package People;

public class CabinCrewMember extends Person {

    private Rank rank;

    public CabinCrewMember(String name, Rank rank) {
        super(name);
        this.rank = rank;
    }

    public Rank getRank() {
        return rank;
    }

    public void setRank(Rank rank) {
        this.rank = rank;
    }

    public String relayMessage(){
//        String s1 = "Hello! I'm your " + this.rank.toString();
//        return s1;
        String name = this.getName();
        String rank = String.valueOf(this.getRank());
        String s1 = String.format("Hello, my name is %s and I'm your %s", name, rank);
        return s1;
    }
}
