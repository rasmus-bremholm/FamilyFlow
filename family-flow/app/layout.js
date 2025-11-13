'use client';
import ThemeRegistry from '@/lib/themeregistry';
import EventContext from '@/lib/contexts/eventContext';
import loggedInUserContext from '@/lib/contexts/loggedInUserContext';
import { useEffect, useState } from 'react';
import { mockEvents } from '../lib/mockFunctions/mockEvents';

export default function RootLayout({ children }) {
  const [events, setEvents] = useState(mockEvents);

  console.log('Layout ', events);
  console.log(mockEvents);

  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <EventContext.Provider value={{ events, setEvents }}>
            {children}
          </EventContext.Provider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
