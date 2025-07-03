import http from "node:http";

const server = http.createServer(async (request, response) => {
  const { method, url } = request;

  if (method === "GET" && url === "/products") {
    return response.writeHead(200).end("Lista de produtos!");
  }

  /*
  Vamos supor que no body estamos enviando:
    {
      "name":"Teclado",
      "price":120.50
    }
  */

  if (method === "POST" && url === "/products") {
    /* Concatenar pedaços que recebemos */
    const buffers = [];

    /* Para cada pedaço, colocamos em buffers */
    for await (const chunk of request) {
      buffers.push(chunk);
    }

    /* Juntar os pedaços */
    const joined = Buffer.concat(buffers).toString();

    return response.writeHead(201).end("Produto cadastrado!" + joined);
  }

  return response.writeHead(404).end(`Rota não encontrada`);
});

server.listen(3333);
