'use client';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';

export function Notification() {
  const notificationsNumber = 1;

  return (
    <SpeedDial
      ariaLabel="Notification Speed Dial"
      sx={{ position: 'absolute', top: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      <SpeedDialAction
        icon={
          <Badge
            variant="dot"
            color="error"
            invisible={notificationsNumber === 0}
          >
            <NotificationsIcon />
          </Badge>
        }
        tooltipTitle={
          notificationsNumber === 0
            ? 'Notification'
            : 'Du har en tillagd aktivitet'
        }
      />
    </SpeedDial>
  );
}
