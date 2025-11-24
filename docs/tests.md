# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **CT01 - Criar conta**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço [https://puc-tradeskills.netlify.app/](https://puc-tradeskills.netlify.app/) <br> 2) Clique em Cadastre-se <br> 2) Preencha todos os campos do formulário <br> 3) Clique no botão "Cadastrar".
**Requisitos associados** | RF-003
**Resultado esperado** | Usuário cadastrado
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT02 - Acessar conta**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço [https://puc-tradeskills.netlify.app/](https://puc-tradeskills.netlify.app/) <br> 2) Clique em Login <br> 3) Preencha os dados de acesso <br> 4) Clique em **Entrar**
**Requisitos associados** | RF-002
**Resultado esperado** | Usuário logado
**Dados de entrada** | Inserção de dados válidos no formulário de login
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT03 - Acessar Dashboard**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço [https://puc-tradeskills.netlify.app/](https://puc-tradeskills.netlify.app/) <br> 2) Clique em Login <br> 3) Preencha os dados de acesso (e-mail e senha) <br> 4) Clique em **Entrar** <br> 3) Visualize o Dashboard <br> 4) Clique no botão **Buscar habilidades** para ser redirecionado para a tela de busca. <br> 5) Clique no botão **Ver Minhas Solicitações** para ser redirecionado para a tela de solicitações (Pedidos recebidos e Solicitações Enviadas) <br> 6)Clique no botão **Ver Histórico Completo** para ser redirecionado para a tela de Histórico de Entrada e Saída de Créditos.
**Requisitos associados** | RF-004
**Resultado esperado** | Visualização do Dashboard contendo Resumo das Solicitações, Histórico e botão que redireciona para a página de Buscar Habilidades.
**Dados de entrada** | N/A
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT04 - Criar, Editar e Remover Habilidades**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço [https://puc-tradeskills.netlify.app/](https://puc-tradeskills.netlify.app/) <br> 2) Clique em Login <br> 3) Preencha os dados de acesso (e-mail e senha) <br> 4) Clique em **Entrar** <br> 3) Clique na opção **Perfil** do menu lateral <br> 4) Crie uma nova habilidade ou Edite uma existente ou Delete uma habilidade existente.
**Requisitos associados** | RF-005
**Resultado esperado** | Visualização do Perfil podendo Atualizar Dados Pessoais, Criar / Atualizar e Deletar Habilidades.
**Dados de entrada** | Título da Habilidade, Descrição, Preço Sugerido em Créditos, Disponibilidade e Tipo de Atendimento (Online/Presencial). 
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT05 - Buscar por habilidades**
 :--------------: | ------------
**Procedimento**  | 1) Realizar o login na platafrma <br> 2) Clique **Buscar habilidades** <br> 3) Inserir o nome da habilidade que deseja encontrar <br> 4) Clicar no perfil do usuário que deseja visualizar
**Requisitos associados** | RF-007
**Resultado esperado** | Habilidade encontrada
**Dados de entrada** | Inserção de dados válidos no formulário de busca
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT06 - Visualizar perfil completo**
 :--------------: | ------------
**Procedimento**  | 1) Realizar o login na platafrma <br> 2) Clique **Buscar habilidades** <br> 3) Clicar no perfil do usuário que deseja <br> 4) Clicar no botão "Ver perfil completo"
**Requisitos associados** | RF-008
**Resultado esperado** | Visualização completa do perfil do provedor
**Dados de entrada** | Inserção de dados válidos no formulário de busca
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT07 - Enviar report**
 :--------------: | ------------
**Procedimento**  | 1) Realizar o login na platafrma <br> 2) Clique **Reportar** <br> 3) Selecionar o tipo de informação <br> 4) Preencher o campo descrevendo sobre a informação selecionada <br>5) Clicar em **Enviar Relatório**
**Requisitos associados** | RF-016
**Resultado esperado** | Report enviado com sucesso
**Dados de entrada** | Inserção de dados válidos no formulário de report
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT08 - Editar dados pessoais**
:--------------: | ------------
**Procedimento**  | 1) Acesse a aplicação<br>2) Faça login no sistema<br>3) Acesse o menu de perfil<br>4) Identifique os campos já preenchidos<br>5) Modifique nome, senha, foto, cidade ou contato<br>6) Salve as alterações |
**Requisitos associados** | RF-006 |
**Resultado esperado** | O sistema deve atualizar os dados pessoais do usuário e exibir mensagem de confirmação de sucesso |
**Dados de entrada** | Usuário autenticado com dados pessoais previamente cadastrados |
**Resultado obtido** | Sucesso |

**Caso de Teste** | **CT09 - Visualizar histórico de transações**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a aplicação<br>2) Faça login no sistema<br>3) Clique no botão "Meu histórico" no menu lateral<br>4) Visualize a lista de transações com valores de entrada e saída |
**Requisitos associados** | RF-009 |
**Resultado esperado** |Exibir histórico com data, tipo (entrada/saída), nome do serviço, nome da pessoa e valor em créditos |
**Dados de entrada** | Login de usuário com histórico de transações existente |
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT10 - Visualizar minhas solicitações**
 :--------------: | ------------
**Procedimento**  | 1) Acesse a aplicação<br>2) Clique no botão "Minhas solicitações" no menu lateral<br>3) Verifique as abas "Solicitações Enviadas" e "Pedidos Recebidos"<br>4) Visualize as transações listadas em cada aba |
**Requisitos associados** | RF-010 |
**Resultado esperado** |Exibir duas abas funcionais com listas de transações mostrando habilidade, pessoa, data, status e link "Visualizar" |
**Dados de entrada** | Login de usuário com solicitações enviadas e pedidos recebidos |
**Resultado obtido** | Sucesso |

**Caso de Teste** | **CT11 - Confirmar conclusão - Consumidor**
 :--------------: | ------------
**Procedimento**  | 1) Acesse "Minhas solicitações" > aba "Solicitações Enviadas"<br>2) Localize uma solicitação com status "Em andamento" ou "Aguardando Cliente"<br>3) Clique em "Visualizar"<br>4) Clique no botão "Confirmar Conclusão"<br>5) Verifique a transferência de créditos<br> 6)Avalie o provedor do serviço na modal de avaliação |
**Requisitos associados** | RF-011 |
**Resultado esperado** |Modal abre com opções, ao confirmar: status muda para "Concluído", créditos transferidos, modal de avaliação abre |
**Dados de entrada** | Solicitação com status "Em andamento" |
**Resultado obtido** | Sucesso |

**Caso de Teste** | **CT11 - Desistir solicitação - Consumidor**
 :--------------: | ------------
**Procedimento**  | 1) Acesse "Minhas solicitações" > aba "Solicitações Enviadas"<br>2) Localize uma solicitação "Em andamento" ou "Pendente"<br>3) Clique em "Cancelar"<br>4) Preencha a justificativa (opcional)<br>5) Confirme o cancelamento |
**Requisitos associados** | RF-011 |
**Resultado esperado** |Solicitação cancelada, status muda para "Cancelado", justificativa registrada |
**Dados de entrada** | Justificativa: "Não preciso mais do serviço" |
**Resultado obtido** | Sucesso |

**Caso de Teste** | **CT12 - Aceitar pedido - Provedor**
 :--------------: | ------------
**Procedimento**  | 1) Acesse "Minhas solicitações" > aba "Pedidos Recebidos"<br>2) Localize um pedido com status "Pendente"<br>3) Clique em "Visualizar"<br>4) Clique em "Aceitar" |
**Requisitos associados** | RF-012 |
**Resultado esperado** |Status muda para "Em andamento", modal fecha |
**Dados de entrada** | Pedido com status "Pendente" |
**Resultado obtido** | Sucesso |

**Caso de Teste** | **CT12 - Cancelar pedido - Provedor**
 :--------------: | ------------
**Procedimento**  | 1) Acesse "Minhas solicitações" > aba "Pedidos Recebidos"<br> 2)Localize um pedido com status "Pendente"<br>3) Clique em "Cancelar"<br>4) Preencha a justificativa<br>5) Confirme |
**Requisitos associados** | RF-012 |
**Resultado esperado** |Pedido cancelado, status muda para "Cancelado", justificativa registrada |
**Dados de entrada** | Justificativa: "Não tenho disponibilidade" |
**Resultado obtido** | Sucesso |

**Caso de Teste** | **CT13 - Sinalizar conclusão - Provedor**
 :--------------: | ------------
**Procedimento**  | 1) Acesse "Minhas solicitações" > aba "Pedidos Recebidos"<br>2) Localize um pedido com status "Em andamento"<br>3) Clique em "Visualizar"<br>4) Clique no botão "Sinalizar Conclusão"<br>5) Verifique a mudança de status |
**Requisitos associados** | RF-013 |
**Resultado esperado** |Status muda para "Aguardando Cliente", alert exibe "Conclusão sinalizada! Aguardando confirmação do cliente", modal de avaliação abre |
**Dados de entrada** | Pedido com status "Em andamento" |
**Resultado obtido** | Sucesso |

**Caso de Teste** | **CT13 - Cancelar pedido em andamento - Provedor**
 :--------------: | ------------
**Procedimento**  | 1) Acesse "Minhas solicitações" > aba "Pedidos Recebidos"<br> 2)Localize um pedido "Em andamento"<br>3) Clique em "Cancelar"<br>4) Tente confirmar sem preencher a justificativa<br>5) Preencha a justificativa obrigatória<br>6) Confirme o cancelamento |
**Requisitos associados** | RF-013 |
**Resultado esperado** |Sistema exige justificativa obrigatória, após preenchida cancela o pedido com status "Cancelado" |
**Dados de entrada** | Justificativa obrigatória: "Problemas pessoais impedem a continuação" |
**Resultado obtido** | Sucesso |

**Caso de Teste** | **CT14  - Avaliar após conclusão**
 :--------------: | ------------
**Procedimento**  | 1) Após confirmar conclusão de um serviço<br>2) Sistema abre modal de avaliação automaticamente<br>3) Selecione estrelas (1-5)<br>4) Selecione destaques (opcional)<br>5) Escreva comentário (opcional)<br>6) Clique em "Enviar Avaliação" |
**Requisitos associados** | RF-014 |
**Resultado esperado** |Avaliação registrada com sucesso, modal fecha |
**Dados de entrada** | Avaliação: 5 estrelas, destaque "Profissionalismo", comentário "Excelente serviço!" |
**Resultado obtido** | Sucesso |

## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*CT01 - Criar conta*                                         |
|---|---|
| Requisito Associado | RF-003 - A aplicação deve permitir que os usuários criem uma conta |
| Link do vídeo do teste realizado: | [https://sgapucminasbr-my.sharepoint.com/personal/1217058_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQBH9m4QYF-lQZNbbkwgJBJ_AVFxYtgA4Qazrj0nbNb6lAc&e=GZhGF8](https://sgapucminasbr-my.sharepoint.com/personal/1217058_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQBH9m4QYF-lQZNbbkwgJBJ_AVFxYtgA4Qazrj0nbNb6lAc&e=GZhGF8) | 

|*Caso de Teste*                                 |*CT02 - Acessar conta*                                        |
|---|---|
|Requisito Associado | RF-002 - A aplicação deve permitir que os usuários acessem a conta |
|Link do vídeo do teste realizado: | [https://sgapucminasbr-my.sharepoint.com/personal/1217058_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQBK4ijzurgASahYEBGGLG1lAapjMgEOnFcGem2mdjHLqA0&e=K0HfkY](https://sgapucminasbr-my.sharepoint.com/personal/1217058_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQBK4ijzurgASahYEBGGLG1lAapjMgEOnFcGem2mdjHLqA0&e=K0HfkY) |

|*Caso de Teste*                                 |*CT03 - Encontrar Habilidade*                                        |
|---|---|
|Requisito Associado | RF-007 - A aplicação deve permitir que os usuários encontrem as habilidades desejadas |
|Link do vídeo do teste realizado: | [https://sgapucminasbr-my.sharepoint.com/personal/1217058_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQA89rM9j9JQRZFyPlAz_Ea1AQD5nff_GFEoTPtd_cU2LjI&e=x3hz1L](https://sgapucminasbr-my.sharepoint.com/personal/1217058_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQA89rM9j9JQRZFyPlAz_Ea1AQD5nff_GFEoTPtd_cU2LjI&e=x3hz1L) | 

|*Caso de Teste*                                 |*CT04 - Visualizar perfil completo*                                        |
|---|---|
|Requisito Associado | RF-008 - A aplicação deve permitir que os usuários visualizem o perfil completo do provedor |
|Link do vídeo do teste realizado: | [https://sgapucminasbr-my.sharepoint.com/personal/1217058_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQCq9sC7zISTTrhuEMZGVqzTAYf05VOUxzN4XD84JG55yIc&e=QjleRa](https://sgapucminasbr-my.sharepoint.com/personal/1217058_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQCq9sC7zISTTrhuEMZGVqzTAYf05VOUxzN4XD84JG55yIc&e=QjleRa) |

|*Caso de Teste*                                 |*CT05 - Enviar report*                                        |
|---|---|
|Requisito Associado | RF-008 - A aplicação deve permitir que os usuários visualizem o perfil completo do provedor |
|Link do vídeo do teste realizado: | [https://sgapucminasbr-my.sharepoint.com/personal/1217058_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQAWsU9wSEPDTJp5_XwL7KpHAe4N-HCpxHIw8qTjfuts2Xg&e=Dm2WrW](https://sgapucminasbr-my.sharepoint.com/personal/1217058_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=IQAWsU9wSEPDTJp5_XwL7KpHAe4N-HCpxHIw8qTjfuts2Xg&e=Dm2WrW) | 

| *Caso de Teste* | *CT06 - Editar dados pessoais* |
|---|---|
| **Requisito Associado** | RF-006 - A aplicação deve permitir a edição dos dados pessoais como nome, senha, foto, cidade e contato. |
| **Link do vídeo do teste realizado:** | [https://drive.google.com/file/d/1LlySdbaOYHNficRbDna4BQ1X7UMKTe5i/view?usp=sharing](https://drive.google.com/file/d/1LlySdbaOYHNficRbDna4BQ1X7UMKTe5i/view?usp=sharing) |

|*Caso de Teste*                |*CT09 - Visualizar histórico de transações*                                        |
|---|---|
|Requisito Associado | RF-009 - A aplicação deve ter um botão “Meu histórico” no menu principal, para permitir a visualização do histórico de transações, onde o usuário poderá visualizar os valores de entrada e saída de créditos, incluindo data, horário, nome do serviço prestado e nome do provedor ou consumidor.|
|Link do vídeo do teste realizado: | [https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar](https://drive.google.com/file/d/16hUuj86h8k7kDPLQkqqNi0o7wA6DWYIo/view?usp=sharing) | 

|*Caso de Teste*                |*CT10 - Visualizar minhas solicitações*                                        |
|---|---|
|Requisito Associado | RF-010 - A aplicação deve ter um botão "Minhas Solicitações" no menu principal, que exibe uma tela com duas abas: "Solicitações Enviadas" (visão do consumidor) e "Pedidos Recebidos" (visão do provedor). Ambas as abas devem listar as transações com detalhes como habilidade, nome do provedor ou consumidor, data, status atual e uma opção para "Gerenciar/Visualizar" a transação.|
|Link do vídeo do teste realizado: | [https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar](https://drive.google.com/file/d/1Nqxwg0ya2pZlRcJSzqmr849TkaGOmlck/view?usp=sharing) | 

|*Caso de Teste*               |*CT11 - Confirmar conclusão e Desistir da Conclusão -Consumidor*                                        |
|---|---|
|Requisito Associado | RF-011 - Na tela do consumidor (Solicitações enviadas), com o status "Em andamento" ou "Aguardando Cliente", ao clicar em "Visualizar" abrirá o pop up com a opção "Confirmar conclusão" ou "Desistir (com justificativa opcional)". |
|Link do vídeo do teste realizado: |confirmação: [https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar](https://drive.google.com/file/d/1jI0Wg3m1KrrZybt_Leuq8d-fWDyx-LoK/view?usp=drive_link)<br> desistência:[https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar](https://drive.google.com/file/d/14NykGkdKsj_PY_2Jgnp0oawpyI7SDjqj/view?usp=drive_link) | 

 

|*Caso de Teste*              |*CT12 - Aceitar pedido e Desistir do pedido - Provedor*                                        |
|---|---|
|Requisito Associado | RF-012 - Na tela do provedor (Pedidos recebidos), com o status "Pendente", ao clicar em "Visualizar" abrirá o pop up com a opção "Aceitar ou Cancelar". |
|Link do vídeo do teste realizado: | aceitar: [https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar](https://drive.google.com/file/d/10ZHAcDUzZWpSLyvw7OE1IF34DUZK4-n9/view?usp=drive_link)<br> desistir: [https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar](https://drive.google.com/file/d/1du63lyW2m2-HRHTwbfh_LpEvnx4ijDV9/view?usp=drive_link)  | 



|*Caso de Teste*              |*CT13 - Sinalizar conclusão e Cancelar Pedido - Provedor*                                        |
|---|---|
|Requisito Associado | RF-013 - NNa tela do provedor (Pedidos recebidos), com o status "Em Andamento", ao clicar em "Visualizar" abrirá o pop up com a opção "Sinalizar conclusão" ou "Cancelar (com justificativa obrigatória)".|
|Link do vídeo do teste realizado: | conclusão: [https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar](https://drive.google.com/file/d/1ksdvddSLUFI9DMWLKwinP-SOxaDVn7A0/view?usp=drive_link)<br> cancelamento: [https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar](https://drive.google.com/file/d/1PjC-D6PaZcUrwNBzTEJdXaLi9Guup9VP/view?usp=drive_link)  | 


|*Caso de Teste*                                 |*CT14 - Avaliar após conclusão*                                        |
|---|---|
|Requisito Associado | RF-014 - Após o consumidor deve confirmar a conclusão do serviço, o sistema irá transferir automaticamente os créditos para o provedor. Após o pagamento, o sistema permitirá a avaliação mútua (consumidor avalia provedor, provedor avalia consumidor).	|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1BZWsxgh7kcfOiLEv3oXKkH-xYAdG-e9F/view?usp=drive_link | 


## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 28.02 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.


Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 4                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.67                | 30.05 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.

## Avaliação dos Testes de Usabilidade

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



