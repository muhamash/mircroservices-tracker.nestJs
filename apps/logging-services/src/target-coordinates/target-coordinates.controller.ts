import { Body, Controller, Get, Post } from '@nestjs/common';
import { SaveCoordinatesDto } from './dto';
import { TargetCoordinatesService } from './target-coordinates.service';

@Controller('target-coordinates')
export class TargetCoordinatesController {
  constructor(private coordinateService: TargetCoordinatesService) {}

  @Get()
  async getTargetCoordinates() {
    try {
      const result = await this.coordinateService.getTargetCoordinates();
      return {
        message: 'Target coordinates retrieved successfully',
        data: result,
      };
    } catch (error) {
      return {
        message: 'Failed to retrieve target coordinates',
        error: error.message || error.toString(),
      };
    }
  } 

  @Post()
  async saveTargetCoordinates(
    @Body()
    saveCoordinatesDto: SaveCoordinatesDto,
  ) {
    try {
      const result = (await this.coordinateService.saveCoordinates(
        saveCoordinatesDto,
      )) as any;
      return {
        message: 'Coordinates saved successfully',
        data: result,
      };
    } catch (error) {
      return {
        message: 'Failed to save coordinates',
        error: error.message || error.toString(),
      };
    }
  }
}
