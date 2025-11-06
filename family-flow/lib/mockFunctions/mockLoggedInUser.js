// loggedInUser

//Mock Users
const loggedInUser = {
	id: 1,
	name: "Anna Svensson",
	email: "anna.svensson@example.com",
	password: "hashed_password_anna",
	familyID: "1001",
	eventsID: ["550e8400-e29b-41d4-a716-446655440000", "550e8400-e29b-41d4-a716-446655440001", "550e8400-e29b-41d4-a716-446655440002"],
};

localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
