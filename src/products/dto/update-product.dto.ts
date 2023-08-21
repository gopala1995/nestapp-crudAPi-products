import {
  IsOptional,
  IsString,
  IsBoolean,
  IsNumber,
  IsEmpty,
} from 'class-validator';
import { User } from '../../auth/schemas/user.schema';

export class updateProductDto {
  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly description: string;

  @IsOptional()
  @IsBoolean()
  readonly published: boolean;

  @IsOptional()
  @IsString()
  readonly image: string;

  @IsOptional()
  @IsNumber()
  readonly price: number;

  @IsOptional()
  @IsNumber()
  readonly rating: number;

  @IsOptional()
  readonly user: User;
}
