from flask import Flask
from controllers.bookshop_controller import bookshop_blueprint

app = Flask(__name__)
app.register_blueprint(bookshop_blueprint)