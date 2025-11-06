"use client";

import { useState } from "react";
import { Button } from "@mui/material";
import Modal from "./Modal";

export default function EditEvent() {
  const [open, setOpen] = useState(false);

  const EventToEdit = {
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
    console.log("Event edited:", data);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpen(true)}
        sx={{ borderRadius: 2, textTransform: "none", px: 3 }}
      >
        Edit Event
      </Button>

      <Modal
        open={open}
        date="Monday, October 27"
        onClose={() => setOpen(false)}
        onSubmit={handleEditEvent}
        mode="edit"
        event={EventToEdit}
      />
    </>
  );
}
