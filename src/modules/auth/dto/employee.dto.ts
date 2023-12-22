import { IsNotEmpty, IsString, IsNumber, IsDecimal, Min, Max } from 'class-validator';

export class CreateEmployeeDto {
    @IsNotEmpty()
    @IsDecimal()
    @Min(0)
    @Max(1000000)
    salary: number;

    @IsNotEmpty()
    @IsString()
    position: string;

    @IsNotEmpty()
    @IsString()
    userId: string;

    @IsNotEmpty()
    @IsString()
    departmentId: string;

    @IsNotEmpty()
    @IsString()
    branchId: string;

    @IsNotEmpty()
    @IsString()
    companyId: string;

    @IsNotEmpty()
    @IsString()
    workingHourPerWeek: string;
}