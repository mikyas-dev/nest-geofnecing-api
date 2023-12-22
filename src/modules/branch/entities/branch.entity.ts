import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Company } from 'src/modules/company/entities/company.entity';
import { Employee } from 'src/modules/auth/entities/employee.entity';
import { Announcement } from 'src/modules/announcement/entities/announcement.entity';
import { PenaltiesOrRewards } from 'src/modules/penalty_or_reward/entities/penalty_or_reward.entity';
import { Manager } from 'src/modules/auth/entities/manager.entity';

@Entity()
export class Branch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Company, company => company.branches)
  company: Company;

  @Column({ type: 'decimal', precision: 10, scale: 6 })
  latitude: number;

  @Column({ type: 'decimal', precision: 10, scale: 6 })
  longitude: number;

  @Column()
  address: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  radius: number;

  @ManyToOne(() => Manager, manager => manager.managedBranches)
  manager: Manager;

  @Column({ default: 0 })
  attendanceTimeDelay: number;


  @OneToMany(() => Announcement, announcement => announcement.branch)
  announcements: Announcement[];

  @OneToMany(() => PenaltiesOrRewards, penaltyOrReward => penaltyOrReward.branch)
  penaltiesOrRewards: PenaltiesOrRewards[];

  @OneToMany(() => Employee, employee => employee.branch)
  employees: Employee[];
}
