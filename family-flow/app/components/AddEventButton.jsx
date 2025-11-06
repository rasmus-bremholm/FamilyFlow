"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Button } from "@mui/material";

import Modal from "./Modal";

export default function AddEventButton() {
  const [open, setOpen] = useState(false);

  const handleAddEvent = (data) => {
    /* get logged in user*/
    const storedUser = localStorage.getItem("loggedInUser");
    const loggedInUser = storedUser ? JSON.parse(storedUser) : null;
    const createdBy = loggedInUser ? loggedInUser.id : 0;

    /* generate event id */
    const eventId = uuidv4();

    /* Save event to local storage */
    const newEvent = { id: eventId, createdBy, ...data };
    console.log("new event:", newEvent);

    const events = JSON.parse(localStorage.getItem("events")) || [];
    const updatedEvents = [...events, newEvent];

    localStorage.setItem("events", JSON.stringify(updatedEvents));
    console.log("updated Event array:", updatedEvents);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpen(true)}
        sx={{ borderRadius: 2, textTransform: "none", px: 3 }}
      >
        + Add Event
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
