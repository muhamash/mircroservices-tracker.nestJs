import { Test, TestingModule } from '@nestjs/testing';
import { TargetCoordinatesService } from './target-coordinates.service';

describe('TargetCoordinatesService', () => {
  let service: TargetCoordinatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TargetCoordinatesService],
    }).compile();

    service = module.get<TargetCoordinatesService>(TargetCoordinatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
