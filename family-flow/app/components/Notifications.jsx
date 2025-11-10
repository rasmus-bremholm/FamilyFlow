import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';

export function Notification() {
  return (
    <SpeedDial
      ariaLabel="Notification Speed Dial"
      sx={{ position: 'absolute', top: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    ></SpeedDial>
  );
}
