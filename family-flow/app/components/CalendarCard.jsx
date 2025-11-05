"use client";
import { Typography, Box, Card, CardContent, CardHeader, CardActionArea, Stack, Button } from "@mui/material";
import { useState, useEffect, useMemo } from "react";

export default function CalendarCard({ dayName, shortDay, dayNumber, isToday, date }) {
	const activities = useMemo(() => {
		const storedActivities = localStorage.getItem("activities");
		if (!storedActivities) return [];

		const allActivities = JSON.parse(storedActivities);
		return allActivities.filter((activity) => activity.date === date).sort((a, b) => a.startTime.localeCompare(b.startTime));
	}, [date]);

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
			<Stack spacing={0.5} sx={{ mt: 2 }}>
				{activities.map((activity) => (
					<Box key={activity.id}>{activity.startTime}</Box>
				))}
			</Stack>
		</Box>
	);
}
