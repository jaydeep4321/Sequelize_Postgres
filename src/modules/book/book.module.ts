import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { bookProviders } from './book.providers';

@Module({
  providers: [BookService, ...bookProviders],
  exports: [BookService],
})
export class BookModule {}
