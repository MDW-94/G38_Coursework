import People.CabinCrewMember;
import People.Passenger;
import People.Pilot;
import Vehicles.Plane;

import java.util.ArrayList;
import java.util.Date;

public class Flight {

    private ArrayList<Pilot> pilots;
    private ArrayList<CabinCrewMember> crew;
    private ArrayList<Passenger> passengers;
    private Plane plane;

    private String flightNumber;
    private AirportID destinationAirport;
    private AirportID departureAirport;
    private String departureTime;


    public Flight(String flightNumber, AirportID destinationAirport, AirportID departureAirport, String departureTime, Plane plane) {
        this.flightNumber = flightNumber;
        this.destinationAirport = destinationAirport;
        this.departureAirport = departureAirport;
        this.departureTime = departureTime;
        this.plane = plane;
        this.pilots = new ArrayList<Pilot>();
        this.crew = new ArrayList<CabinCrewMember>();
        this.passengers = new ArrayList<Passenger>();
    }

    public int getPilotsSum() {
        return pilots.size();
    }

    public int getCrewSum() {
        return crew.size();
    }

    public int getPassengersSum() {
        return passengers.size();
    }

    public ArrayList<Passenger> getPassengers(){
        return this.passengers;
    }

    public Plane getPlane() {
        return plane;
    }

    public String getFlightNumber() {
        return flightNumber;
    }

    public AirportID getDestinationAirport() {
        return destinationAirport;
    }

    public AirportID getDepartureAirport() {
        return departureAirport;
    }

    public String getDepartureTime() {
        return departureTime;
    }

    public void setFlightNumber(String flightNumber) {
        this.flightNumber = flightNumber;
    }

    public void setDepartureTime(String departureTime) {
        this.departureTime = departureTime;
    }

    public int remainingSeats(){
        int planeCapacity = plane.getPlaneCapacity();
        return planeCapacity - this.passengers.size();
    }

    public void addPilotToFlight(Pilot pilot){
        this.pilots.add(pilot);
    }

    public void addCrewToFlight(CabinCrewMember crew){
        this.crew.add(crew);
    }

    public void addPassengerToFlight(Passenger passenger) {
        if (this.plane.getPlaneCapacity() > this.passengers.size()) {
            this.passengers.add(passenger);
        }
    }


}
