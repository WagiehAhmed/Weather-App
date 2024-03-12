import {
  AppBar,
  Box,
  CircularProgress,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";

export const CustomBox = styled(Box)(() => ({
  boxSizing: "border-box",
  minHeight: "100dvh",
  display: "flex",
  flexDirection: "column",
  backgroundImage: "url(./images/background2.jpg)",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",

  // backgroundColor: `${theme.palette.lightBlue.main}`,
  // border: "2px solid red",

  "&:before": {
    content: "''",
    position: "fixed",
    inset: "0px 0px 0px 0px",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(10,100,250,0.25)",
  },

}));

// appbar section
export const CustomAppBar = styled(AppBar)(({ matches }) => ({
  position: "static",
  backgroundColor: "transparent",
  padding: matches.lg ? "20px 0px" : "30px 225px",
  // border: "2px solid red",
}));

export const CustomToolBar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  // border: "2px solid yellow",
}));

export const Logo = styled(Typography)(() => ({
  textTransform: "capitalize",
  // border: "2px solid blue",
}));

export const CustomForm = styled("form")(({ matches }) => ({
  display: matches.sm ? "none" : "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  flexGrow: 1,
  minWidth: "250px",
  maxWidth: "500px",
  "&.mobileSearch":{
    display: !matches.sm ? "none" : "flex",
  }
  // border: "2px solid red",
}));

export const SearchTextField = styled(TextField)(() => ({
  flexGrow: 1,
  borderRadius: "50px",
  backgroundColor: "white",
  //   border:"2px solid green",
  "& .MuiInputBase-root": {
    // color: "white",
    borderRadius: "50px",
  },
  "& .MuiInputBase-input": {
    padding: "10px ",
    borderRadius: "50px",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      // margin: "-1px",
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      // margin: "-1px",
      borderColor: "white",
    },
  },
}));

// main section
export const CustomContainer = styled(Box)(({ matches }) => ({
  boxSizing: "border-box",
  margin: matches.lg ? "0px 0px" : "0px 250px",
  flexGrow: 1,
  zIndex:2,
  // border: "2px solid yellow",
}));

//first section
export const FirstSection = styled(Box)(({ matches }) => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: matches.sm ? "column" : "row",
  justifyContent: "center",
  alignItems:"center",
  padding:"5px",
  // border: "2px solid red",
}));

export const Current = styled(Box)(({ matches }) => ({
  boxSizing: "border-box",
  margin: "5px",
  color: "white",
  flexGrow: 1,
  maxWidth: matches.sm ? "100%" : "100%",
  // border: "2px solid green",
}));

export const Next = styled(Box)(({ matches }) => ({
  boxSizing: "border-box",
  padding: "0px",
  color: "white",
  flexGrow: 1,
  maxWidth: matches.sm ? "100%" : "100%",
  // border: "2px solid green",
}));

export const Map = styled(Box)(({ matches }) => ({
  boxSizing: "border-box",
  borderRadius: "10px",
  margin: "10px",
  padding: "10px",
  color: "white",
  flexGrow: 1,
  maxWidth: matches.sm ? "100%" : "50%",
  // border: "2px solid green",
}));

export const WeatherInfo = styled(Box)(() => ({
  boxSizing: "border-box",
  // border: "2px solid purple",
}));

export const HeaderInfo = styled(Box)(() => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  // border: "2px solid green",
}));

export const WeatherImage = styled("img")(({ src }) => ({
  boxSizing: "border-box",
  width: "80px",
  height: "80px",
  src:src,
  // border: "2px solid green",
}));

export const TempDegree = styled(Typography)(({ matches }) => ({
  fontSize: matches.sm ? "1.5em" : "3em",
  color: "white",
  // border: "2px solid red",
}));

export const WeatherDescription = styled(Typography)(({ matches }) => ({
  fontSize: matches.sm ? "1em" : "1.5em",
  color: "white",
  margin:"0px 10px",
  // border: "2px solid red",
}));

export const InfoGridContainer = styled(Grid)(({ matches }) => ({
  // border: "2px solid red",
}));

export const InfoGridItem = styled(Grid)(({ matches }) => ({
  color: "white",
  // border: "2px solid yellow",
}));

export const InfoItem = styled(Box)(() => ({
  borderRadius: "10px",
  // padding: "5px",
  // background:`${theme.palette.secondary2.main}`,
  width: "fit-content",
  // margin: "0px auto",
  // border: "2px solid red",
}));

export const InfoItemTitle = styled(Typography)(() => ({
  textTransform:"capitalize",
  // border: "2px solid red",
}));

export const InfoItemValue = styled(Typography)(() => ({
  // border: "2px solid red",
}));

//icon container
export const CustomIconButtom = styled(IconButton)(({ matches,search_value }) => ({
  backgroundColor: "white",
  width:"40px",
  height:"40px",
  margin: "0px 5px",
  "&:hover": {
    backgroundColor: "white",
  },
  "&.mobileSearchBtn": {
    display: matches.sm ? "inline-flex" : "none",
  },
  "&.SearchBtn": {
    display: search_value ? "inline-flex" : "none",
  },
}));



// date and time section
export const DateTimeZoneContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  // border: "2px solid red",
}));

export const DateTimeContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  // border: "2px solid red",
}));

export const TimeContainer = styled(Typography)(({ matches }) => ({
  display: "inline-block",
  fontSize: matches.sm ? "1.5em" : "3em",
  color: "white",
  // border: "2px solid red",
}));

export const DateContainer = styled(Typography)(({ matches }) => ({
  fontSize: matches.sm ? "1em" : "1.5em",
  color: "white",
  // border: "2px solid red",
}));

export const ClockState = styled(Typography)(({ matches }) => ({
  fontSize: matches.sm ? "0.5em" : "1em",
  display: "inline-block",
  color: "white",
  // border: "2px solid red",
}));

export const Zone = styled(Typography)(() => ({
  // border: "2px solid red",
}));

//secont section
export const SecondSection = styled(Box)(({ matches }) => ({
  color: "white",
  boxSizing: "border-box",
  // border: "2px solid red",
}));

export const DayDetails = styled(Box)(() => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems:"center",
  // borderRadius:"10px",
  color: "white",
  // border: "2px solid red",
}));

export const DayPaper = styled(Paper)(() => ({
  boxSizing: "border-box",
  borderRadius: "10px",
  padding: "5px",
  margin: "10px auto",
  width:"fit-content",
  color: "white",
  backgroundColor: `rgba(50,91,150,0.5)`,
  "&.active": {
    backgroundColor: `rgba(39,82,144,1)`,
  },
}));

export const HourPaper = styled(Paper)(() => ({
  boxSizing: "border-box",
  borderRadius: "10px",
  padding: "5px",
  margin: "10px",
  minWidth:"fit-content",
  maxWidth: "150px",
  margin: "10px auto",
  color: "white",
  backgroundColor: `rgba(50,91,150,0.5)`,
}));

export const HourData = styled(Stack)(() => ({
  boxSizing: "border-box",
  alignItems: "center",
}));

export const Title = styled(Typography)(() => ({
  textTransform:"capitalize",
  margin:"5px",
  // border: "2px solid red",
}));


export const CustomCircularProgress = styled(CircularProgress)(() => ({
  width: "fit-content",
  position:"absolute",
  top:"50%",
  left:"50%",
  transform:"translate( -50%, -50%)",
  alignSelf: "center",
  margin: "5px",
  color: "rgba(200,10,200,0.5)",
}));

// dialog section
export const CustomDialog = styled(Dialog)(()=>({
  backgroundColor:"rgba(0,0,0,0.5)",
  
  "& .MuiPaper-root":{
    borderRadius:"25px",
    backgroundColor:"transparent",

  }
}))
export const CustomDialogContent = styled(DialogContent)(()=>({
  borderRadius:"25px",
  overflow: "hidden",
  backgroundColor:"transparent",
  padding: "0px",
  maxWidth: "500px",
  minWidth: "300px",
}))
