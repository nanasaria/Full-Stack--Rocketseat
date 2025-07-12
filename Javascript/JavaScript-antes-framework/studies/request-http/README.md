# Estudando Fetch API

Cadastrar produtos e listá-los a partir de uma API local utilizando **HTML** e **JavaScript (Fetch API)**.

## Estrutura do Projeto

```
.
├── index.html       # Página com o formulário para cadastro
├── main.js          # Script com as requisições para a API
└── db.json          # Arquivo simulado da API (usado com json-server)
```

## Tecnologias Utilizadas

- HTML
- JavaScript
- Fetch API
- [JSON Server](https://github.com/typicode/json-server) (para simular a API REST)

## Como Rodar o Projeto

1. **Instale o JSON Server**

```bash
npm install -g json-server
```

2. **Crie um arquivo `db.json`** com o seguinte conteúdo:

```json
{
  "products": [
    {
      "id": "1",
      "name": "Mouse",
      "price": 150.25
    },
    {
      "id": "2",
      "name": "Teclado",
      "price": 90
    },
    {
      "id": "3",
      "name": "Monitor",
      "price": 500
    }
  ]
}
```

3. **Inicie o servidor JSON**

```bash
json-server --watch db.json --port 3333
```

4. **Abra o `index.html` no navegador**

## Funcionalidades

### Listar produtos

```js
const response = await fetch("http://localhost:3333/products");
const data = await response.json();
console.log(data);
```

### Buscar produto por ID

```js
const response = await fetch(`http://localhost:3333/products/${id}`);
const data = await response.json();
console.log(data);
```

### Cadastrar novo produto

```js
await fetch("http://localhost:3333/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    id: new Date().getTime().toString(),
    name: productName.value,
    price: productPrice.value,
  }),
});
```

## Observações

- O ID é gerado automaticamente com base no timestamp.
- Os dados inseridos no formulário são enviados como JSON.
- Após o cadastro, os produtos são listados novamente no console.

## Exemplo de Requisição

```json
POST http://localhost:3333/products
{
  "id": "1745283060575",
  "name": "Mousepad",
  "price": "24"
}
```

---

**Autor:** Nayara Nasaria Soares
```
