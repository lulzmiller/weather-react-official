import Searchbar from "./Searchbar";
import Loader from "react-loader-spinner";
import { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [weather, setWeather] = useState(null);

  function handleResponse(response) {
    setWeather({
      name: `${response.data.name}`,
      temp: response.data.main.temp,
      desc: `${response.data.weather[0].description}`,
      humd: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
    console.log(weather);
  }

  let apiKey = `50e4b4292e10c828c5707dbac9bf7cab`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleResponse);
  if (weather) {
    return (
      <div className="Weather">
        <Searchbar />
        <ul>
          <li> Temperature: {weather.temp} </li>
          <li> Humidity: {weather.humd}% </li>
          <li> Wind speed: {weather.wind} </li>
          <li> Description: {weather.desc} </li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <Loader
        type="Hearts"
        color="#00BFFF"
        height={400}
        width={400}
        timeout={3000} //3 secs
      />
    );
  }
}
