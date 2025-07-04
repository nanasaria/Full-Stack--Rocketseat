import { Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { z } from "zod";

class ProductsController {
  /**
   * index - GET para listar vários registros.
   * show - GET para exibir um registro específico.
   * create - POST para criar um registro.
   * update - PUT para atualizar um registro.
   * remove - DELETE para remover um registro
   */

  index(request: Request, response: Response) {
    const { id } = request.params;

    /* Parâmetros nomeados */
    const { page, limit } = request.query;

    response.send(`Produto ${id}\nPágina ${page} de ${limit}`);
  }

  create(request: Request, response: Response) {
    /**
     * DECLARAÇÃO DO SCHEMA
     * Por padrão do ZOD, todas as propriedades são opcionais,
     * mas quando colocamos o método nullish(), ele se torna
     * opcional.
     *
     * Padronizando Mensagens
     * Para padronizar mensagens, colocamos um objeto e
     * passamos a propriedade do erro.
     *
     * Adicionando regras de validação
     * Para adicionar regras de validação, colocamos um . ao
     * fim de uma regra e colocamos outra disponível no zod.
     *
     */
    const bodySchema = z.object({
      name: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(6, { message: "Name must be 6 or more characters" }),
      price: z
        .number({ required_error: "Price is required" })
        .positive({ message: "Price must be positive" }),
    });

    const { name, price } = bodySchema.parse(request.body);

    response.status(201).json({ name, price, user_id: request.user_id });
  }
}

export { ProductsController };
