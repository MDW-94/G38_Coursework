from flask import Flask
from flask import render_template
from models.task_list import tasks

app = Flask(__name__)

@app.route('/tasks') #this needs to be typed in the URL
def index():
    return render_template('index.html', title="Home", tasks=tasks)