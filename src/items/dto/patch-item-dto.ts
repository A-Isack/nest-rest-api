import { IsNumber, IsOptional, IsString, isNumber } from 'class-validator'

export class patchItemDto {
    @IsString()
    @IsOptional()
    readonly name?: string;
    @IsString()
    @IsOptional()
    readonly description?: string;
    @IsNumber()
    @IsOptional()
    readonly quantity?: number;
}