"use client";

import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function WeekNavButton({ direction, onClick }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const isPrev = direction === "prev";

  return (
    <Button
      variant="text"
      color="primary"
      onClick={onClick}
      startIcon={isPrev ? <ChevronLeftIcon /> : undefined}
      endIcon={!isPrev ? <ChevronRightIcon /> : undefined}
    >
      {matches ? (isPrev ? "Tidigare vecka" : "Nästa vecka") : ""}
    </Button>
  );
}
