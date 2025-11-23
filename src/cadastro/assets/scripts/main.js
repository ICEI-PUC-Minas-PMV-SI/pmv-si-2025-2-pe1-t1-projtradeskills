let users = JSON.parse(localStorage.getItem("users")) || [];

import { alertBox } from "/utils/alertBox.js";

const submitButton = document.querySelector("form .btn");

function md5(string) {
  return CryptoJS.MD5(string).toString();
}

submitButton.addEventListener("click", () => {
  const nameInput = document.getElementById("cad-nome");
  const emailInput = document.getElementById("cad-email");
  const emailConfirmaInput = document.getElementById("cad-email-confirma");
  const passwordInput = document.getElementById("cad-senha");
  const passwordConfirmaInput = document.getElementById("cad-senha-confirma");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const emailConfirma = emailConfirmaInput.value.trim();
  const password = passwordInput.value;
  const passwordConfirma = passwordConfirmaInput.value;

  if (!name || !email || !emailConfirma || !password || !passwordConfirma) {
    alertBox({ message: "Por favor, preencha todos os campos." });
    return;
  }

  if (email !== emailConfirma) {
    alertBox({ message: "Os e-mails não coincidem." });
    return;
  }

  if (password !== passwordConfirma) {
    alertBox({ message: "As senhas não coincidem." });
    return;
  }

  const emailExists = users.some(user => user.email === email);
  if (emailExists) {
    alertBox({ message: "Este e-mail já está cadastrado." });
    return;
  }

  const newUser = {
    id: Math.floor(Date.now() * Math.random()),
    name,
    email,
    password: md5(password),
    newUser: true,
    credits: 0,
    skills: [],
    requests: [],
    responses: [],
    activities: [],
    image: "/public/icons/profile.svg"
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alertBox({
    message: "Cadastro realizado com sucesso!",
    textButton: "Ir para login",
    action: () => {
      window.location.href = "/login/";
    }
  });
});
