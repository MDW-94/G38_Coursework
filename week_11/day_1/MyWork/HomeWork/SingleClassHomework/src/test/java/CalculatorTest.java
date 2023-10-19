import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    private Calculator myCalculator;

    @Before
    public void before(){
        myCalculator = new Calculator();
    }

    @Test
    public void canAddNumbers(){
        myCalculator.addValuesTogether(5, 5);
        assertEquals(10, myCalculator.getAnswer(), 0.0);
    }

    @Test
    public void canSubtractNUmber(){
        myCalculator.substractValue(6, 3);
        assertEquals(3, myCalculator.getAnswer(), 0.0);
    }

    @Test
    public void canMultiplyNumber(){
        myCalculator.multiplyValue(2, 2);
        assertEquals(4, myCalculator.getAnswer(), 0.0);
    }

    @Test
    public void canDivideNumber(){
        myCalculator.divideValue(60, 10);
        assertEquals(6, myCalculator.getAnswer(), 0.0);
    }


}
