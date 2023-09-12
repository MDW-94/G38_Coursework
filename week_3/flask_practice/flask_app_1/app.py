from flask import Flask #case sensitive!

app = Flask(__name__)

# creating the app object as a n instance of class Flask imported from the flask package
# the app variable is used as an isntance of Flask
# We can now have flask run our  server and allow us to connect to it via our browser

# __name__ variable passed to the Flask class is a PYthon predefined variable
# it is set to the name of the module in which it is used

# Passing __name__ is almost always going to configure Flask in the correct way

# terminal
# flask run

# this will test our app through a webserver
# we can specify what port to run using:

# terminal
# export FLASK_RUN_PORT=4999
# flask run

# Our First Route

# Routes are the different URLS that an app implements
# In Flask, handlers for the routes are written as Python functions, called view functions
# This will deal with requests that come in to the application and determine what view
#  functinos will run based on the url that the user requests

# View functions are mapped to one or more URLs so that Flask knows what logic to execute
#  when a client requests a given URL
# We'll add a new 'homepage' route at / and below write the view function that will execute
#  when we request that route in the broswer

whatever = "Whatever You Want!"

@app.route('/')
def index():
    return f"<h1>Main Heading: {whatever}</h1>"

# this view function will return the string
# @app.route is a function known as a decorator
# Decorators in Python are used to add extra functionality to a function
#  without having to write that functionality ourselves
#  Flask comes with several in-built decorators that we can leverage to make our app run smooth

# app.route decorator creates an association between the URL and the function
# here the decorator associates the URL with / to this function - in the ('')
# Flask will execute this function and pass the return value back to the browser as a response

# we've made the function return an f-string with some html formatting for a header
# and added a variable defined outside the Flask function to embed a string

# ROUTE PARAMETERS

# we can pass parameters from our URL
# For example, we may take in a name and return a string of "Hello" plus name
# to do this we need to declare these path variables in our route using <> arrows
# with the variable name inside. We then pass that variable to the function

# create a new route
# note - that all these comments wont run - thisi s just guidance

@app.route('/<name>')
def greet(name):
    return f"<h1>New Main Heading with: {name} :words you've written</h1>"

# now flask run in terminal and input whatever words you want!
# note: the <name>, function(name) and f"string{name}" have to
#  be the same in order for the input in the URL to be inputted into the function
# then finally inputted into the display format

# remember to ls -a in chosen directory to determine whether you have:
# .flaskenv app.py
