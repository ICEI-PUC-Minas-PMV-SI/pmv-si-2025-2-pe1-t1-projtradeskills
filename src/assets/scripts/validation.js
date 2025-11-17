const userStatus = localStorage.getItem("userStatus");

if (userStatus != "online") {
  const alertMessage = `
  <div id="alert-container">
    <div class="alert alert-danger" role="alert">
      Você precisa estar logado para acessar esta página.
      <a href="/login/" class="close-button" aria-label="Fechar">Voltar</a>
    </div>
  </div>
  `;

  document.body.insertAdjacentHTML("afterbegin", alertMessage);
  document.documentElement.style.overflow = "hidden";
}
