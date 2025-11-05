"use client";

import { useState } from "react";
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
    <Modal
      open={open}
      date="Monday, October 27"
      onClose={() => setOpen(false)}
      onSubmit={handleEditPlan}
      mode="edit"
      activity={ActivityToEdit}
    />
  );
}
