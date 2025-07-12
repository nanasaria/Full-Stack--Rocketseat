# Fundamentos Node.js

## O que é Node.js?

O Node.js **não é uma linguagem de programação**. É um ambiente de execução JavaScript fora do navegador, baseado no V8 JavaScript Engine do Google Chrome.

## Funcionamento

### Single Thread
- Node.js possui uma única thread principal que executa código JavaScript
- Responsável por lidar com requisições, executar funções e gerenciar operações de I/O
- Utiliza **non-blocking I/O** - não fica bloqueado esperando operações terminarem

### Call Stack
- Pilha onde funções são executadas
- Node executa função no topo da pilha
- Remove função quando termina e passa para próxima

### Event Loop
- Monitora Call Stack e fila de eventos (event queue)
- Se Call Stack vazia, pega próxima tarefa da fila de eventos
- Coloca na Call Stack para execução

### Arquitetura
```
Cliente → Event Loop → Call Stack/Event Queue → Resposta
```

## Importação

- **CommonJS**: Importação padrão do Node.js
- **ES Modules**: Importação usando import/export

## API (Application Programming Interface)

Interface que oferece funcionalidades sem necessidade de saber como foram implementadas.

### Métodos HTTP
- `GET` - Leitura
- `POST` - Criação  
- `PUT` - Atualizar
- `DELETE` - Deletar
- `PATCH` - Atualização parcial

### Status Codes HTTP
- `1xx` - Respostas informativas
- `2xx` - Sucesso
- `3xx` - Redirecionamento
- `4xx` - Erro do cliente
- `5xx` - Erro no servidor

## Conceitos Importantes

### Middleware
Interceptador que pode:
- Executar código
- Modificar objetos de requisição e resposta
- Encerrar ciclo de solicitação-resposta
- Tem acesso à requisição e resposta

### Parâmetros Nomeados
```
http://localhost:3333/products?category=computer&price=5000
```
- Utilizados para filtrar, paginar
- Dados NÃO obrigatórios
- Não passar dados sensíveis

### Estratégias para Salvar Dados

1. **Em Memória**: Dados se perdem ao reiniciar (usado para testes)
2. **Arquivo**: Arquivos JSON para dados permanentes
3. **Database**: Bancos de dados para armazenamento permanente

## Estrutura dos Projetos

### 1. Iniciando Node.js
- Servidor HTTP básico
- Resposta "Hello, World!"

### 2. Fundamentos API
- **Identificar Métodos**: GET/POST com diferentes rotas
- **Recuperar Dados**: Manipulação de dados da requisição
- **Middleware**: Interceptadores para JSON e rotas
- **Rotas**: Sistema de roteamento com parâmetros

### 3. Manipulando Dados
- **Em Memória**: Armazenamento temporário
- **Em Arquivos**: Persistência em JSON

### 4. Primeiro Projeto
Sistema de tickets com:
- Controllers organizados
- Database personalizado
- Middlewares para JSON e rotas
- Sistema de rotas completo
- Operações CRUD

## Notações Comuns (CRUD)
- **CREATE** - Criar
- **INDEX** - Listar
- **SHOW** - Exibir 1 único registro
- **UPDATE** - Atualizar
- **REMOVE** - Remover

## Exemplo Básico

```javascript
import http from "node:http";

const server = http.createServer((request, response) => {
  const { method, url } = request;
  
  if (method === "GET" && url === "/products") {
    return response.writeHead(200).end("Lista de produtos!");
  }
  
  return response.writeHead(404).end("Rota não encontrada");
});

server.listen(3333);
```

---

**Autor:** Nayara Nasaria Soares
