import "../WeatherDisplay.css";
import CloudIcon from "@material-ui/icons/CloudOutlined";
import React from "react";
import SunIcon from "@material-ui/icons/WbSunnyOutlined";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";
import {
  mdiWeatherRainy as RainIcon,
  mdiWeatherSnowy as SnowIcon,
  mdiWeatherLightningRainy as ThunderstormIcon,
  mdiWeatherFog as AtmosphereIcon,
} from "@mdi/js";

const WeatherDisplay = (props) => {
  const { data } = props;
  const { name, weatherMessage, temperature } = data;

  const styleObj = { fontSize: "4.5rem" };

  return (
    <div className="WeatherDisplay">
      <Typography variant="h1">{name}</Typography>

      {weatherMessage === "Atmosphere" ? (
        <SvgIcon style={styleObj}>
          <path d={AtmosphereIcon} />
        </SvgIcon>
      ) : null}

      {weatherMessage === "Clear" ? <SunIcon style={styleObj}></SunIcon> : null}

      {weatherMessage === "Clouds" ? (
        <CloudIcon style={styleObj}></CloudIcon>
      ) : null}

      {weatherMessage === "Rain" || weatherMessage === "Drizzle" ? (
        <SvgIcon style={styleObj}>
          <path d={RainIcon} />
        </SvgIcon>
      ) : null}

      {weatherMessage === "Snow" ? (
        <SvgIcon style={styleObj}>
          <path d={SnowIcon} />
        </SvgIcon>
      ) : null}

      {weatherMessage === "Thunderstorm" ? (
        <SvgIcon style={styleObj}>
          <path d={ThunderstormIcon} />
        </SvgIcon>
      ) : null}

      <Typography variant="body1">{weatherMessage}</Typography>
      <Typography variant="body1">{temperature}℉</Typography>
    </div>
  );
};

export default WeatherDisplay;
