let users = JSON.parse(localStorage.getItem("users")) || [];

const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};

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
    .filter(user => {
      if (user.id === currentUser.id || user.email == "admin@admin.com") {
        return false;
      }
      return true;
    })
    .filter(user => user.skills.length > 0)
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
  const user = listUsers.find(user => user.id === parseInt(id));
  if (!user) return;

  document.documentElement.style.overflow = "hidden";

  const skill = user.skills[0];
  const modality = skill.availability ? "Remoto" : "Presencial";
  const availability = skill.availability || "Flexível";

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
      <p class="rating">${user.rating.score} (${user.rating.reviews} avaliações)</p>
    </div>
    <div class="modal-body">
      <h3 class="skill-name">${skill.name}</h3>
      <div class="skill-card">
        <div class="skill-icon"></div>
          <div class="skill-details">
            <strong class="skill-text">O que está incluído</strong>
            <p class="skill-description">${skill.description}</p>
            <div class="skill-footer">
              <div class="skill-infos">
                <p class="skill-price"><img src="/public/icons/arrows.svg" alt="Variação"><img src="/public/icons/credit.svg" alt="Preço">${skill.price}</p>
                <p class="skill-availability">${modality}</p>
              </div>
              <button class="hire-button primary-button buttons"
                data-provider-id="${user.id}"
                data-skill-name="${skill.name}"
                data-credits="${skill.price}"
                data-availability="${availability}"
                data-modality="${modality}"
                >Solicitar serviço</button>
            </div>
          </div>
        </div>
      </div>

      <a class="view-profile buttons primary-button" href="/profile/?id=${user.id}">Ver perfil completo</a>
    </div>`;

  const modal = document.createElement("div");
  modal.id = "user-modal";
  modal.innerHTML = modalContent;

  document.body.appendChild(modal);

  document.querySelector(".close-modal").addEventListener("click", () => {
    document.body.removeChild(modal);
    document.documentElement.style.overflow = "auto";
  });

  modal.addEventListener("click", event => {
    if (event.target === modal) {
      document.body.removeChild(modal);
      document.documentElement.style.overflow = "auto";
    }
  });
};

const createUserCard = ({ id, name, state, city, image, skills, rating }) => {
  return `
    <div class="user-card" data-id="${id}">
      <div class="card-header">
        <img src="${image}" alt="${name}" class="avatar"/>
        <div class="user-info">
          <h2 class="user-name">${name}</h2>
          <p class="user-location">${city}, ${state}</p>
        </div>
      </div>
      <div class="card-body">
        <strong class="skill-name">${skills[0].name}</strong>
        <p class="skill-description">${skills[0].description}</p>
      </div>
      <div class="card-footer">
        <p class="user-rating">${rating.score} (${rating.reviews} avaliações)</p>
        <strong class="skill-price"><img src="/public/icons/arrows.svg" alt="Variação"><img src="/public/icons/credit.svg" alt="Preço">${skills[0].price}</strong>
      </div>
    </div>
  `;
};

renderSearchResults();
searchInput.addEventListener("input", handleSearch);
