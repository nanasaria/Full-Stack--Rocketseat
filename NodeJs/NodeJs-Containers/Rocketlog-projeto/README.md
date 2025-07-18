# Rocketlog - API de Entregas

**IMPORTANTE:** Este projeto foi desenvolvido durante as aulas do curso Full-Stack da RocketSeat como material de estudo. Não é um projeto de autoria própria.

## Sobre o Projeto

API REST para gerenciamento de entregas de encomendas, desenvolvida com Node.js, TypeScript e PostgreSQL. O sistema permite o controle de usuários, entregas e logs de acompanhamento.

## Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset do JavaScript
- **Express** - Framework web
- **Prisma** - ORM para banco de dados
- **PostgreSQL** - Banco de dados relacional
- **Docker** - Containerização
- **JWT** - Autenticação
- **Bcrypt** - Criptografia de senhas
- **Jest** - Testes unitários
- **Zod** - Validação de dados

## Estrutura do Projeto

```
src/
├── configs/          # Configurações (auth)
├── controllers/      # Controladores das rotas
├── database/         # Configuração do Prisma
├── middlewares/      # Middlewares (auth, error handling)
├── routes/           # Definição das rotas
├── tests/            # Testes unitários
├── types/            # Tipos TypeScript
├── utils/            # Utilitários (AppError)
├── app.ts           # Configuração do Express
├── env.ts           # Validação de variáveis de ambiente
└── server.ts        # Servidor principal
```

## Funcionalidades

### Usuários
- Cadastro de usuários
- Autenticação com JWT
- Dois tipos de usuário: `customer` e `sale`

### Entregas
- Criação de entregas
- Atualização de status (`processing`, `shipped`, `delivered`)
- Listagem de entregas

### Logs de Entrega
- Registro de logs para acompanhamento
- Histórico detalhado de cada entrega

## Como Executar

### Pré-requisitos
- Node.js
- Docker e Docker Compose

### Instalação

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   ```bash
   cp .env.example .env
   ```

4. Inicie o banco de dados com Docker:
   ```bash
   docker-compose up -d
   ```

5. Execute as migrações do banco:
   ```bash
   npx prisma migrate dev
   ```

6. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

### Testes

Para executar os testes:
```bash
npm run test:dev
```

## Banco de Dados

O projeto utiliza PostgreSQL com as seguintes tabelas:
- **users** - Usuários do sistema
- **delivery** - Entregas
- **delivery_logs** - Logs das entregas

## Autor do Curso

**RocketSeat** - Curso Full-Stack

---

**Nota:** Este é um projeto educacional desenvolvido durante as aulas da RocketSeat para fins de aprendizado.