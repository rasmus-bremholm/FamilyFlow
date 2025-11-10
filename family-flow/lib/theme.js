"use client";
import { createTheme, ThemeOptions, Components } from "@mui/material/styles";
import { Roboto, Poppins } from "next/font/google";

const RobotoFont = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const theme = createTheme({
  palette: {
    primary: {
      light: "#A7D3B8",
      main: "#4B9B73",
      dark: "#3E8F63",
      contrastText: "#fbfbfbff",
    },
    background: {
      default: "#F5FAF7",
      card: "#FBFBFB",
      input: "#edfbf2ff",
      passedDay: "#f0f0f0",
    },
    text: {
      primary: "#2E2E2E",
      secondary: "#6C9380",
    },
    activity: {
      homework: "#B3E3C9",
      shopping: "#B2D5C5",
      sports: "#A4D5CE",
      arts: "#B3E9B4",
      music: "#D9F7C2",
      chores: "#A4B394",
      hobby: "#D4E5C2",
      social: "#F0DDCC",
      family: "#DAB799",
      adventure: "#BEEED7",
      contrastText: "#424242ff",
    },
    meal: {
      lunch: "#3D7D5D",
      dinner: "#2F5E46",
      contrastText: "#f5f4f4ff",
    },
  },
  typography: {
    fontFamily: [RobotoFont.style.fontFamily, "Arial", "sans-serif"].join(","),
    h1: {
      fontFamily: [PoppinsFont.style.fontFamily, "Arial", "sans-serif"].join(
        ","
      ),
      fontSize: "44px",
      fontWeight: "500",
    },
    h3: {
      fontSize: "20px",
      fontWeight: "400",
    },
    cardDayNum: {
      fontSize: "1rem",
    },
    cardShortDay: {
      fontSize: "1.5rem",
      textTransform: "capitalize",
    },
    eventTitle: {
      fontSize: "0.8rem",
      fontWeight: "600",
    },
    eventTime: {
      fontSize: "0.7rem",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "background.default",
        },
      },
    },
  },
});

export default theme;
