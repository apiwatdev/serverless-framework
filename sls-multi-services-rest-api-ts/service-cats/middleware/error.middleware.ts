import { NextFunction, Request, Response } from "express";
import { HttpException } from "../exceptions";

export async function ErrorMiddleware(
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const status = error?.status || 500;
  const message = error?.message || "Internal Server Error";
  const errors = error?.errors;
  const responseError = {
    status,
    message,
    errors,
  };

  !errors ? delete responseError.errors : null;
  
  return res.status(status).send(responseError);
}
