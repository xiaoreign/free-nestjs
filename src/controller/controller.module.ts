import { Module } from '@nestjs/common';
import { DataformService } from '../shared/dataForm.service'


@Module({
  controllers: [],
  providers: [DataformService],
})
export class ControllerModule {}
