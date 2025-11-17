export function alertBox({ message, textButton = "Voltar", action = null }) {
  const alertMessage = `
  <div id="alert-container">
    <div class="alert alert-danger" role="alert">
      ${message}
      <button class="close-button">${textButton}</button>
    </div>
  </div>
  `;

  document.body.insertAdjacentHTML("afterbegin", alertMessage);
  document.documentElement.style.overflow = "hidden";

  const closeButton = document.querySelector("#alert-container .close-button");
  closeButton.addEventListener("click", () => {
    const alertContainer = document.getElementById("alert-container");
    alertContainer.remove();
    document.documentElement.style.overflow = "";
    if (action) {
      action();
    }
  });
}
