import sqlite3
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import db

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def index():
    return "Hotel Management backend up and running!"