class GenericModalComponent extends HTMLElement {
  connectedCallback() {
    // Caregar o HTML do modal
    this.innerHTML = `
      <div id="generic-modal" class="modal hidden">
        <div class="modal-overlay"></div>
        <div class="modal-content">
          <!-- Header -->
          <header class="modal-header">
            <h2 id="modal-title" class="modal-title">Título do Modal</h2>
            <button type="button" id="modal-close-btn" class="close-btn" aria-label="Fechar modal">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6.225 4.811a1 1 0 00-1.414 1.414L8.586 10 4.81 13.775a1 1 0 101.414 1.414L10 11.414l3.775 3.775a1 1 0 001.414-1.414L11.414 10l3.775-3.775a1 1 0 00-1.414-1.414L10 8.586 6.225 4.81z"/>
              </svg>
            </button>
          </header>

          <!-- Body -->
          <div class="modal-body">
            <small id="modal-subtitle" class="modal-subtitle">Subtítulo opcional</small>
            <p id="modal-description" class="modal-description">Descrição do modal</p>
            
            <!-- Tags -->
            <div id="modal-tags" class="modal-tags">
              <!-- Tags dinâmicas serão inseridas aqui -->
            </div>

            <!-- Seção de Desistir/Justificativa (inicialmente oculta) -->
            <div id="desistir-section" class="desistir-section hidden">
              <label for="justificativa" id="desistir-label" class="desistir-label">Motivo do cancelamento</label>
              <textarea id="justificativa" class="justificativa" placeholder="Descreva o motivo do cancelamento..." rows="3"></textarea>
            </div>
          </div>

          <!-- Footer -->
          <footer class="modal-footer">
            <button type="button" id="primary-btn" class="btn btn-primary">Confirmar</button>
            <button type="button" id="secondary-btn" class="btn btn-secondary">Cancelar</button>
          </footer>
        </div>
      </div>
    `;
  }
}

// Registrar o web component
customElements.define('generic-modal', GenericModalComponent);
