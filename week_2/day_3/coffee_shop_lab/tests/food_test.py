import unittest
from src.food import Food

class TestFood (unittest.TestCase):
    
    def setUp(self): 
        self.food = Food("Rice", 3.50, 5)

    def test_food_has_name(self):
        self.assertEqual("Rice", self.food.name)

    def test_food_has_price(self):
        self.assertEqual(3.50, self.food.price)

    def test_food_has_digestion_level(self):
        self.assertEqual(5, self.food.digestion_level) 