import { Module } from '@nestjs/common';
import { LoggingServicesController } from './logging-services.controller';
import { LoggingServicesService } from './logging-services.service';

@Module({
  imports: [],
  controllers: [LoggingServicesController],
  providers: [LoggingServicesService],
})
export class LoggingServicesModule {}
