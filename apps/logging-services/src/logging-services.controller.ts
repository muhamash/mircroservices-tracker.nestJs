import { Controller, Get } from '@nestjs/common';
import { LoggingServicesService } from './logging-services.service';

@Controller()
export class LoggingServicesController {
  constructor(private readonly loggingServicesService: LoggingServicesService) {}

  @Get()
  getHello(): string {
    return this.loggingServicesService.getHello();
  }
}
