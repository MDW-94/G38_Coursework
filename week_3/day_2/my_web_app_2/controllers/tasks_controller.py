from flask import Blueprint
from flask import render_template
from models.task_list import tasks_list #here we're importing out list of data to use in our route

tasks_blueprint = Blueprint("tasks", __name__)

@tasks_blueprint.route("/tasks")
def index():
    return render_template('index.html', title="My Task List", tasks_list=tasks_list) #will automatically look within a folder called templates

# this blueprint is taking the /tasks URL route and picking up the render_template function
# the render_template is picking up that is is looking for index.html
# it is also picking up the variable title which has an assigned value of "My Task List"
# it then renders this template as a HTML file
# we're also passing a variable called task which has the imported tasks list assigned to it

