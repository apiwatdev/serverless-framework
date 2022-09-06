import { IsNotEmpty, IsNumber, IsString } from "class-validator";
export class CreateCatDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsString()
  breed: string;
}
