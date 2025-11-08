/* eslint-disable react-hooks/preserve-manual-memoization */
'use client';
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
} from '@mui/material';
import { useState, useEffect, useMemo } from 'react';
import { useTheme } from '@emotion/react';
import { getEventColors } from '@/lib/getEventColors';
import { isPassed } from './PassedDay';
import users from '../../lib/mockFunctions/mockUsers';
import EditEvent from './EditEvent';

export default function CalendarCard({
  dayName,
  shortDay,
  dayNumber,
  isToday,
  date,
}) {
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({});

  const theme = useTheme();
  const past = useMemo(() => isPassed(date, isToday), [date, isToday]);

  // Gets logged in user
  const loggedInUser = useMemo(() => {
    if (typeof window === 'undefined') return null;

    const storedUser = localStorage.getItem('loggedInUser');
    if (!storedUser) return null;

    return JSON.parse(storedUser);
  }, []);

  const events = useMemo(() => {
    if (typeof window === 'undefined') return [];
    if (!loggedInUser) return [];

    const storedEvents = localStorage.getItem('events');
    if (!storedEvents) return [];

    const allEvents = JSON.parse(storedEvents);

    const filteredEvents = allEvents
      .filter(
        (event) =>
          loggedInUser.id === event.createdBy ||
          event.membersId.includes(loggedInUser.id)
      )
      .filter((event) => event.date === date)
      .sort((a, b) => a.startTime.localeCompare(b.startTime));

    return filteredEvents;
  }, [date, loggedInUser]);

  const getUserById = (userId) => {
    return users.find((user) => user.id === userId);
  };

  const getAvatarColor = (user) => (user.bgColor ? user.bgColor : '#bdbdbd');

  const stringAvatar = (name) => {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  };

  const handleClick = (event) => {
    setOpen(true);
    setSelectedEvent(event);
  };

  return (
    <>
      <Box
        sx={{
          minWidth: 100,
          minHeight: 200,
          border: (theme) =>
            isToday
              ? `2px solid ${theme.palette.primary.main}`
              : `2px solid ${theme.palette.divider}`,
          borderRadius: 3,
          px: { xs: 2, md: 1, lg: 2 },
          py: 2,
          bgcolor: past ? 'background.passedDay' : 'background.paper',
          transition: 'all 0.2s',
          '&:hover': {
            borderColor: isToday ? 'primary.main' : 'action.hover',
          },
        }}
      >
        <Stack>
          <Typography
            variant="cardDayNum"
            sx={{ color: isToday ? 'primary.main' : 'text.primary' }}
          >
            {dayNumber}
          </Typography>
          <Typography
            variant="cardShortDay"
            sx={{
              color: isToday ? 'primary.main' : 'text.secondary',
              fontWeight: 500,
            }}
          >
            {shortDay}
          </Typography>
        </Stack>
        <Stack spacing={0.5} sx={{ mt: 2 }}>
          {events.map((event) => {
            const creator = getUserById(event.createdBy);
            return (
              <Box
                key={event.id}
                sx={{
                  borderRadius: 1,
                  cursor: 'pointer',
                  px: 1,
									py: 1.3,
                  ...getEventColors(event, theme),
                  opacity: past ? 0.7 : 1,
                  transition: 'opacity 0.3s ease',
                }}
                suppressHydrationWarning
                onClick={() => handleClick(event)}
              >
                <Stack direction="row">
                  <Box>
                    <Typography variant="eventTitle" component="h5">
                      {event.title}
                    </Typography>
                    <Typography variant="eventTime" component="p">
                      {''}
                      {event.startTime}
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    flex={1}
                    flexDirection="row"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                  >
                    <Avatar
                      sx={{
                        height: 28,
                        width: 28,
                        fontSize: 11,
                        bgcolor: getAvatarColor(creator),
                      }}
                      {...stringAvatar(creator.name)}
                    />
                  </Box>
                </Stack>
              </Box>
            );
          })}
        </Stack>
      </Box>
      {open && (
        <EditEvent
          open={open}
          onClose={() => setOpen(false)}
          event={selectedEvent}
        />
      )}
    </>
  );
}
