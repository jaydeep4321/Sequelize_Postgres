import { Author } from './author.entity';
import { AUTHOR_REPOSITORY } from '../../core/constants';

export const authorProviders = [
  {
    provide: AUTHOR_REPOSITORY,
    useValue: Author,
  },
];
