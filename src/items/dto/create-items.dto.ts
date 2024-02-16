import { IsNumber, IsString, MaxLength, isNumber } from 'class-validator'

export class createItemDto {
    // @IsString()
    // readonly id?: string;
    @IsString()
    readonly name: string;
    @IsString()
    readonly description: string;
    @IsNumber()
    readonly quantity: number;
    @IsString()
    @MaxLength(10)
    readonly quality: String;
}