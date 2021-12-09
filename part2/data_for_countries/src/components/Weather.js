import React, { useEffect, useState } from "react";
import axios from "axios";


const Weather = ({country}) =>{

    const[weather, setWeather] = useState()
    

   
    useEffect( () =>{

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${process.env.REACT_APP_MY_API_KEY}`)
        .then((response) => {
        setWeather(response.data)
        } 
         )
    
    } , [country])    


    if(weather){
    return (
        <div>
            <h2>Wheather in {weather.name}</h2>
            <p>temperature: {weather.main.temp} Celsius</p>
            <p>{weather.weather[0].description}</p>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
            <p> Wind: {weather.wind.speed} m/s </p>
        </div>
    )
    }
    else{
        return(
            <div>
                Hello!
            </div>
        )
    }
}

export default Weather