import { users } from "./users.js";

const searchResultsContainer = document.getElementById("search-results");
const searchInput = document.querySelector(".search-input");

let listUsers = users;

const renderSearchResults = () => {
  if (listUsers.length === 0) {
    searchResultsContainer.innerHTML =
      "<p>Poxa, infelizmente não encontramos nenhum resultado :(</p>";
    return;
  }

  searchResultsContainer.innerHTML = listUsers
    .map(user => createUserCard(user))
    .join("");

  document.querySelectorAll(".user-card").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
      openModal(id);
    });
  });
};

const handleSearch = () => {
  const query = searchInput.value.toLowerCase();

  const filteredUsers = users
    .filter(user =>
      user.skills.some(
        skill =>
          skill.name.toLowerCase().includes(query) ||
          skill.description.toLowerCase().includes(query)
      )
    )
    .map(user => ({
      ...user,
      skills: user.skills.filter(
        skill =>
          skill.name.toLowerCase().includes(query) ||
          skill.description.toLowerCase().includes(query)
      )
    }));
  listUsers = filteredUsers;
  renderSearchResults();
};

const openModal = id => {
  const user = users.find(user => user.id === parseInt(id));
  if (!user) return;

  const modalContent = `
  <div class="modal-wrapper">
      <div class="close-modal">
        <div class="bar bar1"></div>
        <div class="bar bar2"></div>
      </div>
    <div class="modal-header">
      <img src="${user.image}" alt="${user.name}" class="modal-avatar"/>
      <h2 class="modal-name">${user.name}</h2>
      <p class="member-since">Membro desde Setembro, 2025 • ${user.location}</p>
      <p class="rating">${user.rating.score} (${
    user.rating.reviews
  } avaliações)</p>
    </div>
    <div class="modal-body">
      <h3 class="skill-name">${user.skills[0].name}</h3>
      <div class="skill-card">
        <div class="skill-icon"></div>
          <div class="skill-details">
            <strong class="skill-text">O que está incluído</strong>
            <p class="skill-description">${user.skills[0].description}</p>
            <div class="skill-footer">
              <div class="skill-infos">
                <p class="skill-price"><img src="./arrows.svg" alt="Variação"><img src="./credit.svg" alt="Preço">${
                  user.skills[0].price
                }</p>
                <p class="skill-availability">${
                  user.skills[0].availability ? "Remoto" : "Presencial"
                }</p>
              </div>
              <a href="/minhasSolicitacoes/" class="hire-button primary-button buttons">Solicitar serviço</a>
            </div>
          </div>
        </div>
      </div>
      <div class="review">
        <h3>Avaliações</h3>
        <div class="review-list">
         <div class="review-card">
            <div class="review-icon"></div>
            <strong class="review-name">Eduardo Almada</strong>
            <p class="review-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero sapien, sagittis at dolor id, lacinia ullamcor justo. Nulla facilisi.</p>
            <img src="./rating.svg" alt="Estrela" class="review-star"/>
            <span class="review-tag">Qualidade de serviço</span>
          </div>
          <div class="review-card">
            <div class="review-icon"></div>
            <strong class="review-name">Fernando Miranda</strong>
            <p class="review-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero sapien, sagittis at dolor id, lacinia ullamcor justo. Nulla facilisi.</p>
            <img src="./rating.svg" alt="Estrela" class="review-star"/>
            <span class="review-tag">Comunicação</span>
          </div>
          <div class="review-card">
            <div class="review-icon"></div>
            <strong class="review-name">Carmem Vitória</strong>
            <p class="review-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi libero sapien, sagittis at dolor id, lacinia ullamcor justo. Nulla facilisi.</p>
            <img src="./rating.svg" alt="Estrela" class="review-star"/>
            <span class="review-tag">Atendimento</span>
          </div>
        </div>
      </div>
      <a class="view-profile buttons primary-button" href="/src/profile/index.html">Ver perfil completo</a>
    </div>`;

  const modal = document.createElement("div");
  modal.id = "user-modal";
  modal.innerHTML = modalContent;

  document.body.appendChild(modal);

  document.querySelector(".close-modal").addEventListener("click", () => {
    document.body.removeChild(modal);
  });

  modal.addEventListener("click", event => {
    if (event.target === modal) {
      document.body.removeChild(modal);
    }
  });
};

const createUserCard = ({ id, name, location, image, skills, rating }) => {
  return `
    <div class="user-card" data-id="${id}">
      <div class="card-header">
        <img src="${image}" alt="${name}" class="avatar"/>
        <div class="user-info">
          <h2 class="user-name">${name}</h2>
          <p class="user-location">${location}</p>
        </div>
      </div>
      <div class="card-body">
        <strong class="skill-name">${skills[0].name}</strong>
        <p class="skill-description">${skills[0].description}</p>
      </div>
      <div class="card-footer">
        <p class="user-rating">${rating.score} (${rating.reviews} avaliações)</p>
        <strong class="skill-price"><img src="./arrows.svg" alt="Variação"><img src="./credit.svg" alt="Preço">${skills[0].price}</strong>
      </div>
    </div>
  `;
};

renderSearchResults();
searchInput.addEventListener("input", handleSearch);
