import users from "./users.json";

export function loginUser(email, password) {
  const loggedInUser = users.find(
    (user) => user.email === email && user.password === password
  );

  return loggedInUser;
}
