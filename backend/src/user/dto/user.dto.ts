import { User } from "../entities/user.entity";

export class UserDto {
    id: number;
    name: string;
    email: string;
    birthDate: string;
    status: boolean;

    static toDto (user: User): UserDto {
      const userDto = new UserDto();
      userDto.id = user.id;
      userDto.name = user.name;
      userDto.email = user.email;
      userDto.birthDate = user.birthDate ? new Date(user.birthDate).toLocaleDateString('pt-BR', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric' 
    }) : null;
      userDto.status = user.status;

      return userDto
    }
  }