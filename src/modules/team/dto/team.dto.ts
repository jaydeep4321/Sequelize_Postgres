import { IsNotEmpty } from 'class-validator';

export class TeamDto {
  @IsNotEmpty()
  readonly name: string;
}
