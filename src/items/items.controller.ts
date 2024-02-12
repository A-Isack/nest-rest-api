import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { createItemDto } from './dto/create-items.dto';
import { ItemsService } from './items.service';
import { Iitem } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    private readonly itemService: ItemsService
    constructor(){
        this.itemService = new ItemsService
    }
    @Get()
    getAll(): Iitem[] {
        return this.itemService.findAll()
        
    }

    @Get(':id')
    getById(@Param('id') id: string): string {
        console.log(id)
        return `the selected id is ${id}`
    }

    @Post()
    createItem(@Body() body: createItemDto): string {
        console.log(body)
        return 'Item created successfully'
    }

    @Put(':id')
    putItem(@Body() body: createItemDto, @Param('id') itemId: string): { message: string, body: createItemDto } {
        console.log(body)
        console.log('itemId')
        console.log(itemId)
        return { message: `Item ${itemId} updated successfully`, body }
    }

    @Delete(':id')
    deleteItem(@Param('id') itemId: string): string {
        return `Item number ${itemId} deleted successfully `
    }

    @Patch(':id')
    patchItem(@Body() body: createItemDto, @Param('id') itemId: string): { message: string, body: createItemDto } {
        console.log(body)

        console.log('itemId')
        console.log(itemId)

        return { message: `Item ${itemId} patched successfully`, body }
    }
}
