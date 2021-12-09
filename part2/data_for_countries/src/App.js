import React, { useState, useEffect } from "react";
import Country from './components/Country';
import axios from "axios";

const App = () => {
  const [country, setCountry] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((response) => {
      setCountry(response.data);
    });
  }, []);

  

  return (
    <div>
      <label>find countries</label>
      <input type="text" onChange={(event) => setSearchTerm(event.target.value)}></input>
     
        <Country countries={country} searchTerm={searchTerm}></Country>  
    </div>
  );
};

export default App;
