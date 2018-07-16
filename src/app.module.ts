import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import{ DatabaseModule } from './database/database.module'
import { HttpModule} from '@nestjs/common';
import { ControllerModule } from './controller/controller.module';

@Module({
  imports: [AuthModule, ControllerModule, DatabaseModule, HttpModule],
})
export class ApplicationModule {}
