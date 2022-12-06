import sqlite3
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from db import Executer
import math

app = Flask(__name_, static_url_path='/')
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


@app.route("/api/reservation", methods=["GET"])
def get_reservation():
    ex = Executer("shipping_db.sqlite")

    data = ex.fetch_data("RESERVATION")
    print("RESERVATION data:")
    print(data)

    ex.commit()
    ex.close_connection()

    return jsonify(data[-1])


@app.route("/api/creditcard", methods=["GET"])
def get_creditcard():
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
                   (request.form["Reservation_ID"],
                    request.form["No_Rooms"],
                    request.form["Guest_ID"],
                    request.form["Credit_Card_ID"],
                    request.form["No_Guests"],
                    request.form["Preferences"],
                    request.form["Booking_Date"],
                    request.form["Booking_Time"],
                    request.form["Reservation_Start_Date"],
                    request.form["Reservation_End_Date"],
                    request.form["No_Nights"]),
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
                   (request.form["Credit_Card_ID"],
                    request.form["Card_Number"],
                    request.form["Card_Name"],
                    request.form["Card_Type"],
                    request.form["Expiration_Date"]),
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

    guestID = request.form["guest_ID"]
    firstname = request.form["first_name"]
    lastname = request.form["last_name"]
    address = request.form["address"]
    email = request.form["email"]
    phonenumber = request.form["phone_number"]

    print(guestID)

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
