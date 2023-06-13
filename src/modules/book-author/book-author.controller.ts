import { Body, Controller, Param, Post } from '@nestjs/common';
import { AuthorService } from '../author/author.service';
import { AuthorDto } from '../author/dto/author.dto';

@Controller('book-author')
export class BookAuthorController {
  constructor(private authorService: AuthorService) {}

  @Post()
  async updateUser(@Body() body: AuthorDto) {
    return this.authorService.create(body);
  }
}
