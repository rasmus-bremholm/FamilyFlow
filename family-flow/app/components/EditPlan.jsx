"use client";

import { useState } from "react";
import { Button } from "@mui/material";
import Modal from "./Modal";

export default function EditPlan() {
  const [open, setOpen] = useState(false);

  const ActivityToEdit = {
    type: "activity",
    title: "Morning Run",
    time: "07:30",
    person: "Person 1",
    notes: "Warm up 10 min",
  };

  const handleEditPlan = (data) => {
    console.log("Plan edited:", data);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpen(true)}
        sx={{ borderRadius: 2, textTransform: "none", px: 3 }}
      >
        Edit Plan
      </Button>

      <Modal
        open={open}
        date="Monday, October 27"
        onClose={() => setOpen(false)}
        onSubmit={handleEditPlan}
        mode="edit"
        activity={ActivityToEdit}
      />
    </>
  );
}
