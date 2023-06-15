import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  // imports: [
  //   SequelizeModule.forRoot({
  //     synchronize: true,
  //   }),
  // ],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
