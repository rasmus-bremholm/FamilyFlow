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
    },
    text: {
      primary: "#2E2E2E",
      secondary: "#6C9380",
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
