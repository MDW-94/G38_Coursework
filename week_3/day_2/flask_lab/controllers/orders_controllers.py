from flask import Blueprint
from flask import render_template
from models.orders_list import orders
# from models.order import Order


orders_blueprint = Blueprint("orders", __name__)

@orders_blueprint.route('/orders')
def index():
    return render_template('orders.html', title="Mountain Books", subtitle="Our Books", orders_list=orders)

@orders_blueprint.route('/orders/<chosen_order>')
def show_order(chosen_order):
    chosen_order1 = orders.any(chosen_order)
    
    
    return render_template('order_chosen.html', title=chosen_order1, orders_list=orders )