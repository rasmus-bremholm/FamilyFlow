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
import DeleteIcon from "@mui/icons-material/Delete";

import { useState } from "react";

import users from "../../lib/mockFunctions/mockUsers";

export default function Modal({ open, onClose, onSubmit, mode, event }) {

  const [eventType, seteventType] = useState(
    mode === "edit" && event ? event.eventType : "meal"
  );
  const [title, setTitle] = useState(
    mode === "edit" && event ? event.title : ""
  );
  const [activityCategory, setActivityCategory] = useState(
    mode === "edit" && event ? event.activityCategory : ""
  );
  const [startTime, setStartTime] = useState(
    mode === "edit" && event ? event.startTime : ""
  );
  const [date, setDate] = useState(mode === "edit" && event ? event.date : "");
  const [membersId, setmembersId] = useState(
    mode === "edit" && event ? event.membersId : []
  );
  const [notes, setNotes] = useState(
    mode === "edit" && event ? event.notes : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      eventType,
      title,
      activityCategory,
      startTime,
      date,
      membersId,
      notes,
    });

    if (mode === "add") {
      seteventType("meal");
      setTitle("");
      setActivityCategory("");
      setStartTime("");
      setDate("");
      setmembersId([]);
      setNotes("");
    }
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
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
          color: (theme) => `1.5px solid ${theme.palette.text.primary}`,
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogTitle
        sx={{
          color: (theme) => `1.5px solid ${theme.palette.text.primary}`,
          fontWeight: 550,
          fontSize: "1.25rem",
        }}
      >
        {mode === "add" ? "Add Event" : "Edit Event"}
      </DialogTitle>

      <DialogContent>
        <Box component="form" onSubmit={handleSubmit}>
          {/* Type Toggle */}
          <Typography
            variant="subtitle2"
            sx={{
              color: (theme) => `1.5px solid ${theme.palette.text.primary}`,
              mb: 0.5,
            }}
          >
            Type
          </Typography>
          <ToggleButtonGroup
            value={eventType}
            exclusive
            onChange={(_, value) => value && seteventType(value)}
            fullWidth
            sx={{
              mb: 3,
              display: "flex",
              gap: 1,
              "& .MuiToggleButton-root": {
                textTransform: "none",
                borderRadius: 3,
                border: (theme) => `1.5px solid ${theme.palette.primary.light}`,
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
          <Typography
            variant="subtitle2"
            sx={{
              color: (theme) => `1.5px solid ${theme.palette.text.primary}`,
              mb: 0.5,
            }}
          >
            Title *
          </Typography>
          <TextField
            placeholder={
              eventType === "meal"
                ? "e.g., Spaghetti Bolognese"
                : "e.g., Park Playdate"
            }
            fullWidth
            required
            margin="dense"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            InputProps={{
              sx: {
                borderRadius: 3,
              },
            }}
            sx={{ mb: 2 }}
          />

          {/* ActivityCategory */}
          {mode === "add" && eventType === "activity" && (
            <>
              <Typography
                variant="subtitle2"
                sx={{
                  color: (theme) => `1.5px solid ${theme.palette.text.primary}`,
                  mb: 0.5,
                }}
              >
                Category *
              </Typography>
              <TextField
                select
                fullWidth
                required
                margin="dense"
                value={activityCategory}
                onChange={(e) => setActivityCategory(e.target.value)}
                InputProps={{
                  sx: {
                    borderRadius: 3,
                  },
                }}
                sx={{ mb: 2 }}
              >
                {[
                  "Homework / Study",
                  "Outdoor Play",
                  "Sports / Exercise",
                  "Arts & Crafts",
                  "Music / Dance",
                  "Chores / Household Tasks",
                  "Screen / Media Time",
                  "Social / Playdates",
                  "Relax / Family Time",
                  "Nature / Outdoor Adventures",
                ].map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </TextField>
            </>
          )}

          {/* Time */}
          <Typography
            variant="subtitle2"
            sx={{
              color: (theme) => `1.5px solid ${theme.palette.text.primary}`,
              mb: 0.5,
            }}
          >
            Time *
          </Typography>
          <TextField
            required
            type="time"
            fullWidth
            margin="dense"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            InputProps={{
              sx: {
                borderRadius: 3,
              },
            }}
            sx={{ mb: 2 }}
          />

          {/* Date */}
          <Typography
            variant="subtitle2"
            sx={{
              color: (theme) => `1.5px solid ${theme.palette.text.primary}`,
              mb: 0.5,
            }}
          >
            Date *
          </Typography>
          <TextField
            required
            type="date"
            fullWidth
            margin="dense"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputProps={{
              sx: {
                borderRadius: 3,
              },
            }}
            sx={{ mb: 2 }}
          />

          {/* Assign members */}
          <Typography
            variant="subtitle2"
            sx={{
              color: (theme) => `1.5px solid ${theme.palette.text.primary}`,
              mb: 0.5,
            }}
          >
            Assign to *
          </Typography>
          <TextField
            required
            select
            fullWidth
            margin="dense"
            value={membersId}
            onChange={(e) => setmembersId(e.target.value)}
            SelectProps={{
              multiple: true,
            }}
            InputProps={{
              sx: {
                borderRadius: 3,
              },
            }}
            sx={{ mb: 2 }}
          >
            {users.map((names) => (
              <MenuItem key={names.id} value={names.id}>
                {names.name}
              </MenuItem>
            ))}
          </TextField>

          {/* Notes */}
          <Typography
            variant="subtitle2"
            sx={{
              color: (theme) => `1.5px solid ${theme.palette.text.primary}`,
              mb: 0.5,
            }}
          >
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
        {/* Render delete button in edit mode */}
        {mode === "edit" && (
          <Button
            onClick={() => ondeviceorientationabsolute(event.id)}
            variant="outlined"
            fullWidth
            color="primary"
            sx={{
              borderRadius: 3,
              textTransform: "none",
            }}
          >
            <DeleteIcon color="primary" sx={{ mr: 1 }} />
            Delete
          </Button>
        )}

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
            ? eventType === "meal"
              ? "Add Meal"
              : "Add Activity"
            : "Save Changes"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
