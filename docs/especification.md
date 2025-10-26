# Especificações do Projeto

A Especificação do Projeto trata da definição do problema e da solução a partir da perspectiva do usuário. Serão apresentados o perfil de usuários, o diagrama de personas, as histórias de usuários, os requisitos funcionais e não funcionais, além das restrições do projeto.

## Perfis de Usuários

Os perfis de usuários na plataforma Trade Skills são definidos por sua <b>ação</b>: todos são membros da comunidade, mas atuam como <strong>Consumidores</strong> ou <strong>Provedores</strong> a depender do momento da transação. A seguir, apresentamos o perfil central que exemplifica essa dinâmica:

| **Dados**                    | **Descrição**                                                                                                          |
|------------------------------|------------------------------------------------------------------------------------------------------------------------|
| **Demográficos**             | Jovens, adultos e idosos, sendo maiores de idade e possuindo o letramento digital básico.     |
| **Uso do Produto**           | Cadastram e encontram habilidades, negociam e avaliam os serviços, a fim de fomentar a economia colaborativa e democratizar o acesso a serviços.|
| **Psicográficos**            | Buscam reconhecimento, valorização das suas habilidades e oportunidades de aprendizado colaborativo. |
| **Sentimento do Cliente**    | Precisam de uma alternativa ao pagamento financeiro tradicional para acessar serviços e conhecimento, além disso, querem ter visibilidade e ser avaliados positivamente.                                |
| **Tecnográficos**            | Usam dispositivos (celular, tablet, desktop) compatíveis com os principais navegadores.               |
| **Nível de conhecimento tecnológico** | Precisam de letramento digital básico, necessário para a navegação e interação eficaz com a plataforma.                                      |
| **Necessidades**             | 1. Ter uma ferramenta intuitiva para cadastrar e encontrar habilidades. <br>2. Ampliar sua reputação e oportunidades de aprendizado. <br>3. Ter visibilidade para alcançar mais pessoas interessadas em suas habilidades. <br>4. Contar com um sistema de avaliação que valorize sua experiência e gere confiança.|


## Persona

João Silva tem 25 anos e é estudante universitário de Sistemas de Informação. Sem emprego formal, sua renda é proveniente de serviços esporádicos de manutenção de computadores que ele realiza para membros de sua igreja. Ele sonha com um estágio no Canadá, mas para isso precisa dominar o inglês, um custo que não consegue arcar. João está buscando uma plataforma onde ele possa oferecer sua habilidade em manutenção em troca de aulas de inglês.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `QUEM`| QUERO/DESEJO ... `O QUE` |PARA ... `PORQUE`                 |
|-----------------|--------------------------|----------------------------------|
|Usuário da plataforma (consumidor e provedor). | Me cadastrar e criar o perfil na plataforma, de forma simples, informando nome, email e senha| Ter acesso a comunidade e oferecer ou contratar serviços.|
|Usuário da plataforma (consumidor e provedor). | Editar meu perfil com foto, dados de contato, local de atendimento e descrição detalhada dos meus serviços (habilidades) oferecidos, incluindo nome, categoria e o valor sugerido em cráditos. | Que outros usuários possam me conhecer melhor e sentir confiança para negociar.|
|Usuário da plataforma (consumidor e provedor).| Redefinir minha senha, em caso de esquecimento. | Que eu possa recuperar o acesso de minha conta.|
|Usuário da plataforma (consumidor e provedor).| Remover serviços (habilidades) que cadastrei anteriormente no meu perfil.| Manter minha lista de habilidades sempre atualizada com serviços que posso oferecer.|
Usuário da plataforma (consumidor e provedor).| Que o sistema me alerte sobre a exclusão de uma habilidade.| Que eu entenda que essa ação impactará a minha capacidade de ganhar novos créditos para transações futuras.|
| Visualizar meu saldo atual de créditos.| Ter controle sobre minha "moeda virtual" e saber quanto posso gastar no momento.|
|Usuário da plataforma (consumidor e provedor).|Visualizar meu histórico de transações.|Acompanhar o histórico de entrada e saída de créditos.|
|Usuário da plataforma (consumidor e provedor).| Buscar por habilidades ou serviços usando palavras-chave e filtros (como categoria ou reputação).|Encontrar rapidamente os serviços que preciso.|
|Usuário da plataforma (consumidor e provedor).| Visualizar perfis dos outros usuários da plataforma, incluindo suas habilidades, histórico de serviços prestados, com o valor de créditos cobrado e avaliações dos consumidores.|Tomar uma decisão informada e segura antes de consumir ou divulgar um serviço (habilidade).|
|Usuário da plataforma (consumidor e provedor).| Enviar uma solicitação de serviço a um provedor.| Iniciar uma negociação e verificar a disponibilidade dele para realizar o trabalho.|
|Usuário da plataforma (consumidor e provedor).|Aceitar ou rejeitar um pedido de serviço.|Gerenciar minha carga de trabalho.|
|Usuário da plataforma (consumidor e provedor).| Confirmar que o serviço foi concluído com sucesso.| Liberar o pagamento dos créditos ao prestador e finalizar a transação. |
|Usuário da plataforma (consumidor e provedor).|Adicionar uma avaliação com nota e um comentário sobre o serviço prestado/contratado.| Ajudar a construir um sistema de reputação que traga mais segurança para todos.|
|Usuário da plataforma (consumidor e provedor).|Receber notificações sobre negociações, avaliações e mensagens.| Acompanhar o status das minhas negociações e responder rapidamente os outros usuários.|
|Usuário da plataforma (consumidor e provedor).| Ter uma seção na plataforma para reportar bugs, comportamentos irregulares ou abusivos, para que possa sugerir melhorias.| Que eu possa contribuir para a segurança e melhoria contínua da plataforma.|
|Usuário da plataforma (consumidor e provedor).|Deletar minha conta e todos os meus dados da plataforma a qualquer momento.| Que eu possa ter controle sobre minhas informações pessoais.|





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
|RF-006| A aplicação deve permitir a busca por habilidades com filtros (categoria, reputação, palavras-chave e favoritos) e a visualização resumida dos perfis dos provedores. | ALTA |
|RF-007| Após o usuário clicar para visualizar o perfil completo de um provedor, a aplicação deve permitir a visualização completa incluindo todas as habilidades oferecidas, histórico de serviços prestados e avaliações dos consumidores. | ALTA |
|RF-008| A aplicação deve ter um botão “Meu histórico” no menu principal, para permitir a visualização do histórico de transações, onde o usuário poderá visualizar os valores de entrada e saída de créditos, incluindo data, horário, nome do serviço prestado e nome do provedor ou consumidor. | ALTA |
|RF-009| A aplicação deve ter um botão "Minhas Solicitações" no menu principal, que exibe uma tela com duas abas: "Solicitações Enviadas" (visão do consumidor) e "Pedidos Recebidos" (visão do provedor). Ambas as abas devem listar as transações com detalhes como habilidade, nome do provedor ou consumidor, data, status atual e uma opção para "Gerenciar/Visualizar" a transação. | ALTA |
|RF-010| Na tela do consumidor (Solicitações enviadas), com o status "Em andamento", ao clicar em "Visualizar" abrirá o pop up com a opção "Confirmar conclusão" ou "Desistir(com justificativa opcional)". | ALTA |
|RF-011| Na tela do provedor (Pedidos recebidos), com o status "Pendente", ao clicar em "Visualizar" abrirá o pop up com a opção "Aceitar ou Cancelar". | ALTA |
|RF-012| Na tela do provedor (Pedidos recebidos), com o status "Em Andamento", ao clicar em "Visualizar" abrirá o pop up com a opção "Sinalizar conclusão". | ALTA |
|RF-013| Após o provedor aceitar, o sistema deve permitir que o consumidor consiga cancelar sua solicitação (com justificativa opcional). | ALTA |
|RF-014| O consumidor deve confirmar a conclusão, o que transfere automaticamente os créditos. Após o pagamento, o sistema deve obrigar a avaliação mútua (consumidor avalia provedor, provedor avalia consumidor). | ALTA |
|RF-015| Exibe alertas visuais internos sobre novas solicitações e atualizações de status. | ALTA |
|RF-016| Permitir que o provedor consiga avaliar a conduta do consumidor após a confirmação de conclusão do serviço. | ALTA |
|RF-017| A aplicação deve disponibilizar um formulário para o Suporte, onde o usuário deverá selecionar o “Tipo de Requisição”: Sugestão de Melhoria, Reportar Problema no Sistema, Fazer Denúncia e Outros. | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve usar HTML, CSS e JavaScript puro, podendo usar bibliotecas leves e opcionais. | ALTA | 
|RNF-002| A aplicação deve ser compatível com os principais navegadores do mercado: Google Chrome, Firefox, Edge e Safari. | ALTA | 
|RNF-003| No primeiro momento, para apresentação, a aplicação deve armazenar os dados localmente no navegador. | ALTA | 
|RNF-004| A aplicação deve estar em conformidade com as leis de proteção de dados, garantindo ao usuário o direito de exclusão e controle sobre suas informações. | ALTA | 
|RNF-005| A aplicação deve ser de fácil manutenção com código bem-organizado e documentado, facilitando futuras atualizações e correções de bugs. | MÉDIA | 
|RNF-006| A interface deve ser responsiva, adaptando-se a diferentes tamanhos de tela (celular, tablet e desktop). | MÉDIA | 
|RNF-007| A aplicação deve ser leve e carregar rapidamente, com tempo de carregamento inicial inferior a 5 segundos em navegadores modernos. | MÉDIA | 
|RNF-008| A aplicação deve seguir boas práticas de acessibilidade, incluindo contraste adequado, navegação por teclado e rótulos em elementos interativos. | MÉDIA|
|RNF-009| A aplicação deve conter um README.md explicando o objetivo do projeto, tecnologias usadas, instruções para execução e limitações conhecidas. | MÉDIA| 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
