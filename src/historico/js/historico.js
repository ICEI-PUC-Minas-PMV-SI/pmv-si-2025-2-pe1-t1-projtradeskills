const STORAGE_KEY = 'tradeSkillsData';
const DEFAULT_USER_ID = 'user-paula';
const SEARCH_INPUT_CLASS = 'toolbar-search-input';
const FILTER_DROPDOWN_CLASS = 'filter-dropdown';
const HISTORY_FILTER_OPTIONS = [
  { value: 'entrada', label: 'Entrada' },
  { value: 'saida', label: 'Saída' }
];

const DEFAULT_DATA = {
  currentUserId: DEFAULT_USER_ID,
  users: [
    { id: 'user-paula', name: 'Paula Fernandes' },
    { id: 'user-maria', name: 'Maria Silva' },
    { id: 'user-carlos', name: 'Carlos Lima' },
    { id: 'user-ana', name: 'Ana Souza' },
    { id: 'user-joao', name: 'João Pedro' },
    { id: 'user-laura', name: 'Laura Nunes' },
    { id: 'user-ricardo', name: 'Ricardo Alves' }
  ],
  requests: [
    {
      id: 'req-1',
      habilidade: 'Aula de Violão',
      providerId: 'user-paula',
      consumerId: 'user-maria',
      date: '2025-10-15',
      credits: 40,
      availability: 'Sáb | Manhã',
      modality: 'Presencial',
      status: 'pendente'
    },
    {
      id: 'req-2',
      habilidade: 'Consultoria em Currículo',
      providerId: 'user-paula',
      consumerId: 'user-carlos',
      date: '2025-10-11',
      credits: 60,
      availability: 'Seg | Noite',
      modality: 'Online',
      status: 'em-andamento'
    },
    {
      id: 'req-3',
      habilidade: 'Aula de Espanhol',
      providerId: 'user-ana',
      consumerId: 'user-paula',
      date: '2025-10-12',
      credits: 35,
      availability: 'Ter | Tarde',
      modality: 'Remoto',
      status: 'aguardando-cliente'
    },
    {
      id: 'req-4',
      habilidade: 'Montagem de Móveis',
      providerId: 'user-joao',
      consumerId: 'user-paula',
      date: '2025-10-18',
      credits: 25,
      availability: 'Dom | Manhã',
      modality: 'Presencial',
      status: 'pendente'
    },
    {
      id: 'req-5',
      habilidade: 'Design de Logo',
      providerId: 'user-paula',
      consumerId: 'user-laura',
      date: '2025-09-20',
      credits: 50,
      availability: 'Flexível',
      modality: 'Remoto',
      status: 'concluido',
      completedAt: '2025-09-25'
    },
    {
      id: 'req-6',
      habilidade: 'Aula de Fotografia',
      providerId: 'user-ricardo',
      consumerId: 'user-paula',
      date: '2025-09-10',
      credits: 30,
      availability: 'Sáb | Tarde',
      modality: 'Presencial',
      status: 'concluido',
      completedAt: '2025-09-15'
    }
  ],
  history: [
    {
      id: 'hist-1',
      requestId: 'req-5',
      userId: 'user-paula',
      type: 'entrada',
      credits: 50,
      date: '2025-09-25',
      habilidade: 'Design de Logo',
      pessoa: 'Laura Nunes'
    },
    {
      id: 'hist-2',
      requestId: 'req-6',
      userId: 'user-paula',
      type: 'saida',
      credits: 30,
      date: '2025-09-15',
      habilidade: 'Aula de Fotografia',
      pessoa: 'Ricardo Alves'
    }
  ]
};

let appData = ensureData();

function ensureData() {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    const clone = JSON.parse(JSON.stringify(DEFAULT_DATA));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clone));
    return clone;
  }

  try {
    const data = JSON.parse(stored);
    if (!Array.isArray(data.users)) {
      data.users = DEFAULT_DATA.users;
    }
    if (!Array.isArray(data.requests)) {
      data.requests = DEFAULT_DATA.requests;
    }
    if (!Array.isArray(data.history)) {
      data.history = DEFAULT_DATA.history;
    }
    if (!data.currentUserId) {
      data.currentUserId = DEFAULT_DATA.currentUserId;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return data;
  } catch (error) {
    console.warn('Não foi possível ler os dados do histórico. Recriando padrão.', error);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_DATA));
    return JSON.parse(JSON.stringify(DEFAULT_DATA));
  }
}

function getCurrentUserId() {
  return appData.currentUserId || DEFAULT_USER_ID;
}

function renderHistory() {
  function isKnownUser(userId) {
  return Array.isArray(appData.users) && appData.users.some(u => u.id === userId);
}

function renderHistory() {
  const currentUserId = getCurrentUserId();

  if (!isKnownUser(currentUserId)) {
    const tableBody = document.querySelector('.tabela-solicitacoes tbody');
    if (tableBody) {
      tableBody.innerHTML = '<tr><td colspan="5">Nenhuma movimentação registrada ainda.</td></tr>';
    }
    return;
  }

}

  const tableBody = document.querySelector('.tabela-solicitacoes tbody');

  if (!tableBody) {
    return;
  }

  const currentUser = getCurrentUserId();

  const entries = (appData.history || [])
    .filter(entry => entry.userId === currentUser)
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  tableBody.innerHTML = entries.length
    ? entries.map(buildHistoryRow).join('')
    : '<tr><td colspan="5">Nenhuma movimentação registrada ainda.</td></tr>';

  attachHistorySearch();
  attachHistoryFilters();
}

function buildHistoryRow(entry) {
  const tipo = entry.type === 'entrada' ? 'Entrada' : 'Saída';
  const sinal = entry.type === 'entrada' ? '+' : '-';

  return `
    <tr data-type="${entry.type}">
      <td>${entry.habilidade}</td>
      <td>${entry.pessoa}</td>
      <td>${entry.date}</td>
      <td>${tipo}</td>
      <td class="valor">
        <span class="quantia">${sinal}${entry.credits}</span>
        <img class="icone-dinheiro" src="./img/icon_money.svg" alt="Créditos" />
      </td>
    </tr>
  `;
}

document.addEventListener('DOMContentLoaded', renderHistory);

function attachHistorySearch() {
  const toolbar = document.querySelector('.tab-conteudo .toolbar');
  const button = toolbar ? toolbar.querySelector('.btn-icone[aria-label="Buscar"]') : null;
  const section = toolbar ? toolbar.closest('.tab-conteudo') : null;

  if (!toolbar || !button || !section) {
    return;
  }

  if (typeof toolbar.dataset.searchTerm === 'undefined') {
    toolbar.dataset.searchTerm = '';
  }

  if (button.dataset.searchBound !== 'true') {
    button.dataset.searchBound = 'true';

    const handleInput = event => {
      const value = event.target.value || '';
      toolbar.dataset.searchTerm = value;
      filterHistoryRows(section, value);
    };

    const clearAndRemoveInput = inputElement => {
      inputElement.value = '';
      toolbar.dataset.searchTerm = '';
      filterHistoryRows(section, '');
      inputElement.remove();
      button.focus();
    };

    const handleKeydown = event => {
      if (event.key === 'Escape') {
        event.preventDefault();
        clearAndRemoveInput(event.target);
      }
    };

    const handleBlur = event => {
      if ((event.target.value || '').trim().length === 0) {
        clearAndRemoveInput(event.target);
      }
    };

    button.addEventListener('click', () => {
      let input = toolbar.querySelector(`.${SEARCH_INPUT_CLASS}`);

      if (!input) {
        input = document.createElement('input');
        input.type = 'search';
        input.className = SEARCH_INPUT_CLASS;
        input.placeholder = 'Buscar por habilidade, pessoa, data ou tipo';
        input.setAttribute('aria-label', 'Buscar histórico de transações');
        input.value = toolbar.dataset.searchTerm || '';
        input.addEventListener('input', handleInput);
        input.addEventListener('keydown', handleKeydown);
        input.addEventListener('blur', handleBlur);
        button.insertAdjacentElement('afterend', input);
      }

      requestAnimationFrame(() => {
        input.focus();
        input.setSelectionRange(0, input.value.length);
      });
    });
  }

  const storedTerm = toolbar.dataset.searchTerm || '';
  filterHistoryRows(section, storedTerm);

  const input = toolbar.querySelector(`.${SEARCH_INPUT_CLASS}`);
  if (input && input.value !== storedTerm) {
    input.value = storedTerm;
  }
}

function getHistorySelectedFilters(toolbar) {
  if (!toolbar) {
    return [];
  }

  const stored = toolbar.dataset.filterValues;
  if (!stored) {
    return [];
  }

  return stored.split(',').filter(Boolean);
}

function attachHistoryFilters() {
  const toolbars = document.querySelectorAll('.tab-conteudo .toolbar');

  toolbars.forEach(toolbar => {
    const button = toolbar.querySelector('.btn-icone[aria-label="Filtro"]');
    const section = toolbar.closest('.tab-conteudo');

    if (!button || !section) {
      return;
    }

    if (typeof toolbar.dataset.filterValues === 'undefined') {
      toolbar.dataset.filterValues = '';
    }

    const updateFilters = () => {
      const currentSearch = toolbar.dataset.searchTerm || '';
      filterHistoryRows(section, currentSearch);
    };

    const syncMenuState = menu => {
      const selected = getHistorySelectedFilters(toolbar);
      menu.querySelectorAll('input[type="checkbox"]').forEach(input => {
        input.checked = selected.includes(input.value);
      });
    };

    const closeMenu = menu => {
      if (!menu || !menu.classList.contains('open')) {
        return;
      }

      menu.classList.remove('open');

      if (menu._outsideClickHandler) {
        document.removeEventListener('mousedown', menu._outsideClickHandler);
        delete menu._outsideClickHandler;
      }

      if (menu._escapeHandler) {
        document.removeEventListener('keydown', menu._escapeHandler);
        delete menu._escapeHandler;
      }
    };

    const getOrCreateMenu = () => {
      let menu = toolbar.querySelector(`.${FILTER_DROPDOWN_CLASS}`);

      if (!menu) {
        menu = document.createElement('div');
        menu.className = FILTER_DROPDOWN_CLASS;

        HISTORY_FILTER_OPTIONS.forEach(option => {
          const label = document.createElement('label');
          const input = document.createElement('input');
          input.type = 'checkbox';
          input.value = option.value;

          input.addEventListener('change', () => {
            const selected = Array.from(menu.querySelectorAll('input[type="checkbox"]'))
              .filter(checkbox => checkbox.checked)
              .map(checkbox => checkbox.value);

            toolbar.dataset.filterValues = selected.join(',');
            updateFilters();
          });

          const text = document.createElement('span');
          text.textContent = option.label;

          label.append(input, text);
          menu.appendChild(label);
        });

        button.insertAdjacentElement('afterend', menu);
      }

      syncMenuState(menu);
      return menu;
    };

    const openMenu = menu => {
      if (menu.classList.contains('open')) {
        return;
      }

      syncMenuState(menu);
      menu.classList.add('open');

      const outsideHandler = event => {
        if (!menu.contains(event.target) && !button.contains(event.target)) {
          closeMenu(menu);
        }
      };

      const escapeHandler = event => {
        if (event.key === 'Escape') {
          closeMenu(menu);
        }
      };

      menu._outsideClickHandler = outsideHandler;
      menu._escapeHandler = escapeHandler;

      document.addEventListener('mousedown', outsideHandler);
      document.addEventListener('keydown', escapeHandler);
    };

    if (button.dataset.filterBound !== 'true') {
      button.dataset.filterBound = 'true';

      button.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();

        const menu = getOrCreateMenu();

        if (menu.classList.contains('open')) {
          closeMenu(menu);
        } else {
          openMenu(menu);
        }
      });
    }

    if (!section.classList.contains('active')) {
      const menu = toolbar.querySelector(`.${FILTER_DROPDOWN_CLASS}`);
      if (menu) {
        closeMenu(menu);
      }
    }

    updateFilters();
  });
}

function filterHistoryRows(section, term) {
  if (!section || !section.classList.contains('active')) {
    return;
  }

  const toolbar = section.querySelector('.toolbar');
  const selectedFilters = getHistorySelectedFilters(toolbar);
  const normalizedTerm = (term || '').trim().toLowerCase();
  const rows = section.querySelectorAll('tbody tr');

  rows.forEach(row => {
    const cells = Array.from(row.querySelectorAll('td'));

    if (!cells.length) {
      return;
    }

    if (cells.length === 1) {
      row.style.display = normalizedTerm || selectedFilters.length ? 'none' : '';
      return;
    }

    const searchableText = cells
      .slice(0, 4)
      .map(cell => (cell.textContent || '').toLowerCase())
      .join(' ');

    const matchesSearch = !normalizedTerm || searchableText.includes(normalizedTerm);
    const typeKey = (row.dataset.type || '').toLowerCase();
    const matchesFilter = !selectedFilters.length || selectedFilters.includes(typeKey);

    row.style.display = matchesSearch && matchesFilter ? '' : 'none';
  });
}