import { Box, IconButton, Stack, Tooltip } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';

export default function CurrentWeekButton({ onClick }) {
  return (
    <Box onClick={onClick}>
      <Tooltip title="Go to today">
        <IconButton>
          <HistoryIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
