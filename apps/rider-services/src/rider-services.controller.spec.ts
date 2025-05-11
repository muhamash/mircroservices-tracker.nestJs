import { Test, TestingModule } from '@nestjs/testing';
import { RiderServicesController } from './rider-services.controller';
import { RiderServicesService } from './rider-services.service';

describe('RiderServicesController', () => {
  let riderServicesController: RiderServicesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RiderServicesController],
      providers: [RiderServicesService],
    }).compile();

    riderServicesController = app.get<RiderServicesController>(RiderServicesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(riderServicesController.getHello()).toBe('Hello World!');
    });
  });
});
