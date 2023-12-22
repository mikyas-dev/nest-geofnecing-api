import { Test, TestingModule } from '@nestjs/testing';
import { WorkingScheduleService } from './working-schedule.service';

describe('WorkingScheduleService', () => {
  let service: WorkingScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkingScheduleService],
    }).compile();

    service = module.get<WorkingScheduleService>(WorkingScheduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
