import { IsOptional, IsString, IsBoolean, IsNumber } from 'class-validator';

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
}
