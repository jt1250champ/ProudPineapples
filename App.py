#! /usr/bin/python
import sqlite3

import hashlib

from operator import itemgetter

from flask import Flask
app = Flask(__name__)

@app.route('/')
def page0:
    return render_template("index.html")

@app.route('/signup/')
def page1:
    return render_template("signup.html")

@app.route('/loginpg/')
def page2:
    return render_template("login.html")

@app.route('/login/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        user = User.get(request.form['uuid'])

        if user and hash_password(request.form['password']) == user._password:
            login_user(user, remember=True)
            return redirect('/home/')
        else:
            return abort(401)  # 401 Unauthorized
    else:
        return abort(405)  # 405 Method Not Allowed

@app.route('/about/')
def page3:
    return render_template("about.html")

@app.route('/play/')
def page4:
    return render_template("play.html")




header='Content-type: text/html\n\n'

bad_login='<p style="color:red;" align="center">ERROR: Passwords do not match.</p>'
bad_login2='<p style="color:red;" align="center">ERROR: Username taken.</p>'
bad_login3='<p style="color:red;" align="center">ERROR: Incorrect password.</p>'
bad_login4='<p style="color:red;" align="center">ERROR: Username not found.</p>'
image='https://cdn2.iconfinder.com/data/icons/flat-avatars-1/512/Percy-512.png'

def enter():
    form=cgi.FieldStorage()

    if "submit_signup" in form:
        firstname=form.getvalue('firstname')
        lastname=form.getvalue('lastname')
        username=form.getvalue('username')
        password=form.getvalue('password')
        password2=form.getvalue('confirmpwd')
        if password != password2:
            print header
            return updateFile('signup.html','<!--bad_login-->',bad_login)
        else:
            db = sqlite3.connect("data/master.db", check_same_thread = False)
            c = db.cursor()
            
            c.execute('SELECT Username FROM master WHERE Username = ? , (username,))
        
            if len(c.fetchall()) > 0:
                print header
                return updateFile('signup.html','<!--bad_login-->',bad_login2)
               
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
            c.execute('CREATE TABLE person (Friends TEXT, Game BOOLEAN, Turn BOOLEAN, Stickers INT, Streak INT);')
            
            #profile=readFile('profile.html')
            #profile=profile.replace('!NAME',firstname.upper())
            #profile=profile.replace('!username',username)
            
            print header
            print readFile("play.html")
            return

    if "submit_login" in form:
        username=form.getvalue('username')
        password=form.getvalue('password')
        passw = password.encode('utf-8')
        hash_pass = hashlib.sha256(passw)
        hex_dig = hash_pass.hexdigest()
        
        db = sqlite3.connect("data/master.db", check_same_thread = False)
        c = db.cursor()
            
        c.execute('SELECT Username FROM master WHERE Username = ?', (username,))

        if len(c.fetchall()) > 0:
            c.execute('SELECT Username FROM master WHERE Username = ? AND Password = ?', (username, hex_dig,))
            if len(c.fetchall()) > 0:
                print header
                print readFile('play.html')
                return 
            else:
                print header
                return updateFile('login.html','<!--bad_login-->',bad_login3)
        else:
            print header
            return updateFile('login.html','<!--bad_login-->',bad_login4)

def readFile(filename):
    try:
        f=open(filename,'rU')
        s=f.read()
        f.close()
    except:
        s=''
    return s

def updateFile(filename,old,new):
    file_string=readFile(filename)
    file_string=file_string.replace(old,new)
    print file_string

enter()
