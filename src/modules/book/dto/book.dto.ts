import { IsNotEmpty } from 'class-validator';

export class BookDto {
  @IsNotEmpty()
  readonly title: string;
}
