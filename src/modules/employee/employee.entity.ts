import { Column, DataType, Model, Table, Index } from 'sequelize-typescript';

@Table({
  indexes: [
    {
      fields: ['empId'],
    },
  ],
})
export class Employee extends Model<Employee> {
  @Column
  name: string;

  @Index
  @Column
  empId: number;

  @Column(DataType.JSON)
  address: JSON;
}
