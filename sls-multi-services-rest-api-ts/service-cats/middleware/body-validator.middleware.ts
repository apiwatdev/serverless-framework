import { NextFunction, Request, Response } from "express";
import { HttpException } from "../exceptions";

export function BodyValidateMiddleware<T>(dto: T) {
  return (req: Request, res: Response, next: NextFunction) => {

    if(true){
        throw new HttpException(400,'Bad Request.')
    }


    next();
  };
}
