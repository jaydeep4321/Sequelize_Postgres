import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { TeamModule } from './modules/team/team.module';
import { PlayerModule } from './modules/player/player.module';
import { BookModule } from './modules/book/book.module';
import { AuthorModule } from './modules/author/author.module';
import { BookAuthorModule } from './modules/book-author/book-author.module';
// import { BookAuthorModule } from './book-author/book-author.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    TeamModule,
    PlayerModule,
    BookModule,
    AuthorModule,
    BookAuthorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
