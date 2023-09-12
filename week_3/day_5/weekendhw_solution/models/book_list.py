from models.book import Book

book1 = Book("book1", "author1", "Horror", True)
book2 = Book("book2", "author2", "Action", False)
book3 = Book("book3", "author3", "Comedy", True)
books = [book1, book2, book3]

def add_book(book):
    books.append(book)

def delete_book(index):
    books.pop(index)