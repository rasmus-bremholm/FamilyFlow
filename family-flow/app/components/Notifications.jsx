'use client';
import { useState, useMemo } from 'react';
import {
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Avatar,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import Badge from '@mui/material/Badge';
import { useLogout } from '../../lib/logout';
import NotificationDialog from './NotificationDialog';
import ConfirmationDialog from './ConfirmationDialog';
import {
  mockLoggedinUsers,
  loggedInUser,
} from '../../lib/mockFunctions/mockLoggedInUser';

export function Notification() {
  const [notificationsNumber, setNotificationsNumber] = useState(1);
  const [notificationDialogOpen, setNotificationDialogOpen] = useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);

  const { showDialog, LogoutDialogElement } = useLogout();

  const loggedInUser = useMemo(() => {
    if (typeof window === 'undefined') return null;

    const storedUser = localStorage.getItem('loggedInUser');
    if (!storedUser) return null;

    return JSON.parse(storedUser);
  }, []);

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

  function handleConfirmation() {
    setTimeout(() => {
      setNotificationDialogOpen(false);
    }, 300);

    setTimeout(() => {
      setConfirmationOpen(true);
    }, 300);

    setTimeout(() => {
      setConfirmationOpen(false);
      setNotificationsNumber((prev) => (prev > 0 ? prev - 1 : 0));
    }, 3000);
    console.log('added');
  }

  return (
    <>
      <SpeedDial
        ariaLabel="Notification Speed Dial"
        direction="left"
        sx={{ position: 'absolute', top: 70, right: 38 }}
        icon={
          <Avatar
            key={loggedInUser.id}
            src={loggedInUser.avatarUrl}
            sx={{
              border: 'none !important',
              height: 56,
              width: 56,
              fontSize: 12,
              // bgcolor: getAvatarColor(loggedInUser),
            }}
            // {...stringAvatar(loggedInUser.name)}
          />
        }
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
        onConfirm={handleConfirmation}
        onCancel={handleNotificationDialogClose}
      />
      <ConfirmationDialog open={confirmationOpen} />
    </>
  );
}
