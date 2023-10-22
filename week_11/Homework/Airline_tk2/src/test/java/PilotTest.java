import People.Pilot;
import People.Rank;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class PilotTest {

    Pilot pilot;

    @Before
    public void before(){
        pilot = new Pilot("Jane", Rank.CAPTAIN, "ARPLN5");
    }

    @Test
    public void pilotHasName(){
        assertEquals("Jane", pilot.getName());
    }

    @Test
    public void pilotHasRank(){
        assertEquals(Rank.CAPTAIN, pilot.getRank());
    }

    @Test
    public void pilotHasLicence(){
        assertEquals("ARPLN5", pilot.getLicense());
    }

    @Test
    public void pilotCanFly(){
        assertEquals("PEESHEWWWWWWW", pilot.pilotFly());
    }


}
