import { NextFunction, Request, Response } from "express";

import { AppError } from "../../../../errors/AppError";

export const ensureRequestBodyParamsAreValid = (validParams: string[]) => {
  return (request: Request, response: Response, next: NextFunction) => {
    const requestBodyParameters = Object.keys(request.body);
    if (requestBodyParameters.length === 0) {
      const message = `${
        validParams.length > 1
          ? "Valid parameters are missing:"
          : "This valid parameter is missing:"
      }`;
      throw new AppError(
        `The parameters are required. ${message} '${validParams}'`
      );
    }

    const invalidParameters = requestBodyParameters.filter(
      (param) => !validParams.includes(param)
    );
    if (invalidParameters.length) {
      const message = `${invalidParameters.length > 1 ? "These" : "This"} ${
        invalidParameters.length > 1 ? "parameters" : "parameter"
      } '${invalidParameters.toString()}' ${
        invalidParameters.length > 1 ? "are" : "is"
      } invalid`;
      throw new AppError(message);
    }

    next();
  };
};
