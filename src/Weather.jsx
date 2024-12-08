import axios from "axios";
import {useState} from "react";


function Weather()
{
   const [city,setcity]=useState("")

   const[weather,setweather]=useState("")
   const[temp,settemp]=useState("")
   const[desc,setdesc]=useState("")

   function handleCity(evt)
   {
    setcity(evt.target.value)
   }

   function getWeather()
   {
    var weatherData=axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=68bd6acba5fd3a89eb091244147e10f7`)
    
    weatherData.then(function(success){
         console.log(success.data)
         setweather(success.data.weather[0].main)
         setdesc(success.data.weather[0].description)
         settemp(success.data.main.temp)
     })
}
    return(
      
      <div className="bg-blue-300" >
      <h1 className="text-blue-500 text-2xl text-center font-medium  ">Weather Report</h1>
      <p className="gap m-5 text-center ">I can give you a weather report about your city !</p>
      <div className=" text-justify mx-96 border border-black px-20 py-5 bg-white" >
      <input onChange={handleCity} type="text " placeholder="Enter your City name" className="border border-black gap-2  " ></input>
      
      <div>
      <button onClick={getWeather} className="bg-black text-white  p-2 rounded my-2 ">Get Report</button>
      <ul className="text-1xl font-bold">
        <li>Weather:{weather}</li>
        <li>Temperature:{temp}</li>
        <li>Description:{desc}</li>
      </ul>
      </div>
      </div>
      </div>
      
      
    )
} 
export default Weather;