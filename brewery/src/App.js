import logo from './logo.svg';
import './App.css';
import React, { useState ,useEffect} from 'react';
import Message from "./components/Message";
import {Container,Card} from "react-bootstrap";


<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

function App() {

  function display({val}) {
    alert(val.name);
  }
  const [num,setNum]=useState([])
  const [num1,setNum1]=useState("")
  const [input, setInput] = useState("");
  
  const clear = () => {
    setNum([]);
    setInput("");
};
  const brewery = () => {
    fetch(`https://hidden-tor-29864.herokuapp.com/breweries/search?query=${input}`)
        .then((response) => response.json())
        .then((data) => {
                setNum(data); // Set the breweries array from the response
            }
        )
        .catch((error) => {
            console.error(error.message);
            alert("error");
        });
};
  const brew = num.map(val =>(
    <>

      <Card style={{ width: "22rem" }} className="element">
        <Card.Body>
          <Card.Title style={{ color: "red" }}>{val.name} </Card.Title>
          <Card.Text style={{ color: "red" }}>
          {"City : " + val.city}
          </Card.Text>
          <Card.Text >
            {"State : " +val.state}
          </Card.Text>
          </Card.Body>
        
        <div>
        {val.street != null ? 
          <a href={ "http://maps.google.com/?q="+ val.street+", " +val.city +", " +val.state +" " +val.postal_code}>
          {val.street+ ", " +val.city +", " +val.state +" " +val.postal_code}</a>: 
          <a href={ "http://maps.google.com/?q="+ val.street+", " +val.city +", " +val.state +" " +val.postal_code}>
          {val.city +", " +val.state +" " +val.postal_code}</a>
        }  
        </div>
        <Card.Text>
          {"Phone : " + val.phone}
        </Card.Text>
       <a href ={val.website_url}>
       {val.website_url}
       </a>
       <Card.Text>
       {"Type : " + val.brewery_type}
       </Card.Text>
        
      </Card>
     
     </> 
  ));
  
  return (
<div className="App"  >
  <h1> Brewery Listings </h1>
  <input
     type="text"
     placeholder="Search..."
     value={input}
     onChange={(event)=>{
       setInput(event.target.value);
     }}
     />
      <button
        className="search"
        type='button'
        id='button1'
        onClick={brewery}
        >
        Search
        </button>
        <button
        className="search"
          type='button'
          id='button2'
          onClick={clear}
          >
          Remove
          </button>
        <div className='lists'>
      
        <ul className='l'>{num && brew}</ul>
                    
        </div>

  
</div>
  );
}

export default App;
