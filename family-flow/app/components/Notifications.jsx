'use client';
import { useState } from 'react';
import {
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import Badge from '@mui/material/Badge';
import { useLogout } from '../../lib/logout';
import NotificationDialog from './NotificationDialog';

export function Notification() {
  const [notificationsNumber, setNotificationsNumber] = useState(1);
  const [notificationDialogOpen, setNotificationDialogOpen] = useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);

  const { showDialog, LogoutDialogElement } = useLogout();

  function handleSettings() {
    console.log(settings);
  }

  function handleNotificationClick() {
    setNotificationDialogOpen(true);
  }

  function handleNotificationDialogClose() {
    setNotificationDialogOpen(false);
    setNotificationsNumber((prev) => (prev > 0 ? prev - 1 : 0));
  }

  function openConfirmation() {
    setConfirmationOpen(true);

    setTimeout(() => {
      setConfirmationOpen(false);
      handleNotificationDialogClose();
      //setNotificationDialogOpen(false);
      setNotificationsNumber((prev) => (prev > 0 ? prev - 1 : 0));
    }, 2000);
    console.log('added');
  }

  return (
    <>
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
        <SpeedDialAction
          icon={<SettingsIcon />}
          tooltipTitle="Inställningar"
          onClick={handleSettings}
        />
        <SpeedDialAction
          icon={<LogoutIcon />}
          tooltipTitle="Logga ut"
          onClick={showDialog}
        />
      </SpeedDial>
      {LogoutDialogElement}

      <NotificationDialog
        open={notificationDialogOpen}
        onConfirm={openConfirmation}
        onCancel={handleNotificationDialogClose}
      />
    </>
  );
}
