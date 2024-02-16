import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { createItemDto } from './dto/create-items.dto';
import { patchItemDto } from './dto/patch-item-dto';
import { ItemsService } from './items.service';
import { Iitem } from './interfaces/item.interface';
import { ObjectId } from 'mongoose';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemService: ItemsService){}
    
    @Get()
    async getAll(): Promise<Iitem[]> {
        return this.itemService.findAll()
    }

    @Get(':id')
    async getById(@Param('id') id: ObjectId): Promise<Iitem> {
        return this.itemService.findOne(id)
    }

    @Post()
    async createItem(@Body() newItemBody: createItemDto): Promise<{message: string, data: Iitem}> {
        const newItem = await this.itemService.create(newItemBody)
        return {message: 'Item created successfully', data: newItem}
    }

    @Put(':id')
    putItem(@Body() body: createItemDto, @Param('id') itemId: string): { message: string, body: createItemDto } {
        return { message: `Item ${itemId} updated successfully`, body }
    }

    @Delete(':id')
    deleteItem(@Param('id') itemId: string): string {
        return `Item number ${itemId} deleted successfully `
    }

    @Patch(':id')
    async patchItem(@Body() body: patchItemDto, @Param('id') itemId: ObjectId): Promise<{ message: string, response: Iitem }> {
        const patchedItemResponse = await this.itemService.patch(itemId, body)
        return { message: `Item ${itemId} patched successfully`, response: patchedItemResponse }
    }
}
