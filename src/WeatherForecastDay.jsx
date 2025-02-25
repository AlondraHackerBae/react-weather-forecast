import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    return Math.round(props.data.temperature.maximum);
  }
  function minTemperature() {
    return Math.round(props.data.temperature.minimum);
  }
  function forecastDay() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecastDay">{forecastDay()}</div>
      <WeatherIcon code={props.data.condition.icon} size={36} />
      <div className="WeatherForcastTemperatures">
        <span className="WeatherTemp-max">
          <strong> {maxTemperature()}° </strong>
        </span>
        <span className="WeatherTemp-min">| {minTemperature()}°</span>
      </div>
    </div>
  );
}
