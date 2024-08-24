import React from "react";

function Weather({ weather }) { 
  if (!weather) {
    return <p>No weather data available.</p>;  
  }
  return (
    <div className="weather-info">
      <h2>{weather.name}</h2>
      <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
    </div>
  );
}

export default Weather;
