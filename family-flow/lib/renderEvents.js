import { useState, useEffect } from 'react';

export function useRenderEvents() {
  const [events, setEvents] = useState([]);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    const getEvents = () => {
      if (typeof window === 'undefined') return;

      const storedEvents = localStorage.getItem('events');
      if (storedEvents) {
        setEvents(JSON.parse(storedEvents));
      }
    };
    getEvents();
  }, [trigger]);

  const refreshEvents = () => {
    setTrigger((prev) => prev + 1);
  };

  return { events, refreshEvents };
}
