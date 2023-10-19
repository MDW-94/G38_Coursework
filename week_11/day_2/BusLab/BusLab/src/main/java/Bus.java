import java.util.ArrayList;

public class Bus {

//    Encapsulation, if I don't have private
//    when I create an instance of bus, I would
//    be able to access these properties elsewhere
//    making them private means this property
//    can only be accessed by get() and set()
    private String destination;
    private Integer capacity;
    private ArrayList<Person> passengers;

    private Boolean atCapacity;

    public Bus(String destination, Integer capacity){
        this.destination = destination;
        this.capacity = capacity;
        this.passengers = new ArrayList<Person>();
    }

    public int getNumberOfPassengers() {
        return this.passengers.size();
    }

    public boolean getAtCapacity(){
        return this.atCapacity;
    }


    public String addPassenger(BusStop busStop, Person person) {
        if(this.passengers.size() <= this.capacity){
            this.passengers.add(busStop.removePassenger(person));
            return "Passenger added";
        }else{
            return "At capacity";
        }
    }

    public void removePassenger(Person person) {
        this.passengers.remove(person);
    }
}
