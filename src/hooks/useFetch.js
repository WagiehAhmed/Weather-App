import { useState } from "react";
import { useAlertContext } from './useAlertContext';

export const useFetch = () => {
  const [loadingToDayWeather, setLoadingToDayWeather] = useState(false);
  const [loadingNextSevenDaysWeather, setLoadingNextSevenDays] =
    useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [toDayWeather, settoDayWeather] = useState(null);
  const [daily, setDaily] = useState(null);
  const [hourly, setHourly] = useState(null);

  const {alertDispatch} = useAlertContext()

  //api key
  const API_KEY = "49cc8c821cd2aff9af04c9f98c36eb74";

  const fetchToDayWeather = async (city_name = "cairo") => {
    //getting weather for today only
    try {
      setLoading(true);
      const toDayResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`
      );
      const toDayJson = await toDayResponse.json();
      if (!toDayResponse.ok) {
        alertDispatch({type:"ERROR",message:toDayResponse.statusText})
        setLoading(false);
      }
      if (toDayResponse.ok) {
        settoDayWeather(toDayJson);
      }
      if(toDayJson.coord){
        try {
          setLoading(true);
          const nextSevenDaysResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${toDayJson.coord.lat}&lon=${toDayJson.coord.lon}&appid=${API_KEY}`
          );
          const nextSevenDaysJson = await nextSevenDaysResponse.json();
          if (!nextSevenDaysResponse.ok) {
            alertDispatch({type:"ERROR",message:nextSevenDaysResponse.statusText})
            setLoading(false);
          }
          if (nextSevenDaysResponse.ok) {
            setDaily(nextSevenDaysJson.daily);
            setHourly(nextSevenDaysJson.hourly);
          }
        } catch (err) {
          alertDispatch({type:"ERROR",message:err.message})
          setError(err.message);
        }
        setLoading(false);
      }
      
    } catch (err) {
      alertDispatch({type:"ERROR",message:err.message})
      setError(err.message);
    }
    setLoading(false);
  };
  
  const fetchByLatAndLon = async (lat, lon) => {
    try {
      setLoading(true);
      const currentResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        );
        const currentJson = await currentResponse.json();
        if (!currentResponse.ok) {
          alertDispatch({type:"ERROR",message:currentResponse.statusText})
        setLoading(false);
      }
      if (currentResponse.ok) {
        setCurrentWeather(currentJson);
        setDaily(currentJson.daily);
        setHourly(currentJson.hourly);
      }
    } catch (err) {
      alertDispatch({type:"ERROR",message:err.message})
      setError(err.message);
    }
    setLoading(false);
  };
  
  return {currentWeather,toDayWeather,daily, hourly, loading, error, fetchByLatAndLon,fetchToDayWeather };
};




























// export const useFetch = () => {
//   // need variables
//   let loadingToDayWeather = false;
//   let loadingNextSevenDaysWeather = false;
//   let error = "";
//   let toDayWeather = null;
//   let nextSevenDaysWeather = null;

//   //api key
//   const API_KEY = "49cc8c821cd2aff9af04c9f98c36eb74";

//   const fetchData = async (city_name = "cairo") => {
//     //getting weather for today only
//     try {
//       loadingToDayWeather = true;
//       const toDayResponse = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`
//       );
//       const toDayJson = await toDayResponse.json();
//       if (!toDayResponse.ok) {
//         loadingToDayWeather = false;
//       }
//       if (toDayResponse.ok) {
//         toDayWeather=toDayJson;
//         console.log("toDayWeather", toDayJson);

//         if (toDayJson.coord) {
//           // getting weather for next seven days
//           try {
//             loadingNextSevenDaysWeather= true;
//             const nextSevenDaysResponse = await fetch(
//               `https://api.openweathermap.org/data/2.5/onecall?lat=${toDayJson.coord.lat}&lon=${toDayJson.coord.lon}&appid=${API_KEY}`
//             );
//             const nextSevenDaysJson = await nextSevenDaysResponse.json();
//             if (!nextSevenDaysResponse.ok) {
//               loadingNextSevenDaysWeather=false;
//             }
//             if (nextSevenDaysResponse.ok) {
//               nextSevenDaysWeather=nextSevenDaysJson;
//               console.log("nextSevenDaysWeather", nextSevenDaysJson);
//             }
//           } catch (err) {
//             error=err.message;
//             console.log(err);
//           }
//           loadingNextSevenDaysWeather=false;
//         }
//       }
//     } catch (err) {
//       error=err.message;
//       console.log("App : ", err);
//     }
//     loadingToDayWeather = false;
//     loadingNextSevenDaysWeather = false;
//     return { toDayWeather, nextSevenDaysWeather };
//   };

//   return { loadingToDayWeather, loadingNextSevenDaysWeather, error, fetchData };
// };
