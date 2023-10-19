public class Bear {
    private String name;
//    this declares that the Bear class is going to have a variable,
//    which is a string called name
    private int age;
//    primitive type
    private double weight;

    public Bear(String name, int age, double weight){
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name){
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public double getWeight() {
        return weight;
    }

    public boolean readyToHibernate(){
        if(this.weight >= 80){
            return true;
        }else{
            return false;
        }
    }
}
