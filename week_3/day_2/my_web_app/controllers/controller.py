from app import app #Flask instance

@app.route("/")
def index():
    return "Hello World"

@app.route('/<name>') #if you get a request /-something-
def greet(name):
    return f"Hello {name}!"