import Staff.Management.Director;
import Staff.techStaff.DatabaseAdmin;
import Staff.techStaff.Developer;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class DirectorTest {

    Director director;

    @Before
    public void before(){
        director = new Director("Jenny", "SC005", 20000, 500000);
    }

    @Test
    public void directorHasName(){
        assertEquals("Jenny", director.getName());
    }

    @Test
    public void directorHasNI(){
        assertEquals("SC005", director.getNI());
    }

    @Test
    public void directorHasSalary(){
        assertEquals(20000, director.getSalary(), 0.0);
    }

    @Test
    public void directorCanRaiseSalary(){
        director.raiseSalary(1000);
        assertEquals(21000, director.getSalary(), 0.0);
    }

    @Test
    public void directorPayBonus(){
        assertEquals(400, director.payBonus(), 0.0);
    }

    @Test
    public void directorHasBudget(){
        assertEquals(500000, director.getBudget(), 0.0);
    }
}
