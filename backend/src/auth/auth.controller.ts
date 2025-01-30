import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { LoginRequest } from './dto/LoginRequest.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginResponseDto } from './dto/LoginResponse.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() body: LoginRequest): Promise<LoginResponseDto> {
    const user = await this.authService.validateUser(body.email, body.senha);
    return this.authService.login(user);
  }

  @Public()
  @Post('register')
  public register( @Body() createUserDto: CreateUserDto) {
      return this.authService.register(createUserDto);
  }
}