import unittest
from src.drink import Drink

class TestDrink(unittest.TestCase):

    def setUp(self):
        self.drink = Drink("Mocha", 1.50, 7)

    def test_drink_has_name(self):
        self.assertEqual("Mocha", self.drink.name)

    def test_drink_has_price(self):
        self.assertEqual(1.50, self.drink.price)

    def test_drink_has_caffeine_level(self):
        self.assertEqual(7, self.drink.caffeine_level)
