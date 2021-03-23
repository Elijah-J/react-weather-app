import React from "react";

import CloudIcon from "@material-ui/icons/CloudOutlined";
import SunIcon from "@material-ui/icons/WbSunnyOutlined";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";

import {
  mdiWeatherRainy as RainIcon,
  mdiWeatherSnowy as SnowIcon,
  mdiWeatherLightningRainy as ThunderstormIcon,
  mdiWeatherFog as AtmosphereIcon,
} from "@mdi/js";

import "../WeatherDisplay.css";

const WeatherDisplay = (props) => {
  const { data } = props;
  const { name, weatherMessage, temperature } = data;

  return (
    <div className="WeatherDisplay">
      <Typography variant="h1">{name}</Typography>

      {weatherMessage === "Atmosphere" ? (
        <SvgIcon style={{ fontSize: "4.5rem" }}>
          <path d={AtmosphereIcon} />
        </SvgIcon>
      ) : null}

      {weatherMessage === "Clear" ? (
        <SunIcon style={{ fontSize: "4.5rem" }}></SunIcon>
      ) : null}

      {weatherMessage === "Clouds" ? (
        <CloudIcon style={{ fontSize: "4.5rem" }}></CloudIcon>
      ) : null}

      {weatherMessage === "Rain" || weatherMessage === "Drizzle" ? (
        <SvgIcon style={{ fontSize: "4.5rem" }}>
          <path d={RainIcon} />
        </SvgIcon>
      ) : null}

      {weatherMessage === "Snow" ? (
        <SvgIcon style={{ fontSize: "4.5rem" }}>
          <path d={SnowIcon} />
        </SvgIcon>
      ) : null}

      {weatherMessage === "Thunderstorm" ? (
        <SvgIcon style={{ fontSize: "4.5rem" }}>
          <path d={ThunderstormIcon} />
        </SvgIcon>
      ) : null}

      <Typography variant="body1">{weatherMessage}</Typography>
      <Typography variant="body1">{temperature}℉</Typography>
    </div>
  );
};

export default WeatherDisplay;
