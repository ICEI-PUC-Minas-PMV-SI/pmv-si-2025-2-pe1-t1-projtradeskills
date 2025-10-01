# Template padrão do site

O projeto utiliza um layout base em HTML e CSS padronizado para todas as páginas da aplicação. Esse template define a **identidade visual**, contempla princípios de **responsividade** para diferentes dispositivos e incorpora **iconografia funcional** com base em bibliotecas modernas.

## Design
![Pagina inicial da Trade Skills](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t1-pmv-si-2025-2-pe1-projtradeskills/blob/c74cb49ee2b614322cbf58fb526e6123c5ec98dd/docs/trade_backup.jpg)
|:---------------------------------------------------------------------------------------------------:|
| **Figura 1:** Página inicial da TradeSkills |

Interface baseada em <b>Menu Lateral + Rodapé</b>, com conteúdo central organizado em <b>campo de busca e cards de habilidades</b>, com a exibição do <b>saldo atual de créditos e foto de perfil no menu superior</b>.

## Logo da Aplicação
![Logo da Tradeskills](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t1-pmv-si-2025-2-pe1-projtradeskills/blob/9e2f298d321018e69ba86a4beb15b41b6575939b/docs/logo_trade.jpg)
|:------------------------------------------------------------------------------------------------:|
| **Figura 2:** Logo da TradeSkills |
- **Localização**: Canto superior esquerdo, dentro do menu lateral
- **Nome exibido**: `Tradeskills`
- **Função**: Redireciona para a tela inicial
-  **Acessibilidade**: `alt="Logo Tradeskills - Início"`
  
## Menus Padrões

### Menu Lateral
|![Menu_trade](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t1-pmv-si-2025-2-pe1-projtradeskills/blob/469ab5d857d216d54f9422a926c362b2e2b04f61/docs/menu_trade.jpg)|
|:------------------------------------------------------------------------------------------------:|
| **Figura 3:** Menu lateral da Tradeskills |

| Elemento                  | Função                            |
|---------------------------|-----------------------------------|
| Botão Dashboard             | Direciona o usuário para a página inicial/painel principal |
| Botão Minhas solicitações                   | Exibe as solicitações realizadas pelo usuário |
| Botão Meu histórico                   |  Mostra o histórico de atividades/ações do usuário. |
| Botão Perfil                    | Acessa as informações e opções de edição do perfil do usuário |
| Botão Configurações                     |Abre as opções de configuração do sistema |

### Campo de Busca

 ![menu_superior](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t1-pmv-si-2025-2-pe1-projtradeskills/blob/3810689a5b1a31145d5b29096eac4b39a766e6c5/docs/menu_superior.jpg) 
|:------------------------------------------------------------------------------------------------:|
| **Figura 4:** Campo de busca da TradeSkills |
 
| Elemento         | Função                                                                 |
|------------------|------------------------------------------------------------------------|
| Campo de busca     |  Permite pesquisar habilidades/serviços                               |
|  Botão buscar    | Executa a pesquisa digitada no campo de busca                                    |
| Saldo Atual        | Exibe a quantidade de Créditos disponivéis para o usuário                                                |
| Foto do usuário| Exibe informações do usuário logado e permite acesso ao perfil                                 |
     
## Área de Conteúdo Principal

### Anúncio das Habilidades
| ![Habilidades_trade](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t1-pmv-si-2025-2-pe1-projtradeskills/blob/7b337d1c300580bfbfe03e3af64f6cfa47454a65/docs/Habilidades_trade.jpg) |
|:----------------------------------------------------------------------------------------------------------:|
| **Figura 5:** Anúncio das habilidades da TradeSkills |
 - Cards com foto do prestador, nome e país de origem  
- Título e breve descrição da habilidade/serviço  
- Avaliação em estrelas visível abaixo da descrição  
- Exibição do custo em créditos no canto inferior direito  

## Cores
| ![Paleta de Cores](https://github.com/user-attachments/assets/1e72c4b8-404b-4e69-a59d-d1b63d1191ba) |
|:---------------------------------------------------------------------------------------------------:|
| **Figura 6:** Paleta de cores da TradeSkills |

A paleta da TradeSkills foi definida com base em critérios de **acessibilidade visual**, garantindo contraste adequado e legibilidade para todos os tipos de usuários, incluindo aqueles com deficiências visuais, abordando os diferentes **tipos de daltonismo**.

| Cor             | HEX       | Função na Interface                               |
| :-------------- | :-------- | :------------------------------------------------ |
| black-600       | `#161917` | Texto principal, fundos em modo escuro            |
| gray-700        | `#2E3236` | Fundo de seções escuras, texto secundário         |
| gray-600        | `#535353` | Texto de parágrafo, ícones                        |
| gray-500        | `#888888` | Texto de placeholders, elementos desabilitados    |
| gray-400        | `#6B7281` | Bordas, divisórias, texto de suporte              |
| gray-300        | `#E5E7EB` | Fundo de campos de formulário, bordas sutis       |
| gray-200        | `#F8F9FA` | Fundo principal da página ou de seções claras     |
| dark-blue-800   | `#111827` | Efeito de hover em alguns elementos            |
| blue-500        | `#1E3F66` | Botões primários (call-to-action), links ativos, rodapé   |
| blue-400        | `#3D698D` | Elementos interativos, botões secundários, destaques |
| blue-100        | `#DEE2E6` | Fundo do menu lateral da plataforma |
| yellow-400      | `#EEC276` | Alertas de aviso, notificações, banners informativos |
| red-400         | `#D02828` | Mensagens de erro, ações destrutivas (ex: excluir) |
| green-400       | `#21A134` | Mensagens de sucesso, validação positiva          |

Padrões de Acessibilidade (a11y) Implementados:
- A plataforma oferece suporte ao daltonismo, fazendo com que a comunicação de informações críticas não dependa exclusivamente de cores. Ações e estados são sempre acompanhados por ícones, rótulos textuais claros ou variações de estilo para garantir a compreensão por usuários com protanopia, deuteranopia e tritanopia.
- Oferece um alto contraste em todas as cores utilizadas em textos e componentes interativos atendem aos critérios de contraste do **WCAG 2.1 Nível AA**, garantindo a legibilidade para pessoas com baixa visão.
- O layout utiliza uma combinação de texto, ícones e formas para transmitir significado, assegurando que a interface seja operável e compreensível mesmo sem a percepção de cores.

## Tipografia

A tipografia utilizada na plataforma será a **Poppins**, uma fonte sem serifa conhecida por sua legibilidade  e versatilidade, permitindo a criação de uma hierarquia visual clara através de seus múltiplos pesos.

### Hierarquia e Função

| Elemento                  | Estilo Tipográfico                   | Função principal                                               |
|---------------------------|--------------------------------------|----------------------------------------------------------------|
| **Título de Página**      | Poppins, 32px, Bold | Indicar o nome ou tema principal da página                     |
| **Título de Seção**       | Poppins, 24px, Semi Bold             | Destacar subdivisões do conteúdo dentro de uma mesma página   |
| **Título em cards**        | Poppins, 22px/18px, Semi-bold, Regular                 | Exibir informações em destaque em elementos do tipo card, como uma instrução ou nome     |
| **Rótulos de Componentes**| Poppins, 16px, Regular                 | Identificar campos, botões e outros elementos da interface     |
| **Corpo de Texto**        | Poppins, 14px, Regular                 | Apresentar informações, instruções e conteúdos descritivos, como uma descrição     |

## Iconografia
A iconografia do sistema define os ícones utilizados para facilitar a navegação e representar ações de forma clara. A tabela abaixo apresenta cada ícone da aplicação TradeSkills e sua respectiva função:

| Imagem | Descrição |Função |
| :--- | :---| :--- |
| <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t1-pmv-si-2025-2-pe1-projtradeskills/main/docs/img/icon/icon_house.svg" alt="ICON HOUSE" width="20" height="20"> | Casa | Retorna a tela inicial/dashboard. |
| <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t1-pmv-si-2025-2-pe1-projtradeskills/main/docs/img/icon/icon_user.svg" alt="ICON USER" width="20" height="20"> | Pessoa | Mostra o perfil do usuário. |
| <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t1-pmv-si-2025-2-pe1-projtradeskills/main/docs/img/icon/icon_currency.svg" alt="ICON CURRENCY" width="20" height="20"> |Transações | Acessa a área de minhas solicitações. |
| <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t1-pmv-si-2025-2-pe1-projtradeskills/main/docs/img/icon/icon_search_menu.svg" alt="ICON SEARCH MENU" width="20" height="20"> |Menu | Consulta meu histórico. |
| <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t1-pmv-si-2025-2-pe1-projtradeskills/main/docs/img/icon/icon_settings.svg" alt="ICON SETTINGS" width="20" height="20"> | Configurações | Abre configurações. |
| <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t1-pmv-si-2025-2-pe1-projtradeskills/main/docs/img/icon/icon_edit.svg" alt="ICON EDIT" width="20" height="20"> | Edição | Permite editar informações cadastradas. |
| <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t1-pmv-si-2025-2-pe1-projtradeskills/main/docs/img/icon/icon_trash.svg" alt="ICON TRASH" width="20" height="20"> | Lixo | Remove/ exclui informações. |
| <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t1-pmv-si-2025-2-pe1-projtradeskills/main/docs/img/icon/icon_eye.svg" alt="ICON EYE" width="20" height="20"> | Olho | Alterna entre mostrar ou ocultar informações (ex: senha). |
| <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t1-pmv-si-2025-2-pe1-projtradeskills/main/docs/img/icon/icon_money.svg" alt="ICON MONEY" width="20" height="20"> | Moeda | Exibe saldo de moedas ou transações concluídas. |
| <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t1-pmv-si-2025-2-pe1-projtradeskills/main/docs/img/icon/icon_exclamation_mark.svg" alt="ICON EXCLAMATION MARK" width="20" height="20">| Ponto de Exclamação | Indica estado de atenção (ex: nenhuma solicitação). |
| <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t1-pmv-si-2025-2-pe1-projtradeskills/main/docs/img/icon/icon_x.svg" alt="ICON X" width="20" height="20"> | X | Fecha janelas, modais ou descarta ação. |
| <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t1-pmv-si-2025-2-pe1-projtradeskills/main/docs/img/icon/icon_search.svg" alt="ICON SEARCH" width="20" height="20"> | Lupa | Busca habilidades dentro da aplicação. |
| <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t1-pmv-si-2025-2-pe1-projtradeskills/main/docs/img/icon/icon_arrow.svg" alt="ICON ARROW" width="20" height="20"> | Seta | Avança para o próximo passo no fluxo. |
| <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t1-pmv-si-2025-2-pe1-projtradeskills/main/docs/img/icon/icon_star.svg" alt="ICON STAR" width="20" height="20"> | Estrela | Avaliar e classificar serviços. |
| <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t1-pmv-si-2025-2-pe1-projtradeskills/main/docs/img/icon/icon_person_circle.svg" alt="ICON PERSON CICLE" width="20" height="20"> | Pessoa | Representa outros usuários do sistema. |
| <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t1-pmv-si-2025-2-pe1-projtradeskills/main/docs/img/icon/icon_thumb_up.svg" alt="ICON THUMBS UP" width="20" height="20"> | Dedo para cima | Marca uma solicitação como aceita. |
| <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t1-pmv-si-2025-2-pe1-projtradeskills/main/docs/img/icon/icon_thumb_down.svg" alt="ICON THUMBS DOWN" width="20" height="20"> | Dedo para baixo | Marca uma solicitação como recusada. |
| <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t1-pmv-si-2025-2-pe1-projtradeskills/main/docs/img/icon/icon_filter.svg" alt="ICON FILTER" width="20" height="20"> | Filtro | Abre opções de filtragem de solicitações. |

### Guia de Estilo CSS
Nesta seção estão descritos os estilos gerais aplicados a todos os ícones da aplicação.
O objetivo é padronizar tamanho, cor e comportamento visual, garantindo consistência em toda a interface. 
 
 #### **Classe Base para Ícones**
 
 A classe base .icon define o estilo padrão que pode ser aplicado a todos os ícones. Apesar de ser a configuração base, ela pode ser modificada conforme a necessidade do contexto. Essas modificações, como variação de cor e tamamanho serão mostradas a seguir.


  
     .icon {
    
        display: inline-block;
     
        width:20px;
     
        height:20px;

        fill: currentColor; /* herda a cor do texto do elemento pai */

        vertical-align: middle;
     
      }


   #### **Tamanhos Opcionais**
   
   ##### **Ícone Pequeno**:
    

      .icon-sm {
    
          width:12px;
     
          height:12px;
     
       }


   ##### **Ícone Médio**:
    

      .icon-md {
    
          width:24px;
     
          height:24px;
     
       }


 ##### **Ícone Grande**:
    

      .icon-lg {
    
          width: 40px;
     
          height: 40px;
     
       }


 #### **Cores Opcionais**
   
   ##### **Cor Primária**:
    

      .icon-primary {
    
          fill: #161917;
     
       }


   ##### **Cor Secundária**:
    

      .icon-secondary {
    
          fill: #535353;
     
       }


 ##### **Cor de Sucesso**:
    

      .icon-success {
    
          fill: #21A134;
     
       }

   ##### **Cor de Perigo/Erro**:
    

      .icon-danger {
    
          fill: #D02828;
     
       }

   ##### **Cor para Ícones Desativados**:
    

      .icon-muted {
    
          fill: #E5E7EB;
     
       }

 
 ![Imagem CSS](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t1-pmv-si-2025-2-pe1-projtradeskills/blob/main/docs/img/icon/icones_exemplo.png)
 
 Para acessar o código com a formatação dos ícones é só acessar o link: https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t1-pmv-si-2025-2-pe1-projtradeskills/tree/main/docs/exemple/icon
