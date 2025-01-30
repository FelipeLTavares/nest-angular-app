import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { LoginResponseDto } from './dto/LoginResponse.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  async validateUser(email: string, password: string): Promise<any> {
    const user: User = await this.userService.findByEmail(email);

    if(!user || !user.status) throw new UnauthorizedException('Email ou senha inválido(s)!');

    if (await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
  }

  async login(user: any): Promise<LoginResponseDto> {
    const payload = { email: user.email, sub: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  public async register(createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}