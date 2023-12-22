import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Company } from 'src/modules/company/entities/company.entity';
import { Branch } from 'src/modules/branch/entities/branch.entity';
import { User } from 'src/modules/auth/entities/auth.entity';

@Entity()
export class Announcement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  content: string;

  @ManyToOne(() => Company, company => company.announcements)
  company: Company;

  @ManyToOne(() => Branch, branch => branch.announcements)
  branch: Branch;

  @Column()
  for: string; // Not recommended to use 'for' as column name due to reserved word

  @ManyToOne(() => User, user => user.announcements)
  announcer: User;

  @Column()
  type: string;
}
