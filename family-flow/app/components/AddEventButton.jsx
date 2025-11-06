"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Button } from "@mui/material";

import Modal from "./Modal";

export default function AddEventButton() {
  const [open, setOpen] = useState(false);

  const handleAddEvent = (data) => {
    /* generate plan id */
    const eventId = uuidv4();
    const newEvent = { id: eventId, ...data };

    const events = JSON.parse(localStorage.getItem("events")) || [];
    const updatedEvents = [...events, newEvent];

    localStorage.setItem("events", JSON.stringify(updatedEvents));
    console.log("Event added to local storage:", newEvent);
    console.log("updated Event array:", updatedEvents);

    /* get created by attribute + color?*/
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
