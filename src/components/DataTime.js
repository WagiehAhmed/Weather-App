import { Box } from "@mui/material";
import React, { useState } from "react";
import {
  ClockState,
  DateContainer,
  DateTimeContainer,
  TimeContainer,
} from "../styles";

const DataTime = ({ matches }) => {
  console.log("dataTime");

  //date and time needed states
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [dayNumber, setDayNumber] = useState(null);
  const [dayName, setDayName] = useState(null);
  const [month, setMonth] = useState(null);
  const [amPm, setAmPm] = useState(null);

  //needed variables
  let timeDate;
  let minutesV;
  let hoursV;
  let hoursIn12HrFormatV;
  let ampmV;

  // days
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // monthes
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // useEffect(() => {
  //   // get time for first render
  //    setTimeout(() => {
  //   timeDate = new Date();
  //   minutesV = timeDate.getMinutes();
  //   hoursV = timeDate.getHours();
  //   hoursIn12HrFormatV = hoursV >= 13 ? hoursV % 12 : hoursV;
  //   hoursIn12HrFormatV = hoursIn12HrFormatV == 0 ? 12 : hoursIn12HrFormatV;
  //   ampmV = hoursV >= 12 ? "PM" : "AM";

  //   setAmPm(ampmV);
  //   setMonth(months[timeDate.getMonth()]);
  //   setDayName(days[timeDate.getDay()]);
  //   setDayNumber(timeDate.getDate());
  //   setHours(
  //     hoursIn12HrFormatV
  //     // hoursIn12HrFormatV < 10 ? "0" + hoursIn12HrFormatV : hoursIn12HrFormatV
  //   );
  //   setMinutes(
  //     minutesV
  //     // minutesV < 10 ? "0" + minutesV : minutesV
  //   );

  //   }, 0);
  // }, []);

  // change time each minute
  
  setInterval(() => {
    timeDate = new Date();
    minutesV = timeDate.getMinutes();
    hoursV = timeDate.getHours();
    hoursIn12HrFormatV = hoursV >= 13 ? hoursV % 12 : hoursV;
    hoursIn12HrFormatV = hoursIn12HrFormatV === 0 ? 12 : hoursIn12HrFormatV;
    ampmV = hoursV >= 12 ? "PM" : "AM";

    setAmPm(ampmV);
    setMonth(months[timeDate.getMonth()]);
    setDayName(days[timeDate.getDay()]);
    setDayNumber(timeDate.getDate());
    setHours(
      hoursIn12HrFormatV
      // hoursIn12HrFormatV < 10 ? "0" + hoursIn12HrFormatV : hoursIn12HrFormatV
    );
    setMinutes(
      minutesV
      // minutesV < 10 ? "0" + minutesV : minutesV
    );
  }, 1000);

  return (
    <DateTimeContainer>
      <Box>
        <TimeContainer matches={matches}>
          {hours && minutes ? `${hours}:${minutes}` : ""}
        </TimeContainer>
        <ClockState matches={matches}>{amPm}</ClockState>
      </Box>
      <DateContainer matches={matches}>
        {dayName && dayNumber && month
          ? `${dayName} ${dayNumber}, ${month}`
          : ""}
      </DateContainer>
    </DateTimeContainer>
  );
};

export default DataTime;
