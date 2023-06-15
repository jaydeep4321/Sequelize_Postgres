import { Inject, Injectable } from '@nestjs/common';
import { EMPLOYEE_REPOSITORY } from 'src/core/constants';
import { Employee } from './employee.entity';
import { EmployeeDto } from './dto/employee.dto';

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
}
