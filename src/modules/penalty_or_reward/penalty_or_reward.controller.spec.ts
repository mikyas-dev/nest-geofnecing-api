import { Test, TestingModule } from '@nestjs/testing';
import { PenaltyOrRewardController } from './penalty_or_reward.controller';
import { PenaltyOrRewardService } from './penalty_or_reward.service';

describe('PenaltyOrRewardController', () => {
  let controller: PenaltyOrRewardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PenaltyOrRewardController],
      providers: [PenaltyOrRewardService],
    }).compile();

    controller = module.get<PenaltyOrRewardController>(PenaltyOrRewardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
