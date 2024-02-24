import React, { useEffect, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useTranslation } from "react-i18next";

import Search from "./Search";

import {
  CustomAppBar,
  CustomForm,
  CustomIconButtom,
  CustomToolBar,
  Logo,
  SearchTextField,
} from "../styles";
import { Box, InputAdornment, Typography } from "@mui/material";

const MainAppBar = ({ searchHandler, cityName, setCityName, matches }) => {
  // console.log("mainAppbar");

  // search dialog trigger
  const [openDialog, setOpenDialog] = useState(false);
  const dialogTriggerhandler = () => {
    setOpenDialog(!openDialog);
  };

  const { t, i18n } = useTranslation();
  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
  }, [i18n, i18n.language]);

  return (
    <CustomAppBar matches={matches} elevation={0}>
      <CustomToolBar>
        {/*search section */}
        <Logo variant="h5">{t("title")}</Logo>

        {/*disktop search section */}
        <CustomForm onSubmit={(e) => searchHandler(e)} matches={matches}>
          <SearchTextField
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {cityName ? (
                    <ClearIcon
                      fontSize="medium"
                      color="black"
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        setCityName("");
                      }}
                    />
                  ) : (
                    ""
                  )}
                </InputAdornment>
              ),
            }}
            placeholder={t("searchPlaceholder")}
            name="searchFeild"
            variant="outlined"
            key="searchFeild"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />

          <CustomIconButtom
            type="submit"
            matches={matches}
            className="SearchBtn"
            search_value={cityName}
          >
            <SearchIcon fontSize="medium" color="primary" />
          </CustomIconButtom>
        </CustomForm>

        <Box>
          {/*mobile search section */}
          <CustomIconButtom
            type="submit"
            className="mobileSearchBtn"
            matches={matches}
            onClick={dialogTriggerhandler}
          >
            <SearchIcon fontSize="medium" color="primary" />
          </CustomIconButtom>

          {/*language section */}
          {i18n.language === "ar" ? (
            <CustomIconButtom
              onClick={() => i18n.changeLanguage("en")}
              matches={matches}
            >
              <Typography color="primary" variant="button">EN</Typography>
            </CustomIconButtom>
          ) : (
            <CustomIconButtom
              onClick={() => i18n.changeLanguage("ar")}
              matches={matches}
            >
              <Typography color="primary" variant="button">AR</Typography>
            </CustomIconButtom>
          )}
        </Box>
      </CustomToolBar>

      {/* mobile search component */}
      <Search
        openDialog={openDialog}
        dialogTriggerhandler={dialogTriggerhandler}
        searchHandler={searchHandler}
        cityName={cityName}
        setCityName={setCityName}
        matches={matches}
      />
    </CustomAppBar>
  );
};

export default MainAppBar;
