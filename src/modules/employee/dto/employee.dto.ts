import { IsJSON, IsNotEmpty, IsNumber } from 'class-validator';

export class EmployeeDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly empId: number;

  @IsNotEmpty()
  @IsJSON()
  readonly address: JSON;
}
