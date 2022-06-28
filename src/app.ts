import express from "express";
import "express-async-errors";

import { decompositionRoutes } from "./routes/decomposition.routes";
import handler from "./shared/errors/handler";

const app = express();

app.use(express.json());

app.use("/decomposition", decompositionRoutes);

app.use(handler);

export { app };
