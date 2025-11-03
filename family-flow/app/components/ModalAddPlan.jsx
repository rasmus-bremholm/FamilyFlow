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
      slotProps={{
        paper: {
          sx: { borderRadius: 4, p: 1 },
        },
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
          <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
            Type
          </Typography>
          <ToggleButtonGroup
            value={type}
            onChange={(_, value) => value && setType(value)}
            fullWidth
            sx={{ mb: 2 }}
          >
            <ToggleButton value="meal" color="primary" sx={{ fontWeight: 500 }}>
              <RestaurantIcon color="primary" sx={{ mr: 1 }} /> Meal
            </ToggleButton>
            <ToggleButton
              value="activity"
              color="secondary"
              sx={{ fontWeight: 500 }}
            >
              <DirectionsRunIcon color="secondary" sx={{ mr: 1 }} /> Activity
            </ToggleButton>
          </ToggleButtonGroup>

          {/* Title */}
          <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
            Title *
          </Typography>
          <TextField
            placeholder="e.g., Spaghetti Bolognese"
            fullWidth
            required
            margin="dense"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* Notes */}
          <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
            Notes (optional)
          </Typography>
          <TextField
            placeholder="Add any notes..."
            fullWidth
            multiline
            minRows={2}
            margin="dense"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </Box>
      </DialogContent>

      <DialogActions
        sx={{ px: 0, pb: 0, gap: 1, display: "flex", flexDirection: "column" }}
      >
        <Button
          onClick={onClose}
          color="primary"
          variant="outlined"
          sx={{ borderRadius: 2, flex: 1, width: "100%" }}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={{ borderRadius: 2, flex: 1, width: "100%" }}
          onClick={handleSubmit}
        >
          {type === "meal" ? "Add Meal" : "Add Activity"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
