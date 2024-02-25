import { IsEmail, IsOptional, IsString, Matches, MinLength } from "class-validator";

export class patcheUserDto{
    @IsString({message: 'username must be a string'})
    @MinLength(10,{message: 'Username must be at least 10 characters'})
    @IsOptional()
    readonly fullName: string;

    @IsString({ message: 'Password must be a string' })
    @MinLength(8, { message: 'Password must be at least 8 characters long' })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
        message: 'Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 symbol'
    })
    @IsOptional()
    readonly password: string;

    @IsEmail()
    @IsOptional()
    readonly email: string;
}