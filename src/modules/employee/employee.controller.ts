import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeDto } from './dto/employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Post()
  async createBookAuthor(@Body() body: EmployeeDto) {
    return this.employeeService.create(body);
  }
  @Get()
  findAll() {
    return this.employeeService.findAll();
  }
}
