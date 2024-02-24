import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { DayDetails, DayPaper, WeatherImage } from "../styles";

const Day = ({ item }) => {
  // console.log("day");
  return (
    <DayPaper elevation={5}>
      <Typography>{new Date(item.dt*1000).toDateString()}</Typography>
      <DayDetails>
        <WeatherImage
          src={
            item
              ? "http://openweathermap.org/img/w/" +
                item.weather[0].icon +
                ".png"
              : "./images/background.jpg"
          }
          alt="Icon"
        />
        <Stack>
          <Typography>{Math.floor(item.temp.max - 273.15)}&#8451;</Typography>
          <Typography>{Math.floor(item.temp.min - 273.15)}&#8451;</Typography>
        </Stack>
        <Stack sx={{margin:"0px 5px"}}>
          <Typography>{item.weather[0].main}</Typography>
          <Typography>{item.wind_speed} m/s</Typography>
        </Stack>
      </DayDetails>
    </DayPaper>
  );
};

export default Day;
