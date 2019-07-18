import React from "react";
import Loader from "../Loader/Loader";
import "./WeatherItem.css";
import rain from "../now_weather_icons/rain.png";
import cloudy from "../now_weather_icons/cloudy.png";
import sleet from "../now_weather_icons/sleet.png";
import snow from "../now_weather_icons/snow.png";
import fog from "../now_weather_icons/fog.png";
import wind from "../now_weather_icons/Windy.png";
import clearNight from "../now_weather_icons/night.png";
import clearDay from "../now_weather_icons/sunny.png";
import partlyCloudyNight from "../now_weather_icons/night_partly_cloudy.png";
import partlyCloudyDay from "../now_weather_icons/cloudy_s_sunny.png";
import moment from "moment";

const WeatherItem = ({ forecast }) => {
  let currentDay = moment().day();

  let weatherIcons = {
    rain: rain,
    cloudy: cloudy,
    sleet: sleet,
    snow: snow,
    fog: fog,
    wind: wind,
    "clear-night": clearNight,
    "clear-day": clearDay,
    "partly-cloudy-night": partlyCloudyNight,
    "partly-cloudy-day": partlyCloudyDay
  };

  return forecast.data === undefined ? (
    <Loader className="weatherItem" />
  ) : (
    <div className="weatherItem">
      <div className="todayContainer">
        <p className="current">Currently: {forecast.data.currently.summary}</p>
        <h2 className="temp">
          {Math.round(forecast.data.currently.temperature)}
          {"\u00b0F"}
        </h2>
        <img
          src={weatherIcons[forecast.data.currently.icon]}
          alt={forecast.data.currently.icon}
          className="currentWeatherImage"
        />
      </div>

      <div className="weekContainer">
        <div className="dayOfWeek">
          <p>Today</p>
          <img
            src={weatherIcons[forecast.data.currently.icon]}
            alt={forecast.data.currently.icon}
          />
          <p>
            {Math.round(forecast.data.currently.temperature)}
            {"\u00b0F"}
          </p>
        </div>

        <div className="dayOfWeek">
          <p>
            {moment(currentDay)
              .add(1, "d")
              .format("dddd")}
          </p>
          <img
            src={weatherIcons[forecast.data.daily.data[1].icon]}
            alt={forecast.data.daily.data[1].icon}
            className="currentWeatherImage"
          />
          <p>
            {Math.round(forecast.data.daily.data[1].temperatureHigh)}
            {"\u00b0F"}
          </p>
        </div>

        <div className="dayOfWeek">
          <p>
            {moment(currentDay)
              .add(2, "d")
              .format("dddd")}
          </p>
          <img
            src={weatherIcons[forecast.data.daily.data[2].icon]}
            alt={forecast.data.daily.data[2].icon}
            className="currentWeatherImage"
          />
          <p>
            {Math.round(forecast.data.daily.data[2].temperatureHigh)}
            {"\u00b0F"}
          </p>
        </div>

        <div className="dayOfWeek">
          <p>
            {moment(currentDay)
              .add(3, "d")
              .format("dddd")}
          </p>
          <img
            src={weatherIcons[forecast.data.daily.data[3].icon]}
            alt={forecast.data.daily.data[3].icon}
            className="currentWeatherImage"
          />

          <p>
            {Math.round(forecast.data.daily.data[3].temperatureHigh)}
            {"\u00b0F"}
          </p>
        </div>

        <div className="dayOfWeek">
          <p>
            {moment(currentDay)
              .add(4, "d")
              .format("dddd")}
          </p>
          <img
            src={weatherIcons[forecast.data.daily.data[4].icon]}
            alt={forecast.data.daily.data[4].icon}
            className="currentWeatherImage"
          />
          <p>
            {Math.round(forecast.data.daily.data[4].temperatureHigh)}
            {"\u00b0F"}
          </p>
        </div>
      </div>
      <a href="https://darksky.net/poweredby/" className="darkSkyLink">
        Powered by Dark Sky
      </a>
    </div>
  );
};

export default WeatherItem;
