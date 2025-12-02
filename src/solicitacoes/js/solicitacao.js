const STORAGE_KEY = 'tradeSkillsData';
const DEFAULT_USER_ID = 'user-paula';

const STATUS_INFO = {
    pendente: { label: 'Pendente', badgeClass: 'pendente' },
    'em-andamento': { label: 'Em andamento', badgeClass: 'em-andamento' },
    'aguardando-cliente': { label: 'Aguardando Cliente', badgeClass: 'aguardando' },
    concluido: { label: 'Concluído', badgeClass: 'concluido' },
    cancelado: { label: 'Cancelado', badgeClass: 'cancelado' }
};

const EVALUATION_RESPONSES_KEY = 'tradeSkillsEvaluations';
let evaluationModalTemplate = null;
let evaluationStylesLoaded = false;

const SEED_MODE_KEY = 'tradeSkillsSeedMode';
const SEED_QUERY_PARAM = 'seed';
const SEED_MODES = {
    SAMPLE: 'sample',
    BLANK: 'blank'
};
let seedToggleInitialized = false;

const SEARCH_INPUT_CLASS = 'toolbar-search-input';
const FILTER_DROPDOWN_CLASS = 'filter-dropdown';
const STATUS_FILTER_OPTIONS = [
    { value: 'pendente', label: 'Pendente' },
    { value: 'em-andamento', label: 'Em andamento' },
    { value: 'aguardando-cliente', label: 'Aguardando Cliente' },
    { value: 'concluido', label: 'Concluído' },
    { value: 'cancelado', label: 'Cancelado' }
];

const DEFAULT_DATA = {
    currentUserId: DEFAULT_USER_ID,
    users: [
        { id: 'user-paula', name: 'Paula Fernandes', credits: 50 },
        { id: 'user-maria', name: 'Maria Silva', credits: 50 },
        { id: 'user-carlos', name: 'Carlos Lima', credits: 50 },
        { id: 'user-ana', name: 'Ana Souza', credits: 50 },
        { id: 'user-joao', name: 'João Pedro', credits: 50 },
        { id: 'user-laura', name: 'Laura Nunes', credits: 50 },
        { id: 'user-ricardo', name: 'Ricardo Alves', credits: 50 },
        { id: 'user-pedro', name: 'Pedro Henrique', credits: 50 },
        { id: 'user-larissa', name: 'Larissa Lima', credits: 50 },
        { id: 'user-jose', name: 'José Silva', credits: 50 },
    ],
    requests: [
        {
            id: 'req-1',
            habilidade: 'Aula de Violão',
            providerId: 'user-paula',
            consumerId: 'user-maria',
            date: '2025-11-27',
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
            date: '2025-10-26',
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
        },

        {
            id: 'req-7',
            habilidade: 'Edição de Vídeo',
            providerId: 'user-pedro',
            consumerId: 'user-paula',
            date: '2025-10-18',
            credits: 25,
            availability: 'Dom | Manhã',
            modality: 'Online',
            status: 'pendente'
        },

        {
            id: 'req-8',
            habilidade: 'Tradução',
            providerId: 'user-larissa',
            consumerId: 'user-paula',
            date: '2025-11-26',
            credits: 15,
            availability: 'Sex | Manhã',
            modality: 'Online',
            status: 'em-andamento'
        },

        {
            id: 'req-9',
            habilidade: 'Manutenção de Computadores',
            providerId: 'user-paula',
            consumerId: 'user-josé',
            date: '2025-10-15',
            credits: 40,
            availability: 'Sáb | Manhã',
            modality: 'Presencial',
            status: 'pendente'
        },
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

function cloneDefaultData(targetUserId) {
    const data = JSON.parse(JSON.stringify(DEFAULT_DATA));

    if (!targetUserId || targetUserId === DEFAULT_USER_ID) {
        return data;
    }

    
    data.currentUserId = targetUserId;

    data.requests.forEach(req => {
        if (req.providerId === DEFAULT_USER_ID) req.providerId = targetUserId;
        if (req.consumerId === DEFAULT_USER_ID) req.consumerId = targetUserId;
    });

    data.history.forEach(hist => {
        if (hist.userId === DEFAULT_USER_ID) hist.userId = targetUserId;
    });

    
    const userExists = data.users.some(u => u.id === targetUserId);
    if (!userExists && typeof UserStorage !== 'undefined') {
        const currentUser = UserStorage.getCurrentUser();
        if (currentUser) {
           
            const userWithResetCredits = { ...currentUser, credits: 100 };
            data.users.push(userWithResetCredits);
        }
    } else if (userExists) {
        const user = data.users.find(u => u.id === targetUserId);
        if (user) {
            user.credits = 100;
        }
    }

    return data;
}

function createBlankSeedData(targetUserId) {
    return {
        currentUserId: targetUserId || DEFAULT_USER_ID,
        users: [],
        requests: [],
        history: []
    };
}

function isValidSeedMode(mode) {
    return mode === SEED_MODES.SAMPLE || mode === SEED_MODES.BLANK;
}

function getStoredSeedMode() {
    const storedMode = localStorage.getItem(SEED_MODE_KEY);
    if (isValidSeedMode(storedMode)) {
        return storedMode;
    }

    localStorage.setItem(SEED_MODE_KEY, SEED_MODES.SAMPLE);
    return SEED_MODES.SAMPLE;
}

function setStoredSeedMode(mode) {
    if (isValidSeedMode(mode)) {
        localStorage.setItem(SEED_MODE_KEY, mode);
    }
}

function getSeedDataByMode(mode, targetUserId) {
    return mode === SEED_MODES.BLANK ? createBlankSeedData(targetUserId) : cloneDefaultData(targetUserId);
}

function applySeed(mode) {
    const normalizedMode = isValidSeedMode(mode) ? mode : SEED_MODES.SAMPLE;

    let currentUserId = DEFAULT_USER_ID;
    if (typeof UserStorage !== 'undefined') {
        const user = UserStorage.getCurrentUser();
        if (user) currentUserId = user.id;
    }

    const data = getSeedDataByMode(normalizedMode, currentUserId);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setStoredSeedMode(normalizedMode);

   
    if (typeof UserStorage !== 'undefined' && currentUserId) {
        const seededUser = data.users.find(u => u.id === currentUserId);
        if (seededUser) {

            UserStorage.updateCurrentUserField('credits', seededUser.credits || 50);
        }
    }

    return data;
}

function handleSeedQueryToggle() {
    try {
        const url = new URL(window.location.href);
        const seedParam = url.searchParams.get(SEED_QUERY_PARAM);
        const normalizedSeed = seedParam ? seedParam.toLowerCase() : null;

        if (isValidSeedMode(normalizedSeed)) {
            applySeed(normalizedSeed);
            if (typeof window.history.replaceState === 'function') {
                url.searchParams.delete(SEED_QUERY_PARAM);
                window.history.replaceState({}, '', url.toString());
            }
        }
    } catch (error) {
        console.warn('Não foi possível aplicar o seed via querystring.', error);
    }
}

function redirectWithSeed(mode) {
    try {
        const url = new URL(window.location.href);
        const currentSeed = url.searchParams.get(SEED_QUERY_PARAM);

        if (currentSeed === mode) {
            window.location.reload();
            return;
        }

        url.searchParams.set(SEED_QUERY_PARAM, mode);
        window.location.href = url.toString();
    } catch (error) {
        console.warn('Não foi possível atualizar a URL com o seed selecionado.', error);
        window.location.reload();
    }
}

function setupSeedKeyboardToggle() {
    if (seedToggleInitialized) {
        return;
    }

    seedToggleInitialized = true;

    document.addEventListener('keydown', event => {
        if (event.ctrlKey && event.shiftKey && (event.key === 'S' || event.key === 's')) {
            event.preventDefault();

            const currentMode = getStoredSeedMode();
            const nextMode =
                currentMode === SEED_MODES.BLANK ? SEED_MODES.SAMPLE : SEED_MODES.BLANK;

            applySeed(nextMode);
            redirectWithSeed(nextMode);
        }
    });
}

// Toggle entre abas
document.querySelectorAll('.btn-tab').forEach(botao => {
    botao.addEventListener('click', function () {
        document
            .querySelectorAll('.btn-tab, .tab-conteudo')
            .forEach(el => el.classList.remove('active'));

        this.classList.add('active');
        document
            .getElementById('conteudo-' + this.dataset.tab)
            .classList.add('active');

        attachSearch();
        attachFilters();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    renderRequests();

    function waitForModal() {
        if (typeof window.GenericModal !== 'undefined') {
            initializeModalSystem();
        } else {
            setTimeout(waitForModal, 100);
        }
    }

    waitForModal();
});

function ensureData() {
    const seedMode = getStoredSeedMode();
    const stored = localStorage.getItem(STORAGE_KEY);

    
    let targetUserId = DEFAULT_USER_ID;
    if (typeof UserStorage !== 'undefined') {
        const user = UserStorage.getCurrentUser();
        if (user) targetUserId = user.id;
    }

    if (!stored) {
        const initialData = getSeedDataByMode(seedMode, targetUserId);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
        return initialData;
    }

    try {
        const data = JSON.parse(stored) || {};

        if (!data || typeof data !== 'object') {
            throw new Error('Estrutura de dados inválida.');
        }

        const arraysValid =
            Array.isArray(data.requests) &&
            Array.isArray(data.history) &&
            Array.isArray(data.users);

        if (!arraysValid) {
            const reseededData = getSeedDataByMode(seedMode, targetUserId);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(reseededData));
            return reseededData;
        }

        const normalizedData = {
            ...data,
            currentUserId: data.currentUserId || DEFAULT_USER_ID
        };

    
        if (typeof UserStorage !== 'undefined') {
            const currentUser = UserStorage.getCurrentUser();
            if (currentUser) {
                const exists = normalizedData.users.find(u => u.id === currentUser.id);
                if (!exists) {
                    normalizedData.users.push(currentUser);
                }
                
                normalizedData.currentUserId = currentUser.id;
            }
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizedData));
        return normalizedData;
    } catch (error) {
        console.warn('Não foi possível ler os dados salvos. Recriando padrão.', error);
        const fallbackMode = getStoredSeedMode();
        const fallbackData = getSeedDataByMode(fallbackMode, targetUserId);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(fallbackData));
        return fallbackData;
    }
}

function saveAppData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
}

function getCurrentUserId() {
    return appData.currentUserId || DEFAULT_USER_ID;
}

function getUserName(userId) {
    
    let user = appData.users.find(item => item.id == userId);

   
    if (!user && typeof UserStorage !== 'undefined') {
        const allUsers = UserStorage.getAllUsers();
        user = allUsers.find(item => item.id == userId);
    }

    return user ? user.name : 'Usuário';
}

function formatStatus(statusKey) {
    return STATUS_INFO[statusKey] || STATUS_INFO.pendente;
}

function formatCredits(credits) {
    return `${credits} créditos`;
}

function formatDateToday() {
    return new Date().toISOString().slice(0, 10);
}

function generateId(prefix) {
    return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

function renderRequests() {
    const currentUserId = getCurrentUserId();
    console.log("[DEBUG] renderRequests() - currentUserId:", currentUserId, "type:", typeof currentUserId);
    console.log("[DEBUG] renderRequests() - appData.requests:", appData.requests);

    const sentTable = document.querySelector('#conteudo-enviadas tbody');
    const receivedTable = document.querySelector('#conteudo-recebidos tbody');

    if (!sentTable || !receivedTable) {
        console.warn("[DEBUG] Tabelas não encontradas!");
        return;
    }

    const sentRequests = appData.requests
        .filter(request => {
            console.log("[DEBUG] Comparando:", request.consumerId, "===", currentUserId, "?", request.consumerId === currentUserId);
            console.log("[DEBUG] Tipos:", typeof request.consumerId, typeof currentUserId);
            
            return request.consumerId.toString() === currentUserId.toString();
        })
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date));

    const receivedRequests = appData.requests
        .filter(request => request.providerId.toString() === currentUserId.toString())
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date));

    console.log("[DEBUG] Solicitações enviadas filtradas:", sentRequests);
    console.log("[DEBUG] Solicitações recebidas filtradas:", receivedRequests);

    sentTable.innerHTML = sentRequests.length
        ? sentRequests.map(request => buildRowMarkup(request, 'sent')).join('')
        : '<tr><td colspan="5">Você ainda não enviou solicitações.</td></tr>';

    receivedTable.innerHTML = receivedRequests.length
        ? receivedRequests.map(request => buildRowMarkup(request, 'received')).join('')
        : '<tr><td colspan="5">Nenhum pedido recebido até o momento.</td></tr>';

    bindRowActions();
    attachSearch();
    attachFilters();
}

function attachSearch() {
    const toolbars = document.querySelectorAll('.tab-conteudo .toolbar');

    toolbars.forEach(toolbar => {
        const button = toolbar.querySelector('.btn-icone[aria-label="Buscar"]');
        const section = toolbar.closest('.tab-conteudo');

        if (!button || !section) {
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
                filterSolicitationRows(section, value);
            };

            const clearAndRemoveInput = inputElement => {
                inputElement.value = '';
                toolbar.dataset.searchTerm = '';
                filterSolicitationRows(section, '');
                inputElement.remove();
                button.focus();
            };

            const handleKeydown = event => {
                if (event.key === 'Escape') {
                    event.preventDefault();
                    const inputElement = event.target;
                    clearAndRemoveInput(inputElement);
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
                    input.placeholder = 'Buscar por habilidade, pessoa, data ou status';
                    input.setAttribute('aria-label', 'Buscar solicitações');
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

        if (section.classList.contains('active')) {
            const storedTerm = toolbar.dataset.searchTerm || '';
            filterSolicitationRows(section, storedTerm);
            const input = toolbar.querySelector(`.${SEARCH_INPUT_CLASS}`);
            if (input && input.value !== storedTerm) {
                input.value = storedTerm;
            }
        }
    });
}

function getToolbarSelectedFilters(toolbar) {
    if (!toolbar) {
        return [];
    }

    const stored = toolbar.dataset.filterValues;
    if (!stored) {
        return [];
    }

    return stored.split(',').filter(Boolean);
}

function attachFilters() {
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
            filterSolicitationRows(section, currentSearch);
        };

        const syncMenuState = menu => {
            const selected = getToolbarSelectedFilters(toolbar);
            menu
                .querySelectorAll('input[type="checkbox"]')
                .forEach(input => {
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

                STATUS_FILTER_OPTIONS.forEach(option => {
                    const label = document.createElement('label');
                    const input = document.createElement('input');
                    input.type = 'checkbox';
                    input.value = option.value;

                    input.addEventListener('change', () => {
                        const selected = Array.from(
                            menu.querySelectorAll('input[type="checkbox"]')
                        )
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

function filterSolicitationRows(section, term) {
    if (!section || !section.classList.contains('active')) {
        return;
    }

    const toolbar = section.querySelector('.toolbar');
    const selectedFilters = getToolbarSelectedFilters(toolbar);
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
        const statusKey = row.dataset.status || '';
        const matchesFilter = !selectedFilters.length || selectedFilters.includes(statusKey);

        row.style.display = matchesSearch && matchesFilter ? '' : 'none';
    });
}

function buildRowMarkup(request, view) {
    const otherName = getOtherPartyName(request, view);
    const statusInfo = formatStatus(request.status);

    return `
        <tr data-request-id="${request.id}" data-view="${view}" data-status="${request.status}">
            <td>${request.habilidade}</td>
            <td>${otherName}</td>
            <td>${request.date}</td>
            <td><span class="badge ${statusInfo.badgeClass}">${statusInfo.label}</span></td>
            <td><a href="javascript:void(0)" class="link-visualizar" data-request-id="${request.id}" data-view="${view}">Visualizar</a></td>
        </tr>
    `;
}

function getOtherPartyName(request, view) {
    if (view === 'received') {
        return getUserName(request.consumerId);
    }
    return getUserName(request.providerId);
}

function bindRowActions() {
    document.querySelectorAll('.link-visualizar').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const requestId = event.currentTarget.dataset.requestId;
            const view = event.currentTarget.dataset.view;
            openRequestModal(requestId, view);
        });
    });
}

function openRequestModal(requestId, view) {
    const request = appData.requests.find(item => item.id === requestId);

    if (!request || !window.GenericModal) {
        return;
    }

    const statusInfo = formatStatus(request.status);
    const otherName = getOtherPartyName(request, view);
    const tags = [formatCredits(request.credits), request.availability, request.modality];

    const modalPayload = {
        requestId: request.id,
        view,
        habilidade: request.habilidade,
        pessoa: otherName,
        date: request.date,
        status: statusInfo.label,
        statusKey: request.status,
        valor: formatCredits(request.credits),
        disponibilidade: request.availability,
        modalidade: request.modality,
        providerId: request.providerId,
        consumerId: request.consumerId,
        credits: request.credits
    };

    localStorage.setItem('modalData', JSON.stringify(modalPayload));

    window.GenericModal.open({
        context: determineModalContext(request, view),
        title: request.habilidade,
        tags
    });
}

function determineModalContext(request, view) {
    if (view === 'sent') {
        if (request.status === 'em-andamento' || request.status === 'aguardando-cliente') {
            return 'confirmacao';
        }
        if (request.status === 'pendente') {
            return 'cancelamento';
        }
        return 'visualizacao';
    }

    if (request.status === 'pendente') {
        return 'confirmacao-recebidos';
    }
    if (request.status === 'em-andamento') {
        return 'cancelamento-recebidos';
    }
    return 'visualizacao';
}

function initializeModalSystem() {
    setupModalCallbacks();
    bindRowActions();
}

function setupModalCallbacks() {
    const originalOpen = window.GenericModal.open;

    window.GenericModal.open = function (options = {}) {
        const modalData = JSON.parse(localStorage.getItem('modalData') || '{}');

        options.onPrimary = function (data) {
            const requestId = modalData.requestId;
            const context = options.context;

            if (!requestId) {
                return true;
            }

            if (context === 'confirmacao') {
                concludeRequest(requestId);
                alert('Conclusão confirmada! Os créditos foram repassados.');

                try {
                    localStorage.setItem(
                        'evaluationData',
                        JSON.stringify({
                            requestId,
                            habilidade: modalData.habilidade,
                            pessoa: modalData.pessoa,
                            date: modalData.date,
                            credits: modalData.credits || 0
                        })
                    );
                } catch (error) {
                    console.warn('Não foi possível registrar os dados da avaliação.', error);
                }
                setTimeout(() => {
                    openEvaluationModal({
                        requestId,
                        habilidade: modalData.habilidade,
                        pessoa: modalData.pessoa,
                        date: modalData.date,
                        credits: modalData.credits || 0
                    });
                }, 200);
            } else if (context === 'confirmacao-recebidos') {
                if (data && data.action === 'cancel') {
                    if (!data.justificativa || data.justificativa.trim() === '') {
                        alert('Por favor, preencha a justificativa antes de cancelar.');
                        return false;
                    }
                    cancelRequest(requestId, data.justificativa || '', 'provider');
                    alert('Pedido cancelado com sucesso.');
                } else if (data && data.action === 'accept') {
                    updateRequestStatus(requestId, 'em-andamento');
                    alert('Pedido aceito! O status agora é Em andamento.');
                }
            } else if (context === 'cancelamento') {
                if (data && Object.prototype.hasOwnProperty.call(data, 'justificativa')) {
                    const reason = typeof data.justificativa === 'string' ? data.justificativa : '';
                    cancelRequest(requestId, reason, 'consumer');
                    alert('Solicitação cancelada com sucesso.');
                }
            } else if (context === 'cancelamento-recebidos') {
                if (data && data.action === 'cancel') {
                    if (!data.justificativa || data.justificativa.trim() === '') {
                        alert('Por favor, preencha a justificativa antes de cancelar.');
                        return false;
                    }
                    cancelRequest(requestId, data.justificativa || '', 'provider');
                    alert('Pedido cancelado com sucesso.');
                } else if (data && data.action === 'confirm') {
                    updateRequestStatus(requestId, 'aguardando-cliente');
                    alert('Conclusão sinalizada! Aguardando confirmação do cliente.');
                    setTimeout(() => {
                        openEvaluationModal({
                            requestId: modalData.requestId,
                            habilidade: modalData.habilidade,
                            pessoa: modalData.pessoa,
                            date: modalData.date,
                            credits: modalData.credits || 0
                        });
                    }, 200);
                }
            }

            return true;
        };

        options.onSecondary = function () {
            return true;
        };

        return originalOpen.call(this, options);
    };
}

function updateRequestStatus(requestId, newStatus, extra = {}) {
    const request = appData.requests.find(item => item.id === requestId);

    if (!request) {
        return;
    }

    request.status = newStatus;

    if (newStatus === 'concluido') {
        request.completedAt = extra.date || formatDateToday();
        addHistoryEntries(request);
    }

    if (newStatus === 'cancelado') {
        request.canceledAt = extra.date || formatDateToday();
        request.canceledBy = extra.canceledBy || 'desconhecido';
        request.cancellationReason = extra.reason || '';
    }

    saveAppData();
    renderRequests();
}

function concludeRequest(requestId) {
    updateRequestStatus(requestId, 'concluido');
}

function cancelRequest(requestId, reason, canceledBy) {
    updateRequestStatus(requestId, 'cancelado', {
        reason,
        canceledBy
    });
}

async function loadEvaluationModalTemplate() {
    if (evaluationModalTemplate) {
        return evaluationModalTemplate.cloneNode(true);
    }

    try {
        const response = await fetch('/components/modal/avaliacao/index.html');
        if (!response.ok) {
            throw new Error('Não foi possível carregar o template de avaliação.');
        }

        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const modalElement = doc.querySelector('.modal');

        if (!modalElement) {
            throw new Error('Estrutura da modal de avaliação não encontrada.');
        }

        evaluationModalTemplate = modalElement;
        return modalElement.cloneNode(true);
    } catch (error) {
        console.warn(error.message);
        return null;
    }
}

function ensureEvaluationStyles() {
    if (evaluationStylesLoaded) {
        return;
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/components/modal/avaliacao/css/style.css';
    document.head.appendChild(link);
    evaluationStylesLoaded = true;
}

async function openEvaluationModal(data) {
    const template = await loadEvaluationModalTemplate();
    if (!template) {
        return;
    }

    ensureEvaluationStyles();

    const existingModal = document.getElementById('evaluation-modal');
    if (existingModal) {
        existingModal.remove();
    }

    const modalElement = template;
    modalElement.id = 'evaluation-modal';

    modalElement.querySelectorAll('.star img').forEach(img => {
        img.src = '/components/modal/icon/icon_star.svg';
    });

    const subtitle = modalElement.querySelector('.modal-text');
    if (subtitle) {
        subtitle.innerHTML = `Conte como foi sua experiência com o serviço <strong>${data.habilidade}</strong> prestado por <strong>${data.pessoa}</strong>.`;
    }

    document.body.appendChild(modalElement);
    document.body.style.overflow = 'hidden';

    setupEvaluationModalInteractions(modalElement, data);
}

function setupEvaluationModalInteractions(modalElement, data) {
    const chips = modalElement.querySelectorAll('.chip');
    const stars = modalElement.querySelectorAll('.star');
    const commentField = modalElement.querySelector('.experiencia');
    const sendButton = modalElement.querySelector('.send');
    const highlights = new Set();
    let currentRating = 0;

    const closeModal = () => {
        modalElement.remove();
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleEsc);
    };

    const updateStars = rating => {
        stars.forEach((star, index) => {
            star.classList.toggle('selected', index < rating);
        });
    };

    const handleEsc = event => {
        if (event.key === 'Escape') {
            closeModal();
        }
    };

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            currentRating = index + 1;
            updateStars(currentRating);
        });
    });

    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            const value = chip.dataset.value;
            if (chip.classList.contains('selected')) {
                chip.classList.remove('selected');
                highlights.delete(value);
            } else {
                chip.classList.add('selected');
                highlights.add(value);
            }
        });
    });

    if (sendButton) {
        sendButton.addEventListener('click', () => {
            storeEvaluation({
                requestId: data.requestId,
                habilidade: data.habilidade,
                pessoa: data.pessoa,
                date: data.date,
                credits: data.credits,
                rating: currentRating,
                highlights: Array.from(highlights),
                comment: commentField ? commentField.value.trim() : ''
            });

            alert('Avaliação enviada! Obrigado pelo feedback.');
            closeModal();
        });
    }

    modalElement.addEventListener('click', event => {
        if (event.target === modalElement) {
            closeModal();
        }
    });

    document.addEventListener('keydown', handleEsc);
}

function storeEvaluation(evaluation) {
    try {
        const stored = JSON.parse(localStorage.getItem(EVALUATION_RESPONSES_KEY) || '[]');
        const filtered = stored.filter(item => item.requestId !== evaluation.requestId);
        filtered.push({ ...evaluation, createdAt: new Date().toISOString() });
        localStorage.setItem(EVALUATION_RESPONSES_KEY, JSON.stringify(filtered));
    } catch (error) {
        console.warn('Não foi possível salvar a avaliação.', error);
    }
}

function updateUserCredits(userId, amount, operation) {
    let user = appData.users.find(u => u.id === userId);

    
    if (!user && typeof UserStorage !== 'undefined') {
        const currentUser = UserStorage.getCurrentUser();
        if (currentUser && currentUser.id == userId) {
            user = currentUser;
            
        }
    }

    if (!user) {
        console.warn(`Usuário ${userId} não encontrado`);
        return;
    }

    if (typeof user.credits !== 'number') {
        user.credits = 50;
    }

    if (operation === 'add') {
        user.credits += amount;
    } else if (operation === 'subtract') {
        user.credits -= amount;
    }
    console.log(`Créditos atualizados para ${user.name}: ${user.credits}`);

    
    if (typeof UserStorage !== 'undefined') {
       
        const currentUser = UserStorage.getCurrentUser();
        if (currentUser && currentUser.id == userId) {
            UserStorage.updateCurrentUserField('credits', user.credits);
        } else {
            UserStorage.updateOtherUserField(userId, 'credits', user.credits);
        }
    }
}

function transferCredits(fromUserId, toUserId, amount) {
    updateUserCredits(fromUserId, amount, 'subtract');
    updateUserCredits(toUserId, amount, 'add');
}

function addHistoryEntries(request) {
    if (!Array.isArray(appData.history)) {
        appData.history = [];
    }

    const providerEntryExists = appData.history.some(
        entry => entry.requestId === request.id && entry.userId === request.providerId
    );

    const consumerEntryExists = appData.history.some(
        entry => entry.requestId === request.id && entry.userId === request.consumerId
    );

    const completionDate = request.completedAt || formatDateToday();

    if (!providerEntryExists) {
        appData.history.push({
            id: generateId('hist'),
            requestId: request.id,
            userId: request.providerId,
            type: 'entrada',
            credits: request.credits,
            date: completionDate,
            habilidade: request.habilidade,
            pessoa: getUserName(request.consumerId)
        });
    }

    if (!consumerEntryExists) {
        appData.history.push({
            id: generateId('hist'),
            requestId: request.id,
            userId: request.consumerId,
            type: 'saida',
            credits: request.credits,
            date: completionDate,
            habilidade: request.habilidade,
            pessoa: getUserName(request.providerId)
        });

    }
    transferCredits(request.consumerId, request.providerId, request.credits);

    saveAppData();

    window.dispatchEvent(new CustomEvent('creditsUpdated', {
        detail: { userId: getCurrentUserId() }
    }));

}

handleSeedQueryToggle();
setupSeedKeyboardToggle();

let appData = ensureData();

// Toggle entre abas
document.querySelectorAll('.btn-tab').forEach(botao => {
    botao.addEventListener('click', function () {
        document
            .querySelectorAll('.btn-tab, .tab-conteudo')
            .forEach(el => el.classList.remove('active'));

        this.classList.add('active');
        document
            .getElementById('conteudo-' + this.dataset.tab)
            .classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {

    appData = ensureData();

    renderRequests();

    function waitForModal() {
        if (typeof window.GenericModal !== 'undefined') {
            initializeModalSystem();
        } else {
            setTimeout(waitForModal, 100);
        }
    }

    waitForModal();
});
