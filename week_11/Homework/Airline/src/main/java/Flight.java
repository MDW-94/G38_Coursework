import Airport.AirportID;
import people.Passenger.Passenger;
import Planes.Plane;
import people.Staff.CabinCrew;
import people.Staff.Pilot;

import java.util.ArrayList;

public class Flight {

    private Plane plane;
    private ArrayList<Pilot> pilot;
    private ArrayList<CabinCrew> cabinCrew;
    private ArrayList<Passenger> passengers;

    private String flightNumber;
    private AirportID departureAirport;
    private AirportID destinationAirport;

    private String departureTime;

    public Flight(Plane plane, String flightNumber, AirportID departureAirport, AirportID destinationAirport, String departureTime) {
        this.plane = plane;
        this.pilot = new ArrayList<Pilot>();
        this.cabinCrew = new ArrayList<CabinCrew>();
        this.passengers = new ArrayList<Passenger>();
        this.flightNumber = flightNumber;
        this.departureAirport = departureAirport;
        this.destinationAirport = destinationAirport;
        this.departureTime = departureTime;
    }

    public Plane getPlane() {
        return plane;
    }

    public void setPlane(Plane plane) {
        this.plane = plane;
    }

    public ArrayList<Pilot> getPilot() {
        return pilot;
    }

    public void setPilot(ArrayList<Pilot> pilot) {
        this.pilot = pilot;
    }

    public ArrayList<CabinCrew> getCabinCrew() {
        return cabinCrew;
    }

    public void setCabinCrew(ArrayList<CabinCrew> cabinCrew) {
        this.cabinCrew = cabinCrew;
    }

    public ArrayList<Passenger> getPassengers() {
        return passengers;
    }

    public void setPassengers(ArrayList<Passenger> passengers) {
        this.passengers = passengers;
    }

    public String getFlightNumber() {
        return flightNumber;
    }

    public void setFlightNumber(String flightNumber) {
        this.flightNumber = flightNumber;
    }

    public AirportID getDepartureAirport() {
        return departureAirport;
    }

    public void setDepartureAirport(AirportID departureAirport) {
        this.departureAirport = departureAirport;
    }

    public AirportID getDestinationAirport() {
        return destinationAirport;
    }

    public void setDestinationAirport(AirportID destinationAirport) {
        this.destinationAirport = destinationAirport;
    }

    public String getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(String departureTime) {
        this.departureTime = departureTime;
    }
}
