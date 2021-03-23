import React from "react";

import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

const WeatherSearchBar = () => {
  return (
    <div className="WeatherSearchBar">
      <TextField
        label="Search a City"
        size="small"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon></SearchIcon>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default WeatherSearchBar;
