import http from "node:http";

import { jsonHandler } from "./middlewares/jsonHandler.js";
import { routeHandler } from "./middlewares/routeHandler.js";

function listener(request, response) {
  jsonHandler(request, response);
}

http.createServer(listener).listen(3333);
