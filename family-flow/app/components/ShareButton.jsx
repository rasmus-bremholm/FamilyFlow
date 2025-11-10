import { Box, IconButton, Snackbar, Tooltip, Button } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export default function ShareButton() {
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
        <Tooltip title="Share" arrow>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Snackbar
        open={open}
        onClose={handleClose}
        message="Week Shared"
        autoHideDuration={2000}
      />
    </>
  );
}
