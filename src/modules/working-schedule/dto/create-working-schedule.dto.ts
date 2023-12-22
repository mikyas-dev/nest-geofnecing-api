import { IsNotEmpty, IsString, IsIn, IsMilitaryTime } from 'class-validator';

export class CreateWorkingScheduleDto {
    @IsNotEmpty()
    @IsString()
    @IsIn(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
    weekDay: string;

    @IsNotEmpty()
    @IsString()
    shift: string;

    @IsNotEmpty()
    @IsMilitaryTime()
    startTime: string;

    @IsNotEmpty()
    @IsMilitaryTime()
    endTime: string;

    @IsNotEmpty()
    employeeId: number;
}
