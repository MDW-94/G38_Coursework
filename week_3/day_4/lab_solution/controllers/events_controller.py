from flask import render_template, Blueprint, request, redirect
from models.events_list import events, delete_event
from models.event import Event

events_blueprint = Blueprint("events", __name__)

@events_blueprint.route('/events')
def index():
    return render_template('index.html', title = 'Upcoming Events', events=events)


@events_blueprint.route('/events/<index>')
def single_event(index):
    return render_template('show.html', event=events[int(index)])

@events_blueprint.route('/events', methods=['POST'])
def add_event():
    date = request.form['date']
    name = request.form['name']
    guests = request.form['guests']
    location = request.form['location']
    description = request.form['description']
    recurring = True if 'recurring' in request.form else False
    new_event = Event(date, name, guests, location, description, recurring)
    events.append(new_event)
    return redirect('/events')

@events_blueprint.route('/events/delete/<name>', methods=["POST"]) #listening out for a delete data in POST
def delete(name):
    delete_event(name) #we will write this function in the events_list.py file
    return redirect('/events')

# here we're extracting the logic out of our events_list.py file and importing it into here

