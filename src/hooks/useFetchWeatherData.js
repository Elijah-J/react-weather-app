import { useEffect } from "react";

export const useFetchWeatherData = (location, setWeatherData) => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const convertFromKelvinToFarenheit = (kelvinTemperature) => {
    return ((kelvinTemperature - 273.15) * 9) / 5 + 32;
  };

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`
      );

      const { name, main, weather } = await result.json();
      const { temp: temperature } = main;
      const { main: weatherMessage } = weather[0];

      setWeatherData({
        name,
        temperature: Math.round(convertFromKelvinToFarenheit(temperature)),
        weatherMessage,
      });
    }

    fetchData();
  }, [location, setWeatherData, apiKey]);
};
