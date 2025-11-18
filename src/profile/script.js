const users = JSON.parse(localStorage.getItem("users")) || [];

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const user = users.find(user => user.id === parseInt(id));

document.title = `Perfil - ${user.name}`;

const randomMemberSince = () => {
  const start = new Date(2020, 0, 1);
  const end = new Date();
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  ).toISOString();
};

const formatMemberSince = dateString => {
  if (!dateString) {
    dateString = randomMemberSince();
  }
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long" };
  return date.toLocaleDateString("pt-BR", options);
};

const profileName = document.querySelector(".modal-name");
const profileSince = document.querySelector(".member-since");
const profileRating = document.querySelector(".rating");

profileName.textContent = user.name;
profileSince.textContent = `Membro desde ${formatMemberSince(
  user.memberSince
)} • ${user.city}, ${user.state}`;
profileRating.textContent = `${user.rating.score} (${user.rating.reviews} avaliações)`;

const skillsContainer = document.querySelector(".modal-body");

user.skills.forEach(skill => {
  const availability = skill.availability || "Flexível";
  const modality = skill.modality || "A Combinar";

  const skillCard = document.createElement("div");

  skillCard.classList.add("skill-card");
  skillCard.innerHTML = `
              <div class="skill-icon"></div>
              <div class="skill-details">
                <strong class="skill-text">${skill.name}</strong>
                <p class="skill-description">
                  ${skill.description}
                </p>
                <div class="skill-footer">
                  <div class="skill-infos">
                    <p class="skill-price">
                      <img src="/public/icons/arrows.svg" alt="Variação" /><img
                        src="/public/icons/credit.svg"
                        alt="Preço"
                      />${skill.price}
                    </p>
                    <p class="skill-availability">${availability} / ${modality}</p>
                  </div>
                  <button
                    class="hire-button primary-button buttons"
                    data-provider-id="${user.id}"
                    data-skill-name="${skill.name}"
                    data-credits="${skill.price}"
                    data-availability="${availability}"
                    data-modality="${modality}"
                    >Solicitar serviço</button
                  >
                </div>
              </div>
  `;

  skillsContainer.appendChild(skillCard);
});
