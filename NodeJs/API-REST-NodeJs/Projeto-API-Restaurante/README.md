# API REST - Projeto Restaurante

API para gerenciar pedidos das mesas de um restaurante desenvolvida com Node.js, TypeScript e SQLite.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset do JavaScript
- **Express** - Framework web
- **Knex.js** - Query builder SQL
- **SQLite** - Banco de dados
- **Zod** - Validação de dados

## 📁 Estrutura do Projeto

```
src/
├── controllers/          # Controladores das rotas
│   ├── orders-controller.ts
│   ├── products-controller.ts
│   ├── tables-controller.ts
│   └── tables-sessions-controller.ts
├── database/            # Configuração do banco
│   ├── migrations/      # Migrações do banco
│   ├── seeds/          # Dados iniciais
│   ├── types/          # Tipos TypeScript
│   └── knex.ts         # Configuração Knex
├── middlewares/         # Middlewares
│   └── error-handling.ts
├── routes/             # Definição das rotas
│   ├── index.ts
│   ├── orders-routes.ts
│   ├── products-routes.ts
│   ├── tables-routes.ts
│   └── tables-sessions-routes.ts
├── utils/              # Utilitários
│   └── AppError.ts
└── server.ts           # Servidor principal
```

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Executar migrações
npm run knex migrate:latest

# Executar seeds (opcional)
npm run knex seed:run

# Iniciar servidor em desenvolvimento
npm run dev
```

## 📡 Endpoints

A API roda em `http://localhost:3333` e possui endpoints para:

- **Produtos** - Gerenciar cardápio
- **Mesas** - Gerenciar mesas do restaurante
- **Sessões de Mesa** - Controlar ocupação das mesas
- **Pedidos** - Gerenciar pedidos dos clientes

---

**Autor:** Nayara N. Soares