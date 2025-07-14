# Autenticação e Autorização

Estudo sobre implementação de autenticação e autorização em Node.js utilizando JWT (JSON Web Token).

## JWT - JSON Web Token

Padrão de mercado que define um token no formato JSON para troca de informações de forma segura e compacta.

### Composição do Token JWT

| Header | Payload | Verify Signature |
|--------|---------|------------------|
| Algoritmo e tipo do Token | Conteúdo do Token | Assinatura que garante a integridade |

### Onde usar JWT

Cenário de autorização: após o usuário estar conectado, cada requisição é verificada para confirmar se inclui o JWT e se o usuário tem autorização para acessar os recursos da API.

## Conceitos Fundamentais

### Autenticação
Processo de verificar a identidade de um usuário - provar que a pessoa é quem ela diz ser.

**Exemplo**: Usuário faz login fornecendo credenciais (e-mail e senha). Se válidas, o usuário é autenticado.

### Autorização
Define o que um usuário autenticado pode ou não fazer dentro do sistema. Verifica permissões baseadas no papel (role) do usuário.

**Exemplo**: Usuário autenticado pode não ter permissão para acessar painel administrativo ou excluir dados.

## Implementação

O projeto `fullstack-auth-template` demonstra:

### Estrutura
- **Controllers**: Gerenciam sessões e produtos
- **Middlewares**: 
  - `ensureAuthenticated`: Verifica se usuário está autenticado
  - `verifyUserAuthorization`: Verifica permissões específicas
- **Routes**: Rotas protegidas e públicas
- **Configs**: Configurações de autenticação

### Dependências Principais
- `jsonwebtoken`: Geração e validação de tokens JWT
- `express`: Framework web
- `typescript`: Tipagem estática

### Fluxo de Autenticação
1. Usuário faz login com credenciais
2. Sistema valida credenciais
3. Token JWT é gerado e retornado
4. Cliente inclui token nas requisições subsequentes
5. Middleware verifica token e autoriza acesso

---

**Autor:** Nayara Nasaria Soares
