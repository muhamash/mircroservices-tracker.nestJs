import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SaveCoordinatesDto } from './dto';
import { TargetCoordinates } from './schema/target-coordinates.schema';

@Injectable()
export class TargetCoordinatesService {
  constructor(
    @InjectModel(TargetCoordinates.name)
    private readonly targetCoordinatesModel: Model<TargetCoordinates>,
  ) {}

  async getTargetCoordinates() {
    return await this.targetCoordinatesModel.find().exec();

    // if (result.length === 0 || !result) {
    //   return {
    //     message: 'No target coordinates found',
    //   };
    // } else {
    //   return {
    //     message: 'Target coordinates retrieved successfully',
    //     data: result,
    //   };
    // }
  }

  async saveCoordinates(saveCoordinatesDto: SaveCoordinatesDto) {
    return await this.targetCoordinatesModel.create(saveCoordinatesDto);
  }
}
