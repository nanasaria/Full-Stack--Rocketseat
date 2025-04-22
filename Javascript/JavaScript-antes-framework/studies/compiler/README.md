# Estudo sobre Compiladores

Este repositório contém um estudo introdutório sobre compiladores, utilizando o Babel para demonstrar a transpilação de código JavaScript moderno para versões compatíveis com navegadores mais antigos.

## Objetivo

Explorar o processo de compilação (neste caso, transpilação) com Babel, entendendo como o código moderno é convertido para versões mais compatíveis, destacando os conceitos fundamentais de compiladores, como análise, transformação e geração de código.

## Estrutura do Projeto

- **main.js**: Arquivo principal contendo a classe `User`, escrita com sintaxe moderna.
- **.babelrc / babel.config.js**: Arquivo de configuração do Babel.
- **dist/**: Pasta de saída com o código transpilado.
- **index.html**: Arquivo HTML que importa o código gerado.

## Configuração do Babel

```js
const presets = [
  "@babel/preset-env",
  {
    targets: {
      edge: "17",
      firefox: "60",
      chrome: "67",
      safari: "11.1",
    },
  },
];

module.exports = { presets };
```

## Scripts disponíveis

```json
"scripts": {
  "build": "babel main.js --out-dir dist",
  "dev": "babel main.js --watch --out-dir dist"
}
```

- `build`: Compila o arquivo uma vez.
- `dev`: Compila em tempo real sempre que há mudanças.

## Exemplo de Código

```js
class User {
  constructor({ user, email }) {
    this.user = user;
    this.email = email;
  }

  sendMessage() {
    console.log(
      `Mensagem enviada para: ${this.email} que pertence à ${this.user}`
    );
  }
}

let user = new User({ user: "Lana del rey", email: "lanadelrey@gmail.com" });
user.sendMessage();
```

## Considerações

Embora o Babel não seja um compilador no sentido tradicional (como os de linguagens como C ou Java), ele realiza etapas fundamentais de um compilador: parsing, transformação e geração de código. Esse estudo serve como uma introdução prática ao funcionamento interno de um compilador moderno voltado para JavaScript.