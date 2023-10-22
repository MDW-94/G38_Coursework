import People.CabinCrewMember;
import People.Rank;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CabinCrewTest {

    CabinCrewMember cabinCrewMember;

    @Before
    public void before(){
        cabinCrewMember = new CabinCrewMember("Dan", Rank.CAPTAIN);
    }

    @Test
    public void cabinCrewMemberHasName(){
        assertEquals("Dan", cabinCrewMember.getName());
    }

    @Test
    public void cabinCrewMemberHasRank(){
        assertEquals(Rank.CAPTAIN, cabinCrewMember.getRank());
    }

    @Test
    public void cabinCrewHasMessage(){
//        assertEquals("Hello! I'm your CAPTAIN", cabinCrewMember.relayMessage());
        assertEquals("Hello, my name is Dan and I'm your CAPTAIN", cabinCrewMember.relayMessage());
    }
}
