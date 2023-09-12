from models.events import Event
from datetime import date

event1 = Event("Jerry's Birthday Party", date(2023, 8, 15), "Conservatory", 10, "Standard birthday party")
event2 = Event("Jim & Pam Wedding Reception", date(2023, 9, 18), "Garden Mansion", 100, "Big wedding - lots of balloons")
event3 = Event("Pointless Conference", date(2023, 9, 20), "Garden Mansion", 500, "Very Boring")
event4 = Event("Lilly's Reunion", date(2023, 10, 5), "Dining Hall", 55, "Even more boring")
event5 = Event("Ecology & Stuff Show", date(2023, 10, 10), "Square Gardens", 1000, "Creatures from Mexico")

events = [event1, event2, event3, event4, event5]
