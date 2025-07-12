# Estudo sobre Bundlers

Este repositório é dedicado ao estudo de bundlers, com foco principal na configuração e uso do **Webpack** para empacotar aplicações JavaScript modernas.

## Objetivo

Compreender o funcionamento de um bundler e como ele organiza, transforma e otimiza os arquivos de um projeto front-end. O foco deste estudo não está na construção da interface ou da lógica da aplicação, mas sim no processo de *build* e empacotamento dos arquivos.

## Ferramenta utilizada

- **Webpack**: Responsável por agrupar módulos JavaScript, importar estilos, processar arquivos e gerar a versão final da aplicação.
- **Babel**: Utilizado em conjunto com o Webpack para transpilar código JavaScript moderno para versões mais compatíveis.
- **Dev Server**: Fornece um ambiente de desenvolvimento com recarregamento automático.

## Estrutura Básica

- `src/js/index.js`: Ponto de entrada da aplicação.
- `src/js/components.js`: Componente JavaScript simples.
- `src/css/styles.css`: Estilo aplicado à página.
- `dist/`: Saída gerada pelo Webpack.

## Configuração do Webpack

```js
module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist", "index.html"),
    },
    port: 3000,
  },
  plugins: [new HTMLWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        exclude: "/node_modules",
      },
      {
        test: /\.js$/i,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
        exclude: "/node_modules",
      },
    ],
  },
};
```

## Scripts disponíveis

```json
"scripts": {
  "build": "webpack",
  "dev": "webpack serve"
}
```

- `build`: Gera os arquivos otimizados na pasta `dist/`.
- `dev`: Inicia o servidor de desenvolvimento na porta 3000.

## Considerações

Este projeto não tem como foco a interface ou funcionalidades específicas do código, mas sim o funcionamento de uma ferramenta essencial no desenvolvimento moderno: o bundler. Através dessa prática, é possível entender a importância da configuração, transformação e empacotamento dos arquivos para ambientes de desenvolvimento e produção.

---

**Autor:** Nayara Nasaria Soares