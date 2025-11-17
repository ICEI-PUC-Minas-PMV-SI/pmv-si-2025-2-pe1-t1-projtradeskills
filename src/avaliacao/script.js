const modal = document.getElementById("modal");
const openBtn = document.getElementById("botao-confirm");
const closeBtn = document.getElementById("close-modal");
const confirmBtn = document.querySelector ("confirmar-conclusao");

openBtn.addEventListener("click", ()=> {
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", ()=> {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

confirmBtn.addEventListener("click", () => {
    window.location.href = "avaliacao.html";
});