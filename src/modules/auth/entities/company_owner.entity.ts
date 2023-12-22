import { Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from './auth.entity';
import { Announcement } from '../../announcement/entities/announcement.entity';
import { Company } from '../../company/entities/company.entity';


@Entity()
export class CompanyOwner {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, user => user.owner)
  @JoinColumn()
  user: User;

  @OneToMany(() => Announcement, announcement => announcement.announcer)
  announcements: Announcement[];

  @OneToMany(() => Company, company => company.owner)
  companies: Company[];
}
