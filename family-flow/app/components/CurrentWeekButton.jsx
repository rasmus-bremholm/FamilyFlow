import { Box, IconButton, Stack, Tooltip } from '@mui/material';
import History from '@mui/icons-material/';
import { useWeekNavigation } from '@/lib/useWeekNavigation';
import dayjs from 'dayjs';

export default function CurrentWeekButton({ onClick, currentWeek }) {
  // Ingen aning om detta funkar....
  const { goToToday, weekStart } = useWeekNavigation();
  const todayWeekStart = dayjs().startOf('isoWeek');
  const isCurrentWeek = weekStart.isSame(todayWeekStart, 'day');

  if (isCurrentWeek) return null;

  return (
    <Box onClick={onClick}>
      <Tooltip title="Go to today">
        <IconButton>
          <History />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
