import { BookAuthor } from './book-author.entity';
import { BOOK_AUTHOR_REPOSITORY } from '../../core/constants';

export const bookAuthorProviders = [
  {
    provide: BOOK_AUTHOR_REPOSITORY,
    useValue: BookAuthor,
  },
];
