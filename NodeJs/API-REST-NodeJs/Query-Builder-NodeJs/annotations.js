/*
Query Builder

O que é?
Query Builder permite construir instruções SQL independente 
do banco de dados. O Query Builder permite escrever um 
código SQL utilizando métodos.

Migrations
Migrations são um mecanismo de gestão de mudanças de banco
de dos que permite a manipulação da base de dados: criando,
alterando ou removendo. E principalmente, o versionamento
do banco de dados. Ou seja, a migration permite versionar 
o banco de dados.

Comando para rodar migrations no TS
npx knex migrate:list --knexfile ./knexfile.ts 

Desfazer migrations:
npx knex migrate:down <nome-migrate> --knexfile ./knexfile.ts 

Voltar ao último rollback:
npx knex migrate:rollback --knexfile ./knexfile.ts 

Desfazer tudo:
npx knex migrate:rollback --all --knexfile ./knexfile.ts

Seeds
Permite popular tabelas com vários registros de uma vez.

Criar Seeds:
npx knex seed:make insert-course-modules --knexfile ./knexfile.ts

Executar Seeds:
npx knex seed:run --knexfile ./knexfile.ts

Diferenças entre Query Builder e ORM

Query Builder -> É uma ferramenta para montar queries SQL 
programaticamente, via código, de forma mais segura e 
organizada. Você ainda pensa como SQL (select, join, where, 
order by), mas sem escrever strings SQL manualmente. Mais 
flexível e próximo do SQL. Permite montar queries complexas 
de forma programada, sem abrir mão do controle.

ORM -> É uma abstração completa do banco de dados em forma 
de objetos/classes no código, com métodos que representam 
operações SQL. Você trabalha manipulando objetos e o ORM 
cuida da tradução disso para SQL. Mais abstrato e próximo 
da linguagem de programação orientada a objetos. Ideal para 
quem quer evitar escrever SQL ou abstrair o banco por 
completo.

*/
