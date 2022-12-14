import serverless from "serverless-http";
import express, { Express, json, NextFunction, Request, Response } from "express";
import { CatsController } from "./src/cats/cats.controller";
import { CatModel } from "./src/config/db";
import { BodyValidateMiddleware } from "./middleware/body-validator.middleware";
import { ErrorMiddleware } from "./middleware";
import { CreateCatDto } from "./src/cats/dto/create-cat.dto";
const app: Express = express();

app.use(json())

const BASE_URL = "/cats";
const catsController = new CatsController(CatModel);

async function logMethod(req: Request, res: Response, next: NextFunction) {
  console.log("Request Type:", req.method);
  next();
}

// GET : /cats
app.get(BASE_URL, catsController.find);
// GET : /cats/{id}
app.get(BASE_URL + "/:id", catsController.findById);
// POST : /cats
app.post(BASE_URL, BodyValidateMiddleware(CreateCatDto), catsController.create);
// PUT : /cats/{id}
app.put(BASE_URL + "/:id", catsController.updateById);
// DELETE : /cats/{id}
app.delete(BASE_URL + "/:id", catsController.deleteById);

app.use(ErrorMiddleware)
export const handler = serverless(app);
