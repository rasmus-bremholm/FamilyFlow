//Mock Users
const users = [
	{
		id: 1,
		name: "Anna Svensson",
		email: "anna.svensson@example.com",
		password: "hashed_password_anna",
		familyID: "1001",
		eventsID: ["550e8400-e29b-41d4-a716-446655440000", "550e8400-e29b-41d4-a716-446655440001", "550e8400-e29b-41d4-a716-446655440002"],
	},
	{
		id: 2,
		name: "Johan Svensson",
		email: "johan.svensson@example.com",
		password: "hashed_password_johan",
		familyID: "1001",
		eventsID: ["550e8400-e29b-41d4-a716-446655440001", "550e8400-e29b-41d4-a716-446655440003"],
	},
	{
		id: 3,
		name: "Lisa Svensson",
		email: "lisa.svensson@example.com",
		password: "hashed_password_lisa",
		familyID: "1001",
		eventsID: ["550e8400-e29b-41d4-a716-446655440002", "550e8400-e29b-41d4-a716-446655440004"],
	},
	{
		id: 4,
		name: "Oskar Nilsson",
		email: "oskar.nilsson@example.com",
		password: "hashed_password_oskar",
		familyID: "1002",
		eventsID: ["550e8400-e29b-41d4-a716-446655440005", "550e8400-e29b-41d4-a716-446655440006"],
	},
];

export default users;

//localStorage.setItem("users", JSON.stringify(users));
