package Staff.Management;

import Staff.Employee;

public class Director extends Employee {

    private double budget;


    public Director(String name, String nI, double salary, double budget ) {
        super(name, nI, salary);
        this.budget = budget;
    }

    public double getBudget() {
        return budget;
    }

    public double payBonus(){
        double bonus = this.salary/100;
        return bonus*2;
    }
}
