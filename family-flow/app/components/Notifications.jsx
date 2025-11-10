'use client';
import { useState } from 'react';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import Badge from '@mui/material/Badge';

export function Notification() {
  const [notificationsNumber, setNotificationsNumber] = useState(3);

  const handleNotificationClick = () => {
    setNotificationsNumber((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <SpeedDial
      ariaLabel="Notification Speed Dial"
      direction="left"
      sx={{ position: 'absolute', top: 70, right: 38 }}
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
