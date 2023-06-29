import { IsJSON, IsNotEmpty, IsNumber, IsObject } from 'class-validator';

export class EmployeeDto {
  // @IsNotEmpty()
  readonly name: string;

  // @IsNotEmpty()
  // @IsNumber()
  readonly empId: number;

  // @IsNotEmpty()
  // @IsJSON()
  // address: JSON;
  address: string;
}
