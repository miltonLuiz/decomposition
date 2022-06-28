import { Router } from "express";
import { checkSchema } from "express-validator";

import { CalculateDecompositionController } from "@modules/decomposition/useCases/calculateByNumber/CalculateDecompositionController";
import { CalculateDecompositionUseCase } from "@modules/decomposition/useCases/calculateByNumber/CalculateDecompositionUseCase";
import calculateUserRules from "@modules/decomposition/validationRules/user/calculateUserRules";
import { ensureRequestBodyDoesNotHaveAnError } from "@shared/infra/http/middlewares/validation/ensureRequestBodyDoesNotHaveAnError";
import { ensureRequestBodyParamsAreValid } from "@shared/infra/http/middlewares/validation/ensureRequestBodyParamsAreValid";

const decompositionRoutes = Router();
const calculateDecompositionController = new CalculateDecompositionController();

decompositionRoutes.post(
  "/",
  ensureRequestBodyParamsAreValid(CalculateDecompositionUseCase.validParams),
  checkSchema(calculateUserRules),
  ensureRequestBodyDoesNotHaveAnError,
  calculateDecompositionController.handle
);

export { decompositionRoutes };
