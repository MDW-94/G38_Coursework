import people.Staff.CabinCrew;
import people.Staff.Rank;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CrewTest {

    CabinCrew cabinCrew;


    @Before
    public void before(){
        cabinCrew = new CabinCrew("Jack", Rank.FLIGHTATTENDANT);
    }

    @Test
    public void crewHasName(){
        assertEquals("Jack", cabinCrew.getName());
    }

    @Test
    public void crewHasRank(){
        assertEquals("FLIGHT-ATTENDANT", cabinCrew.getRank());
    }
}
