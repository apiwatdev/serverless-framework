import { NextFunction, Request, Response } from "express";
import { Model } from "mongoose";
import { CatsService } from "./cats.service";
export class CatsController {
  private catsService: CatsService;
  constructor(catModel: Model<any>) {
    this.catsService = new CatsService(catModel);

    this.find = this.find.bind(this);
    this.create = this.create.bind(this);
    this.findById = this.findById.bind(this);
    this.updateById = this.updateById.bind(this);
    this.deleteById = this.deleteById.bind(this);
  }

  async find(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.catsService.find();
      return res.send(result);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body
      return res.status(201).send(body)
    } catch (error) {
      next(error);
    }
  }

  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params?.id;
      const result = await this.catsService.findById(id);
      if (!result) {
        throw new Error("Not found");
      }
      return res.send(result);
    } catch (error) {
      next(error);
    }
  }

  async updateById(req: Request, res: Response, next: NextFunction) {
    try {
      return res.send("this action updates a #id cat");
    } catch (error) {
      next(error);
    }
  }

  async deleteById(req: Request, res: Response, next: NextFunction) {
    try {
      return res.send("this action deleted a #id cat");
    } catch (error) {
      next(error);
    }
  }
}
