from flask import Flask
from controllers.bookshop_controller import books_blueprint

app = Flask(__name__)

app.register_blueprint(books_blueprint)