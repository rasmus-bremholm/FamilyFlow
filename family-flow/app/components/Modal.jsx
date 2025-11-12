'use client';

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
} from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

import { useState } from 'react';

import users from '../../lib/mockFunctions/mockUsers';

export default function Modal({
  open,
  onClose,
  onSubmit,
  onDelete,
  mode,
  event,
}) {
  const [eventType, seteventType] = useState(
    mode === 'edit' && event ? event.eventType : 'meal'
  );
  const [title, setTitle] = useState(
    mode === 'edit' && event ? event.title : ''
  );
  const [activityCategory, setActivityCategory] = useState(
    mode === 'edit' && event ? event.activityCategory : ''
  );
  const [startTime, setStartTime] = useState(
    mode === 'edit' && event ? event.startTime : ''
  );
  const [date, setDate] = useState(mode === 'edit' && event ? event.date : '');
  const [responsibleUsers, setResponsibleUsers] = useState(
    mode === 'edit' && event ? event.responsibleUsers : []
  );
  const [membersId, setMembersId] = useState(
    mode === 'edit' && event ? event.membersId : []
  );
  const [notes, setNotes] = useState(
    mode === 'edit' && event ? event.notes : ''
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      eventType,
      title,
      activityCategory,
      startTime,
      date,
      responsibleUsers,
      membersId,
      notes,
    });

    if (mode === 'add') {
      seteventType('meal');
      setTitle('');
      setActivityCategory('');
      setStartTime('');
      setDate('');
      setResponsibleUsers([]);
      setMembersId([]);
      setNotes('');
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
          sx: { borderRadius: 4, p: 1, position: 'relative' },
        },
      }}
    >
      {/* X Close Button */}
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
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
          fontSize: '1.25rem',
        }}
      >
        {mode === 'add' ? 'Lägg till event' : 'Redigera event'}
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
            Typ av event
          </Typography>
          <ToggleButtonGroup
            value={eventType}
            exclusive
            onChange={(_, value) => value && seteventType(value)}
            fullWidth
            sx={{
              mb: 3,
              display: 'flex',
              gap: 1,
              '& .MuiToggleButton-root': {
                textTransform: 'none',
                borderRadius: 3,
                border: (theme) => `1.5px solid ${theme.palette.primary.light}`,
              },
            }}
          >
            <ToggleButton value="meal" color="primary" sx={{ borderRadius: 2 }}>
              <RestaurantIcon color="primary" sx={{ mr: 1 }} /> Måltid
            </ToggleButton>
            <ToggleButton
              value="activity"
              color="secondary"
              sx={{ borderRadius: 2 }}
            >
              <DirectionsRunIcon color="secondary" sx={{ mr: 1 }} /> Aktivitet
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
            Titel
          </Typography>
          <TextField
            placeholder={
              eventType === 'meal'
                ? 't.ex. Spaghetti Bolognese'
                : 't.ex. Lekstund i parken'
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
          {mode === 'add' && eventType === 'activity' && (
            <>
              <Typography
                variant="subtitle2"
                sx={{
                  color: (theme) => `1.5px solid ${theme.palette.text.primary}`,
                  mb: 0.5,
                }}
              >
                Kategori
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
                  'Studier',
                  'Shopping',
                  'Idrott',
                  'Konst',
                  'Musik',
                  'Sysslor',
                  'Hobby',
                  'Vänner',
                  'Familj',
                  'Äventyr',
                ].map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </TextField>
            </>
          )}
          <Box display="flex" gap={1}>
            <Box flex={1}>
              {/* Time */}
              <Typography
                variant="subtitle2"
                sx={{
                  color: (theme) => `1.5px solid ${theme.palette.text.primary}`,
                  mb: 0.5,
                }}
              >
                Tid
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
            </Box>
            <Box flex={1}>
              {/* Date */}
              <Typography
                variant="subtitle2"
                sx={{
                  color: (theme) => `1.5px solid ${theme.palette.text.primary}`,
                  mb: 0.5,
                }}
              >
                Datum
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
            </Box>
          </Box>

          {/* Responsible person */}
          <Typography
            variant="subtitle2"
            sx={{
              color: (theme) => `1.5px solid ${theme.palette.text.primary}`,
              mb: 0.5,
            }}
          >
            Vem är ansvarig?
          </Typography>
          <TextField
            required
            select
            fullWidth
            margin="dense"
            value={responsibleUsers}
            onChange={(e) => setResponsibleUsers(e.target.value)}
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

          {/* Assign members */}
          <Typography
            variant="subtitle2"
            sx={{
              color: (theme) => `1.5px solid ${theme.palette.text.primary}`,
              mb: 0.5,
            }}
          >
            Vem närvarar?
          </Typography>
          <TextField
            required
            select
            fullWidth
            margin="dense"
            value={membersId}
            onChange={(e) => setMembersId(e.target.value)}
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
            Anteckningar (valfritt)
          </Typography>
          <TextField
            placeholder="Lägg till anteckningar..."
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
          display: 'flex',
          gap: 1,
        }}
      >
        {/* Render delete button in edit mode */}
        {mode === 'edit' && (
          <Button
            onClick={() => onDelete(event.id)}
            variant="outlined"
            fullWidth
            color="primary"
            sx={{
              borderRadius: 3,
              textTransform: 'none',
            }}
          >
            <DeleteIcon color="primary" sx={{ mr: 1 }} />
            Radera
          </Button>
        )}

        <Button
          onClick={onClose}
          variant="outlined"
          fullWidth
          color="primary"
          sx={{
            borderRadius: 3,
            textTransform: 'none',
          }}
        >
          Avbryt
        </Button>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            borderRadius: 3,
            textTransform: 'none',
          }}
          onClick={handleSubmit}
        >
          {mode === 'add'
            ? eventType === 'meal'
              ? 'Lägg till måltid'
              : 'Lägg till aktivitet'
            : 'Spara ändringar'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
