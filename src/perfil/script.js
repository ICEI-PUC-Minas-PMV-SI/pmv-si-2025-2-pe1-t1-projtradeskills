// Skills Modal
const skillsName = document.querySelector("#skills-name");
const skillsModal = new bootstrap.Modal(document.getElementById('exampleModal'));
const skillsDescription = document.querySelector("#skills-description");
const skillsPrice = document.querySelector("#suggested-credit");

const serviceModelsSelect = document.querySelector("#service-models");
const serviceModelsOptionSelected = serviceModelsSelect.options[serviceModelsSelect.selectedIndex].text;

const skillsSchedule = {
  daysOfWeek: document.querySelector("#weekly"),
  serviceModels: document.querySelector("#service-models"),
  shift: document.querySelector("#shift"),
};

let modalTitle = document.querySelector(".modal-title");

function openCreateModal() {
  modalTitle.textContent = 'Adicionar Habilidade';

  // Limpa os campos do formulário
  skillsName.value = "";
  skillsDescription.value = "";
  skillsPrice.value = "";
  skillsSchedule.daysOfWeek.value = "";
  serviceModelsSelect.value = "Presencial"; // Valor padrão
  skillsSchedule.shift.value = "Manhã"; // Valor padrão

  // Garante que o botão de salvar não esteja em modo de edição
  const saveButton = document.getElementById("skills-modal-save");
  delete saveButton.dataset.editingIndex;

  skillsModal.show();
}

function saveSkills() {
  try {
    const currentUser = UserStorage.getCurrentUser();
    if (!currentUser) {
      alert("Nenhum usuário logado encontrado.");
      return;
    }

    // Validação nativa dos campos do modal
    let isFormValid = true;
    const fieldsToValidate = [
      { input: skillsName, errorId: "error-skills-name" },
      { input: skillsDescription, errorId: "error-skills-description" },
      { input: skillsPrice, errorId: "error-suggested-credit" },
      { input: skillsSchedule.daysOfWeek, errorId: "error-weekly" },
    ];

    fieldsToValidate.forEach(field => {
      const errorElement = document.getElementById(field.errorId);
      if (!field.input.value.trim()) {
        field.input.classList.add("invalid-input");
        if (errorElement) errorElement.style.display = "block";
        isFormValid = false;
      } else {
        field.input.classList.remove("invalid-input");
        if (errorElement) errorElement.style.display = "none";
      }
    });

    if (!isFormValid) {
      return; // Interrompe a execução se o formulário for inválido
    }

    // Captura os dados do modal
    const newSkill = {
      name: skillsName.value,
      price: parseFloat(skillsPrice.value),
      description: skillsDescription.value,
      // Você pode adicionar outros campos aqui conforme a estrutura do seu objeto
      // serviceModel: serviceModelsSelect.value,
      // availability: { days: skillsSchedule.daysOfWeek.value, shift: skillsSchedule.shift.value }
      serviceModel: serviceModelsSelect.value,
      availability: { days: skillsSchedule.daysOfWeek.value, shift: skillsSchedule.shift.value }
    };

    // Garante que o array de skills exista no usuário
    if (!currentUser.skills) {
      currentUser.skills = [];
    }

    const saveButton = document.getElementById("skills-modal-save");
    const editingIndex = saveButton.dataset.editingIndex;

    if (editingIndex !== undefined) {
      // Modo de Edição: atualiza a habilidade existente
      currentUser.skills[editingIndex] = newSkill;
      alert("Habilidade atualizada com sucesso!");
      delete saveButton.dataset.editingIndex; // Limpa o índice de edição
    } else {
      // Modo de Criação: adiciona uma nova habilidade
      currentUser.skills.push(newSkill);
      alert("Habilidade adicionada com sucesso!");
    }

    UserStorage.updateUserData(currentUser); // Salva o objeto de usuário completo
    skillsModal.hide();
    window.location.reload(); // Recarrega a página para exibir a nova habilidade
  } catch (error) {
    console.error("Erro ao salvar habilidade:", error);
    alert("Ocorreu um erro ao salvar a habilidade.");
  }
}

function openEditModal(skillIndex) {
  const currentUser = UserStorage.getCurrentUser();
  const skill = currentUser.skills[skillIndex];

  if (!skill) {
    console.error("Habilidade não encontrada para edição.");
    return;
  }

  modalTitle.textContent = 'Editar Habilidade';

  // Preenche o modal com os dados da habilidade
  skillsName.value = skill.name || '';
  skillsDescription.value = skill.description || '';
  skillsPrice.value = skill.price || '';
  serviceModelsSelect.value = skill.serviceModel || 'presencial';
  skillsSchedule.daysOfWeek.value = skill.availability?.days || '';
  skillsSchedule.shift.value = skill.availability?.shift || 'manha';

  // Armazena o índice da habilidade que está sendo editada no botão de salvar
  const saveButton = document.getElementById("skills-modal-save");
  saveButton.dataset.editingIndex = skillIndex;

  skillsModal.show();
}

function loadUserSkills() {
  try {
    const currentUser = UserStorage.getCurrentUser();
    const skillsContainer = document.querySelector(".profile-skills-cards");

    if (!currentUser || !currentUser.skills || !skillsContainer) {
      return;
    }

    skillsContainer.innerHTML = ""; // Limpa o container antes de adicionar os novos cards

    if (currentUser.skills.length === 0) {
      skillsContainer.innerHTML = "<p>Nenhuma habilidade cadastrada ainda. Adicione sua primeira habilidade!</p>";
      return;
    }

    currentUser.skills.forEach((skill, index) => {
      const skillCard = `
        <div class="card mb-4">
          <div class="card-body">
            <div>
              <i class="bi bi-briefcase"></i>
            </div>
            <div class="card-content-container">
              <h6 class="card-title">${skill.name || "Habilidade sem título"}</h6>
              <p class="card-text">${skill.description || "Sem descrição."}</p>
              <div class="skill-tags-container">
                <span class="skill-tag">$${skill.price || 0}</span>
                <span class="skill-tag">${skill.serviceModel || "Não informado"}</span>
                <span class="skill-tag">${skill.availability?.days || "N/A"} | ${skill.availability?.shift || "N/A"}</span>
              </div>
            </div>
            <div class="d-flex flex-column justify-content-between">
              <i class="bi bi-pencil" onclick="openEditModal(${index})"></i>
              <i class="bi bi-trash3" onclick="deleteSkill(${currentUser.skills.indexOf(skill)})"></i>
            </div>
          </div>
        </div>`;
      skillsContainer.innerHTML += skillCard;
    });
  } catch (error) {
    console.error("Erro ao carregar habilidades do usuário:", error);
  }
}

function deleteSkill(skillIndex) {
  if (!confirm("Tem certeza que deseja excluir esta habilidade?")) {
    return;
  }
  try {
    const currentUser = UserStorage.getCurrentUser();
    currentUser.skills.splice(skillIndex, 1);
    UserStorage.updateUserData(currentUser);
    alert("Habilidade excluída com sucesso!");
    window.location.reload();
  } catch (error) {
    console.error("Erro ao excluir habilidade:", error);
    alert("Ocorreu um erro ao excluir a habilidade.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("file");
  const uploadButton = document.getElementById("uploadButton");
  const image = document.getElementById("output");
  const icon = document.getElementById("defaultIcon");
  const saveButton = document.getElementById("saveProfileButton");
  const createSkillButton = document.getElementById("skills-modal-create");
  const saveSkillButton = document.getElementById("skills-modal-save");

  const nomeInput = document.getElementById("nome");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const telInput = document.getElementById("tel");
  const cityStateInput = document.getElementById("cityState");
  const bulletPointAlert = document.querySelectorAll(".bullet-point-alert");

  // Função para formatar o telefone enquanto o usuário digita
  function formatarTelefone(input) {
    // Remove todos os caracteres que não são dígitos
    let numeros = input.value.replace(/\D/g, "");

    // Se não houver números, não faz nada (para manter o placeholder)
    if (numeros.length === 0) {
      input.value = "";
      return;
    }

    // Limita a 11 dígitos (DDD + 9 dígitos)
    numeros = numeros.slice(0, 11);

    // Aplica a máscara (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
    if (numeros.length > 10) {
      numeros = numeros.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (numeros.length > 6) {
      numeros = numeros.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (numeros.length > 2) {
      numeros = numeros.replace(/^(\d{2})(\d*)/, "($1) $2");
    }
    input.value = numeros;
  }

  // Função para gerar hash MD5 da senha usando CryptoJS (forma segura para exibi-la no localStorage)
  function md5(string) {
    return CryptoJS.MD5(string).toString();
  }

  function loadCurrentUserData() {
    try {
      const currentUser = UserStorage.getCurrentUser();
      if (currentUser) {
        if (nomeInput) nomeInput.value = currentUser.name || "";
        if (emailInput) emailInput.value = currentUser.email || "";
        if (telInput) telInput.value = currentUser.phoneNumber || "";
        if (cityStateInput) {
          const cityState = UserStorage.formatCityState(
            currentUser.city,
            currentUser.state
          );
          cityStateInput.value = cityState;
          if (currentUser.city.length > 0 || currentUser.state.length > 0) {
            cityStateInput.classList.remove("pending");
            bulletPointAlert[1].style.backgroundColor = "#00c951";
          }
        }

        // Formata o número de telefone ao carregar, se existir
        if (telInput && telInput.value) {
          formatarTelefone(telInput);
          telInput.classList.remove("pending");
          bulletPointAlert[0].style.backgroundColor = "#00c951";
        }

        if (currentUser.skills.length > 0) {
          bulletPointAlert[2].style.backgroundColor = "#00c951";
        }

        if (currentUser.skills.length > 0 && currentUser.phoneNumber.length > 0 && currentUser.city.length > 0) {
          document.querySelector('.alert-imcomplete-profile').remove()
        }

      }
    } catch (error) {
      console.error("Erro ao carregar dados do usuário:", error);
    }
  }

  function updateUserData() {
    try {
      const currentUser = UserStorage.getCurrentUser();
      if (!currentUser) {
        alert("Nenhum usuário logado encontrado.");
        return;
      }

      // Prepara os dados para atualização
      const updateData = {};

      if (nomeInput && nomeInput.value.trim()) {
        updateData.name = nomeInput.value.trim();
      }

      if (emailInput && emailInput.value.trim()) {
        updateData.email = emailInput.value.trim();
      }

      if (passwordInput && passwordInput.value.trim()) {
        updateData.password = md5(passwordInput.value.trim());
      }

      // Valida e prepara o telefone
      const numerosTelefone = telInput.value.replace(/\D/g, "");

      if (numerosTelefone.length !== 11 || !numerosTelefone) {
        telInput.classList.add("pending");
        alert(
          "Por favor, preencha o número de telefone completo com 11 dígitos (DDD + número)."
        );
        return; // Interrompe o salvamento
      }

      // Remove a classe 'pending' do input de telefone se ele foi validado

      if (telInput && numerosTelefone.length === 11) {
        telInput.classList.remove("pending");
        bulletPointAlert[0].style.backgroundColor = "#00c951";

        updateData.phoneNumber = telInput.value.trim();
      }

      if (cityStateInput.value.length === 0) {
        cityStateInput.classList.add("pending");
        alert("Por favor, preencha o campo Cidade e Estado.");
        return;
      } else {
        const { city, state } = UserStorage.parseCityState(
          cityStateInput.value.trim()
        );
        updateData.city = city;
        updateData.state = state;
        cityStateInput.classList.remove("pending");
      }

      const success = UserStorage.updateUserData(updateData);

      if (success) {
        if (cityStateInput && updateData.city) {
          cityStateInput.value = UserStorage.formatCityState(
            updateData.city,
            updateData.state
          );
        }

        alert("Dados salvos com sucesso!");
        window.location.reload();

        // Limpa o campo de senha após salvar (não vamos exibir a senha na tela)
        if (passwordInput) passwordInput.value = "";
      } else {
        alert("Erro ao salvar os dados. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao atualizar dados do usuário:", error);
      alert("Erro ao salvar os dados. Tente novamente.");
    }
  }

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  function loadCurrentUserImage() {
    try {
      const currentUser = UserStorage.getCurrentUser();
      if (
        currentUser &&
        currentUser.image &&
        currentUser.image !== "/public/icons/profile.svg"
      ) {
        // Se o usuário tem uma imagem customizada, exibe ela
        image.src = currentUser.image;
        image.style.display = "block";
        icon.style.display = "none";
        image.style.width = "100%";
        image.style.height = "100%";
        image.style.objectFit = "cover";
        image.style.borderRadius = "50%";
      }
    } catch (error) {
      console.error("Erro ao carregar imagem do usuário:", error);
    }
  }

  function updateUserImage(imageBase64) {
    try {
      const success = UserStorage.updateUserImage(imageBase64);
      if (success) {
        console.log("Imagem do usuário atualizada com sucesso!");
      } else {
        console.error("Erro ao atualizar imagem do usuário");
      }
    } catch (error) {
      console.error("Erro ao atualizar imagem do usuário:", error);
    }
  }

  loadCurrentUserImage();
  loadCurrentUserData();
  loadUserSkills();

  // Event listener para o botão "Salvar alterações"
  if (saveButton) {
    saveButton.addEventListener("click", updateUserData);
  }

  // Event listener para o botão "Salvar alterações" do modal de skills
  if (saveSkillButton) {
    saveSkillButton.removeAttribute("onclick"); // Remove o onclick antigo do HTML
    saveSkillButton.addEventListener("click", saveSkills);
  }

  // Event listener para o botão "Adicionar habilidade"
  if (createSkillButton) {
    createSkillButton.removeAttribute("data-bs-toggle"); // Remove o controle do Bootstrap
    createSkillButton.removeAttribute("data-bs-target");
    createSkillButton.addEventListener("click", openCreateModal);
  }

  // Event listener para formatar o telefone enquanto digita
  if (telInput) {
    telInput.addEventListener("input", () => {
      formatarTelefone(telInput);
    });
  }

  // Clicar no botão de câmera aciona o seletor de arquivos
  uploadButton.addEventListener("click", () => {
    fileInput.click();
  });

  // Quando o usuário selecionar uma imagem
  fileInput.addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Por favor, selecione apenas arquivos de imagem.");
      return;
    }

    // Validação do tamanho do arquivo (máximo 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("A imagem deve ter no máximo 5MB.");
      return;
    }

    try {
      const imageBase64 = await fileToBase64(file);

      image.src = imageBase64;
      image.style.display = "block";
      icon.style.display = "none";

      image.onload = function () {
        image.style.width = "100%";
        image.style.height = "100%";
        image.style.objectFit = "cover";
        image.style.borderRadius = "50%";
      };

      updateUserImage(imageBase64);
    } catch (error) {
      console.error("Erro ao processar imagem:", error);
      alert("Erro ao processar a imagem. Tente novamente.");
    }
  });
});
