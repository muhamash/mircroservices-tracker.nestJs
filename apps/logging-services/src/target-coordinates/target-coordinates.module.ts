import { Module } from '@nestjs/common';
import { TargetCoordinatesController } from './target-coordinates.controller';
import { TargetCoordinatesService } from './target-coordinates.service';

@Module({
  controllers: [TargetCoordinatesController],
  providers: [TargetCoordinatesService],
})
export class TargetCoordinatesModule {}
