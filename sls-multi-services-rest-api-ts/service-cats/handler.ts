import serverless from "serverless-http";
import express, { Express, NextFunction, Request, Response } from "express";
import { CatsController } from "./src/cats/cats.controller";
import { CatModel } from "./src/config/db";
import { BodyValidateMiddleware } from "./middleware/body-validator.middleware";
import { ErrorMiddleware } from "./middleware";
const app: Express = express();
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
app.post(BASE_URL, BodyValidateMiddleware({}), catsController.create);
// PUT : /cats/{id}
app.put(BASE_URL + "/:id", catsController.updateById);
// DELETE : /cats/{id}
app.delete(BASE_URL + "/:id", catsController.deleteById);

app.use(ErrorMiddleware)
export const handler = serverless(app);
