from flask import render_template, Blueprint, request
from models.task_list import tasks
from models.task import Task

tasks_blueprint = Blueprint("tasks", __name__)

@tasks_blueprint.route('/tasks')
def index():
    return render_template('index.html', title='My Task List', tasks=tasks)

@tasks_blueprint.route('/tasks/<index>')
def single_task(index):
    return render_template('show.html', task=tasks[int(index)])

@tasks_blueprint.route('/tasks', methods=['POST'])
def add_task():
    # print(request.form)
    task_title = request.form ['title']
    task_desc = request.form['description']
    new_task =Task(task_title, task_desc, False)
    tasks.append(new_task)
    return render_template('index.html', title='Home', tasks=tasks)