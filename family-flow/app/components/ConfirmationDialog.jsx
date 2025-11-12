'use client';
import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';

export default function ConfirmationDialog({ open }) {
  return (
    <>
      <Dialog
        //open={confirmationOpen}
        //open={() => setConfirmationOpen(true)}
        open={open}
        onClose={() => {}}
      >
        <DialogTitle>Tillagd!</DialogTitle>
        <DialogContent>
          Aktiviteten har nu lagts till i din kalender!
        </DialogContent>
      </Dialog>
    </>
  );
}
