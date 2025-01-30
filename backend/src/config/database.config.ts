import { User } from "src/user/entities/user.entity";
import { DataSourceOptions } from "typeorm";

export const dataSourceoptions: DataSourceOptions = {
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'senha',
  database: 'poncetech',
  entities: [User],
  synchronize: true,
};