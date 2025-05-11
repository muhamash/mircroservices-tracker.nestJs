import { Test, TestingModule } from '@nestjs/testing';
import { LoggingServicesController } from './logging-services.controller';
import { LoggingServicesService } from './logging-services.service';

describe('LoggingServicesController', () => {
  let loggingServicesController: LoggingServicesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LoggingServicesController],
      providers: [LoggingServicesService],
    }).compile();

    loggingServicesController = app.get<LoggingServicesController>(LoggingServicesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(loggingServicesController.getHello()).toBe('Hello World!');
    });
  });
});
