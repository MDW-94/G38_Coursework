import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class HotelTest {

    private Bedroom bedroom;
    private ConferenceRoom confRoom;
    private Guest guest;

    private Hotel hotel;

    @Before
    public void before(){
        bedroom = new Bedroom(RoomType.DOUBLE.getCapacity(), RoomType.DOUBLE, 101);
        confRoom = new ConferenceRoom(RoomType.CONF.getCapacity(), RoomType.CONF, "Glasgow");
        guest = new Guest("Glen Mitchell");
        hotel = new Hotel();
    }

    @Test
    public void canAddBedroom(){
        hotel.addBedroom(bedroom);
        assertEquals(1, hotel.getBedrooms().size());
    }

    @Test
    public void canAddConfRoom(){
        hotel.addConfRoom(confRoom);
        assertEquals(1, hotel.getConfRooms().size());
    }

    @Test
    public void canAddGuestToBedroom(){
        hotel.addBedroom(bedroom);
        hotel.addGuestToBedroom(101, guest);
        assertEquals(1, hotel.getBedrooms().get(0).getGuests().size());
    }

}
