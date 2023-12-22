import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Company } from 'src/modules/company/entities/company.entity';
import { Employee } from 'src/modules/auth/entities/employee.entity';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Company, company => company.departments)
  company: Company;

  @OneToMany(() => Employee, employee => employee.department)
  employees: Employee[];
}
