import { Body, Controller, Get, Post } from '@nestjs/common';
import { SaveCoordinatesDto } from './dto';

@Controller('target-coordinates')
export class TargetCoordinatesController {
  @Get()
  getTargetCoordinates() {
    return {
      message: `target coordinates`,
    };
  }

  @Post()
  saveTargetCoordinates(
    @Body()
    saveCoordinatesDto: SaveCoordinatesDto,
  ) {
    return {
      data: saveCoordinatesDto,
    };
  }
}
