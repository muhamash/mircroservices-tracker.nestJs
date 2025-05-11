import { Test, TestingModule } from '@nestjs/testing';
import { TargetCoordinatesController } from './target-coordinates.controller';

describe('TargetCoordinatesController', () => {
  let controller: TargetCoordinatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TargetCoordinatesController],
    }).compile();

    controller = module.get<TargetCoordinatesController>(
      TargetCoordinatesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
