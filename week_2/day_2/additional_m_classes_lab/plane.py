
class Plane:

    def __init__(self, type, flight_number, capacity):
        self.type = type
        self.flight_number = flight_number
        self.capacity = capacity #inputted integer
        self.passengers_onboard = []

    def add_passenger(self, passenger):
        if passenger.boarding_pass == self.flight_number:
            if self.capacity >= len(self.passengers_onboard):
                self.passengers_onboard.append(passenger)

    def remove_passenger(self, passenger):
        self.passengers_onboard.remove(passenger)

    def clear_all_passengers(self):
        self.passengers_onboard.clear()



