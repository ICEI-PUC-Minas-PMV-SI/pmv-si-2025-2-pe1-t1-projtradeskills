import users from "/db/users.json" with { type: "json" };

if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(users));
}
