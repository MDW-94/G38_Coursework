from flask import render_template, Blueprint, request
from models.events_list import events
from models.events import Event

events_blueprint = Blueprint("events", __name__)


@events_blueprint.route('/home')
def home():
    return render_template('base.html', title="Events Homepage", events=events)

@events_blueprint.route('/events')
def index():
    return render_template('index.html', title="Events List", events=events)

@events_blueprint.route('/events/<index>')
def single_event(index):
    return render_template('show.html', events=events[int(index)])

@events_blueprint.route('/events', methods=['POST'])
def add_event():
    event_name = request.form ['title']
    event_date = request.form ['date']
    event_location = request.form ['location']
    event_num_of_guests = request.form ['num_of_guests']
    event_description = request.form ['description']
    new_event = Event(event_name, event_date, event_location, event_num_of_guests, event_description)
    events.append(new_event)
    return render_template('index.html', title='Events List', events=events)
    


