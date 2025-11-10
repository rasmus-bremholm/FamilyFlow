import { Box, IconButton, Stack } from '@mui/material';
import History from '@mui/icons-material/';
import { useWeekNavigation } from '@/lib/useWeekNavigation';

export default function CurrentWeekButton() {
  const { goToToday } = useWeekNavigation();
  // En liten kommentar

  return <Box></Box>;
}
