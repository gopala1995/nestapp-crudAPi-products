import { IsNotEmpty, IsString, IsBoolean,IsNumber, IsEmpty } from "class-validator";
import { User } from "../../auth/schemas/user.schema";

export class createProductDto {

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly published: boolean;

  @IsNotEmpty()
  @IsString()
  readonly image: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsNumber()
  readonly rating: number;
  
  @IsEmpty()
  readonly user:User
}
