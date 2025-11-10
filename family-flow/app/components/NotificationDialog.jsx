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
  const [confirmationOpen, setConfirmationOpen] = useState(false);

  function handleConfirm() {
    if (onConfirm) onConfirm();

    if (onCancel) onCancel();

    setConfirmationOpen(true);
    setTimeout(() => {
      setConfirmationOpen(false);
    }, 2000);
  }

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

      {confirmationOpen && (
        <Dialog
          //open={confirmationOpen}
          //open={() => setConfirmationOpen(true)}
          open={handleConfirm}
          onClose={() => setConfirmationOpen(false)}
        >
          <DialogTitle>Tillagd!</DialogTitle>
          <DialogContent>
            Aktiviteten har nu lagts till i din kalender!
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
