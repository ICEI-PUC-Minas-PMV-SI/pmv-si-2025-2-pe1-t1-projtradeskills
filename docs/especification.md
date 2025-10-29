# Especificações do Projeto

A Especificação do Projeto trata da definição do problema e da solução a partir da perspectiva do usuário. Serão apresentados o perfil de usuários, o diagrama de personas, as histórias de usuários, os requisitos funcionais e não funcionais, além das restrições do projeto.

## Perfis de Usuários

Os perfis de usuários na plataforma Trade Skills são definidos por sua <b>ação</b>: todos são membros da comunidade, mas atuam como <strong>Consumidores</strong> ou <strong>Provedores</strong> a depender do momento da transação. A seguir, apresentamos o perfil central que exemplifica essa dinâmica:

| **Dados**                    | **Descrição**                                                                                                          |
|------------------------------|------------------------------------------------------------------------------------------------------------------------|
| **Demográficos**             | Jovens, adultos e idosos, sendo maiores de idade e possuindo o letramento digital básico.     |
| **Uso do Produto**           | Cadastram e encontram habilidades, negociam e avaliam os serviços, a fim de fomentar a economia colaborativa e democratizar o acesso a serviços.|
| **Psicográficos**            | Buscam reconhecimento, valorização das suas habilidades e oportunidades de aprendizado colaborativo. |
| **Sentimento do Cliente**    | Precisam de uma alternativa ao pagamento financeiro tradicional para acessar serviços e conhecimento, além disso, querem ter visibilidade e ser avaliados positivamente. |
| **Tecnográficos**            | Usam dispositivos (celular, tablet, desktop) compatíveis com os principais navegadores.               |
| **Nível de conhecimento tecnológico** | Precisam de letramento digital básico, necessário para a navegação e interação eficaz com a plataforma.                                      |
| **Necessidades**             | 1. Ter uma ferramenta intuitiva para cadastrar e encontrar habilidades. <br>2. Ampliar sua reputação e oportunidades de aprendizado. <br>3. Ter visibilidade para alcançar mais pessoas interessadas em suas habilidades. <br>4. Contar com um sistema de avaliação que valorize sua experiência e gere confiança.|


## Persona

João Silva tem 25 anos e é estudante universitário de Sistemas de Informação. Sem emprego formal, sua renda é proveniente de serviços esporádicos de manutenção de computadores que ele realiza para membros de sua igreja. Ele sonha com um estágio no Canadá, mas para isso precisa dominar o inglês, um custo que não consegue arcar. João está buscando uma plataforma onde ele possa oferecer sua habilidade em manutenção em troca de aulas de inglês.

Sofia Andrade tem 42 anos e atua como Designer Gráfica Freelancer, além de ser mãe. Ela acabou de se mudar para um apartamento novo e comprou diversos móveis que precisam ser montados. Com a rotina agitada entre trabalho e filhos, ela não tem tempo para a montagem e, ao mesmo tempo, considera o preço de mercado pelo serviço muito alto, preferindo economizar esse dinheiro para outras despesas. Sofia está buscando uma plataforma onde ela possa oferecer sua habilidade em design gráfico, como a criação de logotipos, em troca do serviço de montagem de móveis.


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `QUEM`| QUERO/DESEJO ... `O QUE` |PARA ... `PORQUE`                 |
|-----------------|--------------------------|----------------------------------|
| Prossumidor | Acessar o site da plataforma Trade Skills. | Conhecer o funcionamento da plataforma antes de logar/cadastrar. |
| Prossumidor | Me cadastrar na plataforma informando nome, e-mail e senha. | Ter acesso à comunidade e começar a interagir. |
| Prossumidor | Fazer login com meu e-mail e senha. | Acessar minha conta de forma rápida e segura. |
| Prossumidor | Ser obrigado a completar meu perfil para liberar os créditos de boas-vindas. | Poder começar a prover serviços e acumular créditos. |
| Prossumidor | Ser redirecionado para o Dashboard e visualizar meu saldo atual de créditos e o resumo das atividades. | Ter controle sobre minha "moeda virtual" e acompanhar o status geral da minha conta. |
| Prossumidor | Cadastrar e editar minhas habilidades, definindo valor em créditos, horário e local de atendimento. | Que outros usuários possam me conhecer melhor e sentir confiança para negociar. |
| Prossumidor | Excluir uma habilidade cadastrada, recebendo um alerta de confirmação. | Manter minha lista de habilidades sempre atualizada com serviços que posso oferecer. |
| Prossumidor | Que o sistema me alerte especificamente sobre o impacto de excluir minha única habilidade. | Entender que essa ação impactará minha capacidade de ganhar novos créditos. |
| Prossumidor | Editar meus dados pessoais, como nome, e-mail, senha e foto de perfil, sempre que desejar. | Manter minhas informações de conta sempre atualizadas. |
| Prossumidor | Buscar por habilidades ou serviços usando palavras-chave e filtros (categoria, reputação, favoritos). | Encontrar rapidamente os serviços que preciso. |
| Prossumidor | Visualizar o perfil completo de um provedor, incluindo histórico de serviços e avaliações dos consumidores. | Tomar uma decisão informada e segura antes de contratar um serviço. |
| Prossumidor | Visualizar meu histórico de transações no menu principal, incluindo detalhes de entrada e saída de créditos. | Acompanhar todo o histórico financeiro e de serviços prestados/contratados. |
| Prossumidor | Acessar a tela de "Minhas Solicitações" para ver as solicitações que enviei e os pedidos que recebi, com o status atual de cada um. | Gerenciar ativamente minhas negociações como consumidor e provedor. |
| Prossumidor | Enviar uma solicitação de serviço a um provedor. | Iniciar uma negociação e verificar a disponibilidade dele. |
| Prossumidor | Aceitar ou Cancelar um pedido de serviço que está com o status "Pendente". | Gerenciar minha carga de trabalho e compromissos. |
| Prossumidor | Cancelar minha solicitação com justificativa obrigatória quando o serviço estiver "Em Andamento". | Garantir um registro formal do motivo do cancelamento de um trabalho já iniciado (RF-011). |
| Prossumidor | Sinalizar a conclusão ou Cancelar com justificativa obrigatória um serviço que está "Em Andamento". | Indicar o fim do trabalho ou registrar o motivo oficial de um cancelamento (RF-013). |
| Prossumidor | Confirmar a conclusão do serviço e autorizar a transferência automática dos créditos. | Liberar o pagamento ao prestador e finalizar a transação. |
| Prossumidor | Avaliar o outro usuário após a conclusão do serviço. | Ajudar a construir um sistema de reputação mútua obrigatório que traga segurança e confiança (RF-014). |
| Prossumidor| Receber alertas visuais internos sobre novas solicitações e atualizações de status. | Acompanhar o status das minhas negociações e responder rapidamente (RF-015).|
| Prossumidor | Ter uma seção de Suporte com opções claras para reportar problemas, dar sugestões ou fazer denúncias. | Que eu possa contribuir para a segurança e melhoria contínua da plataforma. |


## Requisitos

Para o desenvolvimento do sistema, foi elaborada uma especificação de requisitos que detalha as funcionalidades e as características essenciais para seu funcionamento.

Esta documentação divide os requisitos em duas categorias principais: requisitos funcionais, que definem o que o sistema deve fazer (como cadastro de perfil, gestão de habilidades e busca). Já os requisitos não funcionais estabelecem como o sistema deve ser (considerando aspectos de desempenho, usabilidade, segurança, compatibilidade e manutenção). A seguir, são apresentados os requisitos levantados para o projeto


### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| A aplicação deve possuir uma página inicial pública, que apresente detalhes sobre a plataforma Trade Skills. Esta página deve conter os botões “Cadastre-se” e “Login”. | ALTA |
|RF-002| A aplicação deve permitir o login por e-mail e senha. | ALTA |
|RF-003| A aplicação deve permitir o cadastro com nome, e-mail e senha. | ALTA |
|RF-004| A aplicação deve redirecionar o usuário para o Dashboard após o login com sucesso e permitir a visualização do saldo atual de créditos e o resumo das atividades. No primeiro acesso, o Dashboard deve exibir um pop-up obrigatório (não fechável) solicitando que o usuário preencha seu perfil completo para a liberação dos créditos iniciais de boas-vindas. | ALTA |
|RF-005| A aplicação deve permitir que o usuário cadastre, edite e exclua habilidades. A edição deve incluir título, descrição, valor sugerido em créditos, horário e forma de atendimento (remoto, presencial ou ambos). Ao tentar excluir uma habilidade, o sistema deve apresentar um alerta de confirmação. Se a habilidade em questão for a única cadastrada, o alerta deve ser específico, notificando o usuário de que essa ação impactará sua capacidade de obter novos créditos e, portanto, de prover serviços. | ALTA |
|RF-006| A aplicação deve permitir a edição dos dados pessoais como nome, senha, foto, cidade e contato. | ALTA |
|RF-007| A aplicação deve permitir a busca por habilidades com filtros (categoria, reputação, palavras-chave e favoritos) e a visualização resumida dos perfis dos provedores. | ALTA |
|RF-008| Após o usuário clicar para visualizar o perfil completo de um provedor, a aplicação deve permitir a visualização completa incluindo todas as habilidades oferecidas, histórico de serviços prestados e avaliações dos consumidores. | ALTA |
|RF-009| A aplicação deve ter um botão “Meu histórico” no menu principal, para permitir a visualização do histórico de transações, onde o usuário poderá visualizar os valores de entrada e saída de créditos, incluindo data, horário, nome do serviço prestado e nome do provedor ou consumidor. | ALTA |
|RF-010| A aplicação deve ter um botão "Minhas Solicitações" no menu principal, que exibe uma tela com duas abas: "Solicitações Enviadas" (visão do consumidor) e "Pedidos Recebidos" (visão do provedor). Ambas as abas devem listar as transações com detalhes como habilidade, nome do provedor ou consumidor, data, status atual e uma opção para "Gerenciar/Visualizar" a transação. | ALTA |
|RF-011| Na tela do consumidor (Solicitações enviadas), com o status "Em andamento", ao clicar em "Visualizar" abrirá o pop up com a opção "Confirmar conclusão" ou "Cancelar (com justificativa obrigatória)". | ALTA |
|RF-012| Na tela do provedor (Pedidos recebidos), com o status "Pendente", ao clicar em "Visualizar" abrirá o pop up com a opção "Aceitar ou Cancelar". | ALTA |
|RF-013| Na tela do provedor (Pedidos recebidos), com o status "Em Andamento", ao clicar em "Visualizar" abrirá o pop up com a opção "Sinalizar conclusão" ou "Cancelar (com justificativa obrigatória)". | ALTA |
|RF-014| Após o consumidor deve confirmar a conclusão do serviço, o sistema irá transferir automaticamente os créditos para o provedor. Após o pagamento, o sistema permitirá a avaliação mútua (consumidor avalia provedor, provedor avalia consumidor). | ALTA |
|RF-015| Exibe alertas visuais internos sobre novas solicitações e atualizações de status. | ALTA |
|RF-016| A aplicação deve disponibilizar um formulário para o Suporte, onde o usuário deverá selecionar o “Tipo de Requisição”: Sugestão de Melhoria, Reportar Problema no Sistema, Fazer Denúncia e Outros. | MÉDIA |


### Requisitos não Funcionais

| ID      | Descrição do Requisito  |Prioridade |
|---------|-----------------------------------------------------------------------------------------------------------------|----|
| RNF-001 | A aplicação deve estar em conformidade com as leis de proteção de dados, garantindo ao usuário o direito de exclusão e controle sobre suas informações. | ALTA | 
| RNF-002 | A aplicação deve ser de fácil manutenção com código bem-organizado e documentado, facilitando futuras atualizações e correções de bugs. | MÉDIA | 
| RNF-003 | A interface deve ser funcional e legível, sem barras de rolagem horizontais, em resoluções de 360px (mobile), 768px (tablet) e 1366px (desktop). | MÉDIA |
| RNF-004 | A aplicação deve ser leve e carregar rapidamente, com tempo de carregamento inicial inferior a 5 segundos em navegadores modernos. | MÉDIA | 
| RNF-005 | A aplicação deve seguir boas práticas de acessibilidade, incluindo contraste adequado e rótulos em elementos interativos. | MÉDIA|
| RNF-006 | Garantir comportamento uniforme e consistente dos modais em toda a aplicação.              | BAIXA |
| RNF-007 | O tempo de resposta para interações que leem o localStorage (como a busca de habilidades ou a exibição do histórico ) deve ser rápida. | BAIXA |
| RNF-008 | Todas as entradas de dados do usuário (ex: cadastro de habilidade , avaliações ) devem ser sanitizadas (escaped) antes de serem renderizadas no HTML para prevenir ataques de Cross-Site Scripting (XSS). | BAIXA |
| RNF-009 | As operações de escrita no localStorage (como salvar um perfil ou confirmar uma transação ) devem ser tratadas com try...catch para evitar falhas que corrompam os dados. | BAIXA |
| RNF-010 | A aplicação deve verificar a disponibilidade do localStorage ao iniciar. Se estiver desabilitado ou cheio (quota excedida), deve exibir uma mensagem de erro amigável ao usuário. | BAIXA |

### Requisitos não Funcionais

| ID | Descrição do Requisito |Prioridade |

|---------|-----------------------------------------------------------------------------------------------------------------|----|

| RNF-001 | A aplicação deve estar em conformidade com as leis de proteção de dados, garantindo ao usuário o direito de exclusão e controle sobre suas informações. | ALTA |
| RNF-002 | A aplicação deve ser de fácil manutenção com código bem-organizado e documentado, facilitando futuras atualizações e correções de bugs. | MÉDIA |
| RNF-003 | A interface deve ser funcional e legível, sem barras de rolagem horizontais, em resoluções de 360px (mobile), 768px (tablet) e 1366px (desktop). | MÉDIA |
| RNF-004 | A aplicação deve ser leve e carregar rapidamente, com tempo de carregamento inicial inferior a 5 segundos em navegadores modernos. | MÉDIA |
| RNF-005 | A aplicação deve seguir boas práticas de acessibilidade, incluindo contraste adequado e rótulos em elementos interativos. | MÉDIA|
| RNF-006 | Garantir comportamento uniforme e consistente dos modais em toda a aplicação. | BAIXA |
| RNF-007 | O tempo de resposta para interações que leem o localStorage (como a busca de habilidades ou a exibição do histórico ) deve ser rápida. | BAIXA |
| RNF-008 | Todas as entradas de dados do usuário (ex: cadastro de habilidade , avaliações ) devem ser sanitizadas (escaped) antes de serem renderizadas no HTML para prevenir ataques de Cross-Site Scripting (XSS). | BAIXA |
| RNF-009 | As operações de escrita no localStorage (como salvar um perfil ou confirmar uma transação ) devem ser tratadas com try...catch para evitar falhas que corrompam os dados. | BAIXA |
| RNF-010 | A aplicação deve verificar a disponibilidade do localStorage ao iniciar. Se estiver desabilitado ou cheio (quota excedida), deve exibir uma mensagem de erro amigável ao usuário. | BAIXA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |

|--|-------------------------------------------------------|

|01| O projeto deverá ser entregue até o final do semestre. |
|02| Não pode ser desenvolvido um módulo de backend.        |
|03| A aplicação deve armazenar os dados localmente no navegador. |
|04| A aplicação deve usar HTML, CSS e JavaScript puro, podendo usar bibliotecas leves e opcionais. |
|05| A aplicação deve ser compatível com os principais navegadores do mercado: Google Chrome, Firefox, Edge e Safari. |

## Entregáveis de Documentação

A aplicação deve conter um README.md explicando o objetivo do projeto, tecnologias usadas, instruções para execução e limitações conhecidas.
