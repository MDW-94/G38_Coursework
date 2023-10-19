import java.util.ArrayList;

public class Hotel {

    private ArrayList<Bedroom> bedrooms;
    private ArrayList<ConferenceRoom> confRooms;

    public Hotel() {
        this.bedrooms = new ArrayList<>();
        this.confRooms = new ArrayList<>();
    }

    public ArrayList<Bedroom> getBedrooms() {
        return bedrooms;
    }

    public void setBedrooms(ArrayList<Bedroom> bedrooms) {
        this.bedrooms = bedrooms;
    }

    // the IDE wrote this. for setter but not for getters?

    public ArrayList<ConferenceRoom> getConfRooms() {
        return confRooms;
    }

    public void setConfRooms(ArrayList<ConferenceRoom> confRooms) {
        this.confRooms = confRooms;
    }

    public void addBedroom(Bedroom bedroom){
        this.bedrooms.add(bedroom);
    }

    public void addConfRoom(ConferenceRoom confRoom){
        this.confRooms.add(confRoom);
    }

    public void addGuestToBedroom(int roomNumber, Guest guest){
        for(Bedroom bedroom : this.bedrooms){
            if(bedroom.getRoomNumber() == roomNumber){
                bedroom.addGuest(guest);
            }
        }
    }

    public void addGuestToConfRoom(String roomName, Guest guest){
        for(ConferenceRoom confRoom : this.confRooms){
            if(confRoom.getName() == roomName){
                confRoom.addGuest(guest);
            }
        }
    }

}
