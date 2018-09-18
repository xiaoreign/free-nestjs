import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import{ DatabaseModule } from './database/database.module'
import { HttpModule} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './controller/employee/employee.module'

@Module({
  imports: [AuthModule, DatabaseModule, HttpModule, 
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "",
      "database": "free",
      "entities": ["src/**/**.entity{.ts,.js}"],
      "synchronize": true
    }), 
    EmployeeModule],
})
export class ApplicationModule {}
