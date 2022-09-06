import { Document, model, models, Schema } from "mongoose";
import { CatSchema } from "./schemas/cat.schema";

export interface CatsDocument extends Document{
  name: string;
  age: number;
  breed: string;
}

export const CatModel = models.cats || model<CatsDocument>("cats", CatSchema);
