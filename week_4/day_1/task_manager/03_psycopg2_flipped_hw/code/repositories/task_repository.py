from db.run_sql import run_sql

from models.task import Task
  
# respository is the middle between the model and the database
# the run_sql executes the sql but we need other things around that
#

def select_all():
    tasks = []
    sql = "SELECT * FROM tasks" # no need for a semi colon at the end here
    results = run_sql(sql) # the format is a list of dictionaries, the column is the key and the value is the value

    for row in results:
        task = Task(row['description'], row['assignee'], row['duration'], row['completed'], row['id'])
        tasks.append(task)
    return tasks

