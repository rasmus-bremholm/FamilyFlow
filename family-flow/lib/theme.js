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
			homework: "",
			outdoor: "",
			sports: "",
			arts: "",
			music: "",
			chore: "",
			screen: "",
			social: "",
			relax: "",
			nature: "",
		}
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
