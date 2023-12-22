import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Attendance } from '../attendance/entities/attendance.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Announcement } from '../announcement/entities/announcement.entity';
import { User } from './entities/auth.entity';
import { Branch } from '../branch/entities/branch.entity';
import { Department } from '../department/entities/department.entity';
import { PenaltiesOrRewards } from '../penalty_or_reward/entities/penalty_or_reward.entity';
import { Company } from '../company/entities/company.entity';
import { WorkingSchedule } from '../working-schedule/entities/working-schedule.entity';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    TypeOrmModule.forFeature([
      User,
      Attendance,
      Announcement,
      Branch,
      Department,
      PenaltiesOrRewards,
      Company,
      WorkingSchedule,
    ]),
  ],
})
export class AuthModule {}
