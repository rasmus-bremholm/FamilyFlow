import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import isoWeek from "dayjs/plugin/isoWeek";

dayjs.extend(weekOfYear);
dayjs.extend(isoWeek);
dayjs.locale("sv");

// Denna funktionen returnerar veckan som en ISOWeek, bra för main-view kalendern
export function getWeekArray(startDate) {
	const week = [];
	const today = dayjs();
	for (let i = 0; i < 7; i++) {
		const date = startDate.add(i, "day");
		week.push({
			date: date.format("YYYY-MM-DD"), // Hela datumet 2025-10-15
			dayName: date.format("dddd"), // Monday, Tuesday etc...
			shortDay: date.format("ddd"),
			dayNumber: date.date(), // 1-31
			year: date.format("YYYY"),
			month: date.format("MMMM"),
			isToday: date.isSame(today, "day"),
			dayjs: date, // Hela datum objektet, ifall man behöver det.
		});
	}
	return week;
}

export function getCurrentWeekStart() {
	return dayjs().startOf("isoWeek");
}

export function getNextWeekStart(currentStart) {
	// Peta in startdatum på veckan och lägg på en vecka för att gå frammåt.
	return currentStart.add(1, "week");
}

export function getPreviousWeekStart(currentStart) {
	// Samma som förut, bara bakåt.
	return currentStart.subtract(1, "week");
}

export function getWeekNumber(date) {
	return date.isoWeek();
}

export function getWeekYear(date) {
	return date.isoWeekYear();
}
