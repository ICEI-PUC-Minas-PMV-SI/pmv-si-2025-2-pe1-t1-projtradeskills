import { alertBox } from "/utils/alertBox.js";

const users = JSON.parse(localStorage.getItem("users")) || [];

const loginButton = document.querySelector("#login-button");

function md5(string) {
  return CryptoJS.MD5(string).toString();
}

loginButton.addEventListener("click", event => {
  event.preventDefault();

  const emailInput = document.getElementById("login-email");
  const passwordInput = document.getElementById("login-senha");

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
    alertBox({ message: "Por favor, preencha todos os campos." });
    return;
  }

  const user = users.find(user => user.email === email);

  if (!user) {
    alertBox({ message: "Usuário não encontrado." });
    return;
  }

  if (user) {
    const hashedPassword = md5(password);
    if (user.password !== hashedPassword) {
      alertBox({ message: "E-mail ou senha incorretos." });
      return;
    }
  }

  if (user) {
    localStorage.setItem("userStatus", "online");
    UserStorage.setCurrentUser(user);
    // localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "/dashboard/";
  } else {
    alertBox({ message: "E-mail ou senha incorretos." });
  }
});
