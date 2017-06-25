from flask import Flask, render_template, request, session, redirect
import sqlite3, hashlib
from operator import itemgetter


app = Flask(__name__)
app.secret_key = "teehee"

@app.route('/1/')
def err1():
    return render_template("templates/1.html")

@app.route('/2/')
def err2():
    return render_template("templates/2.html")

@app.route('/3/')
def err3():
    return render_template("templates/3.html")

@app.route('/4/')
def err4():
    return render_template("templates/4.html")

@app.route('/')
def page0():
    return render_template("templates/index.html")

@app.route('/signuppg/')
def page1():
    return render_template("templates/signup.html")

@app.route('/signup/', methods = ["POST"])
def writeit():

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
            
            db = sqlite3.connect("data/"+username+".db", check_same_thread = False)
            c = db.cursor()
            
            c.execute("CREATE TABLE person (Friends TEXT, Game BOOLEAN, Turn BOOLEAN, Stickers INT, Streak INT)")
            db.commit()

            return redirect('/loginpg/')
        

@app.route('/loginpg/')
def page2():
    return render_template("templates/login.html")

@app.route('/login/', methods=['POST'])
def login():
        db = sqlite3.connect("data/master.db", check_same_thread = False)
        c = db.cursor()
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
    return render_template("templates/about.html")

@app.route('/play/')
def page4():
    return render_template("templates/play.html")

if __name__ == '__main__':
    app.debug = True
    app.run()
