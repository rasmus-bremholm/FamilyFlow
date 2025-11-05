// Klistrar in detta i chrome konsollen bara för att ha något att arbeta med.
const mockActivities = [
	{
		id: 1,
		title: "Lunch",
		date: "2025-11-05",
		startTime: "10:00",
		createdBy: "Malin Johansson",
		membersId: ["Lars Jörgensson", "Lisa Lycklig"],
		activityType: "lunch",
		notes: "Lorem ipsum dolor sit amet",
		color: "#FF6B6B",
	},
	{
		id: 2,
		title: "Träning",
		date: "2025-11-05",
		startTime: "18:00",
		createdBy: "Erik Svensson",
		membersId: ["Anna Berg"],
		activityType: "exercise",
		notes: "Kvällsträning",
		color: "#4ECDC4",
	},
	{
		id: 3,
		title: "Möte",
		date: "2025-11-06",
		startTime: "14:00",
		createdBy: "Sara Nilsson",
		membersId: [],
		activityType: "meeting",
		notes: "Projektmöte",
		color: "#95E1D3",
	},
];

localStorage.setItem("activities", JSON.stringify(mockActivities));
