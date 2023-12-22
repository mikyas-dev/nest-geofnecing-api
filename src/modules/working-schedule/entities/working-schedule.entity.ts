import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Employee } from 'src/modules/auth/entities/employee.entity';

@Entity()
export class WorkingSchedule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  weekDay: string;

  @Column()
  shift: string;

  @Column({ type: 'time' })
  startTime: string;

  @Column({ type: 'time' })
  endTime: string;

  @ManyToOne(() => Employee, employee => employee.workingSchedules)
  employee: Employee;
}
