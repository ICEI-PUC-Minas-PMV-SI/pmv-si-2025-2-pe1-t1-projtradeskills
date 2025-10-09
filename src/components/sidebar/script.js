class AppSidebar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    try {
      // Detecta se estamos em uma subpasta e ajusta o caminho
      const basePath = window.location.pathname.includes('/perfil/') || 
                      window.location.pathname.includes('/dashboard/') ? 
                      '../components/sidebar/index.html' : 
                      '/components/sidebar/index.html';
      
      const response = await fetch(basePath);
      if (!response.ok) {
        throw new Error("Não foi possível carregar o template do sidebar.");
      }
      const htmlText = await response.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, "text/html");
      const template = doc.getElementById("template-app-sidebar");

      if (template) {
        const templateContent = template.content.cloneNode(true);

        const globalStyles = document.createElement("link");
        globalStyles.setAttribute("rel", "stylesheet");
        // Ajusta o caminho dos estilos baseado na localização
        const globalStylesPath = window.location.pathname.includes('/perfil/') || 
                                window.location.pathname.includes('/dashboard/') ? 
                                '../assets/global.css' : 
                                '/assets/global.css';
        globalStyles.setAttribute("href", globalStylesPath);

        const componentStyles = document.createElement("link");
        componentStyles.setAttribute("rel", "stylesheet");
        const componentStylesPath = window.location.pathname.includes('/perfil/') || 
                                   window.location.pathname.includes('/dashboard/') ? 
                                   '../components/sidebar/style.css' : 
                                   '/components/sidebar/style.css';
        componentStyles.setAttribute("href", componentStylesPath);

        this.shadowRoot.appendChild(globalStyles);
        this.shadowRoot.appendChild(componentStyles);
        this.shadowRoot.appendChild(templateContent);

        const currentPath = window.location.pathname;
        const links = this.shadowRoot.querySelectorAll("a");

        links.forEach(link => {
          const linkPath = new URL(link.href, window.location.origin).pathname;

          if (linkPath === currentPath) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      } else {
        console.error(
          "Template 'template-app-sidebar' não encontrado dentro de sidebar/index.html."
        );
      }
    } catch (error) {
      console.error(error);
    }
  }
}

customElements.define("app-sidebar", AppSidebar);
