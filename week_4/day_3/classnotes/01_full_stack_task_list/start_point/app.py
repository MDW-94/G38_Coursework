from flask import Flask, render_template
from controllers.tasks_controller import tasks_blueprint
from controllers.user_controller import users_blueprint

app = Flask(__name__)

app.register_blueprint(tasks_blueprint)
app.register_blueprint(users_blueprint)

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
