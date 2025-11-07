import users from "./mockFunctions/mockUsers";

export function loginUser(email, password) {
  const loggedInUser = users.find(
    (user) => user.email === email && user.password === password
  );

  return loggedInUser;
}
