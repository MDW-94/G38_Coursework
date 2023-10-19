package Staff.Management;

import Staff.Employee;

public class Manager extends Employee {

    private String deptName;

    public Manager(String name, String nI, double salary, String deptName) {
        super(name, nI, salary);
        this.deptName = deptName;
    }

    public String getDeptName() {
        return deptName;
    }
}
