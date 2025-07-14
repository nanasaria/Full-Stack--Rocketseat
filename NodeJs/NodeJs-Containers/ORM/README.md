# ORM - Object-Relational Mapping

Estudo sobre ORM utilizando Prisma com Node.js e TypeScript.

## O que é ORM?

ORM é uma ferramenta que facilita o trabalho com banco de dados em aplicações, permitindo interagir com o banco sem escrever consultas SQL diretamente. Com o ORM, você manipula tabelas e dados do banco como se fossem objetos da linguagem de programação.

### Vantagens
- Menos código SQL manual
- Facilita a manutenção
- Compatível com múltiplos bancos de dados

### ORM vs Query Builder
- **ORM**: Converte tabelas do banco de dados em objetos da linguagem de programação
- **Query Builder**: Ajuda a criar consultas SQL usando código, sem escrever SQL direto

## Prisma

Prisma é um ORM para Node.js e TypeScript que facilita a comunicação entre a aplicação e o banco de dados relacional.

### Recursos Principais
- Compatível com PostgreSQL, MySQL, SQLite, SQL Server, MongoDB
- Migrations automáticas
- Type safety com TypeScript
- Prisma Studio para visualizar e editar dados

### Comandos Essenciais

```bash
# Instalação
npm install prisma

# Inicialização
npx prisma init --datasource-provider postgresql

# Migration (desenvolvimento)
npx prisma migrate dev

# Abrir Prisma Studio
npx prisma studio

# Executar seed
npx prisma db seed
```

### Operações Básicas

```javascript
// Criar registro
prisma.user.create({ data: { name, email } });

// Listar todos
await prisma.user.findMany();

// Buscar específico
await prisma.user.findUnique({ where: { id } });
```

### Relacionamentos

Exemplo de relacionamento um-para-muitos entre User e Question:

```prisma
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
```

## Projeto Template

O projeto `fullstack-orm-template` demonstra a implementação prática com:
- API REST com Express
- Controllers para Users e Questions
- Migrations e Seeds
- Relacionamentos entre entidades

---

**Autor:** Nayara Nasaria Soares
