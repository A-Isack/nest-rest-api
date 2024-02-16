import { IsNumber, IsString, isNumber } from 'class-validator'

export class createItemDto {
    // @IsString()
    // readonly id?: string;
    @IsString()
    readonly name: string;
    @IsString()
    readonly description: string;
    @IsNumber()
    readonly quantity: number;
}