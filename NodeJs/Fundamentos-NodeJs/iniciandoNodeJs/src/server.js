import http from "node:http";

/* Criação do servidor HTTP  */
const server = http.createServer((request, response) => {
  return response.end("Hello, World!");
});

/* Porta que o servidor escuta */
server.listen(3333);
