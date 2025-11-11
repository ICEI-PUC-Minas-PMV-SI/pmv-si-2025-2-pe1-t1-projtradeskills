
/**
 * Modal genérico reutilizável
 * Para evitar duplicação de código nos 3 modais que precisamos
 */

console.log('Script do Modal Genérico carregando...');

(function () {
  'use strict';

  console.log('Inicializando Modal Genérico...');

  // Elementos DOM
  let modal, overlay, modalContent, closeBtn;
  let titleEl, subtitleEl, descriptionEl, tagsEl;
  let desistirSection, desistirLabel, justificativaEl;
  let primaryBtn, secondaryBtn;
  
  let initialized = false;
  let currentConfig = {};

  // Configurações padrão para diferentes contextos
  const DEFAULT_CONFIGS = {
    // Contexto 1: Confirmação de conclusão (enviadas)
    confirmacao: {
      title: 'Confirmar Conclusão do Serviço',
      subtitle: 'Solicitado em {{date}}',
      description: 'Ao confirmar a conclusão, os créditos serão transferidos automaticamente para o provedor do serviço.',
      primaryButtonText: 'Confirmar Conclusão',
      secondaryButtonText: 'Cancelar',
      showDesistirSection: false,
      desistirLabel: 'Motivo do cancelamento',
      justificativaPlaceholder: 'Descreva o motivo do cancelamento...',
      tags: []
    },
    
    // Contexto 1b: Confirmação de conclusão (recebidas)
    'confirmacao-recebidos': {
      title: 'Aceitar Solicitação',
      subtitle: 'Solicitado em {{date}}',
      description: 'Ao aceitar esta solicitação, você se compromete a realizar o serviço solicitado.',
      primaryButtonText: 'Aceitar',
      secondaryButtonText: 'Cancelar',
      showDesistirSection: false,
      desistirLabel: 'Motivo da recusa',
      justificativaPlaceholder: 'Descreva o motivo da recusa...',
      tags: []
    },
    
    // Contexto 2: Cancelamento/Desistência (enviadas)
    cancelamento: {
      title: 'Cancelar Solicitação',
      subtitle: 'Solicitado em {{date}}',
      description: 'Tem certeza que deseja cancelar esta solicitação? Esta ação não pode ser desfeita.',
      primaryButtonText: 'Manter Solicitação',
      secondaryButtonText: 'Cancelar',
      showDesistirSection: false,
      desistirLabel: 'Motivo do cancelamento',
      justificativaPlaceholder: 'Descreva o motivo do cancelamento...',
      tags: []
    },
    
    // Contexto 2b: Cancelamento/Desistência (recebidas)
    'cancelamento-recebidos': {
      title: 'Gerenciar Solicitação',
      subtitle: 'Solicitado em {{date}}',
      description: 'Escolha a ação que deseja realizar com esta solicitação.',
      primaryButtonText: 'Sinalizar Conclusão',
      secondaryButtonText: 'Cancelar',
      showDesistirSection: false,
      desistirLabel: 'Motivo do cancelamento',
      justificativaPlaceholder: 'Descreva o motivo do cancelamento...',
      tags: []
    },
    
    // Contexto 3: Visualização de detalhes
    visualizacao: {
      title: 'Detalhes da Solicitação',
      subtitle: 'Solicitado em {{date}}',
      description: 'Visualize os detalhes completos da sua solicitação.',
      primaryButtonText: 'Fechar',
      secondaryButtonText: '',
      showDesistirSection: false,
      desistirLabel: '',
      justificativaPlaceholder: '',
      tags: []
    }
  };

  // Função para ler dados do localStorage
  function getDataFromStorage(key = 'modalData') {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : {};
    } catch (error) {
      console.warn('Erro ao ler dados do localStorage:', error);
      return {};
    }
  }

  // Função para buscar elementos DOM
  function initializeElements() {
    modal = document.getElementById('generic-modal');
    if (!modal) return false;

    overlay = modal.querySelector('.modal-overlay');
    modalContent = modal.querySelector('.modal-content');
    closeBtn = document.getElementById('modal-close-btn');
    
    titleEl = document.getElementById('modal-title');
    subtitleEl = document.getElementById('modal-subtitle');
    descriptionEl = document.getElementById('modal-description');
    tagsEl = document.getElementById('modal-tags');
    
    desistirSection = document.getElementById('desistir-section');
    desistirLabel = document.getElementById('desistir-label');
    justificativaEl = document.getElementById('justificativa');
    
    primaryBtn = document.getElementById('primary-btn');
    secondaryBtn = document.getElementById('secondary-btn');

    return true;
  }

  // Função para aplicar configurações ao modal
  function applyConfig(config) {
    if (titleEl) titleEl.textContent = config.title || '';
    if (subtitleEl) {
      subtitleEl.textContent = config.subtitle || '';
      subtitleEl.style.display = config.subtitle ? 'block' : 'none';
    }
    if (descriptionEl) descriptionEl.textContent = config.description || '';
    
    // Aplicar tags
    if (tagsEl) {
      tagsEl.innerHTML = '';
      if (config.tags && config.tags.length > 0) {
        config.tags.forEach(tag => {
          const tagEl = document.createElement('span');
          tagEl.className = 'tag';
          
          // Verificar se é uma tag de valor (começa com R$)
          if (tag.startsWith('R$')) {
            tagEl.setAttribute('data-type', 'currency');
            tagEl.textContent = tag.substring(2).trim();
          } else {
            tagEl.textContent = tag;
          }
          
          tagsEl.appendChild(tagEl);
        });
      }
    }

    // Configurar botões
    if (primaryBtn) primaryBtn.textContent = config.primaryButtonText || 'Confirmar';
    if (secondaryBtn) {
      if (config.secondaryButtonText && config.secondaryButtonText.trim()) {
        secondaryBtn.textContent = config.secondaryButtonText;
        secondaryBtn.style.display = 'inline-flex';
      } else {
        secondaryBtn.style.display = 'none';
      }
    }

    // Configurar seção de desistir
    if (desistirSection) {
      if (config.showDesistirSection) {
        desistirSection.classList.remove('hidden');
        if (desistirLabel) desistirLabel.textContent = config.desistirLabel || '';
        if (justificativaEl) {
          justificativaEl.placeholder = config.justificativaPlaceholder || '';
          justificativaEl.value = '';
        }
      } else {
        desistirSection.classList.add('hidden');
        if (justificativaEl) {
          justificativaEl.value = '';
        }
      }
    }
  }

  // Função para configurar event listeners
  function setupEventListeners() {
    if (!modal) return;

    // Fechar modal clicando no overlay
    if (overlay) {
      overlay.addEventListener('click', () => GenericModal.close());
    }

    // Fechar modal clicando no botão X
    if (closeBtn) {
      closeBtn.addEventListener('click', () => GenericModal.close());
    }

    // Fechar modal com ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        GenericModal.close();
      }
    });

    // Botão primário
    if (primaryBtn) {
      primaryBtn.addEventListener('click', () => {
        const justificativa = justificativaEl ? justificativaEl.value.trim() : '';
        const context = currentConfig.context;

        const closeIfNeeded = () => {
          if (currentConfig.primaryAction !== 'keep-open') {
            GenericModal.close();
          }
        };

        const resetJustificativa = () => {
          if (justificativaEl) {
            justificativaEl.value = '';
          }
        };

        if (context === 'confirmacao-recebidos') {
          if (currentConfig.onPrimary) {
            if (currentConfig.showDesistirSection) {
              currentConfig.onPrimary({ action: 'cancel', justificativa });
            } else {
              currentConfig.onPrimary({ action: 'accept' });
            }
          }

          resetJustificativa();
          closeIfNeeded();
          return;
        }

        if (context === 'cancelamento-recebidos') {
          if (currentConfig.onPrimary) {
            if (currentConfig.showDesistirSection) {
              currentConfig.onPrimary({ action: 'cancel', justificativa });
            } else {
              currentConfig.onPrimary({ action: 'confirm' });
            }
          }

          resetJustificativa();
          closeIfNeeded();
          return;
        }

        // Para confirmacao, quando a seção de justificativa está visível
        if (currentConfig.context === 'confirmacao' && currentConfig.showDesistirSection) {
          if (!justificativa) {
            alert('Por favor, informe o motivo do cancelamento.');
            return;
          }
          
          // Chamar o callback original com a justificativa
          if (currentConfig._originalSecondaryCallback) {
            currentConfig._originalSecondaryCallback({ justificativa });
          }
          
          GenericModal.close();
          return;
        }
        
        // Para cancelamento, quando a seção de justificativa está visível
        if (currentConfig.context === 'cancelamento' && currentConfig.showDesistirSection) {
          const payload = { justificativa };

          if (currentConfig.onPrimary) {
            currentConfig.onPrimary(payload);
          }

          if (currentConfig._originalSecondaryCallback) {
            currentConfig._originalSecondaryCallback(payload);
          }

          resetJustificativa();
          closeIfNeeded();
          return;
        }
        
        if (currentConfig.onPrimary) {
          const payload = currentConfig.showDesistirSection ? { justificativa } : undefined;
          currentConfig.onPrimary(payload);
        }

        resetJustificativa();
        closeIfNeeded();
      });
    }

    // Botão secundário
    if (secondaryBtn) {
      secondaryBtn.addEventListener('click', () => {
        // Comportamento especial para confirmacao-recebidos
        if (currentConfig.context === 'confirmacao-recebidos' && !currentConfig.showDesistirSection) {
          currentConfig.showDesistirSection = true;
          currentConfig.desistirLabel = 'Motivo do cancelamento';
          currentConfig.justificativaPlaceholder = 'Descreva o motivo do cancelamento...';
          currentConfig.primaryButtonText = 'Confirmar Cancelamento';
          currentConfig.secondaryButtonText = 'Voltar';
          
          // Salvar o callback original
          currentConfig._originalSecondaryCallback = currentConfig.onSecondary;
          
          // Substituir temporariamente o callback secundário
          currentConfig.onSecondary = () => {
            // Voltar ao estado inicial
            currentConfig.showDesistirSection = false;
            currentConfig.primaryButtonText = 'Sinalizar Conclusão';
            currentConfig.secondaryButtonText = 'Cancelar';
            currentConfig.onSecondary = currentConfig._originalSecondaryCallback;
            applyConfig(currentConfig);
          };
          
          applyConfig(currentConfig);
          return;
        }
        
        // Comportamento especial para cancelamento-recebidos
        if (currentConfig.context === 'cancelamento-recebidos' && !currentConfig.showDesistirSection) {
          currentConfig.showDesistirSection = true;
          currentConfig.desistirLabel = 'Motivo do cancelamento';
          currentConfig.justificativaPlaceholder = 'Descreva o motivo do cancelamento...';
          currentConfig.primaryButtonText = 'Sim, Cancelar';
          currentConfig.secondaryButtonText = 'Voltar';
          
          // Salvar o callback original
          currentConfig._originalSecondaryCallback = currentConfig.onSecondary;
          
          // Substituir temporariamente o callback secundário
          currentConfig.onSecondary = () => {
            // Voltar ao estado inicial
            currentConfig.showDesistirSection = false;
            currentConfig.primaryButtonText = 'Sinalizar Conclusão';
            currentConfig.secondaryButtonText = 'Cancelar';
            currentConfig.onSecondary = currentConfig._originalSecondaryCallback;
            applyConfig(currentConfig);
          };
          
          applyConfig(currentConfig);
          return;
        }
        
        // Se é o botão "Cancelar" no contexto de confirmação, mostrar seção de justificativa
        if (currentConfig.context === 'confirmacao' && !currentConfig.showDesistirSection) {
          currentConfig.showDesistirSection = true;
          currentConfig.desistirLabel = 'Motivo do cancelamento';
          currentConfig.justificativaPlaceholder = 'Descreva o motivo do cancelamento...';
          currentConfig.primaryButtonText = 'Confirmar Cancelamento';
          currentConfig.secondaryButtonText = 'Voltar';
          
          // Salvar o callback original
          currentConfig._originalSecondaryCallback = currentConfig.onSecondary;
          
          // Substituir temporariamente o callback secundário para "Voltar"
          currentConfig.onSecondary = () => {
            // Voltar ao estado inicial
            currentConfig.showDesistirSection = false;
            currentConfig.primaryButtonText = 'Confirmar Conclusão';
            currentConfig.secondaryButtonText = 'Cancelar';
            currentConfig.onSecondary = currentConfig._originalSecondaryCallback;
            applyConfig(currentConfig);
          };
          
          applyConfig(currentConfig);
          return;
        }
        
        // Se é o botão "Sim, Cancelar" no contexto de cancelamento, mostrar seção de justificativa
        if (currentConfig.context === 'cancelamento' && !currentConfig.showDesistirSection) {
          currentConfig.showDesistirSection = true;
          currentConfig.desistirLabel = 'Motivo do cancelamento';
          currentConfig.justificativaPlaceholder = 'Descreva o motivo do cancelamento...';
          currentConfig.primaryButtonText = 'Sim, Cancelar';
          currentConfig.secondaryButtonText = 'Voltar';
          
          // Salvar o callback original
          currentConfig._originalSecondaryCallback = currentConfig.onSecondary;
          
          // Substituir temporariamente o callback secundário para "Voltar"
          currentConfig.onSecondary = () => {
            // Voltar ao estado inicial
            currentConfig.showDesistirSection = false;
            currentConfig.primaryButtonText = 'Manter Solicitação';
            currentConfig.secondaryButtonText = 'Sim, Cancelar';
            currentConfig.onSecondary = currentConfig._originalSecondaryCallback;
            applyConfig(currentConfig);
          };
          
          applyConfig(currentConfig);
          return;
        }

        if (currentConfig.onSecondary) {
          currentConfig.onSecondary();
        }
        
        if (currentConfig.secondaryAction !== 'keep-open') {
          GenericModal.close();
        }
      });
    }
  }

  const GenericModal = {
    /**
     * Abre o modal com a configuração especificada
     * @param {Object} options - Opções de configuração
     */
    open(options = {}) {
      if (!initialized) {
        if (!initializeElements()) {
          console.error('GenericModal: Elementos DOM não encontrados. Certifique-se de que o HTML do modal está presente na página.');
          return;
        }
        setupEventListeners();
        initialized = true;
      }

      // Mesclar configuração padrão com dados do localStorage e opções fornecidas
      const storageData = getDataFromStorage();
      const defaultConfig = options.context ? DEFAULT_CONFIGS[options.context] || {} : {};
      
      currentConfig = {
        ...defaultConfig,
        ...storageData,
        ...options
      };

      // Processar placeholders como {{date}}
      if (currentConfig.subtitle && storageData.date) {
        currentConfig.subtitle = currentConfig.subtitle.replace('{{date}}', storageData.date);
      }

      applyConfig(currentConfig);

      // Mostrar modal com animação
      modal.classList.remove('hidden');
      setTimeout(() => {
        if (modalContent) {
          modalContent.classList.add('entered');
        }
      }, 10);

      // Bloquear scroll do body
      document.body.style.overflow = 'hidden';

      // Focar no botão primário
      if (primaryBtn) {
        setTimeout(() => primaryBtn.focus(), 100);
      }
    },

    /**
     * Fecha o modal
     */
    close() {
      if (!modal) return;

      console.log('Fechando modal...');

      if (modalContent) {
        modalContent.classList.remove('entered');
      }

      setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
        
        // Limpar configuração atual
        currentConfig = {};
        console.log('Modal fechado e configuração limpa');
      }, 200);
    },

    /**
     * Verifica se o modal está aberto
     */
    isOpen() {
      return modal && !modal.classList.contains('hidden');
    },

    /**
     * Atualiza dados no localStorage para uso futuro
     */
    updateStorageData(data) {
      try {
        const existing = getDataFromStorage();
        const updated = { ...existing, ...data };
        localStorage.setItem('modalData', JSON.stringify(updated));
      } catch (error) {
        console.warn('Erro ao salvar dados no localStorage:', error);
      }
    }
  };

  window.GenericModal = GenericModal;
  console.log('GenericModal exposto globalmente!', GenericModal);

  // Função helper para compatibilidade com código existente
  window.openConfirmacao = function(options = {}) {
    console.log('openConfirmacao chamada:', options);
    GenericModal.open({
      context: 'confirmacao',
      ...options
    });
  };

  // Função helper para visualização
  window.openVisualizacao = function(options = {}) {
    console.log('openVisualizacao chamada:', options);
    GenericModal.open({
      context: 'visualizacao',
      ...options
    });
  };

  // Função helper para cancelamento
  window.openCancelamento = function(options = {}) {
    console.log('openCancelamento chamada:', options);
    GenericModal.open({
      context: 'cancelamento',
      ...options
    });
  };

})();

console.log('Script do Modal Genérico carregado completamente!');