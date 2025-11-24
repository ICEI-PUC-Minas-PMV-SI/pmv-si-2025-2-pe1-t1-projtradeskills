# Programação de Funcionalidades

Nesta seção, são apresentados os **requisitos funcionais** e **não-funcionais** atendidos durante a implementação do sistema. Cada requisito é relacionado aos artefatos gerados, como código fonte ou páginas desenvolvidas, além das estruturas de dados utilizadas.  O sistema pode ser acessado e testado através do **Vercell**. 

> Netlify https://puc-tradeskills.netlify.app/

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| A aplicação deve possuir uma página inicial pública, que apresente detalhes sobre a plataforma Trade Skills. Esta página deve conter os botões “Cadastre-se” e “Login”. | João Pedro | src/index.html<br>src/assets/home/script.js<br>src/assets/home/style.js<br>src/assets/scripts/redirection.js<br>src/assets/scripts/registerUsers.js<br>src/assets/styles/css/default.css<br>src/assets/styles/css/global.css<br>src/assets/styles/style.css |
|RF-002| A aplicação deve permitir o login por e-mail e senha. | Maria Eduarda | src/login/index.html<br>src/assets/acesso/style.css<br>src/login/script.js| 
|RF-003| A aplicação deve permitir o cadastro com nome, e-mail e senha. | Maria Eduarda | src/cadastro/index.html<br>src/assets/acesso/style.css<br>src/cadastro/assets/scripts/main.js |
|RF-004| A aplicação deve redirecionar o usuário para o Dashboard após o login com sucesso e permitir a visualização do saldo atual de créditos e o resumo das atividades. No primeiro acesso, o Dashboard deve exibir um pop-up obrigatório (não fechável) solicitando que o usuário preencha seu perfil completo para a liberação dos créditos iniciais de boas-vindas. | Raissa | src/dashboard/index.html |
|RF-005| A aplicação deve permitir que o usuário cadastre, edite e exclua habilidades. A edição deve incluir título, descrição, valor sugerido em créditos, horário e forma de atendimento (remoto, presencial ou ambos). Ao tentar excluir uma habilidade, o sistema deve apresentar um alerta de confirmação. Se a habilidade em questão for a única cadastrada, o alerta deve ser específico, notificando o usuário de que essa ação impactará sua capacidade de obter novos créditos e, portanto, de prover serviços. | Ana Júlia e Raissa | src/perfil/index.html |
|RF-006| A aplicação deve permitir a edição dos dados pessoais como nome, senha, foto, cidade e contato. | Ana Júlia e Raissa | src/perfil/index.html |
|RF-007| A aplicação deve permitir a busca por habilidades com filtros (categoria, reputação, palavras-chave e favoritos) e a visualização resumida dos perfis dos provedores. | João Pedro | src/buscar/index.html<br>src/buscar/style.css<br>src/buscar/script.js |
|RF-008| Após o usuário clicar para visualizar o perfil completo de um provedor, a aplicação deve permitir a visualização completa incluindo todas as habilidades oferecidas, histórico de serviços prestados e avaliações dos consumidores. | João Pedro | src/profile/index.html<br>src/profile/style.css<br>src/profile/script.js |
|RF-009| A aplicação deve ter um botão “Meu histórico” no menu principal, para permitir a visualização do histórico de transações, onde o usuário poderá visualizar os valores de entrada e saída de créditos, incluindo data, horário, nome do serviço prestado e nome do provedor ou consumidor. | Camila | src/feature-historico/ historico.html |
|RF-010| A aplicação deve ter um botão "Minhas Solicitações" no menu principal, que exibe uma tela com duas abas: "Solicitações Enviadas" (visão do consumidor) e "Pedidos Recebidos" (visão do provedor). Ambas as abas devem listar as transações com detalhes como habilidade, nome do provedor ou consumidor, data, status atual e uma opção para "Gerenciar/Visualizar" a transação. | Camila | src/feature-solicitacoes/solicitacao.html |
|RF-011| Na tela do consumidor (Solicitações enviadas), com o status "Em andamento", ao clicar em "Visualizar" abrirá o pop up com a opção "Confirmar conclusão" ou "Desistir (com justificativa opcional)". | Mariana e Ana Júlia | src/components/modal/confirmacao/index.html, src/components/modal/confirmacao/model-component.js |
|RF-012| Na tela do provedor (Pedidos recebidos), com o status "Pendente", ao clicar em "Visualizar" abrirá o pop up com a opção "Aceitar ou Cancelar". | Camila e Ana Júlia | src/components/modal/confirmacao/index.html, src/components/modal/confirmacao/model-component.js |
|RF-013| Na tela do provedor (Pedidos recebidos), com o status "Em Andamento", ao clicar em "Visualizar" abrirá o pop up com a opção "Sinalizar conclusão" ou "Cancelar (com justificativa obrigatória)". | Ana Júlia | src/components/modal/confirmacao/model-component.js |
|RF-014|  Após o consumidor deve confirmar a conclusão do serviço, o sistema irá transferir automaticamente os créditos para o provedor. Após o pagamento, o sistema permitirá a avaliação mútua (consumidor avalia provedor, provedor avalia consumidor). | Mariana | src/avaliacao/ index.html |
|RF-015| Exibe alertas visuais internos sobre novas solicitações e atualizações de status. | Nome | caminho/para/arquivo |
|RF-016| A aplicação deve disponibilizar um formulário para o Suporte, onde o usuário deverá selecionar o “Tipo de Requisição”: Sugestão de Melhoria, Reportar Problema no Sistema, Fazer Denúncia e Outros. | Maria Eduarda | src/reportar/index.html<br>src/reportar/script.js<br>src/reportar/css/style.css<br>src/reports/index.html<br>src/reports/script.js<br>src/reports/style.css |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  | Responsável         | Artefato Gerado
|-------|-------------------------|----|----|
|RNF-001| A aplicação deve usar HTML, CSS e JavaScript puro, podendo usar bibliotecas leves e opcionais. | Nome | caminho/para/arquivo |
|RNF-002| A aplicação deve ser compatível com os principais navegadores do mercado: Google Chrome, Firefox, Edge e Safari. | Nome | caminho/para/arquivo |
|RNF-003| No primeiro momento, para apresentação, a aplicação deve armazenar os dados localmente no navegador. | Nome | caminho/para/arquivo |
|RNF-004| A aplicação deve estar em conformidade com as leis de proteção de dados, garantindo ao usuário o direito de exclusão e controle sobre suas informações. | Nome | caminho/para/arquivo |
|RNF-005| A aplicação deve ser de fácil manutenção com código bem-organizado e documentado, facilitando futuras atualizações e correções de bugs. | Nome | caminho/para/arquivo |
|RNF-006| A interface deve ser responsiva, adaptando-se a diferentes tamanhos de tela (celular, tablet e desktop). | Nome | caminho/para/arquivo |
|RNF-007| A aplicação deve ser leve e carregar rapidamente, com tempo de carregamento inicial inferior a 5 segundos em navegadores modernos. | Nome | caminho/para/arquivo |
|RNF-008| A aplicação deve seguir boas práticas de acessibilidade, incluindo contraste adequado, navegação por teclado e rótulos em elementos interativos. | Nome | caminho/para/arquivo |
|RNF-009| A aplicação deve conter um README.md explicando o objetivo do projeto, tecnologias usadas, instruções para execução e limitações conhecidas. | Nome | caminho/para/arquivo | 


## Descrição das estruturas:

## Usuários
| **Nome**      | **Tipo**             | **Descrição**                                      | **Exemplo**                                        |
|------------------------|----------------------|----------------------------------------------------|----------------------------------------------------|
| id                     | Número (int)         | Identificador único do usuário                     | 94283                                              |
| name                   | Texto (string)       | Nome do usuário                                    | "Alice"                                            |
| email                  | Texto (string)       | Endereço de e-mail                                 | "fake@email.com"                                   |
| password               | Texto (string)       | Hash da senha do usuário                           | "b26729a...."                                      |
| phoneNumber            | Texto (string)       | Número de telefone                                 | "1234567890"                                       |
| city                   | Texto (string)       | Cidade de residência do usuário                    | "São Paulo"                                        |
| state                  | Texto (string)       | Estado de residência                               | "SP"                                               |
| image                  | Texto (base64)       | Imagem de perfil codificada em base64              | "iVBORw0KGgoAAAANSUhEUgAA"                         |
| credits                | Número (int)         | Saldo de créditos do usuário                       | 54                                                 |
| skills                 | Array de objetos     | Lista de habilidades oferecidas pelo usuário       | [{ name: "...", price: 5, description: "..." }]    |
| rating                 | Objeto               | Avaliação geral do usuário                         | { score: 4.8, reviews: 120 }                       |
| rating.score           | Número (float)       | Nota média de avaliação                            | 4.8                                                |
| rating.reviews         | Número (int)         | Quantidade de avaliações                           | 120                                                |
| skills[].name          | Texto (string)       | Nome da habilidade                                 | "Desenvolvimento Web"                              |
| skills[].price         | Número (int/float)   | Preço cobrado pela habilidade                      | 5                                                  |
| skills[].description   | Texto (string)       | Descrição detalhada da habilidade                  | "Criação e manutenção de websites..."              |

## Serviços

| **Nome do Campo**     | **Tipo**              | **Descrição**                                              | **Exemplo**                         |
|-------------------|-------------------|--------------------------------------------------------|--------------------------------|
| id                | string/number     | Identificador único do serviço                         | "skill-1234"                   |
|providerId         | string/number     | ID do usuário que oferece o serviço                    | "user-paula"                   |
|consumerId         | string/number     | ID do usuário consumidor do serviço                    | "user-maria"                   |
| name              | string            | Nome da habilidade/serviço                             | "Aula de Violão"               |
| credits           | number            | Preço em créditos cobrado pelo serviço                 | "40"                           | 
| date              | number            | Data da criação da solicitação                         | "18-10-2025"                   |
| availability      | string            | Opções de horários, disponibilidade                    | "Sábado                        |
| modality          | string            | Modalidade oferecida (presencial, online)              | "Presencial"                   |
| status            | string            | Situação atual do pedido                               | "Em andamento"                 |
