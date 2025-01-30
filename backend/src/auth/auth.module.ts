import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { ConfigService } from '@nestjs/config';


@Module({
  imports: [
    JwtModule.registerAsync({
      global: true,
      imports: [],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>("JWT_SECRET"),
        signOptions: {
          expiresIn: configService.get<string>("JWT_EXPIRATION_TIME")
        }
      }),
      inject: [ConfigService]
    }),
    UserModule
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}