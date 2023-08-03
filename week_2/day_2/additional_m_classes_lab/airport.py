
class Airport:

    def __init__(self, name):
        self.name = name
        self.dep_lounge = []
        self.shop_profit = 0
        self.shop = {
   "M&Ms": 5.00,
   "Shitty headphones": 400.00,
   "Mechanically reclaimed floor sweepings sandwich": 150.00,
   "Copy of Roger's Profanisaurus": 20.00
}

    def transfer_passenger(self, passenger):
        passenger = Plane(add_passenger(passenger))
        self.dep_lounge.remove(passenger)
         #check to see if this is correct

    def passenger_shop_purchase(self, passenger):
        customer = self.dep_lounge[passenger]

    