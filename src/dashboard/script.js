// Espera até que o documento HTML seja totalmente carregado 
  document.addEventListener('DOMContentLoaded', function () {
    // 1. Encontra o elemento modal pelo seu ID
    var creditsUnlockModal = document.getElementById('modal-credits-unlock');

    // 2. Cria uma nova instância Modal do Bootstrap
    var creditsUnlockModal = new bootstrap.Modal(creditsUnlockModal);

    // 3. Mostra o modal
    creditsUnlockModal.show();
  });