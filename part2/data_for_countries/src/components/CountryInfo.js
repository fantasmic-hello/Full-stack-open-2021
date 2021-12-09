import React from "react";

const FullCountry = ({country}) =>{
    
    console.log("Full", country)
   
    return(
    <div>
        <h1>{country.name}</h1>
        <p>capitol {country.capital}</p>
        <p>population {country.population}</p>
        <h2>languages</h2>
       <ul>
            {country.languages.map(lang =>
                <li>{lang.name}</li> )}
        </ul>
        <img src={country.flag} width='200' height='200'></img> 
    </div>
    )
}

export default FullCountry