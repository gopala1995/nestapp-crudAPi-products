import {
  IsNotEmpty,
  IsString,
  IsBoolean,
  IsEmail,
  MinLength,
} from 'class-validator';

export class signUpDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'please enter correct password' })
  readonly email: string;

  @IsNotEmpty()
  @IsBoolean()
  @MinLength(6)
  readonly password: string;
}
