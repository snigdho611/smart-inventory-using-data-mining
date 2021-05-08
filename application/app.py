from flask import Flask, render_template, url_for
from flask_mysqldb import MySQL 
#import pandas as pd

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

app.run(host='localhost', port=5000)