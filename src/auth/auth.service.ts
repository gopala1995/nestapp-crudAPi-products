import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { logInDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private useModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async SignUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const { name, email, password } = signUpDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.useModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = this.jwtService.sign({ id: user._id });

    return { token };
  }

  async Login(loginDto: logInDto): Promise<{ token: string }> {
    const { email, password } = loginDto;

    const user = await this.useModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPassword = await bcrypt.compare(password, user.password);

    if (!isPassword) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = this.jwtService.sign({ id: user._id });

    return { token };
  }
}
