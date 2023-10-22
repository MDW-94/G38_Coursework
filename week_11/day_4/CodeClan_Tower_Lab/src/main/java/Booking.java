import java.util.ArrayList;

public class Booking {

    private int noNightsBooked;

    private Bedroom bedroom;

    public Booking(int noNightsBooked, Bedroom bedroom) {
        this.noNightsBooked = noNightsBooked;
        this.bedroom = bedroom;
    }

    public int getNoNightsBooked() {
        return noNightsBooked;
    }

    public void setNoNightsBooked(int noNightsBooked) {
        this.noNightsBooked = noNightsBooked;
    }

    public Bedroom getBedroom() {
        return bedroom;
    }

    public void setBedroom(Bedroom bedroom) {
        this.bedroom = bedroom;
    }

    public double getTotalBill(){
        return this.bedroom.getNightlyRate() * this.noNightsBooked;
    }




}
