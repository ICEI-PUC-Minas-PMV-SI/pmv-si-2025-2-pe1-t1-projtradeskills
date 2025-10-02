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
|Usuário da plataforma (consumidor e provedor).| Ter um sistema de chat para conversar com outros usuários.| Tirar dúvidas sobre o(s) serviço(s) antes de efetivamente "solicitar".|





## Requisitos

Para o desenvolvimento do sistema, foi elaborada uma especificação de requisitos que detalha as funcionalidades e as características essenciais para seu funcionamento.

Esta documentação divide os requisitos em duas categorias principais: requisitos funcionais, que definem o que o sistema deve fazer (como cadastro de perfil, gestão de habilidades e busca). Já os requisitos não funcionais estabelecem como o sistema deve ser (considerando aspectos de desempenho, usabilidade, segurança, compatibilidade e manutenção). A seguir, são apresentados os requisitos levantados para o projeto


### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| A aplicação deve permitir o login por e-mail e senha. | ALTA | 
|RF-002| A aplicação deve permitir o cadastro com nome, e-mail e senha. | ALTA | 
|RF-003| A aplicação deve permitir a recuperação de senha, mediante confirmação de e-mail e resposta de segurança. | MÉDIA | 
|RF-004| A aplicação deve liberar os créditos iniciais de “boas-vindas” mediante a conclusão do preenchimento dos dados do perfil e configuração da pergunta de segurança. | ALTA | 
|RF-005| A aplicação deve permitir a edição dos dados pessoais como nome, senha, foto, cidade e contato. | ALTA | 
|RF-006| A aplicação deve permitir a edição das habilidades, incluindo título, descrição, valor sugerido em créditos, horário e forma de atendimento (remoto, presencial ou ambos). | ALTA | 
|RF-007| A aplicação deve permitir que o usuário exclua as habilidades cadastradas. | ALTA | 
|RF-008| A aplicação a criação de, no mínimo 1 e no máximo 2 perguntas e respostas de segurança, para garantir a possibilidade de recuperar a senha, em caso de esquecimento. | MÉDIA | 
|RF-009| A aplicação deve permitir a visualização do saldo atual de créditos no cabeçalho do site. | ALTA | 
|RF-010| A aplicação deve permitir a busca por habilidades desejadas, usando filtros como categoria, reputação do provedor e palavras-chave, para que ele encontre rapidamente o que precisa. | ALTA | 
|RF-011| A aplicação deve permitir a visualização de perfis dos outros usuários da plataforma, incluindo suas habilidades, histórico de serviços prestados, com o valor de créditos sugerido e avaliações dos consumidores. | ALTA | 
|RF-012| A aplicação deve permitir clicar no botão "solicitar serviço" para iniciar a negociação com o provedor. | ALTA | 
|RF-013| A aplicação deve ter um botão de “Meu histórico” para permitir a visualização do histórico de transações, que contêm os valores de entrada e saída de créditos, incluindo data, horário, nome do serviço prestado e nome do provedor ou consumidor. | ALTA | 
|RF-014| A aplicação deve permitir a visualização do resumo das atividades do usuário como provedor (pedidos recebidos) e como consumidor (solicitações enviadas), para que ele possa acompanhar facilmente suas interações na plataforma. | ALTA | 
|RF-015| Ao acessar a seção “solicitações enviadas”, a aplicação deve permitir a visualização e o gerenciamento das solicitações enviadas, incluindo nome da habilidade, nome do provedor e status atual. | ALTA | 
|RF-016| Ao acessar a seção “pedidos recebidos”, a aplicação deve p permitir a visualização e o gerenciamento dos pedidos recebidos, incluindo nome da habilidade, nome do solicitante e status atual. | ALTA | 
|RF-017| A aplicação deve permitir que o usuário provedor aceite ou rejeite solicitações de serviços recebidas, atualizando o status do painel de controle. | ALTA | 
|RF-018| Após o provedor aceitar a solicitação de serviço, o sistema deve permitir que o consumidor consiga cancelar sua solicitação de serviço, com a opção de adicionar uma justificativa. | ALTA | 
|RF-019| O usuário consumidor deve confirmar a conclusão do serviço, para autorizar a transferência automática de créditos. | ALTA | 
|RF-020| Após a confirmação da conclusão do serviço, por parte do consumidor, o sistema deve transferir automaticamente os créditos da conta do usuário consumidor para a do usuário provedor e atualizar o histórico de transações de ambas as contas. | ALTA | 
|RF-021| Permitir que o consumidor consiga avaliar o serviço prestado pelo provedor. | ALTA | 
|RF-022| Permitir que o provedor consiga avaliar a conduta do consumidor, durante a execução do serviço. | ALTA | 
|RF-023| A aplicação deve impedir que o mesmo usuário registre uma troca consigo mesmo. | ALTA | 
|RF-024| A aplicação deve alertar o usuário de que a exclusão de suas habilidades cadastradas impactará na sua capacidade de obter novos créditos para transações futuras, uma vez que ele não está mais oferecendo serviços (habilidade). | MÉDIA | 
|RF-025| Ao clicar em “Esqueci minha senha” a aplicação deve enviar um link seguro para o e-mail do usuário para que ele possa redefinir sua senha.  | MÉDIA | 
|RF-026| A aplicação deve exibir notificações visuais internas (como ícones ou alertas) sobre novas solicitações, atualizações de status dos pedidos. | MÉDIA | 
|RF-027| A aplicação deve oferecer uma seção para que o usuário possa reportar bugs, comportamentos irregulares ou abusivos e sugerir melhorias. | MÉDIA | 
|RF-028| A aplicação deve permitir que o usuário compre pacotes de créditos com dinheiro real, usando métodos de pagamento como cartão de crédito/débito e pix. | BAIXA | 
|RF-029| A aplicação deve permitir que o usuário denuncie avaliações falsas ou inadequadas. | BAIXA | 
|RF-030| A aplicação deve conter um sistema chat para que os usuários possam conversar com outros usuários. | BAIXA | 
|RF-031| A aplicação deve permitir exportar/importar dados em um arquivo (Json). | BAIXA | 
|RF-032| A aplicação deve permitir que o usuário adicione ou remova habilidades da sua lista de favoritos. | BAIXA | 
|RF-033| Ao solicitar um serviço, a aplicação deverá sugerir um “preço” em créditos para o consumidor, baseado em outras negociações realizadas na plataforma. | BAIXA | 


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
