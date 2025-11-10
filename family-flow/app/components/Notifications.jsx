'use client';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import { useState } from 'react';

export function Notification() {
  const [notificationsNumber, setNotificationsNumber] = useState(1);

  const handleNotificationClick = () => {
    setNotificationsNumber((prev) => (prev > 0 ? prev - 1 : 0));
  };

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
            overlap="circular"
          >
            <NotificationsIcon />
          </Badge>
        }
        tooltipTitle={
          notificationsNumber === 0
            ? 'Notification'
            : 'Du har en tillagd aktivitet'
        }
        onClick={handleNotificationClick}
      />
    </SpeedDial>
  );
}
