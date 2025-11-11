const STORAGE_KEY = 'tradeSkillsData';
const DEFAULT_USER_ID = 'user-paula';

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
}

function buildHistoryRow(entry) {
  const tipo = entry.type === 'entrada' ? 'Entrada' : 'Saída';
  const sinal = entry.type === 'entrada' ? '+' : '-';

  return `
    <tr>
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
