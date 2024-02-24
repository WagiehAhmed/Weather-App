import { InputAdornment, Slide } from "@mui/material";
import React, { forwardRef } from "react";
import { CustomDialog, CustomDialogContent, CustomForm, CustomIconButtom, SearchTextField } from "../styles";

import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Search = ({ openDialog, dialogTriggerhandler ,searchHandler , cityName , setCityName, matches }) => {
  console.log("search");

   //search handler
   const mobileSearchHandler = (e) => {
    // e.preventDefault();
    searchHandler(e);
    dialogTriggerhandler();
  };

  return (
    <CustomDialog
      open={openDialog}
      TransitionComponent={Transition}
      keepMounted
      onClose={dialogTriggerhandler}
      aria-describedby="alert-dialog-slide-description"
    >
      {/* <DialogTitle>{"Use Google's location service?"}</DialogTitle> */}
      <CustomDialogContent>
        <CustomForm onSubmit={(e) => mobileSearchHandler(e)} matches={matches} className="mobileSearch">
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
            placeholder="Search by city name"
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
      </CustomDialogContent>
    </CustomDialog>
  );
};

export default Search;
