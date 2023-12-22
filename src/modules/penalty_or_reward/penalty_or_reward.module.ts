import { Module } from '@nestjs/common';
import { PenaltyOrRewardService } from './penalty_or_reward.service';
import { PenaltyOrRewardController } from './penalty_or_reward.controller';

@Module({
  controllers: [PenaltyOrRewardController],
  providers: [PenaltyOrRewardService],
})
export class PenaltyOrRewardModule {}
