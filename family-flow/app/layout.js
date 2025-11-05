import ThemeRegistry from "@/lib/themeregistry";

export const metadata = {
	title: "Family Flow",
	description: "Plan your meals and activities for the week",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<ThemeRegistry>{children}</ThemeRegistry>
			</body>
		</html>
	);
}
