import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRole } from './entities/auth.entity';
import { User } from './entities/auth.entity';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
import { LoginDto } from './dto/Login.dto';
import { Employee } from './entities/employee.entity';
import { CompanyOwner } from './entities/company_owner.entity';
import { Manager } from './entities/manager.entity';
import { CreateEmployeeDto } from './dto/employee.dto';
import { CreateCompanyOwnerDto } from './dto/company_owner.dto';
import { CreateManagerDto } from './dto/manager.dto';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    @InjectRepository(Employee)
    @InjectRepository(CompanyOwner)
    @InjectRepository(Manager)
    private readonly userRepository: Repository<User>,
    private readonly employeeRepository: Repository<Employee>,
    private readonly companyOwnerRepository: Repository<CompanyOwner>,
    private readonly managerRepository: Repository<Manager>,
    private readonly jwtService: JwtService,
  ) { }


  async create(createAuthDto: CreateAuthDto, extraData: any) {
    const user = this.userRepository.create({
      ...createAuthDto,
      password: await bcrypt.hash(createAuthDto.password, 10),
    });
    await this.userRepository.save(user);

    if (extraData.role === UserRole.EMPLOYEE) {
      const employee = this.employeeRepository.create({
        ...extraData,
        userId: user.id,
      });
      await this.employeeRepository.save(employee);
    }

    else if (extraData.role === UserRole.OWNER) {
      const owner = this.companyOwnerRepository.create({
        ...extraData,
        user,
      });
      await this.companyOwnerRepository.save(owner);
    }

    else if (extraData.role === UserRole.MANAGER) {
      const manager = this.managerRepository.create({
        ...extraData,
        user,
      });
      await this.managerRepository.save(manager);
    }

    return user;
  }


  async createEmployee(createEmployeeDto: CreateEmployeeDto) {
    const employee = this.employeeRepository.create(createEmployeeDto);
    await this.employeeRepository.save(employee);
  }

  async createCompanyOwner(createCompanyOwnerDto: CreateCompanyOwnerDto) {
    createCompanyOwnerDto.user = await this.userRepository.findOne(createCompanyOwnerDto.userId);
    const owner = this.companyOwnerRepository.create(createCompanyOwnerDto);
    await this.companyOwnerRepository.save(owner);
  }

  async createManager(createManagerDto: CreateManagerDto) {
    const manager = this.managerRepository.create(createManagerDto);
    await this.managerRepository.save(manager);
  }


  

  async login(loginDto: LoginDto) {
    const user = await this.userRepository.findOne({
      where: { email: loginDto.email },
      relations: ['employee', 'owner', 'manager'],
    });

    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password)

    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    const payload = { userId: user.id, role: user.role };
    const token = this.jwtService.sign(payload);

    return { token };
  }
      




  

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
