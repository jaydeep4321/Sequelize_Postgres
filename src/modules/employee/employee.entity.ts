import { Column, DataType, Model, Table, Index } from 'sequelize-typescript';

@Table
export class Employee extends Model<Employee> {
  @Column
  name: string;

  @Index
  @Column
  empId: number;

  @Column(DataType.JSONB)
  address: JSON;
}
