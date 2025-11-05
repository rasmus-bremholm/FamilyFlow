import { useState, useMemo } from "react";
import dayjs from "dayjs";
import { getCurrentWeekStart, getNextWeekStart, getPreviousWeekStart, getWeekArray, getWeekNumber, getWeekYear } from "./weekUtils";

export function useWeekNavigation() {
	const [weekStart, setWeekStart] = useState(getCurrentWeekStart());
	const currentWeek = useMemo(() => getWeekArray(weekStart), [weekStart]);
	const weekNumber = useMemo(() => getWeekNumber(weekStart), [weekStart]);
	const weekYear = useMemo(() => getWeekYear(weekStart), [weekStart]);

	const nextWeek = () => {
		setWeekStart((prev) => getNextWeekStart(prev));
	};

	const previousWeek = () => {
		setWeekStart((prev) => getPreviousWeekStart(prev));
	};

	const goToToday = () => {
		setWeekStart(getCurrentWeekStart());
	};

	const goToWeek = (weekNum, year = weekYear) => {
		const newDate = dayjs().isoWeekYear(year).isoWeek(weekNum).startOf("isoWeek");
		setWeekStart(newDate);
	};

	return {
		currentWeek,
		weekNumber,
		weekYear,
		nextWeek,
		previousWeek,
		goToToday,
		goToWeek,
		weekStart,
	};
}
