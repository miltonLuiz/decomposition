import { Request, Response } from "express";

import { CalculateDecompositionUseCase } from "./CalculateDecompositionUseCase";

class CalculateDecompositionController {
  async handle(request: Request, response: Response) {
    const calculateUseCase = new CalculateDecompositionUseCase();
    const { numberToBeDecompose } = request.body;

    const decomposition = await calculateUseCase.execute({
      numberToBeDecompose,
    });
    return response.json(decomposition);
  }
}

export { CalculateDecompositionController };
