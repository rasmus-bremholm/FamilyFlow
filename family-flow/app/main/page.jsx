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

function WeeklySchedule() {
  const { previousWeek, nextWeek, currentWeek, weekNumber } =
    useWeekNavigation();
  const theme = useTheme();

  return (
    <Container maxWidth={false} sx={{ height: '100vh' }}>
      <Box
        sx={{
          mx: 'auto',
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
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

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <AddEventButton />
        </Box>
      </Box>
      <Box
        display="flex"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          backgroundColor: 'background.card',
          p: 2,
          borderRadius: 3,
          border: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <WeekNavButton direction={'prev'} onClick={() => previousWeek()} />
        <Box>
          <Typography variant="h4" component="h2" textAlign="center">
            w. {weekNumber}
          </Typography>
          <Box display="flex" gap={1}>
            <Typography variant="subtitle">{currentWeek[0].month}</Typography>
            <Typography variant="subtitle">{currentWeek[0].year}</Typography>
          </Box>
        </Box>
        <WeekNavButton direction={'next'} onClick={() => nextWeek()} />
      </Box>

      <WeekCards currentWeek={currentWeek} />
    </Container>
  );
}

export default WeeklySchedule;
