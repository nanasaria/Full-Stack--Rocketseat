# Testes Automatizados

Estudo sobre testes automatizados em Node.js utilizando Jest e TypeScript.

## Conceitos

Testes automatizados permitem identificar erros durante o desenvolvimento e assegurar a qualidade e funcionamento correto da aplicação. É a utilização de ferramentas para automatizar processo manual de revisão e validação.

## Tipos de Testes

**Teste de Unidade**: Testa unidades individuais do código, como funções específicas.

**Teste End-to-End (E2E)**: Simula a experiência real do usuário, testando o fluxo completo da aplicação.

## Estrutura do Projeto

```
projeto-testes/
├── src/
│   ├── sum.ts              # Função de exemplo
│   ├── sum.test.ts         # Testes unitários
│   ├── products.test.ts    # Testes de integração
│   ├── app.ts              # Aplicação Express
│   └── server.ts           # Servidor
├── jest.config.ts          # Configuração do Jest
└── package.json
```

## Nomenclatura

- `<nome>.test.ts` - Para testes unitários, integração e e2e
- `<nome>.spec.ts` - Para especificações de comportamento (BDD)

## Comandos

```bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm run test:dev

# Executar teste específico
npx jest <caminho-do-arquivo>
```

## Principais Métodos

- `describe()` - Agrupa testes relacionados
- `test()` ou `it()` - Define um teste individual
- `expect()` - Define expectativas do resultado
- `beforeAll()` - Executa antes de todos os testes
- `afterAll()` - Executa após todos os testes

## Tecnologias

- Jest
- TypeScript
- Supertest (para testes de API)
- ts-jest

---

**Autor:** Nayara Nasaria Soares
