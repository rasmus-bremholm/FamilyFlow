import ThemeRegistry from "@/lib/themeregistry";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

export const metadata = {
	title: "Family Flow",
	description: "Plan your meals and activities for the week",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<AppRouterCacheProvider>
					<ThemeRegistry>{children}</ThemeRegistry>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
