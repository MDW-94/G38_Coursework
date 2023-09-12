from flask import Flask, render_template, request, redirect

from repositories import user_repository
from repositories import task_repository
from models.user import User

from flask import Blueprint

users_blueprint = Blueprint("users", __name__)


# RESTful CRUD Routes

# GET index
@users_blueprint.route("/users", methods=['GET'])
def users():
    users = user_repository.select_all()
    return render_template("users/index.html", all_users = users)

# GET new user // houses our user input form
@users_blueprint.route('/users/new')
def new_user():
    users = user_repository.select_all()
    return render_template("users/new.html", all_users=users)

# Create New User POST

@users_blueprint.route("/users", methods=['POST'])
def create_user():
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    # id = request.form['id']
    user = User(first_name, last_name)
    user_repository.save(user)
    return redirect('/users')

@users_blueprint.route('/users/<id>', methods=['GET'])
def show_user(id):
    user = user_repository.select(id)
    return render_template("users/show.html", user=user)

#  Edit User - GET /users/<id>/edit

@users_blueprint.route('/users/<id>/edit', methods=['GET'])
def edit_user(id):
    user = user_repository.select(id)
    return render_template('users/edit.html', user=user)

#  Update /users/<id>

@users_blueprint.route('/users/<id>', methods=['POST'])
def update_user(id):
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    user = User(first_name, last_name, id)
    user_repository.update(user)
    return redirect('/users')

#  Delete '/users/<id>'

@users_blueprint.route('/users/<id>/delete', methods=['POST'])
def delete_user(id):
    user_repository.delete(id)
    return redirect('/users')

