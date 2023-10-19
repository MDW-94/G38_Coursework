package Staff;

public abstract class Employee {

//    protected is not directly accessible outwith of the package
//    it's in
    protected String name;
    protected String nI;
    protected Double salary;

    public Employee(String name, String nI, double salary) {
        this.name = name;
        this.nI = nI;
        this.salary = salary;
    }

    public String getName() {
        if(name != null) {
            return name;
        }
        return "Not a valid name, please retype";
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNI() {
        return nI;
    }

    public void setNI(String nI) {
        this.nI = nI;
    }

    public double getSalary() {
        return this.salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public void raiseSalary(double raise){
        if(raise > 0.0){
            this.salary += raise;
        }
    }

    public double payBonus(){
        double bonus = this.salary/100;
        return bonus;
    }




}
