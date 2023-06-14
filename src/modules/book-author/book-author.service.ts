import { Inject, Injectable } from '@nestjs/common';
import { BOOK_AUTHOR_REPOSITORY } from 'src/core/constants';
import { BookAuthor } from './book-author.entity';
import { BookAuthorDto } from './dto/book-author.dto';
import { Book } from '../book/book.entity';
import { Author } from '../author/author.entity';

@Injectable()
export class BookAuthorService {
  constructor(
    @Inject(BOOK_AUTHOR_REPOSITORY) private readonly repo: typeof BookAuthor,
  ) {}

  async create(bookAuthor: BookAuthorDto): Promise<BookAuthor> {
    return await this.repo.create(bookAuthor);
  }

  async findAll(): Promise<BookAuthor[]> {
    return await this.repo.findAll<BookAuthor>({
      include: [Book, Author],
    });
  }
}
