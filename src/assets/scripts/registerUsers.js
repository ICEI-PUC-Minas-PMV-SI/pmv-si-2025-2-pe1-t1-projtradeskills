async function loadUsers() {
  if (!localStorage.getItem("users")) {
    const response = await fetch("db/users.json");
    const users = await response.json();
    localStorage.setItem("users", JSON.stringify(users));
  }
}

loadUsers();
