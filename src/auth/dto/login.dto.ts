import {
  IsNotEmpty,
  IsEmail,
  MinLength,
  IsString,
} from 'class-validator';

export class logInDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'please enter correct email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;
}
