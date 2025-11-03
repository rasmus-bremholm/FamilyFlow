"use client";

import { Dialog, DialogTitle, Typography } from "@mui/material";

export default function ModalAddPlan() {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>
        <Typography>{date}</Typography>
      </DialogTitle>
    </Dialog>
  );
}
