import { Box, Typography, useMediaQuery } from "@mui/material";
import {
  Current,
  CustomBox,
  CustomCircularProgress,
  CustomContainer,
  DateTimeZoneContainer,
  FirstSection,
  HeaderInfo,
  InfoGridContainer,
  InfoGridItem,
  InfoItem,
  InfoItemTitle,
  InfoItemValue,
  Next,
  SecondSection,
  TempDegree,
  Title,
  WeatherDescription,
  WeatherImage,
  WeatherInfo,
  Zone,
} from "../styles";
import { theme } from "../styles/theme";

import React from "react";

import { useEffect, useState } from "react";
import MainAppBar from "./MainAppBar";
import DataTime from "./DataTime";
import { useFetch } from "../hooks/useFetch";
import Days from "./Days";
import Hours from "./Hours";
import { useTranslation } from "react-i18next";

function App() {
  // console.log("app");

  // defferent screens matchers
  const sizes = {
    xs: useMediaQuery(theme.breakpoints.down("sm")),
    sm: useMediaQuery(theme.breakpoints.down("md")),
    md: useMediaQuery(theme.breakpoints.down("lg")),
    lg: useMediaQuery(theme.breakpoints.down("xl")),
    xl: useMediaQuery(theme.breakpoints.only("xl")),
  };

  //search state
  const [cityName, setCityName] = useState("");

  // language hook
  const { t } = useTranslation();

  //useFetch hook
  const {
    currentWeather,
    toDayWeather,
    daily,
    hourly,
    loading,
    error,
    fetchByLatAndLon,
    fetchToDayWeather,
  } = useFetch();

  // first time
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (position.coords.latitude && position.coords.longitude) {
          fetchByLatAndLon(position.coords.latitude, position.coords.longitude);
        } else {
          fetchToDayWeather();
        }
      },
      () => {
        const answer = window.confirm(
          "this website needs location, so open GPS for show your current location weather data"
        );
        if(!answer){
          fetchToDayWeather();
        }
      }
    );

    // return ()=>{clearTimeout(sto)};
  }, []);

  //search handler
  const searchHandler = (e) => {
    e.preventDefault();
    fetchToDayWeather(cityName);
    setCityName("");
    // console.log(nextSevenDaysWeather);
  };

  return (
    <CustomBox>
      <MainAppBar
        searchHandler={searchHandler}
        cityName={cityName}
        setCityName={setCityName}
        matches={sizes}
      />

      {loading && !error ? (
        <CustomCircularProgress />
      ) : (
        // <Box sx={{ zIndex: 1 }}>
          <CustomContainer matches={sizes}>
            <FirstSection matches={sizes}>
              <Current matches={sizes}>
                {toDayWeather || currentWeather ? (
                  <Title>{t("currentWeather")}</Title>
                ) : (
                  ""
                )}
                <DateTimeZoneContainer>
                  <DataTime matches={sizes} />
                  <Zone>{toDayWeather ? toDayWeather.name : ""}</Zone>
                </DateTimeZoneContainer>
                <WeatherInfo>
                  {currentWeather || toDayWeather ? (
                    <HeaderInfo>
                      <WeatherImage
                        src={
                          toDayWeather
                            ? "http://openweathermap.org/img/w/" +
                              toDayWeather.weather[0].icon +
                              ".png"
                            : "http://openweathermap.org/img/w/" +
                              currentWeather.current.weather[0].icon +
                              ".png"
                        }
                        alt="weather icon"
                      />
                      <TempDegree matches={sizes}>
                        {toDayWeather ? (
                          <Typography variant="h3" component="h3">
                            {Math.floor(toDayWeather.main.temp - 273.15)}
                          </Typography>
                        ) : (
                          <Typography variant="h3">
                            {Math.floor(currentWeather.current.temp - 273.15)}
                          </Typography>
                        )}
                      </TempDegree>
                      <Typography variant="h3">&#8451;</Typography>
                      <WeatherDescription matches={sizes}>
                        {toDayWeather
                          ? toDayWeather.weather[0].main + " , "
                          : currentWeather.current.weather[0].main + " , "}

                        {toDayWeather
                          ? toDayWeather.weather[0].description
                          : currentWeather.current.weather[0].description}
                      </WeatherDescription>
                    </HeaderInfo>
                  ) : (
                    ""
                  )}

                  {currentWeather || toDayWeather ? (
                    <InfoGridContainer
                      container
                      columns={{ xs: 3, md: 6 }}
                      matches={sizes}
                    >
                      <InfoGridItem item xs={1} matches={sizes}>
                        <InfoItem>
                          <InfoItemTitle>{t("humidity")}</InfoItemTitle>
                          <InfoItemValue>
                            {toDayWeather
                              ? toDayWeather.main.humidity
                              : currentWeather
                              ? currentWeather.current.humidity
                              : ""}{" "}
                            %
                          </InfoItemValue>
                        </InfoItem>
                      </InfoGridItem>
                      <InfoGridItem item xs={1} matches={sizes}>
                        <InfoItem>
                          <InfoItemTitle>{t("pressure")}</InfoItemTitle>
                          <InfoItemValue>
                            {toDayWeather
                              ? toDayWeather.main.pressure
                              : currentWeather
                              ? currentWeather.current.pressure
                              : ""}{" "}
                            hpa
                          </InfoItemValue>
                        </InfoItem>
                      </InfoGridItem>
                      <InfoGridItem item xs={1} matches={sizes}>
                        <InfoItem>
                          <InfoItemTitle>{t("wind")}</InfoItemTitle>
                          <InfoItemValue>
                            {toDayWeather
                              ? toDayWeather.wind.speed
                              : currentWeather
                              ? currentWeather.current.wind_speed
                              : ""}{" "}
                            m/s
                          </InfoItemValue>
                        </InfoItem>
                      </InfoGridItem>
                      <InfoGridItem item xs={1} matches={sizes}>
                        <InfoItem>
                          <InfoItemTitle>{t("clouds")}</InfoItemTitle>
                          <InfoItemValue>
                            {toDayWeather
                              ? toDayWeather.clouds.all
                              : currentWeather
                              ? currentWeather.current.clouds
                              : ""}{" "}
                            %
                          </InfoItemValue>
                        </InfoItem>
                      </InfoGridItem>
                    </InfoGridContainer>
                  ) : (
                    ""
                  )}
                </WeatherInfo>
              </Current>
              {/*map */}
              {/* <Map matches={sizes}>map</Map> */}
            </FirstSection>

            {/*second section */}
            <SecondSection matches={sizes}>
              <Next matches={sizes}>
                {daily ? <Days days={daily} /> : ""}
                {hourly ? <Hours hours={hourly} /> : ""}
              </Next>
            </SecondSection>
          </CustomContainer>
        // </Box>
      )}
    </CustomBox>
  );
}

export default App;
