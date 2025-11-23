function generateRequestId() {
  return `req-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

document.addEventListener("click", event => {
  const hireButton = event.target.closest(".hire-button");

  if (hireButton) {
    event.preventDefault();

    const currentUser = UserStorage.getCurrentUser();

    if (!currentUser || !currentUser.id) {
      alert(
        "Você precisa estar logado para solicitar um serviço. Redirecionando para login..."
      );
      window.location.href = "/login/";
      return;
    }

    const providerId = hireButton.dataset.providerId;
    const skillName = hireButton.dataset.skillName;
    const credits = parseInt(hireButton.dataset.credits, 10);
    const availability = hireButton.dataset.availability;
    const modality = hireButton.dataset.modality;

    const consumerId = currentUser.id.toString();

    if (!providerId || !skillName || isNaN(credits)) {
      console.error(
        "Missing required data attributes on hire button.",
        hireButton.dataset
      );
      alert("Erro ao criar a solicitação. Dados do serviço estão incompletos.");
      return;
    }

    if (currentUser.id.toString() === providerId) {
      alert("Você não pode solicitar um serviço para si mesmo.");
      return;
    }

    const newRequest = {
      id: generateRequestId(),
      habilidade: skillName,
      providerId: providerId,
      consumerId: consumerId,
      date: new Date().toISOString().slice(0, 10),
      credits: credits,
      availability: availability,
      modality: modality,
      status: "pendente"
    };

    const userRequests = Array.isArray(currentUser.requests)
      ? currentUser.requests
      : [];
    const userActivities = Array.isArray(currentUser.activities)
      ? currentUser.activities
      : [];

    userRequests.push(newRequest);
    userActivities.push({
      icon: "bi bi-plus-circle",
      type: "solicitação enviada",
      description: `Solicitou o serviço "${skillName}" por ${credits} créditos.`,
      date: new Date()
    });

    UserStorage.updateUserData({ activities: userActivities });
    const success = UserStorage.updateUserData({ requests: userRequests });

    if (success) {
      console.log(
        "Nova solicitação salva em currentUser.requests:",
        newRequest
      );

      window.location.href = "/solicitacoes/";
    } else {
      alert("Erro ao salvar a solicitação. Tente novamente.");
    }
  }
});
