'use client';

import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function WeekNavButton({ direction, onClick }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const isPrev = direction === 'prev';

  return (
    <Button
      variant="text"
      color="primary"
      onClick={onClick}
			sx={{ minWidth: 0 }}
      startIcon={
        isPrev ? (
          <ChevronLeftIcon
            sx={{ width: { xs: 30, sm: 24 }, height: { xs: 30, sm: 24 } }}
          />
        ) : undefined
      }
      endIcon={
        !isPrev ? (
          <ChevronRightIcon
            sx={{ width: { xs: 30, sm: 24 }, height: { xs: 30, sm: 24 } }}
          />
        ) : undefined
      }
    >
      {matches ? (isPrev ? 'Tidigare vecka' : 'Nästa vecka') : ''}
    </Button>
  );
}
