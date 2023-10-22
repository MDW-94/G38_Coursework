import People.CabinCrewMember;
import People.Passenger;
import People.Pilot;
import People.Rank;
import Vehicles.Plane;
import Vehicles.PlaneType;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class FlightManagerTest {

    FlightManager flightManager;

    Flight flight;
    Passenger passenger1;
    Passenger passenger2;
    Passenger passenger3;
    Passenger passenger4;


    Pilot pilot;
    CabinCrewMember crew;
    CabinCrewMember crew2;
    CabinCrewMember crew3;

    Plane plane;

    @Before
    public void before(){
        plane = new Plane(PlaneType.SMALLESTPLANE);

        passenger1 = new Passenger("Carolyn", 2);
        passenger2 = new Passenger("Matthew", 1);
        passenger3 = new Passenger("A dog?", 0);
        passenger4 = new Passenger("Mum", 50);


        pilot = new Pilot("Raphael", Rank.CAPTAIN, "LIC50");

        crew = new CabinCrewMember("Hilary", Rank.FIRSTOFFICER);
        crew2 = new CabinCrewMember("Joseph", Rank.FLIGHTATTENDANT);
        crew3 = new CabinCrewMember("Sarah", Rank.FLIGHTATTENDANT);

        flight = new Flight("SC4545", AirportID.SPA, AirportID.GLA, "12:30", plane);

        flightManager = new FlightManager(flight);
    }

    @Test
    public void flightManagerHasAFlight(){
        assertEquals("SC4545", flightManager.getFlight().getFlightNumber());
    }

    @Test
    public void flightManagerCanCheckSumBaggageOnFlight(){
        flight.addPassengerToFlight(passenger1);
        flight.addPassengerToFlight(passenger2);
        flight.addPassengerToFlight(passenger4);
        assertEquals(53, flightManager.checkPassengerBaggageSum());
    }

    @Test
    public void flightManagerCanCheckStartFlightBagCapacity(){
        assertEquals(25, flightManager.checkFlightBagCapacity());
    }

    @Test
    public void flightManagerCanCheckWeightOfBagsOnFlight(){
        assertEquals(8.333333333333334, flightManager.checkBagWeightForFlight(), 0.0);
    }

    @Test
    public void flightManagerCanCheckWeightForEachPassengersBaggage(){
        flight.addPassengerToFlight(passenger1);
        assertEquals(16.666666666666668, flightManager.checkPassengerBagWeightForFlight(), 0.0);
    }

    @Test
    public void flightManagerCanCheckWeightForEachPassengersBaggage2(){
        flight.addPassengerToFlight(passenger4);
        assertEquals(416.6666666666667, flightManager.checkPassengerBagWeightForFlight(), 0.0);
    }

    @Test
    public void flightManagerCanCheckHowMuchWeightForBagsIsLeft(){
        flight.addPassengerToFlight(passenger2);
        assertEquals(16.666666666666664, flightManager.checkBagWeightRemaining(), 0.0);
    }

}
