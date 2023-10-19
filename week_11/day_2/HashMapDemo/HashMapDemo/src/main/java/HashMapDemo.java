import java.util.HashMap;

public class HashMapDemo {

    public static void main(String[] args) {

        HashMap favouriteFruits = new HashMap<>();
        favouriteFruits.put("Alice", "Apple");
        favouriteFruits.put("Sarah", "Banana");
        favouriteFruits.put("Bob", "Strawberry");

        System.out.println(favouriteFruits.get("Alice"));

        HashMap<String, Integer> ages = new HashMap<String, Integer>();
        ages.put("Alice", 32);
        ages.put("Bob", 23);
        ages.put("Sam", 32);

//        in java whenever you intro a variable you first have to declare its type

        Integer aliceAge = ages.get("Alice");

//        this variable is declared as type integer, then the Hash Map
//        is referenced with a method get() to find Alice's age from the array

        System.out.println(aliceAge.toString());

//        these are built in methods
//        put("key", "value") adds to the HashMap
//        get("Alice") get the value from the key
//        size() gets the size of the HashMap
//        clear() clears the HashMap
//        containsKey("Alice") looks to see if HashMap contains t/f
//        containsValue("50") looks to see if this value is in the HashMap t/f
//        .remove(key) removes a key





    }
}
