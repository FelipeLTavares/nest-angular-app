import { IsDate, IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsDate()
  @IsNotEmpty()
  readonly birthDate: Date;

  @IsString()
  @MinLength(6)
  readonly password: string;
}