import http from "node:http";

const products = [
  { id: 1, name: "Camiseta", price: 29.99 },
  { id: 2, name: "Calça Jeans", price: 89.9 },
  { id: 3, name: "Tênis", price: 149.5 },
  { id: 4, name: "Jaqueta", price: 199.99 },
  { id: 5, name: "Boné", price: 39.0 },
  { id: 6, name: "Relógio", price: 249.99 },
  { id: 7, name: "Meia", price: 9.9 },
  { id: 8, name: "Mochila", price: 119.0 },
  { id: 9, name: "Óculos de Sol", price: 79.9 },
  { id: 10, name: "Carteira", price: 59.5 },
];

const app = http.createServer((request, response) => {
  if (request.method === "GET" && request.url === "/products") {
    response.end(JSON.stringify(products));
  }
});

export { app };
