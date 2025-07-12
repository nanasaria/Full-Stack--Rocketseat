# API REST com Node.js

Coleção de projetos e estudos sobre desenvolvimento de APIs REST utilizando Node.js, TypeScript e diversas tecnologias do ecossistema.

## Estrutura dos Projetos

### 1. BancoDeDados-NodeJs
Estudos fundamentais sobre bancos de dados relacionais e SQLite.

**Conceitos abordados:**
- Introdução a bancos de dados relacionais
- SQLite - banco leve e auto-suficiente
- Tipos de dados (NULL, INTEGER, REAL, TEXT, BLOB)
- Operações CRUD com SQL
- Relacionamentos entre tabelas (1:1, 1:N, N:M)
- Joins e consultas avançadas
- Chaves primárias e estrangeiras

**Comandos SQL estudados:**
- CREATE TABLE, ALTER TABLE, DROP TABLE
- INSERT, SELECT, UPDATE, DELETE
- WHERE, LIKE, ORDER BY, LIMIT
- COUNT, SUM, AVG, GROUP BY
- INNER JOIN para relacionamentos

### 2. Criando-API-REST-NodeJs
Progresso evolutivo na criação de APIs REST, dividido em etapas:

#### 2.1 TypeScript
**Tecnologias:**
- Node.js + TypeScript
- TSX para execução em desenvolvimento

**Conceitos:**
- Configuração do TypeScript no Node.js
- Arquivo tsconfig.json
- Compilação e execução de arquivos .ts
- NPX vs NPM

#### 2.2 Express
**Tecnologias:**
- Express.js - Framework web minimalista
- TypeScript + Node.js

**Estrutura:**
- Controllers para lógica de negócio
- Middlewares globais e locais
- Sistema de rotas organizado
- Tratamento de erros customizado
- Tipagem personalizada para Request

**Conceitos REST:**
- Princípios da arquitetura REST
- Client-Server, Stateless, Resource-Based
- Métodos HTTP (GET, POST, PUT, DELETE)
- Sistema em camadas e Cache

#### 2.3 Schema Validation
**Adições:**
- Validação de dados de entrada
- Esquemas de validação pré-definidos
- Middleware de validação

### 3. Query-Builder-NodeJs
Implementação de Query Builder usando Knex.js.

**Tecnologias:**
- Knex.js - Query Builder SQL
- SQLite como banco de dados
- Migrations e Seeds
- Express.js para API

**Funcionalidades:**
- CRUD completo para cursos e módulos
- Migrations para versionamento do banco
- Seeds para popular dados iniciais
- Relacionamentos com JOIN
- Comparação Query Builder vs ORM

### 4. Projeto-API-Restaurante
Projeto prático aplicando todos os conceitos aprendidos.

## Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset tipado do JavaScript
- **Express.js** - Framework web minimalista
- **SQLite** - Banco de dados relacional leve
- **Knex.js** - Query Builder SQL
- **TSX** - Executor TypeScript para desenvolvimento

## Conceitos Fundamentais Estudados

### API REST
- Arquitetura REST (Representational State Transfer)
- Princípios: Client-Server, Stateless, Resource-Based
- Métodos HTTP e códigos de status
- Manipulação de recursos via representações (JSON)

### Banco de Dados
- Modelagem relacional
- Tipos de relacionamentos (1:1, 1:N, N:M)
- SQL e operações CRUD
- Chaves primárias e estrangeiras
- Joins e consultas complexas

### Node.js e TypeScript
- Configuração de ambiente de desenvolvimento
- Sistema de módulos e dependências
- Tipagem estática com TypeScript
- Middlewares e sistema de rotas

### Query Builder vs ORM
- **Query Builder**: Construção programática de SQL mantendo controle
- **ORM**: Abstração completa em objetos/classes
- Migrations para versionamento de schema
- Seeds para dados iniciais

## Como Executar os Projetos

Cada projeto possui suas próprias instruções no respectivo README. Geralmente:

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Para projetos com banco:**
   ```bash
   # Executar migrations
   npx knex migrate:latest --knexfile ./knexfile.ts
   
   # Executar seeds (opcional)
   npx knex seed:run --knexfile ./knexfile.ts
   ```

## Estrutura de Aprendizado

1. **Fundamentos** - Banco de dados e SQL
2. **TypeScript** - Configuração e tipagem
3. **Express** - Framework e middlewares
4. **Validação** - Schema validation
5. **Query Builder** - Knex.js e migrations
6. **Projeto Prático** - Aplicação completa

---

**Autor:** Nayara N. Soares  
**Curso:** Full-Stack Rocketseat