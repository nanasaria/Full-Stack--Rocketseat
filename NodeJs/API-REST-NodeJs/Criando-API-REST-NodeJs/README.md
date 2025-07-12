# Criando API REST com Node.js

Projeto evolutivo dividido em 3 etapas para aprender a criar APIs REST com Node.js, TypeScript e Express.

## Estrutura do Projeto

### 1. TypeScript
Configuração inicial do TypeScript com Node.js.

**Tecnologias:**
- Node.js
- TypeScript
- TSX para desenvolvimento

**Conceitos abordados:**
- Configuração do TypeScript (tsconfig.json)
- Compilação e execução de arquivos .ts
- NPX vs NPM
- Servidor básico com Node.js

### 2. Express
Implementação de API REST usando Express.js com arquitetura organizada.

**Tecnologias:**
- Express.js
- TypeScript
- Node.js

**Estrutura:**
```
src/
├── controllers/     # Lógica de negócio
├── middlewares/     # Interceptadores
├── routes/          # Sistema de rotas
├── types/           # Tipagens customizadas
├── utils/           # Utilitários (tratamento de erros)
└── server.ts        # Servidor principal
```

**Funcionalidades:**
- Controllers organizados (ProductsController)
- Middlewares globais e locais
- Sistema de rotas estruturado
- Tratamento de erros customizado (AppError)
- Tipagem personalizada para Request
- Validações de entrada

**Conceitos REST:**
- Princípios da arquitetura REST
- Client-Server, Stateless, Resource-Based
- Métodos HTTP (GET, POST, PUT, DELETE)
- Códigos de status HTTP (400, 500)
- Sistema em camadas

### 3. Schema Validation
Adição de validação de dados usando Zod.

**Tecnologias:**
- Zod para validação de esquemas
- Express.js
- TypeScript

**Funcionalidades:**
- Validação de dados de entrada
- Esquemas de validação pré-definidos
- Middleware de validação
- Tratamento de erros de validação

## Conceitos Fundamentais

### API REST
- **REST**: Representational State Transfer
- **Stateless**: Cada requisição contém todas as informações necessárias
- **Resource-Based**: Recursos claramente identificados
- **Client-Server**: Separação de responsabilidades
- **Sistema em camadas**: Organização modular

### Express.js
- Framework web minimalista e flexível
- Métodos utilitários HTTP
- Sistema de roteamento
- Middlewares para interceptação de requisições

### Middlewares
- **Global**: Aplicado a todas as rotas
- **Local**: Aplicado a rotas específicas
- **next()**: Passa controle para próximo middleware

### Controllers
Padrão de organização com métodos:
- **index**: GET para listar vários registros
- **show**: GET para exibir um registro específico
- **create**: POST para criar um registro
- **update**: PUT para atualizar um registro
- **remove**: DELETE para remover um registro

### Tratamento de Erros
- Classe AppError customizada
- Middleware global de tratamento de erros
- Códigos de status apropriados
- Mensagens de erro padronizadas

## Como Executar

### Pré-requisitos
- Node.js instalado
- npm ou yarn

### Instalação
1. Navegue até a pasta desejada (1. Typescript, 2. Express, ou 3. SchemaValidation)
2. Instale as dependências:
   ```bash
   npm install
   ```

### Execução
```bash
npm run dev
```

O servidor estará rodando em `http://localhost:3333`

## Endpoints de Exemplo

### GET /products/:id
- Listar produto específico
- Parâmetros de rota: id
- Query parameters: page, limit

### POST /products
- Criar novo produto
- Body: { name, price }
- Validações:
  - Nome obrigatório (mínimo 6 caracteres)
  - Preço obrigatório (não pode ser negativo)

## Estrutura de Arquivos

### TypeScript (Etapa 1)
```
1. Typescript/
├── src/
│   └── server.ts
├── package.json
└── tsconfig.json
```

### Express (Etapa 2)
```
2. Express/
├── src/
│   ├── controllers/
│   │   └── ProductsController.ts
│   ├── middlewares/
│   │   └── myMiddleware.ts
│   ├── routes/
│   │   ├── index.ts
│   │   └── productsRoutes.ts
│   ├── types/
│   │   └── request.d.ts
│   ├── utils/
│   │   └── AppError.ts
│   └── server.ts
├── package.json
└── tsconfig.json
```

### Schema Validation (Etapa 3)
```
3. SchemaValidation/
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   ├── types/
│   ├── utils/
│   └── server.ts
├── package.json (inclui Zod)
└── tsconfig.json
```

## Dependências Principais

### Desenvolvimento
- `@types/express`: Tipagens do Express
- `@types/node`: Tipagens do Node.js
- `tsx`: Executor TypeScript
- `typescript`: Compilador TypeScript

### Produção
- `express`: Framework web
- `zod`: Validação de esquemas (etapa 3)

## Progressão de Aprendizado

1. **Fundamentos**: Configuração TypeScript + Node.js
2. **Estrutura**: Organização com Express, controllers e middlewares
3. **Validação**: Implementação de validação de dados

Cada etapa constrói sobre a anterior, demonstrando a evolução natural no desenvolvimento de APIs REST.

---

**Autor:** Nayara Nasaria Soares