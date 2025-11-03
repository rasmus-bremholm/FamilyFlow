"use client";

import Button from "@mui/material/Button";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function WeekNavButton({direction, onClick}) {
	const isPrev = direction === "prev";

	return (
    <Button
      variant="text"
      color="primary"
			onClick={onClick}
      startIcon={isPrev ? <ChevronLeftIcon /> : undefined}
      endIcon={!isPrev ? <ChevronRightIcon /> : undefined}
    >
      {isPrev ? "Previous week" : "Next week"}
    </Button>
  );
}