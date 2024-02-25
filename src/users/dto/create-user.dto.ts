import { IsEmail, IsString, Matches, MinLength } from "class-validator";

export class createUserDto{
    @IsString({message: 'username must be a string'})
    @MinLength(10,{message: 'Username must be at least 10 characters'})
    readonly fullName: string;

    @IsString({ message: 'Password must be a string' })
    @MinLength(8, { message: 'Password must be at least 8 characters long' })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
    message: 'Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 symbol'})
    readonly password: string;

    @IsEmail()
    readonly email: string;
}