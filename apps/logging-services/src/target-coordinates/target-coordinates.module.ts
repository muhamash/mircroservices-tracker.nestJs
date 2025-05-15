/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import
  {
    TargetCoordinates,
    TargetCoordinateSchema,
  } from './schema/target-coordinates.schema';
import { TargetCoordinatesController } from './target-coordinates.controller';
import { TargetCoordinatesService } from './target-coordinates.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TargetCoordinates.name, schema: TargetCoordinateSchema },
    ]),
  ],
  controllers: [TargetCoordinatesController],
  providers: [TargetCoordinatesService],
})
export class TargetCoordinatesModule {}