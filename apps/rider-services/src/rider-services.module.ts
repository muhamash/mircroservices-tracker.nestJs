import { Module } from '@nestjs/common';
import { RiderServicesController } from './rider-services.controller';
import { RiderServicesService } from './rider-services.service';

@Module({
  imports: [],
  controllers: [RiderServicesController],
  providers: [RiderServicesService],
})
export class RiderServicesModule {}
