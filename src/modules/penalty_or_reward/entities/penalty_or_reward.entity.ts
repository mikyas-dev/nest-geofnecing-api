import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/modules/auth/entities/auth.entity';
import { Branch } from 'src/modules/branch/entities/branch.entity';
import { Company } from 'src/modules/company/entities/company.entity';
import { Employee } from 'src/modules/auth/entities/employee.entity';
import { Manager } from 'src/modules/auth/entities/manager.entity';

enum PenaltyOrRewardType {
  PENALTY = 'penalty',
  REWARD = 'reward',
}

@Entity()
export class PenaltiesOrRewards {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Employee, employee => employee.penaltiesOrRewards)
  employee: Employee;

  @ManyToOne(() => Branch, branch => branch.penaltiesOrRewards)
  branch: Branch;

  @ManyToOne(() => Company, company => company.penaltiesOrRewards)
  company: Company;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  value: number;

  @Column('text')
  reason: string;

  @ManyToOne(() => Manager, manager => manager.penaltiesGiven)
  penalizer: Manager;

  @Column({ type: 'date' })
  date: Date;

  @Column({
    type: 'enum',
    enum: PenaltyOrRewardType,
  })
  type: PenaltyOrRewardType;
}
