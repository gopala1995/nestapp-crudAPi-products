import { Body, Controller, Post, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { logInDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
    return this.authService.SignUp(signUpDto);
  }

  @Post('/login')
  logIn(@Body() logInDto: logInDto): Promise<{ token: string }> {
    return this.authService.Login(logInDto);
  }
}
