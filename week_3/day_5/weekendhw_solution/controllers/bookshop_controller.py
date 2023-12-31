from flask import Blueprint, render_template, request, redirect

from models.book import Book
from models.book_list import books, add_book, delete_book

books_blueprint = Blueprint("books", __name__)

@books_blueprint.route('/')
def index():
    return render_template("main_index.html", title="Library")

@books_blueprint.route('/books')
def books_index():
    return render_template("books/index.html", books=books, title="Books")

@books_blueprint.route('/books/<index>')
def book_show(index):
    book = books[int(index)]
    return render_template("books/show.html", book=book, index = index)

@books_blueprint.route("/books/", methods=["POST"])
def books_create():
    title = request.form["title"]
    author = request.form["author"]
    genre = request.form["genre"]
    new_book = Book(title, author, genre, False)
    add_book(new_book)
    return redirect("/books")

@books_blueprint.route("/books/new")
def new_book():
    return render_template("books/new.html")

@books_blueprint.route("/books/delete/<index>", methods=["POST"])
def books_delete(index):
    delete_book(int(index))
    return redirect("/books")

@books_blueprint.route("/books/<index>", methods=["POST"])
def books_update(index):
    book = books[int(index)]
    checked_out = "checked_out" in request.form
    book.toggle_check_out(checked_out)
    return redirect ("/books/" + index)
