import pdb 
from models.task import Task
from models.user import User
import repositories.task_repository as task_repository
import repositories.user_repository as user_repository

user_repository.delete_all()
task_repository.delete_all()

user_1 = User("Cobra", "Commander")
user_repository.save(user_1)
user_2 = User("Simon", "Cowell")
user_repository.save(user_2)

print(user_1.first_name + " " + user_1.last_name)
print(user_2.first_name + " " + user_2.last_name)

users = user_repository.select_all()

task_1 = Task("Destroy Mainstream Music", 50, user_2)
task_repository.save(task_1)

task_2 = Task("Get extensive and unsightly botox", 50, user_2)
task_repository.save(task_2)

results = task_repository.tasks_for_user(user_2)
print(results)

# result = task_repository.select_all()

# task_1 = Task("Take over the world", "Ming The Merciless", 10)
# task_repository.save(task_1)

# found_task = task_repository.select(1)
# found_task.mark_complete()
# task_repository.update(found_task)
# found_task = task_repository.select(1)

# # found_task = task_repository.select(1)
# # found_task.description = "Changed description"
# # task_repository.update(found_task)
# # found_task = task_repository.select(1)
# print(found_task.completed)

# task_repository.delete_all()
# task_repository.delete(1)
# result = task_repository.select_all()
# for task in result:
#     print(task.__dict__)

pdb.set_trace() 

#pdb.set_trace() stops the script from running