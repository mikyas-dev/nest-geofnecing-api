import { Injectable } from '@nestjs/common';
import { CreatePenaltyOrRewardDto } from './dto/create-penalty_or_reward.dto';
import { UpdatePenaltyOrRewardDto } from './dto/update-penalty_or_reward.dto';

@Injectable()
export class PenaltyOrRewardService {
  create(createPenaltyOrRewardDto: CreatePenaltyOrRewardDto) {
    return 'This action adds a new penaltyOrReward';
  }

  findAll() {
    return `This action returns all penaltyOrReward`;
  }

  findOne(id: number) {
    return `This action returns a #${id} penaltyOrReward`;
  }

  update(id: number, updatePenaltyOrRewardDto: UpdatePenaltyOrRewardDto) {
    return `This action updates a #${id} penaltyOrReward`;
  }

  remove(id: number) {
    return `This action removes a #${id} penaltyOrReward`;
  }
}
