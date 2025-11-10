import { useState, useEffect } from 'react';

export function useRenderEvents() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [events, setEvents] = useState([]);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError(null);

    try {
      const storedEvents = localStorage.getItem('events');
      if (storedEvents) {
        setEvents(JSON.parse(storedEvents));
      } else {
        setEvents([]);
      }
    } catch (error) {
      setError(error.message || 'Failed to load events');
      setEvents([]);
    } finally {
      setLoading(false);
    }
  }, [trigger]);

  const refreshEvents = () => {
    setTrigger((prev) => prev + 1);
  };

  return { events, loading, error, refreshEvents };
}
