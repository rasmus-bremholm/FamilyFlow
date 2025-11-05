"use client";

import { useState } from "react";
import { Button } from "@mui/material";
import Modal from "./Modal";

export default function AddPlanButton() {
  const [open, setOpen] = useState(false);

  const handleAddPlan = (data) => {
    console.log("Plan added:", data);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpen(true)}
        sx={{ borderRadius: 2, textTransform: "none", px: 3 }}
      >
        + Add Plan
      </Button>

      <Modal
        open={open}
        date="Monday, October 27"
        onClose={() => setOpen(false)}
        onSubmit={handleAddPlan}
        mode="add"
      />
    </>
  );
}
