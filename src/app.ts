import express from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import { decompositionRoutes } from "./routes/decomposition.routes";
import handler from "./shared/errors/handler";
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/decomposition", decompositionRoutes);

app.use(handler);

export { app };
