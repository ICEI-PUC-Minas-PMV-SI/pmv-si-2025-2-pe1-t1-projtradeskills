class AppFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    try {
      // Lista de caminhos possíveis em ordem de prioridade
      const possiblePaths = [
        "./components/footer/index.html", // Se estiver na raiz src
        "../components/footer/index.html", // Se estiver em uma subpasta
        "../../components/footer/index.html", // Se estiver em subpasta aninhada
        "../../../components/footer/index.html", // Se estiver ainda mais profundo
        "/src/components/footer/index.html" // Caminho absoluto como fallback
      ];

      let response;
      let basePath;

      // Tenta cada caminho até encontrar um que funcione
      for (const path of possiblePaths) {
        try {
          console.log("Tentando carregar footer de:", path);
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
          "Não foi possível carregar o template do footer de nenhum caminho."
        );
      }
      const htmlText = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, "text/html");
      const template = doc.getElementById("template-app-footer");

      if (template) {
        const templateContent = template.content.cloneNode(true);

        const globalStyles = document.createElement("link");
        globalStyles.setAttribute("rel", "stylesheet");

        // Determina o prefixo baseado no caminho que funcionou
        const pathPrefix = basePath.replace("components/footer/index.html", "");
        const globalStylesPath = `${pathPrefix}assets/global.css`;
        globalStyles.setAttribute("href", globalStylesPath);
        this.shadowRoot.appendChild(globalStyles);

        const componentStyles = document.createElement("link");
        componentStyles.setAttribute("rel", "stylesheet");
        const componentStylesPath = `${pathPrefix}components/footer/style.css`;
        componentStyles.setAttribute("href", componentStylesPath);

        this.shadowRoot.appendChild(componentStyles);
        this.shadowRoot.appendChild(templateContent);

        const currentPath = window.location.pathname;
        const links = this.shadowRoot.querySelectorAll("a");
      } else {
        console.error(
          "Template 'template-app-footer' não encontrado dentro de footer/index.html."
        );
      }
    } catch (error) {
      console.error(error);
    }
  }
}

customElements.define("app-footer", AppFooter);
