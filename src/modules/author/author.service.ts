import { Inject, Injectable } from '@nestjs/common';
import { Author } from './author.entity';
import { Repository } from 'sequelize-typescript';
import { AUTHOR_REPOSITORY } from 'src/core/constants';
import { AuthorDto } from './dto/author.dto';

@Injectable()
export class AuthorService {
  //   constructor(@InjectRepository(Author) private repo: Repository<Author>) {}

  constructor(
    @Inject(AUTHOR_REPOSITORY) private readonly repo: typeof Author,
  ) {}

  async create(author: AuthorDto): Promise<Author> {
    return await this.repo.create(author);
  }
}
