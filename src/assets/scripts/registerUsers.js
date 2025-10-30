import { users } from "/utils/db.js";

if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(users));
}
