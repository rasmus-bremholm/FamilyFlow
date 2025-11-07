// loggedInUser

//Mock Users
const loggedInUser = {
	id: 1,
	name: "Anna Svensson",
	email: "anna.svensson@example.com",
	password: "hashed_password_anna",
	familyId: "1001",
};

localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
