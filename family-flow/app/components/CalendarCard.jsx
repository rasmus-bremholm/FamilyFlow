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
import { isPassed } from "./PassedDay";

export default function CalendarCard({
  dayName,
  shortDay,
  dayNumber,
  isToday,
  date,
}) {
  const past = useMemo(() => isPassed(date, isToday), [date, isToday]);

  const activities = useMemo(() => {
    // Ett weird hack för att "localstorage is not defined ska försvinna"
    if (typeof window === "undefined") return [];

    const storedActivities = localStorage.getItem("activities");
    if (!storedActivities) return [];

    const allActivities = JSON.parse(storedActivities);
    return allActivities
      .filter((activity) => activity.date === date)
      .sort((a, b) => a.startTime.localeCompare(b.startTime));
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
            sx={{ borderRadius: 1, p: 1, backgroundColor: activity.color }}
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
