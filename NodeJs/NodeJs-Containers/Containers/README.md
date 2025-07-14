# Containers

Projetos de estudo sobre Docker e containerização com Node.js.

## Conceitos Docker

### O que é Docker?
Sistema de virtualização não convencional que proporciona um ambiente isolado com os recursos que a aplicação precisa para funcionar.

### Principais Conceitos
- **Dockerfile**: Contém todas as informações necessárias para gerar a imagem docker
- **Imagem**: Contém as informações de um ambiente com tudo que a aplicação precisa para executar
- **Container**: É a instância de uma imagem em execução
- **Host**: Máquina onde executamos os containers
- **DockerHub**: Repositório de imagens disponíveis

### Comandos Essenciais

**Gerenciamento de Containers:**
```bash
# Visualizar containers em execução
docker ps

# Visualizar todos os containers
docker ps -a

# Executar e criar container
docker run -p 3333:3333 <nome-imagem>

# Executar em background
docker run -p 3333:3333 -d <nome-imagem>

# Iniciar container existente
docker start <id-container>

# Parar container
docker stop <id-container>

# Remover container
docker rm <id-container>
```

**Gerenciamento de Imagens:**
```bash
# Visualizar imagens
docker image ls

# Criar imagem com tag
docker build -t <nome-imagem>:v1 .

# Remover imagem
docker rmi <id-imagem>
```

**Volumes:**
```bash
# Criar volume
docker volume create <nome-volume>

# Executar com volume
docker run -v <nome-volume>:<diretorio> -p 3333:3333 -d <imagem>

# Listar volumes
docker volume ls

# Remover volume
docker volume rm <nome-volume>
```

## Projetos

### fullstack-docker-api
API simples em Node.js/TypeScript configurada para rodar em container Docker.

**Tecnologias:**
- Node.js
- TypeScript
- Docker

**Scripts:**
- `npm run dev` - Desenvolvimento com tsx watch
- `npm run build` - Build do TypeScript
- `npm run start` - Execução em produção

### postgreSQL-Docker
API Node.js com banco PostgreSQL usando Docker Compose.

**Tecnologias:**
- Node.js
- TypeScript
- Docker
- Docker Compose
- PostgreSQL

**Configuração:**
- API na porta 3333
- PostgreSQL na porta 5432
- Volume persistente para dados

**Comandos:**
```bash
# Subir os containers
docker-compose up -d

# Parar os containers
docker-compose down
```

### annotations
Anotações e exemplos sobre conceitos de containers.

## Estrutura

```
Containers/
├── annotations/           # Anotações sobre containers
├── fullstack-docker-api/  # API simples com Docker
├── postgreSQL-Docker/     # API com PostgreSQL e Docker Compose
└── README.md
```

---

**Autor:** Nayara Nasaria Soares
