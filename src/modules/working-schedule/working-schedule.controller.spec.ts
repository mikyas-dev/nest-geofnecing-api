import { Test, TestingModule } from '@nestjs/testing';
import { WorkingScheduleController } from './working-schedule.controller';
import { WorkingScheduleService } from './working-schedule.service';

describe('WorkingScheduleController', () => {
  let controller: WorkingScheduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkingScheduleController],
      providers: [WorkingScheduleService],
    }).compile();

    controller = module.get<WorkingScheduleController>(WorkingScheduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
