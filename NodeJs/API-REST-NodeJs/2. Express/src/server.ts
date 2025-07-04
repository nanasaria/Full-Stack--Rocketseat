import express, { Request, Response, NextFunction } from "express";
import { routes } from "./routes";
import { AppError } from "./utils/AppError";

const PORT = 3333;

const app = express();
/* Indicando para o express que utilizaremos JSON */
app.use(express.json());

app.use(routes);

/* Qualquer requisição feita, passa por esse middleware 
    Middleware global
    app.use(myMiddleware);
 */
app.get("/", (request, response) => {
  response.send("Hello World!");
});

/**
 * Erro do Cliente -> 400 (Bad Request)
 * Erro do Servidor -> 500 (Internal Server Error)
 */
app.use((error: any, request: Request, response: Response, _: NextFunction) => {
  /* Se o erro for gerado utilizando a classe AppError, faça */
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message });
  }

  response.status(500).json({ message: error.message });
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
