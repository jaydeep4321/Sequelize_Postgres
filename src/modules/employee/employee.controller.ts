import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeDto } from './dto/employee.dto';
import { ResponseDto } from 'src/response.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { readFileSync } from 'fs';
import { Request } from 'express';
import { number } from 'joi';
import sequelize from 'sequelize';
import { buffer } from 'stream/consumers';
const fs = require('fs');
const csv = require('csv-parser');
const ObjectsToCsv = require('objects-to-csv');
const process = require('process');
// const v8 = require('v8');
// v8.setFlagsFromString('--stack-size=12000');

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Post()
  async createEmployee(@Body() body: EmployeeDto) {
    // console.log(typeof JSON.stringify(body.address));
    // body.address = JSON.stringify(body.address);
    return this.employeeService.create({
      empId: body.empId,
      address: body.address,
      name: sequelize.fn(
        'PGP_SYM_ENCRYPT',
        body.name,
        process.env.EN_SECRET_KEY,
      ),
    });
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

  // @Get('/search')
  // async getAllUsers(@Query('name') name: string, @Res() res) {
  //   console.log('==> reached here!!');
  //   let employees = await this.employeeService.findAll();
  //   if (name) {
  //     employees = employees.filter((employee) =>
  //       employee.name.toLowerCase().includes(name.toLowerCase()),
  //     );
  //   }

  //   return new ResponseDto().sendSuccess('success', employees, res);
  // }

  @Get('/:empId')
  async findOne(@Param('empId') empId: string, @Res() res) {
    let employee = await this.employeeService.findOne(parseInt(empId));

    let address = JSON.parse(JSON.stringify(employee.address));
    // console.log(employee.address);

    employee.address = address;
    return new ResponseDto().sendSuccess('success', employee, res);
  }

  // @Post('csv')
  // @UseInterceptors(
  //   FileInterceptor('file_csv', {
  //     storage: diskStorage({
  //       // destination: './files',
  //     }),
  //   }),
  // )
  // async uploadFile() {
  //   // const csvFile = readFileSync('files/dummy.csv');
  //   // const csvData = csvFile.toString();
  //   // const parsedCsv = await parse(csvData, {
  //   //   header: true,
  //   //   skipEmptyLines: true,
  //   //   transformHeader: (header) => header.toLowerCase().replace('#', ''.trim()),
  //   //   complete: (result) => result.data,
  //   // });
  // }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      limits: {
        files: 1,
        fileSize: 52428800, // 50 mb in bytes
      },

      dest: './src/modules/employee/csv',
      fileFilter: (req: Request, file, cb) => {
        const ext = file.mimetype;
        if (ext !== 'text/csv') {
          return cb(new Error('Extension not allowed, upload csv!!'), false);
        }
        return cb(null, true);
      },
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File, @Res() res) {
    console.log(file);
    console.log('mime type of file ===>', file.mimetype);
    const results = [];

    fs.createReadStream(file.path)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', async () => {
        // Insert the CSV data into the database
        try {
          console.log(results);

          if (results.length > 0) {
            for (let i = 0; i < results.length; i++) {
              let result = results[i];
              const employee = await this.employeeService.create(result);
            }
            res.status(200).json({ results });
          } else console.log('data not found');
        } catch (error) {
          res.status(500).json({ error });
        }
      });
  }

  @Post('createCsv/:value')
  async createCsv(@Param() value: number, @Res() res) {
    const number: any = value;
    console.log(number.value);
    process.max_stack_size = 100000000;
    let data = [];
    if (number.value > 0)
      for (let i = 0; i < number.value; i++) {
        data[i] = {
          name: 'jaydeep',
          empId: i + 1,
          address: 'Ahmedabad, Gujarat, india',
        };
      }
    else {
      return res.send('value must be positive and greater than zero');
    }

    const csv = await new ObjectsToCsv(data);

    await csv.toDisk('./src/modules/employee/csv/example.csv');

    console.log('completed writing csv');

    return res.json({ data });
  }
}
