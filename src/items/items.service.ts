import { Injectable } from '@nestjs/common';
import { Iitem } from './interfaces/item.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { createItemDto } from './dto/create-items.dto';
@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly ItemModel: Model<Iitem>){}
    // private readonly items: Iitem[] = [
    //     {
    //         id: 324324234,
    //         name: 'Item 1',
    //         description: 'item1  desc',
    //         qty: 45
    //     },
    //     {
    //         id: 345345,
    //         name: 'Item 2',
    //         description: 'item2  desc',
    //         qty: 23
    //     },
    //     {
    //         id: 5758768,
    //         name: 'Item 3',
    //         description: 'item3  desc',
    //         qty: 122
    //     },
        
    // ];

    async findAll():Promise<Iitem[]>{
        return this.ItemModel.find().exec()
    }

    async findOne(id: ObjectId): Promise<Iitem>{
        return this.ItemModel.findById(id)
    }

    async create(item: Iitem): Promise<Iitem>{
        const newItem = (await this.ItemModel.create(item)).save()
        return newItem
    }
    async put(id: ObjectId, data: createItemDto): Promise<Iitem>{
        const updatedItem = await this.ItemModel.findByIdAndUpdate(id, data)
        return updatedItem
    }
    async patch(id: ObjectId, data: Iitem): Promise<Iitem>{
        const updatedItem = await this.ItemModel.findByIdAndUpdate(id, data).exec()
        return updatedItem
    }
    async delete(id: ObjectId): Promise<Iitem>{
        const ItemToDelete = await this.ItemModel.findByIdAndDelete(id)
        return ItemToDelete
    }
    
}
