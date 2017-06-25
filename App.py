#! /usr/bin/python
import sqlite3

import hashlib

from operator import itemgetter

from flask import Flask
app = Flask(__name__)

@app.route('/1/')
def err1():
    return render_template("1.html")

@app.route('/2/')
def err2():
    return render_template("2.html")

@app.route('/3/')
def err3():
    return render_template("3.html")

@app.route('/4/')
def err1():
    return render_template("4.html")

@app.route('/')
def page0():
    return render_template("index.html")

@app.route('/signuppg/')
def page1():
    return render_template("signup.html")

@app.route('/signup/')
def write():
    if request.method == 'POST':
        user = request.form['uuid']
        firstname=request.form['firstname']
        lastname=request.form['lastname']
        username=request.form['username']
        password=request.form['password']
        password2=request.form['confirmpwd']
        if password != password2:
            return redirect('/1/')
        else:
            db = sqlite3.connect("data/master.db", check_same_thread = False)
            c = db.cursor()
            
            c.execute('SELECT Username FROM master WHERE Username = ?' , (username,))
        
            if len(c.fetchall()) > 0:
                return redirect('/2/')
               
            wr=open('data/'+username+'.db','w')
            wr.write('')
            wr.close()
            passw = password.encode('utf-8')
            hash_pass = hashlib.sha256(passw)
            hex_dig = hash_pass.hexdigest()
            
            c.execute("INSERT INTO master VALUES (?,?,?)", (username,firstname+" "+lastname,hex_dig))
            db.commit()
            return redirect('login')

@app.route('/loginpg/')
def page2():
    return render_template("login.html")

@app.route('/login/', methods=['GET', 'POST'])
def login():
        if request.method == 'POST':
        user = request.form['uuid']
        db = sqlite3.connect("data/master.db", check_same_thread = False)
        c = db.cursor()
        user = request.form['uuid']
        username=request.form['username']
        password=request.form['password']
        passw = password.encode('utf-8')
        hash_pass = hashlib.sha256(passw)
        hex_dig = hash_pass.hexdigest()
             
        c.execute('SELECT Username FROM master WHERE Username = ?', (username,))

        if len(c.fetchall()) > 0:
            c.execute('SELECT Username FROM master WHERE Username = ? AND Password = ?', (username, hex_dig,))
            if len(c.fetchall()) > 0:
                return redirect('/play/')
            else:
                return redirect('/3/')
        else:
            return redirect('/4/')

@app.route('/about/')
def page3():
    return render_template("about.html")

@app.route('/play/')
def page4():
    return render_template("play.html")


