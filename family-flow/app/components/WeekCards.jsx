import CalendarCard from "./CalendarCard";
import { Grid } from "@mui/material";
import { useWeekNavigation } from "@/lib/useWeekNavigation";

export default function WeekCards() {
	const { currentWeek } = useWeekNavigation();
	console.log(currentWeek);

	return (
		<Grid container spacing={2}>
			{currentWeek.map((day) => (
				<Grid key={day.date}>
					<CalendarCard shortDay={day.shortDay} dayNumber={day.dayNumber} isToday={day.isToday} />
				</Grid>
			))}
		</Grid>
	);
}
