import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from './auth.entity';
import { Company } from '../../company/entities/company.entity';
import { PenaltiesOrRewards } from '../../penalty_or_reward/entities/penalty_or_reward.entity';
import { Announcement } from '../../announcement/entities/announcement.entity';
import { Branch } from 'src/modules/branch/entities/branch.entity';


@Entity()
export class Manager {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, user => user.manager)
  @JoinColumn()
  user: User;

  @ManyToOne(() => Company, company => company.branches)
  company: Company;

  @OneToMany(() => PenaltiesOrRewards, penaltyOrReward => penaltyOrReward.penalizer)
  penaltiesGiven: PenaltiesOrRewards[];

  @OneToMany(() => Announcement, announcement => announcement.announcer)
  announcements: Announcement[];

  @OneToMany(() => Branch, branch => branch.manager)
  managedBranches: Branch[];

}
