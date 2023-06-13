import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { User } from 'src/modules/users/user.entity';
import { Team } from 'src/modules/team/team.entity';
import { Player } from 'src/modules/player/player.entity';
import { Book } from 'src/modules/book/book.entity';
import { Author } from 'src/modules/author/author.entity';
import { BookAuthor } from 'src/modules/book-author/book-author.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([User, Team, Player, Book, Author, BookAuthor]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
