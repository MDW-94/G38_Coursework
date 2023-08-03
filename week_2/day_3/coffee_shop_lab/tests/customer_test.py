import unittest
from src.customer import Customer
from src.drink import Drink
from src.food import Food

class TestCustomer(unittest.TestCase):

    def setUp(self):
        self.customer = Customer("Fred", 30, 50.00, 0)
        self.drink = Drink("Mocha", 1.50, 7)
        self.food = Food("Rice", 3.50, 5)

    def test_customer_has_name(self):
        self.assertEqual("Fred", self.customer.name)

    def test_customer_has_age(self):
        self.assertEqual(30, self.customer.age) 

    def test_customer_has_wallet(self):
        self.assertEqual(50.00, self.customer.wallet)

    def test_customer_has_energy(self):
        self.assertEqual(0, self.customer.energy)

    def test_customer_reduce_wallet(self):
        self.customer.reduce_wallet(5)
        self.assertEqual(45.00, self.customer.wallet) 

    def test_customer_increase_energy(self):
        self.customer.increase_energy(Drink("Mocha", 1.50, 7))
        self.assertEqual(7, self.customer.energy)

    def test_customer_reduce_energy(self):
        self.customer.reduce_energy(Food("Rice", 3.50, 5))
        self.assertEqual(-5, self.customer.energy)





# method testing



