public class Bedroom extends Room{

    public int roomNumber;


    public Bedroom(int capacity, RoomType roomType, int roomNumber) {
        super(capacity, roomType);
        this.roomNumber = roomNumber;
    }

    public int getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(int roomNumber) {
        this.roomNumber = roomNumber;
    }
}
