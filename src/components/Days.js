import React, { useEffect } from "react";
import Slider from "react-slick";
import Day from "./Day";
import { Box } from "@mui/material";
import { Title } from "../styles";
import { useTranslation } from "react-i18next";
const Days = ({ days }) => {
  // console.log("days");

  // language hook
  const { t, i18n } = useTranslation();
  var dir;
  useEffect(() => {
    dir = i18n.dir(i18n.language);
  }, [i18n, i18n.language]);
  //slider settings
  var settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    rtl: dir === "rtl" ? true : false,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: false,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <Box>
      <Title>{t("nextEightDayWeather")}</Title>
      <Slider {...settings}>
        {days.map((item) => (
          <Day item={item} key={item.dt} />
        ))}
      </Slider>
    </Box>
  );
};

export default Days;
