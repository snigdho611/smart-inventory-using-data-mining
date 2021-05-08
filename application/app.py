from flask import Flask, render_template, url_for
from flask_mysqldb import MySQL 
import pandas as pd

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'sss'

mysql = MySQL(app)
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/data')
def data():
    my_cursor = mysql.connection.cursor()
    my_cursor.execute("SELECT * FROM stock_data")
    data = my_cursor.fetchall()
    data=[['tom', 10], ['nick', 15], ['juli', 14]]
    data=pd.DataFrame(data, columns = ['Name', 'Age'])
    #return str(data[0][1])
    return render_template('data.html', data=data)


app.run(host='localhost', port=5000)