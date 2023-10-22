import People.Passenger;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class PassengerTest {

    Passenger passenger;

    @Before
    public void before(){
        passenger = new Passenger("Sarah", 3);
    }

    @Test
    public void passengerHasName(){
        assertEquals("Sarah", passenger.getName());
    }

    @Test
    public void passengerHasBags(){
        assertEquals(3, passenger.getBags());
    }

}
