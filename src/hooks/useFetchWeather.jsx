import { useState, useEffect } from "react";
import axios from "axios";

function useFetchWeather(city) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWeather = async (city) => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d9a8181beb6136d5bd54e12f4d3d65f4`
        );
        console.log(res.data);
        setWeather(res.data);
      } catch (error) {
        console.error(error);
        setWeather(null);
      }
      setLoading(false);
    };
    fetchWeather(city);
  }, [city]);
  return { weather, loading };
}

export default useFetchWeather;
