import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeController } from './employee.controller'
import { EmployeeService } from './employee.service'
import { Employee } from '../../entities/employee.entity'
import { DataformService } from '../../shared/dataForm.service'

@Module({
    imports: [TypeOrmModule.forFeature([Employee])],
    providers: [EmployeeService , DataformService],
    controllers: [EmployeeController]
})
export class EmployeeModule {
  
}