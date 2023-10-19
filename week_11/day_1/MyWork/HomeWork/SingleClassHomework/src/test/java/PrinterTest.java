import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class PrinterTest {

    private Printer myPrinter;

    @Before
    public void before(){ myPrinter = new Printer(100); }

    @Test
    public void showPaperLeft(){
        myPrinter.showPaperLeft();
        assertEquals(100, myPrinter.showPaperLeft());
    }

    @Test
    public void printCopies(){
        myPrinter.printCopies();
        assertEquals();
    }



}
