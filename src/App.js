import "./App.css";
import { Alert } from "@material-ui/lab";
import { Snackbar } from "@material-ui/core";
import { useFetchWeatherData } from "./hooks/useFetchWeatherData";
import React, { useState } from "react";
import WeatherDisplay from "./components/WeatherDisplay";
import WeatherSearchBar from "./components/WeatherSearchBar";

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState("Seattle");
  const [open, setOpen] = useState(false);

  const dataForFetching = { location, setWeatherData, setOpen };

  const handleSubmit = (value) => {
    setLocation(value);
  };

  useFetchWeatherData(dataForFetching);

  return (
    <div class="App">
      <WeatherDisplay data={weatherData}></WeatherDisplay>
      <WeatherSearchBar
        onSubmit={(value) => handleSubmit(value)}
      ></WeatherSearchBar>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="error">Error: Unable to fetch data</Alert>
      </Snackbar>
    </div>
  );
};

export default App;
