import Staff.Employee;
import Staff.Management.Director;
import Staff.Management.Manager;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class StaffTest {

    Employee employee;
    Manager manager;

    @Before
    public void before(){
        employee = new Manager("David", "SC001", 14000, "CodeBase");
    }

    @Test
    public void managerHasName(){
        assertEquals("David", employee.getName());
    }

    @Test
    public void managerHasNI(){
        assertEquals("SC001", employee.getNI());
    }

    @Test
    public void managerHasSalary(){
        assertEquals(14000, employee.getSalary(), 0.0);
    }

    @Test
    public void managerCanRaiseSalary(){
        employee.raiseSalary(1000);
        assertEquals(15000, employee.getSalary(), 0.0);
    }

    @Test
    public void managerHasDept(){
        manager = new Manager("Steve", "SC002", 15000, "CodeClan");
        assertEquals("CodeClan", manager.getDeptName());
    }

    @Test
    public void managerPayBonus(){
        assertEquals(140, employee.payBonus(), 0.0);
    }

//    Testing Extensions

    @Test
    public void cannotRaiseSalaryWithNegative(){
        employee.raiseSalary(-534567.34677);
        assertEquals(14000, employee.getSalary(), 0.0);
    }

    @Test
    public void cannotInputNullAsName(){
        employee = new Director(null, "SC006", 500000, 0);
        assertEquals("Not a valid name, please retype", employee.getName());
    }

}
