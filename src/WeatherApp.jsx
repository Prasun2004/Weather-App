import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Rajshthan",
        temp:45,
        tempMin :45,
        tempMax :55,
        humidity :55,
        feelsLike:58,
        weather:45,
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    };
    return (
        <div style={{textAlign:"center"}}>
            <h1>Weather app</h1>
            <SearchBox updateInfo={updateInfo}/>
            <br></br>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}