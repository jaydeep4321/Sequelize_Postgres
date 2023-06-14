import { Module } from '@nestjs/common';
import { BookAuthorService } from './book-author.service';
import { BookAuthorController } from './book-author.controller';
import { AuthorService } from '../author/author.service';
import { authorProviders } from '../author/author.providers';
import { bookProviders } from '../book/book.providers';
import { BookService } from '../book/book.service';
import { bookAuthorProviders } from './book.providers';

@Module({
  imports: [BookAuthorModule],
  providers: [
    BookAuthorService,
    AuthorService,
    BookService,
    ...authorProviders,
    ...bookProviders,
    ...bookAuthorProviders,
  ],
  controllers: [BookAuthorController],
})
export class BookAuthorModule {}
