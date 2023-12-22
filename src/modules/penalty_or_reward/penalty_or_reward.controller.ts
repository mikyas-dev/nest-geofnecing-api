import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PenaltyOrRewardService } from './penalty_or_reward.service';
import { CreatePenaltyOrRewardDto } from './dto/create-penalty_or_reward.dto';
import { UpdatePenaltyOrRewardDto } from './dto/update-penalty_or_reward.dto';

@Controller('penalty-or-reward')
export class PenaltyOrRewardController {
  constructor(private readonly penaltyOrRewardService: PenaltyOrRewardService) {}

  @Post()
  create(@Body() createPenaltyOrRewardDto: CreatePenaltyOrRewardDto) {
    return this.penaltyOrRewardService.create(createPenaltyOrRewardDto);
  }

  @Get()
  findAll() {
    return this.penaltyOrRewardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.penaltyOrRewardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePenaltyOrRewardDto: UpdatePenaltyOrRewardDto) {
    return this.penaltyOrRewardService.update(+id, updatePenaltyOrRewardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.penaltyOrRewardService.remove(+id);
  }
}
