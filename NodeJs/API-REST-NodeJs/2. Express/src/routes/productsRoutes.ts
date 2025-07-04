import { Router } from "express";
import { myMiddleware } from "../middlewares/myMiddleware";
import { ProductsController } from "../controllers/ProductsController";

const productsRoutes = Router();
const productsController = new ProductsController();

/* O nome que utilizamos como parâmetro é o que recuperamos */
productsRoutes.get("/:id", productsController.index);

/* 
Dados no corpo da requisição 
Para executar middleware local, é só colocá-lo após a 
virgula.
*/
productsRoutes.post("/", myMiddleware, productsController.create);

export { productsRoutes };
