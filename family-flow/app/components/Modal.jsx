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
  IconButton,
  MenuItem,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";

export default function Modal({
  open,
  date,
  onClose,
  onSubmit,
  mode,
  activity,
}) {
  const [type, setType] = useState(
    mode === "edit" && activity ? activity.type : "meal"
  );
  const [title, setTitle] = useState(
    mode === "edit" && activity ? activity.title : ""
  );
  const [time, setTime] = useState(
    mode === "edit" && activity ? activity.time : ""
  );
  const [person, setPerson] = useState(
    mode === "edit" && activity ? activity.person : ""
  );
  const [notes, setNotes] = useState(
    mode === "edit" && activity ? activity.notes : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ type, title, notes });
    setTitle("");
    setTime("");
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
          sx: { borderRadius: 4, p: 1, position: "relative" },
        },
      }}
    >
      {/* X Close Button */}
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogTitle sx={{ fontWeight: 550, fontSize: "1.25rem" }}>
        {date}{" "}
        {/* {mode === "add" ? `Add Plan - ${date}` : `Edit Plan - ${date}`} */}
      </DialogTitle>

      <DialogContent>
        <Box component="form" onSubmit={handleSubmit}>
          {/* Type Toggle */}
          <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
            Type
          </Typography>
          <ToggleButtonGroup
            value={type}
            exclusive
            onChange={(_, value) => value && setType(value)}
            fullWidth
            sx={{
              mb: 3,
              display: "flex",
              gap: 1,
              "& .MuiToggleButton-root": {
                textTransform: "none",
                borderRadius: 3,
                border: "1.5px solid #c8e1c8",
              },
            }}
          >
            <ToggleButton value="meal" color="primary" sx={{ borderRadius: 2 }}>
              <RestaurantIcon color="primary" sx={{ mr: 1 }} /> Meal
            </ToggleButton>
            <ToggleButton
              value="activity"
              color="secondary"
              sx={{ borderRadius: 2 }}
            >
              <DirectionsRunIcon color="secondary" sx={{ mr: 1 }} /> Activity
            </ToggleButton>
          </ToggleButtonGroup>

          {/* Title */}
          <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
            Title *
          </Typography>
          <TextField
            placeholder={
              type === "meal"
                ? "e.g., Spaghetti Bolognese"
                : "e.g., Park Playdate"
            }
            fullWidth
            required
            margin="dense"
            value={title}
            onChange={(e) => setPerson(e.target.value)}
            InputProps={{
              sx: {
                borderRadius: 3,
              },
            }}
            sx={{ mb: 2 }}
          />

          {/* Time */}
          <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
            Time (optional)
          </Typography>
          <TextField
            type="time"
            fullWidth
            margin="dense"
            onChange={(e) => setTitle(e.target.value)}
            InputProps={{
              sx: {
                borderRadius: 3,
              },
            }}
            sx={{ mb: 2 }}
          />

          {/* Assign */}
          <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
            Assign to (optional)
          </Typography>
          <TextField
            select
            fullWidth
            margin="dense"
            onChange={(e) => setTitle(e.target.value)}
            InputProps={{
              sx: {
                borderRadius: 3,
              },
            }}
            sx={{ mb: 2 }}
          >
            <MenuItem value="Person 1">Person 1</MenuItem>
            <MenuItem value="Person 2">Person 2</MenuItem>
          </TextField>

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
            InputProps={{
              sx: {
                borderRadius: 3,
              },
            }}
            sx={{ mb: 2 }}
          />
        </Box>
      </DialogContent>

      <DialogActions
        sx={{
          px: 3,
          pb: 3,
          pt: 0,
          display: "flex",
          gap: 1,
        }}
      >
        <Button
          onClick={onClose}
          variant="outlined"
          fullWidth
          color="primary"
          sx={{
            borderRadius: 3,
            textTransform: "none",
          }}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            borderRadius: 3,
            textTransform: "none",
          }}
          onClick={handleSubmit}
        >
          {mode === "add"
            ? type === "meal"
              ? "Add Meal"
              : "Add Activity"
            : "Save Changes"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
