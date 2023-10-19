import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class WaterBottleTest {

    private WaterBottle myWaterBottle;

    @Before
    public void before(){ myWaterBottle = new WaterBottle(); }

    @Test
    public void returnVolume(){
        myWaterBottle.returnVolume();
        assertEquals(100, myWaterBottle.returnVolume());
    }

    @Test
    public void drinkWater(){
        myWaterBottle.drinkWater();
        assertEquals(90, myWaterBottle.returnVolume());
    }

    @Test
    public void drinkWaterMultiple(){
        myWaterBottle.drinkWater();
        myWaterBottle.drinkWater();
        assertEquals(80, myWaterBottle.returnVolume());
    }

    @Test
    public void emptyWater(){
        myWaterBottle.emptyWater();
        assertEquals(0, myWaterBottle.returnVolume());
    }

    @Test
    public void fillBottle(){
        myWaterBottle.emptyWater();
        myWaterBottle.fillBottle();
        assertEquals(100, myWaterBottle.returnVolume());
    }

}
