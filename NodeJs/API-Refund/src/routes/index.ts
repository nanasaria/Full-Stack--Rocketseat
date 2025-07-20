import { Router } from "express";

import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";

import { sessionsRoutes } from "./sessions-routes";
import { uploadsRoutes } from "./uploads-routes";
import { usersRoutes } from "./users-routes";
import { refundsRoutes } from "./refunds-routes";

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/sessions", sessionsRoutes);

/**
 * Aplica o middleware para todas as rotas abaixo.
 */
routes.use(ensureAuthenticated);
routes.use("/refunds", refundsRoutes);
routes.use("/uploads", uploadsRoutes);

export { routes };
