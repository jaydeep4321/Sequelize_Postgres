import { Module } from '@nestjs/common';
import { BookAuthorService } from './book-author.service';
import { BookAuthorController } from './book-author.controller';
import { AuthorService } from '../author/author.service';
import { authorProviders } from '../author/author.providers';

@Module({
  imports: [BookAuthorModule],
  providers: [BookAuthorService, AuthorService, ...authorProviders],
  controllers: [BookAuthorController],
})
export class BookAuthorModule {}
