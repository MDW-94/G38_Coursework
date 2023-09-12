from flask import Flask

app = Flask(__name__)

from controllers import controller  

#if you import the controller prior to initialising the app then
#you wont be able to run the app - the computer works line by line

if __name__ == "__main__":
    app.run(debug=True)