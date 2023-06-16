import { Body, Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeDto } from './dto/employee.dto';
import { ResponseDto } from 'src/response.dto';
import { employeeProviders } from './employee.provider';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Post()
  async createBookAuthor(@Body() body: EmployeeDto) {
    return this.employeeService.create(body);
  }
  // @Get()
  // findAll() {
  //   return this.employeeService.findAll();
  // }

  @Get()
  async paginateEmployee(
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
    @Res() res,
  ) {
    const employee = await this.employeeService.paginateEmployee(
      page,
      pageSize,
    );
    return new ResponseDto().sendSuccess('success', employee, res);
  }

  @Get('/:empId')
  findOne(@Param('empId') empId: string) {
    return this.employeeService.findOne(parseInt(empId));
  }
}
