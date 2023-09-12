class Order:

    def __init__(self, item_name, item_price, customer_name, order_date, quantity, description):
        self.item_name = item_name
        self.item_price = item_price
        self.customer = customer_name
        self.date = order_date
        self.quantity = quantity
        self.description = description


# creating a class here to hold the parameters of customer name, order date, quantity,
# description and whether the item is in stock