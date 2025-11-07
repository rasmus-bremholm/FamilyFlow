import { useState, useEffect } from 'react';

export function useRenderEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const handleEvents = async () => {
      const storedEvents = localStorage.getItem('events');
      setEvents(JSON.parse(storedEvents));

    };
   
    handleEvents();
  });

  return events;
}
