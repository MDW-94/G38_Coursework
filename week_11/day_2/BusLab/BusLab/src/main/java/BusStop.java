import java.util.ArrayList;

public class BusStop {

    private String name;
    private ArrayList<Person> queue;

    public BusStop(String name){
        this.name = name;
        this.queue = new ArrayList<>();
    }

    public int numberInQueue() {
        return this.queue.size();
    }

    public void addPassenger(Person person) {
        this.queue.add(person);
    }

    public Person removePassenger(Person person){
        this.queue.remove(person);
    }
}
