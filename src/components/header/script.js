import { initMobileMenu } from "/components/header/mobile-menu.js";

class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    try {
      const response = await fetch("/components/header/index.html");
      if (!response.ok) {
        throw new Error("Não foi possível carregar o template do header.");
      }
      const htmlText = await response.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, "text/html");
      const template = doc.getElementById("template-app-header");

      if (template) {
        const templateContent = template.content.cloneNode(true);

        const globalStyles = document.createElement("link");
        globalStyles.setAttribute("rel", "stylesheet");
        globalStyles.setAttribute("href", "/assets/styles/css/global.css");

        this.shadowRoot.appendChild(globalStyles);

        const componentStyles = document.createElement("link");
        componentStyles.setAttribute("rel", "stylesheet");
        componentStyles.setAttribute("href", "/components/header/style.css");

        this.shadowRoot.appendChild(componentStyles);
        this.shadowRoot.appendChild(templateContent);

        // Carrega dados do usuário após renderizar o template
        this.loadUserData();
        this.loadUserCredits();

        initMobileMenu(this.shadowRoot);

        // Escuta mudanças no localStorage (para outras abas)
        window.addEventListener('storage', (e) => {
          if (e.key === 'currentUser') {
            this.loadUserData();
          }
          if (e.key === 'tradeSkillsData') {
            this.loadUserCredits();
          }
        });


        // Escuta evento customizado para mudanças na mesma aba
        window.addEventListener('currentUserChanged', () => {
          this.loadUserData();

        });

        window.addEventListener('creditsUpdated', () => {
          this.loadUserCredits();
        });
      } else {
        console.error(
          "Template 'template-app-header' não encontrado dentro de header/index.html."
        );
      }
    } catch (error) {
      console.error(error);
    }
  }

  loadUserData() {
    try {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));

      const nameElement = this.shadowRoot.querySelector('.name');
      const imageElement = this.shadowRoot.querySelector('.image');

      if (currentUser) {
        if (nameElement) {
          nameElement.textContent = currentUser.name;
        }
        if (imageElement) {
          imageElement.src = currentUser.image;
        }
      }
    } catch (error) {
      console.error('Erro ao carregar dados do usuário no header:', error);
    }
  }

  loadUserCredits() {
    try {
      const data = JSON.parse(localStorage.getItem('tradeSkillsData'));

      if (data && data.currentUserId && data.users) {
        const currentUser = data.users.find(u => u.id === data.currentUserId);
        const creditsElement = this.shadowRoot.querySelector('.amount'); 

        if (creditsElement && currentUser && typeof currentUser.credits === 'number') {
          creditsElement.textContent = currentUser.credits;
        }
      }
    } catch (error) {
      console.error('Erro ao carregar créditos do usuário:', error);
    }
  }
}

customElements.define("app-header", AppHeader);
