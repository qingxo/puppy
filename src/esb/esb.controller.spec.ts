import { Test, TestingModule } from '@nestjs/testing';
import { EsbController } from './esb.controller';

describe('Esb Controller', () => {
  let controller: EsbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EsbController],
    }).compile();

    controller = module.get<EsbController>(EsbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
