class AppSidebar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    try {
      // Lista de caminhos possíveis em ordem de prioridade
      const possiblePaths = [
        './components/sidebar/index.html',        // Se estiver na raiz src
        '../components/sidebar/index.html',       // Se estiver em uma subpasta
        '../../components/sidebar/index.html',    // Se estiver em subpasta aninhada
        '../../../components/sidebar/index.html', // Se estiver ainda mais profundo
        '/src/components/sidebar/index.html'      // Caminho absoluto como fallback
      ];
      
      let response;
      let basePath;
      
      // Tenta cada caminho até encontrar um que funcione
      for (const path of possiblePaths) {
        try {
          console.log('Tentando carregar sidebar de:', path);
          response = await fetch(path);
          if (response.ok) {
            basePath = path;
            console.log('Sucesso! Carregado de:', path);
            break;
          }
        } catch (e) {
          // Continua para o próximo caminho
          continue;
        }
      }
      
      if (!response || !response.ok) {
        throw new Error("Não foi possível carregar o template do sidebar de nenhum caminho.");
      }
      const htmlText = await response.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, "text/html");
      const template = doc.getElementById("template-app-sidebar");

      if (template) {
        const templateContent = template.content.cloneNode(true);

        const globalStyles = document.createElement("link");
        globalStyles.setAttribute("rel", "stylesheet");
        
        // Determina o prefixo baseado no caminho que funcionou
        const pathPrefix = basePath.replace('components/sidebar/index.html', '');
        const globalStylesPath = `${pathPrefix}assets/global.css`;
        globalStyles.setAttribute("href", globalStylesPath);

        const componentStyles = document.createElement("link");
        componentStyles.setAttribute("rel", "stylesheet");
        const componentStylesPath = `${pathPrefix}components/sidebar/style.css`;
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
