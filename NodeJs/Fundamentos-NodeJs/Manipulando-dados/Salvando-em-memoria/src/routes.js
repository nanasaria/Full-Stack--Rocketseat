import { parseRoutePath } from "./utils/parseRoutePath.js";

export const routes = [
  {
    method: "GET",
    path: "/products",
    controller: ({ request, response, database }) => {
      const products = database.select("products");
      return response.writeHead(200).end(JSON.stringify(products));
    },
  },
  {
    method: "POST",
    path: "/products",
    controller: ({ request, response, database }) => {
      const { name, price } = request.body;

      database.insert("products", { name, price });
      return response.writeHead(201).end();
    },
  },
  {
    method: "DELETE",
    /* Para passar parâmetro em rota, é só utilizar :parametro */
    path: "/products/:1",
    controller: ({ request, response }) => {
      return response.end("Produto removido com ID: " + request.params.id);
    },
  },
].map((route) => ({
  ...route,
  path: parseRoutePath(route.path),
}));
