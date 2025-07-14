/* 
ORM
ORM é uma ferramenta que facilita o trabalho com banco de
dados em aplicações, permitindo que interaja com o banco
sem escrever consultas SQL diretamente. Com o ORM, você
manipula tabelas e dados do banco como se fossem objetos
com a linguagem de programação, simplificando a leitura,
escrita e manutenção do código. Cuida também da conversão
dos dados entre o banco de dados relacional e os objetos no
código.

Vantagens
- Menos código SQL manual
- Facilita a manutenção
- Compatível com múltiplos bancos de dados

ORM x Query Builder
A principal diferença entre eles é o nível de abstração e
como eles interagem com o banco.

ORM -> Converte tabelas do banco de dados em objetos da
linguagem de programação.

Query Builder -> Ajuda a criar consultas SQL usando código,
sem escrever SQL direto.

PRISMA
Prisma é um ORM para Node.js e TypeScript. Ele facilita a
comunicação entre a aplicação e o banco de dados relacional,
permitindo que você interaja com os dados usando código 
(JavaScript/TypeScript) em vez de escrever SQL puro.

Principais recursos:
- Compatível com PostgreSQL, MySQL, SQLite, SQL Server, 
  MongoDB.
- Migrations automáticas
- Type safety: tipagem forte se estiver usando TypeScript.
- Prisma Studio: interface web para visualizar e editar 
  dados.

Para iniciar o Prisma no projeto primeiro você deve instalar:
npm install prisma ou npm i prisma

Depois para iniciar:
npx prisma init --datasource-provider <banco escolhido>
Ex: npx prisma init --datasource-provider postgresql

Id incremental x uuid
Id incremental -> de um em um. Ex: 1 registro (id 1)

UUID -> Combinação de números e letras, com grupos separados
por um traço e esses grupos tem uma maior complexidade para
serem gerados.

Para realizar a migration:
npx prisma migrate dev -> No caso de ambiente de dev.

Para abrir o Studio do Prisma:
npx prisma studio

Observações:
Uma tabela no Prisma é um modelo (model) 
@@map -> Como a tabela será chamada.
@map -> Como a coluna será chamada.

Para popular a tabela criada:
prisma.user.create({ data: { name, email } });

você passa a configuração do prisma, a tabela e o método 
que recebe um objeto data que contém os dados que você 
quer enviar.

Listar dados cadastrados:
O findMany() é o método que retorna todos os dados 
encontrados.
await prisma.user.findMany();

Listar um dado específico:
O findUnique() é o método que retorna um dado específico
baseado na propriedade where.

await prisma.user.findUnique({ where: { id } });

Relacionamentos utilizando Prisma
Ex:

model User {
  id String @id @default(uuid())
  name String 
  email String @unique

  questions Question[]

  @@map("users")
}

model Question {
  id String @id @default(uuid())
  title String 
  content String @unique

  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt

  userId String @map("user_id")

  user User @relation(fields: [userId], references: [id])

  @@map("questions")
}

Neste exemplo, temos dois models: User e Question, 
representando as tabelas users e questions no banco de 
dados.
No model User, o campo questions Question[] indica que um 
usuário pode ter várias perguntas associadas a ele. 
Caracterizando um relacionamento um-para-muitos.
No model Question, o campo userId armazena o identificador 
do usuário que criou a pergunta. Esse campo referencia o 
campo id da tabela users, estabelecendo a ligação entre as 
tabelas.
A diretiva @relation(fields: [userId], references: [id]) 
define explicitamente essa relação, indicando que o campo 
userId é a chave estrangeira (foreign key) que aponta para 
o id do usuário correspondente.

Seed para popular tabela utilizando Prisma

Para executar o Seed:
npx prisma db seed

*/
