import React, { useEffect, useState } from "react";
import FullCountry from "./CountryInfo";





const DisplayCountry = ({countries, searchTerm}) =>{

    const[countryList, setCountryList] = useState(countries);



    useEffect(()=>{
        setCountryList(countries.filter(
            country => country.name.toLowerCase().includes(searchTerm.toLowerCase())
        ))
    
    },[searchTerm])
    

    const showSingleCountry = (c) =>{
        setCountryList(countries.filter(country => country.name.toLowerCase() === c.name.toLowerCase()))
    }

    
    if(countryList.length > 10){
     
        return (
            <div>
             {searchTerm == "" ? "" : 'Too many countries'}
             </div>
             );

    } else if(countryList.length === 1){
        
        return ( <div>
            <FullCountry country={countryList[0]}></FullCountry>
        </div>)
    } 
    
    else {
    
    return(
        <div>
            {countryList.map(country => 
            <div>
            <p key={country.numericCode}>{country.name}</p>
            <button onClick={() => showSingleCountry(country)}>show</button>
            </div>
            )}
        </div>
    )
}
        
}

export default DisplayCountry;