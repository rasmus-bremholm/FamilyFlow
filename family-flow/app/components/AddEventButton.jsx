'use client';

import { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useRenderEvents } from '@/lib/renderEvents';
import Modal from './Modal';
import eventContext from '@/lib/contexts/eventContext';

export default function AddEventButton() {
  const { refreshEvents } = useRenderEvents();
  const [open, setOpen] = useState(false);
  const { events, setEvents } = useContext(eventContext);

  const handleAddEvent = (data) => {
    /* get logged in user*/
    const storedUser = localStorage.getItem('loggedInUser');
    const loggedInUser = storedUser ? JSON.parse(storedUser) : null;
    const createdBy = loggedInUser ? loggedInUser.id : 0;

    /* generate event id */
    const eventId = uuidv4();

    /* Save event to local storage */
    const newEvent = { id: eventId, createdBy, ...data };

    const events = JSON.parse(localStorage.getItem('events')) || [];
    const updatedEvents = [...events, newEvent];

    // Byt ut detta mot sätta events i context?
    setEvents((prevEvents) => [...prevEvents, newEvent]);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    refreshEvents();
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpen(true)}
        sx={{
          gap: 1,
          borderRadius: 2,
          textTransform: 'none',
          px: 3,
        }}
      >
        <AddIcon sx={{ fontSize: 16 }} /> Lägg till event
      </Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleAddEvent}
        mode="add"
      />
    </>
  );
}
