document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("file");
    const uploadButton = document.getElementById("uploadButton");
    const image = document.getElementById("output");
    const icon = document.getElementById("defaultIcon");
    const saveButton = document.getElementById('saveProfileButton');

    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const telInput = document.getElementById("tel");
    const cityStateInput = document.getElementById("cityState");

    // Função para gerar hash MD5 da senha usando CryptoJS (forma segura para exibi-la no localStorage)
    function md5(string) {
        return CryptoJS.MD5(string).toString();
    }

    function loadCurrentUserData() {
        try {
            const currentUser = UserStorage.getCurrentUser();
            if (currentUser) {
                if (nomeInput) nomeInput.value = currentUser.name || '';
                if (emailInput) emailInput.value = currentUser.email || '';
                if (telInput) telInput.value = currentUser.phoneNumber || '';
                if (cityStateInput) {
                    const cityState = UserStorage.formatCityState(currentUser.city, currentUser.state);
                    cityStateInput.value = cityState;
                }
            }
        } catch (error) {
            console.error('Erro ao carregar dados do usuário:', error);
        }
    }

    function updateUserData() {
        try {
            const currentUser = UserStorage.getCurrentUser();
            if (!currentUser) {
                alert('Nenhum usuário logado encontrado.');
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

            if (telInput && telInput.value.trim()) {
                updateData.phoneNumber = telInput.value.trim();
            }

            if (cityStateInput && cityStateInput.value.trim()) {
                const { city, state } = UserStorage.parseCityState(cityStateInput.value.trim());
                updateData.city = city;
                updateData.state = state;
            }

            const success = UserStorage.updateUserData(updateData);

            if (success) {
                if (cityStateInput && updateData.city) {
                    cityStateInput.value = UserStorage.formatCityState(updateData.city, updateData.state);
                }

                alert('Dados salvos com sucesso!');
                
                // Limpa o campo de senha após salvar (não vamos exibir a senha na tela)
                if (passwordInput) passwordInput.value = '';
            } else {
                alert('Erro ao salvar os dados. Tente novamente.');
            }

        } catch (error) {
            console.error('Erro ao atualizar dados do usuário:', error);
            alert('Erro ao salvar os dados. Tente novamente.');
        }
    }

    function fileToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    function loadCurrentUserImage() {
        try {
            const currentUser = UserStorage.getCurrentUser();
            if (currentUser && currentUser.image && currentUser.image !== '/public/icons/profile.svg') {
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
            console.error('Erro ao carregar imagem do usuário:', error);
        }
    }

    function updateUserImage(imageBase64) {
        try {
            const success = UserStorage.updateUserImage(imageBase64);
            if (success) {
                console.log('Imagem do usuário atualizada com sucesso!');
            } else {
                console.error('Erro ao atualizar imagem do usuário');
            }
        } catch (error) {
            console.error('Erro ao atualizar imagem do usuário:', error);
        }
    }

    loadCurrentUserImage();
    loadCurrentUserData();

    // Event listener para o botão "Salvar alterações"
    if (saveButton) {
        saveButton.addEventListener('click', updateUserData);
    }

    // Clicar no botão de câmera aciona o seletor de arquivos
    uploadButton.addEventListener("click", () => {
        fileInput.click();
    });

    // Quando o usuário selecionar uma imagem
    fileInput.addEventListener("change", async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            alert('Por favor, selecione apenas arquivos de imagem.');
            return;
        }

        // Validação do tamanho do arquivo (máximo 5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('A imagem deve ter no máximo 5MB.');
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
            console.error('Erro ao processar imagem:', error);
            alert('Erro ao processar a imagem. Tente novamente.');
        }
    });
});
