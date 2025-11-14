'use client';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';

export default function LogoutDialog({ open, onConfirm, onCancel }) {
  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>Bekräfta utloggning</DialogTitle>
      <DialogContent>Vill du logga ut?</DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="inherit">
          Avbryt
        </Button>
        <Button onClick={onConfirm} color="primary" variant="contained">
          Logga ut
        </Button>
      </DialogActions>
    </Dialog>
  );
}
