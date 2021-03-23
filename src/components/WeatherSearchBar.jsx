import React from "react";

import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

const WeatherSearchBar = (props) => {
  const { onSubmit } = props;

  const prepareInput = (input) => {
    input = input.trim();
    input = input.replace(/\s+/g, " ");
    input = input.replace(/\s/g, "+");
    return input;
  };

  return (
    <div className="WeatherSearchBar">
      <TextField
        label="Search a City"
        size="small"
        onKeyUp={(e) => {
          if (e.key === "Enter") onSubmit(prepareInput(e.target.value));
        }}
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
