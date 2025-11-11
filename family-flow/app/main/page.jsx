'use client';
import { useState } from 'react';
import {
  Box,
  Typography,
  useTheme,
  Paper,
  Button,
  Select,
  MenuItem,
  Container,
  Stack,
} from '@mui/material';
import dayjs from 'dayjs';
import WeekCards from '../components/WeekCards';
import WeekNavButton from '../components/WeekNavButton';
import { useWeekNavigation } from '@/lib/useWeekNavigation';
import AddEventButton from '../components/AddEventButton';
import EditEvent from '../components/EditEvent';
import CurrentWeekButton from '../components/CurrentWeekButton';
import ShareButton from '../components/ShareButton';
import { Notification } from '../components/Notifications';

function WeeklySchedule() {
  const {
    previousWeek,
    nextWeek,
    currentWeek,
    weekNumber,
    goToToday,
    weekStart,
    weekYear,
  } = useWeekNavigation();
  const theme = useTheme();

  const todayWeekStart = dayjs().startOf('isoWeek');
  const isCurrentWeek = weekStart.isSame(todayWeekStart, 'day');

  return (
    <Container
      maxWidth={false}
      sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Box
        sx={{
          mx: 'auto',
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{ color: theme.palette.text.primary, mt: 1 }}
          >
            Family Flow
          </Typography>
          <Typography
            variant="h3"
            sx={{ color: theme.palette.text.secondary, mt: 1 }}
          >
            Plan your meals and activities for the week
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
          <Notification />
          <AddEventButton />
        </Box>
      </Box>
      <Box
        display="flex"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          mt: 2,
          backgroundColor: 'background.card',
          p: 2,
          borderRadius: 3,
          border: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <WeekNavButton direction={'prev'} onClick={() => previousWeek()} />
        <Box>
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            sx={{ color: theme.palette.text.secondary }}
          >
            v. {weekNumber}
          </Typography>
          <Box display="flex" gap={1}>
            <Typography variant="subtitle">{currentWeek[0].month}</Typography>
            <Typography variant="subtitle">{currentWeek[0].year}</Typography>
          </Box>
        </Box>
        <WeekNavButton direction={'next'} onClick={() => nextWeek()} />
      </Box>

      <WeekCards currentWeek={currentWeek} />
      <Box
        id="current-and-share-container"
        sx={{ py: 2, transition: 'all 0.2s ease' }}
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-start"
      >
        <Stack direction="row">
          <ShareButton weekNumber={weekNumber} />
          {!isCurrentWeek && <CurrentWeekButton onClick={() => goToToday()} />}
        </Stack>
      </Box>
    </Container>
  );
}

export default WeeklySchedule;
