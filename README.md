# Lista de Tarefas Interativa com Temas e Persistência Local

Este projeto consiste em uma aplicação web de lista de tarefas interativa e responsiva, construída com HTML, CSS e JavaScript.  Ela oferece uma experiência de usuário agradável e eficiente para gerenciar tarefas, com funcionalidades como adicionar, editar, marcar como concluída, excluir tarefas, além de personalização de tema e persistência de dados no navegador.

## Visão Geral

A aplicação permite aos usuários criar e gerenciar suas tarefas de forma simples e intuitiva. As tarefas são armazenadas localmente no navegador, garantindo que os dados sejam preservados mesmo após o fechamento da página.  O projeto também oferece a opção de alternar entre temas claro e escuro, adaptando-se às preferências visuais do usuário.

O código deste projeto demonstra um alto nível de organização e atenção aos detalhes, sendo modularizado em diversos arquivos que facilitam a manutenção e o entendimento do projeto. As funcionalidades implementadas abrangem desde as mais básicas, como adicionar, editar, marcar como concluída e excluir tarefas, até funcionalidades extras como a persistência de dados no navegador e a personalização de temas, proporcionando uma experiência de usuário completa e satisfatória. A interface intuitiva e responsiva se adapta a diferentes dispositivos, garantindo que a aplicação possa ser utilizada em qualquer tela, e a preocupação com a acessibilidade, através do uso de elementos semânticos e atributos aria-, demonstra o cuidado com a inclusão de todos os usuários. A validação de dados garante a integridade das informações, enquanto a persistência de dados e os temas personalizáveis oferecem praticidade e personalização. O código segue boas práticas de JavaScript, como o uso de const e let, funções de seta e módulos, e a presença de comentários facilita o entendimento do código.

## Funcionalidades

*   **Adicionar Tarefa:** Permite adicionar novas tarefas à lista, com validação para garantir que o nome da tarefa tenha no mínimo 3 caracteres.
*   **Editar Tarefa:** Possibilita editar o nome de tarefas existentes.
*   **Marcar como Concluída:** Permite marcar tarefas como concluídas, atualizando visualmente a tarefa na lista.
*   **Excluir Tarefa:** Oferece a funcionalidade de excluir tarefas individualmente.
*   **Limpar Lista:** Permite limpar toda a lista de tarefas.
*   **Persistência de Dados:** As tarefas são armazenadas localmente no navegador, garantindo que os dados sejam mantidos mesmo após o fechamento da página.
*   **Temas Claro/Escuro:** Permite alternar entre os temas claro e escuro, oferecendo uma experiência visual personalizada.
*   **Responsividade:** A aplicação é responsiva e se adapta a diferentes tamanhos de tela, proporcionando uma boa experiência em dispositivos móveis e desktops.
*   **Acessibilidade:** Elementos da interface possuem labels e atributos `aria-` para melhor acessibilidade.

## Organização do Projeto

O projeto está organizado da seguinte forma:

*   **`index.html`:** Arquivo principal HTML que contém a estrutura da página.
*   **`js/main.js`:** Arquivo principal JavaScript que contém a lógica da aplicação, importando e utilizando os módulos de outros arquivos.
*   **`js/components.js`:** Arquivo JavaScript que contém funções para criar elementos HTML dinamicamente, como a lista de tarefas, os botões e os diálogos.
*   **`js/events.js`:** Arquivo JavaScript que contém as funções que lidam com os eventos da página, como cliques em botões, envio de formulários, etc.
*   **`js/taskStorage.js`:** Arquivo JavaScript que contém a lógica para armazenar e manipular as tarefas no armazenamento local do navegador.
*   **`js/themeStorage.js`:** Arquivo JavaScript que contém a lógica para gerenciar o tema preferido do usuário e armazená-lo no armazenamento local.
*   **`js/validation.js`:** Arquivo JavaScript que contém funções de validação, como a função `taskNameValidation` para validar o nome da tarefa.
*   **`main.css`:** Arquivo CSS que contém os estilos da aplicação.

