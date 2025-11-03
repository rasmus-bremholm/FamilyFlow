import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import isoWeek from "dayjs/plugin/isoWeek";

dayjs.extend(weekOfYear);
dayjs.extend(isoWeek);

// Denna funktionen returnerar veckan som en ISOWeek, bra för main-view kalendern
export function getCurrentWeek() {
	const today = dayjs();
	const startOfWeek = today.startOf("isoWeek");

	const week = [];
	for (let i = 0; i < 7; i++) {
		const date = startOfWeek.add(i, "day");
		week.push({
			date: date.format("YYYY-MM-DD"), // Hela datumet 2025-10-15
			dayName: date.format("dddd"), // Monday, Tuesday etc...
			dayNumber: date.date(), // 1-31
			isToday: date.isSame(today, "day"),
			dayjs: date, // Hela datum objektet, ifall man behöver det.
		});
	}
	return currentWeek;
}
