# Query Builder - Node.js

Projeto de estudos sobre Query Builder utilizando Knex.js com Node.js, TypeScript e SQLite.

## Sobre o Projeto

Este projeto demonstra o uso de Query Builder para construir instruções SQL de forma programática, independente do banco de dados. O Query Builder permite escrever código SQL utilizando métodos JavaScript/TypeScript.

## Tecnologias

- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset do JavaScript
- **Express** - Framework web
- **Knex.js** - Query Builder SQL
- **SQLite** - Banco de dados

## Estrutura do Projeto

```
Query-Builder/
├── src/
│   ├── database/
│   │   ├── migrations/          # Migrações do banco
│   │   ├── seeds/              # Dados iniciais
│   │   ├── database.db         # Banco SQLite
│   │   └── knex.ts            # Configuração do Knex
│   └── server.ts              # Servidor Express
├── knexfile.ts                # Configuração do Knex
├── package.json
└── tsconfig.json
```

## Instalação e Execução

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar migrações:**
   ```bash
   npx knex migrate:latest --knexfile ./knexfile.ts
   ```

3. **Executar seeds (opcional):**
   ```bash
   npx knex seed:run --knexfile ./knexfile.ts
   ```

4. **Iniciar servidor:**
   ```bash
   npm run dev
   ```

O servidor estará rodando em `http://localhost:3333`

## API Endpoints

### Cursos
- `POST /courses` - Criar curso
- `GET /courses` - Listar cursos
- `PUT /courses/:id` - Atualizar curso
- `DELETE /courses/:id` - Deletar curso

### Módulos
- `POST /modules` - Criar módulo
- `GET /modules` - Listar módulos
- `GET /courses/:id/modules` - Listar módulos de um curso (com JOIN)

## Migrations

### Comandos Úteis:

```bash
# Listar migrations
npx knex migrate:list --knexfile ./knexfile.ts

# Executar migrations
npx knex migrate:latest --knexfile ./knexfile.ts

# Desfazer última migration
npx knex migrate:rollback --knexfile ./knexfile.ts

# Desfazer todas as migrations
npx knex migrate:rollback --all --knexfile ./knexfile.ts
```

## Seeds

```bash
# Criar seed
npx knex seed:make nome-da-seed --knexfile ./knexfile.ts

# Executar seeds
npx knex seed:run --knexfile ./knexfile.ts
```

## Query Builder vs ORM

**Query Builder:**
- Ferramenta para montar queries SQL programaticamente
- Mais flexível e próximo do SQL
- Permite queries complexas mantendo controle
- Você ainda pensa como SQL (select, join, where, order by)

**ORM:**
- Abstração completa do banco em objetos/classes
- Mais abstrato e próximo da POO
- Ideal para evitar escrever SQL
- Traduz objetos para SQL automaticamente

## Exemplos de Uso

### Insert
```typescript
await knex("courses").insert({ name: "Node.js" });
```

### Select
```typescript
const courses = await knex("courses").select().orderBy("name", "desc");
```

### Update
```typescript
await knex("courses").update({ name: "React" }).where({ id: 1 });
```

### Delete
```typescript
await knex("courses").delete().where({ id: 1 });
```

### Join
```typescript
const result = await knex("courses")
  .select("courses.name AS course", "course_modules.name AS module")
  .join("course_modules", "courses.id", "course_modules.course_id");
```

---

**Autor:** Nayara  
**Curso:** Full-Stack Rocketseat