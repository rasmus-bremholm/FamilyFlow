'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import LogoutDialog from '@/app/components/LogoutDialog';

export function useLogout() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  function showDialog() {
    setOpen(true);
  }

  function cancel() {
    setOpen(false);
  }

  function logoutUser() {
    localStorage.removeItem('loggedInUser');
    setOpen(false);
    router.push('/login');
  }

  const LogoutDialogElement = (
    <LogoutDialog open={open} onConfirm={logoutUser} onCancel={cancel} />
  );

  return { showDialog, LogoutDialogElement };
}
