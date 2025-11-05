export function getActivityColor(activityCategory) {
	const colors = {
		homework: "activity.main",
		outdoor: "activity.main",
		sports: "activity.main",
		arts: "activity.main",
		music: "activity.main",
		chore: "activity.main",
		screen: "activity.main",
		social: "activity.main",
		relax: "activity.main",
		nature: "activity.main",
	};
	return colors[activityCategory.toLowerCase() || "grey.500"];
}
