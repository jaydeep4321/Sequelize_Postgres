import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { employeeProviders } from './employee.provider';

@Module({
  providers: [EmployeeService, ...employeeProviders],
  controllers: [EmployeeController],
})
export class EmployeeModule {}
