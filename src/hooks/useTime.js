import { useEffect, useState } from "react";

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

export const useTime = () => {
  console.log("useTime");

  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [dayNumber, setDayNumber] = useState(null);
  const [dayName, setDayName] = useState(null);
  const [month, setMonth] = useState(null);
  const [amPm, setAmPm] = useState(null);

  let timeDate;
  let minutesV;
  let hoursV;
  let hoursIn12HrFormatV;
  let ampmV;

  let clear_time_out;
  let clear_interval;

  // get time at first render
  useEffect(() => {
    clear_time_out = setTimeout(() => {
      timeDate = new Date();
      minutesV = timeDate.getMinutes();
      hoursV = timeDate.getHours();
      hoursIn12HrFormatV = hoursV >= 13 ? hoursV % 12 : hoursV;
      ampmV = hoursV >= 12 ? "PM" : "AM";

      setAmPm(ampmV);
      setMonth(months[timeDate.getMonth()]);
      setDayName(days[timeDate.getDay()]);
      setDayNumber(timeDate.getDate());
      setHours(
        hoursIn12HrFormatV < 10 ? "0" + hoursIn12HrFormatV : hoursIn12HrFormatV
      );
      setMinutes(minutesV < 10 ? "0" + minutesV : minutesV);
      console.log("{setTimeOut}");
    }, 1);
  }, []);

  // change time each minute
  clear_interval = setInterval(() => {
    timeDate = new Date();
    minutesV = timeDate.getMinutes();
    hoursV = timeDate.getHours();
    hoursIn12HrFormatV = hoursV >= 13 ? hoursV % 12 : hoursV;
    hoursIn12HrFormatV=hoursIn12HrFormatV==0?12:hoursIn12HrFormatV
    ampmV = hoursV >= 12 ? "PM" : "AM";

    setAmPm(ampmV);
    setMonth(months[timeDate.getMonth()]);
    setDayName(days[timeDate.getDay()]);
    setDayNumber(timeDate.getDate());
    setHours(
      hoursIn12HrFormatV < 10 ? "0" + hoursIn12HrFormatV : hoursIn12HrFormatV
    );
    setMinutes(minutesV < 10 ? "0" + minutesV : minutesV);
  }, 60000);

  // destroy setTimeOut and setInterval
  useEffect(() => {
    return () => {
      clearTimeout(clear_time_out);
      clearInterval(clear_interval);
    };
  });
  
  return { hours, minutes, dayNumber, month, dayName, amPm };
};
