import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MysqlConfigService } from './mysql-config.service';
import { VocaConfigModule } from './configs/voca.config.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [VocaConfigModule],
      useClass: MysqlConfigService
    })
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class DatabaseMysqlModule {
}
