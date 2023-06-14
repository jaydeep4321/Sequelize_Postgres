import { IsNotEmpty, IsNumber } from 'class-validator';

export class PlayerDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly num: number;

  @IsNotEmpty()
  @IsNumber()
  readonly teamId: number;
}
