# Node.Js - Gerenciando Dependências

## Versionamento Semântico

Padrão utilizado para identificar e comunicar alterações e compatibilidade entre as versões.

```
    1       .       12          .       7
  Major            Minor              Patch
```

### Tipos de Versão

- **Major** - Incompatibilidade: mudanças significativas que podem afetar a funcionalidade
- **Minor** - Novas funcionalidades compatíveis com versões anteriores
- **Patch** - Correções de bugs e pequenas melhorias

## Comandos Úteis

### Verificar pacotes desatualizados
```bash
npm outdated
# ou
npm out
```

### Atualizar para última versão
```bash
npm i express@latest
```

### Usando npm-check-updates
```bash
# Listar atualizações disponíveis
npx npm-check-updates

# Atualizar package.json
npx npm-check-updates -u
npm install

# Modo interativo
npx npm-check-updates --interactive --format group
```

## Recursos

- **Calculadora de compatibilidade**: [semver.npmjs.com](https://semver.npmjs.com)
- **Changelog**: Relatório detalhado das mudanças entre versões

---

**Autor:** Nayara Nasaria Soares
