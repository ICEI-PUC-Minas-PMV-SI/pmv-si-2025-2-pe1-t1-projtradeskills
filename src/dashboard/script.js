// Espera até que o documento HTML seja totalmente carregado
document.addEventListener("DOMContentLoaded", function () {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

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

    cardLinkMyRequests.forEach(element => {
      element.style.cursor = "not-allowed";
      element.href = "#";
    });

    findSkillsButton.removeAttribute("onclick"); 
    findSkillsButton.style.cursor = "not-allowed";

    historyButton.removeAttribute("onclick"); 
    historyButton.style.cursor = "not-allowed";


    // TODO Desabilitar os itens do menu Meu Histórico, Minhas solicitações e Buscar Habilidades.

  }
});
