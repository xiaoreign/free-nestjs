import { Get, Controller, Param, Res, HttpStatus } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from '../../entities/employee.entity';
import { DataformService } from '../../shared/dataForm.service'

@Controller('employee')
export class EmployeeController {
    constructor(
        private readonly employeeService: EmployeeService,
        private dataform: DataformService
        ) {}

    @Get('findOne/:name')
    async findOne(@Param() params , @Res() res){
        this.employeeService.findOne(params.name).then(resp=>{
            if(resp){
                res.status(HttpStatus.OK).json(this.dataform.create(resp));
            }else{
                res.status(HttpStatus.NOT_MODIFIED).json(this.dataform.error('no data'));           
            }
        })
    }








    @Get('create')
    async create():Promise<string>{
        return this.employeeService.create();
    }


    @Get('findById/:id')
    async findById(@Param() params):Promise<Employee>{
        return this.employeeService.findById(params.id);
    }

}