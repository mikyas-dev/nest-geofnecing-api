import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Employee } from './employee.entity';
import { CompanyOwner } from './company_owner.entity';
import { Manager } from './manager.entity';


export enum UserRole {
  OWNER = 'owner',
  MANAGER = 'manager',
  ADMIN = 'admin',
  EMPLOYEE = 'employee'
}


@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  middleName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole
  })
  role: UserRole;

  @Column()
  location: string;

  @Column({ type: 'date' })
  joiningDate: Date;

  // Relationships
  @OneToOne(() => Employee, employee => employee.user)
  employee: Employee;

  @OneToOne(() => CompanyOwner, owner => owner.user)
  owner: CompanyOwner;

  @OneToOne(() => Manager, manager => manager.user)
  manager: Manager;
}

