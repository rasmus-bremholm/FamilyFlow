'use client';
import ThemeRegistry from '@/lib/themeregistry';
import EventContext from '@/lib/contexts/eventContext';
import LoggedInUserContext from '@/lib/contexts/loggedInUserContext';
import { useState } from 'react';
import { mockEvents } from '../lib/mockFunctions/mockEvents';

export default function RootLayout({ children }) {
  const [events, setEvents] = useState(mockEvents);
  //deklarerar objektet här, sätter det till ett tomt objekt till att börja med, kan sättas i login.
  const [loggedInUser, setLoggedInUser] = useState({});

  console.log('Layout ', events);
  console.log(mockEvents);

  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <LoggedInUserContext.Provider
            value={{ loggedInUser, setLoggedInUser }}
          >
            <EventContext.Provider value={{ events, setEvents }}>
              {children}
            </EventContext.Provider>
          </LoggedInUserContext.Provider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
