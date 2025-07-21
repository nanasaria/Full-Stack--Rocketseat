# React Js - Iniciando

Estudos iniciais de React.js desenvolvidos durante o curso Full-Stack da Rocketseat.

## O que é React

React é uma biblioteca JavaScript criada e mantida pelo Facebook. Essa biblioteca permite criar interfaces interativas e dinâmicas, com uma abordagem declarativa. O React facilita a construção de componentes reutilizáveis que refletem mudanças de estado.

## Estrutura do Projeto

### Fundamentos-React
Anotações detalhadas sobre conceitos fundamentais do React:

#### Vite
- Ferramenta para criar projetos React
- Comando: `npm create vite@latest`

#### Estrutura de Pastas
- **public**: Imagens utilizadas de forma pública
- **assets**: Arquivos utilizados dentro do projeto
- **app.tsx**: Primeiro arquivo a ser renderizado
- **main.tsx**: Arquivo principal (de entrada)

#### Componentes
- Componentes são funções que começam com letra maiúscula
- São como peças de lego que podem ser encaixadas e reaproveitadas
- Um componente deve retornar apenas 1 elemento pai com seus filhos
- Benefícios: reutilização, produtividade, isolamento, legibilidade, redução de complexidade

#### Props e Propriedades
- Passagem de propriedades: `<Button name="Criar" />`
- Tipagem com TypeScript: `type Props = { name: string }`
- Extensão de propriedades HTML: `React.ComponentProps<"button">`
- Rest Operator para propriedades não declaradas

#### Estilização
- **CSS Global**: arquivo global.css para padronização
- **CSS Modules**: escopo local com `.module.css`
- **className**: usado no lugar de `class` (palavra reservada)
- Importação nomeada para CSS Modules: `import styles from "./styles.module.css"`

### Primeiro-Projeto
Jogo de adivinhação de palavras que aplica os conceitos estudados.

#### Funcionalidades Implementadas
- Sistema de pontuação baseado em acertos
- Dicas para descoberta das palavras
- Controle de tentativas com margem de erro
- Validação de letras já utilizadas
- Interface responsiva com CSS Modules
- Reinicialização do jogo com confirmação
- Estados gerenciados com useState
- Efeitos colaterais com useEffect

#### Conceitos Aplicados
- Componentização (Header, Button, Input, Letter, etc.)
- Gerenciamento de estado complexo
- Tipagem com TypeScript
- Props e comunicação entre componentes
- Hooks personalizados
- CSS Modules para estilização
- Ciclo de vida com useEffect

#### Tecnologias
- React 19.1.0 + TypeScript
- Vite (build tool)
- CSS Modules
- ESLint

#### Executar o Projeto
```bash
cd Primeiro-Projeto/vite-project
npm install
npm run dev
```

## Conceitos Fundamentais Estudados

### Hooks
- Permitem usar estados e recursos do React sem classes
- Padrão de nomenclatura: camelCase com "use" no início
- **useState**: adiciona variável de estado no componente
- **useEffect**: trabalha com ciclo de vida e efeitos colaterais
- Hooks personalizados: funções que encapsulam funcionalidades

### Estados e Renderizações
- **Render**: processo de exibição dos componentes
- Duas razões para renderização:
  1. Renderização inicial da aplicação
  2. Mudança de estado do componente
- Processo recursivo até não haver mais componentes aninhados
- React só altera DOM se houver diferença entre renderizações

### Ciclo de Renderização
1. **Acionar**: mudança de estado
2. **Renderizar**: React chama os componentes
3. **Comprometer-se**: aplicar mudanças no DOM

### useEffect
- Utilizado no ciclo de vida do componente
- Permite trabalhar com side-effects
- Deve estar dentro de um componente
- Possível ter múltiplos useEffect em diferentes contextos

### Arquivos Públicos
- Arquivos na pasta public ficam automaticamente disponíveis
- Acesso direto: `/nomeArquivo.extensao`
