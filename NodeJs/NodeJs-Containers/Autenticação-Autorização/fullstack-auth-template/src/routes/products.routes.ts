import { Router } from "express";
import { ProductsController } from "@/controllers/products-controller";

import { ensureAuthenticated } from "@/middlewares/ensureAuthenticated";
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization";

const productsRoutes = Router();
const productsController = new ProductsController();

/**
 * Autorização em todas as rotas de productsRoutes
 * productsRoutes.use(verifyUserAuthorization(["customer"]));
 */

productsRoutes.get("/", productsController.index);

/* Autorização em rota específica */
productsRoutes.post(
  "/",
  ensureAuthenticated,
  verifyUserAuthorization(["customer"]),
  productsController.create
);

export { productsRoutes };
