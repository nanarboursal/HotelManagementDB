import sqlite3
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from db import Executer

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/')
def index():
    print("yoyo")
    return "Hotel Management backend up and running!"


@app.route("/api/guest", methods=["GET"])
def get_guest():
    ex = Executer("project_db.sqlite")

    data = ex.fetch_data("GUEST")
    print("guest data:")
    print(data)

    ex.commit()
    ex.close_connection()

    return jsonify(data[-1])


@app.route("/api/employee", methods=["GET"])
def get_employee():
    ex = Executer("project_db.sqlite")

    data = ex.fetch_data("EMPLOYEE")
    print("employee data:")
    print(data)

    ex.commit()
    ex.close_connection()

    return jsonify(data[-1])


@app.route("/api/billing", methods=["GET"])
def get_credit_card():
    ex = Executer("project_db.sqlite")

    data = ex.fetch_data("CREDIT_CARD")
    print("CREDIT_CARD data:")
    print(data)

    ex.commit()
    ex.close_connection()

    return jsonify(data[-1])
