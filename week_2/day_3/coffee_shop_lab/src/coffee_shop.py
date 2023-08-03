class CoffeeShop:
    
    def __init__(self, name, till):
        self.name = name
        self.till = till
        #self.drink = []
        self.stock = {}

    def increase_till(self, amount):
        self.till += amount

    def add_drink(self, drink):
        self.drink.append(drink)
        self.stock.update({drink.name: drink.price})

    def coffee_shop_sells_drink(self, drink, customer):
        if customer.age >= 16:
            if customer.energy <= 10:
                customer.reduce_wallet(drink)
                customer.increase_energy(drink)
                self.increase_till(drink)

    def coffee_shop_sells_food(self, food, customer):
        customer.reduce_wallet(food)
        customer.reduce_energy(food)
        self.increase_till(food)

    def stock_value(self):
        return sum(self.stock[drink.price])