from models.book import Book

book1 = Book("Lord of the Rings: Fellowship of the Ring", "JRR Tolkien", "Fantasy/Adventure", True)
book2 = Book("Foundation", "Isaac Asimov", "SciFi", False)
book3 = Book("Do Androids Dream of Electric Sheep", "Philip K. Dick", "SciFi", True)
book4 = Book("Women, Race and Class", "Angela Davis", "Politics", False)

books = [book1, book2, book3, book4]

def delete_book(book_name):
    book_to_delete = None
    for book in books:
        if book.title == book_name:
            book_to_delete = book
            break
    books.remove(book_to_delete)

def checkout_book(book_name):
    for book in books:
        if book.title == book_name:
            book.checked_out.update(True)
            break