class Task:
    
    def __init__(self, description, duration, user, completed = False, id = None ):
        self.description = description
        self.duration = duration
        self.completed = completed
        self.user = user
        self.id = id
        
    def mark_complete(self):
        self.completed = True

    