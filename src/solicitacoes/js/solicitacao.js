// Toggle entre abas
document.querySelectorAll('.btn-tab').forEach(botao => {
    botao.addEventListener('click', function() {
        // Remove active de todos os botões e conteúdos
        document.querySelectorAll('.btn-tab, .tab-conteudo').forEach(el => el.classList.remove('active'));
        
        // Adiciona active no botão clicado
        this.classList.add('active');
        
        // Mostra o conteúdo correspondente
        document.getElementById('conteudo-' + this.dataset.tab).classList.add('active');
    });
});

// Aguarda o DOM estar pronto
document.addEventListener('DOMContentLoaded', function() {
    // Aguarda o GenericModal estar disponível
    function waitForModal() {
        if (typeof window.GenericModal !== 'undefined') {
            initializeModalSystem();
        } else {
            setTimeout(waitForModal, 100);
        }
    }
    
    waitForModal();
});

function initializeModalSystem() {
    console.log('Inicializando sistema de modal das solicitações...');
    
    // Adicionar event listeners para todos os links "Visualizar"
    document.querySelectorAll('.link-visualizar').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Determinar o contexto baseado na aba ativa e dados da linha
            const abaAtiva = document.querySelector('.btn-tab.active').dataset.tab;
            const linha = this.closest('tr');
            const habilidade = linha.querySelector('td:first-child').textContent;
            const pessoa = linha.querySelector('td:nth-child(2)').textContent;
            const data = linha.querySelector('td:nth-child(3)').textContent;
            const statusElement = linha.querySelector('.badge');
            const status = statusElement.textContent.trim();
            
            console.log('Dados da solicitação:', { abaAtiva, habilidade, pessoa, data, status });
            
            // Determinar o contexto do modal
            let contexto = 'visualizacao'; // padrão
            
            if (abaAtiva === 'enviadas') {
                // Solicitações Enviadas
                if (status === 'Em andamento') {
                    contexto = 'confirmacao';
                } else if (status === 'Pendente') {
                    contexto = 'cancelamento';
                } else {
                    contexto = 'visualizacao';
                }
            } else if (abaAtiva === 'recebidos') {
                // Pedidos Recebidos
                if (status === 'Pendente') {
                    contexto = 'confirmacao-recebidos';
                } else if (status === 'Em andamento') {
                    contexto = 'cancelamento-recebidos';
                } else if (status === 'Concluído' || status === 'Concluido' || status === 'Aguardando Cliente') {
                    contexto = 'visualizacao';
                } else {
                    contexto = 'visualizacao';
                }
            }
            
            console.log('Contexto determinado:', contexto);
            
            // Determinar informações específicas baseadas no tipo de serviço
            let valor, disponibilidade, modalidade;
            
            switch(habilidade.toLowerCase()) { // TODO: vir do localStorage na 4a etapa
                case 'aula de violão':
                    valor = 'R$ 80,00';
                    disponibilidade = 'Sáb - Manhã';
                    modalidade = 'Presencial';
                    break;
                case 'serviço de pintura':
                    valor = 'R$ 200,00';
                    disponibilidade = 'Seg-Sex - Tarde';
                    modalidade = 'Presencial';
                    break;
                case 'aula de inglês':
                    valor = 'R$ 60,00';
                    disponibilidade = 'Ter/Qui - Noite';
                    modalidade = 'Online';
                    break;
                case 'instalação elétrica':
                    valor = 'R$ 150,00';
                    disponibilidade = 'Seg-Sex - Manhã';
                    modalidade = 'Presencial';
                    break;
                case 'serviço de jardinagem':
                    valor = 'R$ 120,00';
                    disponibilidade = 'Dom - Manhã';
                    modalidade = 'Presencial';
                    break;
                case 'serviço de limpeza':
                    valor = 'R$ 100,00';
                    disponibilidade = 'Qua/Sex - Tarde';
                    modalidade = 'Presencial';
                    break;
                default:
                    valor = 'R$ 50,00';
                    disponibilidade = 'Seg-Sex - Manhã';
                    modalidade = 'Presencial';
            }
            
            const dadosModal = {
                habilidade: habilidade,
                pessoa: pessoa,
                date: data,
                status: status,
                valor: valor,
                disponibilidade: disponibilidade,
                modalidade: modalidade,
                detalhes: 'Detalhes específicos do serviço solicitado.'
            };
            
            // Salvar dados no localStorage para que o modal possa acessar. TODO: melhorar e concluir na 4a etapa
            localStorage.setItem('modalData', JSON.stringify(dadosModal));
            
            // Abrir o modal com o contexto correto
            window.GenericModal.open({
                context: contexto,
                title: `${habilidade}`,
                tags: [dadosModal.valor, dadosModal.disponibilidade, dadosModal.modalidade]
            });
        });
    });
    
    // Configurar callbacks para ações do modal
    setupModalCallbacks();
}

function setupModalCallbacks() {
    // Configurar callbacks globais no GenericModal
    const originalOpen = window.GenericModal.open;
    
    window.GenericModal.open = function(options = {}) {
        // Aplicar callbacks antes de abrir
        const modalData = JSON.parse(localStorage.getItem('modalData') || '{}');
        
        // Configurar callback de confirmação baseado no contexto
        options.onPrimary = function(data) {
            console.log('Ação primária:', { context: options.context, data, modalData });
            
            switch(options.context) {
                case 'confirmacao':
                    // Confirmar conclusão de serviço em andamento (enviadas) - REDIRECIONAR
                    alert(`Serviço "${modalData.habilidade}" confirmado como concluído!`);
                    // Redirecionar para tela de avaliação após confirmar
                    setTimeout(() => {
                        window.location.href = '../components/modal/avaliacao/index.html';
                    }, 1500);
                    break;
                    
                case 'confirmacao-recebidos':
                    // TODO: na 4a etapa deve mudar status do pedido
                    alert(`Pedido "${modalData.habilidade}" aceito!`);
                    break;
                    
                case 'cancelamento':
                    console.log('Mantendo solicitação');
                    break;
                    
                case 'cancelamento-recebidos':
                    // Sinalizar conclusão do pedido em andamento (recebidos) - REDIRECIONAR
                    alert(`Serviço "${modalData.habilidade}" sinalizado como concluído! Aguardando confirmação do consumidor.`);
                    // Redirecionar para tela de avaliação após sinalizar conclusão
                    setTimeout(() => {
                        window.location.href = '../components/modal/avaliacao/index.html';
                    }, 2000);
                    break;
                    
                case 'visualizacao':
                    // Apenas fecha o modal
                    console.log('Modal de visualização fechado');
                    break;
            }
            
            return true;
        };
        
        // Configurar callback de ação secundária
        options.onSecondary = function(data) {
            console.log('Ação secundária:', { context: options.context, data, modalData });
            
            switch(options.context) { // TODO: melhorar e adicionar outros alertas na 4a etapa
                case 'confirmacao':
                case 'confirmacao-recebidos':
                    console.log('Ação cancelada pelo usuário');
                    break;
                    
                case 'cancelamento':
                    // Botão "Sim, Cancelar"
                    alert(`Solicitação "${modalData.habilidade}" cancelada!`);
                    break;
                    
                case 'cancelamento-recebidos':
                    // Botão "Cancelar"
                    alert(`Pedido "${modalData.habilidade}" recusado!`);
                    break;
            }
            
            return true;
        };
        
        return originalOpen.call(this, options);
    };
}