import People.Passenger;

import java.text.DecimalFormat;
import java.util.ArrayList;

public class FlightManager {

    private Flight flight;


    public FlightManager(Flight flight) {
        this.flight = flight;
    }

    public Flight getFlight() {
        return flight;
    }

    public void setFlight(Flight flight) {
        this.flight = flight;
    }

    public int checkPassengerBaggageSum(){
        int bagsTotal = 0;
        for (Passenger passenger : this.flight.getPassengers()) {
            bagsTotal += passenger.getBags();
        } return bagsTotal;
    }
//    ArrayList people.passenger

    public int checkFlightBagCapacity(){
        return flight.getPlane().getTotalWeight() / 2;
    }

    public double checkBagWeightForFlight(){
        double result1;
        result1 = (double) (flight.getPlane().getTotalWeight() / 2) / flight.getPlane().getPlaneCapacity();
        return result1;
    }

    public double checkPassengerBagWeightForFlight(){
        double bagWeight;
        bagWeight = (double) (flight.getPlane().getTotalWeight() / 2) / flight.getPlane().getPlaneCapacity();

        int bagsTotal = 0;
        for (Passenger passenger : this.flight.getPassengers()) {
            bagsTotal += passenger.getBags();
        }

        return bagsTotal * bagWeight;
    }

    public double checkBagWeightRemaining(){
        double bagWeight;
        bagWeight = (double) (flight.getPlane().getTotalWeight() / 2) / flight.getPlane().getPlaneCapacity();

        int bagsTotal = 0;
        for (Passenger passenger : this.flight.getPassengers()) {
            bagsTotal += passenger.getBags();
        }

        double totalBagWeight = bagsTotal * bagWeight;
        return ((double) flight.getPlane().getTotalWeight() /2) - totalBagWeight;
    }
}
