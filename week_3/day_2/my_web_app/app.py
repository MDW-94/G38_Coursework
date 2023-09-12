from flask import Flask

app = Flask(__name__) # the file to be executed

from controllers import controller

if __name__ == '__main__': # if '__main__' is passed to __name__ then Flask will run
    app.run(debug = True) # this is normally always the same. __name__ is a variable that gets passed to the Flask class

# a root is what we describe a URL we should be listening for, we need to define one

