import { Inject, Injectable } from '@nestjs/common';
import { BOOK_REPOSITORY } from 'src/core/constants';
import { Book } from './book.entity';
import { BookDto } from './dto/book.dto';
import { Author } from '../author/author.entity';

@Injectable()
export class BookService {
  constructor(@Inject(BOOK_REPOSITORY) private readonly repo: typeof Book) {}

  async create(book: BookDto): Promise<Book> {
    return await this.repo.create(book);
  }

  async findAll(): Promise<Book[]> {
    return await this.repo.findAll<Book>({
      include: [
        {
          model: Author,
          attributes: { exclude: ['BookAuthor'] },
          through: { attributes: [] },
        },
      ],
    });
  }
}
