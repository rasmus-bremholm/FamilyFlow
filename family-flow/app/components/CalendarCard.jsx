"use client";
import { Typography, Box, Card, CardContent, CardHeader, CardActionArea, Stack } from "@mui/material";

export default function CalendarCard({ dayName, shortDay, dayNumber, isToday }) {
	return (
		// Viktigt, byt ut färgerna till theme colors när dom är klara
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
			<Stack>{/* Sen när vi löst aktiviterna så kommer dom hamna här i en slags map. */}</Stack>
		</Box>
	);
}
