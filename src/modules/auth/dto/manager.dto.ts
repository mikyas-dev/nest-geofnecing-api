import { IsNotEmpty, IsString } from 'class-validator';

export class CreateManagerDto {
    @IsNotEmpty()
    @IsString()
    userId: string;

    @IsNotEmpty()
    @IsString()
    companyId: string;
}