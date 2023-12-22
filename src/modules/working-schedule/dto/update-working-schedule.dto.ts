import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkingScheduleDto } from './create-working-schedule.dto';

export class UpdateWorkingScheduleDto extends PartialType(CreateWorkingScheduleDto) {}
