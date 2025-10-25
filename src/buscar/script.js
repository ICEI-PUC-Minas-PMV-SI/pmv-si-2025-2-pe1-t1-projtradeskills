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
      <span class="close-button" id="close-modal">&times;</span>
    <div class="modal-header">
      <img src="${user.image}" alt="${user.name}" class="modal-avatar"/>
      <h2>${user.name}</h2>
      <p class="member-since">Membro desde Setembro, 2025 • ${user.location}</p>
      <p class="rating">${user.rating.score} (${user.rating.reviews} avaliações)</p>
    </div>
    <div class="modal-body">
      <p><strong>Localização:</strong> ${user.location}</p>
    </div>
  </div>
  `;

  const modal = document.createElement("div");
  modal.id = "user-modal";
  modal.innerHTML = modalContent;

  document.body.appendChild(modal);

  document.getElementById("close-modal").addEventListener("click", () => {
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
        <strong class="skill-price">${skills[0].price}</strong>
      </div>
    </div>
  `;
};

renderSearchResults();
searchInput.addEventListener("input", handleSearch);
