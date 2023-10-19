public class WaterBottle {

    private Integer volume;

    public WaterBottle() { this.volume = 100; }

    public int returnVolume(){
        return this.volume;
    }

    public void drinkWater(){
        this.volume -= 10;;
    }

    public void emptyWater(){
        this.volume = 0;
    }

    public void fillBottle(){
        this.volume = 100;
    }




}
