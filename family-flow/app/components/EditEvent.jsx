'use client';

import { useContext } from 'react';

import Modal from './Modal';
import eventContext from '@/lib/contexts/eventContext';
import { useRenderEvents } from '@/lib/renderEvents';

export default function EditEvent({ open, onClose, event }) {
  const { refreshEvents } = useRenderEvents();
  const { events, setEvents } = useContext(eventContext);

  const handleEditEvent = (data) => {
    if (!event) return;

    /* get logged in user*/
    const storedUser = typeof window !== 'undefined' ? localStorage.getItem('loggedInUser') : null;
    const loggedInUser = storedUser ? JSON.parse(storedUser) : null;

    /* update current event */
    const editedEvent = {
      ...event,
      ...data,
      createdBy: loggedInUser?.id || event.createdBy,
    };

    /* replace old event with the edited event */
    const updatedEvents = events.map((event) =>
      event.id === editedEvent.id ? editedEvent : event
    );
    setEvents(updatedEvents);

    refreshEvents();
    onClose();
  };

  const handleDeleteEvent = (eventId) => {
    /* filter events array */
    const updatedEvents = events.filter((event) => event.id !== eventId);

    /* save updated array */
    setEvents(updatedEvents);

    refreshEvents();
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      onSubmit={handleEditEvent}
      onDelete={() => handleDeleteEvent(event.id)}
      mode="edit"
      event={event}
    />
  );
}
