import { NextFunction, Request, Response } from "express";

import { AppError } from "./AppError";

export default (
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      statusCode: err.statusCode,
      message: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error`,
  });
};
