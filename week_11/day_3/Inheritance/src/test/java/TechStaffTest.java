import Staff.Employee;
import Staff.Management.Manager;
import Staff.techStaff.DatabaseAdmin;
import Staff.techStaff.Developer;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class TechStaffTest {


    Developer developer;
    DatabaseAdmin databaseAdmin;

    @Before
    public void before(){
        developer = new Developer("Frank", "SC003", 10000);
        databaseAdmin = new DatabaseAdmin("Sarah", "SC004", 12000);
    }

    @Test
    public void developerHasName(){
        assertEquals("Frank", developer.getName());
    }

    @Test
    public void developerHasNI(){
        assertEquals("SC003", developer.getNI());
    }

    @Test
    public void developerHasSalary(){
        assertEquals(10000, developer.getSalary(), 0.0);
    }

    @Test
    public void developerCanRaiseSalary(){
        developer.raiseSalary(1000);
        assertEquals(11000, developer.getSalary(), 0.0);
    }

    @Test
    public void developerPayBonus(){
        assertEquals(100, developer.payBonus(), 0.0);
    }

    @Test
    public void databaseAdminHasName(){
        assertEquals("Sarah", databaseAdmin.getName());
    }

    @Test
    public void databaseAdminHasNI(){
        assertEquals("SC004", databaseAdmin.getNI());
    }

    @Test
    public void databaseAdminHasSalary(){
        assertEquals(12000, databaseAdmin.getSalary(), 0.0);
    }

    @Test
    public void databaseAdminCanRaiseSalary(){
        databaseAdmin.raiseSalary(1000);
        assertEquals(13000, databaseAdmin.getSalary(), 0.0);
    }

    @Test
    public void databaseAdminPayBonus(){
        assertEquals(120, databaseAdmin.payBonus(), 0.0);
    }
}
