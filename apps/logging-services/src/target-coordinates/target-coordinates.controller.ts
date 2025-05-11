import { Controller, Get } from '@nestjs/common';

@Controller('target-coordinates')
export class TargetCoordinatesController {
  @Get()
  getTargetCoordinates() {
    return `target coordinates`;
  }
}
