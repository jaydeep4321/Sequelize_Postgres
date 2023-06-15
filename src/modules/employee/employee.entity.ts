import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Employee extends Model<Employee> {
  @Column
  name: string;

  @Column
  empId: number;

  @Column(DataType.JSON)
  address: JSON;
}
