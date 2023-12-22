import { Attendance } from 'src/modules/attendance/entities/attendance.entity';
import { PenaltiesOrRewards } from 'src/modules/penalty_or_reward/entities/penalty_or_reward.entity';
import { WorkingSchedule } from 'src/modules/working-schedule/entities/working-schedule.entity';
import { Branch } from 'src/modules/branch/entities/branch.entity';
import { Company } from 'src/modules/company/entities/company.entity';
import { Department } from 'src/modules/department/entities/department.entity';
import { User } from 'src/modules/auth/entities/auth.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, OneToOne, ManyToMany } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  salary: number;

  @Column()
  position: string;

  @OneToOne(() => User, user => user.employee)
  user: User;

  @ManyToOne(() => Department, department => department.employees)
  department: Department;

  @ManyToOne(() => Branch, branch => branch.employees)
  branch: Branch;

  @ManyToOne(() => Company, company => company.employees)
  company: Company;

  @Column()
  workingHourPerWeek: string;

  @OneToMany(() => WorkingSchedule, workingSchedule => workingSchedule.employee)
  workingSchedules: WorkingSchedule[];

  @OneToMany(() => PenaltiesOrRewards, penaltyOrReward => penaltyOrReward.employee)
  penaltiesOrRewards: PenaltiesOrRewards[];

  @OneToMany(() => Attendance, attendance => attendance.employee)
  attendances: Attendance[];


}
