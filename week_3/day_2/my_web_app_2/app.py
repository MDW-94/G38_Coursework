from flask import Flask
from controllers.tasks_controller import tasks_blueprint

app = Flask(__name__)
app.register_blueprint(tasks_blueprint)

@app.route('/<name>') #these routes will be your different URLS
def index(name):
    return f"<h1>Hello {name}</h1>"

# different HTTP tasks. GET requests just asks for information and gets it back
# POST request
# PUT request