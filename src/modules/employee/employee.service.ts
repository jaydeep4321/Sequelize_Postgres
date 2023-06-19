import { Inject, Injectable } from '@nestjs/common';
import { EMPLOYEE_REPOSITORY } from 'src/core/constants';
import { Employee } from './employee.entity';
import { EmployeeDto } from './dto/employee.dto';
import { Json } from 'sequelize/types/utils';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY) private readonly repo: typeof Employee,
  ) {}

  async create(employee: EmployeeDto): Promise<Employee> {
    return await this.repo.create(employee);
  }

  async findAll(): Promise<Employee[]> {
    return await this.repo.findAll<Employee>();
  }

  async findOne(empId: number): Promise<Employee> {
    return await this.repo.findOne<Employee>({ where: { empId: empId } });
  }

  async paginateEmployee(page?: number, pageSize?: number) {
    const offset = (page - 1) * pageSize;
    const employee = await this.repo.findAndCountAll<Employee>({
      offset,
      limit: pageSize,
    });
    return employee;
  }

  // async queryBuilder(alias: string) {
  //   return this.repo.;
  // }
}
