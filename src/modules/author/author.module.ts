import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { authorProviders } from './author.providers';
import { usersProviders } from '../users/users.providers';

@Module({
  providers: [AuthorService, ...authorProviders],
  exports: [AuthorService],
})
export class AuthorModule {}
