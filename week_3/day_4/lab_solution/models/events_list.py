from models.event import Event
from datetime import date

event1 = Event(date(2023, 9, 13), "Wedding", 5, "Garden", "Lots of drinking...", False)
event2 = Event(date(2023, 10, 14), "Birthday", 10, "Mansion", "Celebration", False)
event3 = Event(date(2023, 5, 10), "OAP Club", 50, "Lounge", "Lots of tea", True)

events = [event1, event2, event3]

def delete_event(event_name):
    event_to_delete = None
    for event in events:
        if event.name == event_name:
            event_to_delete = event
            break 
    events.remove(event_to_delete)

# we're creating a functino here that loops over the values of our list
# as we will only have the name of our event this is necessary
# so we create an empty variable to contain our pinpointed data (an empty container)
# we then create a loop that iterates thorugh our list of data, to find the correct answer
# we then create criteria for our iteration, so if the iteration finds and event.name that is the same -
# - as our inputted data
# we then perform an assignment of that event to our empty variable (the container)
# we then break the iteration (breaking the for loop to stop the computer looping through)
# at the very end we remove this stored event from the list