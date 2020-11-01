import { registerAs } from '@nestjs/config';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { entities } from '@voca/models';

export default registerAs('mysql', () => {
  const config: MysqlConnectionOptions = {
    type: 'mysql',
    host: process.env.DATABASE_HOST || 'localhost',
    port: Number(process.env.DATABASE_PORT) || 3306,
    username: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || 'password',
    database: process.env.DATABASE_DATABASE || 'voca',
    entities: [...entities],
    synchronize: true,
    logging: true,
  };
  return config;
});
