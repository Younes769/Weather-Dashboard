import React from "react";
import Weather from "./Weather";
import WeatherSearch from "./WeatherSearch";
import useFetchWeather from "../hooks/useFetchWeather";
import { useState } from "react";

export default function WeatherDashboard() {
  const [city, setCity] = useState("dubai");
  const { weather, loading } = useFetchWeather(city);

  return (
    <div>
      <WeatherSearch onSearch={setCity} />  
      {loading ? <p>Loading...</p> : <Weather weather={weather} />}
    </div>
  );
}
