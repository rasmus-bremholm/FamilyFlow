"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Button } from "@mui/material";

import Modal from "./Modal";

export default function AddPlanButton() {
  const [open, setOpen] = useState(false);

  const handleAddPlan = (data) => {
    const planId = uuidv4();
    const newPlan = { id: planId, ...data };

    const plans = JSON.parse(localStorage.getItem("plans")) || [];
    const updatedPlans = [...plans, newPlan];

    localStorage.setItem("plans", JSON.stringify(updatedPlans));
    console.log("Plan added to local storage:", newPlan);
		console.log("updated plan array:", updatedPlans);
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
