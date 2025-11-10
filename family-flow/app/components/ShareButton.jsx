import { Box, IconButton, Snackbar, Tooltip } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export default function ShareButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box>
        <Tooltip title="Share" arrow>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
}
