import React from "react";


const DisplayCountry = ({countries, searchTerm}) =>{

    const countriesToShow = countries.filter( country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    
    
    if(countriesToShow.length > 10){
        return (<p>Too many countries</p>)
    } else{
    
    return(
        <div>
            {countriesToShow.map(country => <p key={country.numericCode}>{country.name}</p>)}
        </div>
    )
}
        
}

export default DisplayCountry;