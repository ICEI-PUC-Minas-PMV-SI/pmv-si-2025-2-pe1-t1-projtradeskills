document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("file");
  const uploadButton = document.getElementById("uploadButton");
  const image = document.getElementById("output");
  const icon = document.getElementById("defaultIcon");
  const saveButton = document.getElementById("saveProfileButton");

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

  // Event listener para o botão "Salvar alterações"
  if (saveButton) {
    saveButton.addEventListener("click", updateUserData);
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
