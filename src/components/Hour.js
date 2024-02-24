import {Box, Typography } from "@mui/material";
import React from "react";
import { HourData, HourPaper, WeatherImage } from "../styles";

const Hour = ({item}) => {
  console.log("hour");
const d = new Date(item.dt*1000)
let hours = d.getHours();
let hoursIn12HrFormatV = hours >= 13 ? hours % 12 : hours;
hoursIn12HrFormatV=hoursIn12HrFormatV==0?12:hoursIn12HrFormatV;
hoursIn12HrFormatV = hours >= 12 ?hoursIn12HrFormatV+"PM" :hoursIn12HrFormatV+"AM";
  return (
    <Box >
      <HourPaper>
        <HourData>
          <WeatherImage 
           src={
            item
              ? "http://openweathermap.org/img/w/" +
                item.weather[0].icon +
                ".png"
              : "./images/background.jpg"
          }
          alt="Icon" />
          <Typography>{Math.floor(item.temp - 273.15)}&#8451;</Typography>
          <Typography>{item.weather[0].main}</Typography>
          <Typography>{item.wind_speed} m/s</Typography>
        </HourData>
      </HourPaper>
      <Typography sx={{textAlign:"center"}}>
      {hoursIn12HrFormatV} 
      </Typography>
    </Box>
  );
};

export default Hour;
