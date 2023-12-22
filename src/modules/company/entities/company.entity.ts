import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Department } from 'src/modules/department/entities/department.entity';
import { Branch } from 'src/modules/branch/entities/branch.entity';
import { Announcement } from 'src/modules/announcement/entities/announcement.entity';
import { PenaltiesOrRewards } from 'src/modules/penalty_or_reward/entities/penalty_or_reward.entity';
import { Employee } from 'src/modules/auth/entities/employee.entity';
import { CompanyOwner } from 'src/modules/auth/entities/company_owner.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  location: string;

  @OneToMany(() => Employee, employee => employee.company)
  employees: Employee[];

  @OneToMany(() => Department, department => department.company)
  departments: Department[];

  @OneToMany(() => Branch, branch => branch.company)
  branches: Branch[];

  @OneToMany(() => Announcement, announcement => announcement.company)
  announcements: Announcement[];

  @OneToMany(() => PenaltiesOrRewards, penaltyOrReward => penaltyOrReward.company)
    penaltiesOrRewards: PenaltiesOrRewards[];

  @ManyToOne(() => CompanyOwner, companyOwner => companyOwner.companies)
  owner: CompanyOwner;
}
