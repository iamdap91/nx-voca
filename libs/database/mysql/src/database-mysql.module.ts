import { Module } from '@nestjs/common';

@Module({
  imports: [
    // TypeOrmModule.forRootAsync({
    //   imports: [ HideConfigModule ],
    //   useClass: MysqlConfigService,
    // })
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class DatabaseMysqlModule {}
