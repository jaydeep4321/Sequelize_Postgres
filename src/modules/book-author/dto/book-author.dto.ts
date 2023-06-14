import { IsNotEmpty, IsNumber } from 'class-validator';

export class BookAuthorDto {
  @IsNotEmpty()
  @IsNumber()
  readonly bookId: number;

  @IsNotEmpty()
  @IsNumber()
  readonly authorId: number;
}
