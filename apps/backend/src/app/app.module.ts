import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseMysqlModule } from '@voca/database/mysql';

@Module({
  imports: [DatabaseMysqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
