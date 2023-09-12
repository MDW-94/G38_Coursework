from flask import Flask
from controllers.orders_controllers import orders_blueprint

app = Flask(__name__)
app.register_blueprint(orders_blueprint)

# @app.route('/<name>')
# def index(name):
#     return f"Hello {name}, welcome to the homepage"


