from flask import Blueprint
from flask import render_template
from flask import current_app
from models.order_list import catalogue


orders_blueprint = Blueprint ("order", __name__)

@orders_blueprint.route("/catalogue")
def index():
    return render_template('index_order.html', title="Matthew's Catalogue", catalogue = catalogue)

# @orders_blueprint.route(f"/catalogue/{catalogue.return_order_name()}")
# def index():
#     return render_template('order_item.html', 
#                             title=f"Matthew's Catalogue: {catalogue.return_order_name()}", 
#                             catalogue = catalogue)

@orders_blueprint.route("/catalogue/<index>")
def show_catalogue_item(index):
        chosen_order = catalogue[int(index)]
        return render_template('order_item.html', 
                               title=f"Matthew's Catalogue: Item {int(index) + 1}", 
                               order = chosen_order, catalogue = catalogue )



# after doing this we need to make reference to this in the app.py file

#### how to get a GET route?
# def get_bp_urls(blueprint):
#     from flask import Flask
#     temp_app = Flask(__name__) 
#     temp_app.register_blueprint(blueprint)
#     return [str(p) for p in temp_app.url_map.iter_rules()]