import { IsEmail, IsString, Length } from 'class-validator';
export class LoginDto {
    @IsString()
    username: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @Length(6, 20)
    password: string;
}
