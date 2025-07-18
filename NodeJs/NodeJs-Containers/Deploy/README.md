# Node.Js - Deploy

Conceitos e práticas de deploy de aplicações Node.js.

## Ambientes

**Desenvolvimento:** Onde se cria e testa a aplicação no próprio computador.

**Produção:** Onde se coloca a aplicação em um servidor para manter sua aplicação sempre disponível.

O processo de deploy é colocar o projeto desenvolvido em ambiente de desenvolvimento no ambiente de produção.

## Configuração para Deploy

### Engine no package.json
Antes de executar o build, definir a engine para especificar a versão mínima do Node:

```json
"engines": {
    "node": ">=18"
}
```

### Build com TypeScript
Para converter TypeScript para JavaScript, utilizar a lib `tsup`:

```json
"build": "tsup src"
```

Para definir pasta de build customizada:
```json
"build": "tsup src --out-dir build"
```

## Render - Plataforma de Deploy

Plataforma que permite hospedar aplicações back-end e banco de dados no plano gratuito (banco expira em 90 dias).

### Criação do Banco de Dados
1. Acessar dashboard do Render
2. Criar nova instância
3. Definir nome e região (escolher região próxima para diminuir latência)
4. Selecionar versão do PostgreSQL
5. Optar pela versão gratuita

### URLs do Banco
- **URL INTERNA:** Quando aplicação também está hospedada no Render
- **URL EXTERNA:** Quando aplicação NÃO está hospedada no Render

### Deploy da Aplicação
1. Acessar Dashboard do Render
2. Clicar em + New
3. Selecionar Web Service
4. Selecionar projeto do GitHub
5. Conectar e configurar:
   - Nome, linguagem Node, Branch, região
   - **Build Command:** `npm install && npm run build && npx prisma migrate deploy`
   - **Start Command:** `npm start`
   - Definir variáveis de ambiente
6. Deploy Web Service

### Atualizações
Para deploy de atualizações, apenas realizar commit na branch escolhida. O Render identificará a mudança e fará build automaticamente.

---

**Autor:** Nayara Nasaria Soares
