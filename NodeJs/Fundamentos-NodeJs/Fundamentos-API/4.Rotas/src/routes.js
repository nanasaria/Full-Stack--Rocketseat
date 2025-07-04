import { parseRoutePath } from "./utils/parseRoutePath.js";

export const routes = [
  {
    method: "GET",
    path: "/products",
    controller: (request, response) => {
      return response.writeHead(200).end(JSON.stringify(request.query));
    },
  },
  {
    method: "POST",
    path: "/products",
    controller: (request, response) => {
      return response.writeHead(201).end(JSON.stringify(request.body));
    },
  },
  {
    method: "DELETE",
    /* Para passar parâmetro em rota, é só utilizar :parametro */
    path: "/products/:1",
    controller: (request, response) => {
      return response.end("Produto removido com ID: " + request.params.id);
    },
  },
].map((route) => ({
  ...route,
  path: parseRoutePath(route.path),
}));
