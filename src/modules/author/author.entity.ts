import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Book } from '../book/book.entity';
import { BookAuthor } from '../book-author/book-author.entity';

@Table
export class Author extends Model<Author> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
  @BelongsToMany(() => Book, () => BookAuthor)
  books: Book[];
}
