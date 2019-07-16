import React from "react";
import WeatherItem from "../WeatherItem/WeatherItem";
import "./WeatherFeed.css";

const WeatherFeed = props => {
  return (
    <div>
      <WeatherItem forecast={props.forecast} />
    </div>
  );
};

export default WeatherFeed;
