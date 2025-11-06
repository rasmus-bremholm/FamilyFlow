"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Button } from "@mui/material";

import Modal from "./Modal";

export default function AddPlanButton() {
  const [open, setOpen] = useState(false);

  const handleAddPlan = (data) => {
    const planId = uuidv4();
    const plan = { id: planId, ...data };

    localStorage.setItem(`plan-${planId}`, JSON.stringify(plan));
    console.log("Plan added:", plan);
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
        onClose={() => setOpen(false)}
        onSubmit={handleAddPlan}
        mode="add"
      />
    </>
  );
}
