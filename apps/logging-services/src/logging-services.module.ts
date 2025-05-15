import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggingServicesController } from './logging-services.controller';
import { LoggingServicesService } from './logging-services.service';
import { TargetCoordinatesModule } from './target-coordinates/target-coordinates.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/loggingDb'),
    TargetCoordinatesModule,
  ],
  controllers: [LoggingServicesController],
  providers: [LoggingServicesService],
})
export class LoggingServicesModule {}

// MongooseModule.forRoot('mongodb://localhost:27017/loggingDb'),
