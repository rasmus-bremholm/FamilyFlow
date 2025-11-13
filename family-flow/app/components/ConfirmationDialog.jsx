'use client';
import { Dialog, DialogTitle, DialogContent, useTheme } from '@mui/material';

export default function ConfirmationDialog({ open }) {
  const theme = useTheme();

  return (
    <>
      <Dialog open={open} onClose={() => {}}>
        <DialogTitle sx={{ color: theme.palette.text.secondary }}>
          Tillagd!
        </DialogTitle>
        <DialogContent>
          Aktiviteten har nu lagts till i din kalender!
        </DialogContent>
      </Dialog>
    </>
  );
}
