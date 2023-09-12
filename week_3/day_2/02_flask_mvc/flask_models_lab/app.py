from flask import Flask
# from flask import render_template
# from models.order_list import catalogue
from controllers.order_controller import orders_blueprint

current_app = Flask(__name__)
current_app.register_blueprint(orders_blueprint)

# @app.route('/catalogue')
# def index():
#     return render_template('index_order.html', title='Home', catalogue = catalogue)



# we need to code a route to view all of the tasks and have them rendered using an HTML template
# Model-View-Controller breakdown:
# Model the list of tasks that makes up the data of our application (and in more complicated app logic too)
# View - Flask Templates - what Flask uses to create the pages a user interacts with 
# Controller - The intermediary between Model and View - processes requests, read/updates model 
# defined as a set of routes

# I've created a directory for our controllers
# In this directory I've made a python file to import Blueprint form Flask
# Blueprint is Flask's take on MVC Controllers

# After created the order_controller.py file to house the Blueprint setup
# we import the directoryname.filename and import the blueprint variable (?)
# then we register it with the app app.register_blueprint(orders_blueprint)
