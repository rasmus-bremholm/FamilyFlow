"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Box,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import { useState } from "react";

export default function ModalAddPlan({ open, date, onClose, onSubmit }) {
  const [type, setType] = useState("meal");
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ type, title, notes });
    setTitle("");
    setNotes("");
    setType("meal");
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      PaperProps={{
        sx: { borderRadius: 3, p: 1, bgcolor: "#f9fdf9" },
      }}
    >
      <DialogTitle>
        <Typography variant="h6" fontWeight={550}>
          {date}
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Box component="form" onSubmit={handleSubmit}>
          {/* Type Toggle */}
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Type
          </Typography>
          <ToggleButtonGroup
            color="success"
            exclusive
            value={type}
            onChange={(_, value) => value && setType(value)}
            fullWidth
            sx={{ mb: 2 }}
          >
            <ToggleButton value="meal" sx={{ py: 1.5, fontWeight: 500 }}>
              <RestaurantIcon sx={{ mr: 1 }} /> Meal
            </ToggleButton>
            <ToggleButton value="activity" sx={{ py: 1.5, fontWeight: 500 }}>
              <DirectionsRunIcon sx={{ mr: 1 }} /> Activity
            </ToggleButton>
          </ToggleButtonGroup>

          {/* Title */}
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Title *
          </Typography>
          <TextField
            placeholder="e.g., Spaghetti Bolognese"
            fullWidth
            required
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* Notes */}
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Notes (optional)
          </Typography>
          <TextField
            placeholder="Add any notes..."
            fullWidth
            multiline
            minRows={2}
            margin="normal"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button
          onClick={onClose}
          variant="outlined"
          color="inherit"
          sx={{ borderRadius: 2 }}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="success"
          sx={{ borderRadius: 2, px: 3 }}
          onClick={handleSubmit}
        >
          {type === "meal" ? "Add Meal" : "Add Activity"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
