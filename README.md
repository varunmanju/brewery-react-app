A brewery react app that implements search functionality.
The user can search the breweries based on the location like san diego, address, state,city and number.

The code is hosted on this url:

https://hidden-tor-29864.herokuapp.com/

The front page appears like this 
(https://user-images.githubusercontent.com/82792752/125203075-7885bd80-e294-11eb-8511-fe21cb1fd1c9.png)

The user can type his search query like the place of the brewery Examle place: San Diego and the code returns the list of breweries that have san diego in the text box.Sample search of san doego look like this. Please dont forget to click the search button after typing the search query.

![Screen Shot 2021-07-11 at 10 10 43 PM](https://user-images.githubusercontent.com/82792752/125203133-dc0feb00-e294-11eb-8d12-a56d28b56b64.png)

The user also has the option to click on the Remove button after the user clicks Search and gets a list of breweries based on the search query text.Once the remove button is clicked then the screen is empty with no breweries.

The user can also click on the address and the user is redirected to the google maps that shows the exact location of the place based on the address.

Also on clicking on the website link the user is redirected to the brewery website.

Code repo:

The code repo comprises of the app.py backend flask application and the frontend React application code ( App.js).

In the app.py file there is an @app.route method that implements the GET api call.The frontend react application calls this api vis the fetch method url 
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
