from flask import Flask ,request, jsonify
from sqlalchemy import Integer, Enum
from flask_sqlalchemy import SQLAlchemy
from flask_heroku import Heroku
from flask_cors import CORS,cross_origin
from flask.helpers import send_from_directory
import enum
import datetime
import os
import re
import requests
import json




app=Flask(__name__,static_folder='brewery/build',static_url_path='')
CORS(app)




   
    

@app.route("/breweries/search",methods=["GET"])
@cross_origin()
def home():
    list = request.args.get('query', None)
    if(list):
        url='https://api.openbrewerydb.org/breweries/search?query='+ str(list)
        breweries=requests.get(url)
        data=breweries.content
        l=[]
        brew=json.loads(data)
        brew2=json.loads(data)
        for i in range(len(brew2)):
            brew[i]=dict(brew[i])
        return jsonify(brew)

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == "__main__":
    app.debug=True
    app.run()