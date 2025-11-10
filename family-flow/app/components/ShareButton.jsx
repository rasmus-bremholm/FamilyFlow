import {
  Box,
  IconButton,
  Snackbar,
  Tooltip,
  Button,
  Alert,
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import CloseIcon from '@mui/icons-material/Close'; // Kanske vi kan lägga till ifall...
import { useState } from 'react';

export default function ShareButton({ weekNumber }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Box onClick={handleClick}>
        <Tooltip title="Share Week" arrow>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Snackbar
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        autoHideDuration={2000}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Week {weekNumber} shared!
        </Alert>
      </Snackbar>
    </>
  );
}
