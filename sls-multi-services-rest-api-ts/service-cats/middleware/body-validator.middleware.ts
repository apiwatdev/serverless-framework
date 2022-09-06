import { NextFunction, Request, Response } from "express";
import { HttpException } from "../exceptions";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
export function BodyValidateMiddleware(DtoClass: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    const dto = plainToInstance(DtoClass, body);
    validate(dto)
      .then((errors) => {
        console.log(errors)
        if (errors.length > 0) {
          throw new HttpException(400, "Bad Request.", errors);
        }

        next();
      })
      .catch((error) => {
        next(error);
      });
  };
}
