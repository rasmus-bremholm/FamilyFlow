import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			light: "#A7D3B8",
			main: "#4B9B73",
			dark: "#3E8F63",
			contrastText: "#fbfbfbff"
		},
		background: {
			default: "#F5FAF7",
			card: "#FBFBFB"
		},
		text: {
			primary: "#2E2E2E",
			secondary: "#6C9380"
		}
	},
	typography: {
		fontFamily: ['Roboto', 'Arial', 'sans-serif'].join(','),
	}
});

export default theme;
