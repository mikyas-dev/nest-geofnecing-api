import { PartialType } from '@nestjs/mapped-types';
import { CreatePenaltyOrRewardDto } from './create-penalty_or_reward.dto';

export class UpdatePenaltyOrRewardDto extends PartialType(CreatePenaltyOrRewardDto) {}
