import {
  BelongsToMany,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Author } from '../author/author.entity';
import { Book } from '../book/book.entity';

@Table
export class BookAuthor extends Model<BookAuthor> {
  @ForeignKey(() => Book)
  @Column
  bookId: number;

  @ForeignKey(() => Author)
  @Column
  authorId: number;

  // @BelongsToMany(() => Author, () => Book)
  // authors: Author[];

  // @BelongsToMany(() => Book, () => Author)
  // book: Book[];
}
