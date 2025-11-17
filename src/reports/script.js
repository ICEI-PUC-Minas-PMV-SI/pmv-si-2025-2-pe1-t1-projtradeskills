import { alertBox } from "../utils/alertBox.js";

const user = UserStorage.getCurrentUser();
const users = JSON.parse(localStorage.getItem("users")) || [];

if (!user.isAdmin) {
  alertBox({
    message:
      "Acesso negado. Apenas administradores visualizar problemas reportados.",
    action: () => {
      window.location.href = "/dashboard/";
    }
  });
}

const reports = JSON.parse(localStorage.getItem("reports")) || [];

const reportsContainer = document.querySelector(".reports-wrapper");

function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function renderReports() {
  if (reports.length === 0) {
    const noReportsMessage = document.createElement("p");
    noReportsMessage.textContent = "Nenhum relatório encontrado.";
    reportsContainer.appendChild(noReportsMessage);
    return;
  }

  reports.forEach(report => {
    const reportElement = document.createElement("div");
    reportElement.classList.add("report");
    reportElement.innerHTML = `
    <h3 class="report-title">Tipo de Problema: ${report.type}</h3>
    <p class="report-user"><strong>Usuário:</strong> ${
      users.find(u => u.id === report.userId)?.email || "Desconhecido"
    }</p>
    <p class="report-description"><strong>Descrição:</strong> ${
      report.description
    }</p>
    <p class="report-date"><strong>Data:</strong> ${formatDate(report.date)}</p>

  `;
    reportsContainer.appendChild(reportElement);
  });
}

if (user.isAdmin) {
  renderReports();
}
