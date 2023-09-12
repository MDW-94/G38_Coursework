from flask import Flask

app = Flask(__name__)

@app.route('/homepage')
def index():
    return "Homepage"

# Now that we have the basics of Flask set up we're going to add
# more complex structure and generate more elaborate web pages
# We're going to use Templates and Blueprints

# Now are app file (in this case flask_app_2)
# will contain app.py .flaskenv
# but we will mkdir for our models ( a new directory for our models)

# in the models directory we will have a .py file for a class
# then another .py file for inputted data
# example of this could be a Task class plus a task list (with inputted data)

### After Creating the Models ###

# We are going to code up our route to view all of the tasks and have them 
# rendered using an HTML template

# Model-View-Controller

# Following the MVC pattern we want to break down the responsibilities of our application -

# - Model - the list of people that makes up the data of our application (and in a more complicated app - logic too)
# - View - Flask Templates - what Flask uses to create the pages a user interacts with
# - Controller - The intermediary between Model and View - processes requests, reads/updates the model. Defined as a set of routes

# Models hold the data and class defining instances
# Views hold to front-end, user interaction elements which are displayed
# Controllers create the channels that link the Model (data) with the View (display, user input)

### NAMING ROUTES ####

# 