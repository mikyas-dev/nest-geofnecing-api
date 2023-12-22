import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWorkingScheduleDto } from './dto/create-working-schedule.dto';
import { UpdateWorkingScheduleDto } from './dto/update-working-schedule.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkingSchedule } from './entities/working-schedule.entity';

@Injectable()
export class WorkingScheduleService {
  constructor(
    @InjectRepository(WorkingSchedule)
    private readonly workingScheduleRepository: Repository<WorkingSchedule>,
  ) { }
  async create(createWorkingScheduleDto: CreateWorkingScheduleDto) {
    const workingSchedule = this.workingScheduleRepository.create(
      createWorkingScheduleDto,
    );
    await this.workingScheduleRepository.save(workingSchedule);
    return workingSchedule;
  }

  async findAll() {
    return await this.workingScheduleRepository.find();
  }

  async findOne(id: string) {
    const workingSchedule = await this.findOne(id);
    if (!workingSchedule) {
      throw new NotFoundException(`WorkingSchedule with ID ${id} not found`);
    }
    return workingSchedule;
  }

  async update(id: string, updateWorkingScheduleDto: UpdateWorkingScheduleDto) {
    const workingSchedule = await this.workingScheduleRepository.preload({
      id,
      ...updateWorkingScheduleDto,
    });
    if (!workingSchedule) {
      throw new NotFoundException(`WorkingSchedule with ID ${id} not found`);
    }
    return await this.workingScheduleRepository.save(workingSchedule);
  }

  async remove(id: string) {
    const workingSchedule = await this.findOne(id);
    return await this.workingScheduleRepository.remove(workingSchedule);
  }


}
