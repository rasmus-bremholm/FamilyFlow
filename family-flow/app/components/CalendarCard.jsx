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
  AvatarGroup,
} from '@mui/material';
import { useState, useEffect, useMemo, useContext } from 'react';
import { useTheme } from '@emotion/react';
import { getEventColors } from '@/lib/getEventColors';
import { isPassed } from './PassedDay';
import users from '../../lib/mockFunctions/mockUsers';
import EditEvent from './EditEvent';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { useRenderEvents } from '@/lib/renderEvents';
import eventContext from '@/lib/contexts/eventContext';

export default function CalendarCard({
  dayName,
  shortDay,
  dayNumber,
  isToday,
  date,
}) {
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({});
  const [stateEvents, setStateEvents] = useState([]);
  const events = useContext(eventContext);
  console.log('Calendar: ', events);

  const theme = useTheme();
  const past = useMemo(() => isPassed(date, isToday), [date, isToday]);

  // Gets logged in user
  const loggedInUser = useMemo(() => {
    if (typeof window === 'undefined') return null;

    const storedUser = localStorage.getItem('loggedInUser');
    if (!storedUser) return null;

    return JSON.parse(storedUser);
  }, []);

  /* useEffect(() => {
    const getEvents = () => {
      const filteredEvents = events
        .filter(
          (event) =>
            loggedInUser.id === event.createdBy ||
            event.membersId.includes(loggedInUser.id)
        )
        .filter((event) => event.date === date)
        .sort((a, b) => a.startTime.localeCompare(b.startTime));
      setStateEvents(filteredEvents);
    };
    getEvents();
  }, [date, loggedInUser]);

  */
  const filteredEvents = useMemo(() => {
    if (!loggedInUser) return [];

    if (!events) return [];

    const filteredEvents = events.events
      .filter(
        (event) =>
          loggedInUser.id === event.createdBy ||
          event.membersId.includes(loggedInUser.id)
      )
      .filter((event) => event.date === date)
      .sort((a, b) => a.startTime.localeCompare(b.startTime));

    return filteredEvents;
  }, [date, loggedInUser, events]);

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
          minHeight: { xs: 200, md: 350 },
          height: '100%',
          //Hade vart najs att ha en calc() som på NÅGOT vis beräknar maxHeight baserat på utrymmet som finns kvar
          maxHeight: '62vh',
          overflowY: 'auto',
          scrollbarWidth: 'none',
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
            {dayName}
          </Typography>
        </Stack>
        <Stack spacing={0.5} sx={{ mt: 2 }}>
          {events.map((event) => {
            const responsibleUsersArray = event.responsibleUsers;

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
                  transition: 'all 0.3s ease',
                }}
                suppressHydrationWarning
                onClick={() => handleClick(event)}
              >
                <Stack direction="row" gap={0.5}>
                  <Box sx={{ minWidth: 0, flex: 1 }}>
                    <Box display="flex" gap={0.5}>
                      {event.eventType === 'meal' && (
                        <RestaurantIcon
                          sx={{ fontSize: 12, alignSelf: 'center' }}
                        />
                      )}
                      <Typography
                        variant="eventTitle"
                        component="h5"
                        sx={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {event.title}
                      </Typography>
                    </Box>
                    <Typography variant="eventTime" component="p">
                      {''}
                      {event.startTime}
                    </Typography>
                  </Box>

                  <AvatarGroup>
                    {responsibleUsersArray.map((id) => {
                      const user = getUserById(id);

                      return (
                        <Avatar
                          key={user.id}
                          src={user.avatarUrl}
                          sx={{
                            border: 'none !important',
                            height: 30,
                            width: 30,
                            fontSize: 12,
                            bgcolor: getAvatarColor(user),
                          }}
                          {...stringAvatar(user.name)}
                        />
                      );
                    })}
                  </AvatarGroup>
                </Stack>
              </Box>
            );
          })}
          {filteredEvents &&
            filteredEvents.map((event, index) => {
              const responsibleUsersArray =
                filteredEvents[index].responsibleUsers;

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
                    transition: 'all 0.3s ease',
                  }}
                  suppressHydrationWarning
                  onClick={() => handleClick(event)}
                >
                  <Stack direction="row">
                    <Box>
                      <Box display="flex" gap={0.5}>
                        {event.eventType === 'meal' && (
                          <RestaurantIcon
                            sx={{ fontSize: 12, alignSelf: 'center' }}
                          />
                        )}
                        <Typography variant="eventTitle" component="h5">
                          {event.title}
                        </Typography>
                      </Box>
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
                      <AvatarGroup>
                        {stateEvents &&
                          responsibleUsersArray.map((id) => {
                            const user = getUserById(id);

                            return (
                              <Avatar
                                key={user.id}
                                src={user.avatarUrl}
                                sx={{
                                  border: 'none !important',
                                  height: 30,
                                  width: 30,
                                  fontSize: 12,
                                  bgcolor: getAvatarColor(user),
                                }}
                                {...stringAvatar(user.name)}
                              />
                            );
                          })}
                      </AvatarGroup>
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
