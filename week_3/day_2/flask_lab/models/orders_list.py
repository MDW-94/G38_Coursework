from models.order import Order
import datetime

order1 = Order("Michael", datetime.date(2020, 8, 6), 3, "The Holy Grail")
order2 = Order("Matthew", datetime.date(2023, 9, 14), 1, "Lord of the Rings")

orders = [order1, order2]

