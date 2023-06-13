import { IsNotEmpty } from 'class-validator';

export class AuthorDto {
  @IsNotEmpty()
  readonly name: string;
}
