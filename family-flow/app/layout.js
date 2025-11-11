'use client';
import ThemeRegistry from '@/lib/themeregistry';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import EventContext from '@/lib/contexts/eventContext';
import { useEffect, useState } from 'react';
import { mockEvents } from '../lib/mockFunctions/mockEvents';

export default function RootLayout({ children }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = () => {
      setEvents(mockEvents);
    };
    getEvents();
  }, []);
  console.log('Layout ', events);

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <EventContext.Provider value={{ events, setEvents }}>
              {children}
            </EventContext.Provider>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
