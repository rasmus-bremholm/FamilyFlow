export function getActivityColor(activityCategory) {
	const colors = {
		homework: "activity.homework",
		outdoor: "activity.outdoor",
		sport: "activity.sport",
		arts: "activity.arts",
		music: "activity.music",
		chore: "activity.chore",
		screen: "activity.screen",
		social: "activity.social",
		relax: "activity.relax",
		nature: "activity.nature",
	};
	return colors[activityCategory.toLowerCase() || "grey.500"];
}
