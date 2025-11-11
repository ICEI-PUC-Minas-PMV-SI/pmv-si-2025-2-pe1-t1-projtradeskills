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

function cloneDefaultData() {
    return JSON.parse(JSON.stringify(DEFAULT_DATA));
}

function createBlankSeedData() {
    return {
        currentUserId: DEFAULT_USER_ID,
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

function getSeedDataByMode(mode) {
    return mode === SEED_MODES.BLANK ? createBlankSeedData() : cloneDefaultData();
}

function applySeed(mode) {
    const normalizedMode = isValidSeedMode(mode) ? mode : SEED_MODES.SAMPLE;
    const data = getSeedDataByMode(normalizedMode);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setStoredSeedMode(normalizedMode);

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

    if (!stored) {
        const initialData = getSeedDataByMode(seedMode);
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
            const reseededData = getSeedDataByMode(seedMode);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(reseededData));
            return reseededData;
        }

        const normalizedData = {
            ...data,
            currentUserId: data.currentUserId || DEFAULT_USER_ID
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizedData));
        return normalizedData;
    } catch (error) {
        console.warn('Não foi possível ler os dados salvos. Recriando padrão.', error);
        const fallbackMode = getStoredSeedMode();
        const fallbackData = getSeedDataByMode(fallbackMode);
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
    const user = appData.users.find(item => item.id === userId);
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

    const sentTable = document.querySelector('#conteudo-enviadas tbody');
    const receivedTable = document.querySelector('#conteudo-recebidos tbody');

    if (!sentTable || !receivedTable) {
        return;
    }

    const sentRequests = appData.requests
        .filter(request => request.consumerId === currentUserId)
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date));

    const receivedRequests = appData.requests
        .filter(request => request.providerId === currentUserId)
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date));

    sentTable.innerHTML = sentRequests.length
        ? sentRequests.map(request => buildRowMarkup(request, 'sent')).join('')
        : '<tr><td colspan="5">Você ainda não enviou solicitações.</td></tr>';

    receivedTable.innerHTML = receivedRequests.length
        ? receivedRequests.map(request => buildRowMarkup(request, 'received')).join('')
        : '<tr><td colspan="5">Nenhum pedido recebido até o momento.</td></tr>';

    bindRowActions();
}

function buildRowMarkup(request, view) {
    const otherName = getOtherPartyName(request, view);
    const statusInfo = formatStatus(request.status);

    return `
        <tr data-request-id="${request.id}" data-view="${view}">
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
                    cancelRequest(requestId, data.justificativa || '', 'provider');
                    alert('Pedido cancelado com sucesso.');
                } else if (data && data.action === 'confirm') {
                    updateRequestStatus(requestId, 'aguardando-cliente');
                    alert('Conclusão sinalizada! Aguardando confirmação do cliente.');
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


    saveAppData();
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


// localStorage.setItem('tradeSkillsData', JSON.stringify(DEFAULT_DATA));
//location.reload();    Código para rodar no console para aparecer os dados 
