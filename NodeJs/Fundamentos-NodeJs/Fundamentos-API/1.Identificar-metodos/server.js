import http from "node:http";

/* 
    Resposta do servidor com um status
    end() -> Finalizar resposta HTTP para o cliente
    writeHead() -> Método de status
*/

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === "GET" && url === "/products") {
    return response.writeHead(200).end("Lista de produtos!");
  }

  if (method === "POST" && url === "/products") {
    return response.writeHead(201).end("Produto cadastrado!");
  }

  return response.writeHead(404).end(`Rota não encontrada`);
});

server.listen(3333);
