"use client";
import { createTheme, ThemeOptions, Components } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const RobotoFont = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    },
    text: {
      primary: "#2E2E2E",
      secondary: "#6C9380",
    },
    activity: {
      homework: "#B3E3C9",
      outdoor: "#B2D5C5",
      sports: "#A4D5CE",
      arts: "#B3E9B4",
      music: "#D9F7C2",
      chore: "#A4B394",
      screen: "#D4E5C2",
      social: "#F0DDCC",
      relax: "#DAB799",
      nature: "#BEEED7",
			contrastText: "#2E2E2E",
    },
    meal: {
      lunch: "#3D7D5D",
      dinner: "#2F5E46",
			contrastText: "#fbfbfbff",
    },
  },
  typography: {
    fontFamily: [RobotoFont.style.fontFamily, "Arial", "sans-serif"].join(","),
    h1: {
      fontSize: "44px",
      fontWeight: "600",
    },
    h3: {
      fontSize: "20px",
      fontWeight: "400",
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
