import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthorService } from '../author/author.service';
import { AuthorDto } from '../author/dto/author.dto';
import { BookDto } from '../book/dto/book.dto';
import { BookService } from '../book/book.service';
import { BookAuthorService } from './book-author.service';
import { BookAuthorDto } from './dto/book-author.dto';

@Controller('book-author')
export class BookAuthorController {
  constructor(
    private authorService: AuthorService,
    private bookService: BookService,
    private bookAutorService: BookAuthorService,
  ) {}

  @Post('author')
  async createAuthor(@Body() body: AuthorDto) {
    return this.authorService.create(body);
  }

  @Post('book')
  async createBook(@Body() body: BookDto) {
    return this.bookService.create(body);
  }

  @Post()
  async createBookAuthor(@Body() body: BookAuthorDto) {
    return this.bookAutorService.create(body);
  }
  @Get()
  findAll() {
    return this.bookAutorService.findAll();
  }

  @Get('book')
  findAllBook() {
    return this.bookService.findAll();
  }
}
