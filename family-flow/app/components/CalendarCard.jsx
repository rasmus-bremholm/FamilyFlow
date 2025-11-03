import { Typography, Box, Card, CardContent, CardHeader, CardActionArea, Stack, Button } from "@mui/material";
import { Restaurant, DirectionsRun } from "@mui/icons-material";

export default function CalendarCard({ dayName, shortDay, dayNumber, isToday, activites }) {
	return (
		<Box
			sx={{
				minWidth: 100,
				minHeight: 200,
				border: (theme) => (isToday ? `2px solid ${theme.palette.primary.main}` : `2px solid ${theme.palette.divider}`),
				borderRadius: 3,
				p: 2,
				bgcolor: "background.paper",
				transition: "all 0.2s",
				"&:hover": {
					borderColor: isToday ? "primary.main" : "action.hover",
				},
			}}>
			<Stack>
				<Typography variant='caption' sx={{ color: isToday ? "primary.main" : "text.secondary", fontWeight: 500 }}>
					{shortDay}
				</Typography>
				<Typography variant='h3' sx={{ color: isToday ? "primary.main" : "text.primary" }}>
					{dayNumber}
				</Typography>
			</Stack>
			<Stack>
				{activities &&
					activities.map((activity) => (
						<Button startIcon={activity.action ? <Restaurant /> : <DirectionsRun />} key={activity.id}>
							{activity.title}
						</Button>
					))}
			</Stack>
		</Box>
	);
}
