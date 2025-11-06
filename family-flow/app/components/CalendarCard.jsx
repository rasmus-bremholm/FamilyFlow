"use client";
import { Typography, Box, Card, CardContent, CardHeader, CardActionArea, Stack, Button, Avatar } from "@mui/material";
import { useState, useEffect, useMemo } from "react";

export default function CalendarCard({ dayName, shortDay, dayNumber, isToday, date }) {
	const users = useMemo(() => {
		if (typeof window === "undefined") return [];

		const storedUsers = localStorage.getItem("users");
		if (!storedUsers) return [];

		const allUsers = JSON.parse(storedUsers);
	});

	const events = useMemo(() => {
		// Ett weird hack för att "localstorage is not defined ska försvinna"
		if (typeof window === "undefined") return [];

		const storedEvents = localStorage.getItem("events");
		if (!storedEvents) return [];

		const allEvents = JSON.parse(storedEvents);
		return allEvents.filter((event) => event.date === date).sort((a, b) => a.startTime.localeCompare(b.startTime));
	}, [date]);

	function stringAvatar(name) {
		return {
			children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
		};
	}

	return (
		<Box
			sx={{
				minWidth: 100,
				minHeight: 200,
				border: (theme) => (isToday ? `2px solid ${theme.palette.primary.main}` : `2px solid ${theme.palette.divider}`),
				borderRadius: 3,
				px: { xs: 2, md: 1, lg: 2 },
				py: 2,
				bgcolor: "background.paper",
				transition: "all 0.2s",
				"&:hover": {
					borderColor: isToday ? "primary.main" : "action.hover",
				},
			}}>
			<Stack>
				{/* Kolla över dagens namn. */}
				<Typography variant='caption' sx={{ color: isToday ? "primary.main" : "text.secondary", fontWeight: 500 }}>
					{shortDay}
				</Typography>
				<Typography variant='h3' sx={{ color: isToday ? "primary.main" : "text.primary" }}>
					{dayNumber}
				</Typography>
			</Stack>
			<Stack spacing={0.5} sx={{ mt: 2 }}>
				{events.map((event) => (
					<Box key={event.id} sx={{ borderRadius: 1, p: 1, backgroundColor: "// JUSTERA COLOR" }}>
						<Stack direction='row'>
							<Box>
								<Typography>{event.title}</Typography>
								<Typography variant='body2'>{event.startTime}</Typography>
							</Box>
							<Box display='flex' flex={1} flexDirection='row' justifyContent='flex-end' alignItems='flex-start'>
								<Avatar sx={{ height: 12, width: 12, fontSize: 6 }} {...stringAvatar(`${event.createdBy}`)} />
							</Box>
						</Stack>
					</Box>
				))}
			</Stack>
		</Box>
	);
}
