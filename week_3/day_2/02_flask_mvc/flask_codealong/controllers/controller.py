from flask import render_template
from app import app
from models.order import Order

order_1 = Order("Steve", "Today", 10)
order_2 = ("Matthew", "Yesterday", 20)

orders = [order_1, order_2] #need a route to show all of the orders

@app.route('/orders') #when /orders is called on the URL execute the def function below
def index():
    return render_template('index.html', title="Jabba The Pizza Hut", orders = orders)

#time to write the route file for an individual order
#<index> is a placeholder for whatever will be referred to as index

@app.route('/orders/<index>')
def single_order(index):
    chosen_order = orders[int(index)]
    return render_template('order.html', order=chosen_order) #whatever object is in chosen_order will be known as order in the template