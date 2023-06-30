import { Column, DataType, Model, Table, Index } from 'sequelize-typescript';

@Table({ timestamps: false })
export class Employee extends Model<Employee> {
  @Column
  name: string;

  @Index
  @Column
  empId: number;

  // @Column(DataType.JSONB)
  @Column
  // address: JSON;
  address: string;
}
