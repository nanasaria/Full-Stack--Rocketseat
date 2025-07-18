/*
Deploy

Ambientes
Desenvolvimento -> Onde se cria e testa a aplicação no
próprio computador

Produção -> Onde se coloca a aplicação em um servidor para
manter sua aplicação sempre disponível.

O processo de deploy é colocar o projeto desenvolvido em
ambiente de desenvolvimento no ambiente de produção.

Antes de executar o build, precisamos definir a engine
em package.json para especificar a versão mínima do Node.
Dessa forma:
"engines": {
    "node": ">=18"
},

Quando precisamos fazer o build de TypeScript, precisamos
convertê-lo para JavaScript. Para isso, utilizamos uma lib
chamada tsup. É interessante configurar um script de build
dessa forma: 
"build": "tsup src"
Passando o src para que builde toda a aplicação.
Depois de rodar esse comando, teremos uma pasta chamada
"dist" na raiz.

Para definir outro nome da pasta de build
Definimos o script:
"build": "tsup src --out-dir build"
Agora, ao invés do nome ser dist, será build.

Podemos testar a pasta criada ao buildar e para executá-la 
podemos executar com node por serem arquivos JavaScript.

Para passarmos para o ambiente de deploy, precisamos colocar
o projeto no GitHub.

Render
Plataforma de Deploy que permite hospedar aplicações back-end
e banco de dados no plano gratuito, mas o banco de dados expira
em 90 dias.

Criar o Banco de Dados no Render
1. Acessar dashboard do render
2. Criar uma nova instância
3. Definir nome e região do banco -> Escolher região próxima
para diminuir latência.
4. Selecionar versão do PostgreSQL.
5. Optar pela versão gratuita.

Depois da criação do Banco de Dados, podemos visualizar as 
informações do banco criado no render.

URL INTERNA -> Utilizamos quando a aplicação que consome o
banco de dados também está hospedado no Render.
URL EXTERNA -> Utilizamos quando a aplicação que consome o
banco de dados NÃO está hospedado no Render.

Para visualizarmos o banco criado, podemos utilizar a URL
externa como HOST no Beekeeper.

Para realizar o Deploy da aplicação
1. Acesse o Dashboard do Render
2. Clique em + New
3. Selecione Web Service
4. Selecione o projeto do GitHub.
5. Clique em Connect ->
6. Escolha nome, linguagem Node, Branch, região
7. Defina o Build Command que são os comandos que devem ser
executados antes de cada build.
Ex: npm install && npm run build && npx prisma migrate deploy
8. Defina o Start Command que é o comando para iniciar a
aplicação em cada deploy.
Ex: npm start
9. Defina as variáveis de ambiente de acordo com seu .env
10. Clique em Deploy Web Service.

Realizar Deploy de atualização do projeto
É necessário apenas realizar o commit na branch escolhida no
deploy e o Render identificará a mudança e fará a build
automaticamente em seguida.
*/
