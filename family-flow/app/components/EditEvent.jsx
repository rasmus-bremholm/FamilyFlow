'use client';

import Modal from './Modal';

export default function EditEvent({ open, onClose, event }) {
  const handleEditEvent = (data) => {
    console.log('Event to edit:', data);

    if (!event) return;

    /* get logged in user*/
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    /* update current event */
    const editedEvent = {
      ...event, //event information
      ...data, //new input data
      createdBy: loggedInUser?.id || event.createdBy,
    };
    console.log('editedEvent', editedEvent);

    /* get all saved events */
    const events = JSON.parse(localStorage.getItem('events')) || [];

    /* replace old event with the edited event */
    const updatedEvents = events.map((event) =>
      event.id === editedEvent.id ? editedEvent : event
    );
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    console.log('updated Event array:', updatedEvents);

    onClose();
  };

  const handleDeleteEvent = (eventId) => {
    console.log('Event to delete:', eventId);

    /* get all saved events */
    const events = JSON.parse(localStorage.getItem('events')) || [];

    /* filter events array */
    const updatedEvents = events.filter((event) => event.id !== eventId);

    /* save updated array */
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    console.log('updated Event array:', updatedEvents);

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
