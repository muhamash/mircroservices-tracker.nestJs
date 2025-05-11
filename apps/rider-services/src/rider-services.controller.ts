import { Controller, Get } from '@nestjs/common';
import { RiderServicesService } from './rider-services.service';

@Controller()
export class RiderServicesController {
  constructor(private readonly riderServicesService: RiderServicesService) {}

  @Get()
  getHello(): string {
    return this.riderServicesService.getHello();
  }
}
