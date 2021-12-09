import React, { useState, useEffect } from "react";
import Country from './components/Country';
import axios from "axios";

const App = () => {
  const [country, setCountry] = useState([]);
 

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((response) => {
      setCountry(response.data);
    });
  }, []);

  

  return (
    <div>
     
     
        <Country countries={country}></Country>  
    </div>
  );
};

export default App;
