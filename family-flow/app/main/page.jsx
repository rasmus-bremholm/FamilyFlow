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
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: { xs: 'absolute', md: 'static' },
          top: { xs: 16, md: 'auto' },
          right: { xs: 16, md: 'auto' },
          zIndex: 10,
          display: { xs: 'block', md: 'none' },
        }}
      >
        <Notification />
      </Box>

      <Box
        sx={{
          mx: 'auto',
          p: 2,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 1,
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'center' },
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
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
            Planera dina måltider och aktiviteter för veckan
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Notification />
          </Box>
          <Box sx={{ marginTop: { xs: 1, md: 0 }, alignItems: 'center' }}>
            <AddEventButton />
          </Box>
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: { xs: 'row', sm: 'column' },
            gap: { xs: 1, sm: 0 },
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            sx={{
              fontSize: {
                xs: 26,
                sm: 34,
                color: theme.palette.text.secondary,
                fontWeight: 600,
              },
            }}
          >
            v. {weekNumber}
          </Typography>
          <Box display="flex" gap={1}>
            <Typography
              variant="subtitle"
              sx={{
                fontSize: {
                  xs: 20,
                  md: 16,
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                },
              }}
            >
              {currentWeek[0].month}
            </Typography>
            <Typography
              variant="subtitle"
              sx={{
                fontSize: {
                  xs: 20,
                  md: 16,
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                },
              }}
            >
              {currentWeek[0].year}
            </Typography>
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
