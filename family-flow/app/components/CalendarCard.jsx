/* eslint-disable react-hooks/preserve-manual-memoization */
"use client";
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardActionArea,
  Stack,
  Button,
  Avatar,
} from "@mui/material";
import { useState, useEffect, useMemo } from "react";
import { useTheme } from "@emotion/react";
import { getEventColors } from "@/lib/getEventColors";
import { isPassed } from "./PassedDay";

export default function CalendarCard({
  dayName,
  shortDay,
  dayNumber,
  isToday,
  date,
}) {
  const theme = useTheme();
  const past = useMemo(() => isPassed(date, isToday), [date, isToday]);
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
      .filter(
        (event) =>
          loggedInUser.eventsID.includes(event.id) && event.date === date
      )
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
        border: (theme) =>
          isToday
            ? `2px solid ${theme.palette.primary.main}`
            : `2px solid ${theme.palette.divider}`,
        borderRadius: 3,
        p: 2,
        bgcolor: past ? "#f0f0f0" : "background.paper",
        transition: "all 0.2s",
        "&:hover": {
          borderColor: isToday ? "primary.main" : "action.hover",
        },
      }}
    >
      <Stack>
        <Typography
          variant="caption"
          sx={{
            color: isToday ? "primary.main" : "text.secondary",
            fontWeight: 500,
          }}
        >
          {shortDay}
        </Typography>
        <Typography
          variant="h3"
          sx={{ color: isToday ? "primary.main" : "text.primary" }}
        >
          {dayNumber}
        </Typography>
      </Stack>
      <Stack spacing={0.5} sx={{ mt: 2 }}>
        {activities.map((activity) => (
          <Box
            key={activity.id}
            sx={{
              borderRadius: 1,
              p: 1,
              backgroundColor: activity.color,
              opacity: past ? 0.7 : 1,
              transition: "opacity 0.3s ease",
            }}
          >
            <Stack direction="row">
              <Box>
                <Typography>{activity.title}</Typography>
                <Typography variant="body2">{activity.startTime}</Typography>
              </Box>
              <Box
                display="flex"
                flex={1}
                flexDirection="row"
                justifyContent="flex-end"
                alignItems="flex-start"
              >
                <Avatar
                  sx={{ height: 12, width: 12 }}
                  {...stringAvatar(`${activity.createdBy}`)}
                />
              </Box>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
