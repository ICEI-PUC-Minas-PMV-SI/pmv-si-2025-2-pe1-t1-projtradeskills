class MinhasSolicitacoes extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    console.log("MinhasSolicitacoes constructor chamado");
  }

  async connectedCallback() {
    console.log("MinhasSolicitacoes connectedCallback iniciado");
    try {
      console.log("Inicializando componente Minhas Solicitações...");

      // Lista de caminhos possíveis em ordem de prioridade
      const possiblePaths = [
        "./minhasSolicitacoes/template.html", // Se estiver na raiz src
        "../minhasSolicitacoes/template.html", // Se estiver em uma subpasta
        "../../minhasSolicitacoes/template.html", // Se estiver em subpasta aninhada
        "../../../minhasSolicitacoes/template.html", // Se estiver ainda mais profundo
        "/minhasSolicitacoes/template.html" // Caminho absoluto como fallback
      ];

      let response;
      let basePath;

      // Tenta cada caminho até encontrar um que funcione
      for (const path of possiblePaths) {
        try {
          console.log("Tentando carregar Minhas Solicitações de:", path);
          response = await fetch(path);
          if (response.ok) {
            basePath = path;
            console.log("Sucesso! Carregado de:", path);
            break;
          }
        } catch (e) {
          // Continua para o próximo caminho
          continue;
        }
      }

      if (!response || !response.ok) {
        throw new Error(
          "Não foi possível carregar o template de Minhas Solicitações de nenhum caminho."
        );
      }
      const htmlText = await response.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, "text/html");
      const template = doc.getElementById("template-minhas-solicitacoes");

      if (template) {
        console.log("Template encontrado, clonando conteúdo...");
        const templateContent = template.content.cloneNode(true);

        // Determina o prefixo baseado no caminho que funcionou
        const pathPrefix = basePath.replace(
          "minhasSolicitacoes/template.html",
          ""
        );

        // Carrega os estilos CSS diretamente
        const cssFiles = [
          `${pathPrefix}minhasSolicitacoes/globals.css`,
          `${pathPrefix}minhasSolicitacoes/styleguide.css`,
          `${pathPrefix}minhasSolicitacoes/style.css`
        ];

        // Carrega todos os CSS de forma assíncrona
        Promise.all(
          cssFiles.map(cssFile =>
            fetch(cssFile).then(response => response.text())
          )
        )
          .then(cssContents => {
            // Cria o CSS customizado para modal
            const modalStyle = document.createElement("style");
            modalStyle.textContent = `
            :host {
              position: fixed;
              top: 0;
              right: 0;
              width: 100vw;
              height: 100vh;
              z-index: 9999;
              display: flex;
              align-items: flex-start;
              justify-content: flex-end;
              background: rgba(0, 0, 0, 0.3);
              backdrop-filter: blur(1px);
            }
            
            .modal-wrapper {
              position: relative;
              width: 850px;
              height: 100vh;
              max-width: 60vw;
              overflow-y: auto;
              overflow-x: hidden;
              box-shadow: -5px 0 20px rgba(0, 0, 0, 0.2);
              background: white;
              border-radius: 0;
              animation: slideInRight 0.3s ease-out;
            }
            
            @keyframes slideInRight {
              from {
                transform: translateX(100%);
                opacity: 0;
              }
              to {
                transform: translateX(0);
                opacity: 1;
              }
            }
            
            ${cssContents.join("\n")}
          `;
            this.shadowRoot.appendChild(modalStyle);

            // Cria um wrapper modal
            const modalWrapper = document.createElement("div");
            modalWrapper.className = "modal-wrapper";

            // Adiciona o conteúdo do template dentro do wrapper
            modalWrapper.appendChild(templateContent);
            this.shadowRoot.appendChild(modalWrapper);

            // Corrige os caminhos das imagens baseado no contexto
            this.fixImagePaths(pathPrefix);

            console.log("Componente renderizado com sucesso!");

            // Adiciona eventos de interação se necessário
            this.addEventListeners();
          })
          .catch(error => {
            console.warn(
              "Erro ao carregar CSS, usando template sem estilos:",
              error
            );
            // Se falhar, adiciona só o template
            this.shadowRoot.appendChild(templateContent);
            this.addEventListeners();
          });
      } else {
        // Se não conseguir carregar template, usa conteúdo de fallback
        console.warn("Template não encontrado, usando fallback");
        this.shadowRoot.innerHTML = `
          <style>
            .fallback-frame {
              padding: 20px;
              border: 2px dashed #ccc;
              background: #f9f9f9;
              border-radius: 8px;
              text-align: center;
            }
          </style>
          <div class="fallback-frame">
            <h3>⚠️ Template não carregado</h3>
            <p>O componente foi registrado mas não conseguiu carregar o template.</p>
            <p>Caminhos testados: ${possiblePaths.join(", ")}</p>
          </div>
        `;
      }
    } catch (error) {
      console.error("Erro ao carregar Minhas Solicitações:", error);
      // Renderiza conteúdo de erro
      this.shadowRoot.innerHTML = `
        <style>
          .error-frame {
            padding: 20px;
            border: 2px solid #ff6b6b;
            background: #ffe0e0;
            border-radius: 8px;
            color: #d63031;
          }
        </style>
        <div class="error-frame">
          <h3>❌ Erro ao carregar componente</h3>
          <p>Erro: ${error.message}</p>
        </div>
      `;
    }
  }

  fixImagePaths(pathPrefix) {
    // Corrige os caminhos das imagens baseado no contexto atual
    const images = this.shadowRoot.querySelectorAll("img");
    images.forEach(img => {
      const currentSrc = img.getAttribute("src");
      if (currentSrc && currentSrc.includes("../../docs/img/")) {
        // Determina o caminho correto baseado no pathPrefix
        let correctPath;
        if (pathPrefix.includes("../")) {
          // Está sendo carregado de uma subpasta (como perfil)
          correctPath = currentSrc.replace(
            "../../docs/img/",
            "../../docs/img/"
          );
        } else {
          // Está sendo carregado da raiz
          correctPath = currentSrc.replace("../../docs/img/", "./docs/img/");
        }
        img.setAttribute("src", correctPath);
      }
    });
  }

  addEventListeners() {
    // Adiciona evento ao botão de enviar mensagem
    const sendButton = this.shadowRoot.querySelector(".div-wrapper-3");
    if (sendButton) {
      sendButton.addEventListener("click", () => {
        this.enviarMensagem();
      });
    }

    // Adiciona evento ao textarea de mensagem
    const messageInput = this.shadowRoot.querySelector(".div-wrapper-2");
    if (messageInput) {
      messageInput.addEventListener("click", () => {
        // Foca no textarea para edição
        console.log("Campo de mensagem clicado");
      });
    }

    // Adiciona evento ao ícone X (fechar modal)
    const closeIcon = this.shadowRoot.querySelector(".icon-x");
    if (closeIcon) {
      closeIcon.addEventListener("click", () => {
        this.fecharModal();
      });
    }

    // Fecha modal ao clicar no fundo escuro
    this.addEventListener("click", e => {
      if (e.target === this) {
        this.fecharModal();
      }
    });

    // Fecha modal com tecla ESC
    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && this.shadowRoot.isConnected) {
        this.fecharModal();
      }
    });
  }

  enviarMensagem() {
    // Lógica para enviar mensagem
    console.log("Enviando mensagem...");
    // Aqui você pode adicionar a lógica de envio real
  }

  fecharSolicitacao() {
    // Lógica para fechar/cancelar solicitação
    console.log("Fechando solicitação...");
    // Aqui você pode adicionar a lógica de fechamento real
  }

  fecharModal() {
    // Remove o modal da tela
    console.log("Fechando modal...");
    this.remove();

    // Emite evento customizado para notificar o parent
    window.dispatchEvent(new CustomEvent("modalSolicitacoesFechado"));
  }

  // Método para atualizar dados da solicitação
  updateData(data) {
    if (this.shadowRoot) {
      // Atualiza nome do usuário
      const userName = this.shadowRoot.querySelector(".text-wrapper");
      if (userName && data.userName) {
        userName.textContent = data.userName;
      }

      // Atualiza título do serviço
      const serviceTitle = this.shadowRoot.querySelector(".text-wrapper-3");
      if (serviceTitle && data.serviceTitle) {
        serviceTitle.textContent = data.serviceTitle;
      }

      // Atualiza detalhes da negociação
      const negotiationDetails = this.shadowRoot.querySelector(
        ".solicita-o-realizada"
      );
      if (negotiationDetails && data.negotiationDetails) {
        negotiationDetails.innerHTML = data.negotiationDetails;
      }

      // Atualiza mensagens
      if (data.messages && Array.isArray(data.messages)) {
        // Aqui você pode adicionar lógica para atualizar as mensagens dinamicamente
        console.log("Atualizando mensagens:", data.messages);
      }
    }
  }
}

// Registra o elemento customizado
customElements.define("minhas-solicitacoes", MinhasSolicitacoes);
