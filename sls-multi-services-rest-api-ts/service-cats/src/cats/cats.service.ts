import { isValidObjectId, Model } from "mongoose";
import { CatsDocument } from "../config/db";
import { CreateCatDto } from "./dto/create-cat.dto";
import { CatInterface } from "./interfaces/cat.interface";

export class CatsService {
  private catModel: Model<CatsDocument>;
  constructor(catModel: Model<any>) {
    this.catModel = catModel;
  }

  async find() {
    return this.catModel.find();
  }

  async findById(id: string) {
    if (!isValidObjectId(id)) {
      return null;
    }
    return this.catModel.findOne({ _id: id });
  }

  async create(dto: CreateCatDto) {
    const newCat: CatInterface = {
      name: dto.name,
      age: dto.age,
      breed: dto.breed,
    };

    return newCat;
  }

  async updateById() {
    return "a new cat updated";
  }

  async deleteById() {
    return "a new cat deleted 123";
  }
}
