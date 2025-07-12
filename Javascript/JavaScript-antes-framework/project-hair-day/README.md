# Hairday - Projeto Rocketseat

> Aplicação Web para agendamento de corte de cabelo.

## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Instruções](#instruções)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Executando o Servidor JSON](#executando-o-servidor-json)
  - [Executando a Aplicação Web](#executando-a-aplicação-web)
- [Uso](#uso)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

## Sobre o Projeto

O Hairday é uma aplicação web desenvolvida para simplificar o processo de agendamento de cortes de cabelo. Com uma interface amigável, seus clientes poderão verificar a disponibilidade de horários e marcar seus serviços online, a qualquer hora e de qualquer lugar. Esta aplicação utiliza um servidor JSON para simular uma API, permitindo um desenvolvimento front-end independente e eficiente.

## Instruções

Siga estas instruções para configurar e executar o Hairday localmente.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) (ou [yarn](https://yarnpkg.com/)) instalados em sua máquina. Eles são necessários para executar os scripts e instalar as dependências do projeto.

### Instalação

1.  Clone o repositório:

    ```bash
    git clone [https://github.com/seu-usuario/seu-projeto.git](https://github.com/seu-usuario/seu-projeto.git)
    ```

    _(Substitua o link acima pelo URL real do seu repositório)_

2.  Navegue até o diretório do projeto:

    ```bash
    cd hairday
    ```

3.  Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    ```

### Executando o Servidor JSON

Esta aplicação utiliza um servidor JSON para simular a comunicação com uma API. Siga estes passos para iniciá-lo:

1.  Certifique-se de estar no diretório raiz do projeto.
2.  Execute o seguinte comando:
    ```bash
    npm run server
    # ou
    yarn server
    ```
    Este comando iniciará o servidor JSON na porta `3333`, conforme definido no `package.json`. Você poderá acessar os dados de agendamentos (atualmente um array vazio) através de rotas como `http://localhost:3333/schedules`.

### Executando a Aplicação Web

Para visualizar e interagir com a aplicação web, siga estes passos:

1.  Certifique-se de que o servidor JSON esteja rodando (passo anterior).
2.  No mesmo diretório raiz do projeto (ou em outra aba do seu terminal), execute o seguinte comando para iniciar o servidor de desenvolvimento do Webpack:

    ```bash
    npm run dev
    # ou
    yarn dev
    ```

    Este comando irá construir a sua aplicação e disponibilizá-la em um servidor de desenvolvimento local, geralmente na porta `3000`. O navegador deve abrir automaticamente a página da aplicação. Caso contrário, acesse `http://localhost:3000` no seu navegador.

## Uso

Ao acessar a aplicação no seu navegador (`http://localhost:3000` por padrão), você poderá interagir com os seguintes elementos:

- **Formulário de Agendamento:**

  - **Seleção de Data:** Um calendário interativo (inicializado com a data atual) permite que você escolha o dia desejado para o agendamento. Ao mudar a data, a lista de horários disponíveis e os agendamentos existentes são automaticamente recarregados.
  - **Seleção de Horário:** Abaixo da seleção de data, são listados os horários de funcionamento (**9:00 às 21:00**), divididos em períodos (Manhã, Tarde, Noite). Os horários já agendados para o dia selecionado e os horários passados aparecem como indisponíveis. Você pode clicar em um horário disponível para selecioná-lo. O horário selecionado ficará visualmente destacado.
  - **Nome do Cliente:** Um campo de texto onde você deve inserir o nome do cliente para o agendamento.
  - **Submissão:** Ao clicar no botão de agendamento, os dados (nome do cliente, data e hora selecionada) são enviados para o servidor JSON (`http://localhost:3333/schedules`) através de uma requisição HTTP POST. Em caso de sucesso, uma mensagem de confirmação será exibida e a lista de agendamentos para o dia será atualizada.

- **Visualização de Agendamentos:** Os agendamentos para o dia selecionado são carregados automaticamente ao acessar a página e sempre que a data é alterada. Eles são exibidos em listas separadas para cada período do dia (Manhã, Tarde, Noite). Cada agendamento mostra o horário (`HH:mm`) e o nome do cliente. Ao lado de cada agendamento, há um ícone de cancelar.

- **Cancelamento de Agendamentos:** Ao clicar no ícone de cancelar (uma imagem de "X"), uma caixa de confirmação será exibida perguntando se você tem certeza de que deseja cancelar o agendamento. Se você confirmar, uma requisição HTTP DELETE será enviada para o servidor JSON (`http://localhost:3333/schedules/:id`, onde `:id` é o identificador do agendamento a ser cancelado). Em caso de sucesso, uma mensagem de confirmação será exibida e a lista de agendamentos para o dia será atualizada, removendo o item cancelado.

## Funcionalidades

As principais funcionalidades do Hairday incluem:

- **Agendamento de Corte de Cabelo:** Permite aos usuários selecionar uma data e um horário disponível para agendamento (das **9:00 às 21:00**) e registrar um novo agendamento.
- **Visualização de Agendamentos:** Exibe os horários agendados para o dia selecionado, organizados por período (Manhã, Tarde, Noite), mostrando o horário e o nome do cliente.
- **Cancelamento de Agendamentos:** Oferece a opção de cancelar um agendamento existente através de um ícone visual na lista de agendamentos.
- **Interface de Usuário Intuitiva:** Design limpo e fácil de usar, com estilos definidos em `global.css`, `form.css` e `schedule.css`.
- **Gerenciamento de Datas:** Utilização da biblioteca `dayjs` para facilitar a manipulação e formatação de datas e horários.

## Tecnologias Utilizadas

As seguintes tecnologias foram utilizadas no desenvolvimento deste projeto:

- **JavaScript:** A linguagem de programação principal para a lógica da aplicação.
- **Webpack:** Um bundler de módulos para JavaScript, utilizado para empacotar e otimizar os arquivos da aplicação.
- `html-webpack-plugin`: Plugin do Webpack para gerar um arquivo HTML e injetar os bundles gerados.
- `copy-webpack-plugin`: Plugin do Webpack para copiar arquivos e diretórios estáticos para a pasta de build (`dist`).
- `style-loader`: Loader do Webpack para injetar estilos CSS no DOM.
- `css-loader`: Loader do Webpack para interpretar arquivos CSS.
- `babel-loader`: Loader do Webpack para transpilar código JavaScript moderno (ES6+) para versões mais antigas, garantindo compatibilidade com diversos navegadores.
  - `@babel/core`: O core do Babel, um compilador JavaScript.
  - `@babel/preset-env`: Um preset do Babel que permite usar a sintaxe JavaScript mais recente sem se preocupar com a compatibilidade do navegador.
- `webpack-dev-server`: Um servidor de desenvolvimento local para servir a aplicação durante o desenvolvimento, com recursos como hot module replacement.
- `json-server`: Uma biblioteca para criar rapidamente uma API REST fake a partir de um arquivo JSON, utilizada aqui para simular o backend de agendamentos.
- `dayjs`: Uma biblioteca JavaScript minimalista para trabalhar com datas e horas.

---

**Autor:** Nayara Nasaria Soares
