import { Injectable } from '@nestjs/common';
import { Employee } from '../../entities/employee.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from '../../entities/company.entity'

@Injectable()
export class EmployeeService {

    constructor(@InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>) { }
    root(): string {
        return 'Hello World!';
    }
    async create(): Promise<string> {
        let employee = new Employee();
        employee.name = 'novak';
        employee.age = 20;
        employee.address = 'shanghai';
        console.log(employee)

        return this.employeeRepository.save(employee)
            .then(res => {
                return 'create employee ...done'
            })
            .catch(err => {
                return err
            });
    }

    async findOne(name: string): Promise<Employee> {
        return await this.employeeRepository.findOne({ name: name });
    }

    async findById(id: number): Promise<Employee> {
        return await this.employeeRepository.findOne({ id: id });
    }
}