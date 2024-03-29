import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UseInterceptors } from '@nestjs/common';
import { createItemDto } from './dto/create-items.dto';
import { patchItemDto } from './dto/patch-item-dto';
import { ItemsService } from './items.service';
import { Iitem } from './interfaces/item.interface';
import { ObjectId } from 'mongoose';
import { serviceResponse } from 'src/common/interfaces/response.interfaces';
import { Serialize, SerializeInterceptor , DoNotHandleThisInterceptor } from 'src/interceptors/serialize.interceptors';
import { itemDto } from 'src/items/dto/item.dto' // will use it's expose properties to view/hide properties in the items data responses.

@Controller('items')
export class ItemsController {
    constructor(private readonly itemService: ItemsService){}

    @Get()
    @Serialize(itemDto) // Or : ===> @UseInterceptors(new SerializeInterceptor(itemDto))
    getAllItems(): Promise<Iitem[]>{
        return this.itemService.findAll()
    }

    @UseInterceptors(new DoNotHandleThisInterceptor)
    @Get(':id')
    getById(@Param('id') id: ObjectId): Promise<Iitem> {
        return this.itemService.findOne(id)
    }

    @Post()
    async createItem(@Body() newItemBody: createItemDto): Promise<serviceResponse<Iitem>> {
        const newItem = await this.itemService.create(newItemBody)
        return {code: newItem.code, data: newItem.data, message: newItem.message}
    }
    
    @Put(':id')
    async putItem(@Body() body: createItemDto, @Param('id') itemId: ObjectId): Promise<serviceResponse<Iitem>> {
        const updatedItem = await this.itemService.put(itemId, body)
        return {code: updatedItem.code, data: updatedItem.data, message: updatedItem.message}
    }
    
    @Delete(':id')
    async deleteItem(@Param('id') itemId: ObjectId): Promise<serviceResponse<Iitem>> {
        const deletedItem = await this.itemService.delete(itemId)
        return {code: deletedItem.code, data: deletedItem.data, message: deletedItem.message}
    }
    
    @Patch(':id')
    async patchItem(@Body() body: patchItemDto, @Param('id') itemId: ObjectId): Promise<serviceResponse<Iitem>> {
        const patchedItemResponse = await this.itemService.patch(itemId, body)
        return {code: patchedItemResponse.code, data: patchedItemResponse.data, message: patchedItemResponse.message}
    }
}
