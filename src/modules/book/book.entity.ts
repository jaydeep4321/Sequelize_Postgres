import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Author } from '../author/author.entity';
import { BookAuthor } from '../book-author/book-author.entity';

@Table
export class Book extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @BelongsToMany(() => Author, () => BookAuthor)
  authors: Author[];
}
