class Customer:

    def __init__ (self, name, age, wallet, energy):
        self.name = name
        self.age = age 
        self.wallet = wallet
        self.energy = energy

    def reduce_wallet(self, amount):
        self.wallet -= amount

    def increase_energy(self, drink):
        self.energy += drink.caffeine_level

    def reduce_energy(self, food):
        self.energy -= food.digestion_level

