# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto.

Caso deseje atribuir uma imagem a sua persona, utilize o site https://thispersondoesnotexist.com/

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

Para o desenvolvimento do sistema, foi elaborada uma especificação de requisitos que detalha as funcionalidades e as características essenciais para seu funcionamento.

Esta documentação divide os requisitos em duas categorias principais: requisitos funcionais, que definem o que o sistema deve fazer (como cadastro de perfil, gestão de habilidades e busca). Já os requisitos não funcionais estabelecem como o sistema deve ser (considerando aspectos de desempenho, usabilidade, segurança, compatibilidade e manutenção). A seguir, são apresentados os requisitos levantados para o projeto


### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| A aplicação deve permitir um cadastro simplificado com: nome, e-mail e senha. |  ALTA | 
|RF-002| A aplicação deve permitir que o usuário edite os dados do seu perfil, incluindo: nome, senha, foto, cidade, contato, e uma descrição detalhada das habilidades. Esta descrição deve contemplar o título do serviço, uma breve descrição, o valor sugerido em créditos, o horário e a forma de atendimento (remoto, presencial ou ambos).|  ALTA | 
|RF-003| A aplicação deve solicitar a criação de uma pergunta de segurança e o cadastro da sua resposta, para garantir a possibilidade de recuperar a senha em caso de esquecimento. | ALTA | 
|RF-004| A aplicação deve liberar os créditos iniciais de “boas-vindas” para o usuário somente após a conclusão do preenchimento dos dados do perfil e configuração da pergunta de segurança. |  ALTA | 
|RF-005| A aplicação deve liberar os créditos iniciais de “boas-vindas” para o usuário somente após a conclusão do preenchimento dos dados do perfil e configuração da pergunta de segurança. | ALTA | 
|RF-006| A aplicação deve permitir que o usuário exclua as habilidades cadastradas. |  ALTA | 
|RF-007| A aplicação deve permitir que o usuário visualize o saldo atual de créditos. | ALTA | 
|RF-008| A aplicação deve ter um botão de “visualizar histórico de transações”, que mostre um relatório de entrada e saída de créditos, incluindo: data e horário da transação, nome do serviço prestado ou contratado e nome do provedor ou consumidor. |  ALTA | 
|RF-009| A aplicação deve permitir que o usuário pesquise serviços (habilidades) usando filtros como categoria, reputação do provedor e palavras-chave, para que ele encontre rapidamente o que precisa. | ALTA | 
|RF-010| A aplicação deve permitir que o usuário visualize perfis dos outros usuários da plataforma, incluindo suas habilidades, histórico de serviços prestados, com o valor de créditos sugerido e avaliações dos consumidores. |  ALTA | 
|RF-011| A aplicação deve permitir que o usuário clique no botão “solicitar serviço” e preencha o formulário obrigatório para iniciar a negociação com o provedor. | ALTA | 
|RF-012| A aplicação deve conter um painel principal que exiba um resumo das atividades do usuário como provedor (pedidos recebidos) e como consumidor (solicitações enviadas), para que o usuário possa acompanhar facilmente suas interações na plataforma. |  ALTA | 
|RF-013| Ao acessar a seção “solicitações enviadas”, a aplicação deve permitir que o usuário gerencie e acompanhe os status das solicitações de serviço que enviou a outro membro da plataforma.| ALTA | 
|RF-014| Ao acessar a seção “solicitações enviadas”, a aplicação deve permitir que o usuário gerencie e acompanhe os status das solicitações de serviço que enviou a outro membro da plataforma.|  ALTA | 
|RF-015| A aplicação deve permitir que o usuário provedor aceite ou rejeite solicitações de serviços recebidas, atualizando o status do painel de controle. | ALTA | 
|RF-016| Uma vez aceita, a aplicação deve permitir que o usuário consumidor cancele sua solicitação de serviço, com uma justificativa opcional.|  ALTA | 
|RF-017| O usuário consumidor deve confirmar a conclusão do serviço, para autorizar a transferência automática de créditos. | ALTA | 
|RF-018| Após a confirmação da conclusão de um serviço, o sistema deve transferir automaticamente os créditos da conta do usuário consumidor para a do usuário provedor e atualizar o histórico de transações de ambas as contas. |  ALTA | 
|RF-019| Após a conclusão de um serviço, a aplicação deve permitir que o usuário consumidor avalie o serviço prestado pelo provedor. | ALTA | 
|RF-020| Após a conclusão de um serviço, a aplicação deve permitir que o usuário provedor avalie a conduta do consumidor. |  ALTA | 
|RF-021| A aplicação deve impedir que o mesmo usuário registre uma troca consigo mesmo.| ALTA | 
|RF-022| A aplicação deve alertar o usuário de que a exclusão de suas habilidades cadastradas impactará na sua capacidade de obter novos créditos para transações futuras, uma vez que ele não está mais oferecendo serviços (habilidade).    |  MÉDIA | 
|RF-023| Ao clicar em “Esqueci minha senha” a aplicação deve enviar um link seguro para o e-mail do usuário para que ele possa redefinir sua senha. | MÉDIA | 
|RF-024| A aplicação deve exibir notificações visuais internas (como ícones ou alertas) sobre novas solicitações, atualizações de status dos pedidos. |  MÉDIA | 
|RF-025| A aplicação deve oferecer uma seção para que o usuário possa reportar bugs, comportamentos irregulares ou abusivos e sugerir melhorias. | MÉDIA | 
|RF-026| A aplicação deve permitir que o usuário compre pacotes de créditos com dinheiro real, usando métodos de pagamento como cartão de crédito/débito e pix. |  MÉDIA | 
|RF-027| A aplicação deve permitir que o usuário denuncie avaliações falsas ou inadequadas. | BAIXA | 
|RF-028| A aplicação deve conter um sistema chat para que os usuários possam conversar com outros usuários. |  BAIXA | 
|RF-029| A aplicação deve permitir exportar/importar dados em um arquivo (Json)     | BAIXA | 
|RF-030| A aplicação deve permitir que o usuário adicione ou remova habilidades da sua lista de favoritos. |  BAIXA | 
|RF-031| Ao solicitar um serviço, a aplicação deverá sugerir um “preço” em créditos para o consumidor, baseado em outras negociações realizadas na plataforma. |  BAIXA | 

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
|RNF-008| A aplicação deve seguir boas práticas de acessibilidade, incluindo contraste adequado, navegação por teclado e rótulos em elementos interativos . | MÉDIA| 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
