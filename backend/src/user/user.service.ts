import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  public async findAll(): Promise<UserDto[]> {
    const findedusers: User[] = await this.userRepository.find({ order: { id: "ASC" } });
    return findedusers.map((el) => UserDto.toDto(el));
  }

  public findOne(id: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } });
  }

  async create(createUserDto: CreateUserDto): Promise<UserDto> {
    const userByEmail: User = await this.findByEmail(createUserDto.email);
    if (userByEmail) throw new Error('Já existe usuário com este e-mail!');

    const { name, email, password, birthDate } = createUserDto;
    const hashedPassword: string = await bcrypt.hash(password, 10);

    const user: User = await this.userRepository.create({ name, email, birthDate, status: true, password: hashedPassword });
    const savedUser: User = await this.userRepository.save(user);

    return UserDto.toDto(savedUser);
  }

  public async changeStatus(id: number): Promise<UserDto> {
    const usuario: User = await this.userRepository.findOne({ where: { id } });

    if(!usuario) throw new Error('O usuário não existe!')

    usuario.status = !Boolean(usuario.status);
    const usuarioAtualizado = await this.userRepository.save(usuario);

    return UserDto.toDto(usuarioAtualizado);
  }

  public findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } })
  }
}
