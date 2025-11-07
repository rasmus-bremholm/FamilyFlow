import CalendarCard from './CalendarCard';
import { Grid } from '@mui/material';
//import { useWeekNavigation } from "@/lib/useWeekNavigation";

export default function WeekCards({ currentWeek }) {
  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {currentWeek.map((day) => (
        <Grid key={day.date} size={{ xs: 12, md: 'grow' }}>
          <CalendarCard
            shortDay={day.shortDay}
            dayNumber={day.dayNumber}
            isToday={day.isToday}
            date={day.date}
          />
        </Grid>
      ))}
    </Grid>
  );
}
