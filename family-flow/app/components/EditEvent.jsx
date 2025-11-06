"use client";

import { useState } from "react";
import { Button } from "@mui/material";
import Modal from "./Modal";

export default function EditEvent() {
  const [open, setOpen] = useState(false);

  const eventToEdit = {
    eventCategory: "Sports / Exercise",
    eventType: "activity",
    title: "Morning run",
    startTime: "07:30",
    date: "2025-11-06",
    notes: "Warm up 10 min",
    id: 1,
    createdBy: 3,
    membersId: [1, 2],
  };

  const handleEditEvent = (data) => {
    console.log("Event to edit:", data);

    /* get logged in user*/
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    /* update current event */
    const editedEvent = {
      ...eventToEdit, //event information
      ...data, //new input data
      createdBy: loggedInUser?.id || eventToEdit.createdBy,
    };
    console.log("editedEvent", editedEvent);

    /* get all saved events */
    const events = JSON.parse(localStorage.getItem("events")) || [];

    /* replace old event with the edited event */
    const updatedEvents = events.map((event) =>
      event.id === editedEvent.id ? editedEvent : event
    );
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    console.log("updated Event array:", updatedEvents);
  };

  const handleDeleteEvent = (eventId) => {
    console.log("Event to delete:", eventId);

    /* get all saved events */
    const events = JSON.parse(localStorage.getItem("events")) || [];

    /* filter events array */
    const updatedEvents = events.filter((event) => event.id !== eventId);

    /* save updated array */
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    console.log("updated Event array:", updatedEvents);

    setOpen(false);
  };

  return (
    <>
      {/* Mock button for testing */}
      {/*       <Button
        variant="contained"
        color="primary"
        onClick={() => setOpen(true)}
        sx={{ borderRadius: 2, textTransform: "none", px: 3 }}
      >
        Edit Event
      </Button> */}

      <Modal
        open={open}
        date="Monday, October 27"
        onClose={() => setOpen(false)}
        onSubmit={handleEditEvent}
        onDelete={handleDeleteEvent}
        mode="edit"
        event={eventToEdit}
      />
    </>
  );
}
