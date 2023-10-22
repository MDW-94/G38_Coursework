import Vehicles.Plane;
import Vehicles.PlaneType;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class PlaneTest {

    Plane plane;

    @Before
    public void before(){
        plane = new Plane(PlaneType.BOEING800);
    }

    @Test
    public void canGetCapacity(){
        assertEquals(600, plane.getPlaneCapacity());
    }

    @Test
    public void canGetTotalWeight(){
        assertEquals(2200, plane.getTotalWeight());
    }

}
