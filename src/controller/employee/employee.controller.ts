import { Get, Controller,Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from '../../entities/employee.entity';


@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) {}

    @Get()
    root():string{
        return this.employeeService.root();
    }


    @Get('findOne/:name')
    async findOne(@Param() params):Promise<Employee>{
        console.log(params);
        return this.employeeService.findOne(params.name);
    }







    @Get('create')
    async create():Promise<string>{
        return this.employeeService.create();
    }
}