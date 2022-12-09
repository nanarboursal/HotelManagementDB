import sqlite3
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from db import Executer
import math

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/')
def index():
    print("yoyo")
    return "Hotel Management backend up and running!"


@app.route("/api/guest", methods=["GET"])
def get_guest():
    ex = Executer("shipping_db.sqlite")

    data = ex.fetch_data("GUEST")
    print("guest data:")
    print(data)

    ex.commit()
    ex.close_connection()

    return jsonify(data[-1])


@app.route("/api/employee", methods=["GET"])
def get_employee():
    ex = Executer("shipping_db.sqlite")

    data = ex.fetch_data("EMPLOYEE")
    print("employee data:")
    print(data)

    ex.commit()
    ex.close_connection()

    return jsonify(data[-1])

@app.route("/api/employee/customer", methods=["GET"])
def get_employee_customer():
    ex = Executer("shipping_db.sqlite")

    data = ex.fetch_data("Guest_View_Employee2")
    print("employee data:")
    print(data)

    ex.commit()
    ex.close_connection()

    return jsonify(data[-1])

@app.route("/api/billing", methods=["GET"])
def get_credit_card():
    ex = Executer("shipping_db.sqlite")

    data = ex.fetch_data("CREDIT_CARD")
    print("CREDIT_CARD data:")
    print(data)

    ex.commit()
    ex.close_connection()

    return jsonify(data[-1])


@app.route("/api/reservation/post", methods=["POST"])
def insert_reservation():
    ex = Executer("shipping_db.sqlite")

    ex.insert_into("reservation",
                   (request.get_json()["Reservation_ID"],
                    request.get_json()["No_Rooms"],
                    request.get_json()["Guest_ID"],
                    request.get_json()["Credit_Card_ID"],
                    request.get_json()["No_Guests"],
                    request.get_json()["Preferences"],
                    request.get_json()["Booking_Date"],
                    request.get_json()["Booking_Time"],
                    request.get_json()["Reservation_Start_Date"],
                    request.get_json()["Reservation_End_Date"],
                    request.get_json()["No_Nights"]),
                   columns=None)

    ex.commit()
    ex.close_connection()

    return jsonify({"status": 200,
                    "success": True,
                    "error": None})


@app.route("/api/creditcard/post", methods=["POST"])
def insert_creditcard():
    ex = Executer("shipping_db.sqlite")

    ex.insert_into("CREDIT_CARD",
                   (request.get_json()["Credit_Card_ID"],
                    request.get_json()["Card_Number"],
                    request.get_json()["Card_Name"],
                    request.get_json()["Card_Type"],
                    request.get_json()["Expiration_Date"]),
                   columns=None)

    ex.commit()
    ex.close_connection()

    return jsonify({"status": 200,
                    "success": True,
                    "error": None})


@app.route("/api/guest/post", methods=["POST"])
def insert_guest():
    ex = Executer("shipping_db.sqlite")
    print("hellloo")
    print("")
    print(request.get_json()["guest_ID"])
    guestID = request.get_json()["guest_ID"]
    firstname = request.get_json()["first_name"]
    lastname = request.get_json()["last_name"]
    address = request.get_json()["address"]
    email = request.get_json()["email"]
    phonenumber = request.get_json()["phone_number"]

    ex.insert_into("GUEST",
                   (guestID,
                    firstname,
                    lastname,
                    address,
                    email,
                    phonenumber),
                   columns=None)

    ex.commit()
    ex.close_connection()

    return jsonify({"status": 200,
                    "success": True,
                    "error": None})
