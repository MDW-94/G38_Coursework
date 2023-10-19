import org.junit.Before;
import org.junit.Test;

import java.awt.print.Book;

import static org.junit.Assert.assertEquals;

public class LibraryTest {

    private Library library;
    private Book book;

    @Before
    public void before(){
        library = new Library(2);
        book = new Book();

    }

    @Test
    public void canCountBooks(){
        assertEquals(0,library.countBooks());
    }

    @Test
    public void canAddBook(){
        library.addBook(book);
        assertEquals(1, library.countBooks());
    }

    @Test
    public void cantAddBookWhenAtCapacity(){
        library.addBook(book);
        library.addBook(book);
        library.addBook(book);
        assertEquals(2, library.countBooks());
    }



}
