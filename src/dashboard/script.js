// Espera até que o documento HTML seja totalmente carregado
document.addEventListener("DOMContentLoaded", function () {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // Altera o valor dos cards de Pedidos recebidos e Solicitações Enviadas
  const cardRequest = document.querySelector(".card-response .card-text");
  const cardResponse = document.querySelector(".card-request .card-text");

  cardRequest.textContent = currentUser.requests?.length
    ? currentUser.requests?.length
    : 0;
  cardResponse.textContent = currentUser.responses?.length
    ? currentUser.responses?.length
    : 0;

  // Exibe o primeiro nome do usuário na mensagem de saudação
  const dashboardGreeting = document.querySelector(
    ".find-skills-greeting span"
  );
  if (currentUser.name.length > 0) {
    const firstName = currentUser.name.split(" ")[0];
    dashboardGreeting.textContent = `Olá, ${firstName}! 👋`;
  }

  // Só exibe o modal de desbloqueio dos créditos iniciais quando for novo usuário (ou seja nâo preencheu todos os dados de Perfil ainda)
  if (currentUser.newUser) {
    // 1. Encontra o elemento modal pelo seu ID
    let creditsUnlockModal = document.getElementById("modal-credits-unlock");

    // 2. Cria uma nova instância Modal do Bootstrap
    creditsUnlockModal = new bootstrap.Modal(creditsUnlockModal);

    // 3. Mostra o modal
    creditsUnlockModal.show();

    //Desabilita o click dos botões e remove links que redirecionam para outras páginas, impedindo o usuário de acessar outras páginas enquanto não finaliza o preenchimento seus dados no Perfil
    const cardLinkMyRequests = document.querySelectorAll(".card-link");
    const findSkillsButton = document.querySelector(".find-skills-button");
    const historyButton = document.querySelector(".history-button");

    cardLinkMyRequests.forEach((element) => {
      element.style.cursor = "not-allowed";
      element.href = "#";
    });

    findSkillsButton.removeAttribute("onclick");
    findSkillsButton.style.cursor = "not-allowed";

    historyButton.removeAttribute("onclick");
    historyButton.style.cursor = "not-allowed";
  }

  const recentActivitiesContent = document.getElementById(
    "recent-activities-content"
  );

  const activitieslist = currentUser.activities;
  const activitiesContainer = recentActivitiesContent;
  activitiesContainer.innerHTML = "";

  if (activitieslist.length > 0) {
    let activitiesHTML = "";
    activitieslist.forEach((element) => {
      activitiesHTML += `<div class="card w-100 rounded-0 rounded-bottom-1 cards-dashboard">
              <div class="card-body">
                <div class="d-flex flex-row gap-3">
                  <div class="d-block" style="text-align: left;">
                    <div
                      class="btn btn-light border rounded-circle lh-1 text-danger button-icon-circle"
                      type="button"
                    >
                      <i class="${element.icon}"></i>
                    </div>
                  </div>
                  <div style="text-align: left;">
                    <h6 class="mb-1 card-body-text-title">
                      ${element.status}
                    </h6>
                    <p class="mb-1 fs-6" style="font-size: 16px !important;">
                      ${element.description}
                    </p>
                    <span class="mb-1">${element.time}</span>
                  </div>
                </div>
              </div>
            </div>`;
    });

    const component1 = `<div class="card w-100 shadow" style="border-color: #dee2e6; padding: 15px">${activitiesHTML}</div>`;
    activitiesContainer.innerHTML = component1;
  }

  if (activitieslist.length === 0) {
    recentActivitiesContent.children[0].remove()

    const componentNoneActivity = `<div class="w-100 no-activities-content">
              <div class="calendar-icon">
                <div class="calendar-icon-circle">
                  <img src="img/calendar.svg" alt="Ícone de calendário vazio" />
                </div>
              </div>
              <div class="no-activities-description">
                <h3>Nenhuma atividade registrada</h3>
                <p>
                  Suas atividades recentes aparecerão aqui. <br />
                  ${currentUser.newUser ? "Complete seu perfil para começar a trocar habilidades!" : ""}
                </p>
              </div>
            </div>`;
    activitiesContainer.innerHTML = componentNoneActivity;
  }
});
