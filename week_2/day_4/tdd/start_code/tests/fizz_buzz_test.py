import unittest

from src.fizz_buzz import fizzbuzz

class TestFizzBuzz(unittest.TestCase):

    def test_returns_a_number(self):
        self.assertEqual(4, fizzbuzz(4))

    def test_returns_fizz_when_passed_a_multiple_of_3(self):
        self.assertAlmostEqual("fizz", fizzbuzz(3))
        self.assertAlmostEqual("fizz", fizzbuzz(6))

    def test_returns_buzz_when_passed_a_multiple_of_5(self):
        self.assertEqual("buzz", fizzbuzz(5))

    def test_returns_fizz_buzz_when_passed_15(self):
        self.assertAlmostEqual("fizzbuzz", fizzbuzz(15))
