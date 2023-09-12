from flask import render_template, Blueprint, request, redirect
from models.books_list import books, delete_book, checkout_book
from models.book import Book

bookshop_blueprint = Blueprint('books', __name__)

##########
# ROUTES #

@bookshop_blueprint.route('/home')
def home():
    return render_template('home.html', title = 'Home')

@bookshop_blueprint.route('/library')
def index():
    return render_template('index.html', title = 'Library', books=books)

@bookshop_blueprint.route('/library/<index>')
def show_book(index):
    return render_template('show.html', title = "Book No." + index, book=books[int(index)])


#############
# REDIRECTS #

@bookshop_blueprint.route('/library', methods=['POST'])
def add_book():
    title = request.form('title')
    author = request.form('author')
    genre = request.form('genre')
    checked_out = True if 'checked_out' in request.form else False
    new_book = Book(title, author, genre, checked_out)
    books.append(new_book)
    return redirect('/library')

@bookshop_blueprint.route('/library/delete/<name>', methods=["POST"]) #listening out for a delete data in POST
def delete(name):
    delete_book(name) #we will write this function in the books_list.py file
    return redirect('/library')

@bookshop_blueprint.route('/library/checkout/<name>')
def checkout(name):
    checkout_book(name)
    return redirect('/library')


