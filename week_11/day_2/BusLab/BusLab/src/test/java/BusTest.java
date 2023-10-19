import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class BusTest {

    public Bus bus;
    public Person person;

//    we're declaring these 'Before' every test we run
    @Before
    public void before(){
        bus = new Bus("EASTERHOUSE", 2);
        person = new Person();
        busStop = new BusStop("Cumbernald");
    }

    @Test
    public void canGetNumOfPassengers(){
        assertEquals(0, bus.getNumberOfPassengers());
    }

    @Test
    public void canAddPassenger(){
        bus.addPassenger(busStop, person);
        assertEquals(1, bus.getNumberOfPassengers());
    }

    @Test
    public void doesNotAddPassengerIfATCapacity(){
        bus.addPassenger(busStop, person);
        bus.addPassenger(busStop, person);
        bus.addPassenger(busStop, person);
        assertEquals(2, bus.getNumberOfPassengers());
    }

    @Test
    public void doesNotAddPassengerIfATCapacityAndReturnsErrors(){
        bus.addPassenger(busStop, person);
        bus.addPassenger(busStop, person);
        bus.addPassenger(busStop, person);
        assertEquals("At capacity", bus.addPassenger());
    }

    @Test
    public void canRemovePassenger(){
        bus.addPassenger(busStop, person);
        bus.removePassenger(busStop, person);
        assertEquals(0, bus.getNumberOfPassengers());

    }

}
