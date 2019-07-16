import React from "react";
import "./WeatherItem.css";
import "../weather-icons-master/css/weather-icons.css";

const WeatherItem = ({ forecast }) => {
  return forecast.data === undefined ? (
    <div>Loading...</div>
  ) : (
    <div>
      <div className="weatherItem">
        <img src="" alt="" />
        <div className="container">
          <p className="current">
            Currently: {forecast.data.currently.summary}
          </p>
          <p />
          <h2 className="temp">
            {Math.round(forecast.data.currently.temperature)}
            {"\u00b0F"}
          </h2>
          <a href="https://darksky.net/poweredby/" className="darkSkyLink">
            Powered by Dark Sky
          </a>
        </div>
      </div>
    </div>
  );
};

export default WeatherItem;
