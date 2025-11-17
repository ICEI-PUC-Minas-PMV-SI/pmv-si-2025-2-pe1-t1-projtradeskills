import { alertBox } from "/utils/alertBox.js";

const user = UserStorage.getCurrentUser();

const typeInput = document.querySelector("#tipo-problema");
const descriptionInput = document.querySelector("#descricao");
const submitButton = document.querySelector("form .btn");

submitButton.addEventListener("click", event => {
  event.preventDefault();

  const type = typeInput.value.trim();
  const description = descriptionInput.value.trim();
  const userId = user ? user.id : null;

  if (!type || !description) {
    alertBox({ message: "Por favor, preencha todos os campos." });
    return;
  }
  const reports = JSON.parse(localStorage.getItem("reports")) || [];

  const newReport = {
    id: Math.floor(Date.now() * Math.random()),
    userId,
    type,
    description,
    date: new Date().toISOString()
  };

  reports.push(newReport);
  localStorage.setItem("reports", JSON.stringify(reports));

  alertBox({ message: "Relatório enviado com sucesso!" });
  typeInput.value = "";
  descriptionInput.value = "";
});
