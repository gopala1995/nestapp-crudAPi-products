import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { bcrypt } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt/dist';
import { signUpDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private useModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto:signUpDto): Promise<{ token: string }> {
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
}