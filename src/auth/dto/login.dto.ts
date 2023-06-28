import {
  IsNotEmpty,
  IsBoolean,
  IsEmail,
  MinLength,
} from 'class-validator';

export class logInDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'please enter correct password' })
  readonly email: string;

  @IsNotEmpty()
  @IsBoolean()
  @MinLength(6)
  readonly password: string;
}
