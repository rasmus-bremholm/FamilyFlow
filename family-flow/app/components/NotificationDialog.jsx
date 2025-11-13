'use client';
import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';

export default function NotificationDialog({ open, onConfirm, onCancel }) {
  return (
    <>
      <Dialog open={open} onClose={onCancel}>
        <DialogTitle>Du har blivit tillagd i ett event!</DialogTitle>
        <DialogContent>
          Karin har lagt till dig i aktiviteten Bio på söndag den 16 november.
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color="inherit">
            Avböj
          </Button>
          <Button onClick={onConfirm} color="primary" variant="contained">
            Lägg till i kalender
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
