import { Test, TestingModule } from '@nestjs/testing';
import { PenaltyOrRewardService } from './penalty_or_reward.service';

describe('PenaltyOrRewardService', () => {
  let service: PenaltyOrRewardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PenaltyOrRewardService],
    }).compile();

    service = module.get<PenaltyOrRewardService>(PenaltyOrRewardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
