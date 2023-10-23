import People.CabinCrewMember;
import People.Passenger;
import People.Pilot;
import People.Rank;
import Vehicles.Plane;
import Vehicles.PlaneType;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class FlightTest {

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
    public void before() {
        plane = new Plane(PlaneType.SMALLESTPLANE);

        passenger1 = new Passenger("Carolyn", 2);
        passenger2 = new Passenger("Matthew", 1);
        passenger3 = new Passenger("A dog?", 0);
        passenger4 = new Passenger("Mum", 50);


        pilot = new Pilot("Raphael", Rank.CAPTAIN, "LIC50");

        crew = new CabinCrewMember("Hilary", Rank.FIRSTOFFICER);
        crew2 = new CabinCrewMember("Joseph", Rank.FLIGHTATTENDANT);
        crew3 = new CabinCrewMember("Sarah", Rank.FLIGHTATTENDANT);

        flight = new Flight("SC4545", AirportID.SPA, AirportID.GLA, "1400", plane);
    }



    @Test
    public void flightBeginsWithNoPilot(){
        assertEquals(0, flight.getPilotsSum());
    }

    @Test
    public void pilotCanBeAddedToFlight(){
        flight.addPilotToFlight(pilot);
        assertEquals(1, flight.getPilotsSum());
    }

    @Test
    public void flightHasNoCabinCrewToStart(){
        assertEquals(0, flight.getCrewSum());
    }

    @Test
    public void crewCanBeAddedToFlight(){
        flight.addCrewToFlight(crew);
        flight.addCrewToFlight(crew2);
        flight.addCrewToFlight(crew3);
        assertEquals(3, flight.getCrewSum());
    }

    @Test
    public void flightHasEmptyPassengerListToStart(){
        assertEquals(0, flight.getPassengersSum());
    }

    @Test
    public void passengerCanBeAddedToFlight(){
        flight.addPassengerToFlight(passenger1);
        flight.addPassengerToFlight(passenger2);
        assertEquals(2, flight.getPassengersSum());
    }

    @Test
    public void passengerCannotBeAddedIfCapacityReached(){
        flight.addPassengerToFlight(passenger1);
        flight.addPassengerToFlight(passenger2);
        flight.addPassengerToFlight(passenger3);
        flight.addPassengerToFlight(passenger4);
        assertEquals(3, flight.getPassengersSum());
    }

    @Test
    public void flightHasPlane(){
        Plane plane = flight.getPlane();
        assertEquals("SMALLESTPLANE", plane.getType().toString());
    }

    @Test
    public void flightHasNumber(){
        assertEquals("SC4545", flight.getFlightNumber());
    }

    @Test
    public void flightHasDestinationAirport(){
        assertEquals("SPA", flight.getDestinationAirport().toString());
    }

    @Test
    public void flightHasDepartureAirport(){
        assertEquals("GLA", flight.getDepartureAirport().toString());
    }

    @Test
    public void flightHasDepartureTime(){
        assertEquals("1400", flight.getDepartureTime());
    }

    @Test
    public void canSetDepartureTime(){
        flight.setDepartureTime("1500");
        assertEquals("1500", flight.getDepartureTime());
    }

    @Test
    public void flightCanShowAvailableSeats(){
        flight.addPassengerToFlight(passenger1);
        flight.addPassengerToFlight(passenger2);
        assertEquals(1, flight.remainingSeats());
    }

}

