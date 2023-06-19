import { Body, Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeDto } from './dto/employee.dto';
import { ResponseDto } from 'src/response.dto';
import { json } from 'sequelize';
import { Json } from 'sequelize/types/utils';
// import { employeeProviders } from './employee.provider';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Post()
  async createEmployee(@Body() body: EmployeeDto) {
    // console.log(typeof JSON.stringify(body.address));
    // body.address = JSON.stringify(body.address);
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

  @Get('/search')
  async getAllUsers(@Query('name') name: string, @Res() res) {
    console.log('==> reached here!!');
    let employees = await this.employeeService.findAll();
    if (name) {
      employees = employees.filter((employee) =>
        employee.name.toLowerCase().includes(name.toLowerCase()),
      );
    }

    return new ResponseDto().sendSuccess('success', employees, res);
  }

  @Get('/:empId')
  async findOne(@Param('empId') empId: string, @Res() res) {
    let employee = await this.employeeService.findOne(parseInt(empId));

    let address = JSON.parse(JSON.stringify(employee.address));
    // console.log(employee.address);

    employee.address = address;
    return new ResponseDto().sendSuccess('success', employee, res);
  }
}
