from db.run_sql import run_sql

from models.task import Task
from repositories import user_repository

def select_all():  
    tasks = [] 

    sql = "SELECT * FROM tasks"
    results = run_sql(sql)

    for row in results:
        user = user_repository.select(row['user_id'])
        task = Task(row['description'], row['duration'], user, row['completed'], row['id'] )
        tasks.append(task)
    return tasks 

def save(task):
    sql = "INSERT INTO tasks (description, duration, user_id, completed) VALUES (%s, %s, %s, %s) RETURNING *"
    values = [task.description, task.duration, task.user.id, task.completed]
    results = run_sql(sql, values)
    id = results[0]['id']
    task.id = id
    return task

def select(id):
    task = None
    sql = "SELECT * FROM tasks WHERE id = %s"
    values = [id]
    results = run_sql(sql, values)
    if len(results) > 0:
        result = results[0]
        user = user_repository.select(result['user_id'])
        task = Task(result['description'], result['duration'], user, result['completed'], result['id'])
    return task

# duration is an int and completion is a boolen so there is no need for the inverted commas
# SQL injection is possible here, which means there is a security flaw - someone can inject SQL into our statement
# We need to make that not possible - we need a prepared statement


def delete_all():
    sql = "DELETE FROM tasks"
    run_sql(sql)

def delete(id):
    sql = "DELETE FROM tasks WHERE id = %s"
    values = [id]
    run_sql(sql, values)

def update(task):
    sql = "UPDATE tasks SET (description, user_id, duration, completed) = (%s, %s, %s, %s) WHERE id = %s"
    values = [task.description, task.duration, task.user.id, task.completed, task.id]
    run_sql(sql, values)

def tasks_for_user(user):
    tasks = []

    sql = "SELECT * FROM tasks WHERE user_id = %s"
    values = [user.id]
    results = run_sql(sql, values)
    for row in results:
        task = Task(row['description'], row['duration'], user, row['completed'], row['id'])
        tasks.append(task)
    return tasks