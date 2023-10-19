import java.util.ArrayList;

public class Bear {


    private String name;
    private ArrayList<Salmon> belly;

//    ctrl + enter makes constructor
    public Bear(String name) {
        this.name = name;
        this.belly = new ArrayList<Salmon>();
    }

    public int foodCount(){
        return this.belly.size();
    }

    public void eat(Salmon salmon) {
        this.belly.add(salmon);
    }
    //    we're accommodating an instance of salmon here
//    in the bear we tell the function to expect an
//    object of type salmon

    public void shitInTheWoods() {
        this.belly.clear();
    }


    public void eatFishFromRiver(River river) {
        Salmon salmon = river.removeFish();
        this.belly.add(salmon);

    }
}
