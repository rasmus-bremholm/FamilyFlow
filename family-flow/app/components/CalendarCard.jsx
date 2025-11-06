/* eslint-disable react-hooks/preserve-manual-memoization */
"use client";
import { Typography, Box, Card, CardContent, CardHeader, CardActionArea, Stack, Button, Avatar } from "@mui/material";
import { useState, useEffect, useMemo } from "react";
import { getActivityColor } from "@/lib/getActivityColor";

export default function CalendarCard({ dayName, shortDay, dayNumber, isToday, date }) {
	// Gets all the users, used for filtering later.
	const users = useMemo(() => {
		if (typeof window === "undefined") return [];

		const storedUsers = localStorage.getItem("users");
		if (!storedUsers) return [];

		return JSON.parse(storedUsers);
	}, []);

	// Gets logged in user
	const loggedInUser = useMemo(() => {
		if (typeof window === "undefined") return null;

		const storedUser = localStorage.getItem("loggedInUser");
		if (!storedUser) return null;

		return JSON.parse(storedUser);
	}, []);

	console.log(`Logged in user`, loggedInUser);

	const events = useMemo(() => {
		if (typeof window === "undefined") return [];
		if (!loggedInUser) return [];

		const storedEvents = localStorage.getItem("events");
		if (!storedEvents) return [];

		const allEvents = JSON.parse(storedEvents);
		return allEvents
			.filter((event) => loggedInUser.eventsID.includes(event.id) && event.date === date)
			.sort((a, b) => a.startTime.localeCompare(b.startTime));
	}, [date, loggedInUser]);

	const getUserById = (userId) => {
		return users.find((user) => user.id === userId);
	};

	const stringAvatar = (name) => {
		return {
			children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
		};
	};

	console.log(`All Events: `, events);

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
				<Typography variant='caption' sx={{ color: isToday ? "primary.main" : "text.secondary", fontWeight: 500 }}>
					{shortDay}
				</Typography>
				<Typography variant='h3' sx={{ color: isToday ? "primary.main" : "text.primary" }}>
					{dayNumber}
				</Typography>
			</Stack>
			<Stack spacing={0.5} sx={{ mt: 2 }}>
				{events.map((event) => {
					const creator = getUserById(event.createdBy);
					return (
						<Box key={event.id} sx={{ borderRadius: 1, p: 1, backgroundColor: "action.hover" }}>
							<Stack direction='row'>
								<Box>
									<Typography>{event.title}</Typography>
									<Typography variant='body2'>{event.startTime}</Typography>
								</Box>
								<Box
									display='flex'
									flex={1}
									flexDirection='row'
									justifyContent='flex-end'
									alignItems='flex-start'
									bgcolor={getActivityColor(event.activityCategory)}>
									{creator && <Avatar sx={{ height: 24, width: 24, fontSize: 10 }} {...stringAvatar(creator.name)} />}
								</Box>
							</Stack>
						</Box>
					);
				})}
			</Stack>
		</Box>
	);
}
