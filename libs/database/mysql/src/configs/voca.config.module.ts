import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import mysqlConfiguration from './mysql.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [mysqlConfiguration],
    }),
  ],
})
export class VocaConfigModule {}
