"use client";

import { useState } from "react";
import { Container, Button } from "@mui/material";
import ModalAddPlan from "./components/ModalAddPlan";

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleAddPlan = (data) => {
    console.log("Plan added:", data);
    // Här kan du spara i Supabase eller local state
  };

  return (
    <Container sx={{ mt: 4 }}>
      {/*       <Button
        variant="contained"
        color="success"
        onClick={() => setOpen(true)}
        sx={{ borderRadius: 2 }}
      >
        + Add Plan
      </Button>

      <ModalAddPlan
        open={open}
        date="Monday, October 27"
        onClose={() => setOpen(false)}
        onSubmit={handleAddPlan}
      /> */}
    </Container>
  );
}
