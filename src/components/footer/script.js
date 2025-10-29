class AppFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    try {
      const response = await fetch("/components/footer/index.html");
      if (!response.ok) {
        throw new Error("Não foi possível carregar o template do footer.");
      }
      const htmlText = await response.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, "text/html");
      const template = doc.getElementById("template-app-footer");

      if (template) {
        const templateContent = template.content.cloneNode(true);

        const globalStyles = document.createElement("link");
        globalStyles.setAttribute("rel", "stylesheet");
        globalStyles.setAttribute("href", "/assets/global.css");
        this.shadowRoot.appendChild(globalStyles);

        const componentStyles = document.createElement("link");
        componentStyles.setAttribute("rel", "stylesheet");
        componentStyles.setAttribute("href", "/components/footer/style.css");

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
