from models.order import Order

item1 = Order(
    "Sweatshirt", 30.50, "Jerry Smith", "07/08/2023", 2, 
    "Heavy cotton sweathshirt with minimalist look. Grey")

item2 = Order(
    "Hiking Boots", 75.95, "Lilly Reed", "01/08/2023", 1,
    "A pair of high top, waterproof hiking boots. Mustard")

item3 = Order(
    "Bomber Jacket", 30.50, "Joe Dan", "23/07/2023", 1,
    "Canvas bomber with thick cuffs. Green")

item4 = Order(
    "Hoodie", 15, "Pedro Smith", "24/07/2023", 3,
    "Run-of-the-mill, trustworthy hoodie. Black")

item5 = Order(
    "Socks", 5, "Barbara Stanford", "20/07/2023", 10,
    "Heavy-duty socks for all occasions. Multi-Coloured")

catalogue = [item1, item2, item3, item4, item5]

# def return_order_name(catalogue):
#     for item in catalogue:
#         return item.name

#